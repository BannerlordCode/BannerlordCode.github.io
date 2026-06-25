---
title: "ObjectiveMarkerWidget"
description: "Auto-generated class reference for ObjectiveMarkerWidget."
---
# ObjectiveMarkerWidget

**Namespace:** TaleWorlds.MountAndBlade.GauntletUI.Widgets.Mission.NameMarker
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class ObjectiveMarkerWidget : Widget`
**Base:** `Widget`
**File:** `bin/TaleWorlds.MountAndBlade.GauntletUI.Widgets/TaleWorlds.MountAndBlade.GauntletUI.Widgets.Mission.NameMarker/ObjectiveMarkerWidget.cs`

## Overview

`ObjectiveMarkerWidget` is a Gauntlet UI widget — a UI element used in Gauntlet XML/.prefab or created in code. Subclass Widget to build custom UI elements; access instances via the widget tree.

## Mental Model

Treat `ObjectiveMarkerWidget` as a Widget-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Properties

| Name | Signature |
|------|-----------|
| `FarAlphaTarget` | `public float FarAlphaTarget { get; }` |
| `FarDistanceCutoff` | `public float FarDistanceCutoff { get; }` |
| `CloseDistanceCutoff` | `public float CloseDistanceCutoff { get; }` |
| `Rect` | `public MarkerRect Rect { get; }` |
| `IsInScreenBoundaries` | `public bool IsInScreenBoundaries { get; }` |
| `NameTextWidget` | `public TextWidget NameTextWidget { get; set; }` |
| `CombinationCountWidget` | `public TextWidget CombinationCountWidget { get; set; }` |
| `QuestIconWidget` | `public Widget QuestIconWidget { get; set; }` |
| `MainContainer` | `public Widget MainContainer { get; set; }` |
| `DistanceContainerWidget` | `public Widget DistanceContainerWidget { get; set; }` |
| `DistanceIconWidget` | `public Widget DistanceIconWidget { get; set; }` |
| `DistanceTextWidget` | `public Widget DistanceTextWidget { get; set; }` |
| `Position` | `public Vec2 Position { get; set; }` |
| `CombinedAveragePosition` | `public Vec2 CombinedAveragePosition { get; set; }` |
| `Distance` | `public int Distance { get; set; }` |
| `CombinedSiblingsCount` | `public int CombinedSiblingsCount { get; set; }` |
| `IsMainCombinationMarker` | `public bool IsMainCombinationMarker { get; set; }` |
| `IsDistanceRelevant` | `public bool IsDistanceRelevant { get; set; }` |
| `IsMarkerEnabled` | `public bool IsMarkerEnabled { get; set; }` |
| `IsMarkerActive` | `public bool IsMarkerActive { get; set; }` |
| `IsFocused` | `public new bool IsFocused { get; set; }` |

## Key Methods

### Update
`public void Update(float dt)`

**Purpose:** **Purpose:** Recalculates and stores the latest representation of the this instance.

```csharp
// Obtain an instance of ObjectiveMarkerWidget from the subsystem API first
ObjectiveMarkerWidget objectiveMarkerWidget = ...;
objectiveMarkerWidget.Update(0);
```

### UpdateRectangle
`public void UpdateRectangle()`

**Purpose:** **Purpose:** Recalculates and stores the latest representation of rectangle.

```csharp
// Obtain an instance of ObjectiveMarkerWidget from the subsystem API first
ObjectiveMarkerWidget objectiveMarkerWidget = ...;
objectiveMarkerWidget.UpdateRectangle();
```

## Usage Example

```csharp
// Obtain this widget from the Gauntlet widget tree or movie
ObjectiveMarkerWidget widget = ...;
```

## See Also

- [Area Index](../)