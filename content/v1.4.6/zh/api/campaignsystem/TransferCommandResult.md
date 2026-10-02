---
title: "TransferCommandResult"
description: "TransferCommandResult：TaleWorlds.CampaignSystem 的 public 类；公开成员 9 个（方法 0、属性 7、字段 0）。源文件 TaleWorlds.CampaignSystem/Inventory/TransferCommandResult.cs。"
---
# TransferCommandResult

**Namespace:** `TaleWorlds.CampaignSystem.Inventory`
**Module:** `TaleWorlds.CampaignSystem`
**Type:** `public class TransferCommandResult`
**File:** `TaleWorlds.CampaignSystem/Inventory/TransferCommandResult.cs`

## 概述

TransferCommandResult 位于 TaleWorlds.CampaignSystem 模块，源文件 TaleWorlds.CampaignSystem/Inventory/TransferCommandResult.cs。它是一个 public 类，继承链为 TransferCommandResult。public/protected 成员共 9 个：7 属性、2 构造函数。

> 本页为批量初稿：签名逐条取自 bannerlord-1.4.6 反编译源码，未经改写。每个方法实际做什么、何时调用、有什么风险，请对照源文件方法体阅读。

## 心智模型

结构事实：TransferCommandResult 是 TaleWorlds.CampaignSystem 的顶层类型，命名空间与模块目录不同（TaleWorlds.CampaignSystem.Inventory），继承链 TransferCommandResult。成员构成以属性为主（属性 7/9，方法 0/9），对外主要以状态读取接口暴露。本页只列真实签名：每个方法做什么用、何时调用、有哪些坑，需要对照 TaleWorlds.CampaignSystem/Inventory/TransferCommandResult.cs 的方法体或该类型的深写页确认。

## 主要成员

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `ResultSideEquipment` | `public Equipment ResultSideEquipment` | 属性 |
| `TransferCharacter` | `public CharacterObject TransferCharacter` | 属性 |
| `ResultSide` | `public InventoryLogic.InventorySide ResultSide` | 属性 |
| `EffectedItemRosterElement` | `public ItemRosterElement EffectedItemRosterElement` | 属性 |
| `EffectedNumber` | `public int EffectedNumber` | 属性 |
| `FinalNumber` | `public int FinalNumber` | 属性 |
| `EffectedEquipmentIndex` | `public EquipmentIndex EffectedEquipmentIndex` | 属性 |
| `TransferCommandResult` | `public TransferCommandResult()` | 构造函数 |
| `TransferCommandResult` | `public TransferCommandResult(InventoryLogic.InventorySide resultSide, ItemRosterElement effectedItemRosterElement, int effectedNumber, int finalNumber, EquipmentIndex effectedEquipmentIndex, CharacterObject transferCharacter)` | 构造函数 |

## 参见

- [↑ campaignsystem 模块目录](../)
- [↑ API 参考](../../)
- [↑ 版本首页](../../../)
- [同命名空间 FakeInventoryListener](../FakeInventoryListener)
- [同命名空间 InventoryListener](../InventoryListener)
- [同命名空间 InventoryLogic](../InventoryLogic)
- [同命名空间 InventoryTransferItemEvent](../InventoryTransferItemEvent)
