// imports 
import { FlawedHead } from '../classes/FlawedHead';
import { FlawedScreen } from '../classes/FlawedScreen';
import { FormatHtml } from './';

// Get Page Content 
export function GetPageContent(ctx: FlawedScreen, head: FlawedHead) {
    // page 
    let renderedPageContent = ctx.render().page;
    // add head 
    renderedPageContent = `${head.rawhead}\n<body>\n${renderedPageContent}\n</body>`;

    // returning page content 
    return FormatHtml(renderedPageContent); // With Formatter
};