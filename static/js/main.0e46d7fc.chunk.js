(this.webpackJsonpmovie_app=this.webpackJsonpmovie_app||[]).push([[0],{11:function(e,t,n){e.exports=n(24)},16:function(e,t,n){},18:function(e,t,n){},23:function(e,t,n){},24:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),s=n(4),i=n.n(s),o=(n(16),n(2)),c=n.n(o),l=n(5),u=n(6),m=n(9),p=n(7),v=n(10),d=(n(18),n(1)),g=n.n(d),h=n(8),_=n.n(h);n(23);function f(e){var t=e.poster,n=e.title,a=e.genres,s=e.synopsis;return r.a.createElement("div",{className:"Movie"},r.a.createElement("div",{className:"Movie__Column"},r.a.createElement(y,{poster:t,alt:n})),r.a.createElement("div",{className:"Movie__Column"},r.a.createElement("h1",null,n),r.a.createElement("div",{className:"Movie__Genres"},a.map((function(e,t){return r.a.createElement(E,{genre:e,key:t})}))),r.a.createElement("div",{className:"Movie__Synopsis"},r.a.createElement(_.a,{text:s,maxLine:"3",ellipsis:" ...",trimRight:!0,basedOn:"letters"}))))}function y(e){var t=e.poster,n=e.alt;return r.a.createElement("img",{src:t,alt:n,title:n,className:"Movie__Poster"})}function E(e){var t=e.genre;return r.a.createElement("span",{className:"Movie__Genre"},t)}f.ProtoTypes={title:g.a.string.isRequired,poster:g.a.string.isRequired,genres:g.a.array.isRequired,synopsis:g.a.string.isRequired},y.ProtoTypes={poster:g.a.string.isRequired,alt:g.a.string.isRequired},E.ProtoTypes={genre:g.a.string.isRequired};var w=f,M=function(e){function t(){var e,n;Object(l.a)(this,t);for(var a=arguments.length,s=new Array(a),i=0;i<a;i++)s[i]=arguments[i];return(n=Object(m.a)(this,(e=Object(p.a)(t)).call.apply(e,[this].concat(s)))).state={},n._getMovies=function(){var e;return c.a.async((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,c.a.awrap(n._callApi());case 2:e=t.sent,n.setState({movies:e});case 4:case"end":return t.stop()}}))},n._callApi=function(){return fetch("https://yts.lt/api/v2/list_movies.json?sort_by=download_count").then((function(e){return e.json()})).then((function(e){return e.data.movies})).catch((function(e){return console.log(e)}))},n._renderMovies=function(){return n.state.movies.map((function(e){return r.a.createElement(w,{title:e.title_english,poster:e.medium_cover_image,genres:e.genres,synopsis:e.synopsis,key:e.id})}))},n}return Object(v.a)(t,e),Object(u.a)(t,[{key:"componentDidMount",value:function(){console.log("did mount"),this._getMovies()}},{key:"render",value:function(){console.log("render");var e=this.state.movies;return r.a.createElement("div",{className:e?"App":"App--loading"},this.state.movies?this._renderMovies():"Loading")}}]),t}(a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(r.a.createElement(M,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[11,1,2]]]);
//# sourceMappingURL=main.0e46d7fc.chunk.js.map