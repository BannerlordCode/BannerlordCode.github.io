---
title: "SkillProgressFillBarWidget"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `SkillProgressFillBarWidget`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.4.5](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# SkillProgressFillBarWidget

**Namespace:** TaleWorlds.MountAndBlade.GauntletUI.Widgets.CharacterDeveloper
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class SkillProgressFillBarWidget : FillBarWidget`
**Base:** `FillBarWidget`
**File:** `Bannerlord.Source/bin/TaleWorlds.MountAndBlade.GauntletUI.Widgets/TaleWorlds.MountAndBlade.GauntletUI.Widgets.CharacterDeveloper/SkillProgressFillBarWidget.cs`

## Overview

`SkillProgressFillBarWidget` is a Gauntlet UI widget — a UI element used in Gauntlet XML/.prefab or created in code. Subclass Widget to build custom UI elements; access instances via the widget tree.

## Mental Model

Treat `SkillProgressFillBarWidget` as a Widget-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Properties

| Name | Signature |
|------|-----------|
| `PercentageIndicatorWidget` | `public Widget PercentageIndicatorWidget { get; set; }` |

## Usage Example

```csharp
var widget = new SkillProgressFillBarWidget(context);
```

## See Also

- [Complete Class Catalog](../catalog)