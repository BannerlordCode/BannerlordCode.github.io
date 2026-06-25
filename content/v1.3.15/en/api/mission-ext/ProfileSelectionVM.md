---
title: "ProfileSelectionVM"
description: "Auto-generated class reference for ProfileSelectionVM."
---
# ProfileSelectionVM

**Namespace:** TaleWorlds.MountAndBlade.ViewModelCollection.ProfileSelection
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class ProfileSelectionVM : ViewModel`
**Base:** `ViewModel`
**File:** `TaleWorlds.MountAndBlade.ViewModelCollection/ProfileSelection/ProfileSelectionVM.cs`

## Overview

`ProfileSelectionVM` lives in `TaleWorlds.MountAndBlade.ViewModelCollection.ProfileSelection` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.MountAndBlade.ViewModelCollection.ProfileSelection` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `SelectProfileText` | `public string SelectProfileText { get; set; }` |
| `IsPlayEnabled` | `public bool IsPlayEnabled { get; set; }` |
| `PlayText` | `public string PlayText { get; set; }` |
| `SelectProfileKey` | `public InputKeyItemVM SelectProfileKey { get; set; }` |
| `PlayKey` | `public InputKeyItemVM PlayKey { get; set; }` |

## Key Methods

### OnActivate
`public void OnActivate(bool isDirectPlayPossible)`

**Purpose:** Invoked when the activate event is raised.

```csharp
// Obtain an instance of ProfileSelectionVM from the subsystem API first
ProfileSelectionVM profileSelectionVM = ...;
profileSelectionVM.OnActivate(false);
```

### OnFinalize
`public override void OnFinalize()`

**Purpose:** Invoked when the finalize event is raised.

```csharp
// Obtain an instance of ProfileSelectionVM from the subsystem API first
ProfileSelectionVM profileSelectionVM = ...;
profileSelectionVM.OnFinalize();
```

## Usage Example

```csharp
// Typically call this after obtaining an instance from the subsystem API
ProfileSelectionVM profileSelectionVM = ...;
profileSelectionVM.OnActivate(false);
```

## See Also

- [Area Index](../)