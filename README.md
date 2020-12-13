# Recuperação de senha
    **RF**
        - O usuário deve poder recuperar sua senha informando o seu e-mail
        - O usuário deve receber um e-mail com instruções de recuperação de senha;
        - O usuário deve poder resetar sua senha.

    **RNF**
        - Utilizar Maitrap para testar envios de Email.
        - Utilizar Amazon SES para envios em produção.
        - O envio de e-mails deve acontecer em segundo plano (background job).

    **RN**
        - O link enviado por email para resetar senha, deve expirar em 2h.
        - O usuário precisa confirmar a nova senha ao resetar sua senha;

# Atulaização do perfil
    **RF**
        - O usuário deve poder atualizar seu nome, email e senha
    **RN**
        - O usuárii não pode alterar seu email para uma email já utilizado pelo usuário
        - Para atualizar sua senha, o usuário deve informar senha antiga
        - Paa atualizar sua senha, o usuário precisa confirmar a nova senha


# Painel do Prestador
    **RF**
        - O usuário deve poder listar  seus agendamentos de um dia específico;
        - O prestador deve receber uma notificação sempre houver um novo agendamento;
        - O prestador deve poder visualizar as notificações não lidas;
    **RNF**
        - Os agendamentos do prestador no dia devem ser armazenados em cache
        - As notificações do prestador devem ser mazenadas no MongoDB;
        - As notificações do prestador devem ser enviadas em tempo-real utilizando Socket.io;
    **RN**
        - A notificação deve ter um status de lida ou não lida para que o prestador possa controlar

# Agendamento
    **RF**
        - O usuário deve pode listar todos prestadores de serviço cadastrados;
        - O usuário deve pode listar os dias de um mês com pelo menos um horário disponível de um prestador;
        - O usuário deve poder listar horários disponíveis em um dia específico de um prestador;
        - O usuário deve poder realizar um novo agendamento com um prestador;

    **RNF**
        - A listagem de prestadores deve ser armazenada em cache;

    **RN**
        - Cada agendamento deve durar 1h exatamente
        - Os agendamentos devem estar disponíveis entre 8h às 18h (Primeiro às 8h, último as 17h)
        - O usuário não pode agendar em um horário já ocupado;
        - O usuário não pode agendar em um horário que já passou;
        - O usuário não pode agenar serviços consigo mesmo;



# Legendas
lsof -i :3333

* RF  -> Requisitos Funcionais
* RNF -> Requisitos Não Funcionais
* RN  -> Regras de Negócio
