---
title: "MissionCombatantsLogic"
description: "MissionCombatantsLogic 的自动生成类参考。"
---
# MissionCombatantsLogic

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class MissionCombatantsLogic : MissionLogic`
**Base:** `MissionLogic`
**File:** `bin/TaleWorlds.MountAndBlade/TaleWorlds.MountAndBlade/MissionCombatantsLogic.cs`

## 概述

`MissionCombatantsLogic` 更偏向行为逻辑层：它响应事件、驱动流程，并在每帧或关键节点更新系统状态。

## 心智模型

把 `MissionCombatantsLogic` 当作一个 Logic 型扩展点来理解：先确认谁创建它、谁持有它、谁调用它，再决定是继承、组合还是只读使用。

## 主要属性

| Name | Signature |
|------|-----------|
| `PlayerSide` | `public BattleSideEnum PlayerSide { get; }` |

## 主要方法

### GetBannerForSide
`public Banner GetBannerForSide(BattleSideEnum side)`

**用途 / Purpose:** 读取并返回当前对象中 「banner for side」 的结果。

```csharp
// 先通过子系统 API 拿到 MissionCombatantsLogic 实例
MissionCombatantsLogic missionCombatantsLogic = ...;
var result = missionCombatantsLogic.GetBannerForSide(side);
```

### OnBehaviorInitialize
`public override void OnBehaviorInitialize()`

**用途 / Purpose:** 在 「behavior initialize」 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 MissionCombatantsLogic 实例
MissionCombatantsLogic missionCombatantsLogic = ...;
missionCombatantsLogic.OnBehaviorInitialize();
```

### EarlyStart
`public override void EarlyStart()`

**用途 / Purpose:** 处理与 「early start」 相关的逻辑。

```csharp
// 先通过子系统 API 拿到 MissionCombatantsLogic 实例
MissionCombatantsLogic missionCombatantsLogic = ...;
missionCombatantsLogic.EarlyStart();
```

### AfterStart
`public override void AfterStart()`

**用途 / Purpose:** 在 「start」 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 MissionCombatantsLogic 实例
MissionCombatantsLogic missionCombatantsLogic = ...;
missionCombatantsLogic.AfterStart();
```

### GetAllCombatants
`public IEnumerable<IBattleCombatant> GetAllCombatants()`

**用途 / Purpose:** 读取并返回当前对象中 「all combatants」 的结果。

```csharp
// 先通过子系统 API 拿到 MissionCombatantsLogic 实例
MissionCombatantsLogic missionCombatantsLogic = ...;
var result = missionCombatantsLogic.GetAllCombatants();
```

### SupportsAllyTeamOnPlayerSide
`public static bool SupportsAllyTeamOnPlayerSide(IEnumerable<IBattleCombatant> playerSideBattleCombatants, IBattleCombatant playerBattleCombatant, bool isPlayerSergeant, bool isNavalLandHybridMission, out IBattleCombatant allyCombatant)`

**用途 / Purpose:** 处理与 「supports ally team on player side」 相关的逻辑。

```csharp
// 静态调用，不需要实例
MissionCombatantsLogic.SupportsAllyTeamOnPlayerSide(playerSideBattleCombatants, playerBattleCombatant, false, false, allyCombatant);
```

## 使用示例

```csharp
var behavior = Mission.Current.GetMissionBehavior<MissionCombatantsLogic>();
```

## 参见

- [本区域目录](../)