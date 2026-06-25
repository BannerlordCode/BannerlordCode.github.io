---
title: "VolunteerModel"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `VolunteerModel`
- [← Area / Back to campaign](./)
- [↑ API Index](../)
- [🏠 Home v1.4.5](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# VolunteerModel

**Namespace:** TaleWorlds.CampaignSystem.ComponentInterfaces
**Module:** TaleWorlds.CampaignSystem
**Type:** `public abstract class VolunteerModel : MBGameModel<VolunteerModel>`
**Base:** `MBGameModel<VolunteerModel>`
**File:** `Bannerlord.Source/bin/TaleWorlds.CampaignSystem/TaleWorlds.CampaignSystem.ComponentInterfaces/VolunteerModel.cs`

## Overview

`VolunteerModel` is a rule model that usually defines how a subsystem should compute things. Modders most often customize behavior by replacing or subclassing it.

## Mental Model

Treat `VolunteerModel` as a Model-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Properties

| Name | Signature |
|------|-----------|
| `MaxVolunteerTier` | `public abstract int MaxVolunteerTier { get; }` |

## Key Methods

### MaximumIndexHeroCanRecruitFromHero
`public abstract int MaximumIndexHeroCanRecruitFromHero(Hero buyerHero, Hero sellerHero, int useValueAsRelation = -101)`

**Purpose:** Handles logic related to `maximum index hero can recruit from hero`.

### MaximumIndexGarrisonCanRecruitFromHero
`public abstract int MaximumIndexGarrisonCanRecruitFromHero(Settlement settlement, Hero sellerHero)`

**Purpose:** Handles logic related to `maximum index garrison can recruit from hero`.

### GetDailyVolunteerProductionProbability
`public abstract float GetDailyVolunteerProductionProbability(Hero hero, int index, Settlement settlement)`

**Purpose:** Gets the current value of `daily volunteer production probability`.

### GetBasicVolunteer
`public abstract CharacterObject GetBasicVolunteer(Hero hero)`

**Purpose:** Gets the current value of `basic volunteer`.

### CanHaveRecruits
`public abstract bool CanHaveRecruits(Hero hero)`

**Purpose:** Checks whether the current object can `have recruits`.

## Usage Example

```csharp
var implementation = new CustomVolunteerModel();
```

## See Also

- [Complete Class Catalog](../catalog)