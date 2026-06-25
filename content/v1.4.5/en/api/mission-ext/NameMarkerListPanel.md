---
title: "NameMarkerListPanel"
description: "Auto-generated class reference for NameMarkerListPanel."
---
# NameMarkerListPanel

**Namespace:** TaleWorlds.MountAndBlade.GauntletUI.Widgets.Mission.NameMarker
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class NameMarkerListPanel : ListPanel`
**Base:** `ListPanel`
**File:** `bin/TaleWorlds.MountAndBlade.GauntletUI.Widgets/TaleWorlds.MountAndBlade.GauntletUI.Widgets.Mission.NameMarker/NameMarkerListPanel.cs`

## Overview

`NameMarkerListPanel` lives in `TaleWorlds.MountAndBlade.GauntletUI.Widgets.Mission.NameMarker` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.MountAndBlade.GauntletUI.Widgets.Mission.NameMarker` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `FarAlphaTarget` | `public float FarAlphaTarget { get; }` |
| `FarDistanceCutoff` | `public float FarDistanceCutoff { get; }` |
| `CloseDistanceCutoff` | `public float CloseDistanceCutoff { get; }` |
| `HasTypeMarker` | `public bool HasTypeMarker { get; }` |
| `Rect` | `public MarkerRect Rect { get; }` |
| `IsInScreenBoundaries` | `public bool IsInScreenBoundaries { get; }` |
| `NameTextWidget` | `public TextWidget NameTextWidget { get; set; }` |
| `TypeVisualWidget` | `public BrushWidget TypeVisualWidget { get; set; }` |
| `DistanceIconWidget` | `public BrushWidget DistanceIconWidget { get; set; }` |
| `DistanceTextWidget` | `public TextWidget DistanceTextWidget { get; set; }` |
| `Position` | `public Vec2 Position { get; set; }` |
| `IssueNotificationColor` | `public Color IssueNotificationColor { get; set; }` |
| `MainQuestNotificationColor` | `public Color MainQuestNotificationColor { get; set; }` |
| `EnemyColor` | `public Color EnemyColor { get; set; }` |
| `FriendlyColor` | `public Color FriendlyColor { get; set; }` |
| `IconType` | `public string IconType { get; set; }` |
| `NameType` | `public string NameType { get; set; }` |
| `Distance` | `public int Distance { get; set; }` |
| `IsMarkerEnabled` | `public bool IsMarkerEnabled { get; set; }` |
| `IsMarkerPersistent` | `public bool IsMarkerPersistent { get; set; }` |
| `HasIssue` | `public bool HasIssue { get; set; }` |
| `HasMainQuest` | `public bool HasMainQuest { get; set; }` |
| `IsEnemy` | `public bool IsEnemy { get; set; }` |
| `IsFriendly` | `public bool IsFriendly { get; set; }` |
| `IsFocused` | `public new bool IsFocused { get; set; }` |

## Key Methods

### Update
`public void Update(float dt)`

**Purpose:** Recalculates and stores the latest representation of the this instance.

```csharp
// Obtain an instance of NameMarkerListPanel from the subsystem API first
NameMarkerListPanel nameMarkerListPanel = ...;
nameMarkerListPanel.Update(0);
```

### UpdateRectangle
`public void UpdateRectangle()`

**Purpose:** Recalculates and stores the latest representation of rectangle.

```csharp
// Obtain an instance of NameMarkerListPanel from the subsystem API first
NameMarkerListPanel nameMarkerListPanel = ...;
nameMarkerListPanel.UpdateRectangle();
```

## Usage Example

```csharp
// Typically call this after obtaining an instance from the subsystem API
NameMarkerListPanel nameMarkerListPanel = ...;
nameMarkerListPanel.Update(0);
```

## See Also

- [Area Index](../)