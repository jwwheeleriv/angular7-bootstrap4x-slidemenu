export interface MenuStruct {
  nodeID: string; //[1..n]
  nodeDisplay: string;
  nodeHint: string; //Currently used for title attribute
  nodeLevel: number;
  nodePID: string; //only used if mType is DRILL
  nodeHasChildren: boolean;
  nodeChildren: MenuStruct[];

  nodeType: string; //DRILLDOWN, EVENT, ROUTE, URL
  nodeTypeAction: string;
  nodeTarget: string; //If a target is required
  
  nodeDisabled: boolean; //true or false
  nodeClass: string; //Any additional classes to be applied 
  nodeEID: string; //Element ID
}

export class Menu {

    status: string; // SUCCESS or FAILURE
    statusMessage: string; // Status Message if Error
    content: MenuStruct[];

    constructor(obj) { 
      try {
        if (obj.status === 'SUCCESS' || obj.status === 'FAILURE'){
          this.status = obj.status;
          this.statusMessage = obj.statusMessage;
        } else {
          this.status = 'FAILURE';
          this.statusMessage = 'Unable to reach API';
        } 

        if(obj.status === 'SUCCESS'){
          this.content = this.parseObjContent(obj.content)
        }
      } catch (err) {
        this.status = 'FAILURE';
        this.statusMessage = err.message;
      }
    }


    private parseObjContent(content){
      let tmpArr = [];
      let tmpObj: MenuStruct = null;
      
      for(const item in content){

        tmpObj.nodeID = (item['id']) ? item['id'] : null;
        tmpObj.nodeDisplay = (item['display']) ? item['display'] : null;
        tmpObj.nodeHint = (item['hint']) ? item['hint'] : null;
        tmpObj.nodeLevel = (item['level']) ? item['level'] : null;
        
        tmpObj.nodePID = (item['pid']) ? item['pid'] : null;
        tmpObj.nodeHasChildren = (item['hasChildren']) ? item['hasChildren'] : null;
        tmpObj.nodeChildren = (item['children']) ? this.parseObjContent(item['children']) : null;
        tmpObj.nodeType = (item['type']) ? item['type'] : null;
        tmpObj.nodeTypeAction = (item['action']) ? item['action'] : null;
        tmpObj.nodeTarget = (item['target']) ? item['target'] : null;
        
        tmpObj.nodeDisabled = (item['disabled']) ? item['disabled'] : null;
        tmpObj.nodeClass = (item['class']) ? item['class'] : null; 
        tmpObj.nodeEID = (item['eid']) ? item['eid'] : null;

        tmpArr.push(tmpObj);
        tmpObj = <MenuStruct>null;
      }

      return tmpArr;
    }

  }