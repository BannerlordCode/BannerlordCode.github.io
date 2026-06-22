<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `GameOverScreenWidget`
- [← 本领域 / 返回 mission-ext](./)
- [↑ API 目录](../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# GameOverScreenWidget

**Namespace:** TaleWorlds.MountAndBlade.GauntletUI.Widgets.GameOver
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class GameOverScreenWidget : Widget`
**Base:** `Widget`
**File:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets/GameOver/GameOverScreenWidget.cs`

## 概述

`GameOverScreenWidget` 是一个 Gauntlet UI 控件——在 Gauntlet XML/.prefab 中使用或代码创建的 UI 元素。继承 Widget 可构建自定义控件；实例经控件树访问。

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
// GameOverScreenWidget (Widget) 的典型用法
// 声明/访问一个 GameOverScreenWidget
var widget = root.GetChild("gameOverScreenWidget");;
```

## 参见

- [完整类目录](../catalog)