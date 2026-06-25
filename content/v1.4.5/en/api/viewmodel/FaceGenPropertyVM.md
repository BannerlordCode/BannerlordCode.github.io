---
title: "FaceGenPropertyVM"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `FaceGenPropertyVM`
- [← Area / Back to viewmodel](./)
- [↑ API Index](../)
- [🏠 Home v1.4.5](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# FaceGenPropertyVM

**Namespace:** TaleWorlds.MountAndBlade.ViewModelCollection.FaceGenerator
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class FaceGenPropertyVM : ViewModel`
**Base:** `ViewModel`
**File:** `Bannerlord.Source/bin/TaleWorlds.MountAndBlade.ViewModelCollection/TaleWorlds.MountAndBlade.ViewModelCollection.FaceGenerator/FaceGenPropertyVM.cs`

## Overview

`FaceGenPropertyVM` lives in `TaleWorlds.MountAndBlade.ViewModelCollection.FaceGenerator` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.MountAndBlade.ViewModelCollection.FaceGenerator` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `KeyTimePoint` | `public int KeyTimePoint { get; set; }` |
| `Min` | `public float Min { get; set; }` |
| `TabID` | `public int TabID { get; set; }` |
| `Max` | `public float Max { get; set; }` |
| `Value` | `public float Value { get; set; }` |
| `Name` | `public string Name { get; set; }` |
| `IsEnabled` | `public bool IsEnabled { get; set; }` |
| `IsDiscrete` | `public bool IsDiscrete { get; set; }` |

## Key Methods

### Reset
`public void Reset()`

**Purpose:** Resets `reset` to its initial state.

### Randomize
`public void Randomize()`

**Purpose:** Handles logic related to `randomize`.

### RefreshValues
`public override void RefreshValues()`

**Purpose:** Refreshes the display or cache of `values`.

### AddCommand
`public void AddCommand()`

**Purpose:** Adds `command` to the current collection or state.

## Usage Example

```csharp
var value = new FaceGenPropertyVM();
value.Reset();
```

## See Also

- [Complete Class Catalog](../catalog)