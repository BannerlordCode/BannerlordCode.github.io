---
title: "MapVisibilityModel"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `MapVisibilityModel`
- [← Area / Back to campaign](./)
- [↑ API Index](../)
- [🏠 Home v1.4.5](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# MapVisibilityModel

**Namespace:** TaleWorlds.CampaignSystem.ComponentInterfaces
**Module:** TaleWorlds.CampaignSystem
**Type:** `public abstract class MapVisibilityModel : MBGameModel<MapVisibilityModel>`
**Base:** `MBGameModel<MapVisibilityModel>`
**File:** `Bannerlord.Source/bin/TaleWorlds.CampaignSystem/TaleWorlds.CampaignSystem.ComponentInterfaces/MapVisibilityModel.cs`

## Overview

`MapVisibilityModel` is a rule model that usually defines how a subsystem should compute things. Modders most often customize behavior by replacing or subclassing it.

## Mental Model

Treat `MapVisibilityModel` as a Model-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Methods

### MaximumSeeingRange
`public abstract float MaximumSeeingRange()`

**Purpose:** Handles logic related to `maximum seeing range`.

### GetPartySeeingRangeBase
`public abstract float GetPartySeeingRangeBase(MobileParty party)`

**Purpose:** Gets the current value of `party seeing range base`.

### GetPartySpottingRange
`public abstract ExplainedNumber GetPartySpottingRange(MobileParty party, bool includeDescriptions = false)`

**Purpose:** Gets the current value of `party spotting range`.

### GetPartySpottingRatioForMainPartySeeingRange
`public abstract float GetPartySpottingRatioForMainPartySeeingRange(MobileParty party)`

**Purpose:** Gets the current value of `party spotting ratio for main party seeing range`.

### GetHideoutSpottingDistance
`public abstract float GetHideoutSpottingDistance()`

**Purpose:** Gets the current value of `hideout spotting distance`.

## Usage Example

```csharp
var implementation = new CustomMapVisibilityModel();
```

## See Also

- [Complete Class Catalog](../catalog)