---
title: "TransferCommand"
description: "TransferCommand：TaleWorlds.CampaignSystem 的 public 结构体；公开成员 10 个（方法 1、属性 9、字段 0）。源文件 TaleWorlds.CampaignSystem/Inventory/TransferCommand.cs。"
---
# TransferCommand

**Namespace:** `TaleWorlds.CampaignSystem.Inventory`
**Module:** `TaleWorlds.CampaignSystem`
**Type:** `public struct TransferCommand`
**File:** `TaleWorlds.CampaignSystem/Inventory/TransferCommand.cs`

## 概述

TransferCommand 位于 TaleWorlds.CampaignSystem 模块，源文件 TaleWorlds.CampaignSystem/Inventory/TransferCommand.cs。它是一个 public 结构体，继承链为 TransferCommand。public/protected 成员共 10 个：1 方法、9 属性。

> 本页为批量初稿：签名逐条取自 bannerlord-1.4.6 反编译源码，未经改写。每个方法实际做什么、何时调用、有什么风险，请对照源文件方法体阅读。

## 心智模型

结构事实：TransferCommand 是 TaleWorlds.CampaignSystem 的顶层类型，命名空间与模块目录不同（TaleWorlds.CampaignSystem.Inventory），继承链 TransferCommand。成员构成以属性为主（属性 9/10，方法 1/10），对外主要以状态读取接口暴露。本页只列真实签名：每个方法做什么用、何时调用、有哪些坑，需要对照 TaleWorlds.CampaignSystem/Inventory/TransferCommand.cs 的方法体或该类型的深写页确认。

## 主要成员

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `FromSideEquipment` | `public Equipment FromSideEquipment` | 属性 |
| `ToSideEquipment` | `public Equipment ToSideEquipment` | 属性 |
| `FromSide` | `public InventoryLogic.InventorySide FromSide` | 属性 |
| `ToSide` | `public InventoryLogic.InventorySide ToSide` | 属性 |
| `FromEquipmentIndex` | `public EquipmentIndex FromEquipmentIndex` | 属性 |
| `ToEquipmentIndex` | `public EquipmentIndex ToEquipmentIndex` | 属性 |
| `Amount` | `public int Amount` | 属性 |
| `ElementToTransfer` | `public ItemRosterElement ElementToTransfer` | 属性 |
| `Character` | `public CharacterObject Character` | 属性 |
| `Transfer` | `public static TransferCommand Transfer(int amount, InventoryLogic.InventorySide fromSide, InventoryLogic.InventorySide toSide, ItemRosterElement elementToTransfer, EquipmentIndex fromEquipmentIndex, EquipmentIndex toEquipmentIndex, CharacterObject character)` | 方法 |

## 参见

- [↑ campaignsystem 模块目录](../)
- [↑ API 参考](../../)
- [↑ 版本首页](../../../)
- [同命名空间 FakeInventoryListener](../FakeInventoryListener)
- [同命名空间 InventoryListener](../InventoryListener)
- [同命名空间 InventoryLogic](../InventoryLogic)
- [同命名空间 InventoryTransferItemEvent](../InventoryTransferItemEvent)
