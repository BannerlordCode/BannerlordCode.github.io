---
title: "RainbowRichTextWidget"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `RainbowRichTextWidget`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.4.5](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# RainbowRichTextWidget

**Namespace:** TaleWorlds.MountAndBlade.GauntletUI.Widgets
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class RainbowRichTextWidget`
**Base:** none
**File:** `Bannerlord.Source/bin/TaleWorlds.MountAndBlade.GauntletUI.Widgets/TaleWorlds.MountAndBlade.GauntletUI.Widgets/RainbowRichTextWidget.cs`

## Overview

`RainbowRichTextWidget` is a Gauntlet UI widget — a UI element used in Gauntlet XML/.prefab or created in code. Subclass Widget to build custom UI elements; access instances via the widget tree.

## Mental Model

Treat `RainbowRichTextWidget` as a Widget-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Methods

### RainbowRichTextWidget
`public class RainbowRichTextWidget(UIContext context)`

**Purpose:** Handles logic related to `rainbow rich text widget`.

## Usage Example

```csharp
var widget = new RainbowRichTextWidget(context);
```

## See Also

- [Complete Class Catalog](../catalog)