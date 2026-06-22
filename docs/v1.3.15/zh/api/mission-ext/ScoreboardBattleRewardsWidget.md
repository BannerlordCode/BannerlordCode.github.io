<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `ScoreboardBattleRewardsWidget`
- [← 本领域 / 返回 mission-ext](./)
- [↑ API 目录](../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# ScoreboardBattleRewardsWidget

**Namespace:** TaleWorlds.MountAndBlade.GauntletUI.Widgets.Scoreboard
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class ScoreboardBattleRewardsWidget : Widget`
**Base:** `Widget`
**File:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets/Scoreboard/ScoreboardBattleRewardsWidget.cs`

## 概述

`ScoreboardBattleRewardsWidget` 是一个 Gauntlet UI 控件——在 Gauntlet XML/.prefab 中使用或代码创建的 UI 元素。继承 Widget 可构建自定义控件；实例经控件树访问。

## 主要属性

| Name | Signature |
|------|-----------|
| `AnimationDelay` | `public float AnimationDelay { get; set; }` |
| `AnimationInterval` | `public float AnimationInterval { get; set; }` |
| `ItemContainer` | `public Widget ItemContainer { get; set; }` |

## 主要方法

### StartAnimation
```csharp
public void StartAnimation()
```

### Reset
```csharp
public void Reset()
```

## 使用示例

```csharp
// ScoreboardBattleRewardsWidget (Widget) 的典型用法
// 声明/访问一个 ScoreboardBattleRewardsWidget
var widget = root.GetChild("scoreboardBattleRewardsWidget");;
```

## 参见

- [完整类目录](../catalog)