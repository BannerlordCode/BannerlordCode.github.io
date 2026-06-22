<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `ToggleButtonWidget`
- [← 本领域 / 返回 mission-ext](./)
- [↑ API 目录](../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# ToggleButtonWidget

**Namespace:** TaleWorlds.MountAndBlade.GauntletUI.Widgets
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class ToggleButtonWidget : ButtonWidget`
**Base:** `ButtonWidget`
**File:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets/ToggleButtonWidget.cs`

## 概述

`ToggleButtonWidget` 是一个 Gauntlet UI 控件——在 Gauntlet XML/.prefab 中使用或代码创建的 UI 元素。继承 Widget 可构建自定义控件；实例经控件树访问。

## 主要属性

| Name | Signature |
|------|-----------|
| `IsTargetVisible` | `public bool IsTargetVisible { get; set; }` |
| `WidgetToClose` | `public Widget WidgetToClose { get; set; }` |

## 使用示例

```csharp
// ToggleButtonWidget (Widget) 的典型用法
// 声明/访问一个 ToggleButtonWidget
var widget = root.GetChild("toggleButtonWidget");;
```

## 参见

- [完整类目录](../catalog)