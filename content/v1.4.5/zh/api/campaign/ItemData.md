---
title: "ItemData"
description: "ItemData 的自动生成类参考。"
---
# ItemData

**Namespace:** TaleWorlds.MountAndBlade.Diamond
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class ItemData`
**Base:** 无
**File:** `bin/TaleWorlds.MountAndBlade.Diamond/TaleWorlds.MountAndBlade.Diamond/ItemData.cs`

## 概述

`ItemData` 更像一个数据载体：它封装一组字段，让系统之间以结构化方式交换状态。

## 心智模型

把 `ItemData` 当作一个 Data 型扩展点来理解：先确认谁创建它、谁持有它、谁调用它，再决定是继承、组合还是只读使用。

## 主要属性

| Name | Signature |
|------|-----------|
| `TypeId` | `public string TypeId { get; set; }` |
| `ModifierId` | `public string ModifierId { get; set; }` |
| `Index` | `public int? Index { get; set; }` |

## 主要方法

### CopyItemData
`public void CopyItemData(ItemData itemdata)`

**用途 / Purpose:** 把当前对象的「item data」状态复制到目标对象。

```csharp
// 先通过子系统 API 拿到 ItemData 实例
ItemData itemData = ...;
itemData.CopyItemData(itemdata);
```

### CanItemToEquipmentDragPossible
`public bool CanItemToEquipmentDragPossible(int equipmentIndex)`

**用途 / Purpose:** 检查当前对象是否满足 「item to equipment drag possible」 的前置条件。

```csharp
// 先通过子系统 API 拿到 ItemData 实例
ItemData itemData = ...;
var result = itemData.CanItemToEquipmentDragPossible(0);
```

### CanItemToEquipmentDragPossible
`public static bool CanItemToEquipmentDragPossible(string itemTypeId, int equipmentIndex)`

**用途 / Purpose:** 检查当前对象是否满足 「item to equipment drag possible」 的前置条件。

```csharp
// 静态调用，不需要实例
ItemData.CanItemToEquipmentDragPossible("example", 0);
```

### GetPriceOf
`public static int GetPriceOf(string itemId, string modifierId)`

**用途 / Purpose:** 读取并返回当前对象中 「price of」 的结果。

```csharp
// 静态调用，不需要实例
ItemData.GetPriceOf("example", "example");
```

### IsItemValid
`public static bool IsItemValid(string itemId, string modifierId)`

**用途 / Purpose:** 判断当前对象是否处于 「item valid」 状态或条件。

```csharp
// 静态调用，不需要实例
ItemData.IsItemValid("example", "example");
```

## 使用示例

```csharp
// 该数据对象通常由战役/任务 API 返回
ItemData entry = ...;
```

## 参见

- [本区域目录](../)