import { Drawer, Form, Button, Col, Row, Input, Select, Space } from "antd";

const DrawerForm = ({ visible, onClose, drawerFormInfo }) => {
  const { Option } = Select;
  const formRow = drawerFormInfo.formInfo.map((item, key) => {
    let a = "gender";
    if (item.dropdown) {
      const options = drawerFormInfo[a].map((item, key) => {
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

          {/* <Row gutter={16}>
            <Col span={17}>
              <Form.Item
                name="name"
                label="客户姓名"
                rules={[{ required: true, message: "Please enter user name" }]}
              >
                <Input placeholder="Please enter user name" />
              </Form.Item>
            </Col>
          </Row>

          <Row gutter={16}>
            <Col span={17}>
              <Form.Item
                name="approver"
                label="Approver"
                rules={[
                  { required: true, message: "Please choose the approver" },
                ]}
              >
                <Select placeholder="Please choose the approver">
                  <Option value="jack">Jack Ma</Option>
                  <Option value="tom">Tom Liu</Option>
                </Select>
              </Form.Item>
            </Col>
          </Row> */}
        </Form>
      </Drawer>
    </>
  );
};

export default DrawerForm;
