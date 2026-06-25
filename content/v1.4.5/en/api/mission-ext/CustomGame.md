---
title: "CustomGame"
description: "Auto-generated class reference for CustomGame."
---
# CustomGame

**Namespace:** TaleWorlds.MountAndBlade.CustomBattle
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class CustomGame : GameType`
**Base:** `GameType`
**File:** `Modules.CustomBattle/TaleWorlds.MountAndBlade.CustomBattle/TaleWorlds.MountAndBlade.CustomBattle/CustomGame.cs`

## Overview

`CustomGame` lives in `TaleWorlds.MountAndBlade.CustomBattle` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.MountAndBlade.CustomBattle` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `CustomBattleBannerEffects` | `public CustomBattleBannerEffects CustomBattleBannerEffects { get; }` |

## Key Methods

### OnDestroy
`public override void OnDestroy()`

**Purpose:** Invoked when the destroy event is raised.

```csharp
// Obtain an instance of CustomGame from the subsystem API first
CustomGame customGame = ...;
customGame.OnDestroy();
```

### OnStateChanged
`public override void OnStateChanged(GameState oldState)`

**Purpose:** Invoked when the state changed event is raised.

```csharp
// Obtain an instance of CustomGame from the subsystem API first
CustomGame customGame = ...;
customGame.OnStateChanged(oldState);
```

## Usage Example

```csharp
// Typically call this after obtaining an instance from the subsystem API
CustomGame customGame = ...;
customGame.OnDestroy();
```

## See Also

- [Area Index](../)