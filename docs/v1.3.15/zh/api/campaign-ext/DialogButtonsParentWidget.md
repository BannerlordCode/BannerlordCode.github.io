<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `DialogButtonsParentWidget`
- [← 本领域 / 返回 campaign-ext](./)
- [↑ API 目录](../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# DialogButtonsParentWidget

**Namespace:** TaleWorlds.GauntletUI.ExtraWidgets
**Module:** TaleWorlds.GauntletUI
**Type:** `public class DialogButtonsParentWidget : Widget`
**Base:** `Widget`
**File:** `TaleWorlds.GauntletUI.ExtraWidgets/DialogButtonsParentWidget.cs`

## 概述

`DialogButtonsParentWidget` 是一个 Gauntlet UI 控件——在 Gauntlet XML/.prefab 中使用或代码创建的 UI 元素。继承 Widget 可构建自定义控件；实例经控件树访问。

## 主要属性

| Name | Signature |
|------|-----------|
| `CancelClickSound` | `public string CancelClickSound { get; set; }` |
| `ConfirmClickSound` | `public string ConfirmClickSound { get; set; }` |
| `ResetClickSound` | `public string ResetClickSound { get; set; }` |
| `CancelButton` | `public ButtonWidget CancelButton { get { return this._cancelButton; }` |
| `ConfirmButton` | `public ButtonWidget ConfirmButton { get { return this._confirmButton; }` |
| `ResetButton` | `public ButtonWidget ResetButton { get { return this._resetButton; }` |

## 使用示例

```csharp
// DialogButtonsParentWidget (Widget) 的典型用法
// 声明/访问一个 DialogButtonsParentWidget
var widget = root.GetChild("dialogButtonsParentWidget");;
```

## 参见

- [完整类目录](../catalog)