import { Space } from "antd";

const client = {
  searchBarFormInfo: [
    {
      name: "clientName",
      label: "客户姓名",
      required: false,
      dropdown: false,
    },
    {
      name: "nationality",
      label: "国籍",
      required: false,
      dropdown: true,
    },
  ],

  searchBarDropdownItems: [
    {
      optionValue: "us",
      displayValue: "美国",
    },
    {
      optionValue: "cn",
      displayValue: "中国",
    },
    {
      optionValue: "uk",
      displayValue: "英国",
    },
    {
      optionValue: "sg",
      displayValue: "新加坡",
    },
  ],

  buttonInfo: ["添加客户", "导入", "回收站"],

  drawerFormInfo: {
    drawerTitle: "新增客户",
    formInfo: [
      {
        name: "companyName",
        label: "公司名称",
        required: true,
        dropdown: false,
      },
      {
        name: "clientName",
        label: "客户姓名",
        required: true,
        dropdown: false,
      },
      {
        name: "phoneNumber",
        label: "手机号",
        required: false,
        dropdown: false,
      },
      {
        name: "gender",
        label: "性别",
        required: true,
        dropdown: true,
      },
      {
        name: "nationality",
        label: "国籍",
        required: true,
        dropdown: true,
      },
      { name: "address", label: "地址", required: false, dropdown: false },
      { name: "email", label: "邮件", required: false, dropdown: false },
      {
        name: "reachedVia",
        label: "联系途径",
        required: false,
        dropdown: false,
      },
      {
        name: "bankAccountInfo",
        label: "开户行",
        required: false,
        dropdown: false,
      },
      {
        name: "bankAccount",
        label: "银行账户",
        required: false,
        dropdown: false,
      },
    ],
    gender: [
      {
        optionValue: "male",
        displayValue: "男",
      },
      {
        optionValue: "female",
        displayValue: "女",
      },
    ],
    nationality: [
      {
        optionValue: "us",
        displayValue: "美国",
      },
      {
        optionValue: "cn",
        displayValue: "中国",
      },
      {
        optionValue: "uk",
        displayValue: "英国",
      },
      {
        optionValue: "sg",
        displayValue: "新加坡",
      },
    ],
  },

  tableData: {
    columns: [
      {
        title: "公司名称",
        dataIndex: "companyName",
        key: "companyname",
      },
      {
        title: "客户姓名",
        dataIndex: "clientName",
        key: "clientName",
      },
      {
        title: "手机号码",
        dataIndex: "phoneNumber",
        key: "phoneNumber",
      },
      {
        title: "性别",
        dataIndex: "gender",
        key: "gender",
      },
      {
        title: "国籍",
        dataIndex: "nationality",
        key: "nationality",
      },
      {
        title: "地址",
        dataIndex: "address",
        key: "address",
      },
      {
        title: "邮箱",
        dataIndex: "email",
        key: "email",
      },
      {
        title: "联系途径",
        dataIndex: "contact",
        key: "contact",
      },
      {
        title: "操作",
        key: "action",
        render: (text, record) => (
          <Space size="middle">
            <a href="#" alt="none" onClick={record.testing}>
              详情
            </a>
            <a href="/" alt="none">
              更多
            </a>
          </Space>
        ),
      },
    ],
    data: [
      {
        key: "1",
        companyName: "北京擎科生物科技有限公司",
        clientName: "张三丰",
        phoneNumber: "12345677232",
        gender: "男",
        nationality: "美国",
        address: "New York No. 1 Lake Park",
        email: "zgtm@gmail.com",
        contact: "QQ",
        testing: (e) => {
          console.log("clicked");
          console.log(e);
        },
      },
    ],
  },
  navBarTitle: "客户管理",
};

