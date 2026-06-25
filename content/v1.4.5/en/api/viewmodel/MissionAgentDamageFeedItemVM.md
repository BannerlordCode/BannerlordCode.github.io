---
title: "MissionAgentDamageFeedItemVM"
description: "Auto-generated class reference for MissionAgentDamageFeedItemVM."
---
# MissionAgentDamageFeedItemVM

**Namespace:** TaleWorlds.MountAndBlade.ViewModelCollection.HUD.DamageFeed
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class MissionAgentDamageFeedItemVM : ViewModel`
**Base:** `ViewModel`
**File:** `bin/TaleWorlds.MountAndBlade.ViewModelCollection/TaleWorlds.MountAndBlade.ViewModelCollection.HUD.DamageFeed/MissionAgentDamageFeedItemVM.cs`

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

**Purpose:** Runs the operation or workflow associated with `remove`.

```csharp
// Obtain an instance of MissionAgentDamageFeedItemVM from the subsystem API first
MissionAgentDamageFeedItemVM missionAgentDamageFeedItemVM = ...;
missionAgentDamageFeedItemVM.ExecuteRemove();
```

## Usage Example

```csharp
// Typically call this after obtaining an instance from the subsystem API
MissionAgentDamageFeedItemVM missionAgentDamageFeedItemVM = ...;
missionAgentDamageFeedItemVM.ExecuteRemove();
```

## See Also

- [Area Index](../)