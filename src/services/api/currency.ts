import Client from './client'
import urlJoin from 'url-join'
import { Observable } from 'rxjs'
import { AjaxResponse } from 'rxjs/ajax'

export default class extends Client {
  getCurrentBtcPrice(): Observable<AjaxResponse> {
    return this.get(urlJoin(this.baseUrl, 'currentprice'))
  }
}
