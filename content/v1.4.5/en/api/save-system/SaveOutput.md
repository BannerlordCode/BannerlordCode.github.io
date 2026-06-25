---
title: "SaveOutput"
description: "Auto-generated class reference for SaveOutput."
---
# SaveOutput

**Namespace:** TaleWorlds.SaveSystem.Save
**Module:** TaleWorlds.SaveSystem
**Type:** `public class SaveOutput`
**Base:** none
**File:** `bin/TaleWorlds.SaveSystem/TaleWorlds.SaveSystem.Save/SaveOutput.cs`

## Overview

`SaveOutput` lives in `TaleWorlds.SaveSystem.Save` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.SaveSystem.Save` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `Data` | `public GameData Data { get; }` |
| `Result` | `public SaveResult Result { get; }` |
| `Errors` | `public SaveError Errors { get; }` |
| `IsContinuing` | `public bool IsContinuing { get; }` |

## Key Methods

### PrintStatus
`public void PrintStatus()`

**Purpose:** Performs the operation described by this method.

```csharp
// Obtain an instance of SaveOutput from the subsystem API first
SaveOutput saveOutput = ...;
saveOutput.PrintStatus();
```

## Usage Example

```csharp
// Typically call this after obtaining an instance from the subsystem API
SaveOutput saveOutput = ...;
saveOutput.PrintStatus();
```

## See Also

- [Area Index](../)