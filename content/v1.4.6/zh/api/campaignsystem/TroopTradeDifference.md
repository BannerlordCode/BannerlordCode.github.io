---
title: "TroopTradeDifference"
description: "TroopTradeDifference：TaleWorlds.CampaignSystem 的 public 结构体；公开成员 7 个（方法 0、属性 7、字段 0）。源文件 TaleWorlds.CampaignSystem/Party/TroopTradeDifference.cs。"
---
# TroopTradeDifference

**Namespace:** `TaleWorlds.CampaignSystem.Party`
**Module:** `TaleWorlds.CampaignSystem`
**Type:** `public struct TroopTradeDifference`
**File:** `TaleWorlds.CampaignSystem/Party/TroopTradeDifference.cs`

## 概述

TroopTradeDifference 位于 TaleWorlds.CampaignSystem 模块，源文件 TaleWorlds.CampaignSystem/Party/TroopTradeDifference.cs。它是一个 public 结构体，继承链为 TroopTradeDifference。public/protected 成员共 7 个：7 属性。

> 本页为批量初稿：签名逐条取自 bannerlord-1.4.6 反编译源码，未经改写。每个方法实际做什么、何时调用、有什么风险，请对照源文件方法体阅读。

## 心智模型

结构事实：TroopTradeDifference 是 TaleWorlds.CampaignSystem 的顶层类型，命名空间与模块目录不同（TaleWorlds.CampaignSystem.Party），继承链 TroopTradeDifference。成员构成以属性为主（属性 7/7，方法 0/7），对外主要以状态读取接口暴露。本页只列真实签名：每个方法做什么用、何时调用、有哪些坑，需要对照 TaleWorlds.CampaignSystem/Party/TroopTradeDifference.cs 的方法体或该类型的深写页确认。

## 主要成员

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `Troop` | `public CharacterObject Troop` | 属性 |
| `IsPrisoner` | `public bool IsPrisoner` | 属性 |
| `FromCount` | `public int FromCount` | 属性 |
| `ToCount` | `public int ToCount` | 属性 |
| `DifferenceCount` | `public int DifferenceCount` | 属性 |
| `IsEmpty` | `public bool IsEmpty` | 属性 |
| `Empty` | `public static TroopTradeDifference Empty` | 属性 |

## 参见

- [↑ campaignsystem 模块目录](../)
- [↑ API 参考](../../)
- [↑ 版本首页](../../../)
- [同命名空间 AiBehavior](../AiBehavior)
- [同命名空间 CanTalkToHeroDelegate](../CanTalkToHeroDelegate)
- [同命名空间 IsTroopTransferableDelegate](../IsTroopTransferableDelegate)
- [同命名空间 MobileParty](../MobileParty)
