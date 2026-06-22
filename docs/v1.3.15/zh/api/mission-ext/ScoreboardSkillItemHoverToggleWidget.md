<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `ScoreboardSkillItemHoverToggleWidget`
- [← 本领域 / 返回 mission-ext](./)
- [↑ API 目录](../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# ScoreboardSkillItemHoverToggleWidget

**Namespace:** TaleWorlds.MountAndBlade.GauntletUI.Widgets.Scoreboard
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class ScoreboardSkillItemHoverToggleWidget : HoverToggleWidget`
**Base:** `HoverToggleWidget`
**File:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets/Scoreboard/ScoreboardSkillItemHoverToggleWidget.cs`

## 概述

`ScoreboardSkillItemHoverToggleWidget` 是一个 Gauntlet UI 控件——在 Gauntlet XML/.prefab 中使用或代码创建的 UI 元素。继承 Widget 可构建自定义控件；实例经控件树访问。

## 主要属性

| Name | Signature |
|------|-----------|
| `SkillsShowWidget` | `public ScoreboardGainedSkillsListPanel SkillsShowWidget { get; set; }` |
| `GainedSkillsList` | `public ListPanel GainedSkillsList { get; set; }` |

## 主要方法

### GetAllSkillWidgets
```csharp
public List<Widget> GetAllSkillWidgets()
```

## 使用示例

```csharp
// ScoreboardSkillItemHoverToggleWidget (Widget) 的典型用法
// 声明/访问一个 ScoreboardSkillItemHoverToggleWidget
var widget = root.GetChild("scoreboardSkillItemHoverToggleWidget");;
```

## 参见

- [完整类目录](../catalog)