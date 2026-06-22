<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `IntegerInputTextWidget`
- [← 本领域 / 返回 campaign-ext](./)
- [↑ API 目录](../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# IntegerInputTextWidget

**Namespace:** TaleWorlds.GauntletUI.BaseTypes
**Module:** TaleWorlds.GauntletUI
**Type:** `public class IntegerInputTextWidget : EditableTextWidget`
**Base:** `EditableTextWidget`
**File:** `TaleWorlds.GauntletUI/TaleWorlds/GauntletUI/BaseTypes/IntegerInputTextWidget.cs`

## 概述

`IntegerInputTextWidget` 是一个 Gauntlet UI 控件——在 Gauntlet XML/.prefab 中使用或代码创建的 UI 元素。继承 Widget 可构建自定义控件；实例经控件树访问。

## 主要属性

| Name | Signature |
|------|-----------|
| `EnableClamp` | `public bool EnableClamp { get; set; }` |
| `IntText` | `public int IntText { get { return this._intText; }` |
| `MaxInt` | `public int MaxInt { get { return this._maxInt; }` |
| `MinInt` | `public int MinInt { get { return this._minInt; }` |

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
// IntegerInputTextWidget (Widget) 的典型用法
// 声明/访问一个 IntegerInputTextWidget
var widget = root.GetChild("integerInputTextWidget");;
```

## 参见

- [完整类目录](../catalog)