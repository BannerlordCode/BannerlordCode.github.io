---
title: "ShallowItemPropertyVM"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `ShallowItemPropertyVM`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.4.5](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# ShallowItemPropertyVM

**Namespace:** TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection.ClassLoadout
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class ShallowItemPropertyVM : ViewModel`
**Base:** `ViewModel`
**File:** `Bannerlord.Source/Modules.Multiplayer/TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection/TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection.ClassLoadout/ShallowItemPropertyVM.cs`

## Overview

`ShallowItemPropertyVM` lives in `TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection.ClassLoadout` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection.ClassLoadout` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `Value` | `public int Value { get; set; }` |
| `NameText` | `public string NameText { get; set; }` |
| `Permille` | `public int Permille { get; set; }` |

## Key Methods

### RefreshValues
`public override void RefreshValues()`

**Purpose:** Refreshes the display or cache of `values`.

## Usage Example

```csharp
var value = new ShallowItemPropertyVM();
value.RefreshValues();
```

## See Also

- [Complete Class Catalog](../catalog)