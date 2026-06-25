---
title: "BadgeOwnerKillTracker"
description: "Auto-generated class reference for BadgeOwnerKillTracker."
---
# BadgeOwnerKillTracker

**Namespace:** TaleWorlds.MountAndBlade.Diamond.MultiplayerBadges
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class BadgeOwnerKillTracker : GameBadgeTracker`
**Base:** `GameBadgeTracker`
**File:** `bin/TaleWorlds.MountAndBlade.Diamond/TaleWorlds.MountAndBlade.Diamond.MultiplayerBadges/BadgeOwnerKillTracker.cs`

## Overview

`BadgeOwnerKillTracker` lives in `TaleWorlds.MountAndBlade.Diamond.MultiplayerBadges` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.MountAndBlade.Diamond.MultiplayerBadges` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Methods

### OnPlayerJoin
`public override void OnPlayerJoin(PlayerData playerData)`

**Purpose:** **Purpose:** Invoked when the player join event is raised.

```csharp
// Obtain an instance of BadgeOwnerKillTracker from the subsystem API first
BadgeOwnerKillTracker badgeOwnerKillTracker = ...;
badgeOwnerKillTracker.OnPlayerJoin(playerData);
```

### OnKill
`public override void OnKill(KillData killData)`

**Purpose:** **Purpose:** Invoked when the kill event is raised.

```csharp
// Obtain an instance of BadgeOwnerKillTracker from the subsystem API first
BadgeOwnerKillTracker badgeOwnerKillTracker = ...;
badgeOwnerKillTracker.OnKill(killData);
```

## Usage Example

```csharp
// Typically call this after obtaining an instance from the subsystem API
BadgeOwnerKillTracker badgeOwnerKillTracker = ...;
badgeOwnerKillTracker.OnPlayerJoin(playerData);
```

## See Also

- [Area Index](../)