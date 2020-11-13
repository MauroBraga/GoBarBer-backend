# Primeiro Projeto Node

    . criar o projeto node:
        -> yarn init -Y
    . Adiciona o typescript como depedencia de desenvolvimento
        -> yarn add typescript -D
    . Comando para gerar o tsconfig
        -> yarn tsc --init

    . Descomentar no tsc config
        ->"outDir": "./dis",                        /* Redirect output structure to the directory. */
        -> "rootDir": "./src",                       /* Specify the root directory of input files. Use to control the output directory structure with --outDir. */

    . Ao executar o comando yarn tsc a pasta dist vai ser criada
        -> yarn tsc

    . Toda vez que aparecer um erro no arquivo typescript do tipo  da variavél , adicionar o type dela
        -> yarn add @types/express -D

    . Substitui o nodeman.
        -> yarn add ts-node-dev -D

# Padrões de Projeto com Eslint, Prettier e Editor Config
    . https://www.notion.so/Padr-es-de-projeto-com-ESLint-Prettier-e-EditorConfig-0b57b47a24724c859c0cf226aa0cc3a7#d154b50637114fa3a9e6db072e06b018


yarn add @typescript-eslint/eslint-plugin@latest eslint-config-airbnb-base@latest eslint-plugin-import@^2.21.2 @typescript-eslint/parser@latest -D

 add --inspect para debugar
 ts-node-dev --inspect --ignore-watch node_modules src/server.ts


# SOLID
    . Sigle Responsability Principle
    . Dependecy Invertion Principle


# Estratégias de banco de dados
    -> Drive nativo do banco de dados
    -> Query Buielder (Construir as querys com javascript)
        Exemplo: Knex
    -> ORM (Objeto Relational Map) : Mapear registros da nossa tabela com objetos no java script
        Exemplos: sequelize, typeorm(excelente com o uso do type script)
        . Fornece abstração do banco, é indifirente o banco que está sendo usado.
# Docker
    -> Criação de ambientes isolados (container)
    -> Containers expõe portas para comunicação

    Principais conceitos
        . Imagem -> são tecnologias q podemos colocar em um container
        . Container -> instanceas das imagens
        . Docker Registry (Docker hub)
        . Docker files
            - Receita de uma imagem

# TypeORM
    - yarn add typeorm
    - yarn pg  (Diver do banco de dados que no caso é o postgres)
    - criar ormconfig.json
    - criar a pasta database
    - Dentro do arquivo ormconfig adicionar as configurações do migration

    - Criar Arquivo
        . yarn typeorm migration:create -n CreateAppointments
    - Executa migrations
        . yarn typeorm migration:run
    - Desfazer
        . yarn typeorm migration:revert
    - Show Migrations q já foram executadas
      . yarn typeorm migration:show

    - Mapeamento da Entidade (Hablita usar o decorater)
        . No arquivo tsconfig habilitar
            "experimentalDecorators": true,        /* Enables experimental support for ES7  decorators. */
            "emitDecoratorMetadata": true,         /* Enables experimental support for emitting type metadata for decorators. */

    - Desabilitar a propriedade a baixo para não precisar inicializar uma variavel
        . "strictPropertyInitialization": false,


lsof -i :3333
