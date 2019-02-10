(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{102:function(e,n,t){},121:function(e,n,t){"use strict";t.r(n);var a=t(0),r=t.n(a),c=t(29),i=t.n(c),o=t(130),u=t(5),l=t(86),s=(t(102),t(133)),m=t(127),d=t(131),p=t(2),b=t(3),f=t(126),h=t(7),v=t.n(h);function g(){var e=Object(p.a)(["\n  query getOverview($search: String!, $limit: Int!) {\n    schools(range:{ limit: $limit, offset: 0 }, search: $search) {\n      id\n      name\n      city\n      address\n      postal_code\n      street\n      street_number\n      count_of_students\n      school_level\n      school_type\n      installed_base\n      bring_your_own_device\n      website\n      latitude\n      longitude\n    }\n    school_groups(range:{ limit: $limit, offset: 0 }, search: $search) {\n      id\n      name\n      city\n      address\n      street\n      street_number\n      postal_code\n      count_of_students\n      latitude\n      longitude\n    }\n    partners(range:{ limit: $limit, offset: 0 }, search: $search) {\n      id\n      name\n      education_focused\n    }\n  }\n"]);return g=function(){return e},e}var _=v()(g());function y(){var e=Object(p.a)(["\n  query getSchool($id: Int!){\n    school(id: $id){\n      name\n      address\n      city\n      postal_code\n      street\n      street_number\n      count_of_students\n      school_level\n      school_type\n      installed_base\n      bring_your_own_device\n      website\n      longitude\n      latitude\n      school_group {\n        id\n        name\n        city\n        address\n        street\n        street_number\n        postal_code\n        count_of_students\n      }\n      partners {\n        id\n        name\n        education_focused\n      }\n      sell_out {\n        units\n        fiscal_year\n        hp_quarter\n      }\n    }\n  }\n"]);return y=function(){return e},e}var E=v()(y());function x(){var e=Object(p.a)(["\n  query {\n    search @client\n  }\n"]);return x=function(){return e},e}var O=v()(x());function j(){var e=Object(p.a)(["\n  query getPartner($id: Int!){\n    partner(id: $id){\n      name\n      education_focused\n      schools {\n        id\n        name\n        city\n        address\n        postal_code\n        street\n        street_number\n        count_of_students\n        school_level\n        school_type\n        installed_base\n        bring_your_own_device\n        website\n        latitude\n        longitude\n      }\n    }\n  }\n"]);return j=function(){return e},e}var w=v()(j());function $(){var e=Object(p.a)(["\n  opacity: .7;\n  margin: 5px 0px;\n"]);return $=function(){return e},e}function k(){var e=Object(p.a)(["\n  font-weight: bold;\n  margin-bottom: 2px;\n"]);return k=function(){return e},e}function S(){var e=Object(p.a)(["\n  background-color: white;\n  width: 100%;\n  max-width: 300px;\n  height: 150px;\n  padding: 10px;\n  box-sizing: border-box;\n  box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);\n  margin-right: 10px;\n"]);return S=function(){return e},e}var N=b.a.article(S()),z=b.a.h2(k()),q=b.a.li($());var I=function(e){var n=e.title,t=e.list,a=e.to;return r.a.createElement(N,null,r.a.createElement(f.a,{to:a},r.a.createElement(z,null,n)),r.a.createElement("ul",null,function(e){return e.map(function(e,n){return r.a.createElement(q,{key:n},e)})}(t)))},Q=t(56);function D(){var e=Object(p.a)(["\n  padding: 5px;\n  font-size: 16pt;\n  width: calc(100% - 30px);\n  max-width: 600px;\n  border: none;\n  box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);\n"]);return D=function(){return e},e}function B(){var e=Object(p.a)(["\n  mutation updateSearch($search: String) {\n    updateSearch(search: $search) @client\n  }\n"]);return B=function(){return e},e}var C=v()(B()),P=b.a.input(D()),V=0,F=function(){var e=Object(u.c)(O,{suspend:!1}),n=e.data,t=e.error;if(e.loading)return r.a.createElement("div",null,"Loading...");if(t)return"Error! ".concat(t.message);var c=Object(a.useState)(""),i=Object(Q.a)(c,2),o=i[0],l=i[1];Object(a.useEffect)(function(){var e=n.search;l(e)},[]);var s=Object(u.b)(C);return r.a.createElement(P,{value:o,placeholder:"Search",onChange:function(e){return function(e,n,t){var a=e.target.value;t(a),V&&clearTimeout(V),V=setTimeout(function(){n({variables:{search:a}})},700)}(e,s,l)}})};function H(){var e=Object(p.a)(["\n      mutation update_entity($keyValue: keyValue, $entity: String, $id: Int){\n        update_entity(keyValue: $keyValue, entity: $entity, id: $id) {\n          name\n        }\n      }\n    "]);return H=function(){return e},e}function L(){var e=Object(p.a)(["\n  width: 60%;\n  padding: 5px;\n  padding-right: 0px;\n  box-sizing: border-box;\n"]);return L=function(){return e},e}function M(){var e=Object(p.a)(["\n  width: 40%;\n  font-size: 14pt;\n  max-width: 200px;\n"]);return M=function(){return e},e}function R(){var e=Object(p.a)(["\n  width: 100%;\n  display: flex;\n  align-items: center;\n  padding-bottom: 10px;\n"]);return R=function(){return e},e}function T(){var e=Object(p.a)(["\n"]);return T=function(){return e},e}var Y=b.a.form(T()),J=b.a.label(R()),U=b.a.p(M()),A=b.a.input(L());function G(e,n,t,a,r,c,i){c({variables:{keyValue:{value:e,key:n,type:t},entity:a,id:r},refetchQueries:i})}var K=function(e){var n=e.type,t=e.name,c=e.labelName,i=e.value,o=e.entity,l=e.entityId,s=e.refetchQueries,m=Object(a.useState)(i),d=Object(Q.a)(m,2),p=d[0],b=d[1],f=Object(u.b)(v()(H()));return r.a.createElement(Y,null,r.a.createElement(J,{id:t,htmlFor:t},r.a.createElement(U,null,c),function(e,n,t,a,c,i,o,u,l){return"number"===e||"text"===e?r.a.createElement(A,{placeholder:e,value:n,type:e,onChange:function(e){return t(e.target.value)},onBlur:function(n){var t=n.target.value;t!==c&&G(t,a,e,i,o,u,l)}}):"boolean"===e?r.a.createElement("input",{type:"checkbox",defaultChecked:n,onChange:function(){var r=!n;t(r),G(r,a,e,i,o,u,l)}}):null}(n,p,b,t,i,o,l,f,s)))};function W(){var e=Object(p.a)(["\n  width: 60%;\n  padding: 5px;\n  padding-right: 0px;\n  box-sizing: border-box;\n"]);return W=function(){return e},e}function X(){var e=Object(p.a)(["\n  width: 40%;\n  font-size: 14pt;\n  max-width: 200px;\n"]);return X=function(){return e},e}function Z(){var e=Object(p.a)(["\n  width: 100%;\n  display: flex;\n  align-items: center;\n  padding-bottom: 10px;\n"]);return Z=function(){return e},e}var ee=b.a.div(Z()),ne=b.a.p(X()),te=b.a.p(W()),ae=function(e){var n=e.label,t=e.value;return r.a.createElement(ee,null,r.a.createElement(ne,null,n),r.a.createElement(te,null,t))};function re(){var e=Object(p.a)(["\n  margin-right: 20px;\n"]);return re=function(){return e},e}function ce(){var e=Object(p.a)(["\n  margin-top: 10px;\n"]);return ce=function(){return e},e}function ie(){var e=Object(p.a)(["\n  margin: 20px 0px 0px 20px;\n"]);return ie=function(){return e},e}var oe=b.a.main(ie()),ue=b.a.div(ce()),le=Object(b.a)(f.a)(re()),se=function(e){var n=e.match.path,t=Object(u.c)(O,{suspend:!1}).data.search,a=Object(u.c)(_,{variables:{search:t,limit:300},suspend:!1});return console.log(n),r.a.createElement(oe,null,r.a.createElement(F,null),r.a.createElement(ue,null,r.a.createElement(le,{to:"".concat(n,"/text")},"Text"),r.a.createElement(le,{to:"".concat(n,"/map")},"Map")),r.a.createElement(m.a,{path:"".concat(n,"/text"),render:function(){return r.a.createElement(Te,{query:a})}}),r.a.createElement(m.a,{path:"".concat(n,"/map"),render:function(){return r.a.createElement(on,{query:a})}}))},me=t(134);function de(){var e=Object(p.a)(["\n      mutation create_entity($entity: String){\n        create_entity(entity: $entity) {\n          id\n        }\n      }\n    "]);return de=function(){return e},e}function pe(){var e=Object(p.a)(["\n  display: inline;\n"]);return pe=function(){return e},e}function be(){var e=Object(p.a)(["\n  padding: 0;\n  background-color: transparent;\n  border: none;\n  margin-left: 10px;\n  font-size: 28pt;\n"]);return be=function(){return e},e}function fe(){var e=Object(p.a)(["\n  font-size: 14pt;\n  margin-bottom: 10px;\n"]);return fe=function(){return e},e}function he(){var e=Object(p.a)(["\n  font-size: 20pt;\n  font-weight: bold;\n  margin-bottom: 2px;\n"]);return he=function(){return e},e}function ve(){var e=Object(p.a)(["\n  display: float;\n  overflow: auto;\n  padding-bottom: 2px;\n"]);return ve=function(){return e},e}function ge(){var e=Object(p.a)(["\n  margin-top: 20px;\n"]);return ge=function(){return e},e}var _e=b.a.section(ge()),ye=b.a.div(ve()),Ee=b.a.h1(he()),xe=b.a.h3(fe()),Oe=b.a.button(be()),je=b.a.form(pe());var we=Object(me.a)(function(e){var n=e.title,t=e.subtitle,a=e.children,c=e.entity,i=e.history,o=e.match,l=Object(u.b)(v()(de()));return r.a.createElement(_e,null,r.a.createElement(Ee,null,n,function(e,n,t,a){return e?r.a.createElement(je,{onSubmit:function(r){r.preventDefault(),"add"===e.method&&n({variables:{entity:e.name}}).then(function(n){var a=n.data.create_entity.id;t.push("/".concat(e.name,"/").concat(a))}),"select"===e.method&&t.push("".concat(a.url,"/select/").concat(e.name))}},r.a.createElement(Oe,null,"+")):null}(c,l,i,o)),r.a.createElement(xe,null,t),r.a.createElement(ye,null,a))});function $e(){var e=Object(p.a)(["\n      mutation recalculate_location($city: String, $street: String, $street_number: String, $postal_code: Int, $id: Int) {\n        recalculate_location(city:$city, street:$street, street_number:$street_number, postal_code:$postal_code, id: $id) {\n          name\n        }\n      }\n    "]);return $e=function(){return e},e}function ke(){var e=Object(p.a)(["\n  background-color: #0095D9;\n  padding: 10px;\n  color: white;\n  border: none;\n  border-radius: 5px;\n"]);return ke=function(){return e},e}function Se(){var e=Object(p.a)(["\n  margin: 20px;\n"]);return Se=function(){return e},e}function Ne(){var e=Object(p.a)(["\n  width: calc(50% - 50px);\n  padding: 20px;\n  margin-right: 50px;\n  @media (max-width: 1100px) {\n    width: 100%;\n  }\n"]);return Ne=function(){return e},e}function ze(){var e=Object(p.a)(["\n  width: 100%;\n  background-color: white;\n  box-sizing: border-box;\n  display: flex;\n  @media (max-width: 1100px) {\n    display: block;\n  }\n"]);return ze=function(){return e},e}var qe=b.a.section(ze()),Ie=b.a.div(Ne()),Qe=b.a.main(Se()),De=b.a.button(ke()),Be=Object(me.a)(function(e){var n=e.match,t=n.params.id,a=n.url,c=Object(u.c)(E,{variables:{id:Number(t)},suspend:!1}),i=c.data,o=c.error,l=c.loading,s=(c.refetch,Object(u.c)(O,{suspend:!1}).data.search);if(l)return null;if(o)return"Error! ".concat(o.message);var d=i.school,p=d.name,b=d.count_of_students,f=d.school_level,h=d.school_type,g=d.bring_your_own_device,y=d.installed_base,x=d.city,j=d.postal_code,w=d.street,$=d.street_number,k=d.longitude,S=d.latitude,N=d.partners,z=[{query:E,variables:{id:Number(t)}},{query:_,variables:{search:s,limit:300}}],q={entity:"school",entityId:t,refetchQueries:z},Q=Object(u.b)(v()($e()),{variables:{city:x,postal_code:j,street:w,street_number:$,id:t},refetchQueries:z});return r.a.createElement(Qe,null,r.a.createElement(qe,null,r.a.createElement(Ie,null,r.a.createElement(K,Object.assign({type:"text",value:p,name:"name",labelName:"Name of school"},q)),r.a.createElement(K,Object.assign({type:"text",value:x,name:"city",labelName:"City"},q)),r.a.createElement(K,Object.assign({type:"number",value:j,name:"postal_code",labelName:"Postal code"},q)),r.a.createElement(K,Object.assign({type:"text",value:w,name:"street",labelName:"Street"},q)),r.a.createElement(K,Object.assign({type:"number",value:$,name:"street_number",labelName:"Street number"},q)),r.a.createElement(ae,{label:"Longitude",value:k}),r.a.createElement(ae,{label:"Latitude",value:S}),r.a.createElement("form",{onSubmit:function(e){e.preventDefault(),Q()}},r.a.createElement(De,{type:"submit"},"Recalculate location"))),r.a.createElement(Ie,null,r.a.createElement(K,Object.assign({type:"number",value:b,name:"count_of_students",labelName:"Count of students"},q)),r.a.createElement(K,Object.assign({type:"text",value:f,name:"school_level",labelName:"School level"},q)),r.a.createElement(K,Object.assign({type:"text",value:h,name:"school_type",labelName:"School type"},q)),r.a.createElement(K,Object.assign({type:"text",value:y,name:"installed_base",labelName:"Installed base"},q)),r.a.createElement(K,Object.assign({type:"boolean",value:g,name:"bring_your_own_device",labelName:"BYOD"},q)))),r.a.createElement(we,{entity:{name:"partner",method:"select"},title:"Partners",subtitle:"".concat(N.length," results")},function(e){return e.map(function(e){var n=e.name,t=e.id,a=e.education_focused;return r.a.createElement(I,{key:n,title:n,to:"/partner/".concat(t),list:["Education focused: ".concat(a)]})})}(N)),r.a.createElement(m.a,{path:"/:entity/:id/select/partner",render:function(){return r.a.createElement(yn,{refetchQueries:z,alreadySelectedEntities:N,parentId:t,parentRoute:a})},exact:!0}))});function Ce(){var e=Object(p.a)(["\n  margin: 20px;\n"]);return Ce=function(){return e},e}function Pe(){var e=Object(p.a)(["\n  width: calc(50% - 50px);\n  padding: 20px;\n  margin-right: 50px;\n  @media (max-width: 1100px) {\n    width: 100%;\n  }\n"]);return Pe=function(){return e},e}function Ve(){var e=Object(p.a)(["\n  width: 100%;\n  background-color: white;\n  box-sizing: border-box;\n  display: flex;\n  @media (max-width: 1100px) {\n    display: block;\n  }\n"]);return Ve=function(){return e},e}var Fe=b.a.section(Ve()),He=b.a.div(Pe()),Le=b.a.main(Ce()),Me=Object(me.a)(function(e){var n=e.match.params.id,t=Object(u.c)(w,{variables:{id:Number(n)},suspend:!1}),a=t.data,c=t.error,i=t.loading,o=Object(u.c)(O,{suspend:!1}).data.search;if(i)return null;if(c)return"Error! ".concat(c.message);var l=a.partner,s=l.name,m=l.education_focused,d=l.schools,p={entity:"partner",entityId:n,refetchQueries:[{query:w,variables:{id:Number(n)}},{query:_,variables:{search:o,limit:300}}]};return r.a.createElement(Le,null,r.a.createElement(Fe,null,r.a.createElement(He,null,r.a.createElement(K,Object.assign({type:"text",value:s,name:"name",labelName:"Name of partner"},p))),r.a.createElement(He,null,r.a.createElement(K,Object.assign({type:"boolean",value:m,name:"education_focused",labelName:"Education focused"},p)))),r.a.createElement(we,{select:"/select/school/partner/".concat(n),title:"Schools",subtitle:"".concat(d.length," results")},function(e){return e.map(function(e){var n=e.name,t=e.id,a=e.city,c=e.postal_code,i=e.street,o=e.street_number,u=e.installed_base,l=e.website,s=e.bring_your_own_device;return r.a.createElement(I,{key:n,title:n,to:"/school/".concat(t),list:["".concat(a," ").concat(c),"".concat(i," ").concat(o),u,l,"BYOD: ".concat(s)]})})}(d)))}),Re=function(e,n){return e.length>0?n:null},Te=function(e){var n,t=e.query,a=t.data,c=a.schools,i=a.school_groups,o=a.partners,u=t.error;return t.loading?null:u?"Error! ".concat(u.message):[Re(c,r.a.createElement(we,{entity:{name:"school",method:"add"},title:"Schools",subtitle:"".concat(c.length," results")},function(e){return e.map(function(e){var n=e.name,t=e.id,a=e.city,c=e.postal_code,i=e.street,o=e.street_number,u=e.installed_base,l=e.website,s=e.bring_your_own_device;return r.a.createElement(I,{key:n,title:n,to:"/school/".concat(t),list:["".concat(a," ").concat(c),"".concat(i," ").concat(o),u,l,"BYOD: ".concat(s)]})})}(c))),Re(i,r.a.createElement(we,{entity:{name:"school_group",method:"add"},title:"School groups",subtitle:"".concat(i.length," results")},(n=i,n.map(function(e){var n=e.name,t=e.id,a=e.city,c=e.street,i=e.street_number,o=e.postal_code,u=e.count_of_students;return r.a.createElement(I,{key:n,title:n,to:"/school-group/".concat(t),list:["".concat(a," ").concat(o),"".concat(c," ").concat(i),"Students: ".concat(u)]})})))),Re(o,r.a.createElement(we,{entity:{name:"partner",method:"add"},title:"Partners",subtitle:"".concat(o.length," results")},function(e){return e.map(function(e){var n=e.name,t=e.id,a=e.education_focused;return r.a.createElement(I,{key:n,title:n,to:"/partner/".concat(t),list:["Education focused: ".concat(a)]})})}(o)))]},Ye=t(129),Je=t(128),Ue=t(132),Ae=t(135),Ge=t(11),Ke=t.n(Ge);function We(){var e=Object(p.a)(["\n  margin: 0px !important;\n"]);return We=function(){return e},e}function Xe(){var e=Object(p.a)(["\n  font-weight: bold;\n  font-size: 12pt;\n"]);return Xe=function(){return e},e}function Ze(){var e=Object(p.a)(["\n  height: calc(100vh - 100px);\n  margin-top: 10px;\n"]);return Ze=function(){return e},e}var en=Object(b.a)(Ye.a)(Ze()),nn=b.a.h2(Xe()),tn=b.a.p(We()),an=function(e,n){return e.map(function(e){var t=e.name,a=e.latitude,c=e.longitude,i=e.address;return a&&c?r.a.createElement(Je.a,{position:[a,c],title:t,opacity:n,riseOnHover:!0},r.a.createElement(Ue.a,null,r.a.createElement(nn,null,t),r.a.createElement(tn,null,i))):null})},rn=Ke.a.icon({iconUrl:"http://localhost:3000/images/heart.png",iconSize:[20,18]}),cn=Ke.a.icon({iconUrl:"http://localhost:3000/images/hp.png",iconSize:[20,18]}),on=function(e){var n=e.query,t=n.data,a=t.schools,c=t.school_groups,i=n.error;if(n.loading)return null;if(i)return"Error! ".concat(i.message);var o=[50.85366,4.37085];return r.a.createElement(en,{center:o,zoom:9},r.a.createElement(Ae.a,{url:"https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",attribution:'\xa9 <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'}),r.a.createElement(Je.a,{icon:rn,position:o},r.a.createElement(Ue.a,null,r.a.createElement(nn,null,"Home sweet home"))),r.a.createElement(Je.a,{icon:cn,position:[50.87985,4.43611]},r.a.createElement(Ue.a,null,r.a.createElement(nn,null,"HP Belgium"))),an(a,1),an(c,.5))},un=function(e){switch(e.match.params.entity){case"school":return r.a.createElement(Be,null);case"partner":return r.a.createElement(Me,null);default:return r.a.createElement("p",null,"Not found")}};function ln(){var e=Object(p.a)(["\n      mutation link_entity($base_entity_id: Int, $base_entity_name: String, $link_entity_id: Int, $link_entity_name: String, $remove: Boolean){\n        link_entity(base_entity_id: $base_entity_id, base_entity_name: $base_entity_name, link_entity_id: $link_entity_id, link_entity_name: $link_entity_name, remove: $remove) {\n          name\n        }\n      }\n    "]);return ln=function(){return e},e}function sn(){var e=Object(p.a)(["\n  margin-left: 10px;\n"]);return sn=function(){return e},e}function mn(){var e=Object(p.a)(["\n  margin-bottom: 10px;\n"]);return mn=function(){return e},e}function dn(){var e=Object(p.a)(["\n  position: fixed;\n  background-color: black;\n  top: 0;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  margin: auto;\n  opacity: .5;\n"]);return dn=function(){return e},e}function pn(){var e=Object(p.a)(["\n  position: fixed;\n  background-color: white;\n  top: 0;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  margin: auto;\n  max-width: 600px;\n  max-height: 800px;\n  overflow: auto;\n  padding: 15px;\n"]);return pn=function(){return e},e}function bn(){var e=Object(p.a)(["\n  query getPartners($search: String!) {\n    partners(search: $search, range:{ limit: 100, offset: 0 }) {\n      id\n      name\n      education_focused\n    }\n  }\n"]);return bn=function(){return e},e}var fn=v()(bn()),hn=b.a.div(pn()),vn=Object(b.a)(f.a)(dn()),gn=b.a.li(mn()),_n=b.a.label(sn());var yn=function(e){var n=e.parentRoute,t=e.alreadySelectedEntities,c=e.parentId,i=e.refetchQueries,o=Object(u.c)(fn,{variables:{search:""},suspend:!1}),l=o.data,s=o.error;if(o.loading)return null;if(s)return"Error! ".concat(s.message);var m=Object(u.b)(v()(ln()));return console.log(t),r.a.createElement(a.Fragment,null,r.a.createElement(vn,{to:n}),r.a.createElement(hn,null,r.a.createElement("ul",null,function(e,n,t,a,c){return n.map(function(n){var i=n.name,o=n.id,u=function(e,n){var t=!1;return n.forEach(function(n){e===n.id&&(t=!0)}),t}(o,t);return r.a.createElement(gn,null,r.a.createElement("input",{onChange:function(){a({variables:{base_entity_id:e,base_entity_name:"school",link_entity_id:o,link_entity_name:"partner",remove:u},refetchQueries:c})},checked:u,id:i,type:"checkbox"}),r.a.createElement(_n,{htmlFor:i},i))})}(c,l.partners,t,m,i))))},En=function(){return r.a.createElement(s.a,null,r.a.createElement(m.a,{exact:!0,path:"/",render:function(){return r.a.createElement(d.a,{to:"/overview/text"})}}),r.a.createElement(m.a,{path:"/overview",component:se}),r.a.createElement(m.a,{path:"/:entity/:id",component:un}))},xn=new l.a({uri:"https://hp-education-server.herokuapp.com/graphql",clientState:{defaults:{search:""},resolvers:{Mutation:{updateSearch:function(e,n,t){var a=n.search;return t.cache.writeData({data:{search:a}}),null}}},typeDefs:"\n  type Query {\n    search: String!\n  }\n"}});i.a.render(r.a.createElement(o.a,null,r.a.createElement(function(){return r.a.createElement(u.a,{client:xn},r.a.createElement(En,null))},null)),document.getElementById("root"))},89:function(e,n,t){e.exports=t(121)}},[[89,2,1]]]);
//# sourceMappingURL=main.4f4b975a.chunk.js.map