---
title: "CharacterCreationBackgroundGradientBrushWidget"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `CharacterCreationBackgroundGradientBrushWidget`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.3.15](../../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# CharacterCreationBackgroundGradientBrushWidget

**Namespace:** TaleWorlds.MountAndBlade.GauntletUI.Widgets.CharacterCreation.Culture
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class CharacterCreationBackgroundGradientBrushWidget : BrushWidget`
**Base:** `BrushWidget`
**File:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets/CharacterCreation/Culture/CharacterCreationBackgroundGradientBrushWidget.cs`

## Overview

`CharacterCreationBackgroundGradientBrushWidget` is a Gauntlet UI widget — a UI element used in Gauntlet XML/.prefab or created in code. Subclass Widget to build custom UI elements; access instances via the widget tree.

## Mental Model

Treat `CharacterCreationBackgroundGradientBrushWidget` as a Widget-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Properties

| Name | Signature |
|------|-----------|
| `CultureColor1` | `public Color CultureColor1 { get; set; }` |

## Usage Example

```csharp
var widget = new CharacterCreationBackgroundGradientBrushWidget(context);
```

## See Also

- [Complete Class Catalog](../catalog)