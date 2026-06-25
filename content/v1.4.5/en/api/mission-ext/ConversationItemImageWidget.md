---
title: "ConversationItemImageWidget"
description: "Auto-generated class reference for ConversationItemImageWidget."
---
# ConversationItemImageWidget

**Namespace:** TaleWorlds.MountAndBlade.GauntletUI.Widgets.Conversation
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class ConversationItemImageWidget : ImageWidget`
**Base:** `ImageWidget`
**File:** `bin/TaleWorlds.MountAndBlade.GauntletUI.Widgets/TaleWorlds.MountAndBlade.GauntletUI.Widgets.Conversation/ConversationItemImageWidget.cs`

## Overview

`ConversationItemImageWidget` is a Gauntlet UI widget — a UI element used in Gauntlet XML/.prefab or created in code. Subclass Widget to build custom UI elements; access instances via the widget tree.

## Mental Model

Treat `ConversationItemImageWidget` as a Widget-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Properties

| Name | Signature |
|------|-----------|
| `NormalBrush` | `public Brush NormalBrush { get; set; }` |
| `SpecialBrush` | `public Brush SpecialBrush { get; set; }` |
| `IsSpecial` | `public bool IsSpecial { get; set; }` |

## Usage Example

```csharp
// Obtain this widget from the Gauntlet widget tree or movie
ConversationItemImageWidget widget = ...;
```

## See Also

- [Area Index](../)