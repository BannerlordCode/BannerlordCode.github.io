---
title: "CustomBattleProvider"
description: "Auto-generated class reference for CustomBattleProvider."
---
# CustomBattleProvider

**Namespace:** TaleWorlds.MountAndBlade.CustomBattle.CustomBattle
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class CustomBattleProvider : ICustomBattleProvider`
**Base:** `ICustomBattleProvider`
**File:** `Modules.CustomBattle/TaleWorlds.MountAndBlade.CustomBattle/TaleWorlds.MountAndBlade.CustomBattle.CustomBattle/CustomBattleProvider.cs`

## Overview

`CustomBattleProvider` lives in `TaleWorlds.MountAndBlade.CustomBattle.CustomBattle` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.MountAndBlade.CustomBattle.CustomBattle` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Methods

### StartCustomBattle
`public void StartCustomBattle()`

**Purpose:** Starts the custom battle flow or state machine.

```csharp
// Obtain an instance of CustomBattleProvider from the subsystem API first
CustomBattleProvider customBattleProvider = ...;
customBattleProvider.StartCustomBattle();
```

### GetName
`public TextObject GetName()`

**Purpose:** Reads and returns the name value held by the this instance.

```csharp
// Obtain an instance of CustomBattleProvider from the subsystem API first
CustomBattleProvider customBattleProvider = ...;
var result = customBattleProvider.GetName();
```

## Usage Example

```csharp
// Typically call this after obtaining an instance from the subsystem API
CustomBattleProvider customBattleProvider = ...;
customBattleProvider.StartCustomBattle();
```

## See Also

- [Area Index](../)