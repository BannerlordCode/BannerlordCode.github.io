---
title: "PartyNavigationModel"
description: "Auto-generated class reference for PartyNavigationModel."
---
# PartyNavigationModel

**Namespace:** TaleWorlds.CampaignSystem.ComponentInterfaces
**Module:** TaleWorlds.CampaignSystem
**Type:** `public abstract class PartyNavigationModel : MBGameModel<PartyNavigationModel>`
**Base:** `MBGameModel<PartyNavigationModel>`
**File:** `bin/TaleWorlds.CampaignSystem/TaleWorlds.CampaignSystem.ComponentInterfaces/PartyNavigationModel.cs`

## Overview

`PartyNavigationModel` is a rule model that usually defines how a subsystem should compute things. Modders most often customize behavior by replacing or subclassing it.

## Mental Model

Treat `PartyNavigationModel` as a Model-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Methods

### CanPlayerNavigateToPosition
`public abstract bool CanPlayerNavigateToPosition(CampaignVec2 vec2, out MobileParty.NavigationType navigationType)`

**Purpose:** Checks whether the current object meets the preconditions for `player navigate to position`.

```csharp
// Obtain an instance of PartyNavigationModel from the subsystem API first
PartyNavigationModel partyNavigationModel = ...;
var result = partyNavigationModel.CanPlayerNavigateToPosition(vec2, navigationType);
```

### GetEmbarkDisembarkThresholdDistance
`public abstract float GetEmbarkDisembarkThresholdDistance()`

**Purpose:** Reads and returns the `embark disembark threshold distance` value held by the current object.

```csharp
// Obtain an instance of PartyNavigationModel from the subsystem API first
PartyNavigationModel partyNavigationModel = ...;
var result = partyNavigationModel.GetEmbarkDisembarkThresholdDistance();
```

### IsTerrainTypeValidForNavigationType
`public abstract bool IsTerrainTypeValidForNavigationType(TerrainType terrainType, MobileParty.NavigationType navigationType)`

**Purpose:** Determines whether the current object is in the `terrain type valid for navigation type` state or condition.

```csharp
// Obtain an instance of PartyNavigationModel from the subsystem API first
PartyNavigationModel partyNavigationModel = ...;
var result = partyNavigationModel.IsTerrainTypeValidForNavigationType(terrainType, navigationType);
```

### GetInvalidTerrainTypesForNavigationType
`public abstract int GetInvalidTerrainTypesForNavigationType(MobileParty.NavigationType navigationType)`

**Purpose:** Reads and returns the `invalid terrain types for navigation type` value held by the current object.

```csharp
// Obtain an instance of PartyNavigationModel from the subsystem API first
PartyNavigationModel partyNavigationModel = ...;
var result = partyNavigationModel.GetInvalidTerrainTypesForNavigationType(navigationType);
```

### HasNavalNavigationCapability
`public abstract bool HasNavalNavigationCapability(MobileParty mobileParty)`

**Purpose:** Determines whether the current object already holds `naval navigation capability`.

```csharp
// Obtain an instance of PartyNavigationModel from the subsystem API first
PartyNavigationModel partyNavigationModel = ...;
var result = partyNavigationModel.HasNavalNavigationCapability(mobileParty);
```

## Usage Example

```csharp
// Typically obtained from a subsystem API or factory
PartyNavigationModel instance = ...;
```

## See Also

- [Area Index](../)