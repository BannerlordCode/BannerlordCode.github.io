---
title: "GameBadgeTracker"
description: "Auto-generated class reference for GameBadgeTracker."
---
# GameBadgeTracker

**Namespace:** TaleWorlds.MountAndBlade.Diamond.MultiplayerBadges
**Module:** TaleWorlds.MountAndBlade
**Type:** `public abstract class GameBadgeTracker`
**Base:** none
**File:** `TaleWorlds.MountAndBlade.Diamond/MultiplayerBadges/GameBadgeTracker.cs`

## Overview

`GameBadgeTracker` lives in `TaleWorlds.MountAndBlade.Diamond.MultiplayerBadges` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.MountAndBlade.Diamond.MultiplayerBadges` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Methods

### OnPlayerJoin
`public virtual void OnPlayerJoin(PlayerData playerData)`

**Purpose:** **Purpose:** Invoked when the player join event is raised.

```csharp
// Obtain an instance of GameBadgeTracker from the subsystem API first
GameBadgeTracker gameBadgeTracker = ...;
gameBadgeTracker.OnPlayerJoin(playerData);
```

### OnKill
`public virtual void OnKill(KillData killData)`

**Purpose:** **Purpose:** Invoked when the kill event is raised.

```csharp
// Obtain an instance of GameBadgeTracker from the subsystem API first
GameBadgeTracker gameBadgeTracker = ...;
gameBadgeTracker.OnKill(killData);
```

### OnStartingNextBattle
`public virtual void OnStartingNextBattle()`

**Purpose:** **Purpose:** Invoked when the starting next battle event is raised.

```csharp
// Obtain an instance of GameBadgeTracker from the subsystem API first
GameBadgeTracker gameBadgeTracker = ...;
gameBadgeTracker.OnStartingNextBattle();
```

## Usage Example

```csharp
// Typically obtained from a subsystem API or factory
GameBadgeTracker instance = ...;
```

## See Also

- [Area Index](../)