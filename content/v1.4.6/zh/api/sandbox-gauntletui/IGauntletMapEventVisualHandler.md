---
title: "IGauntletMapEventVisualHandler"
description: "IGauntletMapEventVisualHandler：SandBox.GauntletUI 的 public 接口；公开成员 4 个（方法 4、属性 0、字段 0）。源文件 SandBox.GauntletUI/Map/IGauntletMapEventVisualHandler.cs。"
---
# IGauntletMapEventVisualHandler

**Namespace:** `SandBox.GauntletUI.Map`
**Module:** `SandBox.GauntletUI`
**Type:** `public interface IGauntletMapEventVisualHandler`
**File:** `SandBox.GauntletUI/Map/IGauntletMapEventVisualHandler.cs`

## 概述

IGauntletMapEventVisualHandler 位于 SandBox.GauntletUI 模块，源文件 SandBox.GauntletUI/Map/IGauntletMapEventVisualHandler.cs。它是一个 public 接口，继承链为 IGauntletMapEventVisualHandler。public/protected 成员共 4 个：4 方法。

> 本页为批量初稿：签名逐条取自 bannerlord-1.4.6 反编译源码，未经改写。每个方法实际做什么、何时调用、有什么风险，请对照源文件方法体阅读。

## 心智模型

结构事实：IGauntletMapEventVisualHandler 是 SandBox.GauntletUI 的顶层类型，命名空间与模块目录不同（SandBox.GauntletUI.Map），继承链 IGauntletMapEventVisualHandler。成员构成以方法为主（方法 4/4，属性 0/4），对外主要以操作入口暴露。本页只列真实签名：每个方法做什么用、何时调用、有哪些坑，需要对照 SandBox.GauntletUI/Map/IGauntletMapEventVisualHandler.cs 的方法体或该类型的深写页确认。

## 主要成员

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `OnNewEventStarted` | `void OnNewEventStarted(GauntletMapEventVisual newEvent);` | 方法 |
| `OnInitialized` | `void OnInitialized(GauntletMapEventVisual newEvent);` | 方法 |
| `OnEventEnded` | `void OnEventEnded(GauntletMapEventVisual newEvent);` | 方法 |
| `OnEventVisibilityChanged` | `void OnEventVisibilityChanged(GauntletMapEventVisual visibilityChangedEvent);` | 方法 |

## 参见

- [↑ sandbox-gauntletui 模块目录](../)
- [↑ API 参考](../../)
- [↑ 版本首页](../../../)
- [同命名空间 GauntletHeirSelectionPopupView](../GauntletHeirSelectionPopupView)
- [同命名空间 GauntletMapBarGlobalLayer](../GauntletMapBarGlobalLayer)
- [同命名空间 GauntletMapBarView](../GauntletMapBarView)
- [同命名空间 GauntletMapBasicView](../GauntletMapBasicView)
