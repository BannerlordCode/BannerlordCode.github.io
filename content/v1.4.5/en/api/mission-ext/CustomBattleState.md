---
title: "CustomBattleState"
description: "Auto-generated class reference for CustomBattleState."
---
# CustomBattleState

**Namespace:** TaleWorlds.MountAndBlade.CustomBattle
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class CustomBattleState : GameState`
**Base:** `GameState`
**File:** `Modules.CustomBattle/TaleWorlds.MountAndBlade.CustomBattle/TaleWorlds.MountAndBlade.CustomBattle/CustomBattleState.cs`

## Overview

`CustomBattleState` lives in `TaleWorlds.MountAndBlade.CustomBattle` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.MountAndBlade.CustomBattle` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Methods

### EnableRecordMission
`public static string EnableRecordMission(List<string> strings)`

**Purpose:** **Purpose:** Executes the EnableRecordMission logic.

```csharp
// Static call; no instance required
CustomBattleState.EnableRecordMission(strings);
```

## Usage Example

```csharp
CustomBattleState.EnableRecordMission(strings);
```

## See Also

- [Area Index](../)