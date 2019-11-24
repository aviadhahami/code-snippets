Promise.all(
	[...document.getElementsByTagName('script')]
	.map(f=>f.src)
	.filter(Boolean)
	.map(script=>fetch(script).then(v=>v.text()))
)
.then(scripts=> [
	...new Set(
			scripts.map(txt=>txt.match(/ReactVersion = '([^']+)'/)[1])
	)
])
.then(v=>console.log(`version is: ${v}`))
