<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `AlleyModel`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# AlleyModel

**Namespace:** TaleWorlds.CampaignSystem.ComponentInterfaces
**Module:** TaleWorlds.CampaignSystem
**Type:** `public abstract class AlleyModel : MBGameModel<AlleyModel>`
**Base:** `MBGameModel<AlleyModel>`
**File:** `TaleWorlds.CampaignSystem/ComponentInterfaces/AlleyModel.cs`

## Overview

`AlleyModel` is a game Model — a rules/override point. Subclass it and register via `Game.Current.ReplaceModel<AlleyModel>(new MyAlleyModel())` to change how it computes.

## Key Properties

| Name | Signature |
|------|-----------|
| `DestroyAlleyAfterDaysWhenLeaderIsDeath` | `public abstract CampaignTime DestroyAlleyAfterDaysWhenLeaderIsDeath { get; }` |
| `MinimumTroopCountInPlayerOwnedAlley` | `public abstract int MinimumTroopCountInPlayerOwnedAlley { get; }` |
| `MaximumTroopCountInPlayerOwnedAlley` | `public abstract int MaximumTroopCountInPlayerOwnedAlley { get; }` |
| `GetDailyCrimeRatingOfAlley` | `public abstract float GetDailyCrimeRatingOfAlley { get; }` |

## Key Methods

### GetDailyXpGainForAssignedClanMember
```csharp
public abstract float GetDailyXpGainForAssignedClanMember(Hero assignedHero)
```

### GetDailyXpGainForMainHero
```csharp
public abstract float GetDailyXpGainForMainHero()
```

### GetInitialXpGainForMainHero
```csharp
public abstract float GetInitialXpGainForMainHero()
```

### GetXpGainAfterSuccessfulAlleyDefenseForMainHero
```csharp
public abstract float GetXpGainAfterSuccessfulAlleyDefenseForMainHero()
```

### GetTroopsOfAIOwnedAlley
```csharp
public abstract TroopRoster GetTroopsOfAIOwnedAlley(Alley alley)
```

### GetTroopsOfAlleyForBattleMission
```csharp
public abstract TroopRoster GetTroopsOfAlleyForBattleMission(Alley alley)
```

### GetDailyIncomeOfAlley
```csharp
public abstract int GetDailyIncomeOfAlley(Alley alley)
```

### GetClanMembersAndAvailabilityDetailsForLeadingAnAlley
```csharp
public abstract List<ValueTuple<Hero, DefaultAlleyModel.AlleyMemberAvailabilityDetail>> GetClanMembersAndAvailabilityDetailsForLeadingAnAlley(Alley alley)
```

### GetTroopsToRecruitFromAlleyDependingOnAlleyRandom
```csharp
public abstract TroopRoster GetTroopsToRecruitFromAlleyDependingOnAlleyRandom(Alley alley, float random)
```

### GetDisabledReasonTextForHero
```csharp
public abstract TextObject GetDisabledReasonTextForHero(Hero hero, Alley alley, DefaultAlleyModel.AlleyMemberAvailabilityDetail detail)
```

### GetAlleyAttackResponseTimeInDays
```csharp
public abstract float GetAlleyAttackResponseTimeInDays(TroopRoster troopRoster)
```

## Usage Example

```csharp
// Typical usage of AlleyModel (Model)
Game.Current.ReplaceModel<AlleyModel>(new MyAlleyModel());
```

## See Also

- [Complete Class Catalog](../catalog)