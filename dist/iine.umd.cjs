(function(l,t){typeof exports=="object"&&typeof module<"u"?t(exports,require("vue")):typeof define=="function"&&define.amd?define(["exports","vue"],t):(l=typeof globalThis<"u"?globalThis:l||self,t(l.iiNe={},l.vue))})(this,function(l,t){"use strict";function i(e,s){return{classes:t.computed(()=>[...s,e.classes])}}const u=["aria-label","data-test-id"],p={__name:"IiButton",props:{label:{type:String,required:!0},ariaLabel:{type:String,required:!0},classes:{type:Array,default:()=>[]},dataTestId:{type:[String,Object],default:()=>null}},emits:["onClick"],setup(e,{emit:s}){const r=s,n=e,a=Object.freeze(["py-2","px-7","rounded-full","border-neutral-700","border"]),{classes:d}=i(n,a);return(c,o)=>(t.openBlock(),t.createElementBlock("button",{"aria-label":n.ariaLabel,onClick:o[0]||(o[0]=()=>r("onClick")),class:t.normalizeClass(t.unref(d)),"data-test-id":e.dataTestId},t.toDisplayString(n.label),11,u))}},f={__name:"IiHeaders",props:{classes:{type:Array,default:()=>[]},headingType:{type:String,required:!0,default:"1",validator(e){return["1","2","3","4","5","6"].includes(e)}},dataTestId:{type:[String,Object],default:()=>null}},setup(e){const s=e,r=t.computed(()=>{const d=["font-bold"],c={1:"text-3xl",2:"text-2xl",3:"text-xl",4:"text-lg",5:"text-base",6:"text-base"};return d.push(c[s.headingType]),d}),n=t.computed(()=>`h${s.headingType}`),{classes:a}=i(s,r.value);return(d,c)=>(t.openBlock(),t.createBlock(t.resolveDynamicComponent(n.value),{class:t.normalizeClass(t.unref(a)),"data-test-id":e.dataTestId},{default:t.withCtx(()=>[t.renderSlot(d.$slots,"default")]),_:3},8,["class","data-test-id"]))}},y=["aria-labelledby","type","data-test-id"],m={__name:"IiInput",props:{inputType:{type:String,default:"text"},classes:{type:Array,default:()=>[]},ariaLabelledById:{type:String},id:{type:String},name:{type:String},dataTestId:{type:[String,Object],default:()=>null}},emits:["onChange"],setup(e,{emit:s}){const r=e,n=s,a=Object.freeze(["border-black","rounded","border-solid","border","p-1"]),{classes:d}=i(r,a);return(c,o)=>(t.openBlock(),t.createElementBlock("input",{class:t.normalizeClass(t.unref(d)),"aria-labelledby":e.ariaLabelledById,type:e.inputType,onChange:o[0]||(o[0]=()=>n("onChange")),"data-test-id":e.dataTestId},null,42,y))}},b={__name:"IiList",props:{classes:{type:Array,default:()=>[]},listType:{type:String,required:!0,default:"ul",validator(e){return["ul","ol"].includes(e)}},hideListStyle:{type:Boolean,default:!0},dataTestId:{type:[String,Object],default:()=>null}},setup(e){const s=e,r=t.computed(()=>{const a=["text-base","font-normal","ml-2"];return s.hideListStyle===!1?a.push(s.listType==="ul"?"list-disc":"list-decimal"):a.push("list-none"),[...a]}),{classes:n}=i(s,r.value);return(a,d)=>(t.openBlock(),t.createBlock(t.resolveDynamicComponent(e.listType),{class:t.normalizeClass(t.unref(n)),"data-test-id":e.dataTestId},{default:t.withCtx(()=>[t.renderSlot(a.$slots,"default")]),_:3},8,["class","data-test-id"]))}},g=["data-test-id"],h={__name:"IiParagraph",props:{classes:{type:Array,default:()=>[]},dataTestId:{type:[String,Object],default:()=>null}},setup(e){const s=e,r=Object.freeze(["mb-1","text-base","font-normal"]),{classes:n}=i(s,r);return(a,d)=>(t.openBlock(),t.createElementBlock("p",{class:t.normalizeClass(t.unref(n)),"data-test-id":e.dataTestId},[t.renderSlot(a.$slots,"default")],10,g))}};l.IiButton=p,l.IiHeaders=f,l.IiInput=m,l.IiList=b,l.IiParagraph=h,Object.defineProperty(l,Symbol.toStringTag,{value:"Module"})});
