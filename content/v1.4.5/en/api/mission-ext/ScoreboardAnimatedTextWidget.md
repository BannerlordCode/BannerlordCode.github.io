---
title: "ScoreboardAnimatedTextWidget"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `ScoreboardAnimatedTextWidget`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.4.5](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# ScoreboardAnimatedTextWidget

**Namespace:** TaleWorlds.MountAndBlade.GauntletUI.Widgets
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class ScoreboardAnimatedTextWidget : TextWidget`
**Base:** `TextWidget`
**File:** `Bannerlord.Source/bin/TaleWorlds.MountAndBlade.GauntletUI.Widgets/TaleWorlds.MountAndBlade.GauntletUI.Widgets/ScoreboardAnimatedTextWidget.cs`

## Overview

`ScoreboardAnimatedTextWidget` is a Gauntlet UI widget — a UI element used in Gauntlet XML/.prefab or created in code. Subclass Widget to build custom UI elements; access instances via the widget tree.

## Mental Model

Treat `ScoreboardAnimatedTextWidget` as a Widget-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Properties

| Name | Signature |
|------|-----------|
| `ValueAsInt` | `public int ValueAsInt { get; set; }` |
| `ShowZero` | `public bool ShowZero { get; set; }` |

## Usage Example

```csharp
var widget = new ScoreboardAnimatedTextWidget(context);
```

## See Also

- [Complete Class Catalog](../catalog)