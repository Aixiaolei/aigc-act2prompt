<h1 align="center">
🔍AIGC-提示词大全
</h1>
<p align="center">
    <em>让生产力加倍的 AIGC 提示词</em>
</p>

## 使用案例

没有使用提示词的效果

![image](https://raw.githubusercontent.com/Aixiaolei/images/main/lz_2.png)

使用提示词的效果

![image](https://raw.githubusercontent.com/Aixiaolei/images/main/lz_1.gif)


## 我们为什么要使用提示词

- ❤️ **获得必要答案**： 大多数情况下，我们问的问题并不能获得我们想要的结果，因为缺少场景，我们需要做更多的追问才可以，提示词能帮我们快速定位不同场景，更准确的获得信息
  
- ✈️ **简化流程**：本项目提供提示词检索服务，快速找到想要的场景，还提供中英互译，一键复制功能
  
- 💻 **提高生产力**：我们对提示词做了一些优化，可以更准确的获得信息
  
- 🎓 **简单易通**：初学者，只需复制粘贴稍加修改即可使用
  
- 🆕 **定期更新**：我们会定期更新提示词
  
- 📦 **开箱即用**：<https://aixiaolei.github.io/aigc-act2prompt/>


## 使用说明

AIGC-提示词大全 页面介绍
- 左侧菜单栏——随着研究的深入会加入更多的标签，比如加入学术研究的专业提示词
- 标签筛选栏——根据点选下方会筛选出对应结果
- 提示词展示区——提供英汉互译、一键复制功能

![image](https://raw.githubusercontent.com/Aixiaolei/images/main/1682322039601.png)


### 🏷︎ 标签筛选

标签区按提示词的领域和功能进行划分，可根据不同场景和需求进行选择。

![image](https://raw.githubusercontent.com/Aixiaolei/images/main/1682322484922.png)


### 🔬 展示区复制

通过标签筛选和关键词搜索，点击卡片右上方的「复制」按钮即可获取提示词，粘贴后稍作修改即可使用：

![image](https://raw.githubusercontent.com/Aixiaolei/images/main/1682352313020.png)


### 💬 语言切换

默认情况下，提示词内容会显示为中文。如果想看英文，请点击“CN”按钮


## 🤔 常见问题

### 中文为什么有时候不太准确？

这是因为相较于中文，AI 对英文的理解更为出色。即使是国内第一个对话式大型语言模型 MOSS，也承认 MOSS 的英文回答水平比中文高，建议使用英文。


### 每次都要输入 Prompt？

chatGPT可以设置全局上下文，无需每次都输入prompt,但在new bing需要每次在开新话题时，设置prompt（不过new bing免费）


### 输出虚假信息

大语言模型的答案，有时候会有错误，需要自己注意甄别，这里我推荐用多个项目互相验证，来简单校验答案的真伪。

### 提示词不好用

本提示词均来自于网络，如果发现不好用可以到  <https://github.com/Aixiaolei/aigc-act2prompt/issues>,提出你的问题我会第一时间修改。


### 运行方法

```shell
# install
yarn

# 运行开发i环境
yarn start

# 生成文件，配合nginx或者live server可直接部署
yarn build
```
