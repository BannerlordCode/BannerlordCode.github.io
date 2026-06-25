---
title: "DebugAgentTeleporterMissionController"
description: "DebugAgentTeleporterMissionController 的自动生成类参考。"
---
# DebugAgentTeleporterMissionController

**Namespace:** TaleWorlds.MountAndBlade.Source.Missions
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class DebugAgentTeleporterMissionController : MissionLogic`
**Base:** `MissionLogic`
**File:** `TaleWorlds.MountAndBlade/Source/Missions/DebugAgentTeleporterMissionController.cs`

## 概述

`DebugAgentTeleporterMissionController` 是一个控制器，重点不在存储数据，而在接收输入后把系统推向下一个状态。

## 心智模型

把 `DebugAgentTeleporterMissionController` 当作一个 Controller 型扩展点来理解：先确认谁创建它、谁持有它、谁调用它，再决定是继承、组合还是只读使用。

## 主要方法

### AfterStart
`public override void AfterStart()`

**用途 / Purpose:** 在 「start」 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 DebugAgentTeleporterMissionController 实例
DebugAgentTeleporterMissionController debugAgentTeleporterMissionController = ...;
debugAgentTeleporterMissionController.AfterStart();
```

### OnMissionTick
`public override void OnMissionTick(float dt)`

**用途 / Purpose:** 在 「mission tick」 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 DebugAgentTeleporterMissionController 实例
DebugAgentTeleporterMissionController debugAgentTeleporterMissionController = ...;
debugAgentTeleporterMissionController.OnMissionTick(0);
```

## 使用示例

```csharp
var controller = Mission.Current.GetMissionBehavior<DebugAgentTeleporterMissionController>();
```

## 参见

- [本区域目录](../)