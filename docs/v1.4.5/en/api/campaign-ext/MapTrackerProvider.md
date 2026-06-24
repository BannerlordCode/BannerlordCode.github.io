<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `MapTrackerProvider`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.4.5](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# MapTrackerProvider

**Namespace:** SandBox.ViewModelCollection.Map.Tracker
**Module:** SandBox.ViewModelCollection
**Type:** `public class MapTrackerProvider`
**Base:** none
**File:** `Bannerlord.Source/Modules.SandBox/SandBox.ViewModelCollection/SandBox.ViewModelCollection.Map.Tracker/MapTrackerProvider.cs`

## Overview

`MapTrackerProvider` lives in `SandBox.ViewModelCollection.Map.Tracker` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `SandBox.ViewModelCollection.Map.Tracker` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `OnTrackerAddedOrRemoved` | `public event OnTrackerAddedOrRemovedDelegate OnTrackerAddedOrRemoved { get; }` |

## Key Methods

### GetTrackers
`public MapTrackerItemVM GetTrackers()`

**Purpose:** Gets the current value of `trackers`.

### HasTrackerFor
`public bool HasTrackerFor(ITrackableCampaignObject trackable)`

**Purpose:** Checks whether the current object has/contains `tracker for`.

### GetTrackerFor
`public MapTrackerItemVM GetTrackerFor(ITrackableCampaignObject trackable)`

**Purpose:** Gets the current value of `tracker for`.

### AddTracker
`public void AddTracker(MapTrackerItemVM tracker)`

**Purpose:** Adds `tracker` to the current collection or state.

### RemoveTracker
`public void RemoveTracker(MapTrackerItemVM tracker)`

**Purpose:** Removes `tracker` from the current collection or state.

### ClearTrackers
`public void ClearTrackers()`

**Purpose:** Handles logic related to `clear trackers`.

### OnTrackerAddedOrRemovedDelegate
`public delegate void OnTrackerAddedOrRemovedDelegate(MapTrackerItemVM tracker, bool added)`

**Purpose:** Called when the `tracker added or removed delegate` event is raised.

### GetTrackers
`public MapTrackerItemVM GetTrackers()`

**Purpose:** Gets the current value of `trackers`.

## Usage Example

```csharp
var value = new MapTrackerProvider();
value.GetTrackers();
```

## See Also

- [Complete Class Catalog](../catalog)