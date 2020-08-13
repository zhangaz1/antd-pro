import { InfoCircleOutlined } from '@ant-design/icons';
import { Button, Card, DatePicker, Input, Form, InputNumber, Radio, Select, Tooltip } from 'antd';
import { connect, Dispatch, FormattedMessage, formatMessage } from 'umi';
import React, { FC } from 'react';
import { PageHeaderWrapper } from '@ant-design/pro-layout';
import styles from './style.less';

const FormItem = Form.Item;
const { Option } = Select;
const { RangePicker } = DatePicker;
const { TextArea } = Input;

interface BasicProps {
  submitting: boolean;
  dispatch: Dispatch<any>;
}

const Basic: FC<BasicProps> = (props) => {
  const { submitting } = props;
  const [form] = Form.useForm();
  const [showPublicUsers, setShowPublicUsers] = React.useState(false);
  const formItemLayout = {
    labelCol: {
      xs: { span: 24 },
      sm: { span: 7 },
    },
    wrapperCol: {
      xs: { span: 24 },
      sm: { span: 12 },
      md: { span: 10 },
    },
  };

  const submitFormLayout = {
    wrapperCol: {
      xs: { span: 24, offset: 0 },
      sm: { span: 10, offset: 7 },
    },
  };

  const onFinish = (values: { [key: string]: any }) => {
    const { dispatch } = props;
    dispatch({
      type: 'formAndBasic/submitRegularForm',
      payload: values,
    });
  };

  const onFinishFailed = (errorInfo: any) => {
    // eslint-disable-next-line no-console
    console.log('Failed:', errorInfo);
  };

  const onValuesChange = (changedValues: { [key: string]: any }) => {
    const { publicType } = changedValues;
    if (publicType) setShowPublicUsers(publicType === '2');
  };

  return (
    <PageHeaderWrapper content={<FormattedMessage id="formandbasic.basic.description" />}>
      <Card bordered={false}>
        <Form
          hideRequiredMark
          style={{ marginTop: 8 }}
          form={form}
          name="basic"
          initialValues={{ public: '1' }}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
          onValuesChange={onValuesChange}
        >
          <FormItem
            {...formItemLayout}
            label={<FormattedMessage id="formandbasic.title.label" />}
            name="title"
            rules={[
              {
                required: true,
                message: formatMessage({ id: 'formandbasic.title.required' }),
              },
            ]}
          >
            <Input placeholder={formatMessage({ id: 'formandbasic.title.placeholder' })} />
          </FormItem>
          <FormItem
            {...formItemLayout}
            label={<FormattedMessage id="formandbasic.date.label" />}
            name="date"
            rules={[
              {
                required: true,
                message: formatMessage({ id: 'formandbasic.date.required' }),
              },
            ]}
          >
            <RangePicker
              style={{ width: '100%' }}
              placeholder={[
                formatMessage({ id: 'formandbasic.placeholder.start' }),
                formatMessage({ id: 'formandbasic.placeholder.end' }),
              ]}
            />
          </FormItem>
          <FormItem
            {...formItemLayout}
            label={<FormattedMessage id="formandbasic.goal.label" />}
            name="goal"
            rules={[
              {
                required: true,
                message: formatMessage({ id: 'formandbasic.goal.required' }),
              },
            ]}
          >
            <TextArea
              style={{ minHeight: 32 }}
              placeholder={formatMessage({ id: 'formandbasic.goal.placeholder' })}
              rows={4}
            />
          </FormItem>
          <FormItem
            {...formItemLayout}
            label={<FormattedMessage id="formandbasic.standard.label" />}
            name="standard"
            rules={[
              {
                required: true,
                message: formatMessage({ id: 'formandbasic.standard.required' }),
              },
            ]}
          >
            <TextArea
              style={{ minHeight: 32 }}
              placeholder={formatMessage({ id: 'formandbasic.standard.placeholder' })}
              rows={4}
            />
          </FormItem>
          <FormItem
            {...formItemLayout}
            label={
              <span>
                <FormattedMessage id="formandbasic.client.label" />
                <em className={styles.optional}>
                  <FormattedMessage id="formandbasic.form.optional" />
                  <Tooltip title={<FormattedMessage id="formandbasic.label.tooltip" />}>
                    <InfoCircleOutlined style={{ marginRight: 4 }} />
                  </Tooltip>
                </em>
              </span>
            }
            name="client"
          >
            <Input placeholder={formatMessage({ id: 'formandbasic.client.placeholder' })} />
          </FormItem>
          <FormItem
            {...formItemLayout}
            label={
              <span>
                <FormattedMessage id="formandbasic.invites.label" />
                <em className={styles.optional}>
                  <FormattedMessage id="formandbasic.form.optional" />
                </em>
              </span>
            }
            name="invites"
          >
            <Input placeholder={formatMessage({ id: 'formandbasic.invites.placeholder' })} />
          </FormItem>
          <FormItem
            {...formItemLayout}
            label={
              <span>
                <FormattedMessage id="formandbasic.weight.label" />
                <em className={styles.optional}>
                  <FormattedMessage id="formandbasic.form.optional" />
                </em>
              </span>
            }
            name="weight"
          >
            <InputNumber
              placeholder={formatMessage({ id: 'formandbasic.weight.placeholder' })}
              min={0}
              max={100}
            />
            <span className="ant-form-text">%</span>
          </FormItem>
          <FormItem
            {...formItemLayout}
            label={<FormattedMessage id="formandbasic.public.label" />}
            help={<FormattedMessage id="formandbasic.label.help" />}
            name="publicType"
          >
            <div>
              <Radio.Group>
                <Radio value="1">
                  <FormattedMessage id="formandbasic.radio.public" />
                </Radio>
                <Radio value="2">
                  <FormattedMessage id="formandbasic.radio.partially-public" />
                </Radio>
                <Radio value="3">
                  <FormattedMessage id="formandbasic.radio.private" />
                </Radio>
              </Radio.Group>
              <FormItem style={{ marginBottom: 0 }} name="publicUsers">
                <Select
                  mode="multiple"
                  placeholder={formatMessage({ id: 'formandbasic.publicUsers.placeholder' })}
                  style={{
                    margin: '8px 0',
                    display: showPublicUsers ? 'block' : 'none',
                  }}
                >
                  <Option value="1">
                    <FormattedMessage id="formandbasic.option.A" />
                  </Option>
                  <Option value="2">
                    <FormattedMessage id="formandbasic.option.B" />
                  </Option>
                  <Option value="3">
                    <FormattedMessage id="formandbasic.option.C" />
                  </Option>
                </Select>
              </FormItem>
            </div>
          </FormItem>
          <FormItem {...submitFormLayout} style={{ marginTop: 32 }}>
            <Button type="primary" htmlType="submit" loading={submitting}>
              <FormattedMessage id="formandbasic.form.submit" />
            </Button>
            <Button style={{ marginLeft: 8 }}>
              <FormattedMessage id="formandbasic.form.save" />
            </Button>
          </FormItem>
        </Form>
      </Card>
    </PageHeaderWrapper>
  );
};

export default connect(({ loading }: { loading: { effects: { [key: string]: boolean } } }) => ({
  submitting: loading.effects['formAndBasic/submitRegularForm'],
}))(Basic);
