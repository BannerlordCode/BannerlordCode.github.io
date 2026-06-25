---
title: "FaceGenPropertyVM"
description: "Auto-generated class reference for FaceGenPropertyVM."
---
# FaceGenPropertyVM

**Namespace:** TaleWorlds.MountAndBlade.ViewModelCollection.FaceGenerator
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class FaceGenPropertyVM : ViewModel`
**Base:** `ViewModel`
**File:** `bin/TaleWorlds.MountAndBlade.ViewModelCollection/TaleWorlds.MountAndBlade.ViewModelCollection.FaceGenerator/FaceGenPropertyVM.cs`

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

**Purpose:** **Purpose:** Returns the this instance to its default or initial condition.

```csharp
// Obtain an instance of FaceGenPropertyVM from the subsystem API first
FaceGenPropertyVM faceGenPropertyVM = ...;
faceGenPropertyVM.Reset();
```

### Randomize
`public void Randomize()`

**Purpose:** **Purpose:** Executes the Randomize logic.

```csharp
// Obtain an instance of FaceGenPropertyVM from the subsystem API first
FaceGenPropertyVM faceGenPropertyVM = ...;
faceGenPropertyVM.Randomize();
```

### RefreshValues
`public override void RefreshValues()`

**Purpose:** **Purpose:** Keeps the display or cache of values in sync with the underlying state.

```csharp
// Obtain an instance of FaceGenPropertyVM from the subsystem API first
FaceGenPropertyVM faceGenPropertyVM = ...;
faceGenPropertyVM.RefreshValues();
```

### AddCommand
`public void AddCommand()`

**Purpose:** **Purpose:** Adds command to the current collection or state.

```csharp
// Obtain an instance of FaceGenPropertyVM from the subsystem API first
FaceGenPropertyVM faceGenPropertyVM = ...;
faceGenPropertyVM.AddCommand();
```

## Usage Example

```csharp
// Typically call this after obtaining an instance from the subsystem API
FaceGenPropertyVM faceGenPropertyVM = ...;
faceGenPropertyVM.Reset();
```

## See Also

- [Area Index](../)