---
title: "CivilianPortShipSpawnMissionLogic"
description: "CivilianPortShipSpawnMissionLogic 的自动生成类参考。"
---
# CivilianPortShipSpawnMissionLogic

**Namespace:** SandBox.Missions
**Module:** SandBox.Missions
**Type:** `public class CivilianPortShipSpawnMissionLogic : MissionLogic`
**Base:** `MissionLogic`
**File:** `Modules.SandBox/SandBox/SandBox.Missions/CivilianPortShipSpawnMissionLogic.cs`

## 概述

`CivilianPortShipSpawnMissionLogic` 更偏向行为逻辑层：它响应事件、驱动流程，并在每帧或关键节点更新系统状态。

## 心智模型

把 `CivilianPortShipSpawnMissionLogic` 当作一个 Logic 型扩展点来理解：先确认谁创建它、谁持有它、谁调用它，再决定是继承、组合还是只读使用。

## 主要方法

### OnBehaviorInitialize
`public override void OnBehaviorInitialize()`

**用途 / Purpose:** 在 「behavior initialize」 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 CivilianPortShipSpawnMissionLogic 实例
CivilianPortShipSpawnMissionLogic civilianPortShipSpawnMissionLogic = ...;
civilianPortShipSpawnMissionLogic.OnBehaviorInitialize();
```

### EarlyStart
`public override void EarlyStart()`

**用途 / Purpose:** 执行此方法所描述的操作。

```csharp
// 先通过子系统 API 拿到 CivilianPortShipSpawnMissionLogic 实例
CivilianPortShipSpawnMissionLogic civilianPortShipSpawnMissionLogic = ...;
civilianPortShipSpawnMissionLogic.EarlyStart();
```

### OnMissionTick
`public override void OnMissionTick(float dt)`

**用途 / Purpose:** 在 「mission tick」 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 CivilianPortShipSpawnMissionLogic 实例
CivilianPortShipSpawnMissionLogic civilianPortShipSpawnMissionLogic = ...;
civilianPortShipSpawnMissionLogic.OnMissionTick(0);
```

## 使用示例

```csharp
var behavior = Mission.Current.GetMissionBehavior<CivilianPortShipSpawnMissionLogic>();
```

## 参见

- [本区域目录](../)