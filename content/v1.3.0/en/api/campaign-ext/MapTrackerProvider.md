---
title: "MapTrackerProvider"
description: "Auto-generated class reference for MapTrackerProvider."
---
# MapTrackerProvider

**Namespace:** SandBox.ViewModelCollection.Map.Tracker
**Module:** SandBox.ViewModelCollection
**Type:** `public class MapTrackerProvider`
**Base:** none
**File:** `SandBox.ViewModelCollection/Map/Tracker/MapTrackerProvider.cs`

## Overview

`MapTrackerProvider` lives in `SandBox.ViewModelCollection.Map.Tracker` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `SandBox.ViewModelCollection.Map.Tracker` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `OnTrackerAddedOrRemoved` | `public event MapTrackerProvider.OnTrackerAddedOrRemovedDelegate OnTrackerAddedOrRemoved { get; }` |

## Key Methods

### GetTrackers
`public MapTrackerItemVM GetTrackers()`

**Purpose:** Reads and returns the trackers value held by the this instance.

```csharp
// Obtain an instance of MapTrackerProvider from the subsystem API first
MapTrackerProvider mapTrackerProvider = ...;
var result = mapTrackerProvider.GetTrackers();
```

### GetTrackers
`public MapTrackerItemVM GetTrackers()`

**Purpose:** Reads and returns the trackers value held by the this instance.

```csharp
// Obtain an instance of MapTrackerProvider from the subsystem API first
MapTrackerProvider mapTrackerProvider = ...;
var result = mapTrackerProvider.GetTrackers();
```

### HasTrackerFor
`public bool HasTrackerFor(ITrackableCampaignObject trackable)`

**Purpose:** Determines whether the this instance already holds tracker for.

```csharp
// Obtain an instance of MapTrackerProvider from the subsystem API first
MapTrackerProvider mapTrackerProvider = ...;
var result = mapTrackerProvider.HasTrackerFor(trackable);
```

### GetTrackerFor
`public MapTrackerItemVM GetTrackerFor(ITrackableCampaignObject trackable)`

**Purpose:** Reads and returns the tracker for value held by the this instance.

```csharp
// Obtain an instance of MapTrackerProvider from the subsystem API first
MapTrackerProvider mapTrackerProvider = ...;
var result = mapTrackerProvider.GetTrackerFor(trackable);
```

### AddTracker
`public void AddTracker(MapTrackerItemVM tracker)`

**Purpose:** Adds tracker to the current collection or state.

```csharp
// Obtain an instance of MapTrackerProvider from the subsystem API first
MapTrackerProvider mapTrackerProvider = ...;
mapTrackerProvider.AddTracker(tracker);
```

### RemoveTracker
`public void RemoveTracker(MapTrackerItemVM tracker)`

**Purpose:** Removes tracker from the current collection or state.

```csharp
// Obtain an instance of MapTrackerProvider from the subsystem API first
MapTrackerProvider mapTrackerProvider = ...;
mapTrackerProvider.RemoveTracker(tracker);
```

### ClearTrackers
`public void ClearTrackers()`

**Purpose:** Removes all trackers from the this instance.

```csharp
// Obtain an instance of MapTrackerProvider from the subsystem API first
MapTrackerProvider mapTrackerProvider = ...;
mapTrackerProvider.ClearTrackers();
```

### OnTrackerAddedOrRemovedDelegate
`public delegate void OnTrackerAddedOrRemovedDelegate(MapTrackerItemVM tracker, bool added)`

**Purpose:** Invoked when the tracker added or removed delegate event is raised.

```csharp
// Obtain an instance of MapTrackerProvider from the subsystem API first
MapTrackerProvider mapTrackerProvider = ...;
mapTrackerProvider.OnTrackerAddedOrRemovedDelegate(tracker, false);
```

## Usage Example

```csharp
// Typically call this after obtaining an instance from the subsystem API
MapTrackerProvider mapTrackerProvider = ...;
mapTrackerProvider.GetTrackers();
```

## See Also

- [Area Index](../)