---
title: "SkillGridItemButtonWidget"
description: "Auto-generated class reference for SkillGridItemButtonWidget."
---
# SkillGridItemButtonWidget

**Namespace:** TaleWorlds.MountAndBlade.GauntletUI.Widgets.CharacterDeveloper
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class SkillGridItemButtonWidget : ButtonWidget`
**Base:** `ButtonWidget`
**File:** `bin/TaleWorlds.MountAndBlade.GauntletUI.Widgets/TaleWorlds.MountAndBlade.GauntletUI.Widgets.CharacterDeveloper/SkillGridItemButtonWidget.cs`

## Overview

`SkillGridItemButtonWidget` is a Gauntlet UI widget — a UI element used in Gauntlet XML/.prefab or created in code. Subclass Widget to build custom UI elements; access instances via the widget tree.

## Mental Model

Treat `SkillGridItemButtonWidget` as a Widget-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Properties

| Name | Signature |
|------|-----------|
| `CannotLearnBrush` | `public Brush CannotLearnBrush { get; set; }` |
| `CanLearnBrush` | `public Brush CanLearnBrush { get; set; }` |
| `FocusLevelWidget` | `public Widget FocusLevelWidget { get; set; }` |
| `CanLearnSkill` | `public bool CanLearnSkill { get; set; }` |
| `CurrentFocusLevel` | `public int CurrentFocusLevel { get; set; }` |

## Usage Example

```csharp
// Obtain this widget from the Gauntlet widget tree or movie
SkillGridItemButtonWidget widget = ...;
```

## See Also

- [Area Index](../)