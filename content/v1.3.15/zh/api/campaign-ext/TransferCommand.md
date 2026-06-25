---
title: "TransferCommand"
---
<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `TransferCommand`
- [← 本领域 / 返回 campaign-ext](./)
- [↑ API 目录](../)
- [🏠 首页 v1.3.15](../../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# TransferCommand

**命名空间:** TaleWorlds.CampaignSystem.Inventory
**模块:** TaleWorlds.CampaignSystem
**类型:** `public struct TransferCommand`
**领域:** campaign-ext

## 概述

`TransferCommand` 位于 `TaleWorlds.CampaignSystem.Inventory`，它的公开成员表明它是这一子系统暴露给 mod 的一个正式扩展或数据入口。

## 心智模型

先从命名空间 `TaleWorlds.CampaignSystem.Inventory` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要属性

| Name | Signature |
|------|-----------|
| `FromSideEquipment` | `public Equipment FromSideEquipment { get; }` |
| `ToSideEquipment` | `public Equipment ToSideEquipment { get; }` |
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

**用途 / Purpose:** 处理 `transfer` 相关逻辑。

## 使用示例

```csharp
// 先准备该类型需要的上下文，然后直接调用静态入口
TransferCommand.Transfer(0, fromSide, toSide, elementToTransfer, fromEquipmentIndex, toEquipmentIndex, character);
```

## 参见

- [完整类目录](../catalog)
- [本领域目录](../catalog-campaign)
