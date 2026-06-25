---
title: "PartyNameplateWidget"
description: "Auto-generated class reference for PartyNameplateWidget."
---
# PartyNameplateWidget

**Namespace:** TaleWorlds.MountAndBlade.GauntletUI.Widgets.Nameplate
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class PartyNameplateWidget`
**Base:** none
**File:** `bin/TaleWorlds.MountAndBlade.GauntletUI.Widgets/TaleWorlds.MountAndBlade.GauntletUI.Widgets.Nameplate/PartyNameplateWidget.cs`

## Overview

`PartyNameplateWidget` is a Gauntlet UI widget — a UI element used in Gauntlet XML/.prefab or created in code. Subclass Widget to build custom UI elements; access instances via the widget tree.

## Mental Model

Treat `PartyNameplateWidget` as a Widget-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Properties

| Name | Signature |
|------|-----------|
| `HeadGroupWidget` | `public Widget HeadGroupWidget { get; set; }` |
| `NameplateLayoutListPanel` | `public ListPanel NameplateLayoutListPanel { get; set; }` |
| `PartyBannerWidget` | `public MaskedTextureWidget PartyBannerWidget { get; set; }` |
| `TrackerFrame` | `public Widget TrackerFrame { get; set; }` |
| `Position` | `public Vec2 Position { get; set; }` |
| `HeadPosition` | `public Vec2 HeadPosition { get; set; }` |
| `ShouldShowFullName` | `public bool ShouldShowFullName { get; set; }` |
| `CanParley` | `public bool CanParley { get; set; }` |
| `IsTargetedByTutorial` | `public bool IsTargetedByTutorial { get; set; }` |
| `IsInArmy` | `public bool IsInArmy { get; set; }` |
| `IsInSettlement` | `public bool IsInSettlement { get; set; }` |
| `IsArmy` | `public bool IsArmy { get; set; }` |
| `IsVisibleOnMap` | `public bool IsVisibleOnMap { get; set; }` |
| `IsInside` | `public bool IsInside { get; set; }` |
| `IsHigh` | `public bool IsHigh { get; set; }` |
| `IsBehind` | `public bool IsBehind { get; set; }` |
| `IsDisorganized` | `public bool IsDisorganized { get; set; }` |
| `NameplateTextWidget` | `public TextWidget NameplateTextWidget { get; set; }` |
| `NameplateExtraInfoTextWidget` | `public TextWidget NameplateExtraInfoTextWidget { get; set; }` |
| `NameplateFullNameTextWidget` | `public TextWidget NameplateFullNameTextWidget { get; set; }` |
| `SpeedTextWidget` | `public TextWidget SpeedTextWidget { get; set; }` |
| `SpeedIconWidget` | `public Widget SpeedIconWidget { get; set; }` |
| `ParleyIconWidget` | `public Widget ParleyIconWidget { get; set; }` |
| `DisorganizedWidget` | `public Widget DisorganizedWidget { get; set; }` |

## Key Methods

### PartyNameplateWidget
`public class PartyNameplateWidget(UIContext context)`

**Purpose:** Performs the operation described by this method.

```csharp
// Obtain an instance of PartyNameplateWidget from the subsystem API first
PartyNameplateWidget partyNameplateWidget = ...;
var result = partyNameplateWidget.PartyNameplateWidget(context);
```

## Usage Example

```csharp
// Obtain this widget from the Gauntlet widget tree or movie
PartyNameplateWidget widget = ...;
```

## See Also

- [Area Index](../)