const order = {
  searchBarFormInfo: [
    {
      name: "orderNumber",
      label: "订单编号",
      required: false,
      dropdown: false,
    },
    {
      name: "clientInfo",
      label: "客户信息",
      required: false,
      dropdown: true,
    },
  ],

  searchBarDropdownItems: [
    {
      optionValue: "zhangxiaofeng",
      displayValue: "张小丰",
    },
    {
      optionValue: "lidi",
      displayValue: "李帝",
    },
  ],

  buttonInfo: ["新增订单", "导出", "导入", "回收站"],

  drawerFormInfo: {
    drawerTitle: "新增订单",
    formInfo: [
      {
        name: "orderNumber",
        label: "订单编号",
        required: true,
        dropdown: false,
      },
      {
        name: "client",
        label: "客户",
        required: true,
        dropdown: false,
      },
      {
        name: "orderDate",
        label: "订单时间",
        required: false,
        dropdown: false,
      },
      {
        name: "shippingDate",
        label: "出货时间",
        required: true,
        dropdown: false,
      },
      {
        name: "productionPeriod",
        label: "计划时常",
        required: true,
        dropdown: false,
      },
      {
        name: "shippingBy",
        label: "出货方式",
        required: false,
        dropdown: false,
      },
      {
        name: "shippingAddress",
        label: "出货地址",
        required: false,
        dropdown: false,
      },
      {
        name: "orderStatus",
        label: "订单状态",
        required: false,
        dropdown: true,
      },
      {
        name: "comments",
        label: "备注",
        required: false,
        dropdown: false,
      },
    ],
    orderStatus: [
      {
        optionValue: "1",
        displayValue: "生产中",
      },
      {
        optionValue: "2",
        displayValue: "已完成",
      },
    ],
  },

  tableData: {
    columns: [
      {
        title: "订单编号",
        dataIndex: "orderNumber",
        key: "orderNumber",
      },
      {
        title: "公司名称",
        dataIndex: "companyName",
        key: "companyName",
      },
      {
        title: "客户姓名",
        dataIndex: "clientName",
        key: "clientName",
      },
      {
        title: "订单时间",
        dataIndex: "orderDate",
        key: "orderDate",
      },
      {
        title: "出货时间",
        dataIndex: "shippingDate",
        key: "shippingDate",
      },
      {
        title: "产品数",
        dataIndex: "quantity",
        key: "quantity",
      },
      {
        title: "材料成本",
        dataIndex: "mCost",
        key: "mCost",
      },
      {
        title: "利润",
        dataIndex: "profit",
        key: "profit",
      },
      {
        title: "状态",
        dataIndex: "status",
        key: "status",
      },
      {
        title: "操作",
        key: "action",
        render: () => (
          <Space size="middle">
            <a href="/" alt="none">
              详情
            </a>
            <a href="/" alt="none">
              更多
            </a>
          </Space>
        ),
      },
    ],
    data: [
      {
        key: "1",
        orderNumber: "20210317-DT001",
        companyName: "John Brown",
        clientName: "北京擎科生物科技有限公司",
        orderDate: "2021.03.12",
        shippingDate: "2021.03.12",
        quantity: "7",
        mCost: "1123.56",
        profit: "99999",
        status: "待确认",
      },
    ],
  },
  navBarTitle: "订单信息",
};

