---
title: "CharacterEquipmentItemVM"
description: "Auto-generated class reference for CharacterEquipmentItemVM."
---
# CharacterEquipmentItemVM

**Namespace:** TaleWorlds.Core.ViewModelCollection
**Module:** TaleWorlds.Core
**Type:** `public class CharacterEquipmentItemVM : ViewModel`
**Base:** `ViewModel`
**File:** `bin/TaleWorlds.Core.ViewModelCollection/TaleWorlds.Core.ViewModelCollection/CharacterEquipmentItemVM.cs`

## Overview

`CharacterEquipmentItemVM` lives in `TaleWorlds.Core.ViewModelCollection` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.Core.ViewModelCollection` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `Type` | `public string Type { get; set; }` |
| `HasItem` | `public bool HasItem { get; set; }` |

## Key Methods

### ExecuteBeginHint
`public virtual void ExecuteBeginHint()`

**Purpose:** Runs the operation or workflow associated with `begin hint`.

```csharp
// Obtain an instance of CharacterEquipmentItemVM from the subsystem API first
CharacterEquipmentItemVM characterEquipmentItemVM = ...;
characterEquipmentItemVM.ExecuteBeginHint();
```

### ExecuteEndHint
`public virtual void ExecuteEndHint()`

**Purpose:** Runs the operation or workflow associated with `end hint`.

```csharp
// Obtain an instance of CharacterEquipmentItemVM from the subsystem API first
CharacterEquipmentItemVM characterEquipmentItemVM = ...;
characterEquipmentItemVM.ExecuteEndHint();
```

## Usage Example

```csharp
// Typically call this after obtaining an instance from the subsystem API
CharacterEquipmentItemVM characterEquipmentItemVM = ...;
characterEquipmentItemVM.ExecuteBeginHint();
```

## See Also

- [Area Index](../)