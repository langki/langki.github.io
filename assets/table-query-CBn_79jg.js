import{z as s,B as c}from"./index-PN1Wd5oG.js";import{b6 as o}from"./antd-D0j5ONzc.js";import{r as l,o as p}from"./vue-BG1emjmP.js";async function f(r){return s("/list/crud-table",r)}async function m(r){return c(`/list/${r}`)}function w(r){const e=l(o({queryApi:()=>Promise.resolve(),loading:!1,queryParams:{},dataSource:[],rowSelections:{selectedRowKeys:[],selectedRows:[],onChange(a,t){e.rowSelections.selectedRowKeys=a,e.rowSelections.selectedRows=t}},queryOnMounted:!0,pagination:o({pageSize:10,pageSizeOptions:["10","20","30","40"],current:1,total:0,order:"desc",column:"createTime",showSizeChanger:!0,showQuickJumper:!0,showTotal:a=>`总数据位：${a}`,onChange(a,t){e.pagination.pageSize=t,e.pagination.current=a,n()}},r.pagination),expand:!1,expandChange(){e.expand=!e.expand},beforeQuery(){},afterQuery(a){return a}},r));async function n(){if(!e.loading){e.loading=!0;try{await e.beforeQuery();const{data:a}=await e.queryApi({current:e.pagination.current,pageSize:e.pagination.pageSize,column:e.pagination.column,order:e.pagination.order,...e.queryParams});if(a){const t=await e.afterQuery(a);e.dataSource=t.records??[],e.pagination.total=t.total??0}}catch(a){throw new Error(`Query Failed: ${a}`)}finally{e.loading=!1}}}function i(){e.pagination.current=1,e.queryParams={},n()}function u(){e.pagination.current=1,n()}return p(()=>{e.queryOnMounted&&n()}),{query:n,resetQuery:i,initQuery:u,state:e}}export{m as d,f as g,w as u};
