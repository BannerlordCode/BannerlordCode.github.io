---
title: "SandBox/StoryMode/Native 阅读政策（v1.3.15）"
description: "如何阅读 SandBox、StoryMode、Native 三个模块：Native 是引擎 RE 桥（非日常 mod API），SandBox 是范例模块，StoryMode 是主线战役。日常 mod 应桥回 TaleWorlds.* 托管 API。"
---
# SandBox / StoryMode / Native 阅读政策

> 这三个模块定位不同，混为一谈会浪费时间。本页给出「该读什么、不该读什么、读完回到哪」。

## 一句话职责

- **SandBox**：官方范例模块（`Modules.SandBox`），承载大量可参考的 Behavior / Quest / 对话实现。学「怎么做」的最佳样本。
- **StoryMode**：主线战役模块，依赖 SandBox，提供剧情内容。mod 一般只复用其机制，不直接改剧情。
- **Native**：引擎原生层 RE（reverse-engineered）桥，对应 `native-1.x-src/` 源码。暴露 `IMB*` 接口与底层回调。**不是日常 mod API**。

## 心智模型：阅读优先级

```
日常 mod 开发
  → 读 TaleWorlds.CampaignSystem / MountAndBlade（托管 API，本 v1.3.15/zh/api）
  → 卡住时看 SandBox 的参考实现（范例，不是规范）
  → 极少见：需要理解引擎底层时才翻 Native（桥回 IMB*）
```

## 各模块的读法

### SandBox（范例，值得读）
- 找「官方怎么实现 X」：搜索 `Modules.SandBox` 里的 `CampaignBehavior`、`Quest`、`Dialog`。
- 文档化：其公开类型已纳入 [campaign-ext 模块](../../api/campaign-ext/) 与 [campaign 模块](../../api/campaign/) 的覆盖目标。

### StoryMode（主线，少改）
- 提供剧情内容；mod 通过机制扩展而非改写。参考其 Behavior 组织方式即可。

### Native（桥，慎读）
- 仅当托管 API 没暴露你需要的能力时，才去 `native-1.x-src/` 看 `IMB*` 接口与引擎回调。
- mod 日常应桥回 [engine 模块](../../api/engine/)（如 [GauntletLayer](../../api/engine/GauntletLayer/)）而非直接调原生。
- 详见 [原生互操作](../native-interop/)。

## 参见

- ↑ [架构总览](../)
- ↔ [噪声政策](../noise-policy/) · [原生互操作](../native-interop/) · [模块系统](../module-system/)
- ↓ [API 参考](../../api/)
