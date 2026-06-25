---
title: "GameOverState"
description: "Auto-generated class reference for GameOverState."
---
# GameOverState

**Namespace:** TaleWorlds.CampaignSystem.GameState
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class GameOverState : TaleWorlds.Core.GameState`
**Base:** `TaleWorlds.Core.GameState`
**File:** `bin/TaleWorlds.CampaignSystem/TaleWorlds.CampaignSystem.GameState/GameOverState.cs`

## Overview

`GameOverState` lives in `TaleWorlds.CampaignSystem.GameState` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.CampaignSystem.GameState` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `Handler` | `public IGameOverStateHandler Handler { get; }` |
| `Reason` | `public GameOverReason Reason { get; }` |

## Key Methods

### CreateForVictory
`public static GameOverState CreateForVictory()`

**Purpose:** Constructs a new `for victory` entity and returns it to the caller.

```csharp
// Static call; no instance required
GameOverState.CreateForVictory();
```

### CreateForRetirement
`public static GameOverState CreateForRetirement()`

**Purpose:** Constructs a new `for retirement` entity and returns it to the caller.

```csharp
// Static call; no instance required
GameOverState.CreateForRetirement();
```

### CreateForClanDestroyed
`public static GameOverState CreateForClanDestroyed()`

**Purpose:** Constructs a new `for clan destroyed` entity and returns it to the caller.

```csharp
// Static call; no instance required
GameOverState.CreateForClanDestroyed();
```

## Usage Example

```csharp
GameOverState.CreateForVictory();
```

## See Also

- [Area Index](../)