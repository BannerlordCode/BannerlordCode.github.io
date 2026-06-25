---
title: "IndoorMissionController"
description: "IndoorMissionController 的自动生成类参考。"
---
# IndoorMissionController

**Namespace:** SandBox.Missions.MissionLogics
**Module:** SandBox.Missions
**Type:** `public class IndoorMissionController : MissionLogic`
**Base:** `MissionLogic`
**File:** `Modules.SandBox/SandBox/SandBox.Missions.MissionLogics/IndoorMissionController.cs`

## 概述

`IndoorMissionController` 是一个控制器，重点不在存储数据，而在接收输入后把系统推向下一个状态。

## 心智模型

把 `IndoorMissionController` 当作一个 Controller 型扩展点来理解：先确认谁创建它、谁持有它、谁调用它，再决定是继承、组合还是只读使用。

## 主要方法

### OnCreated
`public override void OnCreated()`

**用途 / Purpose:** 在 「created」 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 IndoorMissionController 实例
IndoorMissionController indoorMissionController = ...;
indoorMissionController.OnCreated();
```

### OnBehaviorInitialize
`public override void OnBehaviorInitialize()`

**用途 / Purpose:** 在 「behavior initialize」 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 IndoorMissionController 实例
IndoorMissionController indoorMissionController = ...;
indoorMissionController.OnBehaviorInitialize();
```

### AfterStart
`public override void AfterStart()`

**用途 / Purpose:** 在 「start」 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 IndoorMissionController 实例
IndoorMissionController indoorMissionController = ...;
indoorMissionController.AfterStart();
```

## 使用示例

```csharp
var controller = Mission.Current.GetMissionBehavior<IndoorMissionController>();
```

## 参见

- [本区域目录](../)