import React from 'react';
import ReactDOM from 'react-dom/client';
import { ConfigProvider } from 'antd';
import zhCN from 'antd/locale/zh_CN';
import dayjs from 'dayjs';
import 'virtual:svg-icons-register'; 

// 引入样式
import './index.css';
import 'dayjs/locale/zh-cn';

// 引入根组件 (注意：如果你已经把 App 改成了 .tsx，这里可以省略后缀)
import App from './App';

// 设置 dayjs 语言为中文（配合 Ant Design 使用）
dayjs.locale('zh-cn');

/**
 * 获取根节点
 * 使用类型断言 '!' 告诉 TS 这个元素一定存在。
 * 或者使用传统的 null 判断。
 */
const rootElement = document.getElementById('root');

if (!rootElement) {
  throw new Error('未找到根节点 root，请检查 index.html 是否配置正确');
}

const root = ReactDOM.createRoot(rootElement);

root.render(
  <React.StrictMode>
    {/* ConfigProvider 负责 Antd 组件的国际化配置 */}
    <ConfigProvider locale={zhCN}>
      <App />
    </ConfigProvider>
  </React.StrictMode>
);