---
title: "DefaultMapVisibilityModel"
description: "Auto-generated class reference for DefaultMapVisibilityModel."
---
# DefaultMapVisibilityModel

**Namespace:** TaleWorlds.CampaignSystem.GameComponents
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class DefaultMapVisibilityModel : MapVisibilityModel`
**Base:** `MapVisibilityModel`
**File:** `bin/TaleWorlds.CampaignSystem/TaleWorlds.CampaignSystem.GameComponents/DefaultMapVisibilityModel.cs`

## Overview

`DefaultMapVisibilityModel` is a rule model that usually defines how a subsystem should compute things. Modders most often customize behavior by replacing or subclassing it.

## Mental Model

Treat `DefaultMapVisibilityModel` as a Model-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Methods

### MaximumSeeingRange
`public override float MaximumSeeingRange()`

**Purpose:** Executes the MaximumSeeingRange logic.

```csharp
// Obtain an instance of DefaultMapVisibilityModel from the subsystem API first
DefaultMapVisibilityModel defaultMapVisibilityModel = ...;
var result = defaultMapVisibilityModel.MaximumSeeingRange();
```

### GetPartySeeingRangeBase
`public override float GetPartySeeingRangeBase(MobileParty party)`

**Purpose:** Reads and returns the party seeing range base value held by the this instance.

```csharp
// Obtain an instance of DefaultMapVisibilityModel from the subsystem API first
DefaultMapVisibilityModel defaultMapVisibilityModel = ...;
var result = defaultMapVisibilityModel.GetPartySeeingRangeBase(party);
```

### GetPartySpottingRange
`public override ExplainedNumber GetPartySpottingRange(MobileParty party, bool includeDescriptions = false)`

**Purpose:** Reads and returns the party spotting range value held by the this instance.

```csharp
// Obtain an instance of DefaultMapVisibilityModel from the subsystem API first
DefaultMapVisibilityModel defaultMapVisibilityModel = ...;
var result = defaultMapVisibilityModel.GetPartySpottingRange(party, false);
```

### GetPartySpottingRatioForMainPartySeeingRange
`public override float GetPartySpottingRatioForMainPartySeeingRange(MobileParty party)`

**Purpose:** Reads and returns the party spotting ratio for main party seeing range value held by the this instance.

```csharp
// Obtain an instance of DefaultMapVisibilityModel from the subsystem API first
DefaultMapVisibilityModel defaultMapVisibilityModel = ...;
var result = defaultMapVisibilityModel.GetPartySpottingRatioForMainPartySeeingRange(party);
```

### GetHideoutSpottingDistance
`public override float GetHideoutSpottingDistance()`

**Purpose:** Reads and returns the hideout spotting distance value held by the this instance.

```csharp
// Obtain an instance of DefaultMapVisibilityModel from the subsystem API first
DefaultMapVisibilityModel defaultMapVisibilityModel = ...;
var result = defaultMapVisibilityModel.GetHideoutSpottingDistance();
```

## Usage Example

```csharp
Game.Current.ReplaceModel<DefaultMapVisibilityModel>(new MyDefaultMapVisibilityModel());
```

## See Also

- [Area Index](../)