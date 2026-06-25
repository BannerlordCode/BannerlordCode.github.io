---
title: "CharacterCreationOptionsItemWidget"
description: "Auto-generated class reference for CharacterCreationOptionsItemWidget."
---
# CharacterCreationOptionsItemWidget

**Namespace:** TaleWorlds.MountAndBlade.GauntletUI.Widgets.CharacterCreation.Options
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class CharacterCreationOptionsItemWidget : Widget`
**Base:** `Widget`
**File:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets/CharacterCreation/Options/CharacterCreationOptionsItemWidget.cs`

## Overview

`CharacterCreationOptionsItemWidget` is a Gauntlet UI widget — a UI element used in Gauntlet XML/.prefab or created in code. Subclass Widget to build custom UI elements; access instances via the widget tree.

## Mental Model

Treat `CharacterCreationOptionsItemWidget` as a Widget-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Properties

| Name | Signature |
|------|-----------|
| `Type` | `public int Type { get; set; }` |
| `ActionOptionWidget` | `public Widget ActionOptionWidget { get; set; }` |
| `NumericOptionWidget` | `public Widget NumericOptionWidget { get; set; }` |
| `SelectionOptionWidget` | `public Widget SelectionOptionWidget { get; set; }` |
| `BooleanOptionWidget` | `public Widget BooleanOptionWidget { get; set; }` |

## Usage Example

```csharp
// Obtain this widget from the Gauntlet widget tree or movie
CharacterCreationOptionsItemWidget widget = ...;
```

## See Also

- [Area Index](../)