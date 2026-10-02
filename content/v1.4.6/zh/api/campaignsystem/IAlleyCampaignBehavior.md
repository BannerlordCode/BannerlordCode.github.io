---
title: "IAlleyCampaignBehavior"
description: "IAlleyCampaignBehavior：TaleWorlds.CampaignSystem 的 public 接口，继承 ICampaignBehavior；公开成员 10 个（方法 10、属性 0、字段 0）。源文件 TaleWorlds.CampaignSystem/CampaignBehaviors/IAlleyCampaignBehavior.cs。"
---
# IAlleyCampaignBehavior

**Namespace:** `TaleWorlds.CampaignSystem.CampaignBehaviors`
**Module:** `TaleWorlds.CampaignSystem`
**Type:** `public interface IAlleyCampaignBehavior : ICampaignBehavior`
**File:** `TaleWorlds.CampaignSystem/CampaignBehaviors/IAlleyCampaignBehavior.cs`

## 概述

IAlleyCampaignBehavior 位于 TaleWorlds.CampaignSystem 模块，源文件 TaleWorlds.CampaignSystem/CampaignBehaviors/IAlleyCampaignBehavior.cs。它是一个 public 接口，实现/继承 ICampaignBehavior，继承链为 IAlleyCampaignBehavior → ICampaignBehavior。public/protected 成员共 10 个：10 方法。

> 本页为批量初稿：签名逐条取自 bannerlord-1.4.6 反编译源码，未经改写。每个方法实际做什么、何时调用、有什么风险，请对照源文件方法体阅读。

## 心智模型

结构事实：IAlleyCampaignBehavior 是 TaleWorlds.CampaignSystem 的顶层类型，命名空间与模块目录不同（TaleWorlds.CampaignSystem.CampaignBehaviors），继承链 IAlleyCampaignBehavior → ICampaignBehavior。成员构成以方法为主（方法 10/10，属性 0/10），对外主要以操作入口暴露。本页只列真实签名：每个方法做什么用、何时调用、有哪些坑，需要对照 TaleWorlds.CampaignSystem/CampaignBehaviors/IAlleyCampaignBehavior.cs 的方法体或该类型的深写页确认。

## 主要成员

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `GetIsPlayerAlleyUnderAttack` | `bool GetIsPlayerAlleyUnderAttack(Alley alley);` | 方法 |
| `GetPlayerOwnedAlleyTroopCount` | `int GetPlayerOwnedAlleyTroopCount(Alley alley);` | 方法 |
| `GetResponseTimeLeftForAttackInDays` | `int GetResponseTimeLeftForAttackInDays(Alley alley);` | 方法 |
| `AbandonAlleyFromClanMenu` | `void AbandonAlleyFromClanMenu(Alley alley);` | 方法 |
| `GetAssignedClanMemberOfAlley` | `Hero GetAssignedClanMemberOfAlley(Alley alley);` | 方法 |
| `IsHeroAlleyLeaderOfAnyPlayerAlley` | `bool IsHeroAlleyLeaderOfAnyPlayerAlley(Hero hero);` | 方法 |
| `List` | `List<Hero>GetAllAssignedClanMembersForOwnedAlleys();` | 方法 |
| `ChangeAlleyMember` | `void ChangeAlleyMember(Alley alley, Hero newAlleyLead);` | 方法 |
| `OnPlayerRetreatedFromMission` | `void OnPlayerRetreatedFromMission();` | 方法 |
| `OnPlayerDiedInMission` | `void OnPlayerDiedInMission();` | 方法 |

## 参见

- [↑ campaignsystem 模块目录](../)
- [↑ API 参考](../../)
- [↑ 版本首页](../../../)
- [基类/接口 ICampaignBehavior](../ICampaignBehavior)
- [同命名空间 AgingCampaignBehavior](../AgingCampaignBehavior)
- [同命名空间 AllianceCampaignBehavior](../AllianceCampaignBehavior)
- [同命名空间 BackstoryCampaignBehavior](../BackstoryCampaignBehavior)
- [同命名空间 BanditInteractionsCampaignBehavior](../BanditInteractionsCampaignBehavior)
