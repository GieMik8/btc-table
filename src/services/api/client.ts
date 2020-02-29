import { of, throwError, Observable } from 'rxjs'
import { ajax, AjaxRequest, AjaxError, AjaxResponse } from 'rxjs/ajax'
import { mergeMap, catchError } from 'rxjs/operators'
import _ from 'lodash'
import queryString from 'query-string'
import urljoin from 'url-join'
import { StringifyOptions } from 'querystring'

export default class Client {
  defaultHeaders = {
    'Content-Type': 'application/json',
  }

  makeRequest = (options: string | AjaxRequest): Observable<AjaxResponse> =>
    ajax(options).pipe(
      mergeMap(obj => of(obj)),
      catchError((err: AjaxError) => {
        console.log(err)
        let data: { message: string; status?: number } = {
          message: err.message || 'Check your network connection',
        }

        if (err.response) {
          if (typeof err.response === 'string') {
            data = { message: err.response, status: err.status }
          } else {
            data = { ...err.response, status: err.status }
          }
        }

        if (typeof data.message === 'object') {
          data.message = '[Error] - check error message'
        }

        return throwError(data)
      }),
    )

  get = (url: string, params?: StringifyOptions, headers = {}): Observable<AjaxResponse> => {
    let targetUrl = url
    if (params) {
      targetUrl = _.isPlainObject(params) ? urljoin(url, `?${queryString.stringify(params)}`) : url
    }

    return this.makeRequest({
      method: 'GET',
      url: targetUrl,
      headers: _.merge({}, this.defaultHeaders, headers),
    })
  }
}
