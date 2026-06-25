---
title: "PlayerGameState"
description: "Auto-generated class reference for PlayerGameState."
---
# PlayerGameState

**Namespace:** TaleWorlds.Core
**Module:** TaleWorlds.Core
**Type:** `public abstract class PlayerGameState : GameState`
**Base:** `GameState`
**File:** `TaleWorlds.Core/PlayerGameState.cs`

## Overview

`PlayerGameState` lives in `TaleWorlds.Core` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.Core` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `Peer` | `public VirtualPlayer Peer { get; }` |

## Usage Example

```csharp
// Typically obtained from a subsystem API or factory
PlayerGameState instance = ...;
```

## See Also

- [Area Index](../)