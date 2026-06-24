<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `MapTrackerCollectionVM`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.4.5](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# MapTrackerCollectionVM

**Namespace:** SandBox.ViewModelCollection.Map.Tracker
**Module:** SandBox.ViewModelCollection
**Type:** `public class MapTrackerCollectionVM : ViewModel`
**Base:** `ViewModel`
**File:** `Bannerlord.Source/Modules.SandBox/SandBox.ViewModelCollection/SandBox.ViewModelCollection.Map.Tracker/MapTrackerCollectionVM.cs`

## Overview

`MapTrackerCollectionVM` lives in `SandBox.ViewModelCollection.Map.Tracker` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `SandBox.ViewModelCollection.Map.Tracker` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `Trackers` | `public MBBindingList<MapTrackerItemVM> Trackers { get; set; }` |

## Key Methods

### Tick
`public void Tick(float dt)`

**Purpose:** Handles logic related to `tick`.

### OnFinalize
`public override void OnFinalize()`

**Purpose:** Called when the `finalize` event is raised.

### UpdateProperties
`public void UpdateProperties()`

**Purpose:** Updates the state or data of `properties`.

## Usage Example

```csharp
var value = new MapTrackerCollectionVM();
value.Tick(0);
```

## See Also

- [Complete Class Catalog](../catalog)