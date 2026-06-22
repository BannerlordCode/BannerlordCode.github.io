<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `SkillIconVisualWidget`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# SkillIconVisualWidget

**Namespace:** TaleWorlds.MountAndBlade.GauntletUI.Widgets
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class SkillIconVisualWidget : Widget`
**Base:** `Widget`
**File:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets/SkillIconVisualWidget.cs`

## Overview

`SkillIconVisualWidget` is a Gauntlet UI widget — a UI element used in Gauntlet XML/.prefab or created in code. Subclass Widget to build custom UI elements; access instances via the widget tree.

## Key Properties

| Name | Signature |
|------|-----------|
| `SkillId` | `public string SkillId { get; set; }` |
| `UseSmallVariation` | `public bool UseSmallVariation { get; set; }` |
| `UseSmallestVariation` | `public bool UseSmallestVariation { get; set; }` |

## Usage Example

```csharp
// Typical usage of SkillIconVisualWidget (Widget)
// 声明/访问一个 SkillIconVisualWidget
var widget = root.GetChild("skillIconVisualWidget");;
```

## See Also

- [Complete Class Catalog](../catalog)