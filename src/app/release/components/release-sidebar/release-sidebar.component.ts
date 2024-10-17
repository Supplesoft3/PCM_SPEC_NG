import { Component } from '@angular/core';
import { ReleaseSideBarMenuModel } from '../../utils/models/release-sidebar.model';
import { Router } from '@angular/router';
import { UrlManager } from '../../../utils/shared-constants.model';

@Component({
  selector: 'app-release-sidebar',
  templateUrl: './release-sidebar.component.html',
  styleUrl: './release-sidebar.component.scss',
})
export class ReleaseSidebarComponent {
  urlMngr: UrlManager;
  constructor(private router: Router) {
    this.urlMngr = new UrlManager();
  }

  MENU_ITEMS: Array<ReleaseSideBarMenuModel> = [
    {
      id: 'module_release',
      name: 'Module Release',
      url: '',
      iconName: 'cubes',
      children: [
        {
          id: 'my_queue',
          name: 'My Queue',
          url: 'MY_QUEUE',
        },
        {
          id: 'start_release',
          name: 'Start Release',
          url: 'START_RELEASE',
        },
        {
          id: 'fedebom_place_holder_release',
          name: 'FEDEBOM Placeholder Release',
          url: 'FEDEBOM_PLACEHOLDER_RELEASE',
        },
        {
          id: 'start_release_request',
          name: 'Start Release Request',
          url: 'START_RELEASE_REQUEST',
        },
      ],
    },
    {
      id: 'lookup_release_info',
      name: 'Lookup Release Info',
      url: '',
      iconName: 'eye',
      children: [
        {
          id: 'concern_notice',
          name: 'Concern / Notice',
          url: 'CONCERN_NOTICE',
        },
        {
          id: 'advanced_search',
          name: 'Advanced Search',
          url: 'ADVANCED_SEARCH',
        },
      ],
    },
    {
      id: 'output_release_info',
      name: 'Output Release Info',
      url: '',
      iconName: 'random',
      children: [
        {
          id: 'xml',
          name: 'XML',
          url: 'XML',
        },
        {
          id: 'prism_input',
          name: 'Prism Input',
          url: 'PRISM_INPUT',
        },
        {
          id: 'ford-ivs-calibration-download',
          name: 'Ford IVS Calibration Download',
          url: 'FORD_IVS_CALIBRATION_DOWNLOAD',
        },
        {
          id: 'ford-program-report',
          name: 'Ford Program Report',
          url: 'FORD_PROGRAM_REPORT',
        },
        {
          id: 'coordinated-module-matrix',
          name: 'Coordinated Module Matrix',
          url: 'COORDINATED_MODULE_MATRIX',
        },
        {
          id: 'wers-power-select-table',
          name: 'WERS Power Select Table',
          url: 'WERS_POWER_SELECT_TABLE',
        },
        {
          id: 'software-drawing',
          name: 'Software Drawing',
          url: 'SOFTWARE_DRAWING',
        },
      ],
    },

    {
      id: 'procedures',
      name: 'Procedures',
      url: '',
      iconName: 'line-chart',
      children: [
        {
          id: 'calbration_engineer',
          name: 'Calibration Engineer',
          url: 'CALIBRATION_ENGINEER',
        },
        {
          id: 'release_engineer',
          name: 'Release Engineer',
          url: 'RELEASE_ENGINEER',
        },
        {
          id: 'software_release_analyst',
          name: 'Software Release Anayst',
          url: 'SOFTWARE_RELEASE_ANALYST',
        },
        {
          id: 'request_new_main_micro_type',
          name: 'Request New Main Micro Type',
          url: 'REQUEST_NEW_MAIN_MICRO_TYPE',
        },
        {
          id: 'add_new_part_II_or_pdx',
          name: 'Add New Part-II or Pdx',
          url: 'ADD_NEW_PART_II_OR_PDX',
        },
        {
          id: 'add_new_bpl',
          name: 'Add New PBL',
          url: 'ADD_NEW_PBL',
        },
        {
          id: 'add_new_sbl',
          name: 'Add New SBL',
          url: 'ADD_NEW_SBL',
        },
      ],
    },

    {
      id: 'help',
      name: 'Help',
      url: '',
      iconName: 'info-circle',
      children: [
        {
          id: 'user_enrollment',
          name: 'User Enrollment',
          url: 'USER_ENROLLMNET',
        },
        {
          id: 'bulk_mall_guide',
          name: 'Bulk Mall Guide',
          url: 'BULK_MAIL_GUIDE',
        },
        {
          id: 'process_owners',
          name: 'Process Owners',
          url: 'PROCESS_OWNERS',
        },
        {
          id: 'gpcse_module_release_process',
          name: 'Gpcse Module Release Process',
          url: 'GPCSE_MODULE_RELEASE_PROCESS',
        },
        {
          id: 'firmware_descriptions_and_owners',
          name: 'Firmware Descriptions And Owners',
          url: 'FIRMWARE_DESCRIPTION_AND_OWNERS',
        },
        {
          id: 'jira_service_desk',
          name: 'Jira Service Desk',
          url: 'JIRA_SERVICE_DESK',
        },
      ],
    },
    {
      id: 'supplier_request',
      name: 'supplier request',
      url: '',
      iconName: 'user-plus',
      children: [
        {
          id: 'supplier_user_enrollment',
          name: 'Supplier User Enrollment',
          url: 'SUPPLIER_USER_ENROLLMNET',
        },
        {
          id: 'supplier_calibration_download',
          name: 'Supplier Calibration Download',
          url: 'SUPPLIER_CALIBRATION_DOWNLOAD',
        },
        {
          id: 'supplier_ivs_calibration_download',
          name: 'Supplier Ivs Calibration Download',
          url: 'SUPPLIER_IVS_CALIBRATION_DOWNLOAD',
        },
      ],
    },
    {
      id: 'administrative',
      name: 'Adminstrative',
      url: '',
      iconName: 'cogs',
      children: [
        {
          id: 'firmware_database_administration',
          name: 'Firmware Database Administration',
          url: 'FIRMWARE_DATABASE_ADMINISTRATION',
        },
        {
          id: 'module_release_sharepoint',
          name: 'Module Release Sharepoint',
          url: 'MODULE_RELEASE_SHAREPOINT',
        },
      ],
    },
  ];

  // navigateTo(url : string){
  //   if(url === null || typeof url === "undefined" || url === "") return;
  //   this.router.navigate([this.urlMngr.getUrl(url)]);
  // }
}
