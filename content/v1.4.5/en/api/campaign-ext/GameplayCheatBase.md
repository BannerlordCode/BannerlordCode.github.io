---
title: "GameplayCheatBase"
description: "Auto-generated class reference for GameplayCheatBase."
---
# GameplayCheatBase

**Namespace:** SandBox
**Module:** SandBox
**Type:** `public abstract class GameplayCheatBase`
**Base:** none
**File:** `Modules.SandBox/SandBox/Sandbox/GameplayCheatBase.cs`

## Overview

`GameplayCheatBase` lives in `SandBox` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `SandBox` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Methods

### GetName
`public abstract TextObject GetName()`

**Purpose:** Reads and returns the name value held by the this instance.

```csharp
// Obtain an instance of GameplayCheatBase from the subsystem API first
GameplayCheatBase gameplayCheatBase = ...;
var result = gameplayCheatBase.GetName();
```

## Usage Example

```csharp
// Typically obtained from a subsystem API or factory
GameplayCheatBase instance = ...;
```

## See Also

- [Area Index](../)