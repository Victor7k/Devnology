# Devnology

Fiz uma API bem simples e puramente em backend usando o Node com o Express e o Cors.
No linkController exportei separadamente cada requisição, dando um titulo com um link ao lado pra todas elas.
O linkRoute importa o linkController e nele gerei uma rota para cada requisição, sendo que no Get botei tanto sem Id quanto com Id, e exportei para o index.js.
O index.js tanto importa o linkRoute quanto também o exporta para o server.js para que assim possa ser executado e chamado pela porta.
