---
title: "SaveLoadMainHeroVisualWidget"
description: "Auto-generated class reference for SaveLoadMainHeroVisualWidget."
---
# SaveLoadMainHeroVisualWidget

**Namespace:** TaleWorlds.MountAndBlade.GauntletUI.Widgets.SaveLoad
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class SaveLoadMainHeroVisualWidget : Widget`
**Base:** `Widget`
**File:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets/SaveLoad/SaveLoadMainHeroVisualWidget.cs`

## Overview

`SaveLoadMainHeroVisualWidget` is a Gauntlet UI widget — a UI element used in Gauntlet XML/.prefab or created in code. Subclass Widget to build custom UI elements; access instances via the widget tree.

## Mental Model

Treat `SaveLoadMainHeroVisualWidget` as a Widget-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Properties

| Name | Signature |
|------|-----------|
| `DefaultVisualWidget` | `public Widget DefaultVisualWidget { get; set; }` |
| `SaveLoadHeroTableau` | `public SaveLoadHeroTableauWidget SaveLoadHeroTableau { get; set; }` |
| `IsVisualDisabledForMemoryPurposes` | `public bool IsVisualDisabledForMemoryPurposes { get; set; }` |

## Usage Example

```csharp
// Obtain this widget from the Gauntlet widget tree or movie
SaveLoadMainHeroVisualWidget widget = ...;
```

## See Also

- [Area Index](../)