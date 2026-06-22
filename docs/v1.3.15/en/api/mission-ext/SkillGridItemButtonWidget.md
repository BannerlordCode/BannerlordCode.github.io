<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `SkillGridItemButtonWidget`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# SkillGridItemButtonWidget

**Namespace:** TaleWorlds.MountAndBlade.GauntletUI.Widgets.CharacterDeveloper
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class SkillGridItemButtonWidget : ButtonWidget`
**Base:** `ButtonWidget`
**File:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets/CharacterDeveloper/SkillGridItemButtonWidget.cs`

## Overview

`SkillGridItemButtonWidget` is a Gauntlet UI widget — a UI element used in Gauntlet XML/.prefab or created in code. Subclass Widget to build custom UI elements; access instances via the widget tree.

## Key Properties

| Name | Signature |
|------|-----------|
| `CannotLearnBrush` | `public Brush CannotLearnBrush { get; set; }` |
| `CanLearnBrush` | `public Brush CanLearnBrush { get; set; }` |
| `FocusLevelWidget` | `public Widget FocusLevelWidget { get; set; }` |
| `CanLearnSkill` | `public bool CanLearnSkill { get; set; }` |
| `CurrentFocusLevel` | `public int CurrentFocusLevel { get; set; }` |

## Usage Example

```csharp
// Typical usage of SkillGridItemButtonWidget (Widget)
// 声明/访问一个 SkillGridItemButtonWidget
var widget = root.GetChild("skillGridItemButtonWidget");;
```

## See Also

- [Complete Class Catalog](../catalog)