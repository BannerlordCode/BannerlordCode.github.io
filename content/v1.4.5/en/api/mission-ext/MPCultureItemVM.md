---
title: "MPCultureItemVM"
description: "Auto-generated class reference for MPCultureItemVM."
---
# MPCultureItemVM

**Namespace:** TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class MPCultureItemVM : ViewModel`
**Base:** `ViewModel`
**File:** `Modules.Multiplayer/TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection/TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection/MPCultureItemVM.cs`

## Overview

`MPCultureItemVM` lives in `TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `Culture` | `public BasicCultureObject Culture { get; }` |
| `IsSelected` | `public bool IsSelected { get; set; }` |
| `CultureCode` | `public string CultureCode { get; set; }` |
| `Hint` | `public HintViewModel Hint { get; set; }` |

## Key Methods

### RefreshValues
`public override void RefreshValues()`

**Purpose:** Keeps the display or cache of values in sync with the underlying state.

```csharp
// Obtain an instance of MPCultureItemVM from the subsystem API first
MPCultureItemVM mPCultureItemVM = ...;
mPCultureItemVM.RefreshValues();
```

## Usage Example

```csharp
// Typically call this after obtaining an instance from the subsystem API
MPCultureItemVM mPCultureItemVM = ...;
mPCultureItemVM.RefreshValues();
```

## See Also

- [Area Index](../)