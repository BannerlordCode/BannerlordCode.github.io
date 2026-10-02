---
title: "PartyScreenData"
description: "PartyScreenData：TaleWorlds.CampaignSystem 的 public 类，继承 IEnumerable<ValueTuple<TroopRosterElement, bool>>、IEnumerable；公开成员 17 个（方法 12、属性 4、字段 0）。源文件 TaleWorlds.CampaignSystem/Party/PartyScreenData.cs。"
---
# PartyScreenData

**Namespace:** `TaleWorlds.CampaignSystem.Party`
**Module:** `TaleWorlds.CampaignSystem`
**Type:** `public class PartyScreenData : IEnumerable<ValueTuple<TroopRosterElement, bool>>, IEnumerable`
**File:** `TaleWorlds.CampaignSystem/Party/PartyScreenData.cs`

## 概述

PartyScreenData 位于 TaleWorlds.CampaignSystem 模块，源文件 TaleWorlds.CampaignSystem/Party/PartyScreenData.cs。它是一个 public 类，实现/继承 IEnumerable<ValueTuple<TroopRosterElement, bool>>、IEnumerable，继承链为 PartyScreenData → IEnumerable。public/protected 成员共 17 个：12 方法、4 属性、1 构造函数。

> 本页为批量初稿：签名逐条取自 bannerlord-1.4.6 反编译源码，未经改写。每个方法实际做什么、何时调用、有什么风险，请对照源文件方法体阅读。

## 心智模型

结构事实：PartyScreenData 是 TaleWorlds.CampaignSystem 的顶层类型，命名空间与模块目录不同（TaleWorlds.CampaignSystem.Party），继承链 PartyScreenData → IEnumerable。成员构成以方法为主（方法 12/17，属性 4/17），对外主要以操作入口暴露。继承链上的 IEnumerable 不在本模块内，说明该类型把一部分行为交给跨模块基类。本页只列真实签名：每个方法做什么用、何时调用、有哪些坑，需要对照 TaleWorlds.CampaignSystem/Party/PartyScreenData.cs 的方法体或该类型的深写页确认。

## 主要成员

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `RightParty` | `public PartyBase RightParty` | 属性 |
| `LeftParty` | `public PartyBase LeftParty` | 属性 |
| `RightPartyLeaderHero` | `public Hero RightPartyLeaderHero` | 属性 |
| `LeftPartyLeaderHero` | `public Hero LeftPartyLeaderHero` | 属性 |
| `GetHashCode` | `public override int GetHashCode()` | 方法 |
| `PartyScreenData` | `public PartyScreenData()` | 构造函数 |
| `InitializeCopyFrom` | `public void InitializeCopyFrom(PartyBase rightParty, PartyBase leftParty)` | 方法 |
| `CopyFromPartyAndRoster` | `public void CopyFromPartyAndRoster(TroopRoster rightPartyMemberRoster, TroopRoster rightPartyPrisonerRoster, TroopRoster leftPartyMemberRoster, TroopRoster leftPartyPrisonerRoster, PartyBase rightParty)` | 方法 |
| `CopyFromScreenData` | `public void CopyFromScreenData(PartyScreenData data)` | 方法 |
| `BindRostersFrom` | `public void BindRostersFrom(TroopRoster rightPartyMemberRoster, TroopRoster rightPartyPrisonerRoster, TroopRoster leftPartyMemberRoster, TroopRoster leftPartyPrisonerRoster, PartyBase rightParty, PartyBase leftParty)` | 方法 |
| `ResetUsing` | `public void ResetUsing(PartyScreenData partyScreenData)` | 方法 |
| `IsThereAnyTroopTradeDifferenceBetween` | `public bool IsThereAnyTroopTradeDifferenceBetween(PartyScreenData other)` | 方法 |
| `List` | `public List<TroopTradeDifference>GetTroopTradeDifferencesFromTo(PartyScreenData toPartyScreenData, PartyScreenLogic.PartyRosterSide side = PartyScreenLogic.PartyRosterSide.None)` | 方法 |
| `bool>>GetEnumerator` | `public IEnumerator<ValueTuple<TroopRosterElement, bool>>GetEnumerator()` | 方法 |
| `Equals` | `public override bool Equals(object obj)` | 方法 |
| `operator` | `public static bool operator` | 运算符 |
| `!` | `public static bool operator !` | 运算符 |

## 参见

- [↑ campaignsystem 模块目录](../)
- [↑ API 参考](../../)
- [↑ 版本首页](../../../)
- [同命名空间 AiBehavior](../AiBehavior)
- [同命名空间 CanTalkToHeroDelegate](../CanTalkToHeroDelegate)
- [同命名空间 IsTroopTransferableDelegate](../IsTroopTransferableDelegate)
- [同命名空间 MobileParty](../MobileParty)
