---
title: "BoardGameInstructionVisualWidget"
description: "Auto-generated class reference for BoardGameInstructionVisualWidget."
---
# BoardGameInstructionVisualWidget

**Namespace:** TaleWorlds.MountAndBlade.GauntletUI.Widgets.BoardGame
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class BoardGameInstructionVisualWidget : Widget`
**Base:** `Widget`
**File:** `bin/TaleWorlds.MountAndBlade.GauntletUI.Widgets/TaleWorlds.MountAndBlade.GauntletUI.Widgets.BoardGame/BoardGameInstructionVisualWidget.cs`

## Overview

`BoardGameInstructionVisualWidget` is a Gauntlet UI widget — a UI element used in Gauntlet XML/.prefab or created in code. Subclass Widget to build custom UI elements; access instances via the widget tree.

## Mental Model

Treat `BoardGameInstructionVisualWidget` as a Widget-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Properties

| Name | Signature |
|------|-----------|
| `GameType` | `public string GameType { get; set; }` |

## Usage Example

```csharp
// Obtain this widget from the Gauntlet widget tree or movie
BoardGameInstructionVisualWidget widget = ...;
```

## See Also

- [Area Index](../)