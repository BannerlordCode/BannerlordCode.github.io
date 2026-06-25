---
title: "SceneNotificationDescriptionTextWidget"
description: "Auto-generated class reference for SceneNotificationDescriptionTextWidget."
---
# SceneNotificationDescriptionTextWidget

**Namespace:** TaleWorlds.MountAndBlade.GauntletUI.Widgets
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class SceneNotificationDescriptionTextWidget : TextWidget`
**Base:** `TextWidget`
**File:** `bin/TaleWorlds.MountAndBlade.GauntletUI.Widgets/TaleWorlds.MountAndBlade.GauntletUI.Widgets/SceneNotificationDescriptionTextWidget.cs`

## Overview

`SceneNotificationDescriptionTextWidget` is a Gauntlet UI widget — a UI element used in Gauntlet XML/.prefab or created in code. Subclass Widget to build custom UI elements; access instances via the widget tree.

## Mental Model

Treat `SceneNotificationDescriptionTextWidget` as a Widget-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Properties

| Name | Signature |
|------|-----------|
| `MultiLineAlignment` | `public TextHorizontalAlignment MultiLineAlignment { get; set; }` |

## Usage Example

```csharp
// Obtain this widget from the Gauntlet widget tree or movie
SceneNotificationDescriptionTextWidget widget = ...;
```

## See Also

- [Area Index](../)