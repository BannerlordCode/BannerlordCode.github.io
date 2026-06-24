<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `MissionAgentDamageFeedItemVM`
- [← Area / Back to viewmodel](./)
- [↑ API Index](../)
- [🏠 Home v1.4.5](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# MissionAgentDamageFeedItemVM

**Namespace:** TaleWorlds.MountAndBlade.ViewModelCollection.HUD.DamageFeed
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class MissionAgentDamageFeedItemVM : ViewModel`
**Base:** `ViewModel`
**File:** `Bannerlord.Source/bin/TaleWorlds.MountAndBlade.ViewModelCollection/TaleWorlds.MountAndBlade.ViewModelCollection.HUD.DamageFeed/MissionAgentDamageFeedItemVM.cs`

## Overview

`MissionAgentDamageFeedItemVM` lives in `TaleWorlds.MountAndBlade.ViewModelCollection.HUD.DamageFeed` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.MountAndBlade.ViewModelCollection.HUD.DamageFeed` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `FeedText` | `public string FeedText { get; set; }` |

## Key Methods

### ExecuteRemove
`public void ExecuteRemove()`

**Purpose:** Executes the `remove` operation or workflow.

## Usage Example

```csharp
var value = new MissionAgentDamageFeedItemVM();
value.ExecuteRemove();
```

## See Also

- [Complete Class Catalog](../catalog)