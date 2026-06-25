---
title: "SPGeneralKillNotificationVM"
description: "Auto-generated class reference for SPGeneralKillNotificationVM."
---
# SPGeneralKillNotificationVM

**Namespace:** TaleWorlds.MountAndBlade.ViewModelCollection.HUD.KillFeed.General
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class SPGeneralKillNotificationVM : ViewModel`
**Base:** `ViewModel`
**File:** `TaleWorlds.MountAndBlade.ViewModelCollection/HUD/KillFeed/General/SPGeneralKillNotificationVM.cs`

## Overview

`SPGeneralKillNotificationVM` lives in `TaleWorlds.MountAndBlade.ViewModelCollection.HUD.KillFeed.General` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.MountAndBlade.ViewModelCollection.HUD.KillFeed.General` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `NotificationList` | `public MBBindingList<SPGeneralKillNotificationItemVM> NotificationList { get; set; }` |

## Key Methods

### OnAgentRemoved
`public void OnAgentRemoved(Agent affectedAgent, Agent affectorAgent, bool isHeadshot, bool isSuicide, bool isDrowning)`

**Purpose:** Invoked when the `agent removed` event is raised.

```csharp
// Obtain an instance of SPGeneralKillNotificationVM from the subsystem API first
SPGeneralKillNotificationVM sPGeneralKillNotificationVM = ...;
sPGeneralKillNotificationVM.OnAgentRemoved(affectedAgent, affectorAgent, false, false, false);
```

## Usage Example

```csharp
// Typically call this after obtaining an instance from the subsystem API
SPGeneralKillNotificationVM sPGeneralKillNotificationVM = ...;
sPGeneralKillNotificationVM.OnAgentRemoved(affectedAgent, affectorAgent, false, false, false);
```

## See Also

- [Area Index](../)