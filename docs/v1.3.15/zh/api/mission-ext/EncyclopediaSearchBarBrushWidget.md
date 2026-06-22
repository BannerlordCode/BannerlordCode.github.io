<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `EncyclopediaSearchBarBrushWidget`
- [← 本领域 / 返回 mission-ext](./)
- [↑ API 目录](../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# EncyclopediaSearchBarBrushWidget

**Namespace:** TaleWorlds.MountAndBlade.GauntletUI.Widgets.Encyclopedia
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class EncyclopediaSearchBarBrushWidget : BrushWidget`
**Base:** `BrushWidget`
**File:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets/Encyclopedia/EncyclopediaSearchBarBrushWidget.cs`

## 概述

`EncyclopediaSearchBarBrushWidget` 是一个 Gauntlet UI 控件——在 Gauntlet XML/.prefab 中使用或代码创建的 UI 元素。继承 Widget 可构建自定义控件；实例经控件树访问。

## 主要属性

| Name | Signature |
|------|-----------|
| `ShowResults` | `public bool ShowResults { get; set; }` |
| `SearchInputWidget` | `public EditableTextWidget SearchInputWidget { get; set; }` |
| `SearchResultPanel` | `public ScrollablePanel SearchResultPanel { get; set; }` |
| `MinCharAmountToShowResults` | `public int MinCharAmountToShowResults { get; set; }` |

## 使用示例

```csharp
// EncyclopediaSearchBarBrushWidget (Widget) 的典型用法
// 声明/访问一个 EncyclopediaSearchBarBrushWidget
var widget = root.GetChild("encyclopediaSearchBarBrushWidget");;
```

## 参见

- [完整类目录](../catalog)