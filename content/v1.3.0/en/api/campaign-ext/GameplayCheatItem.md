---
title: "GameplayCheatItem"
description: "Auto-generated class reference for GameplayCheatItem."
---
# GameplayCheatItem

**Namespace:** SandBox
**Module:** SandBox
**Type:** `public abstract class GameplayCheatItem : GameplayCheatBase`
**Base:** `GameplayCheatBase`
**File:** `SandBox/GameplayCheatItem.cs`

## Overview

`GameplayCheatItem` lives in `SandBox` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `SandBox` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Methods

### ExecuteCheat
`public abstract void ExecuteCheat()`

**Purpose:** Runs the operation or workflow associated with cheat.

```csharp
// Obtain an instance of GameplayCheatItem from the subsystem API first
GameplayCheatItem gameplayCheatItem = ...;
gameplayCheatItem.ExecuteCheat();
```

## Usage Example

```csharp
// Typically obtained from a subsystem API or factory
GameplayCheatItem instance = ...;
```

## See Also

- [Area Index](../)