---
title: "DefaultMapTrackModel"
description: "Auto-generated class reference for DefaultMapTrackModel."
---
# DefaultMapTrackModel

**Namespace:** TaleWorlds.CampaignSystem.GameComponents
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class DefaultMapTrackModel : MapTrackModel`
**Base:** `MapTrackModel`
**File:** `TaleWorlds.CampaignSystem/GameComponents/DefaultMapTrackModel.cs`

## Overview

`DefaultMapTrackModel` is a rule model that usually defines how a subsystem should compute things. Modders most often customize behavior by replacing or subclassing it.

## Mental Model

Treat `DefaultMapTrackModel` as a Model-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Properties

| Name | Signature |
|------|-----------|
| `MaxTrackLife` | `public override float MaxTrackLife { get; }` |

## Key Methods

### GetMaxTrackSpottingDistanceForMainParty
`public override float GetMaxTrackSpottingDistanceForMainParty()`

**Purpose:** Reads and returns the max track spotting distance for main party value held by the this instance.

```csharp
// Obtain an instance of DefaultMapTrackModel from the subsystem API first
DefaultMapTrackModel defaultMapTrackModel = ...;
var result = defaultMapTrackModel.GetMaxTrackSpottingDistanceForMainParty();
```

### CanPartyLeaveTrack
`public override bool CanPartyLeaveTrack(MobileParty mobileParty)`

**Purpose:** Checks whether the this instance meets the preconditions for party leave track.

```csharp
// Obtain an instance of DefaultMapTrackModel from the subsystem API first
DefaultMapTrackModel defaultMapTrackModel = ...;
var result = defaultMapTrackModel.CanPartyLeaveTrack(mobileParty);
```

### GetTrackLife
`public override int GetTrackLife(MobileParty mobileParty)`

**Purpose:** Reads and returns the track life value held by the this instance.

```csharp
// Obtain an instance of DefaultMapTrackModel from the subsystem API first
DefaultMapTrackModel defaultMapTrackModel = ...;
var result = defaultMapTrackModel.GetTrackLife(mobileParty);
```

### GetTrackDetectionDifficultyForMainParty
`public override float GetTrackDetectionDifficultyForMainParty(Track track, float trackSpottingDistance)`

**Purpose:** Reads and returns the track detection difficulty for main party value held by the this instance.

```csharp
// Obtain an instance of DefaultMapTrackModel from the subsystem API first
DefaultMapTrackModel defaultMapTrackModel = ...;
var result = defaultMapTrackModel.GetTrackDetectionDifficultyForMainParty(track, 0);
```

### GetSkillFromTrackDetected
`public override float GetSkillFromTrackDetected(Track track)`

**Purpose:** Reads and returns the skill from track detected value held by the this instance.

```csharp
// Obtain an instance of DefaultMapTrackModel from the subsystem API first
DefaultMapTrackModel defaultMapTrackModel = ...;
var result = defaultMapTrackModel.GetSkillFromTrackDetected(track);
```

### GetSkipTrackChance
`public override float GetSkipTrackChance(MobileParty mobileParty)`

**Purpose:** Reads and returns the skip track chance value held by the this instance.

```csharp
// Obtain an instance of DefaultMapTrackModel from the subsystem API first
DefaultMapTrackModel defaultMapTrackModel = ...;
var result = defaultMapTrackModel.GetSkipTrackChance(mobileParty);
```

### TrackTitle
`public override TextObject TrackTitle(Track track)`

**Purpose:** Executes the TrackTitle logic.

```csharp
// Obtain an instance of DefaultMapTrackModel from the subsystem API first
DefaultMapTrackModel defaultMapTrackModel = ...;
var result = defaultMapTrackModel.TrackTitle(track);
```

### GetTrackDescription
`public override IEnumerable<ValueTuple<TextObject, string>> GetTrackDescription(Track track)`

**Purpose:** Reads and returns the track description value held by the this instance.

```csharp
// Obtain an instance of DefaultMapTrackModel from the subsystem API first
DefaultMapTrackModel defaultMapTrackModel = ...;
var result = defaultMapTrackModel.GetTrackDescription(track);
```

### GetTrackColor
`public override uint GetTrackColor(Track track)`

**Purpose:** Reads and returns the track color value held by the this instance.

```csharp
// Obtain an instance of DefaultMapTrackModel from the subsystem API first
DefaultMapTrackModel defaultMapTrackModel = ...;
var result = defaultMapTrackModel.GetTrackColor(track);
```

### GetTrackScale
`public override float GetTrackScale(Track track)`

**Purpose:** Reads and returns the track scale value held by the this instance.

```csharp
// Obtain an instance of DefaultMapTrackModel from the subsystem API first
DefaultMapTrackModel defaultMapTrackModel = ...;
var result = defaultMapTrackModel.GetTrackScale(track);
```

## Usage Example

```csharp
Game.Current.ReplaceModel<DefaultMapTrackModel>(new MyDefaultMapTrackModel());
```

## See Also

- [Area Index](../)