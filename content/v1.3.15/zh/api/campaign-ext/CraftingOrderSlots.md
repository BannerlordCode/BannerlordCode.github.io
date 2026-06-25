---
title: "CraftingOrderSlots"
description: "CraftingOrderSlots 的自动生成类参考。"
---
# CraftingOrderSlots

**Namespace:** TaleWorlds.CampaignSystem.CampaignBehaviors
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class CraftingOrderSlots`
**Base:** 无
**File:** `TaleWorlds.CampaignSystem/CampaignBehaviors/CraftingCampaignBehavior.cs`

## 概述

`CraftingOrderSlots` 位于 `TaleWorlds.CampaignSystem.CampaignBehaviors`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `TaleWorlds.CampaignSystem.CampaignBehaviors` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要属性

| Name | Signature |
|------|-----------|
| `CustomOrders` | `public MBReadOnlyList<CraftingOrder> CustomOrders { get; }` |

## 主要方法

### IsThereAvailableSlot
`public bool IsThereAvailableSlot()`

**用途 / Purpose:** **用途 / Purpose:** 判断当前对象是否处于 there available slot 状态或条件。

```csharp
// 先通过子系统 API 拿到 CraftingOrderSlots 实例
CraftingOrderSlots craftingOrderSlots = ...;
var result = craftingOrderSlots.IsThereAvailableSlot();
```

### GetAvailableSlot
`public int GetAvailableSlot()`

**用途 / Purpose:** **用途 / Purpose:** 读取并返回当前对象中 available slot 的结果。

```csharp
// 先通过子系统 API 拿到 CraftingOrderSlots 实例
CraftingOrderSlots craftingOrderSlots = ...;
var result = craftingOrderSlots.GetAvailableSlot();
```

## 使用示例

```csharp
// 通常从对应子系统 API 获取实例后调用
CraftingOrderSlots craftingOrderSlots = ...;
craftingOrderSlots.IsThereAvailableSlot();
```

## 参见

- [本区域目录](../)