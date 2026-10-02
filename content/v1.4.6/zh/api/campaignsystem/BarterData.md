---
title: "BarterData"
description: "BarterData：TaleWorlds.CampaignSystem 的 public 类；公开成员 10 个（方法 6、属性 3、字段 0）。源文件 TaleWorlds.CampaignSystem/BarterSystem/BarterData.cs。"
---
# BarterData

**Namespace:** `TaleWorlds.CampaignSystem.BarterSystem`
**Module:** `TaleWorlds.CampaignSystem`
**Type:** `public class BarterData`
**File:** `TaleWorlds.CampaignSystem/BarterSystem/BarterData.cs`

## 概述

BarterData 位于 TaleWorlds.CampaignSystem 模块，源文件 TaleWorlds.CampaignSystem/BarterSystem/BarterData.cs。它是一个 public 类，继承链为 BarterData。public/protected 成员共 10 个：6 方法、3 属性、1 构造函数。

> 本页为批量初稿：签名逐条取自 bannerlord-1.4.6 反编译源码，未经改写。每个方法实际做什么、何时调用、有什么风险，请对照源文件方法体阅读。

## 心智模型

结构事实：BarterData 是 TaleWorlds.CampaignSystem 的顶层类型，命名空间与模块目录不同（TaleWorlds.CampaignSystem.BarterSystem），继承链 BarterData。成员构成以方法为主（方法 6/10，属性 3/10），对外主要以操作入口暴露。本页只列真实签名：每个方法做什么用、何时调用、有哪些坑，需要对照 TaleWorlds.CampaignSystem/BarterSystem/BarterData.cs 的方法体或该类型的深写页确认。

## 主要成员

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `OffererMapFaction` | `public IFaction OffererMapFaction` | 属性 |
| `OtherMapFaction` | `public IFaction OtherMapFaction` | 属性 |
| `IsAiBarter` | `public bool IsAiBarter` | 属性 |
| `BarterData` | `public BarterData(Hero offerer, Hero other, PartyBase offererParty, PartyBase otherParty, BarterManager.BarterContextInitializer contextInitializer = null, int persuasionCostReduction = 0, bool isAiBarter = false)` | 构造函数 |
| `AddBarterable` | `public void AddBarterable<T>(Barterable barterable, bool isContextDependent = false)` | 方法 |
| `AddBarterGroup` | `public void AddBarterGroup(BarterGroup barterGroup)` | 方法 |
| `List` | `public List<BarterGroup>GetBarterGroups()` | 方法 |
| `List` | `public List<Barterable>GetBarterables()` | 方法 |
| `GetBarterGroup` | `public BarterGroup GetBarterGroup<T>()` | 方法 |
| `List` | `public List<Barterable>GetOfferedBarterables()` | 方法 |

## 参见

- [↑ campaignsystem 模块目录](../)
- [↑ API 参考](../../)
- [↑ 版本首页](../../../)
- [同命名空间 BarterGroup](../BarterGroup)
- [同命名空间 BarterManager](../BarterManager)
- [同命名空间 BarterResult](../BarterResult)
- [同命名空间 DefaultsBarterGroup](../DefaultsBarterGroup)
