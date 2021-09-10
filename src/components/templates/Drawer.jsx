import { Drawer, Form, Button, Col, Row, Input, Select, Space } from "antd";

const DrawerForm = ({ visible, onClose, drawerFormInfo }) => {
  const { Option } = Select;
  const formRow = drawerFormInfo.formInfo.map((item, key) => {
    if (item.dropdown) {
      const options = drawerFormInfo[item.name].map((item, key) => {
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
            >
              <Select placeholder="Please select an owner">{options}</Select>
            </Form.Item>
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
  });

  return (
    <>
      <Drawer
        title={drawerFormInfo.drawerTitle}
        width={520}
        onClose={onClose}
        visible={visible}
        bodyStyle={{ paddingBottom: 80 }}
        extra={
          <Space>
            <Button onClick={onClose}>Cancel</Button>
            <Button onClick={onClose} type="primary">
              Submit
            </Button>
          </Space>
        }
      >
        <Form layout="vertical" hideRequiredMark>
          {formRow}
        </Form>
      </Drawer>
    </>
  );
};

export default DrawerForm;
