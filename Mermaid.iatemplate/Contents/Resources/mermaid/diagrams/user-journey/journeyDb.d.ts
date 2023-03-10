export function parseDirective(statement: any, context: any, type: any): void;
export function clear(): void;
export function addSection(txt: any): void;
export function getSections(): any[];
export function getTasks(): any[];
export function addTask(descr: any, taskData: any): void;
export function addTaskOrg(descr: any): void;
declare namespace _default {
    export { parseDirective };
    export function getConfig(): import("../../config.type").JourneyDiagramConfig | undefined;
    export { clear };
    export { setDiagramTitle };
    export { getDiagramTitle };
    export { setAccTitle };
    export { getAccTitle };
    export { setAccDescription };
    export { getAccDescription };
    export { addSection };
    export { getSections };
    export { getTasks };
    export { addTask };
    export { addTaskOrg };
    export { getActors };
}
export default _default;
import { setDiagramTitle } from "../../commonDb";
import { getDiagramTitle } from "../../commonDb";
import { setAccTitle } from "../../commonDb";
import { getAccTitle } from "../../commonDb";
import { setAccDescription } from "../../commonDb";
import { getAccDescription } from "../../commonDb";
declare function getActors(): any[];
