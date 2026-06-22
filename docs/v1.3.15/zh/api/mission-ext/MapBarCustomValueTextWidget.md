<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `MapBarCustomValueTextWidget`
- [← 本领域 / 返回 mission-ext](./)
- [↑ API 目录](../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# MapBarCustomValueTextWidget

**Namespace:** TaleWorlds.MountAndBlade.GauntletUI.Widgets.Map.MapBar
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class MapBarCustomValueTextWidget : TextWidget`
**Base:** `TextWidget`
**File:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets/Map/MapBar/MapBarCustomValueTextWidget.cs`

## 概述

`MapBarCustomValueTextWidget` 是一个 Gauntlet UI 控件——在 Gauntlet XML/.prefab 中使用或代码创建的 UI 元素。继承 Widget 可构建自定义控件；实例经控件树访问。

## 主要属性

| Name | Signature |
|------|-----------|
| `ValueAsInt` | `public int ValueAsInt { get; set; }` |
| `IsWarning` | `public bool IsWarning { get; set; }` |
| `NormalColor` | `public Color NormalColor { get; set; }` |
| `WarningColor` | `public Color WarningColor { get; set; }` |

## 使用示例

```csharp
// MapBarCustomValueTextWidget (Widget) 的典型用法
// 声明/访问一个 MapBarCustomValueTextWidget
var widget = root.GetChild("mapBarCustomValueTextWidget");;
```

## 参见

- [完整类目录](../catalog)