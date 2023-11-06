// TODO: configure to actual server
const DOMAIN: string = 'http://localhost:4000';

export class GoogleSpreadsheetService {
  static async getSpreadsheet<T>(sheetId: string, sheetIndex: number): Promise<T> {
    return fetch(`${DOMAIN}/sheets/${sheetId}/sheetIndex/${sheetIndex}/rows`).then((res) => res.json());
  }
}