const product = {
  searchBarFormInfo: [
    {
      name: "product",
      label: "产品内容",
      required: false,
      dropdown: false,
    },
    {
      name: "category",
      label: "类别",
      required: false,
      dropdown: true,
    },
  ],

  searchBarDropdownItems: [
    {
      optionValue: "a",
      displayValue: "长条",
    },
    {
      optionValue: "b",
      displayValue: "单肩",
    },
  ],

  buttonInfo: [],

  drawerFormInfo: {
    drawerTitle: "新增客户",
    formInfo: [
      {
        name: "companyName",
        label: "公司名称",
        required: true,
        dropdown: false,
      },
      {
        name: "clientName",
        label: "客户姓名",
        required: true,
        dropdown: false,
      },
      {
        name: "phoneNumber",
        label: "手机号",
        required: false,
        dropdown: false,
      },
      {
        name: "gender",
        label: "性别",
        required: true,
        dropdown: true,
      },
      {
        name: "nationality",
        label: "国籍",
        required: true,
        dropdown: true,
      },
      { name: "address", label: "地址", required: false, dropdown: false },
      { name: "email", label: "邮件", required: false, dropdown: false },
      {
        name: "reachedVia",
        label: "联系途径",
        required: false,
        dropdown: false,
      },
      {
        name: "bankAccountInfo",
        label: "开户行",
        required: false,
        dropdown: false,
      },
      {
        name: "bankAccount",
        label: "银行账户",
        required: false,
        dropdown: false,
      },
    ],
    gender: [
      {
        optionValue: "male",
        displayValue: "男",
      },
      {
        optionValue: "female",
        displayValue: "女",
      },
    ],
    nationality: [
      {
        optionValue: "us",
        displayValue: "美国",
      },
      {
        optionValue: "cn",
        displayValue: "中国",
      },
      {
        optionValue: "uk",
        displayValue: "英国",
      },
      {
        optionValue: "sg",
        displayValue: "新加坡",
      },
    ],
  },

  tableData: {
    columns: [
      {
        title: "主图",
        dataIndex: "productPic",
        key: "productPic",
      },
      {
        title: "产品编号",
        dataIndex: "productNumber",
        key: "productNumber",
      },
      {
        title: "产品名称",
        dataIndex: "productName",
        key: "productName",
      },
      {
        title: "类别",
        dataIndex: "category",
        key: "category",
      },
      {
        title: "颜色",
        dataIndex: "color",
        key: "color",
      },
      {
        title: "品牌",
        dataIndex: "brand",
        key: "brand",
      },
      {
        title: "材料成本",
        dataIndex: "mCost",
        key: "mCost",
      },
      {
        title: "单价",
        dataIndex: "price",
        key: "price",
      },
      {
        title: "利润比",
        dataIndex: "profitMargin",
        key: "profitMargin",
      },
      {
        title: "状态",
        dataIndex: "status",
        key: "status",
      },
      {
        title: "库存量",
        dataIndex: "inventory",
        key: "inventory",
      },
      {
        title: "操作",
        key: "action",
        render: () => (
          <Space size="middle">
            <a href="/" alt="none">
              详情
            </a>
            <a href="/" alt="none">
              更多
            </a>
          </Space>
        ),
      },
    ],
    data: [
      {
        key: "1",
        productPic: "Pic",
        productNumber: "FDS241",
        productName: "手提便携袋",
        category: "长条",
        color: "黑色",
        brand: "Nike",
        mCost: "50",
        price: "199",
        profitMargin: "25%",
        status: "正常",
        inventory: "22",
      },
    ],
  },
  navBarTitle: "产品详情",
};

const inventory = {
  searchBarFormInfo: [
    {
      name: "materialName",
      label: "材料名称",
      required: false,
      dropdown: false,
    },
    {
      name: "category",
      label: "类别",
      required: false,
      dropdown: true,
    },
  ],

  searchBarDropdownItems: [
    {
      optionValue: "a",
      displayValue: "拉链",
    },
    {
      optionValue: "b",
      displayValue: "拉链头",
    },
  ],

  buttonInfo: [],

  drawerFormInfo: {
    drawerTitle: "新增客户",
    formInfo: [
      {
        name: "companyName",
        label: "公司名称",
        required: true,
        dropdown: false,
      },
      {
        name: "clientName",
        label: "客户姓名",
        required: true,
        dropdown: false,
      },
      {
        name: "phoneNumber",
        label: "手机号",
        required: false,
        dropdown: false,
      },
      {
        name: "gender",
        label: "性别",
        required: true,
        dropdown: true,
      },
      {
        name: "nationality",
        label: "国籍",
        required: true,
        dropdown: true,
      },
      { name: "address", label: "地址", required: false, dropdown: false },
      { name: "email", label: "邮件", required: false, dropdown: false },
      {
        name: "reachedVia",
        label: "联系途径",
        required: false,
        dropdown: false,
      },
      {
        name: "bankAccountInfo",
        label: "开户行",
        required: false,
        dropdown: false,
      },
      {
        name: "bankAccount",
        label: "银行账户",
        required: false,
        dropdown: false,
      },
    ],
    gender: [
      {
        optionValue: "male",
        displayValue: "男",
      },
      {
        optionValue: "female",
        displayValue: "女",
      },
    ],
    nationality: [
      {
        optionValue: "us",
        displayValue: "美国",
      },
      {
        optionValue: "cn",
        displayValue: "中国",
      },
      {
        optionValue: "uk",
        displayValue: "英国",
      },
      {
        optionValue: "sg",
        displayValue: "新加坡",
      },
    ],
  },

  tableData: {
    columns: [
      {
        title: "样板图",
        dataIndex: "protoPic",
        key: "protoPic",
      },
      {
        title: "材料编号",
        dataIndex: "materialNum",
        key: "materialNum",
      },
      {
        title: "材料名称",
        dataIndex: "materialName",
        key: "materialName",
      },
      {
        title: "类别",
        dataIndex: "category",
        key: "category",
      },
      {
        title: "颜色",
        dataIndex: "color",
        key: "color",
      },
      {
        title: "供应商",
        dataIndex: "supplier",
        key: "supplier",
      },
      {
        title: "单价(元)",
        dataIndex: "price",
        key: "price",
      },
      {
        title: "计量单位",
        dataIndex: "unit",
        key: "unit",
      },
      {
        title: "库存量",
        dataIndex: "inventory",
        key: "inventory",
      },
      {
        title: "操作",
        key: "action",
        render: () => (
          <Space size="middle">
            <a href="/" alt="none">
              详情
            </a>
            <a href="/" alt="none">
              更多
            </a>
          </Space>
        ),
      },
    ],
    data: [
      {
        key: "1",
        protoPic: "Pic",
        materialNum: "TDR001",
        materialName: "5号拉链头",
        category: "拉链头",
        color: "黑色",
        supplier: "深圳深达拉链有限公司",
        price: "2.50",
        unit: "个",
        inventory: "2999",
      },
    ],
  },
  navBarTitle: "库存管理",
};

