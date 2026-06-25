---
title: "MPPersonalKillNotificationVM"
description: "Auto-generated class reference for MPPersonalKillNotificationVM."
---
# MPPersonalKillNotificationVM

**Namespace:** TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection.KillFeed.Personal
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class MPPersonalKillNotificationVM : ViewModel`
**Base:** `ViewModel`
**File:** `Modules.Multiplayer/TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection/TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection.KillFeed.Personal/MPPersonalKillNotificationVM.cs`

## Overview

`MPPersonalKillNotificationVM` lives in `TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection.KillFeed.Personal` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection.KillFeed.Personal` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `NotificationList` | `public MBBindingList<MPPersonalKillNotificationItemVM> NotificationList { get; set; }` |

## Key Methods

### OnGoldChange
`public void OnGoldChange(int changeAmount, GoldGainFlags goldGainType)`

**Purpose:** Invoked when the gold change event is raised.

```csharp
// Obtain an instance of MPPersonalKillNotificationVM from the subsystem API first
MPPersonalKillNotificationVM mPPersonalKillNotificationVM = ...;
mPPersonalKillNotificationVM.OnGoldChange(0, goldGainType);
```

### OnPersonalHit
`public void OnPersonalHit(int damageAmount, bool isFatal, bool isMountDamage, bool isFriendlyFire, bool isHeadshot, string killedAgentName)`

**Purpose:** Invoked when the personal hit event is raised.

```csharp
// Obtain an instance of MPPersonalKillNotificationVM from the subsystem API first
MPPersonalKillNotificationVM mPPersonalKillNotificationVM = ...;
mPPersonalKillNotificationVM.OnPersonalHit(0, false, false, false, false, "example");
```

### OnPersonalAssist
`public void OnPersonalAssist(string killedAgentName)`

**Purpose:** Invoked when the personal assist event is raised.

```csharp
// Obtain an instance of MPPersonalKillNotificationVM from the subsystem API first
MPPersonalKillNotificationVM mPPersonalKillNotificationVM = ...;
mPPersonalKillNotificationVM.OnPersonalAssist("example");
```

## Usage Example

```csharp
// Typically call this after obtaining an instance from the subsystem API
MPPersonalKillNotificationVM mPPersonalKillNotificationVM = ...;
mPPersonalKillNotificationVM.OnGoldChange(0, goldGainType);
```

## See Also

- [Area Index](../)