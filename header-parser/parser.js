module.exports = {
  parse: function(req, res) {
    const header = {
      ipaddress: req.headers["x-forwarded-for"] || req.connection.remoteAddress.split(',')[0],
      language: req.headers["accept-language"].split(',')[0],
      software: req.headers["user-agent"].match(/\((.+?)\)/)[1]
    };
    res.send(header);
  }
};
