import { TYPE_ERR, TYPE_LOG, TYPE_WARN } from "../constant.js";
function logger(log, type = TYPE_LOG) {
  console[type](log);
}

export default logger;
