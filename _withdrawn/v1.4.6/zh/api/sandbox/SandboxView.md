---
title: "SandboxView"
description: "SandboxView：SandBox.View 的 public 类；公开成员 7 个（方法 5、属性 2、字段 0）。canonical 桶 sandbox。源文件 SandBox.View/SandboxView.cs。"
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# SandboxView

**Namespace:** `SandBox.View`
**Module:** `SandBox.View`
**Type:** `public abstract class SandboxView`
**File:** `SandBox.View/SandboxView.cs`
**Bucket:** `sandbox` (rule:SandBox)

## 概述

SandboxView 位于 SandBox.View 模块，源文件 SandBox.View/SandboxView.cs。它是一个 public 类（abstract），继承链为 SandboxView。public/protected 成员共 7 个：5 方法、2 属性。

> 本页为批量初稿：签名逐条取自 bannerlord-1.4.6 反编译源码，未经改写。桶归属由 `tools/_dir-map-canonical.json` 现算。每个方法实际做什么、何时调用、有什么风险，请对照源文件方法体阅读。

## 心智模型

结构事实：SandboxView 落在 canonical 桶 `sandbox`（命中规则 `rule:SandBox`），命名空间 `SandBox.View`，继承链 SandboxView。成员构成以方法为主（方法 5/7，属性 2/7），对外主要以操作入口暴露。本页只列真实签名：每个方法做什么用、何时调用、有哪些坑，需要对照 SandBox.View/SandboxView.cs 的方法体或该类型的深写页确认。

## 主要成员

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `IsFinalized` | `public bool IsFinalized` | 属性 |
| `Layer` | `public ScreenLayer Layer` | 属性 |
| `OnActivate` | `protected internal virtual void OnActivate()` | 方法 |
| `OnDeactivate` | `protected internal virtual void OnDeactivate()` | 方法 |
| `OnInitialize` | `protected internal virtual void OnInitialize()` | 方法 |
| `OnFinalize` | `protected internal virtual void OnFinalize()` | 方法 |
| `OnFrameTick` | `protected internal virtual void OnFrameTick(float dt)` | 方法 |

## 参见

- [↑ 本桶目录](..//)
- [↑ API 参考](../..//)
- [↑ 版本首页](../../..//)
- [同命名空间 CampaignMusicHandler](../CampaignMusicHandler/)
- [同命名空间 IChangeableScreen](../IChangeableScreen/)
- [同命名空间 MainHeroSaveVisualSupplier](../MainHeroSaveVisualSupplier/)
- [同命名空间 PreloadScreen](../PreloadScreen/)
