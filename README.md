
**What is MCP?**

MCP (Model Context Protocol) is a universal interpreter between LLMs and real-world applications (in this case, it is a Playwright). If you need to solve a clear problem (in this case, testing a web application with Playwright), MCP allows you to give the LLM tasks focused on your goals, without including excessive explanations about your tooling in the prompt, then the LLM may control the application as an AI agent.

So, the Playwright MCP server handles browser integrations, chooses locators, and writes tests, as it gains access to the page’s code and already knows how Playwright works, among other things.

**Installing Playwright MCP**

Before you start, you need to prepare the tooling. In my example, I have:

VS Code (​​1.100.2)
LLM: GitHub Copilot
It is not mandatory, but it will be handy to have an existing testing project based on Playwright for testing and running generated code (tests).
First, you need to set up Playwright MCP within VS Code. This can be done by adding the MCP server config in settings.json (Settings → Open Settings JSON (the icon in the top right corner)):

{  
"chat.mcp.enabled": true,  
"mcp": {  
"servers": {  "playwright": 
{  
"command": "npx",  
"args": ["@playwright/mcp@latest"]  
    }  
    }  
  }  
}

**Generating autotests**

Before giving tasks to LLM, you still need to have a basic prompt. I got one from [Debbie O’Brien’s](https://github.com/debs-obrien/generate-test-with-copilot) example

_You are a playwright test generator    
You are given a scenario, and you need to generate a playwright test for it    
Do not generate test code based on the scenario alone    
Do run steps one by one using the tools provided by the Playwright MCP Server    
Only after all steps are completed, emit a playwright JavaScript test that uses @paywright/test based on the message history save the generated test file in the tests directory    
Execute only the failed tests and iterate until the test passes for those failed tests    
Don't try to rebuild all the locators if any test has failed_

Please go through below link for more details how to setup PlaywrightMCPServer

Link: [Andrey Enin](https://adequatica.medium.com/generative-automation-testing-with-playwright-mcp-server-45e9b8f6f92a) 

=======
# Playwright Rudderstack Automation

## Setup
1. Clone the repo
2. Run `npm install`
3. Set credentials in `.env` for dev, qa, prod

## Run Tests
```
npx playwright test
```

## Structure
- `pageObjects/` - Page object classes
- `tests/` - Test specs and fixtures
- `.env` - Environment credentials
- `playwright.config.js` - Playwright config
- `package.json` - Project dependencies

## Environment Management
- Use `.env` to switch credentials for different environments

## Example Test
Automates login, navigation, and event validation for Rudderstack.

