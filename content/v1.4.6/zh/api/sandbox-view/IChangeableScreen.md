---
title: "IChangeableScreen"
description: "IChangeableScreen：SandBox.View 的 public 接口；公开成员 4 个（方法 4、属性 0、字段 0）。源文件 SandBox.View/IChangeableScreen.cs。"
---
# IChangeableScreen

**Namespace:** `SandBox.View`
**Module:** `SandBox.View`
**Type:** `public interface IChangeableScreen`
**File:** `SandBox.View/IChangeableScreen.cs`

## 概述

IChangeableScreen 位于 SandBox.View 模块，源文件 SandBox.View/IChangeableScreen.cs。它是一个 public 接口，继承链为 IChangeableScreen。public/protected 成员共 4 个：4 方法。

> 本页为批量初稿：签名逐条取自 bannerlord-1.4.6 反编译源码，未经改写。每个方法实际做什么、何时调用、有什么风险，请对照源文件方法体阅读。

## 心智模型

结构事实：IChangeableScreen 是 SandBox.View 的顶层类型，命名空间与模块目录一致，继承链 IChangeableScreen。成员构成以方法为主（方法 4/4，属性 0/4），对外主要以操作入口暴露。本页只列真实签名：每个方法做什么用、何时调用、有哪些坑，需要对照 SandBox.View/IChangeableScreen.cs 的方法体或该类型的深写页确认。

## 主要成员

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `AnyUnsavedChanges` | `bool AnyUnsavedChanges();` | 方法 |
| `CanChangesBeApplied` | `bool CanChangesBeApplied();` | 方法 |
| `ApplyChanges` | `void ApplyChanges();` | 方法 |
| `ResetChanges` | `void ResetChanges();` | 方法 |

## 参见

- [↑ sandbox-view 模块目录](../)
- [↑ API 参考](../../)
- [↑ 版本首页](../../../)
- [同命名空间 CampaignMusicHandler](../CampaignMusicHandler)
- [同命名空间 MainHeroSaveVisualSupplier](../MainHeroSaveVisualSupplier)
- [同命名空间 PreloadScreen](../PreloadScreen)
- [同命名空间 SandboxView](../SandboxView)
