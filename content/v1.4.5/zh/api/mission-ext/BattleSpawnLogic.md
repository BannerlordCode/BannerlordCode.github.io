---
title: "BattleSpawnLogic"
description: "BattleSpawnLogic 的自动生成类参考。"
---
# BattleSpawnLogic

**Namespace:** TaleWorlds.MountAndBlade.Source.Missions
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class BattleSpawnLogic : MissionLogic`
**Base:** `MissionLogic`
**File:** `bin/TaleWorlds.MountAndBlade/TaleWorlds.MountAndBlade.Source.Missions/BattleSpawnLogic.cs`

## 概述

`BattleSpawnLogic` 更偏向行为逻辑层：它响应事件、驱动流程，并在每帧或关键节点更新系统状态。

## 心智模型

把 `BattleSpawnLogic` 当作一个 Logic 型扩展点来理解：先确认谁创建它、谁持有它、谁调用它，再决定是继承、组合还是只读使用。

## 主要方法

### OnPreMissionTick
`public override void OnPreMissionTick(float dt)`

**用途 / Purpose:** 在 pre mission tick 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 BattleSpawnLogic 实例
BattleSpawnLogic battleSpawnLogic = ...;
battleSpawnLogic.OnPreMissionTick(0);
```

## 使用示例

```csharp
var behavior = Mission.Current.GetMissionBehavior<BattleSpawnLogic>();
```

## 参见

- [本区域目录](../)