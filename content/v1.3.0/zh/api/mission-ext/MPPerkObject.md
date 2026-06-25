---
title: "MPPerkObject"
description: "MPPerkObject 的自动生成类参考。"
---
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

**用途 / Purpose:** **用途 / Purpose:** 复制当前对象的状态并返回一个新实例。

```csharp
// 先通过子系统 API 拿到 MPPerkObject 实例
MPPerkObject mPPerkObject = ...;
var result = mPPerkObject.Clone(peer);
```

### Reset
`public void Reset()`

**用途 / Purpose:** **用途 / Purpose:** 将当前对象重置为默认或初始状态。

```csharp
// 先通过子系统 API 拿到 MPPerkObject 实例
MPPerkObject mPPerkObject = ...;
mPPerkObject.Reset();
```

### GetExtraTroopCount
`public int GetExtraTroopCount(bool isWarmup)`

**用途 / Purpose:** **用途 / Purpose:** 读取并返回当前对象中 extra troop count 的结果。

```csharp
// 先通过子系统 API 拿到 MPPerkObject 实例
MPPerkObject mPPerkObject = ...;
var result = mPPerkObject.GetExtraTroopCount(false);
```

### GetAlternativeEquipments
`public List<ValueTuple<EquipmentIndex, EquipmentElement>> GetAlternativeEquipments(bool isWarmup, bool isPlayer, List<ValueTuple<EquipmentIndex, EquipmentElement>> alternativeEquipments, bool getAllEquipments = false)`

**用途 / Purpose:** **用途 / Purpose:** 读取并返回当前对象中 alternative equipments 的结果。

```csharp
// 先通过子系统 API 拿到 MPPerkObject 实例
MPPerkObject mPPerkObject = ...;
var result = mPPerkObject.GetAlternativeEquipments(false, false, list<ValueTuple<EquipmentIndex, alternativeEquipments, false);
```

### GetDrivenPropertyBonusOnSpawn
`public float GetDrivenPropertyBonusOnSpawn(bool isWarmup, bool isPlayer, DrivenProperty drivenProperty, float baseValue)`

**用途 / Purpose:** **用途 / Purpose:** 读取并返回当前对象中 driven property bonus on spawn 的结果。

```csharp
// 先通过子系统 API 拿到 MPPerkObject 实例
MPPerkObject mPPerkObject = ...;
var result = mPPerkObject.GetDrivenPropertyBonusOnSpawn(false, false, drivenProperty, 0);
```

### GetHitpoints
`public float GetHitpoints(bool isWarmup, bool isPlayer)`

**用途 / Purpose:** **用途 / Purpose:** 读取并返回当前对象中 hitpoints 的结果。

```csharp
// 先通过子系统 API 拿到 MPPerkObject 实例
MPPerkObject mPPerkObject = ...;
var result = mPPerkObject.GetHitpoints(false, false);
```

### GetTroopCount
`public static int GetTroopCount(MultiplayerClassDivisions.MPHeroClass heroClass, int botsPerFormation, MPPerkObject.MPOnSpawnPerkHandler onSpawnPerkHandler)`

**用途 / Purpose:** **用途 / Purpose:** 读取并返回当前对象中 troop count 的结果。

```csharp
// 静态调用，不需要实例
MPPerkObject.GetTroopCount(heroClass, 0, onSpawnPerkHandler);
```

### Deserialize
`public static IReadOnlyPerkObject Deserialize(XmlNode node)`

**用途 / Purpose:** **用途 / Purpose:** 从序列化数据还原当前对象。

```csharp
// 静态调用，不需要实例
MPPerkObject.Deserialize(node);
```

### GetPerkHandler
`public static MPPerkObject.MPPerkHandler GetPerkHandler(Agent agent)`

**用途 / Purpose:** **用途 / Purpose:** 读取并返回当前对象中 perk handler 的结果。

```csharp
// 静态调用，不需要实例
MPPerkObject.GetPerkHandler(agent);
```

### GetPerkHandler
`public static MPPerkObject.MPPerkHandler GetPerkHandler(MissionPeer peer)`

**用途 / Purpose:** **用途 / Purpose:** 读取并返回当前对象中 perk handler 的结果。

```csharp
// 静态调用，不需要实例
MPPerkObject.GetPerkHandler(peer);
```

### GetCombatPerkHandler
`public static MPPerkObject.MPCombatPerkHandler GetCombatPerkHandler(Agent attacker, Agent defender)`

