---
title: "EncyclopediaListItemButtonWidget"
---
<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `EncyclopediaListItemButtonWidget`
- [← 本领域 / 返回 mission-ext](./)
- [↑ API 目录](../)
- [🏠 首页 v1.3.15](../../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# EncyclopediaListItemButtonWidget

**Namespace:** TaleWorlds.MountAndBlade.GauntletUI.Widgets.Encyclopedia
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class EncyclopediaListItemButtonWidget : ButtonWidget`
**Base:** `ButtonWidget`
**File:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets/Encyclopedia/EncyclopediaListItemButtonWidget.cs`

## 概述

`EncyclopediaListItemButtonWidget` 是一个 Gauntlet UI 控件——在 Gauntlet XML/.prefab 中使用或代码创建的 UI 元素。继承 Widget 可构建自定义控件；实例经控件树访问。

## 心智模型

把 `EncyclopediaListItemButtonWidget` 当作一个 Widget 型扩展点来理解：先确认谁创建它、谁持有它、谁调用它，再决定是继承、组合还是只读使用。

## 主要属性

| Name | Signature |
|------|-----------|
| `ListItemNameTextWidget` | `public TextWidget ListItemNameTextWidget { get; set; }` |
| `ListComparedValueTextWidget` | `public TextWidget ListComparedValueTextWidget { get; set; }` |
| `InfoAvailableItemNameBrush` | `public Brush InfoAvailableItemNameBrush { get; set; }` |
| `InfoUnvailableItemNameBrush` | `public Brush InfoUnvailableItemNameBrush { get; set; }` |
| `IsInfoAvailable` | `public bool IsInfoAvailable { get; set; }` |
| `ListItemId` | `public string ListItemId { get; set; }` |

## 主要方法

### OnThisLateUpdate
`public void OnThisLateUpdate(float dt)`

**用途 / Purpose:** 当 `this late update` 事件触发时调用此方法。

## 使用示例

```csharp
var widget = new EncyclopediaListItemButtonWidget(context);
```

## 参见

- [完整类目录](../catalog)