<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `DefaultEncounterModel`
- [← 本领域 / 返回 campaign-ext](./)
- [↑ API 目录](../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# DefaultEncounterModel

**Namespace:** TaleWorlds.CampaignSystem.GameComponents
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class DefaultEncounterModel : EncounterModel`
**Base:** `EncounterModel`
**File:** `TaleWorlds.CampaignSystem/GameComponents/DefaultEncounterModel.cs`

## 概述

`DefaultEncounterModel` 是一个游戏 Model——规则/覆盖点。modder 继承它并经 `Game.Current.ReplaceModel<DefaultEncounterModel>(new MyDefaultEncounterModel())` 注册，以改变其计算逻辑。

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
```csharp
public override bool IsEncounterExemptFromHostileActions(PartyBase side1, PartyBase side2)
```

### GetLeaderOfSiegeEvent
```csharp
public override Hero GetLeaderOfSiegeEvent(SiegeEvent siegeEvent, BattleSideEnum side)
```

### CanMainHeroDoParleyWithParty
```csharp
public override bool CanMainHeroDoParleyWithParty(PartyBase partyBase, out TextObject explanation)
```

### GetLeaderOfMapEvent
```csharp
public override Hero GetLeaderOfMapEvent(MapEvent mapEvent, BattleSideEnum side)
```

### GetCharacterSergeantScore
```csharp
public override int GetCharacterSergeantScore(Hero hero)
```

### GetDefenderPartiesOfSettlement
```csharp
public override IEnumerable<PartyBase> GetDefenderPartiesOfSettlement(Settlement settlement, MapEvent.BattleTypes mapEventType)
```

### GetNextDefenderPartyOfSettlement
```csharp
public override PartyBase GetNextDefenderPartyOfSettlement(Settlement settlement, ref int partyIndex, MapEvent.BattleTypes mapEventType)
```

### CreateMapEventComponentForEncounter
```csharp
public override MapEventComponent CreateMapEventComponentForEncounter(PartyBase attackerParty, PartyBase defenderParty, MapEvent.BattleTypes battleType)
```

### GetSurrenderChance
```csharp
public override float GetSurrenderChance(MobileParty defenderParty, MobileParty attackerParty)
```

### GetBribeChance
```csharp
public override ExplainedNumber GetBribeChance(MobileParty defenderParty, MobileParty attackerParty)
```

### GetMapEventSideRunAwayChance
```csharp
public override float GetMapEventSideRunAwayChance(MapEventSide mapEventSide)
```

### FindNonAttachedNpcPartiesWhoWillJoinPlayerEncounter
```csharp
public override void FindNonAttachedNpcPartiesWhoWillJoinPlayerEncounter(List<MobileParty> partiesToJoinPlayerSide, List<MobileParty> partiesToJoinEnemySide)
```

### CanPlayerForceBanditsToJoin
```csharp
public override bool CanPlayerForceBanditsToJoin(out TextObject explanation)
```

### IsPartyUnderPlayerCommand
```csharp
public override bool IsPartyUnderPlayerCommand(PartyBase party)
```

## 使用示例

```csharp
// DefaultEncounterModel (Model) 的典型用法
Game.Current.ReplaceModel<DefaultEncounterModel>(new MyDefaultEncounterModel());
```

## 参见

- [完整类目录](../catalog)