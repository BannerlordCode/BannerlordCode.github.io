---
title: "MultiplayerGameMode"
description: "Auto-generated class reference for MultiplayerGameMode."
---
# MultiplayerGameMode

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** `public abstract class MultiplayerGameMode`
**Base:** none
**File:** `bin/TaleWorlds.MountAndBlade/TaleWorlds.MountAndBlade/MultiplayerGameMode.cs`

## Overview

`MultiplayerGameMode` lives in `TaleWorlds.MountAndBlade` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.MountAndBlade` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `Name` | `public string Name { get; }` |

## Key Methods

### JoinCustomGame
`public abstract void JoinCustomGame(JoinGameData joinGameData)`

**Purpose:** **Purpose:** Joins several custom game items into a single whole.

```csharp
// Obtain an instance of MultiplayerGameMode from the subsystem API first
MultiplayerGameMode multiplayerGameMode = ...;
multiplayerGameMode.JoinCustomGame(joinGameData);
```

### StartMultiplayerGame
`public abstract void StartMultiplayerGame(string scene)`

**Purpose:** **Purpose:** Starts the multiplayer game flow or state machine.

```csharp
// Obtain an instance of MultiplayerGameMode from the subsystem API first
MultiplayerGameMode multiplayerGameMode = ...;
multiplayerGameMode.StartMultiplayerGame("example");
```

## Usage Example

```csharp
// Typically obtained from a subsystem API or factory
MultiplayerGameMode instance = ...;
```

## See Also

- [Area Index](../)