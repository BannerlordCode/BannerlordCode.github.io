---
title: "GenderBasedSelectedValue"
description: "Auto-generated class reference for GenderBasedSelectedValue."
---
# GenderBasedSelectedValue

**Namespace:** TaleWorlds.MountAndBlade.ViewModelCollection.FaceGenerator
**Module:** TaleWorlds.MountAndBlade
**Type:** `public struct GenderBasedSelectedValue`
**Base:** none
**File:** `bin/TaleWorlds.MountAndBlade.ViewModelCollection/TaleWorlds.MountAndBlade.ViewModelCollection.FaceGenerator/FaceGenVM.cs`

## Overview

`GenderBasedSelectedValue` lives in `TaleWorlds.MountAndBlade.ViewModelCollection.FaceGenerator` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.MountAndBlade.ViewModelCollection.FaceGenerator` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Methods

### Reset
`public void Reset()`

**Purpose:** **Purpose:** Returns the this instance to its default or initial condition.

```csharp
// Obtain an instance of GenderBasedSelectedValue from the subsystem API first
GenderBasedSelectedValue genderBasedSelectedValue = ...;
genderBasedSelectedValue.Reset();
```

## Usage Example

```csharp
// Typically call this after obtaining an instance from the subsystem API
GenderBasedSelectedValue genderBasedSelectedValue = ...;
genderBasedSelectedValue.Reset();
```

## See Also

- [Area Index](../)