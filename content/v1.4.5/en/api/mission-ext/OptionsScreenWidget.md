---
title: "OptionsScreenWidget"
description: "Auto-generated class reference for OptionsScreenWidget."
---
# OptionsScreenWidget

**Namespace:** TaleWorlds.MountAndBlade.GauntletUI.Widgets.Options
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class OptionsScreenWidget : Widget`
**Base:** `Widget`
**File:** `bin/TaleWorlds.MountAndBlade.GauntletUI.Widgets/TaleWorlds.MountAndBlade.GauntletUI.Widgets.Options/OptionsScreenWidget.cs`

## Overview

`OptionsScreenWidget` is a Gauntlet UI widget — a UI element used in Gauntlet XML/.prefab or created in code. Subclass Widget to build custom UI elements; access instances via the widget tree.

## Mental Model

Treat `OptionsScreenWidget` as a Widget-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Properties

| Name | Signature |
|------|-----------|
| `VideoMemoryUsageWidget` | `public Widget VideoMemoryUsageWidget { get; set; }` |
| `CurrentOptionDescriptionWidget` | `public RichTextWidget CurrentOptionDescriptionWidget { get; set; }` |
| `CurrentOptionNameWidget` | `public RichTextWidget CurrentOptionNameWidget { get; set; }` |
| `CurrentOptionExtraInformationWidget` | `public RichTextWidget CurrentOptionExtraInformationWidget { get; set; }` |
| `CurrentOptionImageWidget` | `public Widget CurrentOptionImageWidget { get; set; }` |
| `PerformanceTabToggle` | `public TabToggleWidget PerformanceTabToggle { get; set; }` |

## Key Methods

### SetCurrentOption
`public void SetCurrentOption(Widget currentOptionWidget, Sprite newgraphicsSprite)`

**Purpose:** Assigns a new value to current option and updates the object's internal state.

```csharp
// Obtain an instance of OptionsScreenWidget from the subsystem API first
OptionsScreenWidget optionsScreenWidget = ...;
optionsScreenWidget.SetCurrentOption(currentOptionWidget, newgraphicsSprite);
```

## Usage Example

```csharp
// Obtain this widget from the Gauntlet widget tree or movie
OptionsScreenWidget widget = ...;
```

## See Also

- [Area Index](../)