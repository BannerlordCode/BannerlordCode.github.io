---
title: "ContextMenuItemWidget"
---
<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `ContextMenuItemWidget`
- [← 本领域 / 返回 mission-ext](./)
- [↑ API 目录](../)
- [🏠 首页 v1.4.5](../../)
- [⭐ 版本架构](../../architecture/)
<!-- END BREADCRUMB -->
# ContextMenuItemWidget

**Namespace:** TaleWorlds.MountAndBlade.GauntletUI.Widgets
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class ContextMenuItemWidget : Widget`
**Base:** `Widget`
**File:** `Bannerlord.Source/bin/TaleWorlds.MountAndBlade.GauntletUI.Widgets/TaleWorlds.MountAndBlade.GauntletUI.Widgets/ContextMenuItemWidget.cs`

## 概述

`ContextMenuItemWidget` 是一个 Gauntlet UI 控件——在 Gauntlet XML/.prefab 中使用或代码创建的 UI 元素。继承 Widget 可构建自定义控件；实例经控件树访问。

## 心智模型

把 `ContextMenuItemWidget` 当作一个 Widget 型扩展点来理解：先确认谁创建它、谁持有它、谁调用它，再决定是继承、组合还是只读使用。

## 主要属性

| Name | Signature |
|------|-----------|
| `TypeIconWidget` | `public Widget TypeIconWidget { get; set; }` |
| `ActionButtonWidget` | `public ButtonWidget ActionButtonWidget { get; set; }` |
| `TypeIconState` | `public string TypeIconState { get; set; }` |
| `CanBeUsed` | `public bool CanBeUsed { get; set; }` |

## 使用示例

```csharp
var widget = new ContextMenuItemWidget(context);
```

## 参见

- [完整类目录](../catalog)