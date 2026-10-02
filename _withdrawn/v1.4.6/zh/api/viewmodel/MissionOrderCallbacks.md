---
title: "MissionOrderCallbacks"
description: "MissionOrderCallbacks：TaleWorlds.MountAndBlade.ViewModelCollection.Order 的 public 结构体；公开成员 12 个（方法 6、属性 0、字段 0）。canonical 桶 viewmodel。源文件 TaleWorlds.MountAndBlade.ViewModelCollection/Order/MissionOrderCallbacks.cs。"
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# MissionOrderCallbacks

**Namespace:** `TaleWorlds.MountAndBlade.ViewModelCollection.Order`
**Module:** `TaleWorlds.MountAndBlade.ViewModelCollection`
**Type:** `public struct MissionOrderCallbacks`
**File:** `TaleWorlds.MountAndBlade.ViewModelCollection/Order/MissionOrderCallbacks.cs`
**Bucket:** `viewmodel` (rule:TaleWorlds.MountAndBlade.ViewModelCollection)

## 概述

MissionOrderCallbacks 位于 TaleWorlds.MountAndBlade.ViewModelCollection 模块，源文件 TaleWorlds.MountAndBlade.ViewModelCollection/Order/MissionOrderCallbacks.cs。它是一个 public 结构体，继承链为 MissionOrderCallbacks。public/protected 成员共 12 个：6 方法、6 嵌套类型。

> 本页为批量初稿：签名逐条取自 bannerlord-1.4.6 反编译源码，未经改写。桶归属由 `tools/_dir-map-canonical.json` 现算。每个方法实际做什么、何时调用、有什么风险，请对照源文件方法体阅读。

## 心智模型

结构事实：MissionOrderCallbacks 落在 canonical 桶 `viewmodel`（命中规则 `rule:TaleWorlds.MountAndBlade.ViewModelCollection`），命名空间 `TaleWorlds.MountAndBlade.ViewModelCollection.Order`，继承链 MissionOrderCallbacks。成员构成以方法为主（方法 6/12，属性 0/12），对外主要以操作入口暴露。本页只列真实签名：每个方法做什么用、何时调用、有哪些坑，需要对照 TaleWorlds.MountAndBlade.ViewModelCollection/Order/MissionOrderCallbacks.cs 的方法体或该类型的深写页确认。

## 主要成员

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `OnRefreshVisualsDelegate` | `public delegate void OnRefreshVisualsDelegate();` | 方法 |
| `OnToggleActivateOrderStateDelegate` | `public delegate void OnToggleActivateOrderStateDelegate();` | 方法 |
| `OnTransferTroopsFinishedDelegate` | `public delegate void OnTransferTroopsFinishedDelegate();` | 方法 |
| `OnBeforeOrderDelegate` | `public delegate void OnBeforeOrderDelegate();` | 方法 |
| `ToggleOrderPositionVisibilityDelegate` | `public delegate void ToggleOrderPositionVisibilityDelegate(bool value);` | 方法 |
| `GetOrderExecutionParametersDelegate` | `public delegate VisualOrderExecutionParameters GetOrderExecutionParametersDelegate();` | 方法 |
| `OnRefreshVisualsDelegate` | `public delegate void OnRefreshVisualsDelegate()` | 嵌套类型 |
| `OnToggleActivateOrderStateDelegate` | `public delegate void OnToggleActivateOrderStateDelegate()` | 嵌套类型 |
| `OnTransferTroopsFinishedDelegate` | `public delegate void OnTransferTroopsFinishedDelegate()` | 嵌套类型 |
| `OnBeforeOrderDelegate` | `public delegate void OnBeforeOrderDelegate()` | 嵌套类型 |
| `ToggleOrderPositionVisibilityDelegate` | `public delegate void ToggleOrderPositionVisibilityDelegate(bool value)` | 嵌套类型 |
| `GetOrderExecutionParametersDelegate` | `public delegate VisualOrderExecutionParameters GetOrderExecutionParametersDelegate()` | 嵌套类型 |

## 参见

- [↑ 本桶目录](..//)
- [↑ API 参考](../..//)
- [↑ 版本首页](../../..//)
- [同命名空间 DeploymentSiegeMachineVM](../DeploymentSiegeMachineVM/)
- [同命名空间 MissionOrderDeploymentControllerVM](../MissionOrderDeploymentControllerVM/)
- [同命名空间 MissionOrderTroopControllerVM](../MissionOrderTroopControllerVM/)
- [同命名空间 MissionOrderVM](../MissionOrderVM/)
