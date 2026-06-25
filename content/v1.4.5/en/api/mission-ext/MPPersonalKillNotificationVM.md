---
title: "MPPersonalKillNotificationVM"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `MPPersonalKillNotificationVM`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.4.5](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# MPPersonalKillNotificationVM

**Namespace:** TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection.KillFeed.Personal
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class MPPersonalKillNotificationVM : ViewModel`
**Base:** `ViewModel`
**File:** `Bannerlord.Source/Modules.Multiplayer/TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection/TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection.KillFeed.Personal/MPPersonalKillNotificationVM.cs`

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

**Purpose:** Called when the `gold change` event is raised.

### OnPersonalHit
`public void OnPersonalHit(int damageAmount, bool isFatal, bool isMountDamage, bool isFriendlyFire, bool isHeadshot, string killedAgentName)`

**Purpose:** Called when the `personal hit` event is raised.

### OnPersonalAssist
`public void OnPersonalAssist(string killedAgentName)`

**Purpose:** Called when the `personal assist` event is raised.

## Usage Example

```csharp
var value = new MPPersonalKillNotificationVM();
value.OnGoldChange(0, goldGainType);
```

## See Also

- [Complete Class Catalog](../catalog)