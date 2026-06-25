---
title: "EncounterModel"
description: "EncounterModel 的自动生成类参考。"
---
# EncounterModel

**Namespace:** TaleWorlds.CampaignSystem.ComponentInterfaces
**Module:** TaleWorlds.CampaignSystem
**Type:** `public abstract class EncounterModel : MBGameModel<EncounterModel>`
**Base:** `MBGameModel<EncounterModel>`
**File:** `TaleWorlds.CampaignSystem/ComponentInterfaces/EncounterModel.cs`

## 概述

`EncounterModel` 是一个规则模型，通常定义“系统该如何计算”。mod 开发者最常通过替换或继承它来改规则。

## 心智模型

把 `EncounterModel` 当作一个 Model 型扩展点来理解：先确认谁创建它、谁持有它、谁调用它，再决定是继承、组合还是只读使用。

## 主要属性

| Name | Signature |
|------|-----------|
| `NeededMaximumDistanceForEncounteringMobileParty` | `public abstract float NeededMaximumDistanceForEncounteringMobileParty { get; }` |
| `MaximumAllowedDistanceForEncounteringMobilePartyInArmy` | `public abstract float MaximumAllowedDistanceForEncounteringMobilePartyInArmy { get; }` |
| `NeededMaximumDistanceForEncounteringTown` | `public abstract float NeededMaximumDistanceForEncounteringTown { get; }` |
| `NeededMaximumDistanceForEncounteringBlockade` | `public abstract float NeededMaximumDistanceForEncounteringBlockade { get; }` |
| `NeededMaximumDistanceForEncounteringVillage` | `public abstract float NeededMaximumDistanceForEncounteringVillage { get; }` |
| `GetEncounterJoiningRadius` | `public abstract float GetEncounterJoiningRadius { get; }` |
| `GetSettlementBeingNearFieldBattleRadius` | `public abstract float GetSettlementBeingNearFieldBattleRadius { get; }` |
| `PlayerParleyDistance` | `public abstract float PlayerParleyDistance { get; }` |

## 主要方法

### IsEncounterExemptFromHostileActions
`public abstract bool IsEncounterExemptFromHostileActions(PartyBase side1, PartyBase side2)`

**用途 / Purpose:** 判断当前对象是否处于 「encounter exempt from hostile actions」 状态或条件。

```csharp
// 先通过子系统 API 拿到 EncounterModel 实例
EncounterModel encounterModel = ...;
var result = encounterModel.IsEncounterExemptFromHostileActions(side1, side2);
```

### CanMainHeroDoParleyWithParty
`public abstract bool CanMainHeroDoParleyWithParty(PartyBase partyBase, out TextObject explanation)`

**用途 / Purpose:** 检查当前对象是否满足 「main hero do parley with party」 的前置条件。

```csharp
// 先通过子系统 API 拿到 EncounterModel 实例
EncounterModel encounterModel = ...;
var result = encounterModel.CanMainHeroDoParleyWithParty(partyBase, explanation);
```

### GetLeaderOfSiegeEvent
`public abstract Hero GetLeaderOfSiegeEvent(SiegeEvent siegeEvent, BattleSideEnum side)`

**用途 / Purpose:** 读取并返回当前对象中 「leader of siege event」 的结果。

```csharp
// 先通过子系统 API 拿到 EncounterModel 实例
EncounterModel encounterModel = ...;
var result = encounterModel.GetLeaderOfSiegeEvent(siegeEvent, side);
```

### GetLeaderOfMapEvent
`public abstract Hero GetLeaderOfMapEvent(MapEvent mapEvent, BattleSideEnum side)`

**用途 / Purpose:** 读取并返回当前对象中 「leader of map event」 的结果。

```csharp
// 先通过子系统 API 拿到 EncounterModel 实例
EncounterModel encounterModel = ...;
var result = encounterModel.GetLeaderOfMapEvent(mapEvent, side);
```

### GetCharacterSergeantScore
`public abstract int GetCharacterSergeantScore(Hero hero)`

**用途 / Purpose:** 读取并返回当前对象中 「character sergeant score」 的结果。

```csharp
// 先通过子系统 API 拿到 EncounterModel 实例
EncounterModel encounterModel = ...;
var result = encounterModel.GetCharacterSergeantScore(hero);
```

### GetDefenderPartiesOfSettlement
`public abstract IEnumerable<PartyBase> GetDefenderPartiesOfSettlement(Settlement settlement, MapEvent.BattleTypes mapEventType)`

