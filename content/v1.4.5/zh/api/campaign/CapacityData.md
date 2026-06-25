---
title: "CapacityData"
description: "CapacityData 的自动生成类参考。"
---
# CapacityData

**Namespace:** TaleWorlds.CampaignSystem.Inventory
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class CapacityData`
**Base:** 无
**File:** `bin/TaleWorlds.CampaignSystem/TaleWorlds.CampaignSystem.Inventory/InventoryLogic.cs`

## 概述

`CapacityData` 更像一个数据载体：它封装一组字段，让系统之间以结构化方式交换状态。

## 心智模型

把 `CapacityData` 当作一个 Data 型扩展点来理解：先确认谁创建它、谁持有它、谁调用它，再决定是继承、组合还是只读使用。

## 主要方法

### GetCapacity
`public int GetCapacity()`

**用途 / Purpose:** 读取并返回当前对象中 「capacity」 的结果。

```csharp
// 先通过子系统 API 拿到 CapacityData 实例
CapacityData capacityData = ...;
var result = capacityData.GetCapacity();
```

### CanForceTransaction
`public bool CanForceTransaction()`

**用途 / Purpose:** 检查当前对象是否满足 「force transaction」 的前置条件。

```csharp
// 先通过子系统 API 拿到 CapacityData 实例
CapacityData capacityData = ...;
var result = capacityData.CanForceTransaction();
```

### GetCapacityExceededWarningText
`public TextObject GetCapacityExceededWarningText()`

**用途 / Purpose:** 读取并返回当前对象中 「capacity exceeded warning text」 的结果。

```csharp
// 先通过子系统 API 拿到 CapacityData 实例
CapacityData capacityData = ...;
var result = capacityData.GetCapacityExceededWarningText();
```

### GetCapacityExceededHintText
`public TextObject GetCapacityExceededHintText()`

**用途 / Purpose:** 读取并返回当前对象中 「capacity exceeded hint text」 的结果。

```csharp
// 先通过子系统 API 拿到 CapacityData 实例
CapacityData capacityData = ...;
var result = capacityData.GetCapacityExceededHintText();
```

## 使用示例

```csharp
// 该数据对象通常由战役/任务 API 返回
CapacityData entry = ...;
```

## 参见

- [本区域目录](../)