export class ReleaseSideBarMenuChildren {
    id : string = "";
    name : string = "";
    url : string = "";
}

export class ReleaseSideBarMenuModel {
    id : string = "";
    name : string = "";
    children : Array<ReleaseSideBarMenuChildren> = new Array();
    url : string = "";
    iconName : string = "";
}