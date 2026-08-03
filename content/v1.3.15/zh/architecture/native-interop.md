---
title: "托管/原生互操作（v1.3.15）"
description: "Managed-Native 互操作边界：IMB* 接口、引擎回调、何时需要翻 Native 源码，以及 mod 日常应桥回哪些托管 API（engine 模块 / GauntletLayer）。"
---
# 托管 / 原生互操作

> Bannerlord 引擎分两层：托管层（`TaleWorlds.*`，C#，本站主要文档对象）与原生层（C++，RE 桥）。本页讲清边界，避免 mod 直接踩原生。

## 心智模型

```
你的 mod (C#)
   │  调用
   ▼
TaleWorlds.* 托管 API  ←── 本站 api/ 文档对象
   │  经 IMB* 接口桥接
   ▼
Native 引擎 (C++)  ←── native-1.x-src/ 参考，日常不碰
```

托管层已经把 90% 能力封装好。只有极少数底层能力（渲染回调、场景查询）需要看 `IMB*` 接口。

## 何时需要翻 Native

- 托管 API 确实没暴露你需要的能力（罕见）。
- 调试性能/崩溃到引擎层。
- 阅读 `native-1.x-src/` 里的 `IMB*` 声明理解参数含义。

## 日常应桥回的托管 API

- UI / 输入：[engine 模块](../../api/engine/) · [GauntletLayer](../../api/engine/GauntletLayer/)
- 界面管理：[ScreenManager](../../api/gui/ScreenManager/) · [ScreenBase](../../api/campaign-ext/ScreenBase/)
- 场景 / 战斗：见 [mission 模块](../../api/mission/)

## 风险

- 直接持原生指针 / 在非主线程访问引擎状态 → 崩溃。
- 原生层 API 不稳定、跨版本易变；优先用托管封装。

## 参见

- ↑ [架构总览](../)
- ↔ [SandBox/StoryMode/Native 阅读政策](../sandbox-native-policy/) · [噪声政策](../noise-policy/)
- ↓ [engine 模块](../../api/engine/) · [API 参考](../../api/)
