---
title: "GameBadgeTracker"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `GameBadgeTracker`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.4.5](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# GameBadgeTracker

**Namespace:** TaleWorlds.MountAndBlade.Diamond.MultiplayerBadges
**Module:** TaleWorlds.MountAndBlade
**Type:** `public abstract class GameBadgeTracker`
**Base:** none
**File:** `Bannerlord.Source/bin/TaleWorlds.MountAndBlade.Diamond/TaleWorlds.MountAndBlade.Diamond.MultiplayerBadges/GameBadgeTracker.cs`

## Overview

`GameBadgeTracker` lives in `TaleWorlds.MountAndBlade.Diamond.MultiplayerBadges` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.MountAndBlade.Diamond.MultiplayerBadges` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Methods

### OnPlayerJoin
`public virtual void OnPlayerJoin(PlayerData playerData)`

**Purpose:** Called when the `player join` event is raised.

### OnKill
`public virtual void OnKill(KillData killData)`

**Purpose:** Called when the `kill` event is raised.

### OnStartingNextBattle
`public virtual void OnStartingNextBattle()`

**Purpose:** Called when the `starting next battle` event is raised.

## Usage Example

```csharp
var implementation = new CustomGameBadgeTracker();
```

## See Also

- [Complete Class Catalog](../catalog)