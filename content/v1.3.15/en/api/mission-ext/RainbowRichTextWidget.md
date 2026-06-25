---
title: "RainbowRichTextWidget"
description: "Auto-generated class reference for RainbowRichTextWidget."
---
# RainbowRichTextWidget

**Namespace:** TaleWorlds.MountAndBlade.GauntletUI.Widgets
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class RainbowRichTextWidget : RichTextWidget`
**Base:** `RichTextWidget`
**File:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets/RainbowRichTextWidget.cs`

## Overview

`RainbowRichTextWidget` is a Gauntlet UI widget — a UI element used in Gauntlet XML/.prefab or created in code. Subclass Widget to build custom UI elements; access instances via the widget tree.

## Mental Model

Treat `RainbowRichTextWidget` as a Widget-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Usage Example

```csharp
// Obtain this widget from the Gauntlet widget tree or movie
RainbowRichTextWidget widget = ...;
```

## See Also

- [Area Index](../)