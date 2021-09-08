import React from "react";
import { Form, Input, Button, Select } from "antd";
const { Option } = Select;

const SearchBar = ({ formInfo, dropdownItems }) => {
  const [form] = Form.useForm();

  const onFinish = (values) => {
    console.log(values);
  };

  const onReset = () => {
    form.resetFields();
  };

  const dropdown = dropdownItems.map((item, index) => {
    return (
      <Option key={index} value={item.optionValue}>
        {item.displayValue}
      </Option>
    );
  });

  const formItems = formInfo.map((item, index) => {
    if (!item.dropdown) {
      return (
        <Form.Item
          key={index}
          name={item.name}
          label={item.label}
          rules={[
            {
              required: item.required,
            },
          ]}
        >
          <Input />
        </Form.Item>
      );
    }
    return (
      <Form.Item
        key={index}
        name={item.name}
        label={item.label}
        rules={[
          {
            required: item.required,
          },
        ]}
      >
        <Select
          placeholder="Select a option and change input text above"
          allowClear
        >
          {dropdown}
        </Select>
      </Form.Item>
    );
  });

  return (
    <Form form={form} layout="inline" name="control-hooks" onFinish={onFinish}>
      {formItems}
      <Form.Item>
        <Button type="primary" htmlType="submit">
          搜索
        </Button>
        <Button htmlType="button" onClick={onReset}>
          重置
        </Button>
      </Form.Item>
    </Form>
  );
};

export default SearchBar;
