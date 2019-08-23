import { Upload, Icon, message, Card } from 'antd';
import React from 'react';

function getBase64(img: Blob, callback: any) {
  const reader = new FileReader();
  const { result } = reader;
  reader.addEventListener('load', () => callback(result));
  reader.readAsDataURL(img);
}

function beforeUpload(file: File) {
  const isJpgOrPng = file.type === 'image/jpeg' || file.type === 'image/png';
  if (!isJpgOrPng) {
    message.error('You can only upload JPG/PNG file!');
  }
  const isLt2M = file.size / 1024 / 1024 < 2;
  if (!isLt2M) {
    message.error('Image must smaller than 2MB!');
  }
  return isJpgOrPng && isLt2M;
}

type AvatarState = {
  loading?: boolean,
  imageUrl?: string,
}

class Avatar extends React.Component<any, Partial<AvatarState>> {
  state = {
    loading: false,
    imageUrl: '',
  };

  handleChange = (info: any) => {
    if (info.file.status === 'uploading') {
      this.setState({ loading: true });
      return;
    }
    if (info.file.status === 'done') {
      // Get this url from response in real world.
      getBase64(info.file.originFileObj, (imageUrl: string) =>
        this.setState({
          imageUrl: imageUrl,
          loading: false,
        }),
      );
    }
  };

  render() {
    const uploadButton = (
      <div>
        <Icon type={this.state.loading ? 'loading' : 'plus'} />
        <div className="ant-upload-text">Upload</div>
      </div>
    );
    const { imageUrl } = this.state;
    return (
      <Card
      hoverable
      style={{ width: '100%', textAlign: 'center' }}
      cover={<img alt="example" src={imageUrl} style={{width: 400, height: 400, border: '1px solid black'}}/>}
    >
      <Upload
        name="avatar"
        listType="picture-card"
        className="avatar-uploader"
        showUploadList={false}
        action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
        beforeUpload={beforeUpload}
        onChange={this.handleChange}
      >
        {uploadButton}
      </Upload>
    </Card>

    );
  }
}

export default Avatar;