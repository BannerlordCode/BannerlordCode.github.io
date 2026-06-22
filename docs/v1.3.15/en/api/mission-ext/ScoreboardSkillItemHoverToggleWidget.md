<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `ScoreboardSkillItemHoverToggleWidget`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# ScoreboardSkillItemHoverToggleWidget

**Namespace:** TaleWorlds.MountAndBlade.GauntletUI.Widgets.Scoreboard
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class ScoreboardSkillItemHoverToggleWidget : HoverToggleWidget`
**Base:** `HoverToggleWidget`
**File:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets/Scoreboard/ScoreboardSkillItemHoverToggleWidget.cs`

## Overview

`ScoreboardSkillItemHoverToggleWidget` is a Gauntlet UI widget — a UI element used in Gauntlet XML/.prefab or created in code. Subclass Widget to build custom UI elements; access instances via the widget tree.

## Key Properties

| Name | Signature |
|------|-----------|
| `SkillsShowWidget` | `public ScoreboardGainedSkillsListPanel SkillsShowWidget { get; set; }` |
| `GainedSkillsList` | `public ListPanel GainedSkillsList { get; set; }` |

## Key Methods

### GetAllSkillWidgets
```csharp
public List<Widget> GetAllSkillWidgets()
```

## Usage Example

```csharp
// Typical usage of ScoreboardSkillItemHoverToggleWidget (Widget)
// 声明/访问一个 ScoreboardSkillItemHoverToggleWidget
var widget = root.GetChild("scoreboardSkillItemHoverToggleWidget");;
```

## See Also

- [Complete Class Catalog](../catalog)