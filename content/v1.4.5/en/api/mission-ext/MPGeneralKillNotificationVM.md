---
title: "MPGeneralKillNotificationVM"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `MPGeneralKillNotificationVM`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.4.5](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# MPGeneralKillNotificationVM

**Namespace:** TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection.KillFeed.General
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class MPGeneralKillNotificationVM : ViewModel`
**Base:** `ViewModel`
**File:** `Bannerlord.Source/Modules.Multiplayer/TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection/TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection.KillFeed.General/MPGeneralKillNotificationVM.cs`

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

**Purpose:** Called when the `agent removed` event is raised.

## Usage Example

```csharp
var value = new MPGeneralKillNotificationVM();
value.OnAgentRemoved(affectedAgent, affectorAgent, assistedAgent);
```

## See Also

- [Complete Class Catalog](../catalog)