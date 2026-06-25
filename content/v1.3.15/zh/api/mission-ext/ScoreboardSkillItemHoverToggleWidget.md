---
title: "ScoreboardSkillItemHoverToggleWidget"
---
<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `ScoreboardSkillItemHoverToggleWidget`
- [← 本领域 / 返回 mission-ext](./)
- [↑ API 目录](../)
- [🏠 首页 v1.3.15](../../)
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

## 心智模型

把 `ScoreboardSkillItemHoverToggleWidget` 当作一个 Widget 型扩展点来理解：先确认谁创建它、谁持有它、谁调用它，再决定是继承、组合还是只读使用。

## 主要属性

| Name | Signature |
|------|-----------|
| `SkillsShowWidget` | `public ScoreboardGainedSkillsListPanel SkillsShowWidget { get; set; }` |
| `GainedSkillsList` | `public ListPanel GainedSkillsList { get; set; }` |

## 主要方法

### GetAllSkillWidgets
`public List<Widget> GetAllSkillWidgets()`

**用途 / Purpose:** 获取 `all skill widgets` 的当前值。

## 使用示例

```csharp
var widget = new ScoreboardSkillItemHoverToggleWidget(context);
```

## 参见

- [完整类目录](../catalog)