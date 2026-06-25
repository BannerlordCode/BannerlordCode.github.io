---
title: "MPPerkVM"
description: "Auto-generated class reference for MPPerkVM."
---
# MPPerkVM

**Namespace:** TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection.ClassLoadout
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class MPPerkVM : ViewModel`
**Base:** `ViewModel`
**File:** `Modules.Multiplayer/TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection/TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection.ClassLoadout/MPPerkVM.cs`

## Overview

`MPPerkVM` lives in `TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection.ClassLoadout` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection.ClassLoadout` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `PerkIndex` | `public int PerkIndex { get; }` |
| `IconType` | `public string IconType { get; set; }` |
| `Hint` | `public HintViewModel Hint { get; set; }` |
| `Description` | `public string Description { get; set; }` |
| `Name` | `public string Name { get; set; }` |
| `IsSelectable` | `public bool IsSelectable { get; set; }` |

## Key Methods

### RefreshValues
`public override void RefreshValues()`

**Purpose:** **Purpose:** Keeps the display or cache of values in sync with the underlying state.

```csharp
// Obtain an instance of MPPerkVM from the subsystem API first
MPPerkVM mPPerkVM = ...;
mPPerkVM.RefreshValues();
```

### ExecuteSelectPerk
`public void ExecuteSelectPerk()`

**Purpose:** **Purpose:** Runs the operation or workflow associated with select perk.

```csharp
// Obtain an instance of MPPerkVM from the subsystem API first
MPPerkVM mPPerkVM = ...;
mPPerkVM.ExecuteSelectPerk();
```

## Usage Example

```csharp
// Typically call this after obtaining an instance from the subsystem API
MPPerkVM mPPerkVM = ...;
mPPerkVM.RefreshValues();
```

## See Also

- [Area Index](../)