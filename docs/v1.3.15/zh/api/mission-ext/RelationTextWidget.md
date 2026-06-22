<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `RelationTextWidget`
- [← 本领域 / 返回 mission-ext](./)
- [↑ API 目录](../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# RelationTextWidget

**Namespace:** TaleWorlds.MountAndBlade.GauntletUI.Widgets
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class RelationTextWidget : TextWidget`
**Base:** `TextWidget`
**File:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets/RelationTextWidget.cs`

## 概述

`RelationTextWidget` 是一个 Gauntlet UI 控件——在 Gauntlet XML/.prefab 中使用或代码创建的 UI 元素。继承 Widget 可构建自定义控件；实例经控件树访问。

## 主要属性

| Name | Signature |
|------|-----------|
| `Amount` | `public int Amount { get; set; }` |
| `ZeroColor` | `public Color ZeroColor { get; set; }` |
| `PositiveColor` | `public Color PositiveColor { get; set; }` |
| `NegativeColor` | `public Color NegativeColor { get; set; }` |

## 使用示例

```csharp
// RelationTextWidget (Widget) 的典型用法
// 声明/访问一个 RelationTextWidget
var widget = root.GetChild("relationTextWidget");;
```

## 参见

- [完整类目录](../catalog)