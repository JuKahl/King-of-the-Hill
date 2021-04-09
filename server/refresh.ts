import { result } from "../logic/result";

export function startRefreshInterval() {
  setInterval(function () {
    result();
  }, 21600000);
}
