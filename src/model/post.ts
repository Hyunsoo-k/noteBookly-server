import mongoose from 'mongoose';

const { Schema, model } = mongoose;
const PostSchema = new Schema(
  {
    writer: {
      type: String,
      required: [true, '작성자를 입력해 주세요.'],
      trim: true,
      minLength: [2, '작성자는 2글자 이상이어야 합니다.'],
      maxLength: [7, '작성자는 7글자 이하여야 합니다.'],
      match: [/^[가-힣a-zA-Z0-9]+$/, '한글, 영어, 숫자만 입력할 수 있습니다.']
    },
    password: {
      type: String,
      required: [true, '비밀번호를 입력해 주세요.'],
      /** can't validate hashed password length */
      trim: true,
    },
    thumbnailUrl: {
      type: String,
      default: null,
    },
    title: {
      type: String,
      required: [true, '제목을 입력해 주세요.'],
      trim: true,
      /** contenteditable, 클라이언트에서 검증 필요*/
    },
    subTitle: {
      type: String,
      default: null,
      maxLength: [40, '소제목은 40글자 이하여야 합니다.'],
      trim: true,
    },
    headerAlign: {
      type: String,
      enum: ["left", "center"],
      default: "left"
    },
    content: {
      type: String,
      required: [true, '내용을 입력해 주세요.'],
      /** contenteditable, 클라이언트에서 검증 필요*/
    },
    isEdited: {
      type: Boolean,
      required: true,
      default: false,
    }
  },
  {
    timestamps: true,
  }
);

const PostModel = model('Post', PostSchema);

export default PostModel;
