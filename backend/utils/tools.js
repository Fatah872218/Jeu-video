function toSQL(dict) {
  let sqlStr = "";
  for (let key in dict) {
    sqlStr += `${key} = "${dict[key]} " `; 
  }
  return sqlStr.length ? sqlStr.slice(0, -1) : "";
}

module.exports = toSQL;
