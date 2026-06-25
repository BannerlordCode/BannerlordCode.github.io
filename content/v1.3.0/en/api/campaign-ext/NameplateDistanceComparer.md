---
title: "NameplateDistanceComparer"
description: "Auto-generated class reference for NameplateDistanceComparer."
---
# NameplateDistanceComparer

**Namespace:** SandBox.ViewModelCollection.Nameplate
**Module:** SandBox.ViewModelCollection
**Type:** `public class NameplateDistanceComparer : IComparer<PartyNameplateVM>`
**Base:** `IComparer<PartyNameplateVM>`
**File:** `SandBox.ViewModelCollection/Nameplate/PartyNameplatesVM.cs`

## Overview

`NameplateDistanceComparer` lives in `SandBox.ViewModelCollection.Nameplate` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `SandBox.ViewModelCollection.Nameplate` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Methods

### Compare
`public int Compare(PartyNameplateVM x, PartyNameplateVM y)`

**Purpose:** Compares the this instance with another instance for ordering.

```csharp
// Obtain an instance of NameplateDistanceComparer from the subsystem API first
NameplateDistanceComparer nameplateDistanceComparer = ...;
var result = nameplateDistanceComparer.Compare(x, y);
```

## Usage Example

```csharp
// Typically call this after obtaining an instance from the subsystem API
NameplateDistanceComparer nameplateDistanceComparer = ...;
nameplateDistanceComparer.Compare(x, y);
```

## See Also

- [Area Index](../)