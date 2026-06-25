---
title: "MapMarkerTrackerItemVM"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `MapMarkerTrackerItemVM`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.4.5](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# MapMarkerTrackerItemVM

**Namespace:** SandBox.ViewModelCollection.Map.Tracker
**Module:** SandBox.ViewModelCollection
**Type:** `public class MapMarkerTrackerItemVM : MapTrackerItemVM<MapMarker>`
**Base:** `MapTrackerItemVM<MapMarker>`
**File:** `Bannerlord.Source/Modules.SandBox/SandBox.ViewModelCollection/SandBox.ViewModelCollection.Map.Tracker/MapMarkerTrackerItemVM.cs`

## Overview

`MapMarkerTrackerItemVM` lives in `SandBox.ViewModelCollection.Map.Tracker` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `SandBox.ViewModelCollection.Map.Tracker` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Usage Example

```csharp
var value = new MapMarkerTrackerItemVM();
```

## See Also

- [Complete Class Catalog](../catalog)