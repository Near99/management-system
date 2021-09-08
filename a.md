我这边在弄新建客户信息的右侧弹出表单，写了一个对象传入进去如下

```js
const drawerFormInfo = {
  drawerTitle: "新增客户",
  formInfo: [
    {
      name: "companyName",
      label: "公司名称",
      required: true,
      dropdown: false,
    },
    {
      name: "gender",
      label: "性别",
      required: true,
      dropdown: true,
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
};
```

Drawer 这边遍历一下信息, 如果遇到 dropdown 为 true 的话就创建一个 Option 下拉放进去.

```js
const DrawerForm = ({ visible, onClose, drawerFormInfo }) => {
  const { Option } = Select;
  const formRow = drawerFormInfo.formInfo.map((item, key) => {
    if (item.dropdown) {
      const options = drawerFormInfo.gender.map((item, key) => {
        return (
          <Option key={key} value={item.optionValue}>
            {item.displayValue}
          </Option>
        );
      });
      return (
        <Row gutter={16} key={key}>
          <Col span={17}>
            <Form.Item
              name={item.name}
              label={item.label}
              rules={[{ required: item.required }]}
            ></Form.Item>
            <Select placeholder="Please select an owner">{options}</Select>
          </Col>
        </Row>
      );
    }
    return (
      <Row gutter={16} key={key}>
        <Col span={17}>
          <Form.Item
            name={item.name}
            label={item.label}
            rules={[{ required: item.required }]}
          >
            <Input placeholder="Please enter user name" />
          </Form.Item>
        </Col>
      </Row>
    );
```

不过遇到了一个小问题，我想用上层 map 的 item.name 去访问对象的时候会报错

```js
  const formRow = drawerFormInfo.formInfo.map((item, key) => {
    if (item.dropdown) {
                                    //这里
      const options = drawerFormInfo[item.name].map((item, key) => {
        return (
          <Option key={key} value={item.optionValue}>
            {item.displayValue}
          </Option>
        );
      });
```

console.log 出来结果看起来没什么问题

```js
log: gender;
```