const user = {
  searchBarFormInfo: [
    {
      name: "account",
      label: "帐号",
      required: false,
      dropdown: false,
    },
    {
      name: "gender",
      label: "性别",
      required: false,
      dropdown: true,
    },
  ],

  searchBarDropdownItems: [
    {
      optionValue: "male",
      displayValue: "男",
    },
    {
      optionValue: "female",
      displayValue: "女",
    },
  ],

  buttonInfo: ["添加用户", "导入", "回收站"],

  drawerFormInfo: {
    drawerTitle: "添加用户",
    formInfo: [
      {
        name: "profilePic",
        label: "头像",
        required: true,
        dropdown: false,
      },
      {
        name: "userAccount",
        label: "用户帐号",
        required: true,
        dropdown: false,
      },
      {
        name: "userName",
        label: "用户名",
        required: false,
        dropdown: false,
      },
      {
        name: "staffNumber",
        label: "工号",
        required: true,
        dropdown: false,
      },
      {
        name: "position",
        label: "职务",
        required: true,
        dropdown: true,
      },
      {
        name: "roleAllocate",
        label: "角色分配",
        required: false,
        dropdown: true,
      },
      {
        name: "department",
        label: "部门",
        required: false,
        dropdown: true,
      },
      {
        name: "dob",
        label: "生日",
        required: false,
        dropdown: false,
      },
      {
        name: "gender",
        label: "性别",
        required: false,
        dropdown: true,
      },
      {
        name: "zip",
        label: "邮编",
        required: false,
        dropdown: false,
      },
      {
        name: "phoneNumber",
        label: "手机号码",
        required: false,
        dropdown: false,
      },
    ],
    position: [
      {
        optionValue: "sale",
        displayValue: "销售",
      },
      {
        optionValue: "mkt",
        displayValue: "市场",
      },
    ],
    roleAllocate: [
      {
        optionValue: "manager",
        displayValue: "管理者",
      },
      {
        optionValue: "staff",
        displayValue: "员工",
      },
    ],
    department: [
      {
        optionValue: "sale",
        displayValue: "销售",
      },
      {
        optionValue: "mkt",
        displayValue: "市场",
      },
    ],
    gender: [
      {
        optionValue: "male",
        displayValue: "男",
      },
      {
        optionValue: "female",
        displayValue: "女",
      },
    ],
  },
  tableData: {
    columns: [
      {
        title: "头像",
        dataIndex: "profilePic",
        key: "profilePic",
      },
      {
        title: "用户帐号",
        dataIndex: "userAccount",
        key: "userAccount",
      },
      {
        title: "用户姓名",
        dataIndex: "userName",
        key: "userName",
      },
      {
        title: "手机号",
        dataIndex: "phoneNumber",
        key: "phoneNumber",
      },
      {
        title: "性别",
        dataIndex: "gender",
        key: "gender",
      },
      {
        title: "部门",
        dataIndex: "department",
        key: "department",
      },
      {
        title: "职务",
        dataIndex: "position",
        key: "position",
      },
      {
        title: "状态",
        dataIndex: "status",
        key: "status",
      },
      {
        title: "操作",
        key: "action",
        render: () => (
          <Space size="middle">
            <a href="#" alt="none">
              详情
            </a>
            <a href="#" alt="none">
              更多
            </a>
          </Space>
        ),
      },
    ],
    data: [
      {
        key: "1",
        profilePic: "profilePic",
        userAccount: "leibs",
        userName: "雷军",
        phoneNumber: "18612349842",
        gender: "男",
        department: "项目研发部",
        position: "高级研发",
        status: "正常",
      },
      {
        key: "2",
        profilePic: "profilePic",
        userAccount: "robin",
        userName: "李彦宏",
        phoneNumber: "18612349842",
        gender: "男",
        department: "项目研发部",
        position: "高级研发",
        status: "正常",
      },
      {
        key: "3",
        profilePic: "profilePic",
        userAccount: "pony",
        userName: "马化腾",
        phoneNumber: "18612349842",
        gender: "男",
        department: "项目研发部",
        position: "高级研发",
        status: "正常",
      },
      {
        key: "4",
        profilePic: "profilePic",
        userAccount: "jack",
        userName: "马云",
        phoneNumber: "18612349842",
        gender: "男",
        department: "项目研发部",
        position: "高级研发",
        status: "正常",
      },
      {
        key: "5",
        profilePic: "profilePic",
        userAccount: "jobs",
        userName: "Steve Jobs",
        phoneNumber: "18612349842",
        gender: "男",
        department: "项目研发部",
        position: "高级研发",
        status: "正常",
      },
      {
        key: "6",
        profilePic: "profilePic",
        userAccount: "musk",
        userName: "Elon Musk",
        phoneNumber: "18612349842",
        gender: "男",
        department: "项目研发部",
        position: "高级研发",
        status: "正常",
      },
    ],
  },
  navBarTitle: "用户管理",
};

