"use strict";(self["webpackChunkQUAD"]=self["webpackChunkQUAD"]||[]).push([[169],{968:function(e,a,n){n.d(a,{Z:function(){return c}});var t=n(6252),o=n(3577);const s={class:"null-box"},r={class:"text"};function u(e,a,n,u,i,l){return(0,t.wg)(),(0,t.iD)("div",s,[(0,t._)("div",r,(0,o.zw)(e.text),1)])}var i=(0,t.aZ)({props:["type"],computed:{text(){let e="";switch(this.type){case"video":e="조회된 영상이 없습니다";break;case"image":e="조회된 이미지가 없습니다";break;default:e="조회된 데이터가 없습니다";break}return e}}}),l=n(3744);const m=(0,l.Z)(i,[["render",u],["__scopeId","data-v-3b91702a"]]);var c=m},9169:function(e,a,n){n.r(a),n.d(a,{default:function(){return C}});var t=n(6252);const o=(0,t.Uk)("추천 리스트");function s(e,a,n,s,r,u){const i=(0,t.up)("ion-back-button"),l=(0,t.up)("ion-buttons"),m=(0,t.up)("ion-title"),c=(0,t.up)("ion-toolbar"),g=(0,t.up)("ion-header"),d=(0,t.up)("GameInfoCard"),p=(0,t.up)("NullBoxContainer"),w=(0,t.up)("ion-content"),f=(0,t.up)("ion-page");return(0,t.wg)(),(0,t.j4)(f,{mode:"ios"},{default:(0,t.w5)((()=>[(0,t.Wm)(g,{class:"ion-no-border"},{default:(0,t.w5)((()=>[(0,t.Wm)(c,null,{default:(0,t.w5)((()=>[(0,t.Wm)(l,null,{default:(0,t.w5)((()=>[(0,t.Wm)(i)])),_:1}),(0,t.Wm)(m,null,{default:(0,t.w5)((()=>[o])),_:1})])),_:1})])),_:1}),(0,t.Wm)(w,null,{default:(0,t.w5)((()=>[e.gameList.length>0?((0,t.wg)(!0),(0,t.iD)(t.HY,{key:0},(0,t.Ko)(e.gameList,(e=>((0,t.wg)(),(0,t.j4)(d,{key:e["id"],game:e},null,8,["game"])))),128)):((0,t.wg)(),(0,t.j4)(p,{key:1}))])),_:1})])),_:1})}var r=n(2792),u=n(3577);const i={class:"img-box"},l=["src"],m={key:1,src:"assets/icon/icon-quad.png",alt:""},c={class:"info-box"},g={class:"title"},d={class:"text"},p={class:"hash-tag"};function w(e,a,n,o,s,r){const w=(0,t.up)("ion-card");return(0,t.wg)(),(0,t.j4)(w,{onClick:e.getGameInfo},{default:(0,t.w5)((()=>[(0,t._)("div",i,[e.game["url-gameImage"]?((0,t.wg)(),(0,t.iD)("img",{key:0,src:e.game["url-gameImage"],alt:""},null,8,l)):((0,t.wg)(),(0,t.iD)("img",m))]),(0,t._)("div",c,[(0,t._)("div",g,[(0,t._)("span",null,(0,u.zw)(e.game["game-name"]),1),(0,t._)("span",null,(0,u.zw)(e.game["game-type"])+"("+(0,u.zw)(e.game["game-personnel"])+")",1)]),(0,t._)("div",d,(0,u.zw)(e.game["game-comment"]),1),(0,t._)("div",p,(0,u.zw)(e.game["game-hashTag"]),1)])])),_:1},8,["onClick"])}var f=(0,t.aZ)({props:["game"],components:{IonCard:r.PM},methods:{getGameInfo(){this.$router.push({name:"game",params:{game:JSON.stringify(this.game)}})}}}),_=n(3744);const v=(0,_.Z)(f,[["render",w],["__scopeId","data-v-d2ec2ace"]]);var k=v,h=n(968),I=(0,t.aZ)({components:{IonPage:r._i,IonContent:r.W2,IonHeader:r.Gu,IonToolbar:r.sr,IonTitle:r.wd,IonButtons:r.Sm,IonBackButton:r.oU,GameInfoCard:k,NullBoxContainer:h.Z},data(){return{gameList:JSON.parse(String(this.$route.params.gameList))}}});const b=(0,_.Z)(I,[["render",s]]);var C=b}}]);
//# sourceMappingURL=169.b30db8d0.js.map