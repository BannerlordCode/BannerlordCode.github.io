<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `FloatComparedStateChangerTextWidget`
- [← 本领域 / 返回 mission-ext](./)
- [↑ API 目录](../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# FloatComparedStateChangerTextWidget

**Namespace:** TaleWorlds.MountAndBlade.GauntletUI.Widgets
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class FloatComparedStateChangerTextWidget : TextWidget`
**Base:** `TextWidget`
**File:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets/FloatComparedStateChangerTextWidget.cs`

## 概述

`FloatComparedStateChangerTextWidget` 是一个 Gauntlet UI 控件——在 Gauntlet XML/.prefab 中使用或代码创建的 UI 元素。继承 Widget 可构建自定义控件；实例经控件树访问。

## 主要属性

| Name | Signature |
|------|-----------|
| `ComparisonType` | `public FloatComparedStateChangerTextWidget.ComparisonTypes ComparisonType { get; set; }` |
| `FirstValue` | `public float FirstValue { get; set; }` |
| `SecondValue` | `public float SecondValue { get; set; }` |
| `TrueState` | `public string TrueState { get; set; }` |
| `FalseState` | `public string FalseState { get; set; }` |

## 使用示例

```csharp
// FloatComparedStateChangerTextWidget (Widget) 的典型用法
// 声明/访问一个 FloatComparedStateChangerTextWidget
var widget = root.GetChild("floatComparedStateChangerTextWidget");;
```

## 参见

- [完整类目录](../catalog)