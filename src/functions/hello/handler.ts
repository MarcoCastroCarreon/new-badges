import 'source-map-support/register';

import type { ValidatedEventAPIGatewayProxyEvent } from '@libs/apiGateway';
import schema from './schema';
import middy from '@middy/core';
import parseEventBody from '@libs/parseEventBody';
import { Response } from '@libs/responseApiGateway';
import { HttpStatus } from '@common/http-status';

const hello: ValidatedEventAPIGatewayProxyEvent<typeof schema> = async (event) => {
  return new Response(event.body, HttpStatus.OK);
}

export const main = middy(hello).use(parseEventBody);
