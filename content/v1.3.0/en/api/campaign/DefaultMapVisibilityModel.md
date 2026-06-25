---
title: "DefaultMapVisibilityModel"
description: "Auto-generated class reference for DefaultMapVisibilityModel."
---
# DefaultMapVisibilityModel

**Namespace:** TaleWorlds.CampaignSystem.GameComponents
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class DefaultMapVisibilityModel : MapVisibilityModel`
**Base:** `MapVisibilityModel`
**File:** `TaleWorlds.CampaignSystem/GameComponents/DefaultMapVisibilityModel.cs`

## Overview

`DefaultMapVisibilityModel` is a rule model that usually defines how a subsystem should compute things. Modders most often customize behavior by replacing or subclassing it.

## Mental Model

Treat `DefaultMapVisibilityModel` as a Model-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Methods

### GetPartySpottingRangeBase
`public override float GetPartySpottingRangeBase(MobileParty party)`

**Purpose:** Reads and returns the `party spotting range base` value held by the current object.

```csharp
// Obtain an instance of DefaultMapVisibilityModel from the subsystem API first
DefaultMapVisibilityModel defaultMapVisibilityModel = ...;
var result = defaultMapVisibilityModel.GetPartySpottingRangeBase(party);
```

### GetPartySpottingRange
`public override ExplainedNumber GetPartySpottingRange(MobileParty party, bool includeDescriptions = false)`

**Purpose:** Reads and returns the `party spotting range` value held by the current object.

```csharp
// Obtain an instance of DefaultMapVisibilityModel from the subsystem API first
DefaultMapVisibilityModel defaultMapVisibilityModel = ...;
var result = defaultMapVisibilityModel.GetPartySpottingRange(party, false);
```

### GetPartyRelativeInspectionRange
`public override float GetPartyRelativeInspectionRange(IMapPoint party)`

**Purpose:** Reads and returns the `party relative inspection range` value held by the current object.

```csharp
// Obtain an instance of DefaultMapVisibilityModel from the subsystem API first
DefaultMapVisibilityModel defaultMapVisibilityModel = ...;
var result = defaultMapVisibilityModel.GetPartyRelativeInspectionRange(party);
```

### GetPartySpottingDifficulty
`public override float GetPartySpottingDifficulty(MobileParty spottingParty, MobileParty party)`

**Purpose:** Reads and returns the `party spotting difficulty` value held by the current object.

```csharp
// Obtain an instance of DefaultMapVisibilityModel from the subsystem API first
DefaultMapVisibilityModel defaultMapVisibilityModel = ...;
var result = defaultMapVisibilityModel.GetPartySpottingDifficulty(spottingParty, party);
```

### GetHideoutSpottingDistance
`public override float GetHideoutSpottingDistance()`

**Purpose:** Reads and returns the `hideout spotting distance` value held by the current object.

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