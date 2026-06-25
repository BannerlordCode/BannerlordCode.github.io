---
title: "SPPersonalKillNotificationVM"
description: "Auto-generated class reference for SPPersonalKillNotificationVM."
---
# SPPersonalKillNotificationVM

**Namespace:** TaleWorlds.MountAndBlade.ViewModelCollection.HUD.KillFeed.Personal
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class SPPersonalKillNotificationVM : ViewModel`
**Base:** `ViewModel`
**File:** `TaleWorlds.MountAndBlade.ViewModelCollection/HUD/KillFeed/Personal/SPPersonalKillNotificationVM.cs`

## Overview

`SPPersonalKillNotificationVM` lives in `TaleWorlds.MountAndBlade.ViewModelCollection.HUD.KillFeed.Personal` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.MountAndBlade.ViewModelCollection.HUD.KillFeed.Personal` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `NotificationList` | `public MBBindingList<SPPersonalKillNotificationItemVM> NotificationList { get; set; }` |

## Key Methods

### OnPersonalKill
`public void OnPersonalKill(int damageAmount, bool isMountDamage, bool isFriendlyFire, bool isHeadshot, string killedAgentName, bool isUnconscious)`

**Purpose:** Invoked when the `personal kill` event is raised.

```csharp
// Obtain an instance of SPPersonalKillNotificationVM from the subsystem API first
SPPersonalKillNotificationVM sPPersonalKillNotificationVM = ...;
sPPersonalKillNotificationVM.OnPersonalKill(0, false, false, false, "example", false);
```

### OnPersonalHit
`public void OnPersonalHit(int damageAmount, bool isMountDamage, bool isFriendlyFire, string killedAgentName)`

**Purpose:** Invoked when the `personal hit` event is raised.

```csharp
// Obtain an instance of SPPersonalKillNotificationVM from the subsystem API first
SPPersonalKillNotificationVM sPPersonalKillNotificationVM = ...;
sPPersonalKillNotificationVM.OnPersonalHit(0, false, false, "example");
```

### OnPersonalMessage
`public void OnPersonalMessage(string message)`

**Purpose:** Invoked when the `personal message` event is raised.

```csharp
// Obtain an instance of SPPersonalKillNotificationVM from the subsystem API first
SPPersonalKillNotificationVM sPPersonalKillNotificationVM = ...;
sPPersonalKillNotificationVM.OnPersonalMessage("example");
```

## Usage Example

```csharp
// Typically call this after obtaining an instance from the subsystem API
SPPersonalKillNotificationVM sPPersonalKillNotificationVM = ...;
sPPersonalKillNotificationVM.OnPersonalKill(0, false, false, false, "example", false);
```

## See Also

- [Area Index](../)