---
title: "MapTracksCampaignBehavior"
description: "Auto-generated class reference for MapTracksCampaignBehavior."
---
# MapTracksCampaignBehavior

**Namespace:** TaleWorlds.CampaignSystem.CampaignBehaviors
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class MapTracksCampaignBehavior : CampaignBehaviorBase, IMapTracksCampaignBehavior, ICampaignBehavior`
**Base:** `CampaignBehaviorBase`
**File:** `TaleWorlds.CampaignSystem/CampaignBehaviors/MapTracksCampaignBehavior.cs`

## Overview

`MapTracksCampaignBehavior` lives in `TaleWorlds.CampaignSystem.CampaignBehaviors` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.CampaignSystem.CampaignBehaviors` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `DetectedTracks` | `public MBReadOnlyList<Track> DetectedTracks { get; }` |
| `Size` | `public int Size { get; }` |

## Key Methods

### RegisterEvents
`public override void RegisterEvents()`

**Purpose:** **Purpose:** Registers events with the current system so it can later be observed or dispatched.

```csharp
// Obtain an instance of MapTracksCampaignBehavior from the subsystem API first
MapTracksCampaignBehavior mapTracksCampaignBehavior = ...;
mapTracksCampaignBehavior.RegisterEvents();
```

### SyncData
`public override void SyncData(IDataStore dataStore)`

**Purpose:** **Purpose:** Synchronizes data across the relevant contexts or systems.

```csharp
// Obtain an instance of MapTracksCampaignBehavior from the subsystem API first
MapTracksCampaignBehavior mapTracksCampaignBehavior = ...;
mapTracksCampaignBehavior.SyncData(dataStore);
```

### IsTrackDropped
`public bool IsTrackDropped(MobileParty mobileParty)`

**Purpose:** **Purpose:** Determines whether the this instance is in the track dropped state or condition.

```csharp
// Obtain an instance of MapTracksCampaignBehavior from the subsystem API first
MapTracksCampaignBehavior mapTracksCampaignBehavior = ...;
var result = mapTracksCampaignBehavior.IsTrackDropped(mobileParty);
```

### AddTrack
`public void AddTrack(MobileParty party, CampaignVec2 trackPosition, Vec2 trackDirection)`

**Purpose:** **Purpose:** Adds track to the current collection or state.

```csharp
// Obtain an instance of MapTracksCampaignBehavior from the subsystem API first
MapTracksCampaignBehavior mapTracksCampaignBehavior = ...;
mapTracksCampaignBehavior.AddTrack(party, trackPosition, trackDirection);
```

### AddMapArrow
`public void AddMapArrow(TextObject pointerName, CampaignVec2 trackPosition, Vec2 trackDirection, float life)`

**Purpose:** **Purpose:** Adds map arrow to the current collection or state.

```csharp
// Obtain an instance of MapTracksCampaignBehavior from the subsystem API first
MapTracksCampaignBehavior mapTracksCampaignBehavior = ...;
mapTracksCampaignBehavior.AddMapArrow(pointerName, trackPosition, trackDirection, 0);
```

### RequestTrack
`public Track RequestTrack(MobileParty party, CampaignVec2 trackPosition, Vec2 trackDirection)`

**Purpose:** **Purpose:** Executes the RequestTrack logic.

```csharp
// Obtain an instance of MapTracksCampaignBehavior from the subsystem API first
MapTracksCampaignBehavior mapTracksCampaignBehavior = ...;
var result = mapTracksCampaignBehavior.RequestTrack(party, trackPosition, trackDirection);
```

### RequestMapArrow
`public Track RequestMapArrow(TextObject pointerName, CampaignVec2 trackPosition, Vec2 trackDirection, float life)`

**Purpose:** **Purpose:** Executes the RequestMapArrow logic.

```csharp
// Obtain an instance of MapTracksCampaignBehavior from the subsystem API first
MapTracksCampaignBehavior mapTracksCampaignBehavior = ...;
var result = mapTracksCampaignBehavior.RequestMapArrow(pointerName, trackPosition, trackDirection, 0);
```

### ReleaseTrack
`public void ReleaseTrack(Track track)`

**Purpose:** **Purpose:** Executes the ReleaseTrack logic.

```csharp
// Obtain an instance of MapTracksCampaignBehavior from the subsystem API first
MapTracksCampaignBehavior mapTracksCampaignBehavior = ...;
mapTracksCampaignBehavior.ReleaseTrack(track);
```

### ToString
`public override string ToString()`

**Purpose:** **Purpose:** Returns a human-readable string representation of the this instance.

```csharp
// Obtain an instance of MapTracksCampaignBehavior from the subsystem API first
MapTracksCampaignBehavior mapTracksCampaignBehavior = ...;
var result = mapTracksCampaignBehavior.ToString();
```

## Usage Example

```csharp
// Typically call this after obtaining an instance from the subsystem API
MapTracksCampaignBehavior mapTracksCampaignBehavior = ...;
mapTracksCampaignBehavior.RegisterEvents();
```

## See Also

- [Area Index](../)