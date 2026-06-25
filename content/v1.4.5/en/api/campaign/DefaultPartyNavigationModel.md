---
title: "DefaultPartyNavigationModel"
description: "Auto-generated class reference for DefaultPartyNavigationModel."
---
# DefaultPartyNavigationModel

**Namespace:** TaleWorlds.CampaignSystem.GameComponents
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class DefaultPartyNavigationModel : PartyNavigationModel`
**Base:** `PartyNavigationModel`
**File:** `bin/TaleWorlds.CampaignSystem/TaleWorlds.CampaignSystem.GameComponents/DefaultPartyNavigationModel.cs`

## Overview

`DefaultPartyNavigationModel` is a rule model that usually defines how a subsystem should compute things. Modders most often customize behavior by replacing or subclassing it.

## Mental Model

Treat `DefaultPartyNavigationModel` as a Model-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Methods

### GetEmbarkDisembarkThresholdDistance
`public override float GetEmbarkDisembarkThresholdDistance()`

**Purpose:** **Purpose:** Reads and returns the embark disembark threshold distance value held by the this instance.

```csharp
// Obtain an instance of DefaultPartyNavigationModel from the subsystem API first
DefaultPartyNavigationModel defaultPartyNavigationModel = ...;
var result = defaultPartyNavigationModel.GetEmbarkDisembarkThresholdDistance();
```

### GetInvalidTerrainTypesForNavigationType
`public override int GetInvalidTerrainTypesForNavigationType(MobileParty.NavigationType navigationType)`

**Purpose:** **Purpose:** Reads and returns the invalid terrain types for navigation type value held by the this instance.

```csharp
// Obtain an instance of DefaultPartyNavigationModel from the subsystem API first
DefaultPartyNavigationModel defaultPartyNavigationModel = ...;
var result = defaultPartyNavigationModel.GetInvalidTerrainTypesForNavigationType(navigationType);
```

### IsTerrainTypeValidForNavigationType
`public override bool IsTerrainTypeValidForNavigationType(TerrainType terrainType, MobileParty.NavigationType navigationType)`

**Purpose:** **Purpose:** Determines whether the this instance is in the terrain type valid for navigation type state or condition.

```csharp
// Obtain an instance of DefaultPartyNavigationModel from the subsystem API first
DefaultPartyNavigationModel defaultPartyNavigationModel = ...;
var result = defaultPartyNavigationModel.IsTerrainTypeValidForNavigationType(terrainType, navigationType);
```

### HasNavalNavigationCapability
`public override bool HasNavalNavigationCapability(MobileParty mobileParty)`

**Purpose:** **Purpose:** Determines whether the this instance already holds naval navigation capability.

```csharp
// Obtain an instance of DefaultPartyNavigationModel from the subsystem API first
DefaultPartyNavigationModel defaultPartyNavigationModel = ...;
var result = defaultPartyNavigationModel.HasNavalNavigationCapability(mobileParty);
```

### CanPlayerNavigateToPosition
`public override bool CanPlayerNavigateToPosition(CampaignVec2 vec2, out MobileParty.NavigationType navigationType)`

**Purpose:** **Purpose:** Checks whether the this instance meets the preconditions for player navigate to position.

```csharp
// Obtain an instance of DefaultPartyNavigationModel from the subsystem API first
DefaultPartyNavigationModel defaultPartyNavigationModel = ...;
var result = defaultPartyNavigationModel.CanPlayerNavigateToPosition(vec2, navigationType);
```

## Usage Example

```csharp
Game.Current.ReplaceModel<DefaultPartyNavigationModel>(new MyDefaultPartyNavigationModel());
```

## See Also

- [Area Index](../)