---
title: "AlleyModel"
description: "Auto-generated class reference for AlleyModel."
---
# AlleyModel

**Namespace:** TaleWorlds.CampaignSystem.ComponentInterfaces
**Module:** TaleWorlds.CampaignSystem
**Type:** `public abstract class AlleyModel : MBGameModel<AlleyModel>`
**Base:** `MBGameModel<AlleyModel>`
**File:** `bin/TaleWorlds.CampaignSystem/TaleWorlds.CampaignSystem.ComponentInterfaces/AlleyModel.cs`

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

**Purpose:** Reads and returns the daily xp gain for assigned clan member value held by the this instance.

```csharp
// Obtain an instance of AlleyModel from the subsystem API first
AlleyModel alleyModel = ...;
var result = alleyModel.GetDailyXpGainForAssignedClanMember(assignedHero);
```

### GetDailyXpGainForMainHero
`public abstract float GetDailyXpGainForMainHero()`

**Purpose:** Reads and returns the daily xp gain for main hero value held by the this instance.

```csharp
// Obtain an instance of AlleyModel from the subsystem API first
AlleyModel alleyModel = ...;
var result = alleyModel.GetDailyXpGainForMainHero();
```

### GetInitialXpGainForMainHero
`public abstract float GetInitialXpGainForMainHero()`

**Purpose:** Reads and returns the initial xp gain for main hero value held by the this instance.

```csharp
// Obtain an instance of AlleyModel from the subsystem API first
AlleyModel alleyModel = ...;
var result = alleyModel.GetInitialXpGainForMainHero();
```

### GetXpGainAfterSuccessfulAlleyDefenseForMainHero
`public abstract float GetXpGainAfterSuccessfulAlleyDefenseForMainHero()`

**Purpose:** Reads and returns the xp gain after successful alley defense for main hero value held by the this instance.

```csharp
// Obtain an instance of AlleyModel from the subsystem API first
AlleyModel alleyModel = ...;
var result = alleyModel.GetXpGainAfterSuccessfulAlleyDefenseForMainHero();
```

### GetTroopsOfAIOwnedAlley
`public abstract TroopRoster GetTroopsOfAIOwnedAlley(Alley alley)`

**Purpose:** Reads and returns the troops of a i owned alley value held by the this instance.

```csharp
// Obtain an instance of AlleyModel from the subsystem API first
AlleyModel alleyModel = ...;
var result = alleyModel.GetTroopsOfAIOwnedAlley(alley);
```

### GetTroopsOfAlleyForBattleMission
`public abstract TroopRoster GetTroopsOfAlleyForBattleMission(Alley alley)`

**Purpose:** Reads and returns the troops of alley for battle mission value held by the this instance.

```csharp
// Obtain an instance of AlleyModel from the subsystem API first
AlleyModel alleyModel = ...;
var result = alleyModel.GetTroopsOfAlleyForBattleMission(alley);
```

### GetDailyIncomeOfAlley
`public abstract int GetDailyIncomeOfAlley(Alley alley)`

**Purpose:** Reads and returns the daily income of alley value held by the this instance.

```csharp
// Obtain an instance of AlleyModel from the subsystem API first
AlleyModel alleyModel = ...;
var result = alleyModel.GetDailyIncomeOfAlley(alley);
```

### GetTroopsToRecruitFromAlleyDependingOnAlleyRandom
`public abstract TroopRoster GetTroopsToRecruitFromAlleyDependingOnAlleyRandom(Alley alley, float random)`

**Purpose:** Reads and returns the troops to recruit from alley depending on alley random value held by the this instance.

```csharp
// Obtain an instance of AlleyModel from the subsystem API first
AlleyModel alleyModel = ...;
var result = alleyModel.GetTroopsToRecruitFromAlleyDependingOnAlleyRandom(alley, 0);
```

### GetDisabledReasonTextForHero
`public abstract TextObject GetDisabledReasonTextForHero(Hero hero, Alley alley, DefaultAlleyModel.AlleyMemberAvailabilityDetail detail)`

**Purpose:** Reads and returns the disabled reason text for hero value held by the this instance.

```csharp
// Obtain an instance of AlleyModel from the subsystem API first
AlleyModel alleyModel = ...;
var result = alleyModel.GetDisabledReasonTextForHero(hero, alley, detail);
```

### GetAlleyAttackResponseTimeInDays
`public abstract float GetAlleyAttackResponseTimeInDays(TroopRoster troopRoster)`

**Purpose:** Reads and returns the alley attack response time in days value held by the this instance.

```csharp
// Obtain an instance of AlleyModel from the subsystem API first
AlleyModel alleyModel = ...;
var result = alleyModel.GetAlleyAttackResponseTimeInDays(troopRoster);
```

## Usage Example

```csharp
// Typically obtained from a subsystem API or factory
AlleyModel instance = ...;
```

## See Also

- [Area Index](../)