---
title: "DefaultVolunteerModel"
description: "Auto-generated class reference for DefaultVolunteerModel."
---
# DefaultVolunteerModel

**Namespace:** TaleWorlds.CampaignSystem.GameComponents
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class DefaultVolunteerModel : VolunteerModel`
**Base:** `VolunteerModel`
**File:** `TaleWorlds.CampaignSystem/GameComponents/DefaultVolunteerModel.cs`

## Overview

`DefaultVolunteerModel` is a rule model that usually defines how a subsystem should compute things. Modders most often customize behavior by replacing or subclassing it.

## Mental Model

Treat `DefaultVolunteerModel` as a Model-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Properties

| Name | Signature |
|------|-----------|
| `MaxVolunteerTier` | `public override int MaxVolunteerTier { get; }` |

## Key Methods

### MaximumIndexHeroCanRecruitFromHero
`public override int MaximumIndexHeroCanRecruitFromHero(Hero buyerHero, Hero sellerHero, int useValueAsRelation = -101)`

**Purpose:** Executes the MaximumIndexHeroCanRecruitFromHero logic.

```csharp
// Obtain an instance of DefaultVolunteerModel from the subsystem API first
DefaultVolunteerModel defaultVolunteerModel = ...;
var result = defaultVolunteerModel.MaximumIndexHeroCanRecruitFromHero(buyerHero, sellerHero, 0);
```

### MaximumIndexGarrisonCanRecruitFromHero
`public override int MaximumIndexGarrisonCanRecruitFromHero(Settlement settlement, Hero sellerHero)`

**Purpose:** Executes the MaximumIndexGarrisonCanRecruitFromHero logic.

```csharp
// Obtain an instance of DefaultVolunteerModel from the subsystem API first
DefaultVolunteerModel defaultVolunteerModel = ...;
var result = defaultVolunteerModel.MaximumIndexGarrisonCanRecruitFromHero(settlement, sellerHero);
```

### GetDailyVolunteerProductionProbability
`public override float GetDailyVolunteerProductionProbability(Hero hero, int index, Settlement settlement)`

**Purpose:** Reads and returns the daily volunteer production probability value held by the this instance.

```csharp
// Obtain an instance of DefaultVolunteerModel from the subsystem API first
DefaultVolunteerModel defaultVolunteerModel = ...;
var result = defaultVolunteerModel.GetDailyVolunteerProductionProbability(hero, 0, settlement);
```

### GetBasicVolunteer
`public override CharacterObject GetBasicVolunteer(Hero sellerHero)`

**Purpose:** Reads and returns the basic volunteer value held by the this instance.

```csharp
// Obtain an instance of DefaultVolunteerModel from the subsystem API first
DefaultVolunteerModel defaultVolunteerModel = ...;
var result = defaultVolunteerModel.GetBasicVolunteer(sellerHero);
```

### CanHaveRecruits
`public override bool CanHaveRecruits(Hero hero)`

**Purpose:** Checks whether the this instance meets the preconditions for have recruits.

```csharp
// Obtain an instance of DefaultVolunteerModel from the subsystem API first
DefaultVolunteerModel defaultVolunteerModel = ...;
var result = defaultVolunteerModel.CanHaveRecruits(hero);
```

## Usage Example

```csharp
Game.Current.ReplaceModel<DefaultVolunteerModel>(new MyDefaultVolunteerModel());
```

## See Also

- [Area Index](../)