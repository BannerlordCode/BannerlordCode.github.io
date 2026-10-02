---
title: "MapTrackModel"
description: "Auto-generated class reference for MapTrackModel."
---
# MapTrackModel

**Namespace:** TaleWorlds.CampaignSystem.ComponentInterfaces
**Module:** TaleWorlds.CampaignSystem
**Type:** `public abstract class MapTrackModel : MBGameModel<MapTrackModel> `
**Base:** MBGameModel<MapTrackModel>
**Source:** TaleWorlds.CampaignSystem/ComponentInterfaces/MapTrackModel.cs

## Overview

Auto-generated stub for `MapTrackModel`. Deep documentation is scheduled in a later pass.

## Mental Model

Auto-generated placeholder; to be replaced by the deep-documentation pass.

## Key Methods

### GetSkipTrackChance
`public abstract float GetSkipTrackChance(MobileParty mobileParty)`

### GetMaxTrackSpottingDistanceForMainParty
`public abstract float GetMaxTrackSpottingDistanceForMainParty()`

### CanPartyLeaveTrack
`public abstract bool CanPartyLeaveTrack(MobileParty mobileParty)`

### GetTrackDetectionDifficultyForMainParty
`public abstract float GetTrackDetectionDifficultyForMainParty(Track track,float trackSpottingDistance)`

### GetSkillFromTrackDetected
`public abstract float GetSkillFromTrackDetected(Track track)`

### GetTrackLife
`public abstract int GetTrackLife(MobileParty mobileParty)`

### TrackTitle
`public abstract TextObject TrackTitle(Track track)`

### GetTrackDescription
`public abstract IEnumerable<ValueTuple<TextObject,string>> GetTrackDescription(Track track)`

### GetTrackColor
`public abstract uint GetTrackColor(Track track)`

### GetTrackScale
`public abstract float GetTrackScale(Track track)`

## See Also

- [Section index](../)
