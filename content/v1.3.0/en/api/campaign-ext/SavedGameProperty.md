---
title: "SavedGameProperty"
description: "Auto-generated class reference for SavedGameProperty."
---
# SavedGameProperty

**Namespace:** SandBox.ViewModelCollection.SaveLoad
**Module:** SandBox.ViewModelCollection
**Type:** `public class SavedGameProperty`
**Base:** none
**File:** `SandBox.ViewModelCollection/SaveLoad/SavedGamePropertyVM.cs`

## Overview

`SavedGameProperty` lives in `SandBox.ViewModelCollection.SaveLoad` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `SandBox.ViewModelCollection.SaveLoad` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `Hint` | `public HintViewModel Hint { get; set; }` |
| `PropertyType` | `public string PropertyType { get; set; }` |
| `Value` | `public string Value { get; set; }` |

## Key Methods

### RefreshValues
`public override void RefreshValues()`

**Purpose:** Keeps the display or cache of values in sync with the underlying state.

```csharp
// Obtain an instance of SavedGameProperty from the subsystem API first
SavedGameProperty savedGameProperty = ...;
savedGameProperty.RefreshValues();
```

## Usage Example

```csharp
// Typically call this after obtaining an instance from the subsystem API
SavedGameProperty savedGameProperty = ...;
savedGameProperty.RefreshValues();
```

## See Also

- [Area Index](../)