<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `MapTrackerItemVM`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.3.0](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# MapTrackerItemVM

**Namespace:** TaleWorlds.CampaignSystem.ViewModelCollection.Map.Tracker
**Module:** TaleWorlds.CampaignSystem
**Type:** `public abstract class MapTrackerItemVM<T> : MapTrackerItemVM where T : ITrackableCampaignObject`
**Base:** `MapTrackerItemVM where T : ITrackableCampaignObject`
**File:** `SandBox.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/Map/Tracker/MapTrackerItemVM.cs`

## Overview

`MapTrackerItemVM` lives in `TaleWorlds.CampaignSystem.ViewModelCollection.Map.Tracker` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.CampaignSystem.ViewModelCollection.Map.Tracker` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `TrackedObject` | `public new T TrackedObject { get; }` |

## Usage Example

```csharp
var implementation = new CustomMapTrackerItemVM();
```

## See Also

- [Complete Class Catalog](../catalog)