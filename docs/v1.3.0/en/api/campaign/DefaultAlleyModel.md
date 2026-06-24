<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `DefaultAlleyModel`
- [← Area / Back to campaign](./)
- [↑ API Index](../)
- [🏠 Home v1.3.0](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# DefaultAlleyModel

**Namespace:** TaleWorlds.CampaignSystem.GameComponents
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class DefaultAlleyModel : AlleyModel`
**Base:** `AlleyModel`
**File:** `TaleWorlds.CampaignSystem/GameComponents/DefaultAlleyModel.cs`

## Overview

`DefaultAlleyModel` is a rule model that usually defines how a subsystem should compute things. Modders most often customize behavior by replacing or subclassing it.

## Mental Model

Treat `DefaultAlleyModel` as a Model-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Properties

| Name | Signature |
|------|-----------|
| `DestroyAlleyAfterDaysWhenLeaderIsDeath` | `public override CampaignTime DestroyAlleyAfterDaysWhenLeaderIsDeath { get; }` |
| `MinimumTroopCountInPlayerOwnedAlley` | `public override int MinimumTroopCountInPlayerOwnedAlley { get; }` |
| `MaximumTroopCountInPlayerOwnedAlley` | `public override int MaximumTroopCountInPlayerOwnedAlley { get; }` |
| `GetDailyCrimeRatingOfAlley` | `public override float GetDailyCrimeRatingOfAlley { get; }` |

## Key Methods

### GetDailyXpGainForAssignedClanMember
`public override float GetDailyXpGainForAssignedClanMember(Hero assignedHero)`

**Purpose:** Gets the current value of `daily xp gain for assigned clan member`.

### GetDailyXpGainForMainHero
`public override float GetDailyXpGainForMainHero()`

**Purpose:** Gets the current value of `daily xp gain for main hero`.

### GetInitialXpGainForMainHero
`public override float GetInitialXpGainForMainHero()`

**Purpose:** Gets the current value of `initial xp gain for main hero`.

### GetXpGainAfterSuccessfulAlleyDefenseForMainHero
`public override float GetXpGainAfterSuccessfulAlleyDefenseForMainHero()`

**Purpose:** Gets the current value of `xp gain after successful alley defense for main hero`.

### GetTroopsOfAIOwnedAlley
`public override TroopRoster GetTroopsOfAIOwnedAlley(Alley alley)`

**Purpose:** Gets the current value of `troops of a i owned alley`.

### GetTroopsOfAlleyForBattleMission
`public override TroopRoster GetTroopsOfAlleyForBattleMission(Alley alley)`

**Purpose:** Gets the current value of `troops of alley for battle mission`.

### GetClanMembersAndAvailabilityDetailsForLeadingAnAlley
`public override List<ValueTuple<Hero, DefaultAlleyModel.AlleyMemberAvailabilityDetail>> GetClanMembersAndAvailabilityDetailsForLeadingAnAlley(Alley alley)`

**Purpose:** Gets the current value of `clan members and availability details for leading an alley`.

### GetTroopsToRecruitFromAlleyDependingOnAlleyRandom
`public override TroopRoster GetTroopsToRecruitFromAlleyDependingOnAlleyRandom(Alley alley, float random)`

**Purpose:** Gets the current value of `troops to recruit from alley depending on alley random`.

### GetDisabledReasonTextForHero
`public override TextObject GetDisabledReasonTextForHero(Hero hero, Alley alley, DefaultAlleyModel.AlleyMemberAvailabilityDetail detail)`

**Purpose:** Gets the current value of `disabled reason text for hero`.

### GetAlleyAttackResponseTimeInDays
`public override float GetAlleyAttackResponseTimeInDays(TroopRoster troopRoster)`

**Purpose:** Gets the current value of `alley attack response time in days`.

### GetDailyIncomeOfAlley
`public override int GetDailyIncomeOfAlley(Alley alley)`

**Purpose:** Gets the current value of `daily income of alley`.

## Usage Example

```csharp
Game.Current.ReplaceModel<DefaultAlleyModel>(new MyDefaultAlleyModel());
```

## See Also

- [Complete Class Catalog](../catalog)