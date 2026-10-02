---
title: "InventoryTransferItemEvent"
description: "InventoryTransferItemEvent：TaleWorlds.CampaignSystem 的 public 类，继承 EventBase；公开成员 3 个（方法 0、属性 2、字段 0）。源文件 TaleWorlds.CampaignSystem/Inventory/InventoryTransferItemEvent.cs。"
---
# InventoryTransferItemEvent

**Namespace:** `TaleWorlds.CampaignSystem.Inventory`
**Module:** `TaleWorlds.CampaignSystem`
**Type:** `public class InventoryTransferItemEvent : EventBase`
**File:** `TaleWorlds.CampaignSystem/Inventory/InventoryTransferItemEvent.cs`

## 概述

InventoryTransferItemEvent 位于 TaleWorlds.CampaignSystem 模块，源文件 TaleWorlds.CampaignSystem/Inventory/InventoryTransferItemEvent.cs。它是一个 public 类，实现/继承 EventBase，继承链为 InventoryTransferItemEvent → EventBase。public/protected 成员共 3 个：2 属性、1 构造函数。

> 本页为批量初稿：签名逐条取自 bannerlord-1.4.6 反编译源码，未经改写。每个方法实际做什么、何时调用、有什么风险，请对照源文件方法体阅读。

## 心智模型

结构事实：InventoryTransferItemEvent 是 TaleWorlds.CampaignSystem 的顶层类型，命名空间与模块目录不同（TaleWorlds.CampaignSystem.Inventory），继承链 InventoryTransferItemEvent → EventBase。成员构成以属性为主（属性 2/3，方法 0/3），对外主要以状态读取接口暴露。继承链上的 EventBase 不在本模块内，说明该类型把一部分行为交给跨模块基类。本页只列真实签名：每个方法做什么用、何时调用、有哪些坑，需要对照 TaleWorlds.CampaignSystem/Inventory/InventoryTransferItemEvent.cs 的方法体或该类型的深写页确认。

## 主要成员

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `Item` | `public ItemObject Item` | 属性 |
| `IsBuyForPlayer` | `public bool IsBuyForPlayer` | 属性 |
| `InventoryTransferItemEvent` | `public InventoryTransferItemEvent(ItemObject item, bool isBuyForPlayer)` | 构造函数 |

## 参见

- [↑ campaignsystem 模块目录](../)
- [↑ API 参考](../../)
- [↑ 版本首页](../../../)
- [同命名空间 FakeInventoryListener](../FakeInventoryListener)
- [同命名空间 InventoryListener](../InventoryListener)
- [同命名空间 InventoryLogic](../InventoryLogic)
- [同命名空间 IPlayerTradeBehavior](../IPlayerTradeBehavior)