**用途 / Purpose:** **用途 / Purpose:** 读取并返回当前对象中 combat perk handler 的结果。

```csharp
// 静态调用，不需要实例
MPPerkObject.GetCombatPerkHandler(attacker, defender);
```

### GetOnSpawnPerkHandler
`public static MPPerkObject.MPOnSpawnPerkHandler GetOnSpawnPerkHandler(MissionPeer peer)`

**用途 / Purpose:** **用途 / Purpose:** 读取并返回当前对象中 on spawn perk handler 的结果。

```csharp
// 静态调用，不需要实例
MPPerkObject.GetOnSpawnPerkHandler(peer);
```

### GetOnSpawnPerkHandler
`public static MPPerkObject.MPOnSpawnPerkHandler GetOnSpawnPerkHandler(IEnumerable<IReadOnlyPerkObject> perks)`

**用途 / Purpose:** **用途 / Purpose:** 读取并返回当前对象中 on spawn perk handler 的结果。

```csharp
// 静态调用，不需要实例
MPPerkObject.GetOnSpawnPerkHandler(perks);
```

### RaiseEventForAllPeers
`public static void RaiseEventForAllPeers(MPPerkCondition.PerkEventFlags flags)`

**用途 / Purpose:** **用途 / Purpose:** 抛出或触发与event for all peers相关的事件/异常。

```csharp
// 静态调用，不需要实例
MPPerkObject.RaiseEventForAllPeers(flags);
```

### RaiseEventForAllPeersOnTeam
`public static void RaiseEventForAllPeersOnTeam(Team side, MPPerkCondition.PerkEventFlags flags)`

**用途 / Purpose:** **用途 / Purpose:** 抛出或触发与event for all peers on team相关的事件/异常。

```csharp
// 静态调用，不需要实例
MPPerkObject.RaiseEventForAllPeersOnTeam(side, flags);
```

### TickAllPeerPerks
`public static void TickAllPeerPerks(int tickCount)`

**用途 / Purpose:** **用途 / Purpose:** 在每一帧或每个更新周期内推进all peer perks的状态。

```csharp
// 静态调用，不需要实例
MPPerkObject.TickAllPeerPerks(0);
```

### RaiseEventForAllPeersCommand
`public static string RaiseEventForAllPeersCommand(List<string> strings)`

**用途 / Purpose:** **用途 / Purpose:** 抛出或触发与event for all peers command相关的事件/异常。

```csharp
// 静态调用，不需要实例
MPPerkObject.RaiseEventForAllPeersCommand(strings);
```

### TickAllPeerPerksCommand
`public static string TickAllPeerPerksCommand(List<string> strings)`

**用途 / Purpose:** **用途 / Purpose:** 在每一帧或每个更新周期内推进all peer perks command的状态。

```csharp
// 静态调用，不需要实例
MPPerkObject.TickAllPeerPerksCommand(strings);
```

### GetExtraTroopCount
`public float GetExtraTroopCount()`

**用途 / Purpose:** **用途 / Purpose:** 读取并返回当前对象中 extra troop count 的结果。

```csharp
// 先通过子系统 API 拿到 MPPerkObject 实例
MPPerkObject mPPerkObject = ...;
var result = mPPerkObject.GetExtraTroopCount();
```

### GetAlternativeEquipments
`public IEnumerable<ValueTuple<EquipmentIndex, EquipmentElement>> GetAlternativeEquipments(bool isPlayer)`

**用途 / Purpose:** **用途 / Purpose:** 读取并返回当前对象中 alternative equipments 的结果。

```csharp
// 先通过子系统 API 拿到 MPPerkObject 实例
MPPerkObject mPPerkObject = ...;
var result = mPPerkObject.GetAlternativeEquipments(false);
```

### GetDrivenPropertyBonusOnSpawn
`public float GetDrivenPropertyBonusOnSpawn(bool isPlayer, DrivenProperty drivenProperty, float baseValue)`

**用途 / Purpose:** **用途 / Purpose:** 读取并返回当前对象中 driven property bonus on spawn 的结果。

```csharp
// 先通过子系统 API 拿到 MPPerkObject 实例
MPPerkObject mPPerkObject = ...;
var result = mPPerkObject.GetDrivenPropertyBonusOnSpawn(false, drivenProperty, 0);
```

### GetHitpoints
`public float GetHitpoints(bool isPlayer)`

**用途 / Purpose:** **用途 / Purpose:** 读取并返回当前对象中 hitpoints 的结果。

