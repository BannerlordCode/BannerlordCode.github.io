<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `ButtonWidget`
- [← 本领域 / 返回 campaign-ext](./)
- [↑ API 目录](../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# ButtonWidget

**Namespace:** TaleWorlds.GauntletUI.BaseTypes
**Module:** TaleWorlds.GauntletUI
**Type:** `public class ButtonWidget : ImageWidget`
**Base:** `ImageWidget`
**File:** `TaleWorlds.GauntletUI/TaleWorlds/GauntletUI/BaseTypes/ButtonWidget.cs`

## 概述

`ButtonWidget` 是一个 Gauntlet UI 控件——在 Gauntlet XML/.prefab 中使用或代码创建的 UI 元素。继承 Widget 可构建自定义控件；实例经控件树访问。

## 主要属性

| Name | Signature |
|------|-----------|
| `ButtonType` | `public ButtonType ButtonType { get { return this._buttonType; }` |
| `IsToggle` | `public bool IsToggle { get { return this.ButtonType == ButtonType.Toggle; }` |
| `IsRadio` | `public bool IsRadio { get { return this.ButtonType == ButtonType.Radio; }` |
| `ToggleIndicator` | `public Widget ToggleIndicator { get { return this._toggleIndicator; }` |
| `IsSelected` | `public bool IsSelected { get { return this._isSelected; }` |
| `DominantSelectedState` | `public bool DominantSelectedState { get { return this._dominantSelectedState; }` |

## 使用示例

```csharp
// ButtonWidget (Widget) 的典型用法
// 声明/访问一个 ButtonWidget
var widget = root.GetChild("buttonWidget");;
```

## 参见

- [完整类目录](../catalog)