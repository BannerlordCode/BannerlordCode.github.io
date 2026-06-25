---
title: "MPKillFeedVM"
description: "Auto-generated class reference for MPKillFeedVM."
---
# MPKillFeedVM

**Namespace:** TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection.KillFeed
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class MPKillFeedVM : ViewModel`
**Base:** `ViewModel`
**File:** `Modules.Multiplayer/TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection/TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection.KillFeed/MPKillFeedVM.cs`

## Overview

`MPKillFeedVM` lives in `TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection.KillFeed` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection.KillFeed` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `GeneralCasualty` | `public MPGeneralKillNotificationVM GeneralCasualty { get; set; }` |
| `PersonalCasualty` | `public MPPersonalKillNotificationVM PersonalCasualty { get; set; }` |

## Key Methods

### OnAgentRemoved
`public void OnAgentRemoved(Agent affectedAgent, Agent affectorAgent, bool isPersonalFeedEnabled)`

**Purpose:** Invoked when the `agent removed` event is raised.

```csharp
// Obtain an instance of MPKillFeedVM from the subsystem API first
MPKillFeedVM mPKillFeedVM = ...;
mPKillFeedVM.OnAgentRemoved(affectedAgent, affectorAgent, false);
```

### OnPersonalDamage
`public void OnPersonalDamage(int damageAmount, bool isFatal, bool isMountDamage, bool isFriendlyDamage, bool isHeadshot, string killedAgentName)`

**Purpose:** Invoked when the `personal damage` event is raised.

```csharp
// Obtain an instance of MPKillFeedVM from the subsystem API first
MPKillFeedVM mPKillFeedVM = ...;
mPKillFeedVM.OnPersonalDamage(0, false, false, false, false, "example");
```

## Usage Example

```csharp
// Typically call this after obtaining an instance from the subsystem API
MPKillFeedVM mPKillFeedVM = ...;
mPKillFeedVM.OnAgentRemoved(affectedAgent, affectorAgent, false);
```

## See Also

- [Area Index](../)