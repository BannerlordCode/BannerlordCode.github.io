<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `FloatInputTextWidget`
- [← 本领域 / 返回 campaign-ext](./)
- [↑ API 目录](../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# FloatInputTextWidget

**Namespace:** TaleWorlds.GauntletUI.BaseTypes
**Module:** TaleWorlds.GauntletUI
**Type:** `public class FloatInputTextWidget : EditableTextWidget`
**Base:** `EditableTextWidget`
**File:** `TaleWorlds.GauntletUI/TaleWorlds/GauntletUI/BaseTypes/FloatInputTextWidget.cs`

## 概述

`FloatInputTextWidget` 是一个 Gauntlet UI 控件——在 Gauntlet XML/.prefab 中使用或代码创建的 UI 元素。继承 Widget 可构建自定义控件；实例经控件树访问。

## 主要属性

| Name | Signature |
|------|-----------|
| `EnableClamp` | `public bool EnableClamp { get; set; }` |
| `FloatText` | `public float FloatText { get { return this._floatText; }` |
| `MaxFloat` | `public float MaxFloat { get { return this._maxFloat; }` |
| `MinFloat` | `public float MinFloat { get { return this._minFloat; }` |

## 主要方法

### HandleInput
```csharp
public override void HandleInput(IReadOnlyList<int> lastKeysPressed)
```

### SetAllText
```csharp
public override void SetAllText(string text)
```

## 使用示例

```csharp
// FloatInputTextWidget (Widget) 的典型用法
// 声明/访问一个 FloatInputTextWidget
var widget = root.GetChild("floatInputTextWidget");;
```

## 参见

- [完整类目录](../catalog)