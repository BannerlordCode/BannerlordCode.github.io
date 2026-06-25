---
title: "SimpleMountedPlayerMissionController"
description: "SimpleMountedPlayerMissionController 的自动生成类参考。"
---
# SimpleMountedPlayerMissionController

**Namespace:** TaleWorlds.MountAndBlade.Source.Missions
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class SimpleMountedPlayerMissionController : MissionLogic`
**Base:** `MissionLogic`
**File:** `bin/TaleWorlds.MountAndBlade/TaleWorlds.MountAndBlade.Source.Missions/SimpleMountedPlayerMissionController.cs`

## 概述

`SimpleMountedPlayerMissionController` 是一个控制器，重点不在存储数据，而在接收输入后把系统推向下一个状态。

## 心智模型

把 `SimpleMountedPlayerMissionController` 当作一个 Controller 型扩展点来理解：先确认谁创建它、谁持有它、谁调用它，再决定是继承、组合还是只读使用。

## 主要方法

### EarlyStart
`public override void EarlyStart()`

**用途 / Purpose:** 处理与 「early start」 相关的逻辑。

```csharp
// 先通过子系统 API 拿到 SimpleMountedPlayerMissionController 实例
SimpleMountedPlayerMissionController simpleMountedPlayerMissionController = ...;
simpleMountedPlayerMissionController.EarlyStart();
```

### AfterStart
`public override void AfterStart()`

**用途 / Purpose:** 在 「start」 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 SimpleMountedPlayerMissionController 实例
SimpleMountedPlayerMissionController simpleMountedPlayerMissionController = ...;
simpleMountedPlayerMissionController.AfterStart();
```

### MissionEnded
`public override bool MissionEnded(ref MissionResult missionResult)`

**用途 / Purpose:** 处理与 「mission ended」 相关的逻辑。

```csharp
// 先通过子系统 API 拿到 SimpleMountedPlayerMissionController 实例
SimpleMountedPlayerMissionController simpleMountedPlayerMissionController = ...;
var result = simpleMountedPlayerMissionController.MissionEnded(missionResult);
```

## 使用示例

```csharp
var controller = Mission.Current.GetMissionBehavior<SimpleMountedPlayerMissionController>();
```

## 参见

- [本区域目录](../)