// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import { IncomingMessage, ServerResponse } from "http";

export default (req, res) => {

  var _data = { name: 'John Doe' };
  if (req.method === 'POST') {
    res.status(200).json({ type: 'POST', _data })
  } else {
    res.status(200).json({ type: 'GET', _data })
  }
}
