module.exports = {
    "/blogs/react":[{
        title:'a',
        path:'/blogs/react/a/',
        collapsable: true, // 可选的, 默认值是 true,
        children: [
          {
            title: 'a1',
            path: '/blogs/react/a/a1',
          },
          {
            title: 'a2',
            path: '/blogs/react/a/a2',
          }
        ]
    },{
        title:'b',
        path:'/blogs/react/b/',
        collapsable: true, // 可选的, 默认值是 true,
        children: [
            {
              title: 'b1',
              path: '/blogs/react/b/b1',
            },
            {
              title: 'a2',
              path: '/blogs/react/b/b2',
            }
          ]
    }]
}