---
title: "ScoreboardBattleRewardsWidget"
---
<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `ScoreboardBattleRewardsWidget`
- [← 本领域 / 返回 mission-ext](./)
- [↑ API 目录](../)
- [🏠 首页 v1.4.5](../../)
- [⭐ 版本架构](../../architecture/)
<!-- END BREADCRUMB -->
# ScoreboardBattleRewardsWidget

**Namespace:** TaleWorlds.MountAndBlade.GauntletUI.Widgets.Scoreboard
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class ScoreboardBattleRewardsWidget`
**Base:** 无
**File:** `Bannerlord.Source/bin/TaleWorlds.MountAndBlade.GauntletUI.Widgets/TaleWorlds.MountAndBlade.GauntletUI.Widgets.Scoreboard/ScoreboardBattleRewardsWidget.cs`

## 概述

`ScoreboardBattleRewardsWidget` 是一个 Gauntlet UI 控件——在 Gauntlet XML/.prefab 中使用或代码创建的 UI 元素。继承 Widget 可构建自定义控件；实例经控件树访问。

## 心智模型

把 `ScoreboardBattleRewardsWidget` 当作一个 Widget 型扩展点来理解：先确认谁创建它、谁持有它、谁调用它，再决定是继承、组合还是只读使用。

## 主要属性

| Name | Signature |
|------|-----------|
| `AnimationDelay` | `public float AnimationDelay { get; set; }` |
| `AnimationInterval` | `public float AnimationInterval { get; set; }` |
| `ItemContainer` | `public Widget ItemContainer { get; set; }` |

## 主要方法

### ScoreboardBattleRewardsWidget
`public class ScoreboardBattleRewardsWidget(UIContext context)`

**用途 / Purpose:** 处理 `scoreboard battle rewards widget` 相关逻辑。

### StartAnimation
`public void StartAnimation()`

**用途 / Purpose:** 处理 `start animation` 相关逻辑。

### Reset
`public void Reset()`

**用途 / Purpose:** 将 `reset` 重置为初始状态。

## 使用示例

```csharp
var widget = new ScoreboardBattleRewardsWidget(context);
```

## 参见

- [完整类目录](../catalog)