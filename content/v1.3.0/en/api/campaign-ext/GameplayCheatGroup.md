---
title: "GameplayCheatGroup"
description: "Auto-generated class reference for GameplayCheatGroup."
---
# GameplayCheatGroup

**Namespace:** SandBox
**Module:** SandBox
**Type:** `public abstract class GameplayCheatGroup : GameplayCheatBase`
**Base:** `GameplayCheatBase`
**File:** `SandBox/GameplayCheatGroup.cs`

## Overview

`GameplayCheatGroup` lives in `SandBox` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `SandBox` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Methods

### GetCheats
`public abstract IEnumerable<GameplayCheatBase> GetCheats()`

**Purpose:** Reads and returns the cheats value held by the this instance.

```csharp
// Obtain an instance of GameplayCheatGroup from the subsystem API first
GameplayCheatGroup gameplayCheatGroup = ...;
var result = gameplayCheatGroup.GetCheats();
```

## Usage Example

```csharp
// Typically obtained from a subsystem API or factory
GameplayCheatGroup instance = ...;
```

## See Also

- [Area Index](../)