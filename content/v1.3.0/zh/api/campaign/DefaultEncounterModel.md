---
title: "DefaultEncounterModel"
description: "DefaultEncounterModel 的自动生成类参考。"
---
# DefaultEncounterModel

**Namespace:** TaleWorlds.CampaignSystem.GameComponents
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class DefaultEncounterModel : EncounterModel`
**Base:** `EncounterModel`
**File:** `TaleWorlds.CampaignSystem/GameComponents/DefaultEncounterModel.cs`

## 概述

`DefaultEncounterModel` 是一个规则模型，通常定义“系统该如何计算”。mod 开发者最常通过替换或继承它来改规则。

## 心智模型

把 `DefaultEncounterModel` 当作一个 Model 型扩展点来理解：先确认谁创建它、谁持有它、谁调用它，再决定是继承、组合还是只读使用。

## 主要属性

| Name | Signature |
|------|-----------|
| `NeededMaximumDistanceForEncounteringMobileParty` | `public override float NeededMaximumDistanceForEncounteringMobileParty { get; }` |
| `MaximumAllowedDistanceForEncounteringMobilePartyInArmy` | `public override float MaximumAllowedDistanceForEncounteringMobilePartyInArmy { get; }` |
| `NeededMaximumDistanceForEncounteringTown` | `public override float NeededMaximumDistanceForEncounteringTown { get; }` |
| `NeededMaximumDistanceForEncounteringBlockade` | `public override float NeededMaximumDistanceForEncounteringBlockade { get; }` |
| `NeededMaximumDistanceForEncounteringVillage` | `public override float NeededMaximumDistanceForEncounteringVillage { get; }` |
| `GetEncounterJoiningRadius` | `public override float GetEncounterJoiningRadius { get; }` |
| `PlayerParleyDistance` | `public override float PlayerParleyDistance { get; }` |
| `GetSettlementBeingNearFieldBattleRadius` | `public override float GetSettlementBeingNearFieldBattleRadius { get; }` |

## 主要方法

### IsEncounterExemptFromHostileActions
`public override bool IsEncounterExemptFromHostileActions(PartyBase side1, PartyBase side2)`

**用途 / Purpose:** **用途 / Purpose:** 判断当前对象是否处于 encounter exempt from hostile actions 状态或条件。

```csharp
// 先通过子系统 API 拿到 DefaultEncounterModel 实例
DefaultEncounterModel defaultEncounterModel = ...;
var result = defaultEncounterModel.IsEncounterExemptFromHostileActions(side1, side2);
```

### GetLeaderOfSiegeEvent
`public override Hero GetLeaderOfSiegeEvent(SiegeEvent siegeEvent, BattleSideEnum side)`

**用途 / Purpose:** **用途 / Purpose:** 读取并返回当前对象中 leader of siege event 的结果。

```csharp
// 先通过子系统 API 拿到 DefaultEncounterModel 实例
DefaultEncounterModel defaultEncounterModel = ...;
var result = defaultEncounterModel.GetLeaderOfSiegeEvent(siegeEvent, side);
```

### CanMainHeroDoParleyWithParty
`public override bool CanMainHeroDoParleyWithParty(PartyBase partyBase, out TextObject explanation)`

**用途 / Purpose:** **用途 / Purpose:** 检查当前对象是否满足 main hero do parley with party 的前置条件。

```csharp
// 先通过子系统 API 拿到 DefaultEncounterModel 实例
DefaultEncounterModel defaultEncounterModel = ...;
var result = defaultEncounterModel.CanMainHeroDoParleyWithParty(partyBase, explanation);
```

### GetLeaderOfMapEvent
`public override Hero GetLeaderOfMapEvent(MapEvent mapEvent, BattleSideEnum side)`

**用途 / Purpose:** **用途 / Purpose:** 读取并返回当前对象中 leader of map event 的结果。

```csharp
// 先通过子系统 API 拿到 DefaultEncounterModel 实例
DefaultEncounterModel defaultEncounterModel = ...;
var result = defaultEncounterModel.GetLeaderOfMapEvent(mapEvent, side);
```

### GetCharacterSergeantScore
`public override int GetCharacterSergeantScore(Hero hero)`

**用途 / Purpose:** **用途 / Purpose:** 读取并返回当前对象中 character sergeant score 的结果。

```csharp
// 先通过子系统 API 拿到 DefaultEncounterModel 实例
DefaultEncounterModel defaultEncounterModel = ...;
var result = defaultEncounterModel.GetCharacterSergeantScore(hero);
```

### GetDefenderPartiesOfSettlement
`public override IEnumerable<PartyBase> GetDefenderPartiesOfSettlement(Settlement settlement, MapEvent.BattleTypes mapEventType)`

**用途 / Purpose:** **用途 / Purpose:** 读取并返回当前对象中 defender parties of settlement 的结果。

```csharp
// 先通过子系统 API 拿到 DefaultEncounterModel 实例
DefaultEncounterModel defaultEncounterModel = ...;
var result = defaultEncounterModel.GetDefenderPartiesOfSettlement(settlement, mapEventType);
```

### GetNextDefenderPartyOfSettlement
`public override PartyBase GetNextDefenderPartyOfSettlement(Settlement settlement, ref int partyIndex, MapEvent.BattleTypes mapEventType)`

**用途 / Purpose:** **用途 / Purpose:** 读取并返回当前对象中 next defender party of settlement 的结果。

```csharp
// 先通过子系统 API 拿到 DefaultEncounterModel 实例
DefaultEncounterModel defaultEncounterModel = ...;
var result = defaultEncounterModel.GetNextDefenderPartyOfSettlement(settlement, partyIndex, mapEventType);
```

### CreateMapEventComponentForEncounter
`public override MapEventComponent CreateMapEventComponentForEncounter(PartyBase attackerParty, PartyBase defenderParty, MapEvent.BattleTypes battleType)`

**用途 / Purpose:** **用途 / Purpose:** 构建一个新的 map event component for encounter 实体并返回给调用方。

```csharp
// 先通过子系统 API 拿到 DefaultEncounterModel 实例
DefaultEncounterModel defaultEncounterModel = ...;
var result = defaultEncounterModel.CreateMapEventComponentForEncounter(attackerParty, defenderParty, battleType);
```

### GetSurrenderChance
`public override float GetSurrenderChance(MobileParty defenderParty, MobileParty attackerParty)`

**用途 / Purpose:** **用途 / Purpose:** 读取并返回当前对象中 surrender chance 的结果。

```csharp
// 先通过子系统 API 拿到 DefaultEncounterModel 实例
DefaultEncounterModel defaultEncounterModel = ...;
var result = defaultEncounterModel.GetSurrenderChance(defenderParty, attackerParty);
```

### GetBribeChance
`public override ExplainedNumber GetBribeChance(MobileParty defenderParty, MobileParty attackerParty)`

**用途 / Purpose:** **用途 / Purpose:** 读取并返回当前对象中 bribe chance 的结果。

```csharp
// 先通过子系统 API 拿到 DefaultEncounterModel 实例
DefaultEncounterModel defaultEncounterModel = ...;
var result = defaultEncounterModel.GetBribeChance(defenderParty, attackerParty);
```

### GetMapEventSideRunAwayChance
`public override float GetMapEventSideRunAwayChance(MapEventSide mapEventSide)`

**用途 / Purpose:** **用途 / Purpose:** 读取并返回当前对象中 map event side run away chance 的结果。

```csharp
// 先通过子系统 API 拿到 DefaultEncounterModel 实例
DefaultEncounterModel defaultEncounterModel = ...;
var result = defaultEncounterModel.GetMapEventSideRunAwayChance(mapEventSide);
```

### FindNonAttachedNpcPartiesWhoWillJoinPlayerEncounter
`public override void FindNonAttachedNpcPartiesWhoWillJoinPlayerEncounter(List<MobileParty> partiesToJoinPlayerSide, List<MobileParty> partiesToJoinEnemySide)`

**用途 / Purpose:** **用途 / Purpose:** 在当前集合/范围内查找满足条件的non attached npc parties who will join player encounter。

```csharp
// 先通过子系统 API 拿到 DefaultEncounterModel 实例
DefaultEncounterModel defaultEncounterModel = ...;
defaultEncounterModel.FindNonAttachedNpcPartiesWhoWillJoinPlayerEncounter(partiesToJoinPlayerSide, partiesToJoinEnemySide);
```

### CanPlayerForceBanditsToJoin
`public override bool CanPlayerForceBanditsToJoin(out TextObject explanation)`

**用途 / Purpose:** **用途 / Purpose:** 检查当前对象是否满足 player force bandits to join 的前置条件。

```csharp
// 先通过子系统 API 拿到 DefaultEncounterModel 实例
DefaultEncounterModel defaultEncounterModel = ...;
var result = defaultEncounterModel.CanPlayerForceBanditsToJoin(explanation);
```

## 使用示例

```csharp
Game.Current.ReplaceModel<DefaultEncounterModel>(new MyDefaultEncounterModel());
```

## 参见

- [本区域目录](../)