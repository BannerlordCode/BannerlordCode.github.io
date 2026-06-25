---
title: "MapSiegePOIVM"
description: "Auto-generated class reference for MapSiegePOIVM."
---
# MapSiegePOIVM

**Namespace:** SandBox.ViewModelCollection.MapSiege
**Module:** SandBox.ViewModelCollection
**Type:** `public class MapSiegePOIVM : ViewModel`
**Base:** `ViewModel`
**File:** `Modules.SandBox/SandBox.ViewModelCollection/SandBox.ViewModelCollection.MapSiege/MapSiegePOIVM.cs`

## Overview

`MapSiegePOIVM` lives in `SandBox.ViewModelCollection.MapSiege` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `SandBox.ViewModelCollection.MapSiege` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `Type` | `public POIType Type { get; }` |
| `MachineIndex` | `public int MachineIndex { get; }` |
| `Machine` | `public SiegeEngineConstructionProgress Machine { get; }` |
| `MapSceneLocationFrame` | `public MatrixFrame MapSceneLocationFrame { get; }` |
| `Position` | `public Vec2 Position { get; set; }` |
| `SidePrimaryColor` | `public Color SidePrimaryColor { get; set; }` |
| `SideSecondaryColor` | `public Color SideSecondaryColor { get; set; }` |
| `QueueIndex` | `public int QueueIndex { get; set; }` |
| `MachineType` | `public int MachineType { get; set; }` |
| `CurrentHitpoints` | `public float CurrentHitpoints { get; set; }` |
| `MaxHitpoints` | `public float MaxHitpoints { get; set; }` |
| `IsPlayerSidePOI` | `public bool IsPlayerSidePOI { get; set; }` |
| `IsFireVersion` | `public bool IsFireVersion { get; set; }` |
| `IsInVisibleRange` | `public bool IsInVisibleRange { get; set; }` |
| `IsConstructing` | `public bool IsConstructing { get; set; }` |
| `IsSelected` | `public bool IsSelected { get; set; }` |
| `HasItem` | `public bool HasItem { get; set; }` |
| `IsInside` | `public bool IsInside { get; set; }` |

## Key Methods

### ExecuteSelection
`public void ExecuteSelection()`

**Purpose:** Runs the operation or workflow associated with selection.

```csharp
// Obtain an instance of MapSiegePOIVM from the subsystem API first
MapSiegePOIVM mapSiegePOIVM = ...;
mapSiegePOIVM.ExecuteSelection();
```

### UpdateProperties
`public void UpdateProperties()`

**Purpose:** Recalculates and stores the latest representation of properties.

```csharp
// Obtain an instance of MapSiegePOIVM from the subsystem API first
MapSiegePOIVM mapSiegePOIVM = ...;
mapSiegePOIVM.UpdateProperties();
```

### RefreshDistanceValue
`public void RefreshDistanceValue(float newDistance)`

**Purpose:** Keeps the display or cache of distance value in sync with the underlying state.

```csharp
// Obtain an instance of MapSiegePOIVM from the subsystem API first
MapSiegePOIVM mapSiegePOIVM = ...;
mapSiegePOIVM.RefreshDistanceValue(0);
```

### RefreshPosition
`public void RefreshPosition()`

**Purpose:** Keeps the display or cache of position in sync with the underlying state.

```csharp
// Obtain an instance of MapSiegePOIVM from the subsystem API first
MapSiegePOIVM mapSiegePOIVM = ...;
mapSiegePOIVM.RefreshPosition();
```

### RefreshBinding
`public void RefreshBinding()`

**Purpose:** Keeps the display or cache of binding in sync with the underlying state.

```csharp
// Obtain an instance of MapSiegePOIVM from the subsystem API first
MapSiegePOIVM mapSiegePOIVM = ...;
mapSiegePOIVM.RefreshBinding();
```

### ExecuteShowTooltip
`public void ExecuteShowTooltip()`

**Purpose:** Runs the operation or workflow associated with show tooltip.

```csharp
// Obtain an instance of MapSiegePOIVM from the subsystem API first
MapSiegePOIVM mapSiegePOIVM = ...;
mapSiegePOIVM.ExecuteShowTooltip();
```

### ExecuteHideTooltip
`public void ExecuteHideTooltip()`

**Purpose:** Runs the operation or workflow associated with hide tooltip.

```csharp
// Obtain an instance of MapSiegePOIVM from the subsystem API first
MapSiegePOIVM mapSiegePOIVM = ...;
mapSiegePOIVM.ExecuteHideTooltip();
```

## Usage Example

```csharp
// Typically call this after obtaining an instance from the subsystem API
MapSiegePOIVM mapSiegePOIVM = ...;
mapSiegePOIVM.ExecuteSelection();
```

## See Also

- [Area Index](../)