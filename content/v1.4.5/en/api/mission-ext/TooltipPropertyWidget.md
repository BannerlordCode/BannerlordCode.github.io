---
title: "TooltipPropertyWidget"
description: "Auto-generated class reference for TooltipPropertyWidget."
---
# TooltipPropertyWidget

**Namespace:** TaleWorlds.MountAndBlade.GauntletUI.Widgets.Information
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class TooltipPropertyWidget : Widget`
**Base:** `Widget`
**File:** `bin/TaleWorlds.MountAndBlade.GauntletUI.Widgets/TaleWorlds.MountAndBlade.GauntletUI.Widgets.Information/TooltipPropertyWidget.cs`

## Overview

`TooltipPropertyWidget` is a Gauntlet UI widget — a UI element used in Gauntlet XML/.prefab or created in code. Subclass Widget to build custom UI elements; access instances via the widget tree.

## Mental Model

Treat `TooltipPropertyWidget` as a Widget-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Properties

| Name | Signature |
|------|-----------|
| `IsTwoColumn` | `public bool IsTwoColumn { get; }` |
| `PropertyModifierAsFlag` | `public TooltipPropertyFlags PropertyModifierAsFlag { get; }` |
| `RundownSeperatorSpriteName` | `public string RundownSeperatorSpriteName { get; set; }` |
| `DefaultSeperatorSpriteName` | `public string DefaultSeperatorSpriteName { get; set; }` |
| `TitleBackgroundSpriteName` | `public string TitleBackgroundSpriteName { get; set; }` |
| `ValueNameTextBrush` | `public Brush ValueNameTextBrush { get; set; }` |
| `TitleTextBrush` | `public Brush TitleTextBrush { get; set; }` |
| `SubtextBrush` | `public Brush SubtextBrush { get; set; }` |
| `ValueTextBrush` | `public Brush ValueTextBrush { get; set; }` |
| `DescriptionTextBrush` | `public Brush DescriptionTextBrush { get; set; }` |
| `ModifyDefinitionColor` | `public bool ModifyDefinitionColor { get; set; }` |
| `DefinitionLabel` | `public RichTextWidget DefinitionLabel { get; set; }` |
| `ValueLabel` | `public RichTextWidget ValueLabel { get; set; }` |
| `ItemModifierLabel` | `public TextWidget ItemModifierLabel { get; set; }` |
| `ValueBackgroundSpriteWidget` | `public ListPanel ValueBackgroundSpriteWidget { get; set; }` |
| `DefinitionLabelContainer` | `public Widget DefinitionLabelContainer { get; set; }` |
| `ValueLabelContainer` | `public Widget ValueLabelContainer { get; set; }` |
| `TextColor` | `public Color TextColor { get; set; }` |
| `TextHeight` | `public int TextHeight { get; set; }` |
| `DefinitionText` | `public string DefinitionText { get; set; }` |
| `ValueText` | `public string ValueText { get; set; }` |
| `PropertyModifier` | `public int PropertyModifier { get; set; }` |

## Key Methods

### SetBattleScope
`public void SetBattleScope(bool battleScope)`

**Purpose:** Assigns a new value to battle scope and updates the object's internal state.

```csharp
// Obtain an instance of TooltipPropertyWidget from the subsystem API first
TooltipPropertyWidget tooltipPropertyWidget = ...;
tooltipPropertyWidget.SetBattleScope(false);
```

### RefreshSize
`public void RefreshSize(bool inBattleScope, float battleScopeSize, float maxValueLabelSizeX, float maxDefinitionLabelSizeX, Brush definitionRelationBrush = null, Brush valueRelationBrush = null)`

**Purpose:** Keeps the display or cache of size in sync with the underlying state.

```csharp
// Obtain an instance of TooltipPropertyWidget from the subsystem API first
TooltipPropertyWidget tooltipPropertyWidget = ...;
tooltipPropertyWidget.RefreshSize(false, 0, 0, 0, null, null);
```

## Usage Example

```csharp
// Obtain this widget from the Gauntlet widget tree or movie
TooltipPropertyWidget widget = ...;
```

## See Also

- [Area Index](../)