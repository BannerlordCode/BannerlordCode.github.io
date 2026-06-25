---
title: "SPKillFeedVM"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `SPKillFeedVM`
- [← Area / Back to viewmodel](./)
- [↑ API Index](../)
- [🏠 Home v1.4.5](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# SPKillFeedVM

**Namespace:** TaleWorlds.MountAndBlade.ViewModelCollection.HUD.KillFeed
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class SPKillFeedVM : ViewModel`
**Base:** `ViewModel`
**File:** `Bannerlord.Source/bin/TaleWorlds.MountAndBlade.ViewModelCollection/TaleWorlds.MountAndBlade.ViewModelCollection.HUD.KillFeed/SPKillFeedVM.cs`

## Overview

`SPKillFeedVM` lives in `TaleWorlds.MountAndBlade.ViewModelCollection.HUD.KillFeed` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.MountAndBlade.ViewModelCollection.HUD.KillFeed` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `GeneralCasualty` | `public SPGeneralKillNotificationVM GeneralCasualty { get; set; }` |
| `PersonalFeed` | `public SPPersonalKillNotificationVM PersonalFeed { get; set; }` |

## Key Methods

### OnAgentRemoved
`public void OnAgentRemoved(Agent affectedAgent, Agent affectorAgent, bool isHeadshot, bool isSuicide, bool isDrowning)`

**Purpose:** Called when the `agent removed` event is raised.

### OnPersonalKill
`public void OnPersonalKill(int damageAmount, bool isMountDamage, bool isFriendlyFire, bool isHeadshot, string killedAgentName, bool isUnconscious)`

**Purpose:** Called when the `personal kill` event is raised.

### OnPersonalDamage
`public void OnPersonalDamage(int totalDamage, bool isVictimAgentMount, bool isFriendlyFire, string victimAgentName)`

**Purpose:** Called when the `personal damage` event is raised.

### OnPersonalMessage
`public void OnPersonalMessage(string message)`

**Purpose:** Called when the `personal message` event is raised.

## Usage Example

```csharp
var value = new SPKillFeedVM();
value.OnAgentRemoved(affectedAgent, affectorAgent, false, false, false);
```

## See Also

- [Complete Class Catalog](../catalog)