**用途 / Purpose:** 读取并返回当前对象中 「defender parties of settlement」 的结果。

```csharp
// 先通过子系统 API 拿到 EncounterModel 实例
EncounterModel encounterModel = ...;
var result = encounterModel.GetDefenderPartiesOfSettlement(settlement, mapEventType);
```

### GetNextDefenderPartyOfSettlement
`public abstract PartyBase GetNextDefenderPartyOfSettlement(Settlement settlement, ref int partyIndex, MapEvent.BattleTypes mapEventType)`

**用途 / Purpose:** 读取并返回当前对象中 「next defender party of settlement」 的结果。

```csharp
// 先通过子系统 API 拿到 EncounterModel 实例
EncounterModel encounterModel = ...;
var result = encounterModel.GetNextDefenderPartyOfSettlement(settlement, partyIndex, mapEventType);
```

### CreateMapEventComponentForEncounter
`public abstract MapEventComponent CreateMapEventComponentForEncounter(PartyBase attackerParty, PartyBase defenderParty, MapEvent.BattleTypes battleType)`

**用途 / Purpose:** 构建一个新的 「map event component for encounter」 实体并返回给调用方。

```csharp
// 先通过子系统 API 拿到 EncounterModel 实例
EncounterModel encounterModel = ...;
var result = encounterModel.CreateMapEventComponentForEncounter(attackerParty, defenderParty, battleType);
```

### GetBribeChance
`public abstract ExplainedNumber GetBribeChance(MobileParty defenderParty, MobileParty attackerParty)`

**用途 / Purpose:** 读取并返回当前对象中 「bribe chance」 的结果。

```csharp
// 先通过子系统 API 拿到 EncounterModel 实例
EncounterModel encounterModel = ...;
var result = encounterModel.GetBribeChance(defenderParty, attackerParty);
```

### GetSurrenderChance
`public abstract float GetSurrenderChance(MobileParty defenderParty, MobileParty attackerParty)`

**用途 / Purpose:** 读取并返回当前对象中 「surrender chance」 的结果。

```csharp
// 先通过子系统 API 拿到 EncounterModel 实例
EncounterModel encounterModel = ...;
var result = encounterModel.GetSurrenderChance(defenderParty, attackerParty);
```

### GetMapEventSideRunAwayChance
`public abstract float GetMapEventSideRunAwayChance(MapEventSide mapEventside)`

**用途 / Purpose:** 读取并返回当前对象中 「map event side run away chance」 的结果。

```csharp
// 先通过子系统 API 拿到 EncounterModel 实例
EncounterModel encounterModel = ...;
var result = encounterModel.GetMapEventSideRunAwayChance(mapEventside);
```

### FindNonAttachedNpcPartiesWhoWillJoinPlayerEncounter
`public abstract void FindNonAttachedNpcPartiesWhoWillJoinPlayerEncounter(List<MobileParty> partiesToJoinPlayerSide, List<MobileParty> partiesToJoinEnemySide)`

**用途 / Purpose:** 在当前集合/范围内查找满足条件的「non attached npc parties who will join player encounter」。

```csharp
// 先通过子系统 API 拿到 EncounterModel 实例
EncounterModel encounterModel = ...;
encounterModel.FindNonAttachedNpcPartiesWhoWillJoinPlayerEncounter(partiesToJoinPlayerSide, partiesToJoinEnemySide);
```

### CanPlayerForceBanditsToJoin
`public abstract bool CanPlayerForceBanditsToJoin(out TextObject explanation)`

**用途 / Purpose:** 检查当前对象是否满足 「player force bandits to join」 的前置条件。

```csharp
// 先通过子系统 API 拿到 EncounterModel 实例
EncounterModel encounterModel = ...;
var result = encounterModel.CanPlayerForceBanditsToJoin(explanation);
```

### IsPartyUnderPlayerCommand
`public abstract bool IsPartyUnderPlayerCommand(PartyBase party)`

**用途 / Purpose:** 判断当前对象是否处于 「party under player command」 状态或条件。

```csharp
// 先通过子系统 API 拿到 EncounterModel 实例
EncounterModel encounterModel = ...;
var result = encounterModel.IsPartyUnderPlayerCommand(party);
```

## 使用示例

```csharp
// 通常通过子系统 API 或工厂获得派生实例
EncounterModel instance = ...;
```

## 参见

- [本区域目录](../)