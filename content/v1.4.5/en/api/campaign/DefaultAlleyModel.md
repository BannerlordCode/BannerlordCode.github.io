---
title: "DefaultAlleyModel"
description: "Auto-generated class reference for DefaultAlleyModel."
---
# DefaultAlleyModel

**Namespace:** TaleWorlds.CampaignSystem.GameComponents
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class DefaultAlleyModel : AlleyModel`
**Base:** `AlleyModel`
**File:** `bin/TaleWorlds.CampaignSystem/TaleWorlds.CampaignSystem.GameComponents/DefaultAlleyModel.cs`

## Overview

`DefaultAlleyModel` is a rule model that usually defines how a subsystem should compute things. Modders most often customize behavior by replacing or subclassing it.

## Mental Model

Treat `DefaultAlleyModel` as a Model-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Methods

### GetDailyXpGainForAssignedClanMember
`public override float GetDailyXpGainForAssignedClanMember(Hero assignedHero)`

**Purpose:** Reads and returns the `daily xp gain for assigned clan member` value held by the current object.

```csharp
// Obtain an instance of DefaultAlleyModel from the subsystem API first
DefaultAlleyModel defaultAlleyModel = ...;
var result = defaultAlleyModel.GetDailyXpGainForAssignedClanMember(assignedHero);
```

### GetDailyXpGainForMainHero
`public override float GetDailyXpGainForMainHero()`

**Purpose:** Reads and returns the `daily xp gain for main hero` value held by the current object.

```csharp
// Obtain an instance of DefaultAlleyModel from the subsystem API first
DefaultAlleyModel defaultAlleyModel = ...;
var result = defaultAlleyModel.GetDailyXpGainForMainHero();
```

### GetInitialXpGainForMainHero
`public override float GetInitialXpGainForMainHero()`

**Purpose:** Reads and returns the `initial xp gain for main hero` value held by the current object.

```csharp
// Obtain an instance of DefaultAlleyModel from the subsystem API first
DefaultAlleyModel defaultAlleyModel = ...;
var result = defaultAlleyModel.GetInitialXpGainForMainHero();
```

### GetXpGainAfterSuccessfulAlleyDefenseForMainHero
`public override float GetXpGainAfterSuccessfulAlleyDefenseForMainHero()`

**Purpose:** Reads and returns the `xp gain after successful alley defense for main hero` value held by the current object.

```csharp
// Obtain an instance of DefaultAlleyModel from the subsystem API first
DefaultAlleyModel defaultAlleyModel = ...;
var result = defaultAlleyModel.GetXpGainAfterSuccessfulAlleyDefenseForMainHero();
```

### GetTroopsOfAIOwnedAlley
`public override TroopRoster GetTroopsOfAIOwnedAlley(Alley alley)`

**Purpose:** Reads and returns the `troops of a i owned alley` value held by the current object.

```csharp
// Obtain an instance of DefaultAlleyModel from the subsystem API first
DefaultAlleyModel defaultAlleyModel = ...;
var result = defaultAlleyModel.GetTroopsOfAIOwnedAlley(alley);
```

### GetTroopsOfAlleyForBattleMission
`public override TroopRoster GetTroopsOfAlleyForBattleMission(Alley alley)`

**Purpose:** Reads and returns the `troops of alley for battle mission` value held by the current object.

```csharp
// Obtain an instance of DefaultAlleyModel from the subsystem API first
DefaultAlleyModel defaultAlleyModel = ...;
var result = defaultAlleyModel.GetTroopsOfAlleyForBattleMission(alley);
```

### GetTroopsToRecruitFromAlleyDependingOnAlleyRandom
`public override TroopRoster GetTroopsToRecruitFromAlleyDependingOnAlleyRandom(Alley alley, float random)`

**Purpose:** Reads and returns the `troops to recruit from alley depending on alley random` value held by the current object.

```csharp
// Obtain an instance of DefaultAlleyModel from the subsystem API first
DefaultAlleyModel defaultAlleyModel = ...;
var result = defaultAlleyModel.GetTroopsToRecruitFromAlleyDependingOnAlleyRandom(alley, 0);
```

### GetDisabledReasonTextForHero
`public override TextObject GetDisabledReasonTextForHero(Hero hero, Alley alley, AlleyMemberAvailabilityDetail detail)`

**Purpose:** Reads and returns the `disabled reason text for hero` value held by the current object.

```csharp
// Obtain an instance of DefaultAlleyModel from the subsystem API first
DefaultAlleyModel defaultAlleyModel = ...;
var result = defaultAlleyModel.GetDisabledReasonTextForHero(hero, alley, detail);
```

### GetAlleyAttackResponseTimeInDays
`public override float GetAlleyAttackResponseTimeInDays(TroopRoster troopRoster)`

**Purpose:** Reads and returns the `alley attack response time in days` value held by the current object.

```csharp
// Obtain an instance of DefaultAlleyModel from the subsystem API first
DefaultAlleyModel defaultAlleyModel = ...;
var result = defaultAlleyModel.GetAlleyAttackResponseTimeInDays(troopRoster);
```

### GetDailyIncomeOfAlley
`public override int GetDailyIncomeOfAlley(Alley alley)`

**Purpose:** Reads and returns the `daily income of alley` value held by the current object.

```csharp
// Obtain an instance of DefaultAlleyModel from the subsystem API first
DefaultAlleyModel defaultAlleyModel = ...;
var result = defaultAlleyModel.GetDailyIncomeOfAlley(alley);
```

## Usage Example

```csharp
Game.Current.ReplaceModel<DefaultAlleyModel>(new MyDefaultAlleyModel());
```

## See Also

- [Area Index](../)