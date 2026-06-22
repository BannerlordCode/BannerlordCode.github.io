<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `ParallaxItemBrushWidget`
- [← 本领域 / 返回 mission-ext](./)
- [↑ API 目录](../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# ParallaxItemBrushWidget

**Namespace:** TaleWorlds.MountAndBlade.GauntletUI.Widgets
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class ParallaxItemBrushWidget : BrushWidget`
**Base:** `BrushWidget`
**File:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets/ParallaxItemBrushWidget.cs`

## 概述

`ParallaxItemBrushWidget` 是一个 Gauntlet UI 控件——在 Gauntlet XML/.prefab 中使用或代码创建的 UI 元素。继承 Widget 可构建自定义控件；实例经控件树访问。

## 主要属性

| Name | Signature |
|------|-----------|
| `IsEaseInOutEnabled` | `public bool IsEaseInOutEnabled { get; set; }` |
| `OneDirectionDuration` | `public float OneDirectionDuration { get; set; }` |
| `OneDirectionDistance` | `public float OneDirectionDistance { get; set; }` |
| `InitialDirection` | `public ParallaxItemBrushWidget.ParallaxMovementDirection InitialDirection { get; set; }` |

## 使用示例

```csharp
// ParallaxItemBrushWidget (Widget) 的典型用法
// 声明/访问一个 ParallaxItemBrushWidget
var widget = root.GetChild("parallaxItemBrushWidget");;
```

## 参见

- [完整类目录](../catalog)