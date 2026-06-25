---
title: "MissionBattleSideSpawnContext"
description: "MissionBattleSideSpawnContext 的自动生成类参考。"
---
# MissionBattleSideSpawnContext

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class MissionBattleSideSpawnContext`
**Base:** 无
**File:** `bin/TaleWorlds.MountAndBlade/TaleWorlds.MountAndBlade/MissionBattleSideSpawnContext.cs`

## 概述

`MissionBattleSideSpawnContext` 位于 `TaleWorlds.MountAndBlade`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `TaleWorlds.MountAndBlade` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要属性

| Name | Signature |
|------|-----------|
| `TroopSpawnActive` | `public bool TroopSpawnActive { get; }` |
| `IsPlayerSide` | `public bool IsPlayerSide { get; }` |
| `ReinforcementSpawnActive` | `public bool ReinforcementSpawnActive { get; }` |
| `ReinforcementsNotifiedOnLastBatch` | `public bool ReinforcementsNotifiedOnLastBatch { get; }` |
| `HasSpawnableReinforcements` | `public bool HasSpawnableReinforcements { get; }` |
| `ForceSpawnPlayerMounted` | `public bool ForceSpawnPlayerMounted { get; }` |

## 主要方法

### GetNumberOfPlayerControllableTroops
`public int GetNumberOfPlayerControllableTroops()`

**用途 / Purpose:** 读取并返回当前对象中 「number of player controllable troops」 的结果。

```csharp
// 先通过子系统 API 拿到 MissionBattleSideSpawnContext 实例
MissionBattleSideSpawnContext missionBattleSideSpawnContext = ...;
var result = missionBattleSideSpawnContext.GetNumberOfPlayerControllableTroops();
```

### TryReinforcementSpawn
`public int TryReinforcementSpawn()`

**用途 / Purpose:** 尝试获取 「reinforcement spawn」 的值，通常通过 out 参数返回是否成功。

```csharp
// 先通过子系统 API 拿到 MissionBattleSideSpawnContext 实例
MissionBattleSideSpawnContext missionBattleSideSpawnContext = ...;
var result = missionBattleSideSpawnContext.TryReinforcementSpawn();
```

### GetTeamFormationsSpawnData
`public void GetTeamFormationsSpawnData(out MBList<(Team team, MissionFormationSpawnData formationSpawnData)> teamFormationsSpawnData)`

**用途 / Purpose:** 读取并返回当前对象中 「team formations spawn data」 的结果。

```csharp
// 先通过子系统 API 拿到 MissionBattleSideSpawnContext 实例
MissionBattleSideSpawnContext missionBattleSideSpawnContext = ...;
missionBattleSideSpawnContext.GetTeamFormationsSpawnData(team, teamFormationsSpawnData);
```

### ReserveTroops
`public void ReserveTroops(int number)`

**用途 / Purpose:** 处理与 「reserve troops」 相关的逻辑。

```csharp
// 先通过子系统 API 拿到 MissionBattleSideSpawnContext 实例
MissionBattleSideSpawnContext missionBattleSideSpawnContext = ...;
missionBattleSideSpawnContext.ReserveTroops(0);
```

### GetGeneralCharacter
`public BasicCharacterObject GetGeneralCharacter()`

**用途 / Purpose:** 读取并返回当前对象中 「general character」 的结果。

```csharp
// 先通过子系统 API 拿到 MissionBattleSideSpawnContext 实例
MissionBattleSideSpawnContext missionBattleSideSpawnContext = ...;
var result = missionBattleSideSpawnContext.GetGeneralCharacter();
```

### CheckReinforcementBatch
`public bool CheckReinforcementBatch()`

**用途 / Purpose:** 检查「reinforcement batch」在当前对象中是否成立。

```csharp
// 先通过子系统 API 拿到 MissionBattleSideSpawnContext 实例
MissionBattleSideSpawnContext missionBattleSideSpawnContext = ...;
var result = missionBattleSideSpawnContext.CheckReinforcementBatch();
```

### GetAllTroops
`public IEnumerable<IAgentOriginBase> GetAllTroops()`

**用途 / Purpose:** 读取并返回当前对象中 「all troops」 的结果。

```csharp
// 先通过子系统 API 拿到 MissionBattleSideSpawnContext 实例
MissionBattleSideSpawnContext missionBattleSideSpawnContext = ...;
var result = missionBattleSideSpawnContext.GetAllTroops();
```

### SpawnTroops
`public int SpawnTroops(int number, bool isReinforcement)`

**用途 / Purpose:** 处理与 「spawn troops」 相关的逻辑。

```csharp
// 先通过子系统 API 拿到 MissionBattleSideSpawnContext 实例
MissionBattleSideSpawnContext missionBattleSideSpawnContext = ...;
var result = missionBattleSideSpawnContext.SpawnTroops(0, false);
```

### SetSpawnWithHorses
`public void SetSpawnWithHorses(bool spawnWithHorses)`

**用途 / Purpose:** 为 「spawn with horses」 赋新值，并同步更新对象内部状态。

```csharp
// 先通过子系统 API 拿到 MissionBattleSideSpawnContext 实例
MissionBattleSideSpawnContext missionBattleSideSpawnContext = ...;
missionBattleSideSpawnContext.SetSpawnWithHorses(false);
```

### SetBannerBearerLogic
`public void SetBannerBearerLogic(BannerBearerLogic bannerBearerLogic)`

**用途 / Purpose:** 为 「banner bearer logic」 赋新值，并同步更新对象内部状态。

```csharp
// 先通过子系统 API 拿到 MissionBattleSideSpawnContext 实例
MissionBattleSideSpawnContext missionBattleSideSpawnContext = ...;
missionBattleSideSpawnContext.SetBannerBearerLogic(bannerBearerLogic);
```

### SetReinforcementsNotifiedOnLastBatch
`public void SetReinforcementsNotifiedOnLastBatch(bool value)`

**用途 / Purpose:** 为 「reinforcements notified on last batch」 赋新值，并同步更新对象内部状态。

```csharp
// 先通过子系统 API 拿到 MissionBattleSideSpawnContext 实例
MissionBattleSideSpawnContext missionBattleSideSpawnContext = ...;
missionBattleSideSpawnContext.SetReinforcementsNotifiedOnLastBatch(false);
```

### SetSpawnTroops
`public void SetSpawnTroops(bool spawnTroops)`

**用途 / Purpose:** 为 「spawn troops」 赋新值，并同步更新对象内部状态。

```csharp
// 先通过子系统 API 拿到 MissionBattleSideSpawnContext 实例
MissionBattleSideSpawnContext missionBattleSideSpawnContext = ...;
missionBattleSideSpawnContext.SetSpawnTroops(false);
```

### OnInitialSpawnOver
`public void OnInitialSpawnOver()`

**用途 / Purpose:** 在 「initial spawn over」 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 MissionBattleSideSpawnContext 实例
MissionBattleSideSpawnContext missionBattleSideSpawnContext = ...;
missionBattleSideSpawnContext.OnInitialSpawnOver();
```

## 使用示例

```csharp
// 通常从对应子系统 API 获取实例后调用
MissionBattleSideSpawnContext missionBattleSideSpawnContext = ...;
missionBattleSideSpawnContext.GetNumberOfPlayerControllableTroops();
```

## 参见

- [本区域目录](../)