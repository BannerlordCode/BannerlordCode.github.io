---
title: "IFaction"
description: "IFaction：TaleWorlds.CampaignSystem 的 public 接口；公开成员 43 个（方法 3、属性 40、字段 0）。源文件 TaleWorlds.CampaignSystem/IFaction.cs。"
---
# IFaction

**Namespace:** `TaleWorlds.CampaignSystem`
**Module:** `TaleWorlds.CampaignSystem`
**Type:** `public interface IFaction`
**File:** `TaleWorlds.CampaignSystem/IFaction.cs`

## 概述

IFaction 位于 TaleWorlds.CampaignSystem 模块，源文件 TaleWorlds.CampaignSystem/IFaction.cs。它是一个 public 接口，继承链为 IFaction。public/protected 成员共 43 个：3 方法、40 属性。

> 本页为批量初稿：签名逐条取自 bannerlord-1.4.6 反编译源码，未经改写。每个方法实际做什么、何时调用、有什么风险，请对照源文件方法体阅读。

## 心智模型

结构事实：IFaction 是 TaleWorlds.CampaignSystem 的顶层类型，命名空间与模块目录一致，继承链 IFaction。成员构成以属性为主（属性 40/43，方法 3/43），对外主要以状态读取接口暴露。本页只列真实签名：每个方法做什么用、何时调用、有哪些坑，需要对照 TaleWorlds.CampaignSystem/IFaction.cs 的方法体或该类型的深写页确认。

## 主要成员

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `Name` | `TextObject Name` | 属性 |
| `StringId` | `string StringId` | 属性 |
| `Id` | `MBGUID Id` | 属性 |
| `InformalName` | `TextObject InformalName` | 属性 |
| `EncyclopediaLink` | `string EncyclopediaLink` | 属性 |
| `EncyclopediaLinkWithName` | `TextObject EncyclopediaLinkWithName` | 属性 |
| `EncyclopediaText` | `TextObject EncyclopediaText` | 属性 |
| `Culture` | `CultureObject Culture` | 属性 |
| `InitialHomeSettlement` | `Settlement InitialHomeSettlement` | 属性 |
| `Color` | `uint Color` | 属性 |
| `Color2` | `uint Color2` | 属性 |
| `BasicTroop` | `CharacterObject BasicTroop` | 属性 |
| `Leader` | `Hero Leader` | 属性 |
| `Banner` | `Banner Banner` | 属性 |
| `MBReadOnlyList` | `MBReadOnlyList<Settlement>Settlements` | 属性 |
| `MBReadOnlyList` | `MBReadOnlyList<Town>Fiefs` | 属性 |
| `MBReadOnlyList` | `MBReadOnlyList<Hero>AliveLords` | 属性 |
| `MBReadOnlyList` | `MBReadOnlyList<Hero>DeadLords` | 属性 |
| `MBReadOnlyList` | `MBReadOnlyList<Hero>Heroes` | 属性 |
| `MBReadOnlyList` | `MBReadOnlyList<WarPartyComponent>WarPartyComponents` | 属性 |
| `IsBanditFaction` | `bool IsBanditFaction` | 属性 |
| `IsMinorFaction` | `bool IsMinorFaction` | 属性 |
| `IsKingdomFaction` | `bool IsKingdomFaction` | 属性 |
| `IsRebelClan` | `bool IsRebelClan` | 属性 |
| `IsClan` | `bool IsClan` | 属性 |
| `IsOutlaw` | `bool IsOutlaw` | 属性 |
| `IsMapFaction` | `bool IsMapFaction` | 属性 |
| `HasNavalNavigationCapability` | `bool HasNavalNavigationCapability` | 属性 |
| `MapFaction` | `IFaction MapFaction` | 属性 |
| `CurrentTotalStrength` | `float CurrentTotalStrength` | 属性 |
| `FactionMidSettlement` | `Settlement FactionMidSettlement` | 属性 |
| `DistanceToClosestNonAllyFortification` | `float DistanceToClosestNonAllyFortification` | 属性 |
| `IsAtWarWith` | `bool IsAtWarWith(IFaction other);` | 方法 |
| `GetStanceWith` | `StanceLink GetStanceWith(IFaction other);` | 方法 |
| `MBReadOnlyList` | `MBReadOnlyList<IFaction>FactionsAtWarWith` | 属性 |
| `UpdateFactionsAtWarWith` | `void UpdateFactionsAtWarWith();` | 方法 |
| `TributeWallet` | `int TributeWallet` | 属性 |
| `MainHeroCrimeRating` | `float MainHeroCrimeRating` | 属性 |
| `DailyCrimeRatingChange` | `float DailyCrimeRatingChange` | 属性 |
| `Aggressiveness` | `float Aggressiveness` | 属性 |
| `IsEliminated` | `bool IsEliminated` | 属性 |
| `DailyCrimeRatingChangeExplained` | `ExplainedNumber DailyCrimeRatingChangeExplained` | 属性 |
| `NotAttackableByPlayerUntilTime` | `CampaignTime NotAttackableByPlayerUntilTime` | 属性 |

## 参见

- [↑ campaignsystem 模块目录](../)
- [↑ API 参考](../../)
- [↑ 版本首页](../../../)
- [同命名空间 ActionNotes](../ActionNotes)
- [同命名空间 AIBehaviorData](../AIBehaviorData)
- [同命名空间 Army](../Army)
- [同命名空间 AtmosphereGrid](../AtmosphereGrid)
