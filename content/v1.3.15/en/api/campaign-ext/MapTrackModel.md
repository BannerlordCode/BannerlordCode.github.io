---
title: "MapTrackModel"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `MapTrackModel`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.3.15](../../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# MapTrackModel

**Namespace:** TaleWorlds.CampaignSystem.ComponentInterfaces
**Module:** TaleWorlds.CampaignSystem
**Type:** `public abstract class MapTrackModel : MBGameModel<MapTrackModel>`
**Base:** `MBGameModel<MapTrackModel>`
**File:** `TaleWorlds.CampaignSystem/ComponentInterfaces/MapTrackModel.cs`

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

**Purpose:** Gets the current value of `skip track chance`.

### GetMaxTrackSpottingDistanceForMainParty
`public abstract float GetMaxTrackSpottingDistanceForMainParty()`

**Purpose:** Gets the current value of `max track spotting distance for main party`.

### CanPartyLeaveTrack
`public abstract bool CanPartyLeaveTrack(MobileParty mobileParty)`

**Purpose:** Checks whether the current object can `party leave track`.

### GetTrackDetectionDifficultyForMainParty
`public abstract float GetTrackDetectionDifficultyForMainParty(Track track, float trackSpottingDistance)`

**Purpose:** Gets the current value of `track detection difficulty for main party`.

### GetSkillFromTrackDetected
`public abstract float GetSkillFromTrackDetected(Track track)`

**Purpose:** Gets the current value of `skill from track detected`.

### GetTrackLife
`public abstract int GetTrackLife(MobileParty mobileParty)`

**Purpose:** Gets the current value of `track life`.

### TrackTitle
`public abstract TextObject TrackTitle(Track track)`

**Purpose:** Handles logic related to `track title`.

### GetTrackDescription
`public abstract IEnumerable<ValueTuple<TextObject, string>> GetTrackDescription(Track track)`

**Purpose:** Gets the current value of `track description`.

### GetTrackColor
`public abstract uint GetTrackColor(Track track)`

**Purpose:** Gets the current value of `track color`.

### GetTrackScale
`public abstract float GetTrackScale(Track track)`

**Purpose:** Gets the current value of `track scale`.

## Usage Example

```csharp
var implementation = new CustomMapTrackModel();
```

## See Also

- [Complete Class Catalog](../catalog)