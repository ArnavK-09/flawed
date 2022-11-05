// imports 
import { FlawedHead } from './FlawedHead';

// engine 
export default function GetPageContent(ctx: any, head: FlawedHead) {
    // page 
    let renderedPage = ctx.render().page;

    // set head 
    renderedPage = head.rawhead + renderedPage;


    // returning
    return renderedPage;
}