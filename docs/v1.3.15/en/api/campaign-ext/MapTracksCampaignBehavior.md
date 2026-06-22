<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `MapTracksCampaignBehavior`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# MapTracksCampaignBehavior

**Namespace:** TaleWorlds.CampaignSystem.CampaignBehaviors
**Module:** TaleWorlds.CampaignSystem
**Type:** class
**Area:** Campaign System

## Overview

> This is an auto-generated stub. `MapTracksCampaignBehavior` is a class in the `TaleWorlds.CampaignSystem.CampaignBehaviors` namespace.
> For properties, methods, and developer use-cases, refer to source code or contribute documentation.


## Key Properties

| Name | Signature |
|------|-----------|
| `DetectedTracks` | `public MBReadOnlyList<Track> DetectedTracks { get; }` |
| `Size` | `public int Size { get; }` |


## Key Methods

### RegisterEvents

```csharp
public override void RegisterEvents()
```

### SyncData

```csharp
public override void SyncData(IDataStore dataStore)
```

### IsTrackDropped

```csharp
public bool IsTrackDropped(MobileParty mobileParty)
```

### AddTrack

```csharp
public void AddTrack(MobileParty party, CampaignVec2 trackPosition, Vec2 trackDirection)
```

### AddMapArrow

```csharp
public void AddMapArrow(TextObject pointerName, CampaignVec2 trackPosition, Vec2 trackDirection, float life)
```

### RequestTrack

```csharp
public Track RequestTrack(MobileParty party, CampaignVec2 trackPosition, Vec2 trackDirection)
```

### RequestMapArrow

```csharp
public Track RequestMapArrow(TextObject pointerName, CampaignVec2 trackPosition, Vec2 trackDirection, float life)
```

### ReleaseTrack

```csharp
public void ReleaseTrack(Track track)
```

### ToString

```csharp
public override string ToString()
```

## See Also

- [Complete Class Catalog](../catalog)
- [Area catalog](../catalog-campaign)