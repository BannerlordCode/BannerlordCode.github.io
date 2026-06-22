<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `EncyclopediaUnitTreeNodeItemBrushWidget`
- [← 本领域 / 返回 mission-ext](./)
- [↑ API 目录](../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# EncyclopediaUnitTreeNodeItemBrushWidget

**Namespace:** TaleWorlds.MountAndBlade.GauntletUI.Widgets.Encyclopedia
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class EncyclopediaUnitTreeNodeItemBrushWidget : BrushWidget`
**Base:** `BrushWidget`
**File:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets/Encyclopedia/EncyclopediaUnitTreeNodeItemBrushWidget.cs`

## 概述

`EncyclopediaUnitTreeNodeItemBrushWidget` 是一个 Gauntlet UI 控件——在 Gauntlet XML/.prefab 中使用或代码创建的 UI 元素。继承 Widget 可构建自定义控件；实例经控件树访问。

## 主要属性

| Name | Signature |
|------|-----------|
| `IsAlternativeUpgrade` | `public bool IsAlternativeUpgrade { get; set; }` |
| `ChildContainer` | `public ListPanel ChildContainer { get; set; }` |
| `LineContainer` | `public Widget LineContainer { get; set; }` |
| `LineBrush` | `public Brush LineBrush { get; set; }` |
| `AlternateLineBrush` | `public Brush AlternateLineBrush { get; set; }` |

## 主要方法

### OnListItemAdded
```csharp
public void OnListItemAdded(Widget parentWidget, Widget addedWidget)
```

## 使用示例

```csharp
// EncyclopediaUnitTreeNodeItemBrushWidget (Widget) 的典型用法
// 声明/访问一个 EncyclopediaUnitTreeNodeItemBrushWidget
var widget = root.GetChild("encyclopediaUnitTreeNodeItemBrushWidget");;
```

## 参见

- [完整类目录](../catalog)