import './polyfills.server.mjs';
import{a as J,b as K,c as W,d as X,e as Y,f as Z,g as tt,h as L,i as et,j as it,k as nt,l as rt,m as at,n as ot,o as st,p as mt,q as lt,r as pt,s as ct,t as dt,u as ut,v as ft,w as ht}from"./chunk-TRSH5RNE.mjs";import{a as q,k as G,o as E,p as P}from"./chunk-ILS6DSRW.mjs";import{Ab as C,Cb as A,Eb as T,Fb as D,Fc as B,Hc as Q,Jb as H,Kb as O,Lb as V,Mb as $,Nb as m,Pb as d,Sa as w,Sb as v,V as N,Va as s,W as x,Wa as f,_ as R,ea as h,f as F,fa as I,lb as u,ma as j,na as k,nb as p,o as U,oa as z,wb as r,xb as a,yb as c,zb as g}from"./chunk-K2EBK3SO.mjs";import"./chunk-VVCT4QZE.mjs";var _=(()=>{let t=class t{constructor(i){this.http=i,this.currentPage=1,this.currentPageChanged=new F}getUsers(i){return this.http.get(`https://reqres.in/api/users?page=${i}`).pipe(U(n=>n.data))}getUserById(i){return this.http.get(`https://reqres.in/api/users/${i}`).pipe(U(n=>n.data))}setCurrentPage(i){this.currentPage=i,this.currentPageChanged.next(this.currentPage)}};t.\u0275fac=function(n){return new(n||t)(R(q))},t.\u0275prov=N({token:t,factory:t.\u0275fac,providedIn:"root"});let e=t;return e})();var xt=e=>[e],M=e=>["/details",e];function It(e,t){e&1&&(r(0,"th",12),m(1," Img "),a())}function wt(e,t){if(e&1&&(r(0,"td",13)(1,"a",14),c(2,"img",15),a()()),e&2){let l=t.$implicit;s(),p("routerLink",v(2,M,l.id)),s(),p("src",l.avatar,w)}}function Tt(e,t){e&1&&(r(0,"th",12),m(1," id "),a())}function Et(e,t){if(e&1&&(r(0,"td",13),m(1),a()),e&2){let l=t.$implicit;s(),d(" ",l.id," ")}}function Lt(e,t){e&1&&(r(0,"th",12),m(1," first_name "),a())}function Mt(e,t){if(e&1&&(r(0,"td",13)(1,"a",14),m(2),a()()),e&2){let l=t.$implicit;s(),p("routerLink",v(2,M,l.id)),s(),d(" ",l.first_name," ")}}function Ut(e,t){e&1&&(r(0,"th",12),m(1," last_name "),a())}function Dt(e,t){if(e&1&&(r(0,"td",13)(1,"a",14),m(2),a()()),e&2){let l=t.$implicit;s(),p("routerLink",v(2,M,l.id)),s(),d(" ",l.last_name," ")}}function Pt(e,t){e&1&&(r(0,"th",12),m(1," email "),a())}function bt(e,t){if(e&1&&(r(0,"td",13)(1,"a",14),m(2),a()()),e&2){let l=t.$implicit;s(),p("routerLink",v(2,M,l.id)),s(),d(" ",l.email," ")}}function Ft(e,t){e&1&&c(0,"tr",16)}function Nt(e,t){e&1&&c(0,"tr",17)}var gt=(()=>{let t=class t{constructor(i){this.service=i,this.pageSize=6,this.displayedColumns=["image","id","name","last_name","email"],this.dataSource=[],this.currentPage=1,this.totalItems=0}ngOnInit(){this.dataSource=[],this.dataTest&&Array.isArray(this.dataTest)&&(this.dataSource=this.dataTest)}ngOnChanges(i){i.dataTest&&Array.isArray(i.dataTest.currentValue)&&(this.dataSource=i.dataTest.currentValue,this.totalItems=this.dataSource.length,this.currentPage=0)}onPageChange(i){this.currentPage=i.pageIndex,this.service.setCurrentPage(i.pageIndex+1)}getPaginatedData(){let i=this.currentPage*this.pageSize;return this.dataSource.slice(i,i+this.pageSize)}};t.\u0275fac=function(n){return new(n||t)(f(_))},t.\u0275cmp=h({type:t,selectors:[["app-user-list"]],viewQuery:function(n,o){if(n&1&&H(L,5),n&2){let S;O(S=V())&&(o.paginator=S.first)}},inputs:{dataTest:"dataTest"},features:[j],decls:20,vars:8,consts:[[1,"mat-elevation-z8"],["mat-table","",3,"dataSource"],["matColumnDef","image"],["mat-header-cell","",4,"matHeaderCellDef"],["mat-cell","",4,"matCellDef"],["matColumnDef","id"],["matColumnDef","name"],["matColumnDef","last_name"],["matColumnDef","email"],["mat-header-row","",4,"matHeaderRowDef"],["mat-row","",4,"matRowDef","matRowDefColumns"],["showFirstLastButtons","",3,"page","length","pageSize","pageSizeOptions"],["mat-header-cell",""],["mat-cell",""],[3,"routerLink"],["alt","",3,"src"],["mat-header-row",""],["mat-row",""]],template:function(n,o){n&1&&(r(0,"div",0)(1,"table",1),g(2,2),u(3,It,2,0,"th",3)(4,wt,3,4,"td",4),C(),g(5,5),u(6,Tt,2,0,"th",3)(7,Et,2,1,"td",4),C(),g(8,6),u(9,Lt,2,0,"th",3)(10,Mt,3,4,"td",4),C(),g(11,7),u(12,Ut,2,0,"th",3)(13,Dt,3,4,"td",4),C(),g(14,8),u(15,Pt,2,0,"th",3)(16,bt,3,4,"td",4),C(),u(17,Ft,1,0,"tr",9)(18,Nt,1,0,"tr",10),a(),r(19,"mat-paginator",11),T("page",function(St){return o.onPageChange(St)}),a()()),n&2&&(s(),p("dataSource",o.getPaginatedData()),s(16),p("matHeaderRowDef",o.displayedColumns),s(),p("matRowDefColumns",o.displayedColumns),s(),p("length",12)("pageSize",o.pageSize)("pageSizeOptions",v(6,xt,o.pageSize)))},dependencies:[E,et,nt,st,rt,it,mt,at,ot,lt,pt,L],styles:["a[_ngcontent-%COMP%]{color:#fff!important;text-decoration:none!important}"]});let e=t;return e})();function jt(e,t){if(e&1){let l=A();r(0,"div")(1,"mat-toolbar")(2,"section")(3,"form"),c(4,"input",4,0),r(6,"button",5),T("click",function(){k(l);let n=$(5),o=D();return z(o.filterResults(n.value))}),m(7,"Search"),a()()()(),c(8,"app-user-list",6),a()}if(e&2){let l=D();s(8),p("dataTest",l.ELEMENT_DATA)}}var Ct=(()=>{let t=class t{constructor(i,n){this.service=i,this.spinner=n,this.ELEMENT_DATA=[],this.housingLocationList=[],this.filteredLocationList=[],this.showPortfolio=!1}ngOnInit(){this.getUsers(this.service.currentPage),this.service.currentPageChanged.subscribe(i=>{this.getUsers(i)})}getUsers(i){this.spinner.show(),this.service.getUsers(i).subscribe(n=>{this.ELEMENT_DATA=[...n],setTimeout(()=>{this.showPortfolio=!0,this.spinner.hide()},1e3)})}filterResults(i){this.spinner.show();let n=+i;i||this.getUsers(1),this.service.getUserById(n).subscribe(o=>{this.ELEMENT_DATA=[o],setTimeout(()=>{this.showPortfolio=!0,this.spinner.hide()},1e3)})}};t.\u0275fac=function(n){return new(n||t)(f(_),f(J))},t.\u0275cmp=h({type:t,selectors:[["app-header"]],decls:4,vars:1,consts:[["filter",""],[4,"ngIf"],["bdColor","rgba(7,1,1,0.95)","size","small","type","pacman"],[2,"color","white"],["type","text","placeholder","Filter by city"],["type","button",1,"primary",3,"click"],[3,"dataTest"]],template:function(n,o){n&1&&(u(0,jt,9,1,"div",1),r(1,"ngx-spinner",2)(2,"p",3),m(3,"Loading Portfolio "),a()()),n&2&&p("ngIf",o.showPortfolio)},dependencies:[B,W,Z,X,Y,K,gt],styles:[".example-form[_ngcontent-%COMP%]{min-width:150px;max-width:500px;width:100%}.example-full-width[_ngcontent-%COMP%]{width:100%}"]});let e=t;return e})();var vt=(()=>{let t=class t{constructor(i,n){this.route=i,this.service=n,this.detailsItem=[];let o=parseInt(this.route.snapshot.params.id,10);this.service.getUserById(o).subscribe(S=>{this.detailsItem=S})}};t.\u0275fac=function(n){return new(n||t)(f(G),f(_))},t.\u0275cmp=h({type:t,selectors:[["app-detailed-user"]],decls:15,vars:5,consts:[["mat-flat-button","","color","accent","routerLink","/"],[2,"display","flex","justify-content","center","align-items","center","width","100%","height","90vh"],[1,"example-card",2,"background-color","azure !important","width","450px !important"],["mat-card-image","","alt","Photo",3,"src"]],template:function(n,o){n&1&&(r(0,"button",0),m(1,"Back To List Users"),a(),r(2,"div",1)(3,"mat-card",2),c(4,"img",3),r(5,"mat-card-content")(6,"h2"),m(7),a(),r(8,"h2"),m(9),a(),r(10,"h2"),m(11),a(),r(12,"h2"),m(13),a()(),c(14,"mat-card-actions"),a()()),n&2&&(s(4),p("src",o.detailsItem==null?null:o.detailsItem.avatar,w),s(3),d("First_name : ",o.detailsItem.first_name,""),s(2),d("Last_name : ",o.detailsItem.last_name,""),s(2),d("Email : ",o.detailsItem.email,""),s(2),d("Id : ",o.detailsItem.id,""))},dependencies:[E,tt,ct,ut,dt,ft]});let e=t;return e})();var kt=[{path:"",component:Ct},{path:"details/:id",component:vt}],_t=(()=>{let t=class t{};t.\u0275fac=function(n){return new(n||t)},t.\u0275mod=I({type:t}),t.\u0275inj=x({imports:[P.forChild(kt),P]});let e=t;return e})();var pe=(()=>{let t=class t{};t.\u0275fac=function(n){return new(n||t)},t.\u0275mod=I({type:t}),t.\u0275inj=x({imports:[Q,_t,ht]});let e=t;return e})();export{pe as DashboardModule};
