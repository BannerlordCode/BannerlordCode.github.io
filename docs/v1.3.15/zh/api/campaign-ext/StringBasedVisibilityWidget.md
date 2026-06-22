<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `StringBasedVisibilityWidget`
- [← 本领域 / 返回 campaign-ext](./)
- [↑ API 目录](../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# StringBasedVisibilityWidget

**Namespace:** TaleWorlds.GauntletUI.ExtraWidgets
**Module:** TaleWorlds.GauntletUI
**Type:** `public class StringBasedVisibilityWidget : Widget`
**Base:** `Widget`
**File:** `TaleWorlds.GauntletUI.ExtraWidgets/StringBasedVisibilityWidget.cs`

## 概述

`StringBasedVisibilityWidget` 是一个 Gauntlet UI 控件——在 Gauntlet XML/.prefab 中使用或代码创建的 UI 元素。继承 Widget 可构建自定义控件；实例经控件树访问。

## 主要属性

| Name | Signature |
|------|-----------|
| `WatchType` | `public StringBasedVisibilityWidget.WatchTypes WatchType { get; set; }` |
| `FirstString` | `public string FirstString { get { return this._firstString; }` |
| `SecondString` | `public string SecondString { get { return this._secondString; }` |

## 使用示例

```csharp
// StringBasedVisibilityWidget (Widget) 的典型用法
// 声明/访问一个 StringBasedVisibilityWidget
var widget = root.GetChild("stringBasedVisibilityWidget");;
```

## 参见

- [完整类目录](../catalog)