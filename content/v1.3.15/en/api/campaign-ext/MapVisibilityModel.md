---
title: "MapVisibilityModel"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `MapVisibilityModel`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.3.15](../../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# MapVisibilityModel

**Namespace:** TaleWorlds.CampaignSystem.ComponentInterfaces
**Module:** TaleWorlds.CampaignSystem
**Type:** `public abstract class MapVisibilityModel : MBGameModel<MapVisibilityModel>`
**Base:** `MBGameModel<MapVisibilityModel>`
**File:** `TaleWorlds.CampaignSystem/ComponentInterfaces/MapVisibilityModel.cs`

## Overview

`MapVisibilityModel` is a rule model that usually defines how a subsystem should compute things. Modders most often customize behavior by replacing or subclassing it.

## Mental Model

Treat `MapVisibilityModel` as a Model-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Methods

### MaximumSeeingRange
`public abstract float MaximumSeeingRange()`

**Purpose:** Handles logic related to `maximum seeing range`.

### GetPartySpottingRangeBase
`public abstract float GetPartySpottingRangeBase(MobileParty party)`

**Purpose:** Gets the current value of `party spotting range base`.

### GetPartySpottingRange
`public abstract ExplainedNumber GetPartySpottingRange(MobileParty party, bool includeDescriptions = false)`

**Purpose:** Gets the current value of `party spotting range`.

### GetPartyRelativeInspectionRange
`public abstract float GetPartyRelativeInspectionRange(IMapPoint party)`

**Purpose:** Gets the current value of `party relative inspection range`.

### GetPartySpottingDifficulty
`public abstract float GetPartySpottingDifficulty(MobileParty spotterParty, MobileParty party)`

**Purpose:** Gets the current value of `party spotting difficulty`.

### GetHideoutSpottingDistance
`public abstract float GetHideoutSpottingDistance()`

**Purpose:** Gets the current value of `hideout spotting distance`.

## Usage Example

```csharp
var implementation = new CustomMapVisibilityModel();
```

## See Also

- [Complete Class Catalog](../catalog)