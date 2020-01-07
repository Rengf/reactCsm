const menuList = [{
        title: "系统首页",
        icon: "&#xe6ac;",
        faup: "&#xe638;",
        sublists: [{
            title: "首页",
            icon: "&#xeb0b;",
            url: "/"
        }]
    },
    {
        title: "报表管理",
        icon: "&#xe636;",
        faup: "&#xe638;",
        sublists: [{
            title: "访问统计",
            icon: "&#xeb0b;",
            url: "/admin/report"
        }]
    },
    {
        title: "用户管理",
        icon: "&#xe63c;",
        faup: "&#xe638;",
        sublists: [{
                title: "用户列表",
                icon: "&#xeb0b;",
                url: "/user"
            },
            {
                title: "管理员列表",
                icon: "&#xeb0b;",
                url: "/admin/adminlist"
            },
            {
                title: "权限设置",
                icon: "&#xeb0b",
                url: "/admin/editadmin"
            }
        ]
    },
    {
        title: "文章管理",
        icon: "&#xe661;",
        faup: "&#xe638;",
        sublists: [{
                title: "文章列表",
                icon: "&#xeb0b;",
                url: "/admin/articlelist"
            },
            {
                title: "添加文章",
                icon: "&#xeb0b;",
                url: "/admin/addarticle"
            },
            {
                title: "草稿列表",
                icon: "&#xeb0b;",
                url: "/admin/articlelist?status=0"
            }
        ]
    },
    {
        title: "商品分类",
        icon: "&#xe600;",
        faup: "&#xe638;",
        sublists: [{
                title: "分类列表",
                icon: "&#xeb0b;",
                url: "/category"
            },
            {
                title: "删除分类",
                icon: "&#xeb0b;",
                url: "/admin"
            }
        ]
    },
    {
        title: "商品管理",
        icon: "&#xe66e;",
        faup: "&#xe638;",
        sublists: [{
                title: "添加商品",
                icon: "&#xeb0b;",
                url: "/admin/addgoods"
            },
            {
                title: "商品列表",
                icon: "&#xeb0b;",
                url: "/admin/goodslist"
            }
        ]
    },
    {
        title: "进货管理",
        icon: "&#xe61c;",
        faup: "&#xe638;",
        sublists: [{
                title: "进货列表",
                icon: "&#xeb0b;",
                url: "/admin/warehousinglist"
            },
            {
                title: "添加进货",
                icon: "&#xeb0b;",
                url: "/admin/addwarehousing"
            },
            {
                title: "删除商品",
                icon: "&#xeb0b;",
                url: "/admin"
            }
        ]
    },
    {
        title: "供货商家",
        icon: "&#xe612;",
        faup: "&#xe638;",
        sublists: [{
                title: "添加商家",
                icon: "&#xeb0b;",
                url: "/admin/addsupplier"
            },
            {
                title: "商家列表",
                icon: "&#xeb0b;",
                url: "/admin/supplierlist"
            },
            {
                title: "删除分类",
                icon: "&#xeb0b;",
                url: "/admin"
            }
        ]
    },
    {
        title: "订单管理",
        icon: "&#xe695;",
        faup: "&#xe638;",
        sublists: [{
                title: "添加订单",
                icon: "&#xeb0b;",
                url: "/admin/orderlist"
            },
            {
                title: "管理订单",
                icon: "&#xeb0b;",
                url: "/admin"
            },
            {
                title: "订单列表",
                icon: "&#xeb0b;",
                url: "/admin"
            }
        ]
    },
    {
        title: "物流管理",
        icon: "&#xe614;",
        faup: "&#xe638;",
        sublists: [{
                title: "添加物流",
                icon: "&#xeb0b;",
                url: "/admin/addgoods"
            },
            {
                title: "修改物流",
                icon: "&#xeb0b;",
                url: "/admin"
            },
            {
                title: "物流列表",
                icon: "&#xeb0b;",
                url: "/admin"
            }
        ]
    },
    {
        title: "退单管理",
        icon: "&#xe641;",
        faup: "&#xe638;",
        sublists: [{
            title: "退单列表",
            icon: "&#xeb0b;",
            url: "/admin/returnorderlist"
        }]
    },
    {
        title: "留言管理",
        icon: "&#xe606;",
        faup: "&#xe638;",
        sublists: [{
                title: "留言反馈",
                icon: "&#xeb0b;",
                url: "/admin"
            },
            {
                title: "消息通知",
                icon: "&#xeb0b;",
                url: "/admin"
            }
        ]
    },
    {
        title: "评论管理",
        icon: "&#xe64c;",
        faup: "&#xe638;",
        sublists: [{
                title: "评论列表",
                icon: "&#xeb0b;",
                url: "/admin/commentlist"
            },
            {
                title: "删除评论",
                icon: "&#xeb0b;",
                url: "/admin"
            }
        ]
    }
]

export default menuList