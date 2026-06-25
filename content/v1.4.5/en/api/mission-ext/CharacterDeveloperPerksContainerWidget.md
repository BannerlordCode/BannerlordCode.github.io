---
title: "CharacterDeveloperPerksContainerWidget"
description: "Auto-generated class reference for CharacterDeveloperPerksContainerWidget."
---
# CharacterDeveloperPerksContainerWidget

**Namespace:** TaleWorlds.MountAndBlade.GauntletUI.Widgets.CharacterDeveloper
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class CharacterDeveloperPerksContainerWidget : Widget`
**Base:** `Widget`
**File:** `bin/TaleWorlds.MountAndBlade.GauntletUI.Widgets/TaleWorlds.MountAndBlade.GauntletUI.Widgets.CharacterDeveloper/CharacterDeveloperPerksContainerWidget.cs`

## Overview

`CharacterDeveloperPerksContainerWidget` is a Gauntlet UI widget — a UI element used in Gauntlet XML/.prefab or created in code. Subclass Widget to build custom UI elements; access instances via the widget tree.

## Mental Model

Treat `CharacterDeveloperPerksContainerWidget` as a Widget-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Properties

| Name | Signature |
|------|-----------|
| `LeftScopeID` | `public string LeftScopeID { get; set; }` |
| `RightScopeID` | `public string RightScopeID { get; set; }` |
| `DownScopeID` | `public string DownScopeID { get; set; }` |
| `UpScopeID` | `public string UpScopeID { get; set; }` |
| `FirstScopeID` | `public string FirstScopeID { get; set; }` |

## Usage Example

```csharp
// Obtain this widget from the Gauntlet widget tree or movie
CharacterDeveloperPerksContainerWidget widget = ...;
```

## See Also

- [Area Index](../)