import Client from './client'
import urlJoin from 'url-join'
import { Observable } from 'rxjs'
import { AjaxResponse } from 'rxjs/ajax'

export default class extends Client {
  baseUrl: string
  constructor(baseUrl: string) {
    super()
    this.baseUrl = baseUrl
  }

  getApiVersion(): Observable<AjaxResponse> {
    return this.get(urlJoin(this.baseUrl, 'version'))
  }
}
