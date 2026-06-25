---
title: "InventoryImageIdentifierWidget"
description: "InventoryImageIdentifierWidget 的自动生成类参考。"
---
# InventoryImageIdentifierWidget

**Namespace:** TaleWorlds.MountAndBlade.GauntletUI.Widgets.Inventory
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class InventoryImageIdentifierWidget : ImageIdentifierWidget`
**Base:** `ImageIdentifierWidget`
**File:** `bin/TaleWorlds.MountAndBlade.GauntletUI.Widgets/TaleWorlds.MountAndBlade.GauntletUI.Widgets.Inventory/InventoryImageIdentifierWidget.cs`

## 概述

`InventoryImageIdentifierWidget` 是一个 Gauntlet UI 控件——在 Gauntlet XML/.prefab 中使用或代码创建的 UI 元素。继承 Widget 可构建自定义控件；实例经控件树访问。

## 心智模型

把 `InventoryImageIdentifierWidget` 当作一个 Widget 型扩展点来理解：先确认谁创建它、谁持有它、谁调用它，再决定是继承、组合还是只读使用。

## 主要方法

### SetRenderRequestedPreviousFrame
`public void SetRenderRequestedPreviousFrame(bool isRequested)`

**用途 / Purpose:** **用途 / Purpose:** 为 render requested previous frame 赋新值，并同步更新对象内部状态。

```csharp
// 先通过子系统 API 拿到 InventoryImageIdentifierWidget 实例
InventoryImageIdentifierWidget inventoryImageIdentifierWidget = ...;
inventoryImageIdentifierWidget.SetRenderRequestedPreviousFrame(false);
```

## 使用示例

```csharp
// 在 Gauntlet 控件树或 Movie 中获取该控件实例
InventoryImageIdentifierWidget widget = ...;
```

## 参见

- [本区域目录](../)