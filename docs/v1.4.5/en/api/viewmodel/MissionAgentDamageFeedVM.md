<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `MissionAgentDamageFeedVM`
- [← Area / Back to viewmodel](./)
- [↑ API Index](../)
- [🏠 Home v1.4.5](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# MissionAgentDamageFeedVM

**Namespace:** TaleWorlds.MountAndBlade.ViewModelCollection.HUD.DamageFeed
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class MissionAgentDamageFeedVM : ViewModel`
**Base:** `ViewModel`
**File:** `Bannerlord.Source/bin/TaleWorlds.MountAndBlade.ViewModelCollection/TaleWorlds.MountAndBlade.ViewModelCollection.HUD.DamageFeed/MissionAgentDamageFeedVM.cs`

## Overview

`MissionAgentDamageFeedVM` lives in `TaleWorlds.MountAndBlade.ViewModelCollection.HUD.DamageFeed` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.MountAndBlade.ViewModelCollection.HUD.DamageFeed` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `FeedList` | `public MBBindingList<MissionAgentDamageFeedItemVM> FeedList { get; set; }` |

## Key Methods

### OnMainAgentHit
`public void OnMainAgentHit(float damage)`

**Purpose:** Called when the `main agent hit` event is raised.

## Usage Example

```csharp
var value = new MissionAgentDamageFeedVM();
value.OnMainAgentHit(0);
```

## See Also

- [Complete Class Catalog](../catalog)