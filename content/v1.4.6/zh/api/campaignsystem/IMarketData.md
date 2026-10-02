---
title: "IMarketData"
description: "IMarketData：TaleWorlds.CampaignSystem 的 public 接口；公开成员 2 个（方法 2、属性 0、字段 0）。源文件 TaleWorlds.CampaignSystem/Settlements/IMarketData.cs。"
---
# IMarketData

**Namespace:** `TaleWorlds.CampaignSystem.Settlements`
**Module:** `TaleWorlds.CampaignSystem`
**Type:** `public interface IMarketData`
**File:** `TaleWorlds.CampaignSystem/Settlements/IMarketData.cs`

## 概述

IMarketData 位于 TaleWorlds.CampaignSystem 模块，源文件 TaleWorlds.CampaignSystem/Settlements/IMarketData.cs。它是一个 public 接口，继承链为 IMarketData。public/protected 成员共 2 个：2 方法。

> 本页为批量初稿：签名逐条取自 bannerlord-1.4.6 反编译源码，未经改写。每个方法实际做什么、何时调用、有什么风险，请对照源文件方法体阅读。

## 心智模型

结构事实：IMarketData 是 TaleWorlds.CampaignSystem 的顶层类型，命名空间与模块目录不同（TaleWorlds.CampaignSystem.Settlements），继承链 IMarketData。成员构成以方法为主（方法 2/2，属性 0/2），对外主要以操作入口暴露。本页只列真实签名：每个方法做什么用、何时调用、有哪些坑，需要对照 TaleWorlds.CampaignSystem/Settlements/IMarketData.cs 的方法体或该类型的深写页确认。

## 主要成员

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `GetPrice` | `int GetPrice(ItemObject item, MobileParty tradingParty, bool isSelling, PartyBase merchantParty);` | 方法 |
| `GetPrice` | `int GetPrice(EquipmentElement itemRosterElement, MobileParty tradingParty, bool isSelling, PartyBase merchantParty);` | 方法 |

## 参见

- [↑ campaignsystem 模块目录](../)
- [↑ API 参考](../../)
- [↑ 版本首页](../../../)
- [同命名空间 Alley](../Alley)
- [同命名空间 DefaultVillageTypes](../DefaultVillageTypes)
- [同命名空间 Fief](../Fief)
- [同命名空间 Hideout](../Hideout)