```csharp
// 先通过子系统 API 拿到 MPPerkObject 实例
MPPerkObject mPPerkObject = ...;
var result = mPPerkObject.GetHitpoints(false);
```

### OnEvent
`public void OnEvent(MPPerkCondition.PerkEventFlags flags)`

**用途 / Purpose:** **用途 / Purpose:** 在 event 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 MPPerkObject 实例
MPPerkObject mPPerkObject = ...;
mPPerkObject.OnEvent(flags);
```

### OnEvent
`public void OnEvent(Agent agent, MPPerkCondition.PerkEventFlags flags)`

**用途 / Purpose:** **用途 / Purpose:** 在 event 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 MPPerkObject 实例
MPPerkObject mPPerkObject = ...;
mPPerkObject.OnEvent(agent, flags);
```

### OnTick
`public void OnTick(int tickCount)`

**用途 / Purpose:** **用途 / Purpose:** 在 tick 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 MPPerkObject 实例
MPPerkObject mPPerkObject = ...;
mPPerkObject.OnTick(0);
```

### GetDrivenPropertyBonus
`public float GetDrivenPropertyBonus(DrivenProperty drivenProperty, float baseValue)`

**用途 / Purpose:** **用途 / Purpose:** 读取并返回当前对象中 driven property bonus 的结果。

```csharp
// 先通过子系统 API 拿到 MPPerkObject 实例
MPPerkObject mPPerkObject = ...;
var result = mPPerkObject.GetDrivenPropertyBonus(drivenProperty, 0);
```

### GetRangedAccuracy
`public float GetRangedAccuracy()`

**用途 / Purpose:** **用途 / Purpose:** 读取并返回当前对象中 ranged accuracy 的结果。

```csharp
// 先通过子系统 API 拿到 MPPerkObject 实例
MPPerkObject mPPerkObject = ...;
var result = mPPerkObject.GetRangedAccuracy();
```

### GetThrowingWeaponSpeed
`public float GetThrowingWeaponSpeed(WeaponComponentData attackerWeapon)`

**用途 / Purpose:** **用途 / Purpose:** 读取并返回当前对象中 throwing weapon speed 的结果。

```csharp
// 先通过子系统 API 拿到 MPPerkObject 实例
MPPerkObject mPPerkObject = ...;
var result = mPPerkObject.GetThrowingWeaponSpeed(attackerWeapon);
```

### GetDamageInterruptionThreshold
`public float GetDamageInterruptionThreshold()`

**用途 / Purpose:** **用途 / Purpose:** 读取并返回当前对象中 damage interruption threshold 的结果。

```csharp
// 先通过子系统 API 拿到 MPPerkObject 实例
MPPerkObject mPPerkObject = ...;
var result = mPPerkObject.GetDamageInterruptionThreshold();
```

### GetMountManeuver
`public float GetMountManeuver()`

**用途 / Purpose:** **用途 / Purpose:** 读取并返回当前对象中 mount maneuver 的结果。

```csharp
// 先通过子系统 API 拿到 MPPerkObject 实例
MPPerkObject mPPerkObject = ...;
var result = mPPerkObject.GetMountManeuver();
```

### GetMountSpeed
`public float GetMountSpeed()`

**用途 / Purpose:** **用途 / Purpose:** 读取并返回当前对象中 mount speed 的结果。

```csharp
// 先通过子系统 API 拿到 MPPerkObject 实例
MPPerkObject mPPerkObject = ...;
var result = mPPerkObject.GetMountSpeed();
```

### GetGoldOnKill
`public int GetGoldOnKill(float attackerValue, float victimValue)`

**用途 / Purpose:** **用途 / Purpose:** 读取并返回当前对象中 gold on kill 的结果。

```csharp
// 先通过子系统 API 拿到 MPPerkObject 实例
MPPerkObject mPPerkObject = ...;
var result = mPPerkObject.GetGoldOnKill(0, 0);
```

### GetGoldOnAssist
`public int GetGoldOnAssist()`

**用途 / Purpose:** **用途 / Purpose:** 读取并返回当前对象中 gold on assist 的结果。

```csharp
// 先通过子系统 API 拿到 MPPerkObject 实例
MPPerkObject mPPerkObject = ...;
var result = mPPerkObject.GetGoldOnAssist();
```

### GetRewardedGoldOnAssist
`public int GetRewardedGoldOnAssist()`

**用途 / Purpose:** **用途 / Purpose:** 读取并返回当前对象中 rewarded gold on assist 的结果。

```csharp
// 先通过子系统 API 拿到 MPPerkObject 实例
MPPerkObject mPPerkObject = ...;
var result = mPPerkObject.GetRewardedGoldOnAssist();
```

### GetIsTeamRewardedOnDeath
`public bool GetIsTeamRewardedOnDeath()`

**用途 / Purpose:** **用途 / Purpose:** 读取并返回当前对象中 is team rewarded on death 的结果。

```csharp
// 先通过子系统 API 拿到 MPPerkObject 实例
MPPerkObject mPPerkObject = ...;
var result = mPPerkObject.GetIsTeamRewardedOnDeath();
```

### GetTeamGoldRewardsOnDeath
`public IEnumerable<ValueTuple<MissionPeer, int>> GetTeamGoldRewardsOnDeath()`

**用途 / Purpose:** **用途 / Purpose:** 读取并返回当前对象中 team gold rewards on death 的结果。

```csharp
// 先通过子系统 API 拿到 MPPerkObject 实例
MPPerkObject mPPerkObject = ...;
var result = mPPerkObject.GetTeamGoldRewardsOnDeath();
```

### GetEncumbrance
`public float GetEncumbrance(bool isOnBody)`

**用途 / Purpose:** **用途 / Purpose:** 读取并返回当前对象中 encumbrance 的结果。

```csharp
// 先通过子系统 API 拿到 MPPerkObject 实例
MPPerkObject mPPerkObject = ...;
var result = mPPerkObject.GetEncumbrance(false);
```

### GetDamage
`public float GetDamage(WeaponComponentData attackerWeapon, DamageTypes damageType, bool isAlternativeAttack)`

**用途 / Purpose:** **用途 / Purpose:** 读取并返回当前对象中 damage 的结果。

```csharp
// 先通过子系统 API 拿到 MPPerkObject 实例
MPPerkObject mPPerkObject = ...;
var result = mPPerkObject.GetDamage(attackerWeapon, damageType, false);
```

### GetDamageTaken
`public float GetDamageTaken(WeaponComponentData attackerWeapon, DamageTypes damageType)`

**用途 / Purpose:** **用途 / Purpose:** 读取并返回当前对象中 damage taken 的结果。

```csharp
// 先通过子系统 API 拿到 MPPerkObject 实例
MPPerkObject mPPerkObject = ...;
var result = mPPerkObject.GetDamageTaken(attackerWeapon, damageType);
```

### GetSpeedBonusEffectiveness
`public float GetSpeedBonusEffectiveness(WeaponComponentData attackerWeapon, DamageTypes damageType)`

**用途 / Purpose:** **用途 / Purpose:** 读取并返回当前对象中 speed bonus effectiveness 的结果。

```csharp
// 先通过子系统 API 拿到 MPPerkObject 实例
MPPerkObject mPPerkObject = ...;
var result = mPPerkObject.GetSpeedBonusEffectiveness(attackerWeapon, damageType);
```

### GetShieldDamage
`public float GetShieldDamage(bool isCorrectSideBlock)`

**用途 / Purpose:** **用途 / Purpose:** 读取并返回当前对象中 shield damage 的结果。

```csharp
// 先通过子系统 API 拿到 MPPerkObject 实例
MPPerkObject mPPerkObject = ...;
var result = mPPerkObject.GetShieldDamage(false);
```

### GetShieldDamageTaken
`public float GetShieldDamageTaken(bool isCorrectSideBlock)`

**用途 / Purpose:** **用途 / Purpose:** 读取并返回当前对象中 shield damage taken 的结果。

```csharp
// 先通过子系统 API 拿到 MPPerkObject 实例
MPPerkObject mPPerkObject = ...;
var result = mPPerkObject.GetShieldDamageTaken(false);
```

### GetRangedHeadShotDamage
`public float GetRangedHeadShotDamage()`

**用途 / Purpose:** **用途 / Purpose:** 读取并返回当前对象中 ranged head shot damage 的结果。

```csharp
// 先通过子系统 API 拿到 MPPerkObject 实例
MPPerkObject mPPerkObject = ...;
var result = mPPerkObject.GetRangedHeadShotDamage();
```

## 使用示例

```csharp
// 通常从对应子系统 API 获取实例后调用
MPPerkObject mPPerkObject = ...;
mPPerkObject.Clone(peer);
```

## 参见

- [本区域目录](../)