function h(d, f) {
		return(d.c - f.c) * (d.c - f.c) + (d.d - f.d) * (d.d - f.d) <= (d.a + f.a) * (d.a + f.a)
	}
	C = 255;
	b.style.margin = 0;
	v = {a: 60};
	o = Math.sin;
	q = Math.cos;
	g = 2 * Math.PI;
	u = function() {
		return"#" + (16777215 * Math.random() + "").slice(-6)
	};
	p = [{a: 9, b: 0, e: 9, f: u(), g: 1}];
	c.onmousedown = function(d) {
		p.push({a: 9, b: Math.atan2([Y = d.clientY] - T, [X = d.clientX] - S), e: Math.sqrt((X - S) * (X - S) + (Y - T) * (Y - T)) / 12, f: u(), g: 1});
		60 <= p.length && p.shift()
	};
	for (z in a)
		a["_" + z[0] + (z[6] || "")] = a[z];
	setInterval("with(a){dp=function(d){_ba();fillStyle=d.f;U=d.x=S+q(d.b)*[e=12*d.e];V=d.y=T+o(d.b)*e;d.b+=.008*v.a/d.e;d.c=U+q(d.b);d.d=V+o(d.b);_a(U,V,d.a,0,g,1);fill()};S=v.c=(W=c.width=b.clientWidth)/2;T=v.d=(H=c.height=window.innerHeight-5)/2;_fc(0,0,W,H);for(var d=1;4>=d;)_ba(),fillStyle='rgba(255,'+C+',0,'+.33*d+')',_a(S,T,v.a/(.99*d++),0,g,1),fill();M=p.length;for(d=0;d<M;d++){P=p[d];h(v,P)&&(v.a+=.2,C--,P.a-=2);for(j=d+1;j<p.length;j++)Q=p[j],h(P,Q)&&(P.a>=Q.a?P.a++&--Q.a:Q.a++& --P.a)}Z=[];for(d=0;d<M;d++)0<p[d].a&&Z.push(p[d]);p=Z;for(d=0;d<p.length;)dp(p[d++])}", 40);


