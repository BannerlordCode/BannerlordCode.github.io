---
title: "MissionAgentDamageFeedVM"
description: "Auto-generated class reference for MissionAgentDamageFeedVM."
---
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

**Purpose:** Invoked when the finalize event is raised.

```csharp
// Obtain an instance of MissionAgentDamageFeedVM from the subsystem API first
MissionAgentDamageFeedVM missionAgentDamageFeedVM = ...;
missionAgentDamageFeedVM.OnFinalize();
```

## Usage Example

```csharp
// Typically call this after obtaining an instance from the subsystem API
MissionAgentDamageFeedVM missionAgentDamageFeedVM = ...;
missionAgentDamageFeedVM.OnFinalize();
```

## See Also

- [Area Index](../)