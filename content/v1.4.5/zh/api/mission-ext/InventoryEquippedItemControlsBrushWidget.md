---
title: "InventoryEquippedItemControlsBrushWidget"
---
<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `InventoryEquippedItemControlsBrushWidget`
- [← 本领域 / 返回 mission-ext](./)
- [↑ API 目录](../)
- [🏠 首页 v1.4.5](../../)
- [⭐ 版本架构](../../architecture/)
<!-- END BREADCRUMB -->
# InventoryEquippedItemControlsBrushWidget

**Namespace:** TaleWorlds.MountAndBlade.GauntletUI.Widgets.Inventory
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class InventoryEquippedItemControlsBrushWidget : BrushWidget`
**Base:** `BrushWidget`
**File:** `Bannerlord.Source/bin/TaleWorlds.MountAndBlade.GauntletUI.Widgets/TaleWorlds.MountAndBlade.GauntletUI.Widgets.Inventory/InventoryEquippedItemControlsBrushWidget.cs`

## 概述

`InventoryEquippedItemControlsBrushWidget` 是一个 Gauntlet UI 控件——在 Gauntlet XML/.prefab 中使用或代码创建的 UI 元素。继承 Widget 可构建自定义控件；实例经控件树访问。

## 心智模型

把 `InventoryEquippedItemControlsBrushWidget` 当作一个 Widget 型扩展点来理解：先确认谁创建它、谁持有它、谁调用它，再决定是继承、组合还是只读使用。

## 主要属性

| Name | Signature |
|------|-----------|
| `ForcedScopeCollection` | `public NavigationForcedScopeCollectionTargeter ForcedScopeCollection { get; set; }` |
| `NavigationScope` | `public NavigationScopeTargeter NavigationScope { get; set; }` |
| `ItemWidget` | `public InventoryItemButtonWidget ItemWidget { get; set; }` |

## 主要方法

### ButtonClickEventHandler
`public delegate void ButtonClickEventHandler(Widget itemWidget)`

**用途 / Purpose:** 处理 `button click event handler` 相关逻辑。

### ShowPanel
`public void ShowPanel()`

**用途 / Purpose:** 处理 `show panel` 相关逻辑。

### HidePanel
`public void HidePanel()`

**用途 / Purpose:** 处理 `hide panel` 相关逻辑。

## 使用示例

```csharp
var widget = new InventoryEquippedItemControlsBrushWidget(context);
```

## 参见

- [完整类目录](../catalog)