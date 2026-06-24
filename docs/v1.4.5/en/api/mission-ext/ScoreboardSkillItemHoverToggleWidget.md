<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `ScoreboardSkillItemHoverToggleWidget`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.4.5](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# ScoreboardSkillItemHoverToggleWidget

**Namespace:** TaleWorlds.MountAndBlade.GauntletUI.Widgets.Scoreboard
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class ScoreboardSkillItemHoverToggleWidget : HoverToggleWidget`
**Base:** `HoverToggleWidget`
**File:** `Bannerlord.Source/bin/TaleWorlds.MountAndBlade.GauntletUI.Widgets/TaleWorlds.MountAndBlade.GauntletUI.Widgets.Scoreboard/ScoreboardSkillItemHoverToggleWidget.cs`

## Overview

`ScoreboardSkillItemHoverToggleWidget` is a Gauntlet UI widget — a UI element used in Gauntlet XML/.prefab or created in code. Subclass Widget to build custom UI elements; access instances via the widget tree.

## Mental Model

Treat `ScoreboardSkillItemHoverToggleWidget` as a Widget-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Properties

| Name | Signature |
|------|-----------|
| `SkillsShowWidget` | `public ScoreboardGainedSkillsListPanel SkillsShowWidget { get; set; }` |
| `GainedSkillsList` | `public ListPanel GainedSkillsList { get; set; }` |

## Key Methods

### GetAllSkillWidgets
`public List<Widget> GetAllSkillWidgets()`

**Purpose:** Gets the current value of `all skill widgets`.

## Usage Example

```csharp
var widget = new ScoreboardSkillItemHoverToggleWidget(context);
```

## See Also

- [Complete Class Catalog](../catalog)