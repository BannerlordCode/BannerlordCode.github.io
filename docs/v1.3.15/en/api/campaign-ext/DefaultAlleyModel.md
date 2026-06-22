<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `DefaultAlleyModel`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# DefaultAlleyModel

**Namespace:** TaleWorlds.CampaignSystem.GameComponents
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class DefaultAlleyModel : AlleyModel`
**Base:** `AlleyModel`
**File:** `TaleWorlds.CampaignSystem/GameComponents/DefaultAlleyModel.cs`

## Overview

`DefaultAlleyModel` is a game Model — a rules/override point. Subclass it and register via `Game.Current.ReplaceModel<DefaultAlleyModel>(new MyDefaultAlleyModel())` to change how it computes.

## Key Properties

| Name | Signature |
|------|-----------|
| `DestroyAlleyAfterDaysWhenLeaderIsDeath` | `public override CampaignTime DestroyAlleyAfterDaysWhenLeaderIsDeath { get; }` |
| `MinimumTroopCountInPlayerOwnedAlley` | `public override int MinimumTroopCountInPlayerOwnedAlley { get; }` |
| `MaximumTroopCountInPlayerOwnedAlley` | `public override int MaximumTroopCountInPlayerOwnedAlley { get; }` |
| `GetDailyCrimeRatingOfAlley` | `public override float GetDailyCrimeRatingOfAlley { get; }` |

## Key Methods

### GetDailyXpGainForAssignedClanMember
```csharp
public override float GetDailyXpGainForAssignedClanMember(Hero assignedHero)
```

### GetDailyXpGainForMainHero
```csharp
public override float GetDailyXpGainForMainHero()
```

### GetInitialXpGainForMainHero
```csharp
public override float GetInitialXpGainForMainHero()
```

### GetXpGainAfterSuccessfulAlleyDefenseForMainHero
```csharp
public override float GetXpGainAfterSuccessfulAlleyDefenseForMainHero()
```

### GetTroopsOfAIOwnedAlley
```csharp
public override TroopRoster GetTroopsOfAIOwnedAlley(Alley alley)
```

### GetTroopsOfAlleyForBattleMission
```csharp
public override TroopRoster GetTroopsOfAlleyForBattleMission(Alley alley)
```

### GetClanMembersAndAvailabilityDetailsForLeadingAnAlley
```csharp
public override List<ValueTuple<Hero, DefaultAlleyModel.AlleyMemberAvailabilityDetail>> GetClanMembersAndAvailabilityDetailsForLeadingAnAlley(Alley alley)
```

### GetTroopsToRecruitFromAlleyDependingOnAlleyRandom
```csharp
public override TroopRoster GetTroopsToRecruitFromAlleyDependingOnAlleyRandom(Alley alley, float random)
```

### GetDisabledReasonTextForHero
```csharp
public override TextObject GetDisabledReasonTextForHero(Hero hero, Alley alley, DefaultAlleyModel.AlleyMemberAvailabilityDetail detail)
```

### GetAlleyAttackResponseTimeInDays
```csharp
public override float GetAlleyAttackResponseTimeInDays(TroopRoster troopRoster)
```

### GetDailyIncomeOfAlley
```csharp
public override int GetDailyIncomeOfAlley(Alley alley)
```

## Usage Example

```csharp
// Typical usage of DefaultAlleyModel (Model)
Game.Current.ReplaceModel<DefaultAlleyModel>(new MyDefaultAlleyModel());
```

## See Also

- [Complete Class Catalog](../catalog)