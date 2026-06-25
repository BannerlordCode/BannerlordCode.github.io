---
title: "BasicGameStarter"
description: "Auto-generated class reference for BasicGameStarter."
---
# BasicGameStarter

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class BasicGameStarter : IGameStarter`
**Base:** `IGameStarter`
**File:** `bin/TaleWorlds.MountAndBlade/TaleWorlds.MountAndBlade/BasicGameStarter.cs`

## Overview

`BasicGameStarter` lives in `TaleWorlds.MountAndBlade` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.MountAndBlade` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Methods

### AddModel
`public void AddModel(GameModel gameModel)`

**Purpose:** **Purpose:** Adds model to the current collection or state.

```csharp
// Obtain an instance of BasicGameStarter from the subsystem API first
BasicGameStarter basicGameStarter = ...;
basicGameStarter.AddModel(gameModel);
```

## Usage Example

```csharp
// Typically call this after obtaining an instance from the subsystem API
BasicGameStarter basicGameStarter = ...;
basicGameStarter.AddModel(gameModel);
```

## See Also

- [Area Index](../)