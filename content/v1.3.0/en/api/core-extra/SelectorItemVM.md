---
title: "SelectorItemVM"
description: "Auto-generated class reference for SelectorItemVM."
---
# SelectorItemVM

**Namespace:** TaleWorlds.Core.ViewModelCollection.Selector
**Module:** TaleWorlds.Core
**Type:** `public class SelectorItemVM : ViewModel`
**Base:** `ViewModel`
**File:** `TaleWorlds.Core.ViewModelCollection/Selector/SelectorItemVM.cs`

## Overview

`SelectorItemVM` lives in `TaleWorlds.Core.ViewModelCollection.Selector` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.Core.ViewModelCollection.Selector` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `StringItem` | `public string StringItem { get; set; }` |
| `CanBeSelected` | `public bool CanBeSelected { get; set; }` |
| `Hint` | `public HintViewModel Hint { get; set; }` |
| `IsSelected` | `public bool IsSelected { get; set; }` |

## Key Methods

### RefreshValues
`public override void RefreshValues()`

**Purpose:** **Purpose:** Keeps the display or cache of values in sync with the underlying state.

```csharp
// Obtain an instance of SelectorItemVM from the subsystem API first
SelectorItemVM selectorItemVM = ...;
selectorItemVM.RefreshValues();
```

## Usage Example

```csharp
// Typically call this after obtaining an instance from the subsystem API
SelectorItemVM selectorItemVM = ...;
selectorItemVM.RefreshValues();
```

## See Also

- [Area Index](../)