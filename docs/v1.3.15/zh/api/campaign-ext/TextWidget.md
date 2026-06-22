<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `TextWidget`
- [← 本领域 / 返回 campaign-ext](./)
- [↑ API 目录](../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# TextWidget

**Namespace:** TaleWorlds.GauntletUI.BaseTypes
**Module:** TaleWorlds.GauntletUI
**Type:** `public class TextWidget : ImageWidget`
**Base:** `ImageWidget`
**File:** `TaleWorlds.GauntletUI/TaleWorlds/GauntletUI/BaseTypes/TextWidget.cs`

## 概述

`TextWidget` 是一个 Gauntlet UI 控件——在 Gauntlet XML/.prefab 中使用或代码创建的 UI 元素。继承 Widget 可构建自定义控件；实例经控件树访问。

## 主要属性

| Name | Signature |
|------|-----------|
| `AutoHideIfEmpty` | `public bool AutoHideIfEmpty { get { return this._autoHideIfEmpty; }` |
| `Text` | `public string Text { get { return this._text.Value; }` |
| `IntText` | `public int IntText { get { int num; if (int.TryParse(this._text.Value, out num)) { return num; }` |
| `FloatText` | `public float FloatText { get { float num; if (float.TryParse(this._text.Value, out num)) { return num; }` |
| `CanBreakWords` | `public bool CanBreakWords { get { return this._canBreakWords; }` |

## 使用示例

```csharp
// TextWidget (Widget) 的典型用法
// 声明/访问一个 TextWidget
var widget = root.GetChild("textWidget");;
```

## 参见

- [完整类目录](../catalog)