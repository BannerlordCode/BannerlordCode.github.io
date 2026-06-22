<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `MapTrackModel`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# MapTrackModel

**Namespace:** TaleWorlds.CampaignSystem.ComponentInterfaces
**Module:** TaleWorlds.CampaignSystem
**Type:** `public abstract class MapTrackModel : MBGameModel<MapTrackModel>`
**Base:** `MBGameModel<MapTrackModel>`
**File:** `TaleWorlds.CampaignSystem/ComponentInterfaces/MapTrackModel.cs`

## Overview

`MapTrackModel` is a game Model — a rules/override point. Subclass it and register via `Game.Current.ReplaceModel<MapTrackModel>(new MyMapTrackModel())` to change how it computes.

## Key Properties

| Name | Signature |
|------|-----------|
| `MaxTrackLife` | `public abstract float MaxTrackLife { get; }` |

## Key Methods

### GetSkipTrackChance
```csharp
public abstract float GetSkipTrackChance(MobileParty mobileParty)
```

### GetMaxTrackSpottingDistanceForMainParty
```csharp
public abstract float GetMaxTrackSpottingDistanceForMainParty()
```

### CanPartyLeaveTrack
```csharp
public abstract bool CanPartyLeaveTrack(MobileParty mobileParty)
```

### GetTrackDetectionDifficultyForMainParty
```csharp
public abstract float GetTrackDetectionDifficultyForMainParty(Track track, float trackSpottingDistance)
```

### GetSkillFromTrackDetected
```csharp
public abstract float GetSkillFromTrackDetected(Track track)
```

### GetTrackLife
```csharp
public abstract int GetTrackLife(MobileParty mobileParty)
```

### TrackTitle
```csharp
public abstract TextObject TrackTitle(Track track)
```

### GetTrackDescription
```csharp
public abstract IEnumerable<ValueTuple<TextObject, string>> GetTrackDescription(Track track)
```

### GetTrackColor
```csharp
public abstract uint GetTrackColor(Track track)
```

### GetTrackScale
```csharp
public abstract float GetTrackScale(Track track)
```

## Usage Example

```csharp
// Typical usage of MapTrackModel (Model)
Game.Current.ReplaceModel<MapTrackModel>(new MyMapTrackModel());
```

## See Also

- [Complete Class Catalog](../catalog)