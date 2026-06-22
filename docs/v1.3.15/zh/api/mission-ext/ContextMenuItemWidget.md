<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `ContextMenuItemWidget`
- [← 本领域 / 返回 mission-ext](./)
- [↑ API 目录](../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# ContextMenuItemWidget

**Namespace:** TaleWorlds.MountAndBlade.GauntletUI.Widgets
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class ContextMenuItemWidget : Widget`
**Base:** `Widget`
**File:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets/ContextMenuItemWidget.cs`

## 概述

`ContextMenuItemWidget` 是一个 Gauntlet UI 控件——在 Gauntlet XML/.prefab 中使用或代码创建的 UI 元素。继承 Widget 可构建自定义控件；实例经控件树访问。

## 主要属性

| Name | Signature |
|------|-----------|
| `TypeIconWidget` | `public Widget TypeIconWidget { get; set; }` |
| `ActionButtonWidget` | `public ButtonWidget ActionButtonWidget { get; set; }` |
| `TypeIconState` | `public string TypeIconState { get; set; }` |
| `CanBeUsed` | `public bool CanBeUsed { get; set; }` |

## 使用示例

```csharp
// ContextMenuItemWidget (Widget) 的典型用法
// 声明/访问一个 ContextMenuItemWidget
var widget = root.GetChild("contextMenuItemWidget");;
```

## 参见

- [完整类目录](../catalog)