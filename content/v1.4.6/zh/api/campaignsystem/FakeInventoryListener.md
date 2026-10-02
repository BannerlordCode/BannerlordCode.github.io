---
title: "FakeInventoryListener"
description: "FakeInventoryListener：TaleWorlds.CampaignSystem 的 public 类，继承 InventoryListener；公开成员 5 个（方法 5、属性 0、字段 0）。源文件 TaleWorlds.CampaignSystem/Inventory/FakeInventoryListener.cs。"
---
# FakeInventoryListener

**Namespace:** `TaleWorlds.CampaignSystem.Inventory`
**Module:** `TaleWorlds.CampaignSystem`
**Type:** `public class FakeInventoryListener : InventoryListener`
**File:** `TaleWorlds.CampaignSystem/Inventory/FakeInventoryListener.cs`

## 概述

FakeInventoryListener 位于 TaleWorlds.CampaignSystem 模块，源文件 TaleWorlds.CampaignSystem/Inventory/FakeInventoryListener.cs。它是一个 public 类，实现/继承 InventoryListener，继承链为 FakeInventoryListener → InventoryListener。public/protected 成员共 5 个：5 方法。

> 本页为批量初稿：签名逐条取自 bannerlord-1.4.6 反编译源码，未经改写。每个方法实际做什么、何时调用、有什么风险，请对照源文件方法体阅读。

## 心智模型

结构事实：FakeInventoryListener 是 TaleWorlds.CampaignSystem 的顶层类型，命名空间与模块目录不同（TaleWorlds.CampaignSystem.Inventory），继承链 FakeInventoryListener → InventoryListener。成员构成以方法为主（方法 5/5，属性 0/5），对外主要以操作入口暴露。本页只列真实签名：每个方法做什么用、何时调用、有哪些坑，需要对照 TaleWorlds.CampaignSystem/Inventory/FakeInventoryListener.cs 的方法体或该类型的深写页确认。

## 主要成员

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `GetGold` | `public override int GetGold()` | 方法 |
| `GetTraderName` | `public override TextObject GetTraderName()` | 方法 |
| `SetGold` | `public override void SetGold(int gold)` | 方法 |
| `OnTransaction` | `public override void OnTransaction()` | 方法 |
| `GetOppositeParty` | `public override PartyBase GetOppositeParty()` | 方法 |

## 参见

- [↑ campaignsystem 模块目录](../)
- [↑ API 参考](../../)
- [↑ 版本首页](../../../)
- [基类/接口 InventoryListener](../InventoryListener)
- [同命名空间 InventoryListener](../InventoryListener)
- [同命名空间 InventoryLogic](../InventoryLogic)
- [同命名空间 InventoryTransferItemEvent](../InventoryTransferItemEvent)
- [同命名空间 IPlayerTradeBehavior](../IPlayerTradeBehavior)
