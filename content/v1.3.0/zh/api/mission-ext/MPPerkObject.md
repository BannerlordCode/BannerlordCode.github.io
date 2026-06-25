---
title: "MPPerkObject"
---
<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `MPPerkObject`
- [← 本领域 / 返回 mission-ext](./)
- [↑ API 目录](../)
- [🏠 首页 v1.3.0](../../)
- [⭐ 版本架构](../../architecture/)
<!-- END BREADCRUMB -->
# MPPerkObject

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class MPPerkObject : IReadOnlyPerkObject`
**Base:** `IReadOnlyPerkObject`
**File:** `TaleWorlds.MountAndBlade/MPPerkObject.cs`

## 概述

`MPPerkObject` 位于 `TaleWorlds.MountAndBlade`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `TaleWorlds.MountAndBlade` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要属性

| Name | Signature |
|------|-----------|
| `Name` | `public TextObject Name { get; }` |
| `Description` | `public TextObject Description { get; }` |
| `HasBannerBearer` | `public bool HasBannerBearer { get; }` |
| `GameModes` | `public List<string> GameModes { get; }` |
| `PerkListIndex` | `public int PerkListIndex { get; }` |
| `IconId` | `public string IconId { get; }` |
| `HeroIdleAnimOverride` | `public string HeroIdleAnimOverride { get; }` |
| `HeroMountIdleAnimOverride` | `public string HeroMountIdleAnimOverride { get; }` |
| `TroopIdleAnimOverride` | `public string TroopIdleAnimOverride { get; }` |
| `TroopMountIdleAnimOverride` | `public string TroopMountIdleAnimOverride { get; }` |
| `IsWarmup` | `public bool IsWarmup { get; }` |
| `IsWarmup` | `public bool IsWarmup { get; }` |
| `IsWarmup` | `public bool IsWarmup { get; }` |

## 主要方法

### Clone
`public MPPerkObject Clone(MissionPeer peer)`

**用途 / Purpose:** 处理 `clone` 相关逻辑。

### Reset
`public void Reset()`

**用途 / Purpose:** 将 `reset` 重置为初始状态。

### GetExtraTroopCount
`public int GetExtraTroopCount(bool isWarmup)`

**用途 / Purpose:** 获取 `extra troop count` 的当前值。

### GetAlternativeEquipments
`public List<ValueTuple<EquipmentIndex, EquipmentElement>> GetAlternativeEquipments(bool isWarmup, bool isPlayer, List<ValueTuple<EquipmentIndex, EquipmentElement>> alternativeEquipments, bool getAllEquipments = false)`

**用途 / Purpose:** 获取 `alternative equipments` 的当前值。

### GetDrivenPropertyBonusOnSpawn
`public float GetDrivenPropertyBonusOnSpawn(bool isWarmup, bool isPlayer, DrivenProperty drivenProperty, float baseValue)`

**用途 / Purpose:** 获取 `driven property bonus on spawn` 的当前值。

### GetHitpoints
`public float GetHitpoints(bool isWarmup, bool isPlayer)`

**用途 / Purpose:** 获取 `hitpoints` 的当前值。

### GetTroopCount
`public static int GetTroopCount(MultiplayerClassDivisions.MPHeroClass heroClass, int botsPerFormation, MPPerkObject.MPOnSpawnPerkHandler onSpawnPerkHandler)`

**用途 / Purpose:** 获取 `troop count` 的当前值。

### Deserialize
`public static IReadOnlyPerkObject Deserialize(XmlNode node)`

**用途 / Purpose:** 处理 `deserialize` 相关逻辑。

### GetPerkHandler
`public static MPPerkObject.MPPerkHandler GetPerkHandler(Agent agent)`

**用途 / Purpose:** 获取 `perk handler` 的当前值。

### GetPerkHandler
`public static MPPerkObject.MPPerkHandler GetPerkHandler(MissionPeer peer)`

**用途 / Purpose:** 获取 `perk handler` 的当前值。

### GetCombatPerkHandler
`public static MPPerkObject.MPCombatPerkHandler GetCombatPerkHandler(Agent attacker, Agent defender)`

**用途 / Purpose:** 获取 `combat perk handler` 的当前值。

### GetOnSpawnPerkHandler
`public static MPPerkObject.MPOnSpawnPerkHandler GetOnSpawnPerkHandler(MissionPeer peer)`

**用途 / Purpose:** 获取 `on spawn perk handler` 的当前值。

### GetOnSpawnPerkHandler
`public static MPPerkObject.MPOnSpawnPerkHandler GetOnSpawnPerkHandler(IEnumerable<IReadOnlyPerkObject> perks)`

**用途 / Purpose:** 获取 `on spawn perk handler` 的当前值。

### RaiseEventForAllPeers
`public static void RaiseEventForAllPeers(MPPerkCondition.PerkEventFlags flags)`

**用途 / Purpose:** 处理 `raise event for all peers` 相关逻辑。

### RaiseEventForAllPeersOnTeam
`public static void RaiseEventForAllPeersOnTeam(Team side, MPPerkCondition.PerkEventFlags flags)`

**用途 / Purpose:** 处理 `raise event for all peers on team` 相关逻辑。

### TickAllPeerPerks
`public static void TickAllPeerPerks(int tickCount)`

**用途 / Purpose:** 处理 `tick all peer perks` 相关逻辑。

### RaiseEventForAllPeersCommand
`public static string RaiseEventForAllPeersCommand(List<string> strings)`

**用途 / Purpose:** 处理 `raise event for all peers command` 相关逻辑。

### TickAllPeerPerksCommand
`public static string TickAllPeerPerksCommand(List<string> strings)`

**用途 / Purpose:** 处理 `tick all peer perks command` 相关逻辑。

### GetExtraTroopCount
`public float GetExtraTroopCount()`

**用途 / Purpose:** 获取 `extra troop count` 的当前值。

### GetAlternativeEquipments
`public IEnumerable<ValueTuple<EquipmentIndex, EquipmentElement>> GetAlternativeEquipments(bool isPlayer)`

**用途 / Purpose:** 获取 `alternative equipments` 的当前值。

### GetDrivenPropertyBonusOnSpawn
`public float GetDrivenPropertyBonusOnSpawn(bool isPlayer, DrivenProperty drivenProperty, float baseValue)`

**用途 / Purpose:** 获取 `driven property bonus on spawn` 的当前值。

### GetHitpoints
`public float GetHitpoints(bool isPlayer)`

**用途 / Purpose:** 获取 `hitpoints` 的当前值。

### OnEvent
`public void OnEvent(MPPerkCondition.PerkEventFlags flags)`

**用途 / Purpose:** 当 `event` 事件触发时调用此方法。

### OnEvent
`public void OnEvent(Agent agent, MPPerkCondition.PerkEventFlags flags)`

**用途 / Purpose:** 当 `event` 事件触发时调用此方法。

### OnTick
`public void OnTick(int tickCount)`

**用途 / Purpose:** 当 `tick` 事件触发时调用此方法。

### GetDrivenPropertyBonus
`public float GetDrivenPropertyBonus(DrivenProperty drivenProperty, float baseValue)`

**用途 / Purpose:** 获取 `driven property bonus` 的当前值。

### GetRangedAccuracy
`public float GetRangedAccuracy()`

**用途 / Purpose:** 获取 `ranged accuracy` 的当前值。

### GetThrowingWeaponSpeed
`public float GetThrowingWeaponSpeed(WeaponComponentData attackerWeapon)`

**用途 / Purpose:** 获取 `throwing weapon speed` 的当前值。

### GetDamageInterruptionThreshold
`public float GetDamageInterruptionThreshold()`

**用途 / Purpose:** 获取 `damage interruption threshold` 的当前值。

### GetMountManeuver
`public float GetMountManeuver()`

**用途 / Purpose:** 获取 `mount maneuver` 的当前值。

### GetMountSpeed
`public float GetMountSpeed()`

**用途 / Purpose:** 获取 `mount speed` 的当前值。

### GetGoldOnKill
`public int GetGoldOnKill(float attackerValue, float victimValue)`

**用途 / Purpose:** 获取 `gold on kill` 的当前值。

### GetGoldOnAssist
`public int GetGoldOnAssist()`

**用途 / Purpose:** 获取 `gold on assist` 的当前值。

### GetRewardedGoldOnAssist
`public int GetRewardedGoldOnAssist()`

**用途 / Purpose:** 获取 `rewarded gold on assist` 的当前值。

### GetIsTeamRewardedOnDeath
`public bool GetIsTeamRewardedOnDeath()`

**用途 / Purpose:** 获取 `is team rewarded on death` 的当前值。

### GetTeamGoldRewardsOnDeath
`public IEnumerable<ValueTuple<MissionPeer, int>> GetTeamGoldRewardsOnDeath()`

**用途 / Purpose:** 获取 `team gold rewards on death` 的当前值。

### GetEncumbrance
`public float GetEncumbrance(bool isOnBody)`

**用途 / Purpose:** 获取 `encumbrance` 的当前值。

### GetDamage
`public float GetDamage(WeaponComponentData attackerWeapon, DamageTypes damageType, bool isAlternativeAttack)`

**用途 / Purpose:** 获取 `damage` 的当前值。

### GetDamageTaken
`public float GetDamageTaken(WeaponComponentData attackerWeapon, DamageTypes damageType)`

**用途 / Purpose:** 获取 `damage taken` 的当前值。

### GetSpeedBonusEffectiveness
`public float GetSpeedBonusEffectiveness(WeaponComponentData attackerWeapon, DamageTypes damageType)`

**用途 / Purpose:** 获取 `speed bonus effectiveness` 的当前值。

### GetShieldDamage
`public float GetShieldDamage(bool isCorrectSideBlock)`

**用途 / Purpose:** 获取 `shield damage` 的当前值。

### GetShieldDamageTaken
`public float GetShieldDamageTaken(bool isCorrectSideBlock)`

**用途 / Purpose:** 获取 `shield damage taken` 的当前值。

### GetRangedHeadShotDamage
`public float GetRangedHeadShotDamage()`

**用途 / Purpose:** 获取 `ranged head shot damage` 的当前值。

## 使用示例

```csharp
var value = new MPPerkObject();
value.Clone(peer);
```

## 参见

- [完整类目录](../catalog)