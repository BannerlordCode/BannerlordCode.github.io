---
title: "SavedGameModuleInfoVM"
description: "Auto-generated class reference for SavedGameModuleInfoVM."
---
# SavedGameModuleInfoVM

**Namespace:** SandBox.ViewModelCollection.SaveLoad
**Module:** SandBox.ViewModelCollection
**Type:** `public class SavedGameModuleInfoVM : ViewModel`
**Base:** `ViewModel`
**File:** `Modules.SandBox/SandBox.ViewModelCollection/SandBox.ViewModelCollection.SaveLoad/SavedGameModuleInfoVM.cs`

## Overview

`SavedGameModuleInfoVM` lives in `SandBox.ViewModelCollection.SaveLoad` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `SandBox.ViewModelCollection.SaveLoad` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `Definition` | `public string Definition { get; set; }` |
| `Seperator` | `public string Seperator { get; set; }` |
| `Value` | `public string Value { get; set; }` |

## Usage Example

```csharp
// Obtain an instance from the relevant subsystem API
SavedGameModuleInfoVM instance = ...;
```

## See Also

- [Area Index](../)