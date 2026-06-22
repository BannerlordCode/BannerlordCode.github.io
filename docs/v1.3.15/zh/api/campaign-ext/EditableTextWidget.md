<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `EditableTextWidget`
- [← 本领域 / 返回 campaign-ext](./)
- [↑ API 目录](../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# EditableTextWidget

**Namespace:** TaleWorlds.GauntletUI.BaseTypes
**Module:** TaleWorlds.GauntletUI
**Type:** `public class EditableTextWidget : BrushWidget`
**Base:** `BrushWidget`
**File:** `TaleWorlds.GauntletUI/TaleWorlds/GauntletUI/BaseTypes/EditableTextWidget.cs`

## 概述

`EditableTextWidget` 是一个 Gauntlet UI 控件——在 Gauntlet XML/.prefab 中使用或代码创建的 UI 元素。继承 Widget 可构建自定义控件；实例经控件树访问。

## 主要属性

| Name | Signature |
|------|-----------|
| `MaxLength` | `public int MaxLength { get; set; }` |
| `IsObfuscationEnabled` | `public bool IsObfuscationEnabled { get { return this._isObfuscationEnabled; }` |
| `DefaultSearchText` | `public string DefaultSearchText { get; set; }` |
| `RealText` | `public string RealText { get { return this._realText; }` |
| `KeyboardInfoText` | `public string KeyboardInfoText { get { return this._keyboardInfoText; }` |
| `Text` | `public string Text { get { return this._editableText.VisibleText; }` |

## 主要方法

### HandleInput
```csharp
public override void HandleInput(IReadOnlyList<int> lastKeysPressed)
```

### SetAllText
```csharp
public virtual void SetAllText(string text)
```

## 使用示例

```csharp
// EditableTextWidget (Widget) 的典型用法
// 声明/访问一个 EditableTextWidget
var widget = root.GetChild("editableTextWidget");;
```

## 参见

- [完整类目录](../catalog)