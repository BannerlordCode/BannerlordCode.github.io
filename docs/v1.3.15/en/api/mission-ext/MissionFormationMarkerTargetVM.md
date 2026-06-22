<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `MissionFormationMarkerTargetVM`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# MissionFormationMarkerTargetVM

**Namespace:** TaleWorlds.MountAndBlade.ViewModelCollection.HUD.FormationMarker
**Module:** TaleWorlds.MountAndBlade
**Type:** class
**Area:** Mount & Blade

## Overview

> This is an auto-generated stub. `MissionFormationMarkerTargetVM` is a class in the `TaleWorlds.MountAndBlade.ViewModelCollection.HUD.FormationMarker` namespace.
> For properties, methods, and developer use-cases, refer to source code or contribute documentation.


## Key Properties

| Name | Signature |
|------|-----------|
| `Formation` | `public Formation Formation { get; }` |
| `IsEnabled` | `public bool IsEnabled { get; set; }` |
| `IsCenterOfFocus` | `public bool IsCenterOfFocus { get; set; }` |
| `IsFormationTargetRelevant` | `public bool IsFormationTargetRelevant { get; set; }` |
| `IsTargetingAFormation` | `public bool IsTargetingAFormation { get; set; }` |
| `ShowDistanceTexts` | `public bool ShowDistanceTexts { get; set; }` |
| `FormationType` | `public string FormationType { get; set; }` |
| `TeamType` | `public int TeamType { get; set; }` |
| `ScreenPosition` | `public Vec2 ScreenPosition { get; set; }` |
| `Distance` | `public float Distance { get; set; }` |
| `DistanceText` | `public string DistanceText { get; set; }` |
| `Size` | `public int Size { get; set; }` |
| `WSign` | `public int WSign { get; set; }` |


## Key Methods

### Refresh

```csharp
public void Refresh()
```

### SetTargetedState

```csharp
public void SetTargetedState(bool isFocused, bool isTargetingAFormation)
```

### GetFormationType

```csharp
public static string GetFormationType(FormationClass formationType)
```

## See Also

- [Complete Class Catalog](../catalog)
- [Area catalog](../catalog-mountandblade)