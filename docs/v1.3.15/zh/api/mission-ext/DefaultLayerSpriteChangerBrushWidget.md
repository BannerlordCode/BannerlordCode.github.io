<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `DefaultLayerSpriteChangerBrushWidget`
- [← 本领域 / 返回 mission-ext](./)
- [↑ API 目录](../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# DefaultLayerSpriteChangerBrushWidget

**Namespace:** TaleWorlds.MountAndBlade.GauntletUI.Widgets
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class DefaultLayerSpriteChangerBrushWidget : BrushWidget`
**Base:** `BrushWidget`
**File:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets/DefaultLayerSpriteChangerBrushWidget.cs`

## 概述

`DefaultLayerSpriteChangerBrushWidget` 是一个 Gauntlet UI 控件——在 Gauntlet XML/.prefab 中使用或代码创建的 UI 元素。继承 Widget 可构建自定义控件；实例经控件树访问。

## 主要属性

| Name | Signature |
|------|-----------|
| `SpriteBrush` | `public Brush SpriteBrush { get; set; }` |
| `SpriteBrushLayerName` | `public string SpriteBrushLayerName { get; set; }` |

## 使用示例

```csharp
// DefaultLayerSpriteChangerBrushWidget (Widget) 的典型用法
// 声明/访问一个 DefaultLayerSpriteChangerBrushWidget
var widget = root.GetChild("defaultLayerSpriteChangerBrushWidget");;
```

## 参见

- [完整类目录](../catalog)