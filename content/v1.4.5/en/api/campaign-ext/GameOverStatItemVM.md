---
title: "GameOverStatItemVM"
description: "Auto-generated class reference for GameOverStatItemVM."
---
# GameOverStatItemVM

**Namespace:** SandBox.ViewModelCollection.GameOver
**Module:** SandBox.ViewModelCollection
**Type:** `public class GameOverStatItemVM : ViewModel`
**Base:** `ViewModel`
**File:** `Modules.SandBox/SandBox.ViewModelCollection/SandBox.ViewModelCollection.GameOver/GameOverStatItemVM.cs`

## Overview

`GameOverStatItemVM` lives in `SandBox.ViewModelCollection.GameOver` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `SandBox.ViewModelCollection.GameOver` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `DefinitionText` | `public string DefinitionText { get; set; }` |
| `ValueText` | `public string ValueText { get; set; }` |
| `StatTypeAsString` | `public string StatTypeAsString { get; set; }` |

## Key Methods

### RefreshValues
`public override void RefreshValues()`

**Purpose:** **Purpose:** Keeps the display or cache of values in sync with the underlying state.

```csharp
// Obtain an instance of GameOverStatItemVM from the subsystem API first
GameOverStatItemVM gameOverStatItemVM = ...;
gameOverStatItemVM.RefreshValues();
```

## Usage Example

```csharp
// Typically call this after obtaining an instance from the subsystem API
GameOverStatItemVM gameOverStatItemVM = ...;
gameOverStatItemVM.RefreshValues();
```

## See Also

- [Area Index](../)