---
title: "MultipleBattleResult"
description: "Auto-generated class reference for MultipleBattleResult."
---
# MultipleBattleResult

**Namespace:** TaleWorlds.MountAndBlade.Diamond
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class MultipleBattleResult`
**Base:** none
**File:** `bin/TaleWorlds.MountAndBlade.Diamond/TaleWorlds.MountAndBlade.Diamond/MultipleBattleResult.cs`

## Overview

`MultipleBattleResult` lives in `TaleWorlds.MountAndBlade.Diamond` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.MountAndBlade.Diamond` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `BattleResults` | `public List<BattleResult> BattleResults { get; set; }` |

## Key Methods

### CreateNewBattleResult
`public void CreateNewBattleResult(string gameType)`

**Purpose:** **Purpose:** Constructs a new new battle result entity and returns it to the caller.

```csharp
// Obtain an instance of MultipleBattleResult from the subsystem API first
MultipleBattleResult multipleBattleResult = ...;
multipleBattleResult.CreateNewBattleResult("example");
```

### GetCurrentBattleResult
`public BattleResult GetCurrentBattleResult()`

**Purpose:** **Purpose:** Reads and returns the current battle result value held by the this instance.

```csharp
// Obtain an instance of MultipleBattleResult from the subsystem API first
MultipleBattleResult multipleBattleResult = ...;
var result = multipleBattleResult.GetCurrentBattleResult();
```

## Usage Example

```csharp
// Typically call this after obtaining an instance from the subsystem API
MultipleBattleResult multipleBattleResult = ...;
multipleBattleResult.CreateNewBattleResult("example");
```

## See Also

- [Area Index](../)