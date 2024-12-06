import{_ as w,bp as Y,bq as H,br as V,bs as q,l as i,e as U,bt as $,bu as z,bd as K,bi as Q,be as P,bc as W,bv as Z,bw as I,bx as L}from"./md-BYVxEPJr.js";import{l as ee}from"./chunk-IHYUGLNO-CV6pQ0wi.js";import{G as B}from"./chunk-EOAU2GW5-CthuAykI.js";import{i as S,B as ne,m as A}from"./chunk-TGZYFRKZ-BMbUuUrR.js";import"./modules/vue-DE2vU3bv.js";import"./index-DATDqZmY.js";import"./modules/shiki-DKlvL1a9.js";import"./modules/file-saver-CsNJ2AjR.js";import"./slidev/default-z6_IN_qP.js";import"./slidev/context-C32DAV_p.js";function p(e){var t={options:{directed:e.isDirected(),multigraph:e.isMultigraph(),compound:e.isCompound()},nodes:J(e),edges:G(e)};return S(e.graph())||(t.value=ne(e.graph())),t}w(p,"write");function J(e){return A(e.nodes(),function(t){var n=e.node(t),o=e.parent(t),a={v:t};return S(n)||(a.value=n),S(o)||(a.parent=o),a})}w(J,"writeNodes");function G(e){return A(e.edges(),function(t){var n=e.edge(t),o={v:t.v,w:t.w};return S(t.name)||(o.name=t.name),S(n)||(o.value=n),o})}w(G,"writeEdges");var f=new Map,N=new Map,R=new Map,te=w(()=>{N.clear(),R.clear(),f.clear()},"clear"),O=w((e,t)=>{const n=N.get(t)||[];return i.trace("In isDescendant",t," ",e," = ",n.includes(e)),n.includes(e)},"isDescendant"),se=w((e,t)=>{const n=N.get(t)||[];return i.info("Descendants of ",t," is ",n),i.info("Edge is ",e),e.v===t||e.w===t?!1:n?n.includes(e.v)||O(e.v,t)||O(e.w,t)||n.includes(e.w):(i.debug("Tilt, ",t,",not in descendants"),!1)},"edgeInCluster"),T=w((e,t,n,o)=>{i.warn("Copying children of ",e,"root",o,"data",t.node(e),o);const a=t.children(e)||[];e!==o&&a.push(e),i.warn("Copying (nodes) clusterId",e,"nodes",a),a.forEach(c=>{if(t.children(c).length>0)T(c,t,n,o);else{const r=t.node(c);i.info("cp ",c," to ",o," with parent ",e),n.setNode(c,r),o!==t.parent(c)&&(i.warn("Setting parent",c,t.parent(c)),n.setParent(c,t.parent(c))),e!==o&&c!==e?(i.debug("Setting parent",c,e),n.setParent(c,e)):(i.info("In copy ",e,"root",o,"data",t.node(e),o),i.debug("Not Setting parent for node=",c,"cluster!==rootId",e!==o,"node!==clusterId",c!==e));const u=t.edges(c);i.debug("Copying Edges",u),u.forEach(l=>{i.info("Edge",l);const b=t.edge(l.v,l.w,l.name);i.info("Edge data",b,o);try{se(l,o)?(i.info("Copying as ",l.v,l.w,b,l.name),n.setEdge(l.v,l.w,b,l.name),i.info("newGraph edges ",n.edges(),n.edge(n.edges()[0]))):i.info("Skipping copy of edge ",l.v,"-->",l.w," rootId: ",o," clusterId:",e)}catch(C){i.error(C)}})}i.debug("Removing node",c),t.removeNode(c)})},"copy"),_=w((e,t)=>{const n=t.children(e);let o=[...n];for(const a of n)R.set(a,e),o=[...o,..._(a,t)];return o},"extractDescendants"),ie=w((e,t,n)=>{const o=e.edges().filter(l=>l.v===t||l.w===t),a=e.edges().filter(l=>l.v===n||l.w===n),c=o.map(l=>({v:l.v===t?n:l.v,w:l.w===t?t:l.w})),r=a.map(l=>({v:l.v,w:l.w}));return c.filter(l=>r.some(b=>l.v===b.v&&l.w===b.w))},"findCommonEdges"),D=w((e,t,n)=>{const o=t.children(e);if(i.trace("Searching children of id ",e,o),o.length<1)return e;let a;for(const c of o){const r=D(c,t,n),u=ie(t,n,r);if(r)if(u.length>0)a=r;else return r}return a},"findNonClusterChild"),k=w(e=>!f.has(e)||!f.get(e).externalConnections?e:f.has(e)?f.get(e).id:e,"getAnchorId"),re=w((e,t)=>{if(!e||t>10){i.debug("Opting out, no graph ");return}else i.debug("Opting in, graph ");e.nodes().forEach(function(n){e.children(n).length>0&&(i.warn("Cluster identified",n," Replacement id in edges: ",D(n,e,n)),N.set(n,_(n,e)),f.set(n,{id:D(n,e,n),clusterData:e.node(n)}))}),e.nodes().forEach(function(n){const o=e.children(n),a=e.edges();o.length>0?(i.debug("Cluster identified",n,N),a.forEach(c=>{const r=O(c.v,n),u=O(c.w,n);r^u&&(i.warn("Edge: ",c," leaves cluster ",n),i.warn("Descendants of XXX ",n,": ",N.get(n)),f.get(n).externalConnections=!0)})):i.debug("Not a cluster ",n,N)});for(let n of f.keys()){const o=f.get(n).id,a=e.parent(o);a!==n&&f.has(a)&&!f.get(a).externalConnections&&(f.get(n).id=a)}e.edges().forEach(function(n){const o=e.edge(n);i.warn("Edge "+n.v+" -> "+n.w+": "+JSON.stringify(n)),i.warn("Edge "+n.v+" -> "+n.w+": "+JSON.stringify(e.edge(n)));let a=n.v,c=n.w;if(i.warn("Fix XXX",f,"ids:",n.v,n.w,"Translating: ",f.get(n.v)," --- ",f.get(n.w)),f.get(n.v)||f.get(n.w)){if(i.warn("Fixing and trying - removing XXX",n.v,n.w,n.name),a=k(n.v),c=k(n.w),e.removeEdge(n.v,n.w,n.name),a!==n.v){const r=e.parent(a);f.get(r).externalConnections=!0,o.fromCluster=n.v}if(c!==n.w){const r=e.parent(c);f.get(r).externalConnections=!0,o.toCluster=n.w}i.warn("Fix Replacing with XXX",a,c,n.name),e.setEdge(a,c,o,n.name)}}),i.warn("Adjusted Graph",p(e)),M(e,0),i.trace(f)},"adjustClustersAndEdges"),M=w((e,t)=>{var a,c;if(i.warn("extractor - ",t,p(e),e.children("D")),t>10){i.error("Bailing out");return}let n=e.nodes(),o=!1;for(const r of n){const u=e.children(r);o=o||u.length>0}if(!o){i.debug("Done, no node has children",e.nodes());return}i.debug("Nodes = ",n,t);for(const r of n)if(i.debug("Extracting node",r,f,f.has(r)&&!f.get(r).externalConnections,!e.parent(r),e.node(r),e.children("D")," Depth ",t),!f.has(r))i.debug("Not a cluster",r,t);else if(!f.get(r).externalConnections&&e.children(r)&&e.children(r).length>0){i.warn("Cluster without external connections, without a parent and with children",r,t);let l=e.graph().rankdir==="TB"?"LR":"TB";(c=(a=f.get(r))==null?void 0:a.clusterData)!=null&&c.dir&&(l=f.get(r).clusterData.dir,i.warn("Fixing dir",f.get(r).clusterData.dir,l));const b=new B({multigraph:!0,compound:!0}).setGraph({rankdir:l,nodesep:50,ranksep:50,marginx:8,marginy:8}).setDefaultEdgeLabel(function(){return{}});i.warn("Old graph before copy",p(e)),T(r,e,b,r),e.setNode(r,{clusterNode:!0,id:r,clusterData:f.get(r).clusterData,label:f.get(r).label,graph:b}),i.warn("New graph after copy node: (",r,")",p(b)),i.debug("Old graph after copy",p(e))}else i.warn("Cluster ** ",r," **not meeting the criteria !externalConnections:",!f.get(r).externalConnections," no parent: ",!e.parent(r)," children ",e.children(r)&&e.children(r).length>0,e.children("D"),t),i.debug(f);n=e.nodes(),i.warn("New list of nodes",n);for(const r of n){const u=e.node(r);i.warn(" Now next level",r,u),u!=null&&u.clusterNode&&M(u.graph,t+1)}},"extractor"),j=w((e,t)=>{if(t.length===0)return[];let n=Object.assign([],t);return t.forEach(o=>{const a=e.children(o),c=j(e,a);n=[...n,...c]}),n},"sorter"),oe=w(e=>j(e,e.children()),"sortNodesByHierarchy"),F=w(async(e,t,n,o,a,c)=>{i.warn("Graph in recursive render:XAX",p(t),a);const r=t.graph().rankdir;i.trace("Dir in recursive render - dir:",r);const u=e.insert("g").attr("class","root");t.nodes()?i.info("Recursive render XXX",t.nodes()):i.info("No nodes found for",t),t.edges().length>0&&i.info("Recursive edges",t.edge(t.edges()[0]));const l=u.insert("g").attr("class","clusters"),b=u.insert("g").attr("class","edgePaths"),C=u.insert("g").attr("class","edgeLabels"),g=u.insert("g").attr("class","nodes");await Promise.all(t.nodes().map(async function(d){const s=t.node(d);if(a!==void 0){const h=JSON.parse(JSON.stringify(a.clusterData));i.trace(`Setting data for parent cluster XXX
 Node.id = `,d,`
 data=`,h.height,`
Parent cluster`,a.height),t.setNode(a.id,h),t.parent(d)||(i.trace("Setting parent",d,a.id),t.setParent(d,a.id,h))}if(i.info("(Insert) Node XXX"+d+": "+JSON.stringify(t.node(d))),s!=null&&s.clusterNode){i.info("Cluster identified XBX",d,s.width,t.node(d));const{ranksep:h,nodesep:v}=t.graph();s.graph.setGraph({...s.graph.graph(),ranksep:h+25,nodesep:v});const y=await F(g,s.graph,n,o,t.node(d),c),x=y.elem;$(s,x),s.diff=y.diff||0,i.info("New compound node after recursive render XAX",d,"width",s.width,"height",s.height),z(x,s)}else t.children(d).length>0?(i.trace("Cluster - the non recursive path XBX",d,s.id,s,s.width,"Graph:",t),i.trace(D(s.id,t)),f.set(s.id,{id:D(s.id,t),node:s})):(i.trace("Node - the non recursive path XAX",d,g,t.node(d),r),await K(g,t.node(d),{config:c,dir:r}))})),await w(async()=>{const d=t.edges().map(async function(s){const h=t.edge(s.v,s.w,s.name);i.info("Edge "+s.v+" -> "+s.w+": "+JSON.stringify(s)),i.info("Edge "+s.v+" -> "+s.w+": ",s," ",JSON.stringify(t.edge(s))),i.info("Fix",f,"ids:",s.v,s.w,"Translating: ",f.get(s.v),f.get(s.w)),await L(C,h)});await Promise.all(d)},"processEdges")(),i.info("Graph before layout:",JSON.stringify(p(t))),i.info("############################################# XXX"),i.info("###                Layout                 ### XXX"),i.info("############################################# XXX"),ee(t),i.info("Graph after layout:",JSON.stringify(p(t)));let E=0,{subGraphTitleTotalMargin:X}=Q(c);return await Promise.all(oe(t).map(async function(d){var h;const s=t.node(d);if(i.info("Position XBX => "+d+": ("+s.x,","+s.y,") width: ",s.width," height: ",s.height),s!=null&&s.clusterNode)s.y+=X,i.info("A tainted cluster node XBX1",d,s.id,s.width,s.height,s.x,s.y,t.parent(d)),f.get(s.id).node=s,P(s);else if(t.children(d).length>0){i.info("A pure cluster node XBX1",d,s.id,s.x,s.y,s.width,s.height,t.parent(d)),s.height+=X,t.node(s.parentId);const v=(s==null?void 0:s.padding)/2||0,y=((h=s==null?void 0:s.labelBBox)==null?void 0:h.height)||0,x=y-v||0;i.debug("OffsetY",x,"labelHeight",y,"halfPadding",v),await W(l,s),f.get(s.id).node=s}else{const v=t.node(s.parentId);s.y+=X/2,i.info("A regular node XBX1 - using the padding",s.id,"parent",s.parentId,s.width,s.height,s.x,s.y,"offsetY",s.offsetY,"parent",v,v==null?void 0:v.offsetY,s),P(s)}})),t.edges().forEach(function(d){const s=t.edge(d);i.info("Edge "+d.v+" -> "+d.w+": "+JSON.stringify(s),s),s.points.forEach(x=>x.y+=X/2);const h=t.node(d.v);var v=t.node(d.w);const y=Z(b,s,f,n,h,v,o);I(s,y)}),t.nodes().forEach(function(d){const s=t.node(d);i.info(d,s.type,s.diff),s.isGroup&&(E=s.diff)}),i.warn("Returning from recursive render XAX",u,E),{elem:u,diff:E}},"recursiveRender"),ve=w(async(e,t)=>{var c,r,u,l,b,C;const n=new B({multigraph:!0,compound:!0}).setGraph({rankdir:e.direction,nodesep:((c=e.config)==null?void 0:c.nodeSpacing)||((u=(r=e.config)==null?void 0:r.flowchart)==null?void 0:u.nodeSpacing)||e.nodeSpacing,ranksep:((l=e.config)==null?void 0:l.rankSpacing)||((C=(b=e.config)==null?void 0:b.flowchart)==null?void 0:C.rankSpacing)||e.rankSpacing,marginx:8,marginy:8}).setDefaultEdgeLabel(function(){return{}}),o=t.select("g");Y(o,e.markers,e.type,e.diagramId),H(),V(),q(),te(),e.nodes.forEach(g=>{n.setNode(g.id,{...g}),g.parentId&&n.setParent(g.id,g.parentId)}),i.debug("Edges:",e.edges),e.edges.forEach(g=>{if(g.start===g.end){const m=g.start,E=m+"---"+m+"---1",X=m+"---"+m+"---2",d=n.node(m);n.setNode(E,{domId:E,id:E,parentId:d.parentId,labelStyle:"",label:"",padding:0,shape:"labelRect",style:"",width:10,height:10}),n.setParent(E,d.parentId),n.setNode(X,{domId:X,id:X,parentId:d.parentId,labelStyle:"",padding:0,shape:"labelRect",label:"",style:"",width:10,height:10}),n.setParent(X,d.parentId);const s=structuredClone(g),h=structuredClone(g),v=structuredClone(g);s.label="",s.arrowTypeEnd="none",s.id=m+"-cyclic-special-1",h.arrowTypeEnd="none",h.id=m+"-cyclic-special-mid",v.label="",d.isGroup&&(s.fromCluster=m,v.toCluster=m),v.id=m+"-cyclic-special-2",n.setEdge(m,E,s,m+"-cyclic-special-0"),n.setEdge(E,X,h,m+"-cyclic-special-1"),n.setEdge(X,m,v,m+"-cyc<lic-special-2")}else n.setEdge(g.start,g.end,{...g},g.id)}),i.warn("Graph at first:",JSON.stringify(p(n))),re(n),i.warn("Graph after XAX:",JSON.stringify(p(n)));const a=U();await F(o,n,e.type,e.diagramId,void 0,a)},"render");export{ve as render};
