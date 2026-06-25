---
title: "HideoutPhasedMissionController"
description: "HideoutPhasedMissionController 的自动生成类参考。"
---
# HideoutPhasedMissionController

**Namespace:** TaleWorlds.MountAndBlade.Source.Missions
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class HideoutPhasedMissionController : MissionLogic`
**Base:** `MissionLogic`
**File:** `bin/TaleWorlds.MountAndBlade/TaleWorlds.MountAndBlade.Source.Missions/HideoutPhasedMissionController.cs`

## 概述

`HideoutPhasedMissionController` 是一个控制器，重点不在存储数据，而在接收输入后把系统推向下一个状态。

## 心智模型

把 `HideoutPhasedMissionController` 当作一个 Controller 型扩展点来理解：先确认谁创建它、谁持有它、谁调用它，再决定是继承、组合还是只读使用。

## 主要方法

### OnMissionTick
`public override void OnMissionTick(float dt)`

**用途 / Purpose:** 在 mission tick 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 HideoutPhasedMissionController 实例
HideoutPhasedMissionController hideoutPhasedMissionController = ...;
hideoutPhasedMissionController.OnMissionTick(0);
```

### OnBehaviorInitialize
`public override void OnBehaviorInitialize()`

**用途 / Purpose:** 在 behavior initialize 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 HideoutPhasedMissionController 实例
HideoutPhasedMissionController hideoutPhasedMissionController = ...;
hideoutPhasedMissionController.OnBehaviorInitialize();
```

### AfterStart
`public override void AfterStart()`

**用途 / Purpose:** 调用 AfterStart 对应的操作。

```csharp
// 先通过子系统 API 拿到 HideoutPhasedMissionController 实例
HideoutPhasedMissionController hideoutPhasedMissionController = ...;
hideoutPhasedMissionController.AfterStart();
```

## 使用示例

```csharp
var controller = Mission.Current.GetMissionBehavior<HideoutPhasedMissionController>();
```

## 参见

- [本区域目录](../)