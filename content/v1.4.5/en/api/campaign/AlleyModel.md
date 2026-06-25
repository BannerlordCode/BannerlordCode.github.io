---
title: "AlleyModel"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `AlleyModel`
- [← Area / Back to campaign](./)
- [↑ API Index](../)
- [🏠 Home v1.4.5](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# AlleyModel

**Namespace:** TaleWorlds.CampaignSystem.ComponentInterfaces
**Module:** TaleWorlds.CampaignSystem
**Type:** `public abstract class AlleyModel : MBGameModel<AlleyModel>`
**Base:** `MBGameModel<AlleyModel>`
**File:** `Bannerlord.Source/bin/TaleWorlds.CampaignSystem/TaleWorlds.CampaignSystem.ComponentInterfaces/AlleyModel.cs`

## Overview

`AlleyModel` is a rule model that usually defines how a subsystem should compute things. Modders most often customize behavior by replacing or subclassing it.

## Mental Model

Treat `AlleyModel` as a Model-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Properties

| Name | Signature |
|------|-----------|
| `DestroyAlleyAfterDaysWhenLeaderIsDeath` | `public abstract CampaignTime DestroyAlleyAfterDaysWhenLeaderIsDeath { get; }` |
| `MinimumTroopCountInPlayerOwnedAlley` | `public abstract int MinimumTroopCountInPlayerOwnedAlley { get; }` |
| `MaximumTroopCountInPlayerOwnedAlley` | `public abstract int MaximumTroopCountInPlayerOwnedAlley { get; }` |
| `GetDailyCrimeRatingOfAlley` | `public abstract float GetDailyCrimeRatingOfAlley { get; }` |

## Key Methods

### GetDailyXpGainForAssignedClanMember
`public abstract float GetDailyXpGainForAssignedClanMember(Hero assignedHero)`

**Purpose:** Gets the current value of `daily xp gain for assigned clan member`.

### GetDailyXpGainForMainHero
`public abstract float GetDailyXpGainForMainHero()`

**Purpose:** Gets the current value of `daily xp gain for main hero`.

### GetInitialXpGainForMainHero
`public abstract float GetInitialXpGainForMainHero()`

**Purpose:** Gets the current value of `initial xp gain for main hero`.

### GetXpGainAfterSuccessfulAlleyDefenseForMainHero
`public abstract float GetXpGainAfterSuccessfulAlleyDefenseForMainHero()`

**Purpose:** Gets the current value of `xp gain after successful alley defense for main hero`.

### GetTroopsOfAIOwnedAlley
`public abstract TroopRoster GetTroopsOfAIOwnedAlley(Alley alley)`

**Purpose:** Gets the current value of `troops of a i owned alley`.

### GetTroopsOfAlleyForBattleMission
`public abstract TroopRoster GetTroopsOfAlleyForBattleMission(Alley alley)`

**Purpose:** Gets the current value of `troops of alley for battle mission`.

### GetDailyIncomeOfAlley
`public abstract int GetDailyIncomeOfAlley(Alley alley)`

**Purpose:** Gets the current value of `daily income of alley`.

### GetTroopsToRecruitFromAlleyDependingOnAlleyRandom
`public abstract TroopRoster GetTroopsToRecruitFromAlleyDependingOnAlleyRandom(Alley alley, float random)`

**Purpose:** Gets the current value of `troops to recruit from alley depending on alley random`.

### GetDisabledReasonTextForHero
`public abstract TextObject GetDisabledReasonTextForHero(Hero hero, Alley alley, DefaultAlleyModel.AlleyMemberAvailabilityDetail detail)`

**Purpose:** Gets the current value of `disabled reason text for hero`.

### GetAlleyAttackResponseTimeInDays
`public abstract float GetAlleyAttackResponseTimeInDays(TroopRoster troopRoster)`

**Purpose:** Gets the current value of `alley attack response time in days`.

## Usage Example

```csharp
var implementation = new CustomAlleyModel();
```

## See Also

- [Complete Class Catalog](../catalog)