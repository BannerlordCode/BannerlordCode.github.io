---
title: "CustomBattleScreen"
description: "Auto-generated class reference for CustomBattleScreen."
---
# CustomBattleScreen

**Namespace:** TaleWorlds.MountAndBlade.CustomBattle
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class CustomBattleScreen : ScreenBase, IGameStateListener`
**Base:** `ScreenBase`
**File:** `Modules.CustomBattle/TaleWorlds.MountAndBlade.CustomBattle/TaleWorlds.MountAndBlade.CustomBattle/CustomBattleScreen.cs`

## Overview

`CustomBattleScreen` lives in `TaleWorlds.MountAndBlade.CustomBattle` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.MountAndBlade.CustomBattle` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Methods

### UpdateLayout
`public override void UpdateLayout()`

**Purpose:** Recalculates and stores the latest representation of `layout`.

```csharp
// Obtain an instance of CustomBattleScreen from the subsystem API first
CustomBattleScreen customBattleScreen = ...;
customBattleScreen.UpdateLayout();
```

## Usage Example

```csharp
// Typically call this after obtaining an instance from the subsystem API
CustomBattleScreen customBattleScreen = ...;
customBattleScreen.UpdateLayout();
```

## See Also

- [Area Index](../)