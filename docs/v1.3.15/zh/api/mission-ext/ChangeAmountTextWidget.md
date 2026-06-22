<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `ChangeAmountTextWidget`
- [← 本领域 / 返回 mission-ext](./)
- [↑ API 目录](../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# ChangeAmountTextWidget

**Namespace:** TaleWorlds.MountAndBlade.GauntletUI.Widgets
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class ChangeAmountTextWidget : TextWidget`
**Base:** `TextWidget`
**File:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets/ChangeAmountTextWidget.cs`

## 概述

`ChangeAmountTextWidget` 是一个 Gauntlet UI 控件——在 Gauntlet XML/.prefab 中使用或代码创建的 UI 元素。继承 Widget 可构建自定义控件；实例经控件树访问。

## 主要属性

| Name | Signature |
|------|-----------|
| `Amount` | `public int Amount { get; set; }` |
| `UseParentheses` | `public bool UseParentheses { get; set; }` |
| `ShouldBeVisible` | `public bool ShouldBeVisible { get; set; }` |
| `NegativeBrushName` | `public string NegativeBrushName { get; set; }` |
| `PositiveBrushName` | `public string PositiveBrushName { get; set; }` |

## 使用示例

```csharp
// ChangeAmountTextWidget (Widget) 的典型用法
// 声明/访问一个 ChangeAmountTextWidget
var widget = root.GetChild("changeAmountTextWidget");;
```

## 参见

- [完整类目录](../catalog)