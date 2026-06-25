---
title: "CharacterDeveloperAttributeInspectionPopupWidget"
description: "Auto-generated class reference for CharacterDeveloperAttributeInspectionPopupWidget."
---
# CharacterDeveloperAttributeInspectionPopupWidget

**Namespace:** TaleWorlds.MountAndBlade.GauntletUI.Widgets.CharacterDeveloper
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class CharacterDeveloperAttributeInspectionPopupWidget : Widget`
**Base:** `Widget`
**File:** `bin/TaleWorlds.MountAndBlade.GauntletUI.Widgets/TaleWorlds.MountAndBlade.GauntletUI.Widgets.CharacterDeveloper/CharacterDeveloperAttributeInspectionPopupWidget.cs`

## Overview

`CharacterDeveloperAttributeInspectionPopupWidget` is a Gauntlet UI widget — a UI element used in Gauntlet XML/.prefab or created in code. Subclass Widget to build custom UI elements; access instances via the widget tree.

## Mental Model

Treat `CharacterDeveloperAttributeInspectionPopupWidget` as a Widget-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Properties

| Name | Signature |
|------|-----------|
| `IsActive` | `public bool IsActive { get; set; }` |

## Usage Example

```csharp
// Obtain this widget from the Gauntlet widget tree or movie
CharacterDeveloperAttributeInspectionPopupWidget widget = ...;
```

## See Also

- [Area Index](../)