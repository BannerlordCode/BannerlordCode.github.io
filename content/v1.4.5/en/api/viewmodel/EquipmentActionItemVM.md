---
title: "EquipmentActionItemVM"
description: "Auto-generated class reference for EquipmentActionItemVM."
---
# EquipmentActionItemVM

**Namespace:** TaleWorlds.MountAndBlade.ViewModelCollection.HUD
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class EquipmentActionItemVM : ViewModel`
**Base:** `ViewModel`
**File:** `bin/TaleWorlds.MountAndBlade.ViewModelCollection/TaleWorlds.MountAndBlade.ViewModelCollection.HUD/EquipmentActionItemVM.cs`

## Overview

`EquipmentActionItemVM` lives in `TaleWorlds.MountAndBlade.ViewModelCollection.HUD` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.MountAndBlade.ViewModelCollection.HUD` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `ActionText` | `public string ActionText { get; set; }` |
| `IsWielded` | `public bool IsWielded { get; set; }` |
| `IsSelected` | `public bool IsSelected { get; set; }` |
| `TypeAsString` | `public string TypeAsString { get; set; }` |

## Usage Example

```csharp
// Obtain an instance from the relevant subsystem API
EquipmentActionItemVM instance = ...;
```

## See Also

- [Area Index](../)