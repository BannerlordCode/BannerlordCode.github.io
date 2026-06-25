---
title: "CheatItemBaseVM"
description: "Auto-generated class reference for CheatItemBaseVM."
---
# CheatItemBaseVM

**Namespace:** SandBox.ViewModelCollection.Map.Cheat
**Module:** SandBox.ViewModelCollection
**Type:** `public abstract class CheatItemBaseVM : ViewModel`
**Base:** `ViewModel`
**File:** `SandBox.ViewModelCollection/Map/Cheat/CheatItemBaseVM.cs`

## Overview

`CheatItemBaseVM` lives in `SandBox.ViewModelCollection.Map.Cheat` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `SandBox.ViewModelCollection.Map.Cheat` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `Name` | `public string Name { get; set; }` |

## Key Methods

### ExecuteAction
`public abstract void ExecuteAction()`

**Purpose:** Runs the operation or workflow associated with action.

```csharp
// Obtain an instance of CheatItemBaseVM from the subsystem API first
CheatItemBaseVM cheatItemBaseVM = ...;
cheatItemBaseVM.ExecuteAction();
```

## Usage Example

```csharp
// Typically obtained from a subsystem API or factory
CheatItemBaseVM instance = ...;
```

## See Also

- [Area Index](../)