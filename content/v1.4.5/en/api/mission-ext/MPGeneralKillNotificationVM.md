---
title: "MPGeneralKillNotificationVM"
description: "Auto-generated class reference for MPGeneralKillNotificationVM."
---
# MPGeneralKillNotificationVM

**Namespace:** TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection.KillFeed.General
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class MPGeneralKillNotificationVM : ViewModel`
**Base:** `ViewModel`
**File:** `Modules.Multiplayer/TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection/TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection.KillFeed.General/MPGeneralKillNotificationVM.cs`

## Overview

`MPGeneralKillNotificationVM` lives in `TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection.KillFeed.General` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection.KillFeed.General` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `NotificationList` | `public MBBindingList<MPGeneralKillNotificationItemVM> NotificationList { get; set; }` |

## Key Methods

### OnAgentRemoved
`public void OnAgentRemoved(Agent affectedAgent, Agent affectorAgent, Agent assistedAgent)`

**Purpose:** Invoked when the agent removed event is raised.

```csharp
// Obtain an instance of MPGeneralKillNotificationVM from the subsystem API first
MPGeneralKillNotificationVM mPGeneralKillNotificationVM = ...;
mPGeneralKillNotificationVM.OnAgentRemoved(affectedAgent, affectorAgent, assistedAgent);
```

## Usage Example

```csharp
// Typically call this after obtaining an instance from the subsystem API
MPGeneralKillNotificationVM mPGeneralKillNotificationVM = ...;
mPGeneralKillNotificationVM.OnAgentRemoved(affectedAgent, affectorAgent, assistedAgent);
```

## See Also

- [Area Index](../)