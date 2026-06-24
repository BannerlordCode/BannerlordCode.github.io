<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `MissionAgentDamageFeedVM`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.3.15](../../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# MissionAgentDamageFeedVM

**Namespace:** TaleWorlds.MountAndBlade.ViewModelCollection.HUD.DamageFeed
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class MissionAgentDamageFeedVM : ViewModel`
**Base:** `ViewModel`
**File:** `TaleWorlds.MountAndBlade.ViewModelCollection/HUD/DamageFeed/MissionAgentDamageFeedVM.cs`

## Overview

`MissionAgentDamageFeedVM` lives in `TaleWorlds.MountAndBlade.ViewModelCollection.HUD.DamageFeed` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.MountAndBlade.ViewModelCollection.HUD.DamageFeed` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `FeedList` | `public MBBindingList<MissionAgentDamageFeedItemVM> FeedList { get; set; }` |

## Key Methods

### OnFinalize
`public override void OnFinalize()`

**Purpose:** Called when the `finalize` event is raised.

## Usage Example

```csharp
var value = new MissionAgentDamageFeedVM();
value.OnFinalize();
```

## See Also

- [Complete Class Catalog](../catalog)