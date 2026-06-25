---
title: "MPIntermissionMapItemVM"
description: "Auto-generated class reference for MPIntermissionMapItemVM."
---
# MPIntermissionMapItemVM

**Namespace:** TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection.Intermission
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class MPIntermissionMapItemVM : ViewModel`
**Base:** `ViewModel`
**File:** `Modules.Multiplayer/TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection/TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection.Intermission/MPIntermissionMapItemVM.cs`

## Overview

`MPIntermissionMapItemVM` lives in `TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection.Intermission` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection.Intermission` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `IsSelected` | `public bool IsSelected { get; set; }` |
| `MapID` | `public string MapID { get; set; }` |
| `MapName` | `public string MapName { get; set; }` |
| `Votes` | `public int Votes { get; set; }` |

## Key Methods

### RefreshValues
`public override void RefreshValues()`

**Purpose:** **Purpose:** Keeps the display or cache of values in sync with the underlying state.

```csharp
// Obtain an instance of MPIntermissionMapItemVM from the subsystem API first
MPIntermissionMapItemVM mPIntermissionMapItemVM = ...;
mPIntermissionMapItemVM.RefreshValues();
```

### ExecuteVote
`public void ExecuteVote()`

**Purpose:** **Purpose:** Runs the operation or workflow associated with vote.

```csharp
// Obtain an instance of MPIntermissionMapItemVM from the subsystem API first
MPIntermissionMapItemVM mPIntermissionMapItemVM = ...;
mPIntermissionMapItemVM.ExecuteVote();
```

## Usage Example

```csharp
// Typically call this after obtaining an instance from the subsystem API
MPIntermissionMapItemVM mPIntermissionMapItemVM = ...;
mPIntermissionMapItemVM.RefreshValues();
```

## See Also

- [Area Index](../)