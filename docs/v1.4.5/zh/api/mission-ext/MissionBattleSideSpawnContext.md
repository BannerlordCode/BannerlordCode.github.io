<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `MissionBattleSideSpawnContext`
- [← 本领域 / 返回 mission-ext](./)
- [↑ API 目录](../)
- [🏠 首页 v1.4.5](../../)
- [⭐ 版本架构](../../architecture/)
<!-- END BREADCRUMB -->
# MissionBattleSideSpawnContext

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class MissionBattleSideSpawnContext`
**Base:** 无
**File:** `Bannerlord.Source/bin/TaleWorlds.MountAndBlade/TaleWorlds.MountAndBlade/MissionBattleSideSpawnContext.cs`

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

**用途 / Purpose:** 获取 `number of player controllable troops` 的当前值。

### TryReinforcementSpawn
`public int TryReinforcementSpawn()`

**用途 / Purpose:** 尝试获取 `reinforcement spawn`，通常以 out 参数返回结果。

### GetTeamFormationsSpawnData
`public void GetTeamFormationsSpawnData(out MBList<(Team team, MissionFormationSpawnData formationSpawnData)> teamFormationsSpawnData)`

**用途 / Purpose:** 获取 `team formations spawn data` 的当前值。

### ReserveTroops
`public void ReserveTroops(int number)`

**用途 / Purpose:** 处理 `reserve troops` 相关逻辑。

### GetGeneralCharacter
`public BasicCharacterObject GetGeneralCharacter()`

**用途 / Purpose:** 获取 `general character` 的当前值。

### CheckReinforcementBatch
`public bool CheckReinforcementBatch()`

**用途 / Purpose:** 处理 `check reinforcement batch` 相关逻辑。

### GetAllTroops
`public IEnumerable<IAgentOriginBase> GetAllTroops()`

**用途 / Purpose:** 获取 `all troops` 的当前值。

### SpawnTroops
`public int SpawnTroops(int number, bool isReinforcement)`

**用途 / Purpose:** 处理 `spawn troops` 相关逻辑。

### SetSpawnWithHorses
`public void SetSpawnWithHorses(bool spawnWithHorses)`

**用途 / Purpose:** 设置 `spawn with horses` 的值或状态。

### SetBannerBearerLogic
`public void SetBannerBearerLogic(BannerBearerLogic bannerBearerLogic)`

**用途 / Purpose:** 设置 `banner bearer logic` 的值或状态。

### SetReinforcementsNotifiedOnLastBatch
`public void SetReinforcementsNotifiedOnLastBatch(bool value)`

**用途 / Purpose:** 设置 `reinforcements notified on last batch` 的值或状态。

### SetSpawnTroops
`public void SetSpawnTroops(bool spawnTroops)`

**用途 / Purpose:** 设置 `spawn troops` 的值或状态。

### OnInitialSpawnOver
`public void OnInitialSpawnOver()`

**用途 / Purpose:** 当 `initial spawn over` 事件触发时调用此方法。

## 使用示例

```csharp
var value = new MissionBattleSideSpawnContext();
value.GetNumberOfPlayerControllableTroops();
```

## 参见

- [完整类目录](../catalog)