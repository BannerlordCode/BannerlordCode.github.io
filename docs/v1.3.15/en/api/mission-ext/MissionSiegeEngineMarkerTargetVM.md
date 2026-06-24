<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `MissionSiegeEngineMarkerTargetVM`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.3.15](../../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# MissionSiegeEngineMarkerTargetVM

**Namespace:** TaleWorlds.MountAndBlade.ViewModelCollection.HUD.FormationMarker
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class MissionSiegeEngineMarkerTargetVM : ViewModel`
**Base:** `ViewModel`
**File:** `TaleWorlds.MountAndBlade.ViewModelCollection/HUD/FormationMarker/MissionSiegeEngineMarkerTargetVM.cs`

## Overview

`MissionSiegeEngineMarkerTargetVM` lives in `TaleWorlds.MountAndBlade.ViewModelCollection.HUD.FormationMarker` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.MountAndBlade.ViewModelCollection.HUD.FormationMarker` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `Engine` | `public SiegeWeapon Engine { get; }` |
| `IsEnabled` | `public bool IsEnabled { get; set; }` |
| `IsEnemy` | `public bool IsEnemy { get; set; }` |
| `EngineType` | `public string EngineType { get; set; }` |
| `IsBehind` | `public bool IsBehind { get; set; }` |
| `ScreenPosition` | `public Vec2 ScreenPosition { get; set; }` |
| `Distance` | `public float Distance { get; set; }` |
| `HitPoints` | `public int HitPoints { get; set; }` |

## Key Methods

### Refresh
`public void Refresh()`

**Purpose:** Refreshes the display or cache of `refresh`.

## Usage Example

```csharp
var value = new MissionSiegeEngineMarkerTargetVM();
value.Refresh();
```

## See Also

- [Complete Class Catalog](../catalog)