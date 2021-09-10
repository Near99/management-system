import {
  Drawer,
  Form,
  Button,
  Col,
  Row,
  Input,
  Select,
  Space,
  DatePicker,
} from "antd";

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
              <Select placeholder="">{options}</Select>
            </Form.Item>
          </Col>
        </Row>
      );
    }

    if (item.datePicker) {
      return (
        <Row gutter={16} key={key}>
          <Col span={17}>
            <Form.Item
              name={item.name}
              label={item.label}
              rules={[{ required: item.required }]}
            >
              <DatePicker placeholder="" style={{ width: "100%" }} />
            </Form.Item>
          </Col>
        </Row>
      );
    }

    if (item.textArea) {
      return (
        <Row gutter={16} key={key}>
          <Col span={17}>
            <Form.Item
              name={item.name}
              label={item.label}
              rules={[{ required: item.required }]}
            >
              <Input.TextArea />
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
            <Input placeholder="" />
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
          <Button style={{ marginRight: "20px" }}>取消</Button>
          <Button type="primary">确定</Button>
        </Form>
      </Drawer>
    </>
  );
};

export default DrawerForm;
