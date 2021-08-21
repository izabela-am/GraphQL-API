import ora from 'ora';
import { buildSchema } from 'type-graphql';
import { ApolloServer } from 'apollo-server';

import SongResolver from '@resolvers/SongResolver';

async function bootstrap() {
  const schema = await buildSchema({
    resolvers: [ SongResolver ]
  });

  const server = new ApolloServer({
    schema
  });

  server.listen(3333, () => {
    ora('🌈 Server running on port 3333').succeed();
  });
}

bootstrap();
