<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `NumericUpDownWidget`
- [← 本领域 / 返回 mission-ext](./)
- [↑ API 目录](../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# NumericUpDownWidget

**Namespace:** TaleWorlds.MountAndBlade.GauntletUI.Widgets
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class NumericUpDownWidget : Widget`
**Base:** `Widget`
**File:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets/NumericUpDownWidget.cs`

## 概述

`NumericUpDownWidget` 是一个 Gauntlet UI 控件——在 Gauntlet XML/.prefab 中使用或代码创建的 UI 元素。继承 Widget 可构建自定义控件；实例经控件树访问。

## 主要属性

| Name | Signature |
|------|-----------|
| `ShowOneAdded` | `public bool ShowOneAdded { get; set; }` |
| `IntValue` | `public int IntValue { get; set; }` |
| `Value` | `public float Value { get; set; }` |
| `MinValue` | `public float MinValue { get; set; }` |
| `MaxValue` | `public float MaxValue { get; set; }` |
| `TextWidget` | `public TextWidget TextWidget { get; set; }` |
| `UpButton` | `public ButtonWidget UpButton { get; set; }` |
| `DownButton` | `public ButtonWidget DownButton { get; set; }` |

## 使用示例

```csharp
// NumericUpDownWidget (Widget) 的典型用法
// 声明/访问一个 NumericUpDownWidget
var widget = root.GetChild("numericUpDownWidget");;
```

## 参见

- [完整类目录](../catalog)