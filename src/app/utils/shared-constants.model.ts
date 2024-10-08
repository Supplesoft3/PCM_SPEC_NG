export class UrlManager {
  private moduleUrls: any = {
    RELEASE : 'release',
    CDS : 'cds',
    MSP : 'msp',
    HCR : 'hcr',
    DRR : 'drr'
  };

  private pageUrls: any = {
    /* Module Release urls */
    MY_QUEUE: 'release/myqueue',
    START_RELEASE: 'release/start-release',
    FEDEBOM_PLACEHOLDER_RELEASE: 'release/fedebom-placeholder-release',
    START_RELEASE_REQUEST: 'release/start-release-request',

    /* Lookup Release urls */
    CONCERN_NOTICE: 'release/concern-notice',
    ADVANCED_SEARCH: 'release/advanced-search',

    /* Output Release urls */
    XML: 'release/xml',
    PRISM_INPUT: 'release/prism-input',
    FORD_IVS_CALIBRATION_DOWNLOAD: 'release/ford-ivs-calibration-download',
    FORD_PROGRAM_REPORT: 'release/ford-program-report',
    COORDINATED_MODULE_MATRIX: 'release/coordinated-module-matrix',
    WERS_POWER_SELECT_TABLE: 'release/wers-power-select-table',
    SOFTWARE_DRAWING: 'release/software-drawing',

    /* Procedures Release urls */
    CALIBRATION_ENGINEER: 'release/calibration-engineer',
    RELEASE_ENGINEER: 'release/release-engineer',
    SOFTWARE_RELEASE_ANALYST: 'release/software_release_analyst',
    REQUEST_NEW_MAIN_MICRO_TYPE: 'release/request-new-main-micro-type',
    ADD_NEW_PART_II_OR_PDX: 'release/add-new-part-II-or-pdx',
    ADD_NEW_PBL: 'release/add-new-pbl',
    ADD_NEW_SBL: 'release/add-new-sbl',

    /* Help Release urls */
    USER_ENROLLMNET: 'release/user-enrollment',
    BULK_MAIL_GUIDE: 'release/bulk-mail-guide',
    PROCESS_OWNERS: 'release/process-owners',
    GPCSE_MODULE_RELEASE_PROCESS: 'release/gpcse-module-release-process',
    FIRMWARE_DESCRIPTION_AND_OWNERS: 'release/firmware-description-and-owners',
    JIRA_SERVICE_DESK: 'release/jira-service-desk',

    /* Supplier Request Release urls */
    SUPPLIER_USER_ENROLLMNET: 'release/user-enrollment',
    SUPPLIER_CALIBRATION_DOWNLOAD: 'release/supplier-calibration-download',
    SUPPLIER_IVS_CALIBRATION_DOWNLOAD:
      'release/supplier-ivs-calibration-download',

    /* Administrative Release urls */
    FIRMWARE_DATABASE_ADMINISTRATION:
      'release/firmware-database-administration',
    MODULE_RELEASE_SHAREPOINT: 'release/module-release-sharepoint',
  };

  constructor() {}

  private readKey(obj: any, path: string, defaultReturn: any) {
    if (defaultReturn == null || typeof defaultReturn == 'undefined') {
      defaultReturn = null;
    }

    try {
      if (obj === void 0 || obj === null) obj = self ? self : this;
      if (typeof path !== 'string') path = '' + path;
      var c = '',
        pc,
        i = 0,
        n = path.length,
        name = '';
      if (n)
        while (i <= n)
          (c = path[i++]) == '.' || c == '[' || c == ']' || c == void 0
            ? (name
                ? ((obj = obj[name]), (name = ''))
                : pc == '.' || pc == '[' || (pc == ']' && c == ']')
                ? (i = n + 2)
                : void 0,
              (pc = c))
            : (name += c);
      if (i == n + 2) {
        return defaultReturn;
      }
      if (typeof obj == 'undefined') {
        return defaultReturn;
      } else {
        return obj;
      }
    } catch (e) {
      return defaultReturn;
    }
  }

  private replacePlaceHoldersWithValue(source: string, params: any) {
    for (let i in params) {
      //
      source = source.replace(new RegExp('\\:' + i + '', 'g'), params[i]);
    }
    return source;
  }

  private getPath(
    urlName: string,
    placeHolderValues: any = null,
    returnPathFrom = 'page'
  ) {
    let theUrl = "";
    if(returnPathFrom === "page"){
        theUrl = '/' + this.readKey(this.pageUrls, urlName.toUpperCase(), '/');
    }else if(returnPathFrom === "module"){
        theUrl = '/' + this.readKey(this.moduleUrls, urlName.toUpperCase(), '/');
    }
    if (theUrl != '/') theUrl = '/' + theUrl;
    if (placeHolderValues != null) {
      theUrl = this.replacePlaceHoldersWithValue(theUrl, placeHolderValues);
    }
    return theUrl;
  }

  getUrl(urlName: string, placeHolderValues: any = null) {
    const exactPath = this.getPath(urlName, placeHolderValues, 'page');
    return exactPath;
  }

  getModuleUrl(urlName: string, placeHolderValues: any = null) {
    const exactPath = this.getPath(urlName, placeHolderValues, 'module');
    return exactPath;
  }
}
