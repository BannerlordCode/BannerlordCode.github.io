---
title: "SiegePOIDistanceComparer"
description: "Auto-generated class reference for SiegePOIDistanceComparer."
---
# SiegePOIDistanceComparer

**Namespace:** SandBox.ViewModelCollection.MapSiege
**Module:** SandBox.ViewModelCollection
**Type:** `public class SiegePOIDistanceComparer : IComparer<MapSiegePOIVM>`
**Base:** `IComparer<MapSiegePOIVM>`
**File:** `SandBox.ViewModelCollection/MapSiege/MapSiegeVM.cs`

## Overview

`SiegePOIDistanceComparer` lives in `SandBox.ViewModelCollection.MapSiege` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `SandBox.ViewModelCollection.MapSiege` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Methods

### Compare
`public int Compare(MapSiegePOIVM x, MapSiegePOIVM y)`

**Purpose:** Compares the this instance with another instance for ordering.

```csharp
// Obtain an instance of SiegePOIDistanceComparer from the subsystem API first
SiegePOIDistanceComparer siegePOIDistanceComparer = ...;
var result = siegePOIDistanceComparer.Compare(x, y);
```

## Usage Example

```csharp
// Typically call this after obtaining an instance from the subsystem API
SiegePOIDistanceComparer siegePOIDistanceComparer = ...;
siegePOIDistanceComparer.Compare(x, y);
```

## See Also

- [Area Index](../)