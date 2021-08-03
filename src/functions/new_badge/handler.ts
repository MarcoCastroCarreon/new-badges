import 'source-map-support/register';
import middy from '@middy/core';

import type { ValidatedEventAPIGatewayProxyEvent } from '@libs/apiGateway';

import schema from './schema';
import { Response } from '@libs/responseApiGateway';
import { HttpStatus } from '@common/http-status';
import parseEventBody from '@libs/parseEventBody';

const newBadge: ValidatedEventAPIGatewayProxyEvent<typeof schema> = async (event) => {
  return new Response(event.body, HttpStatus.OK);
}

export const main = middy(newBadge).use(parseEventBody);
