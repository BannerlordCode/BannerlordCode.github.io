---
title: "CapacityData"
---
<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `CapacityData`
- [← 本领域 / 返回 campaign](./)
- [↑ API 目录](../)
- [🏠 首页 v1.3.0](../../)
- [⭐ 版本架构](../../architecture/)
<!-- END BREADCRUMB -->
# CapacityData

**Namespace:** TaleWorlds.CampaignSystem.Inventory
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class CapacityData`
**Base:** 无
**File:** `TaleWorlds.CampaignSystem/Inventory/InventoryLogic.cs`

## 概述

`CapacityData` 更像一个数据载体：它封装一组字段，让系统之间以结构化方式交换状态。

## 心智模型

把 `CapacityData` 当作一个 Data 型扩展点来理解：先确认谁创建它、谁持有它、谁调用它，再决定是继承、组合还是只读使用。

## 主要方法

### GetCapacity
`public int GetCapacity()`

**用途 / Purpose:** 获取 `capacity` 的当前值。

### CanForceTransaction
`public bool CanForceTransaction()`

**用途 / Purpose:** 判断当前对象是否可以执行 `force transaction`。

### GetCapacityExceededWarningText
`public TextObject GetCapacityExceededWarningText()`

**用途 / Purpose:** 获取 `capacity exceeded warning text` 的当前值。

### GetCapacityExceededHintText
`public TextObject GetCapacityExceededHintText()`

**用途 / Purpose:** 获取 `capacity exceeded hint text` 的当前值。

## 使用示例

```csharp
var value = new CapacityData();
```

## 参见

- [完整类目录](../catalog)