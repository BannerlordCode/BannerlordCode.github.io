<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `MapSiegePOIVM`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.4.5](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# MapSiegePOIVM

**Namespace:** SandBox.ViewModelCollection.MapSiege
**Module:** SandBox.ViewModelCollection
**Type:** `public class MapSiegePOIVM : ViewModel`
**Base:** `ViewModel`
**File:** `Bannerlord.Source/Modules.SandBox/SandBox.ViewModelCollection/SandBox.ViewModelCollection.MapSiege/MapSiegePOIVM.cs`

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

**Purpose:** Executes the `selection` operation or workflow.

### UpdateProperties
`public void UpdateProperties()`

**Purpose:** Updates the state or data of `properties`.

### RefreshDistanceValue
`public void RefreshDistanceValue(float newDistance)`

**Purpose:** Refreshes the display or cache of `distance value`.

### RefreshPosition
`public void RefreshPosition()`

**Purpose:** Refreshes the display or cache of `position`.

### RefreshBinding
`public void RefreshBinding()`

**Purpose:** Refreshes the display or cache of `binding`.

### ExecuteShowTooltip
`public void ExecuteShowTooltip()`

**Purpose:** Executes the `show tooltip` operation or workflow.

### ExecuteHideTooltip
`public void ExecuteHideTooltip()`

**Purpose:** Executes the `hide tooltip` operation or workflow.

## Usage Example

```csharp
var value = new MapSiegePOIVM();
value.ExecuteSelection();
```

## See Also

- [Complete Class Catalog](../catalog)