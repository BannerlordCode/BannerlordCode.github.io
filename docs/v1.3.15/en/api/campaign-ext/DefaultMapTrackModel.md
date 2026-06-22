<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `DefaultMapTrackModel`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# DefaultMapTrackModel

**Namespace:** TaleWorlds.CampaignSystem.GameComponents
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class DefaultMapTrackModel : MapTrackModel`
**Base:** `MapTrackModel`
**File:** `TaleWorlds.CampaignSystem/GameComponents/DefaultMapTrackModel.cs`

## Overview

`DefaultMapTrackModel` is a game Model — a rules/override point. Subclass it and register via `Game.Current.ReplaceModel<DefaultMapTrackModel>(new MyDefaultMapTrackModel())` to change how it computes.

## Key Properties

| Name | Signature |
|------|-----------|
| `MaxTrackLife` | `public override float MaxTrackLife { get; }` |

## Key Methods

### GetMaxTrackSpottingDistanceForMainParty
```csharp
public override float GetMaxTrackSpottingDistanceForMainParty()
```

### CanPartyLeaveTrack
```csharp
public override bool CanPartyLeaveTrack(MobileParty mobileParty)
```

### GetTrackLife
```csharp
public override int GetTrackLife(MobileParty mobileParty)
```

### GetTrackDetectionDifficultyForMainParty
```csharp
public override float GetTrackDetectionDifficultyForMainParty(Track track, float trackSpottingDistance)
```

### GetSkillFromTrackDetected
```csharp
public override float GetSkillFromTrackDetected(Track track)
```

### GetSkipTrackChance
```csharp
public override float GetSkipTrackChance(MobileParty mobileParty)
```

### TrackTitle
```csharp
public override TextObject TrackTitle(Track track)
```

### GetTrackDescription
```csharp
public override IEnumerable<ValueTuple<TextObject, string>> GetTrackDescription(Track track)
```

### GetTrackColor
```csharp
public override uint GetTrackColor(Track track)
```

### GetTrackScale
```csharp
public override float GetTrackScale(Track track)
```

## Usage Example

```csharp
// Typical usage of DefaultMapTrackModel (Model)
Game.Current.ReplaceModel<DefaultMapTrackModel>(new MyDefaultMapTrackModel());
```

## See Also

- [Complete Class Catalog](../catalog)