const procurement = {
  searchBarFormInfo: [
    {
      name: "purchaseDate",
      label: "采购日期",
      required: false,
      dropdown: false,
    },
    {
      name: "status",
      label: "状态",
      required: false,
      dropdown: true,
    },
  ],

  searchBarDropdownItems: [
    {
      optionValue: "1",
      displayValue: "已订购",
    },
    {
      optionValue: "2",
      displayValue: "已收货",
    },
  ],

  buttonInfo: ["添加采购单", "导入", "回收站"],

  drawerFormInfo: {
    drawerTitle: "添加用户",
    formInfo: [
      {
        name: "profilePic",
        label: "头像",
        required: true,
        dropdown: false,
      },
    ],
    position: [
      {
        optionValue: "sale",
        displayValue: "销售",
      },
      {
        optionValue: "mkt",
        displayValue: "市场",
      },
    ],
  },

  tableData: {
    columns: [
      {
        title: "采购单号",
        dataIndex: "purchaseNumber",
        key: "purchaseNumber",
      },
      {
        title: "采购人员",
        dataIndex: "procurementStaff",
        key: "procurementStaff",
      },
      {
        title: "交易类型",
        dataIndex: "dealType",
        key: "dealType",
      },
      {
        title: "采购类数",
        dataIndex: "numOfMaterial",
        key: "numOfMaterial",
      },
      {
        title: "采购日期",
        dataIndex: "procurementDate",
        key: "procurementDate",
      },
      {
        title: "采购金额",
        dataIndex: "procurementCost",
        key: "procurementCost",
      },
      {
        title: "状态",
        dataIndex: "status",
        key: "status",
      },
      {
        title: "备注",
        dataIndex: "remark",
        key: "remark",
      },
      {
        title: "操作",
        key: "action",
        render: () => (
          <Space size="middle">
            <a href="#" alt="none">
              详情
            </a>
            <a href="#" alt="none">
              更多
            </a>
          </Space>
        ),
      },
    ],
    data: [
      {
        purchaseNumber: "1123912312",
        procurementStaff: "张三",
        dealType: "现结",
        numOfMaterial: "5",
        procurementDate: "2021-03-14",
        procurementCost: "5,681.50",
        status: "已入库",
        remark: "",
      },
    ],
  },
  navBarTitle: "采购管理",
};
export { client, order, product, inventory, user, procurement };
