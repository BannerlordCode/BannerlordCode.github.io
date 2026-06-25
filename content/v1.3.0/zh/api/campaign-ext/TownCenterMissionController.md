---
title: "TownCenterMissionController"
description: "TownCenterMissionController 的自动生成类参考。"
---
# TownCenterMissionController

**Namespace:** SandBox.Missions.MissionLogics.Towns
**Module:** SandBox.Missions
**Type:** `public class TownCenterMissionController : MissionLogic`
**Base:** `MissionLogic`
**File:** `SandBox/Missions/MissionLogics/Towns/TownCenterMissionController.cs`

## 概述

`TownCenterMissionController` 是一个控制器，重点不在存储数据，而在接收输入后把系统推向下一个状态。

## 心智模型

把 `TownCenterMissionController` 当作一个 Controller 型扩展点来理解：先确认谁创建它、谁持有它、谁调用它，再决定是继承、组合还是只读使用。

## 主要方法

### OnCreated
`public override void OnCreated()`

**用途 / Purpose:** 在 「created」 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 TownCenterMissionController 实例
TownCenterMissionController townCenterMissionController = ...;
townCenterMissionController.OnCreated();
```

### AfterStart
`public override void AfterStart()`

**用途 / Purpose:** 执行此方法所描述的操作。

```csharp
// 先通过子系统 API 拿到 TownCenterMissionController 实例
TownCenterMissionController townCenterMissionController = ...;
townCenterMissionController.AfterStart();
```

## 使用示例

```csharp
var controller = Mission.Current.GetMissionBehavior<TownCenterMissionController>();
```

## 参见

- [本区域目录](../)