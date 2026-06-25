---
title: "DefaultMapVisibilityModel"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `DefaultMapVisibilityModel`
- [← Area / Back to campaign](./)
- [↑ API Index](../)
- [🏠 Home v1.4.5](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# DefaultMapVisibilityModel

**Namespace:** TaleWorlds.CampaignSystem.GameComponents
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class DefaultMapVisibilityModel : MapVisibilityModel`
**Base:** `MapVisibilityModel`
**File:** `Bannerlord.Source/bin/TaleWorlds.CampaignSystem/TaleWorlds.CampaignSystem.GameComponents/DefaultMapVisibilityModel.cs`

## Overview

`DefaultMapVisibilityModel` is a rule model that usually defines how a subsystem should compute things. Modders most often customize behavior by replacing or subclassing it.

## Mental Model

Treat `DefaultMapVisibilityModel` as a Model-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Methods

### MaximumSeeingRange
`public override float MaximumSeeingRange()`

**Purpose:** Handles logic related to `maximum seeing range`.

### GetPartySeeingRangeBase
`public override float GetPartySeeingRangeBase(MobileParty party)`

**Purpose:** Gets the current value of `party seeing range base`.

### GetPartySpottingRange
`public override ExplainedNumber GetPartySpottingRange(MobileParty party, bool includeDescriptions = false)`

**Purpose:** Gets the current value of `party spotting range`.

### GetPartySpottingRatioForMainPartySeeingRange
`public override float GetPartySpottingRatioForMainPartySeeingRange(MobileParty party)`

**Purpose:** Gets the current value of `party spotting ratio for main party seeing range`.

### GetHideoutSpottingDistance
`public override float GetHideoutSpottingDistance()`

**Purpose:** Gets the current value of `hideout spotting distance`.

## Usage Example

```csharp
Game.Current.ReplaceModel<DefaultMapVisibilityModel>(new MyDefaultMapVisibilityModel());
```

## See Also

- [Complete Class Catalog](../catalog)