<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `AutoHideTextWidget`
- [← 本领域 / 返回 mission-ext](./)
- [↑ API 目录](../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# AutoHideTextWidget

**Namespace:** TaleWorlds.MountAndBlade.GauntletUI.Widgets
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class AutoHideTextWidget : TextWidget`
**Base:** `TextWidget`
**File:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets/AutoHideTextWidget.cs`

## 概述

`AutoHideTextWidget` 是一个 Gauntlet UI 控件——在 Gauntlet XML/.prefab 中使用或代码创建的 UI 元素。继承 Widget 可构建自定义控件；实例经控件树访问。

## 主要属性

| Name | Signature |
|------|-----------|
| `WidgetToHideIfEmpty` | `public Widget WidgetToHideIfEmpty { get; set; }` |

## 使用示例

```csharp
// AutoHideTextWidget (Widget) 的典型用法
// 声明/访问一个 AutoHideTextWidget
var widget = root.GetChild("autoHideTextWidget");;
```

## 参见

- [完整类目录](../catalog)