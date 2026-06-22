<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `SkillProgressFillBarWidget`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# SkillProgressFillBarWidget

**Namespace:** TaleWorlds.MountAndBlade.GauntletUI.Widgets.CharacterDeveloper
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class SkillProgressFillBarWidget : FillBarWidget`
**Base:** `FillBarWidget`
**File:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets/CharacterDeveloper/SkillProgressFillBarWidget.cs`

## Overview

`SkillProgressFillBarWidget` is a Gauntlet UI widget — a UI element used in Gauntlet XML/.prefab or created in code. Subclass Widget to build custom UI elements; access instances via the widget tree.

## Key Properties

| Name | Signature |
|------|-----------|
| `PercentageIndicatorWidget` | `public Widget PercentageIndicatorWidget { get; set; }` |

## Usage Example

```csharp
// Typical usage of SkillProgressFillBarWidget (Widget)
// 声明/访问一个 SkillProgressFillBarWidget
var widget = root.GetChild("skillProgressFillBarWidget");;
```

## See Also

- [Complete Class Catalog](../catalog)