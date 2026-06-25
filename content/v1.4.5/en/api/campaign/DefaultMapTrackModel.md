---
title: "DefaultMapTrackModel"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `DefaultMapTrackModel`
- [← Area / Back to campaign](./)
- [↑ API Index](../)
- [🏠 Home v1.4.5](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# DefaultMapTrackModel

**Namespace:** TaleWorlds.CampaignSystem.GameComponents
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class DefaultMapTrackModel : MapTrackModel`
**Base:** `MapTrackModel`
**File:** `Bannerlord.Source/bin/TaleWorlds.CampaignSystem/TaleWorlds.CampaignSystem.GameComponents/DefaultMapTrackModel.cs`

## Overview

`DefaultMapTrackModel` is a rule model that usually defines how a subsystem should compute things. Modders most often customize behavior by replacing or subclassing it.

## Mental Model

Treat `DefaultMapTrackModel` as a Model-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Methods

### GetMaxTrackSpottingDistanceForMainParty
`public override float GetMaxTrackSpottingDistanceForMainParty()`

**Purpose:** Gets the current value of `max track spotting distance for main party`.

### CanPartyLeaveTrack
`public override bool CanPartyLeaveTrack(MobileParty mobileParty)`

**Purpose:** Checks whether the current object can `party leave track`.

### GetTrackLife
`public override int GetTrackLife(MobileParty mobileParty)`

**Purpose:** Gets the current value of `track life`.

### GetTrackDetectionDifficultyForMainParty
`public override float GetTrackDetectionDifficultyForMainParty(Track track, float trackSpottingDistance)`

**Purpose:** Gets the current value of `track detection difficulty for main party`.

### GetSkillFromTrackDetected
`public override float GetSkillFromTrackDetected(Track track)`

**Purpose:** Gets the current value of `skill from track detected`.

### GetSkipTrackChance
`public override float GetSkipTrackChance(MobileParty mobileParty)`

**Purpose:** Gets the current value of `skip track chance`.

### TrackTitle
`public override TextObject TrackTitle(Track track)`

**Purpose:** Handles logic related to `track title`.

### GetTrackColor
`public override uint GetTrackColor(Track track)`

**Purpose:** Gets the current value of `track color`.

### GetTrackScale
`public override float GetTrackScale(Track track)`

**Purpose:** Gets the current value of `track scale`.

## Usage Example

```csharp
Game.Current.ReplaceModel<DefaultMapTrackModel>(new MyDefaultMapTrackModel());
```

## See Also

- [Complete Class Catalog](../catalog)