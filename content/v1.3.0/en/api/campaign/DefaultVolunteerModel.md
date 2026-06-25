---
title: "DefaultVolunteerModel"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `DefaultVolunteerModel`
- [← Area / Back to campaign](./)
- [↑ API Index](../)
- [🏠 Home v1.3.0](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
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

**Purpose:** Handles logic related to `maximum index hero can recruit from hero`.

### MaximumIndexGarrisonCanRecruitFromHero
`public override int MaximumIndexGarrisonCanRecruitFromHero(Settlement settlement, Hero sellerHero)`

**Purpose:** Handles logic related to `maximum index garrison can recruit from hero`.

### GetDailyVolunteerProductionProbability
`public override float GetDailyVolunteerProductionProbability(Hero hero, int index, Settlement settlement)`

**Purpose:** Gets the current value of `daily volunteer production probability`.

### GetBasicVolunteer
`public override CharacterObject GetBasicVolunteer(Hero sellerHero)`

**Purpose:** Gets the current value of `basic volunteer`.

### CanHaveRecruits
`public override bool CanHaveRecruits(Hero hero)`

**Purpose:** Checks whether the current object can `have recruits`.

## Usage Example

```csharp
Game.Current.ReplaceModel<DefaultVolunteerModel>(new MyDefaultVolunteerModel());
```

## See Also

- [Complete Class Catalog](../catalog)