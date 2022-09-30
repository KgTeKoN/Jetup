const axios = require('axios');
const cheerio = require('cheerio');
const {
  urlTeam,
  employeesClassName,
  tagNames,
  tagPosition,
  tagEssay,
} = require('../../config');
const { signUpValidator } = require('./validate.inputData');
const parseSite = async () => {
  const getHTML = async (url) => {
    const { data } = await axios.get(url);
    return cheerio.load(data);
  };
  const result = [];
  const selector = await getHTML(urlTeam);
  selector(employeesClassName).each((index, element) => {
    const name = selector(element).find(tagNames).text();
    const position = selector(element).find(tagPosition).text();
    const dirtyEssay = selector(element).find(tagEssay).text();
    const essay = dirtyEssay.slice(1, dirtyEssay.length - 1);
    const employeeData = {
      name: name,
      position: position,
      essay: essay,
    };
    if (signUpValidator(employeeData)) {
      result.push(employeeData);
    }
  });
  return result;
};

module.exports = { parseSite };
