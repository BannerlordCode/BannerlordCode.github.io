---
title: "InventoryListener"
description: "InventoryListener：TaleWorlds.CampaignSystem.Inventory 的 public 类；公开成员 5 个（方法 5、属性 0、字段 0）。canonical 桶 campaign。源文件 TaleWorlds.CampaignSystem/Inventory/InventoryListener.cs。"
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# InventoryListener

**Namespace:** `TaleWorlds.CampaignSystem.Inventory`
**Module:** `TaleWorlds.CampaignSystem`
**Type:** `public abstract class InventoryListener`
**File:** `TaleWorlds.CampaignSystem/Inventory/InventoryListener.cs`
**Bucket:** `campaign` (rule:TaleWorlds.CampaignSystem)

## 概述

InventoryListener 位于 TaleWorlds.CampaignSystem 模块，源文件 TaleWorlds.CampaignSystem/Inventory/InventoryListener.cs。它是一个 public 类（abstract），继承链为 InventoryListener。public/protected 成员共 5 个：5 方法。

> 本页为批量初稿：签名逐条取自 bannerlord-1.4.6 反编译源码，未经改写。桶归属由 `tools/_dir-map-canonical.json` 现算。每个方法实际做什么、何时调用、有什么风险，请对照源文件方法体阅读。

## 心智模型

结构事实：InventoryListener 落在 canonical 桶 `campaign`（命中规则 `rule:TaleWorlds.CampaignSystem`），命名空间 `TaleWorlds.CampaignSystem.Inventory`，继承链 InventoryListener。成员构成以方法为主（方法 5/5，属性 0/5），对外主要以操作入口暴露。本页只列真实签名：每个方法做什么用、何时调用、有哪些坑，需要对照 TaleWorlds.CampaignSystem/Inventory/InventoryListener.cs 的方法体或该类型的深写页确认。

## 主要成员

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `GetGold` | `public abstract int GetGold();` | 方法 |
| `GetTraderName` | `public abstract TextObject GetTraderName();` | 方法 |
| `SetGold` | `public abstract void SetGold(int gold);` | 方法 |
| `GetOppositeParty` | `public abstract PartyBase GetOppositeParty();` | 方法 |
| `OnTransaction` | `public abstract void OnTransaction();` | 方法 |

## 参见

- [↑ 本桶目录](..//)
- [↑ API 参考](../..//)
- [↑ 版本首页](../../..//)
- [同命名空间 FakeInventoryListener](../FakeInventoryListener/)
- [同命名空间 InventoryLogic](../InventoryLogic/)
- [同命名空间 InventoryTransferItemEvent](../InventoryTransferItemEvent/)
- [同命名空间 IPlayerTradeBehavior](../IPlayerTradeBehavior/)
