import run from './run'; 
 
async function clean() { 
  // TODO: Clean up the output directory 
} 
 
async function copy() { 
  // TODO: Copy static files to the output directory 
} 
 
async function bundle() { 
  // TODO: Bundle the source code with Webpack 
} 
 
async function build() { 
  await run(clean); 
  await run(copy); 
  await run(bundle); 
} 
 
export default build; 