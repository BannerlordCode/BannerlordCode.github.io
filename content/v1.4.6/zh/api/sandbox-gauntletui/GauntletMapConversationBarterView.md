---
title: "GauntletMapConversationBarterView"
description: "GauntletMapConversationBarterView：SandBox.GauntletUI 的 public 类；公开成员 10 个（方法 6、属性 2、字段 0）。源文件 SandBox.GauntletUI/Map/GauntletMapConversationBarterView.cs。"
---
# GauntletMapConversationBarterView

**Namespace:** `SandBox.GauntletUI.Map`
**Module:** `SandBox.GauntletUI`
**Type:** `public class GauntletMapConversationBarterView`
**File:** `SandBox.GauntletUI/Map/GauntletMapConversationBarterView.cs`

## 概述

GauntletMapConversationBarterView 位于 SandBox.GauntletUI 模块，源文件 SandBox.GauntletUI/Map/GauntletMapConversationBarterView.cs。它是一个 public 类，继承链为 GauntletMapConversationBarterView。public/protected 成员共 10 个：6 方法、2 属性、1 构造函数、1 嵌套类型。

> 本页为批量初稿：签名逐条取自 bannerlord-1.4.6 反编译源码，未经改写。每个方法实际做什么、何时调用、有什么风险，请对照源文件方法体阅读。

## 心智模型

结构事实：GauntletMapConversationBarterView 是 SandBox.GauntletUI 的顶层类型，命名空间与模块目录不同（SandBox.GauntletUI.Map），继承链 GauntletMapConversationBarterView。成员构成以方法为主（方法 6/10，属性 2/10），对外主要以操作入口暴露。本页只列真实签名：每个方法做什么用、何时调用、有哪些坑，需要对照 SandBox.GauntletUI/Map/GauntletMapConversationBarterView.cs 的方法体或该类型的深写页确认。

## 主要成员

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `IsCreated` | `public bool IsCreated` | 属性 |
| `IsActive` | `public bool IsActive` | 属性 |
| `GauntletMapConversationBarterView` | `public GauntletMapConversationBarterView(GauntletLayer layer, GauntletMapConversationBarterView.OnBarterActiveStateChanged onActiveStateChanged)` | 构造函数 |
| `CreateBarterView` | `public void CreateBarterView(BarterData args)` | 方法 |
| `DestroyBarterView` | `public void DestroyBarterView()` | 方法 |
| `Activate` | `public void Activate()` | 方法 |
| `Deactivate` | `public void Deactivate()` | 方法 |
| `TickInput` | `public void TickInput()` | 方法 |
| `OnBarterActiveStateChanged` | `public delegate void OnBarterActiveStateChanged(bool isBarterActive);` | 方法 |
| `OnBarterActiveStateChanged` | `public delegate void OnBarterActiveStateChanged(bool isBarterActive)` | 嵌套类型 |

## 参见

- [↑ sandbox-gauntletui 模块目录](../)
- [↑ API 参考](../../)
- [↑ 版本首页](../../../)
- [同命名空间 GauntletHeirSelectionPopupView](../GauntletHeirSelectionPopupView)
- [同命名空间 GauntletMapBarGlobalLayer](../GauntletMapBarGlobalLayer)
- [同命名空间 GauntletMapBarView](../GauntletMapBarView)
- [同命名空间 GauntletMapBasicView](../GauntletMapBasicView)
