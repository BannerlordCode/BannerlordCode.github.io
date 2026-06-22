<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `IconBrushWidget`
- [← 本领域 / 返回 mission-ext](./)
- [↑ API 目录](../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# IconBrushWidget

**Namespace:** TaleWorlds.MountAndBlade.GauntletUI.Widgets
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class IconBrushWidget : ButtonWidget`
**Base:** `ButtonWidget`
**File:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets/IconBrushWidget.cs`

## 概述

`IconBrushWidget` 是一个 Gauntlet UI 控件——在 Gauntlet XML/.prefab 中使用或代码创建的 UI 元素。继承 Widget 可构建自定义控件；实例经控件树访问。

## 主要属性

| Name | Signature |
|------|-----------|
| `IconBrush` | `public Brush IconBrush { get; set; }` |
| `IconID` | `public string IconID { get; set; }` |
| `UseStylesFromSourceIcon` | `public bool UseStylesFromSourceIcon { get; set; }` |
| `UseIconSize` | `public bool UseIconSize { get; set; }` |

## 使用示例

```csharp
// IconBrushWidget (Widget) 的典型用法
// 声明/访问一个 IconBrushWidget
var widget = root.GetChild("iconBrushWidget");;
```

## 参见

- [完整类目录](../catalog)