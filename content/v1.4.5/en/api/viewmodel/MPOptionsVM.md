---
title: "MPOptionsVM"
description: "Auto-generated class reference for MPOptionsVM."
---
# MPOptionsVM

**Namespace:** TaleWorlds.MountAndBlade.ViewModelCollection.GameOptions
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class MPOptionsVM : OptionsVM`
**Base:** `OptionsVM`
**File:** `bin/TaleWorlds.MountAndBlade.ViewModelCollection/TaleWorlds.MountAndBlade.ViewModelCollection.GameOptions/MPOptionsVM.cs`

## Overview

`MPOptionsVM` lives in `TaleWorlds.MountAndBlade.ViewModelCollection.GameOptions` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.MountAndBlade.ViewModelCollection.GameOptions` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `AreHotkeysEnabled` | `public bool AreHotkeysEnabled { get; set; }` |
| `IsEnabled` | `public bool IsEnabled { get; set; }` |
| `ApplyText` | `public string ApplyText { get; set; }` |
| `RevertText` | `public string RevertText { get; set; }` |

## Key Methods

### RefreshValues
`public override void RefreshValues()`

**Purpose:** Keeps the display or cache of `values` in sync with the underlying state.

```csharp
// Obtain an instance of MPOptionsVM from the subsystem API first
MPOptionsVM mPOptionsVM = ...;
mPOptionsVM.RefreshValues();
```

### ExecuteCancel
`public new void ExecuteCancel()`

**Purpose:** Runs the operation or workflow associated with `cancel`.

```csharp
// Obtain an instance of MPOptionsVM from the subsystem API first
MPOptionsVM mPOptionsVM = ...;
mPOptionsVM.ExecuteCancel();
```

### ExecuteApply
`public void ExecuteApply()`

**Purpose:** Runs the operation or workflow associated with `apply`.

```csharp
// Obtain an instance of MPOptionsVM from the subsystem API first
MPOptionsVM mPOptionsVM = ...;
mPOptionsVM.ExecuteApply();
```

### ForceCancel
`public void ForceCancel()`

**Purpose:** Performs the operation described by this method.

```csharp
// Obtain an instance of MPOptionsVM from the subsystem API first
MPOptionsVM mPOptionsVM = ...;
mPOptionsVM.ForceCancel();
```

## Usage Example

```csharp
// Typically call this after obtaining an instance from the subsystem API
MPOptionsVM mPOptionsVM = ...;
mPOptionsVM.RefreshValues();
```

## See Also

- [Area Index](../)