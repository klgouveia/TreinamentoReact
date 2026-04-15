import { afterEach, describe, it, expect, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import AppForm from './AppForm';
import { PacienteProvider } from '../../contexts/PacienteContext';
import * as PacienteContextModule from '../../contexts/PacienteContext';

function renderWithProvider(ui) {
  return render(<PacienteProvider>{ui}</PacienteProvider>);
}

describe('AppForm', () => {
  it('deve renderizar os campos de carteirinha e senha', () => {
    renderWithProvider(<AppForm />);

    expect(screen.getByPlaceholderText('Digite sua carteirinha')).toBeInTheDocument();
    expect(screen.getByPlaceholderText('Digite sua senha')).toBeInTheDocument();
  });

  it('deve renderizar o botao Entrar', () => {
    renderWithProvider(<AppForm />);

    expect(screen.getByRole('button', { name: /entrar/i })).toBeInTheDocument();
  });

  it('deve atualizar os campos ao digitar', async () => {
    const user = userEvent.setup();
    renderWithProvider(<AppForm />);

    const campoCarteirinha = screen.getByPlaceholderText('Digite sua carteirinha');
    const campoSenha = screen.getByPlaceholderText('Digite sua senha');

    await user.type(campoCarteirinha, '0089234000012');
    await user.type(campoSenha, '123456');

    expect(campoCarteirinha).toHaveValue('0089234000012');
    expect(campoSenha).toHaveValue('123456');
  });

  it('nao deve exibir mensagem de erro no estado inicial', () => {
    renderWithProvider(<AppForm />);

    expect(screen.queryByText(/falha no login/i)).not.toBeInTheDocument();
  });
});

describe('AppForm - cenario de erro', () => {
  afterEach(() => {
    vi.restoreAllMocks();
  });

  it('deve exibir mensagem de erro e chamar login ao enviar', async () => {
    const loginMock = vi.fn();

    vi.spyOn(PacienteContextModule, 'usePaciente').mockReturnValue({
      login: loginMock,
      error: 'Falha no login. Verifique suas credenciais e tente novamente.',
    });

    const user = userEvent.setup();
    render(<AppForm />);

    await user.type(screen.getByPlaceholderText('Digite sua carteirinha'), '0089234000012');
    await user.type(screen.getByPlaceholderText('Digite sua senha'), '123456');
    await user.click(screen.getByRole('button', { name: /entrar/i }));

    expect(loginMock).toHaveBeenCalledWith('0089234000012', '123456');
    expect(
      screen.getByText('Falha no login. Verifique suas credenciais e tente novamente.')
    ).toBeInTheDocument();
  });
});
