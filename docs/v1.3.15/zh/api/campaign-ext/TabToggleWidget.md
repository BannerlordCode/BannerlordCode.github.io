<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `TabToggleWidget`
- [← 本领域 / 返回 campaign-ext](./)
- [↑ API 目录](../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# TabToggleWidget

**Namespace:** TaleWorlds.GauntletUI.BaseTypes
**Module:** TaleWorlds.GauntletUI
**Type:** `public class TabToggleWidget : ButtonWidget`
**Base:** `ButtonWidget`
**File:** `TaleWorlds.GauntletUI/TaleWorlds/GauntletUI/BaseTypes/TabToggleWidget.cs`

## 概述

`TabToggleWidget` 是一个 Gauntlet UI 控件——在 Gauntlet XML/.prefab 中使用或代码创建的 UI 元素。继承 Widget 可构建自定义控件；实例经控件树访问。

## 主要属性

| Name | Signature |
|------|-----------|
| `TabControlWidget` | `public TabControl TabControlWidget { get; set; }` |
| `TabName` | `public string TabName { get { return this._tabName; }` |

## 使用示例

```csharp
// TabToggleWidget (Widget) 的典型用法
// 声明/访问一个 TabToggleWidget
var widget = root.GetChild("tabToggleWidget");;
```

## 参见

- [完整类目录](../catalog)