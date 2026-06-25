---
title: "SPPersonalKillNotificationVM"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `SPPersonalKillNotificationVM`
- [← Area / Back to viewmodel](./)
- [↑ API Index](../)
- [🏠 Home v1.4.5](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# SPPersonalKillNotificationVM

**Namespace:** TaleWorlds.MountAndBlade.ViewModelCollection.HUD.KillFeed.Personal
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class SPPersonalKillNotificationVM : ViewModel`
**Base:** `ViewModel`
**File:** `Bannerlord.Source/bin/TaleWorlds.MountAndBlade.ViewModelCollection/TaleWorlds.MountAndBlade.ViewModelCollection.HUD.KillFeed.Personal/SPPersonalKillNotificationVM.cs`

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

**Purpose:** Called when the `personal kill` event is raised.

### OnPersonalHit
`public void OnPersonalHit(int damageAmount, bool isMountDamage, bool isFriendlyFire, string killedAgentName)`

**Purpose:** Called when the `personal hit` event is raised.

### OnPersonalMessage
`public void OnPersonalMessage(string message)`

**Purpose:** Called when the `personal message` event is raised.

## Usage Example

```csharp
var value = new SPPersonalKillNotificationVM();
value.OnPersonalKill(0, false, false, false, "example", false);
```

## See Also

- [Complete Class Catalog](../catalog)