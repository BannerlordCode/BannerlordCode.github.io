---
title: "GameOverScreenWidget"
---
<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `GameOverScreenWidget`
- [← 本领域 / 返回 mission-ext](./)
- [↑ API 目录](../)
- [🏠 首页 v1.4.5](../../)
- [⭐ 版本架构](../../architecture/)
<!-- END BREADCRUMB -->
# GameOverScreenWidget

**Namespace:** TaleWorlds.MountAndBlade.GauntletUI.Widgets.GameOver
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class GameOverScreenWidget : Widget`
**Base:** `Widget`
**File:** `Bannerlord.Source/bin/TaleWorlds.MountAndBlade.GauntletUI.Widgets/TaleWorlds.MountAndBlade.GauntletUI.Widgets.GameOver/GameOverScreenWidget.cs`

## 概述

`GameOverScreenWidget` 是一个 Gauntlet UI 控件——在 Gauntlet XML/.prefab 中使用或代码创建的 UI 元素。继承 Widget 可构建自定义控件；实例经控件树访问。

## 心智模型

把 `GameOverScreenWidget` 当作一个 Widget 型扩展点来理解：先确认谁创建它、谁持有它、谁调用它，再决定是继承、组合还是只读使用。

## 主要属性

| Name | Signature |
|------|-----------|
| `ConceptVisualWidget` | `public BrushWidget ConceptVisualWidget { get; set; }` |
| `BannerBrushWidget` | `public BrushWidget BannerBrushWidget { get; set; }` |
| `BannerFrameBrushWidget1` | `public BrushWidget BannerFrameBrushWidget1 { get; set; }` |
| `BannerFrameBrushWidget2` | `public BrushWidget BannerFrameBrushWidget2 { get; set; }` |
| `GameOverReason` | `public string GameOverReason { get; set; }` |

## 使用示例

```csharp
var widget = new GameOverScreenWidget(context);
```

## 参见

- [完整类目录](../catalog)