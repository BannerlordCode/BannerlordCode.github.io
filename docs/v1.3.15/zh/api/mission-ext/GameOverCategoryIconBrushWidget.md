<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `GameOverCategoryIconBrushWidget`
- [← 本领域 / 返回 mission-ext](./)
- [↑ API 目录](../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# GameOverCategoryIconBrushWidget

**Namespace:** TaleWorlds.MountAndBlade.GauntletUI.Widgets.GameOver
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class GameOverCategoryIconBrushWidget : BrushWidget`
**Base:** `BrushWidget`
**File:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets/GameOver/GameOverCategoryIconBrushWidget.cs`

## 概述

`GameOverCategoryIconBrushWidget` 是一个 Gauntlet UI 控件——在 Gauntlet XML/.prefab 中使用或代码创建的 UI 元素。继承 Widget 可构建自定义控件；实例经控件树访问。

## 主要属性

| Name | Signature |
|------|-----------|
| `CategoryID` | `public string CategoryID { get; set; }` |

## 使用示例

```csharp
// GameOverCategoryIconBrushWidget (Widget) 的典型用法
// 声明/访问一个 GameOverCategoryIconBrushWidget
var widget = root.GetChild("gameOverCategoryIconBrushWidget");;
```

## 参见

- [完整类目录](../catalog)