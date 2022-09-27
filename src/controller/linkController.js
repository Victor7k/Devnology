exports.post = (req, res, next) => {
    res.status(201).send(`Link POST --> 'https://www.google.com/'`);
 };
  
 exports.put = (req, res, next) => {
    res.status(201).send(`Link PUT --> ${'https://www.google.com/'}`);
 };
  
 exports.delete = (req, res, next) => {
    res.status(200).send(`Link DELETE --> ${'https://www.google.com/'}`);
 };
  
 exports.get = (req, res, next) => {
    res.status(200).send(`Link GET --> 'https://www.google.com/'`);
 };
  
 exports.getById = (req, res, next) => {
    res.status(200).send(`Link GET com ID! --> 'https://www.google.com/'`);
 };