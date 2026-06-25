---
title: "InventoryData"
description: "InventoryData 的自动生成类参考。"
---
# InventoryData

**Namespace:** TaleWorlds.MountAndBlade.Diamond
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class InventoryData`
**Base:** 无
**File:** `TaleWorlds.MountAndBlade.Diamond/InventoryData.cs`

## 概述

`InventoryData` 更像一个数据载体：它封装一组字段，让系统之间以结构化方式交换状态。

## 心智模型

把 `InventoryData` 当作一个 Data 型扩展点来理解：先确认谁创建它、谁持有它、谁调用它，再决定是继承、组合还是只读使用。

## 主要属性

| Name | Signature |
|------|-----------|
| `Items` | `public List<ItemData> Items { get; }` |

## 主要方法

### GetItemWithIndex
`public ItemData GetItemWithIndex(int itemIndex)`

**用途 / Purpose:** 读取并返回当前对象中 「item with index」 的结果。

```csharp
// 先通过子系统 API 拿到 InventoryData 实例
InventoryData inventoryData = ...;
var result = inventoryData.GetItemWithIndex(0);
```

### DebugPrint
`public void DebugPrint()`

**用途 / Purpose:** 处理与 「debug print」 相关的逻辑。

```csharp
// 先通过子系统 API 拿到 InventoryData 实例
InventoryData inventoryData = ...;
inventoryData.DebugPrint();
```

## 使用示例

```csharp
// 该数据对象通常由战役/任务 API 返回
InventoryData entry = ...;
```

## 参见

- [本区域目录](../)