---
title: "SPKillFeedVM"
description: "Auto-generated class reference for SPKillFeedVM."
---
# SPKillFeedVM

**Namespace:** TaleWorlds.MountAndBlade.ViewModelCollection.HUD.KillFeed
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class SPKillFeedVM : ViewModel`
**Base:** `ViewModel`
**File:** `bin/TaleWorlds.MountAndBlade.ViewModelCollection/TaleWorlds.MountAndBlade.ViewModelCollection.HUD.KillFeed/SPKillFeedVM.cs`

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

**Purpose:** Invoked when the agent removed event is raised.

```csharp
// Obtain an instance of SPKillFeedVM from the subsystem API first
SPKillFeedVM sPKillFeedVM = ...;
sPKillFeedVM.OnAgentRemoved(affectedAgent, affectorAgent, false, false, false);
```

### OnPersonalKill
`public void OnPersonalKill(int damageAmount, bool isMountDamage, bool isFriendlyFire, bool isHeadshot, string killedAgentName, bool isUnconscious)`

**Purpose:** Invoked when the personal kill event is raised.

```csharp
// Obtain an instance of SPKillFeedVM from the subsystem API first
SPKillFeedVM sPKillFeedVM = ...;
sPKillFeedVM.OnPersonalKill(0, false, false, false, "example", false);
```

### OnPersonalDamage
`public void OnPersonalDamage(int totalDamage, bool isVictimAgentMount, bool isFriendlyFire, string victimAgentName)`

**Purpose:** Invoked when the personal damage event is raised.

```csharp
// Obtain an instance of SPKillFeedVM from the subsystem API first
SPKillFeedVM sPKillFeedVM = ...;
sPKillFeedVM.OnPersonalDamage(0, false, false, "example");
```

### OnPersonalMessage
`public void OnPersonalMessage(string message)`

**Purpose:** Invoked when the personal message event is raised.

```csharp
// Obtain an instance of SPKillFeedVM from the subsystem API first
SPKillFeedVM sPKillFeedVM = ...;
sPKillFeedVM.OnPersonalMessage("example");
```

## Usage Example

```csharp
// Typically call this after obtaining an instance from the subsystem API
SPKillFeedVM sPKillFeedVM = ...;
sPKillFeedVM.OnAgentRemoved(affectedAgent, affectorAgent, false, false, false);
```

## See Also

- [Area Index](../)