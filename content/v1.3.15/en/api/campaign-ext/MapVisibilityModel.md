---
title: "MapVisibilityModel"
description: "Auto-generated class reference for MapVisibilityModel."
---
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

**Purpose:** **Purpose:** Executes the MaximumSeeingRange logic.

```csharp
// Obtain an instance of MapVisibilityModel from the subsystem API first
MapVisibilityModel mapVisibilityModel = ...;
var result = mapVisibilityModel.MaximumSeeingRange();
```

### GetPartySpottingRangeBase
`public abstract float GetPartySpottingRangeBase(MobileParty party)`

**Purpose:** **Purpose:** Reads and returns the party spotting range base value held by the this instance.

```csharp
// Obtain an instance of MapVisibilityModel from the subsystem API first
MapVisibilityModel mapVisibilityModel = ...;
var result = mapVisibilityModel.GetPartySpottingRangeBase(party);
```

### GetPartySpottingRange
`public abstract ExplainedNumber GetPartySpottingRange(MobileParty party, bool includeDescriptions = false)`

**Purpose:** **Purpose:** Reads and returns the party spotting range value held by the this instance.

```csharp
// Obtain an instance of MapVisibilityModel from the subsystem API first
MapVisibilityModel mapVisibilityModel = ...;
var result = mapVisibilityModel.GetPartySpottingRange(party, false);
```

### GetPartyRelativeInspectionRange
`public abstract float GetPartyRelativeInspectionRange(IMapPoint party)`

**Purpose:** **Purpose:** Reads and returns the party relative inspection range value held by the this instance.

```csharp
// Obtain an instance of MapVisibilityModel from the subsystem API first
MapVisibilityModel mapVisibilityModel = ...;
var result = mapVisibilityModel.GetPartyRelativeInspectionRange(party);
```

### GetPartySpottingDifficulty
`public abstract float GetPartySpottingDifficulty(MobileParty spotterParty, MobileParty party)`

**Purpose:** **Purpose:** Reads and returns the party spotting difficulty value held by the this instance.

```csharp
// Obtain an instance of MapVisibilityModel from the subsystem API first
MapVisibilityModel mapVisibilityModel = ...;
var result = mapVisibilityModel.GetPartySpottingDifficulty(spotterParty, party);
```

### GetHideoutSpottingDistance
`public abstract float GetHideoutSpottingDistance()`

**Purpose:** **Purpose:** Reads and returns the hideout spotting distance value held by the this instance.

```csharp
// Obtain an instance of MapVisibilityModel from the subsystem API first
MapVisibilityModel mapVisibilityModel = ...;
var result = mapVisibilityModel.GetHideoutSpottingDistance();
```

## Usage Example

```csharp
// Typically obtained from a subsystem API or factory
MapVisibilityModel instance = ...;
```

## See Also

- [Area Index](../)