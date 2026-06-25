---
title: "MapTrackModel"
description: "Auto-generated class reference for MapTrackModel."
---
# MapTrackModel

**Namespace:** TaleWorlds.CampaignSystem.ComponentInterfaces
**Module:** TaleWorlds.CampaignSystem
**Type:** `public abstract class MapTrackModel : MBGameModel<MapTrackModel>`
**Base:** `MBGameModel<MapTrackModel>`
**File:** `bin/TaleWorlds.CampaignSystem/TaleWorlds.CampaignSystem.ComponentInterfaces/MapTrackModel.cs`

## Overview

`MapTrackModel` is a rule model that usually defines how a subsystem should compute things. Modders most often customize behavior by replacing or subclassing it.

## Mental Model

Treat `MapTrackModel` as a Model-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Properties

| Name | Signature |
|------|-----------|
| `MaxTrackLife` | `public abstract float MaxTrackLife { get; }` |

## Key Methods

### GetSkipTrackChance
`public abstract float GetSkipTrackChance(MobileParty mobileParty)`

**Purpose:** Reads and returns the `skip track chance` value held by the current object.

```csharp
// Obtain an instance of MapTrackModel from the subsystem API first
MapTrackModel mapTrackModel = ...;
var result = mapTrackModel.GetSkipTrackChance(mobileParty);
```

### GetMaxTrackSpottingDistanceForMainParty
`public abstract float GetMaxTrackSpottingDistanceForMainParty()`

**Purpose:** Reads and returns the `max track spotting distance for main party` value held by the current object.

```csharp
// Obtain an instance of MapTrackModel from the subsystem API first
MapTrackModel mapTrackModel = ...;
var result = mapTrackModel.GetMaxTrackSpottingDistanceForMainParty();
```

### CanPartyLeaveTrack
`public abstract bool CanPartyLeaveTrack(MobileParty mobileParty)`

**Purpose:** Checks whether the current object meets the preconditions for `party leave track`.

```csharp
// Obtain an instance of MapTrackModel from the subsystem API first
MapTrackModel mapTrackModel = ...;
var result = mapTrackModel.CanPartyLeaveTrack(mobileParty);
```

### GetTrackDetectionDifficultyForMainParty
`public abstract float GetTrackDetectionDifficultyForMainParty(Track track, float trackSpottingDistance)`

**Purpose:** Reads and returns the `track detection difficulty for main party` value held by the current object.

```csharp
// Obtain an instance of MapTrackModel from the subsystem API first
MapTrackModel mapTrackModel = ...;
var result = mapTrackModel.GetTrackDetectionDifficultyForMainParty(track, 0);
```

### GetSkillFromTrackDetected
`public abstract float GetSkillFromTrackDetected(Track track)`

**Purpose:** Reads and returns the `skill from track detected` value held by the current object.

```csharp
// Obtain an instance of MapTrackModel from the subsystem API first
MapTrackModel mapTrackModel = ...;
var result = mapTrackModel.GetSkillFromTrackDetected(track);
```

### GetTrackLife
`public abstract int GetTrackLife(MobileParty mobileParty)`

**Purpose:** Reads and returns the `track life` value held by the current object.

```csharp
// Obtain an instance of MapTrackModel from the subsystem API first
MapTrackModel mapTrackModel = ...;
var result = mapTrackModel.GetTrackLife(mobileParty);
```

### TrackTitle
`public abstract TextObject TrackTitle(Track track)`

**Purpose:** Performs the operation described by this method.

```csharp
// Obtain an instance of MapTrackModel from the subsystem API first
MapTrackModel mapTrackModel = ...;
var result = mapTrackModel.TrackTitle(track);
```

### GetTrackColor
`public abstract uint GetTrackColor(Track track)`

**Purpose:** Reads and returns the `track color` value held by the current object.

```csharp
// Obtain an instance of MapTrackModel from the subsystem API first
MapTrackModel mapTrackModel = ...;
var result = mapTrackModel.GetTrackColor(track);
```

### GetTrackScale
`public abstract float GetTrackScale(Track track)`

**Purpose:** Reads and returns the `track scale` value held by the current object.

```csharp
// Obtain an instance of MapTrackModel from the subsystem API first
MapTrackModel mapTrackModel = ...;
var result = mapTrackModel.GetTrackScale(track);
```

## Usage Example

```csharp
// Typically obtained from a subsystem API or factory
MapTrackModel instance = ...;
```

## See Also

- [Area Index](../)