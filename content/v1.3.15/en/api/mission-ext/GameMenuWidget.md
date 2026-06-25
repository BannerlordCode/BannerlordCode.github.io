---
title: "GameMenuWidget"
description: "Auto-generated class reference for GameMenuWidget."
---
# GameMenuWidget

**Namespace:** TaleWorlds.MountAndBlade.GauntletUI.Widgets.GameMenu
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class GameMenuWidget : Widget`
**Base:** `Widget`
**File:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets/GameMenu/GameMenuWidget.cs`

## Overview

`GameMenuWidget` is a Gauntlet UI widget — a UI element used in Gauntlet XML/.prefab or created in code. Subclass Widget to build custom UI elements; access instances via the widget tree.

## Mental Model

Treat `GameMenuWidget` as a Widget-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Properties

| Name | Signature |
|------|-----------|
| `EncounterModeMenuWidth` | `public int EncounterModeMenuWidth { get; set; }` |
| `EncounterModeMenuHeight` | `public int EncounterModeMenuHeight { get; set; }` |
| `EncounterModeMenuMarginTop` | `public int EncounterModeMenuMarginTop { get; set; }` |
| `NormalModeMenuWidth` | `public int NormalModeMenuWidth { get; set; }` |
| `NormalModeMenuHeight` | `public int NormalModeMenuHeight { get; }` |
| `NormalModeMenuMarginTop` | `public int NormalModeMenuMarginTop { get; }` |
| `IsOverlayExtended` | `public bool IsOverlayExtended { get; }` |
| `ScopeTargeter` | `public NavigationScopeTargeter ScopeTargeter { get; set; }` |
| `TitleTextWidget` | `public TextWidget TitleTextWidget { get; set; }` |
| `TitleContainerWidget` | `public Widget TitleContainerWidget { get; set; }` |
| `IsNight` | `public bool IsNight { get; set; }` |
| `IsEncounterMenu` | `public bool IsEncounterMenu { get; set; }` |
| `Overlay` | `public Widget Overlay { get; set; }` |
| `ExtendButtonWidget` | `public ButtonWidget ExtendButtonWidget { get; set; }` |
| `ExtendButtonArrowWidget` | `public BrushWidget ExtendButtonArrowWidget { get; set; }` |
| `OptionItemsList` | `public ListPanel OptionItemsList { get; set; }` |
| `SpriteName` | `public string SpriteName { get; set; }` |
| `MenuId` | `public string MenuId { get; set; }` |
| `OverriddenSpriteMapBrush` | `public Brush OverriddenSpriteMapBrush { get; set; }` |

## Key Methods

### UpdateOverlayState
`public void UpdateOverlayState()`

**Purpose:** Recalculates and stores the latest representation of `overlay state`.

```csharp
// Obtain an instance of GameMenuWidget from the subsystem API first
GameMenuWidget gameMenuWidget = ...;
gameMenuWidget.UpdateOverlayState();
```

### OnOptionStateChanged
`public void OnOptionStateChanged()`

**Purpose:** Invoked when the `option state changed` event is raised.

```csharp
// Obtain an instance of GameMenuWidget from the subsystem API first
GameMenuWidget gameMenuWidget = ...;
gameMenuWidget.OnOptionStateChanged();
```

## Usage Example

```csharp
// Obtain this widget from the Gauntlet widget tree or movie
GameMenuWidget widget = ...;
```

## See Also

- [Area Index](../)