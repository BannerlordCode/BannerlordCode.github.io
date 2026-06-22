<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `EncounterModel`
- [← 本领域 / 返回 campaign-ext](./)
- [↑ API 目录](../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# EncounterModel

**Namespace:** TaleWorlds.CampaignSystem.ComponentInterfaces
**Module:** TaleWorlds.CampaignSystem
**Type:** `public abstract class EncounterModel : MBGameModel<EncounterModel>`
**Base:** `MBGameModel<EncounterModel>`
**File:** `TaleWorlds.CampaignSystem/ComponentInterfaces/EncounterModel.cs`

## 概述

`EncounterModel` 是一个游戏 Model——规则/覆盖点。modder 继承它并经 `Game.Current.ReplaceModel<EncounterModel>(new MyEncounterModel())` 注册，以改变其计算逻辑。

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
```csharp
public abstract bool IsEncounterExemptFromHostileActions(PartyBase side1, PartyBase side2)
```

### CanMainHeroDoParleyWithParty
```csharp
public abstract bool CanMainHeroDoParleyWithParty(PartyBase partyBase, out TextObject explanation)
```

### GetLeaderOfSiegeEvent
```csharp
public abstract Hero GetLeaderOfSiegeEvent(SiegeEvent siegeEvent, BattleSideEnum side)
```

### GetLeaderOfMapEvent
```csharp
public abstract Hero GetLeaderOfMapEvent(MapEvent mapEvent, BattleSideEnum side)
```

### GetCharacterSergeantScore
```csharp
public abstract int GetCharacterSergeantScore(Hero hero)
```

### GetDefenderPartiesOfSettlement
```csharp
public abstract IEnumerable<PartyBase> GetDefenderPartiesOfSettlement(Settlement settlement, MapEvent.BattleTypes mapEventType)
```

### GetNextDefenderPartyOfSettlement
```csharp
public abstract PartyBase GetNextDefenderPartyOfSettlement(Settlement settlement, ref int partyIndex, MapEvent.BattleTypes mapEventType)
```

### CreateMapEventComponentForEncounter
```csharp
public abstract MapEventComponent CreateMapEventComponentForEncounter(PartyBase attackerParty, PartyBase defenderParty, MapEvent.BattleTypes battleType)
```

### GetBribeChance
```csharp
public abstract ExplainedNumber GetBribeChance(MobileParty defenderParty, MobileParty attackerParty)
```

### GetSurrenderChance
```csharp
public abstract float GetSurrenderChance(MobileParty defenderParty, MobileParty attackerParty)
```

### GetMapEventSideRunAwayChance
```csharp
public abstract float GetMapEventSideRunAwayChance(MapEventSide mapEventside)
```

### FindNonAttachedNpcPartiesWhoWillJoinPlayerEncounter
```csharp
public abstract void FindNonAttachedNpcPartiesWhoWillJoinPlayerEncounter(List<MobileParty> partiesToJoinPlayerSide, List<MobileParty> partiesToJoinEnemySide)
```

### CanPlayerForceBanditsToJoin
```csharp
public abstract bool CanPlayerForceBanditsToJoin(out TextObject explanation)
```

### IsPartyUnderPlayerCommand
```csharp
public abstract bool IsPartyUnderPlayerCommand(PartyBase party)
```

## 使用示例

```csharp
// EncounterModel (Model) 的典型用法
Game.Current.ReplaceModel<EncounterModel>(new MyEncounterModel());
```

## 参见

- [完整类目录](../catalog)