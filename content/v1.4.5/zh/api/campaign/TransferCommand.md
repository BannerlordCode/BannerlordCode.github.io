---
title: "TransferCommand"
description: "TransferCommand 的自动生成类参考。"
---
# TransferCommand

**Namespace:** TaleWorlds.CampaignSystem.Inventory
**Module:** TaleWorlds.CampaignSystem
**Type:** `public struct TransferCommand`
**Base:** 无
**File:** `bin/TaleWorlds.CampaignSystem/TaleWorlds.CampaignSystem.Inventory/TransferCommand.cs`

## 概述

`TransferCommand` 位于 `TaleWorlds.CampaignSystem.Inventory`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `TaleWorlds.CampaignSystem.Inventory` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要属性

| Name | Signature |
|------|-----------|
| `FromSide` | `public InventoryLogic.InventorySide FromSide { get; }` |
| `ToSide` | `public InventoryLogic.InventorySide ToSide { get; }` |
| `FromEquipmentIndex` | `public EquipmentIndex FromEquipmentIndex { get; }` |
| `ToEquipmentIndex` | `public EquipmentIndex ToEquipmentIndex { get; }` |
| `Amount` | `public int Amount { get; }` |
| `ElementToTransfer` | `public ItemRosterElement ElementToTransfer { get; }` |
| `Character` | `public CharacterObject Character { get; }` |

## 主要方法

### Transfer
`public static TransferCommand Transfer(int amount, InventoryLogic.InventorySide fromSide, InventoryLogic.InventorySide toSide, ItemRosterElement elementToTransfer, EquipmentIndex fromEquipmentIndex, EquipmentIndex toEquipmentIndex, CharacterObject character)`

**用途 / Purpose:** 处理与 「transfer」 相关的逻辑。

```csharp
// 静态调用，不需要实例
TransferCommand.Transfer(0, fromSide, toSide, elementToTransfer, fromEquipmentIndex, toEquipmentIndex, character);
```

## 使用示例

```csharp
TransferCommand.Transfer(0, fromSide, toSide, elementToTransfer, fromEquipmentIndex, toEquipmentIndex, character);
```

## 参见

- [本区域目录](../)