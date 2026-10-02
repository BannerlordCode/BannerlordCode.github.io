---
title: "AllianceCampaignBehavior"
description: "AllianceCampaignBehavior：TaleWorlds.CampaignSystem 的 public 类，继承 CampaignBehaviorBase、IAllianceCampaignBehavior；公开成员 20 个（方法 18、属性 1、字段 0）。源文件 TaleWorlds.CampaignSystem/CampaignBehaviors/AllianceCampaignBehavior.cs。"
---
# AllianceCampaignBehavior

**Namespace:** `TaleWorlds.CampaignSystem.CampaignBehaviors`
**Module:** `TaleWorlds.CampaignSystem`
**Type:** `public class AllianceCampaignBehavior : CampaignBehaviorBase, IAllianceCampaignBehavior`
**File:** `TaleWorlds.CampaignSystem/CampaignBehaviors/AllianceCampaignBehavior.cs`

## 概述

AllianceCampaignBehavior 位于 TaleWorlds.CampaignSystem 模块，源文件 TaleWorlds.CampaignSystem/CampaignBehaviors/AllianceCampaignBehavior.cs。它是一个 public 类，实现/继承 CampaignBehaviorBase、IAllianceCampaignBehavior，继承链为 AllianceCampaignBehavior → CampaignBehaviorBase → ICampaignBehavior。public/protected 成员共 20 个：18 方法、1 属性、1 嵌套类型。

> 本页为批量初稿：签名逐条取自 bannerlord-1.4.6 反编译源码，未经改写。每个方法实际做什么、何时调用、有什么风险，请对照源文件方法体阅读。

## 心智模型

结构事实：AllianceCampaignBehavior 是 TaleWorlds.CampaignSystem 的顶层类型，命名空间与模块目录不同（TaleWorlds.CampaignSystem.CampaignBehaviors），继承链 AllianceCampaignBehavior → CampaignBehaviorBase → ICampaignBehavior。成员构成以方法为主（方法 18/20，属性 1/20），对外主要以操作入口暴露。本页只列真实签名：每个方法做什么用、何时调用、有哪些坑，需要对照 TaleWorlds.CampaignSystem/CampaignBehaviors/AllianceCampaignBehavior.cs 的方法体或该类型的深写页确认。

## 主要成员

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `RegisterEvents` | `public override void RegisterEvents()` | 方法 |
| `SyncData` | `public override void SyncData(IDataStore dataStore)` | 方法 |
| `OnAllianceOfferedToPlayer` | `public void OnAllianceOfferedToPlayer(Kingdom offeringKingdom)` | 方法 |
| `OnAllianceOfferedToPlayerKingdom` | `public void OnAllianceOfferedToPlayerKingdom(Kingdom offeringKingdom)` | 方法 |
| `OnCallToWarAgreementProposedToPlayer` | `public void OnCallToWarAgreementProposedToPlayer(Kingdom proposerKingdom, Kingdom kingdomToCallToWarAgainst)` | 方法 |
| `OnCallToWarAgreementProposedToPlayerKingdom` | `public void OnCallToWarAgreementProposedToPlayerKingdom(Kingdom proposerKingdom, Kingdom kingdomToCallToWarAgainst)` | 方法 |
| `OnCallToWarAgreementProposedByPlayer` | `public void OnCallToWarAgreementProposedByPlayer(Kingdom proposedKingdom, Kingdom kingdomToCallToWarAgainst)` | 方法 |
| `GetAllianceEndDate` | `public CampaignTime GetAllianceEndDate(Kingdom kingdom1, Kingdom kingdom2)` | 方法 |
| `OnCallToWarAgreementProposedByPlayerKingdom` | `public void OnCallToWarAgreementProposedByPlayerKingdom(Kingdom proposedKingdom, Kingdom kingdomToCallToWarAgainst)` | 方法 |
| `IsAllyWithKingdom` | `public bool IsAllyWithKingdom(Kingdom kingdom1, Kingdom kingdom2)` | 方法 |
| `StartAlliance` | `public void StartAlliance(Kingdom proposerKingdom, Kingdom receiverKingdom)` | 方法 |
| `EndAlliance` | `public void EndAlliance(Kingdom kingdom1, Kingdom kingdom2)` | 方法 |
| `HasCalledToWar` | `public bool HasCalledToWar(Kingdom callingKingdom, Kingdom calledKingdom)` | 方法 |
| `IsAtWarByCallToWarAgreement` | `public bool IsAtWarByCallToWarAgreement(Kingdom calledKingdom, Kingdom kingdomToCallToWarAgainst, out Kingdom callingKingdom)` | 方法 |
| `StartCallToWarAgreement` | `public void StartCallToWarAgreement(Kingdom callingKingdom, Kingdom calledKingdom, Kingdom kingdomToCallToWarAgainst, int callToWarCost, bool isPlayerPaying = false)` | 方法 |
| `EndCallToWarAgreement` | `public void EndCallToWarAgreement(Kingdom callingKingdom, Kingdom calledKingdom, Kingdom kingdomToCallToWarAgainst)` | 方法 |
| `DenyCallToWarAgreement` | `public void DenyCallToWarAgreement(Kingdom callingKingdom, Kingdom calledKingdom)` | 方法 |
| `List` | `public List<Kingdom>GetKingdomsToCallToWarAgainst(Kingdom callingKingdom, Kingdom calledKingdom)` | 方法 |
| `SaveableTypeDefiner` | `public class AllianceCampaignBehaviorTypeDefiner : SaveableTypeDefiner` | 属性 |
| `SaveableTypeDefiner` | `public class AllianceCampaignBehaviorTypeDefiner : SaveableTypeDefiner` | 嵌套类型 |

## 参见

- [↑ campaignsystem 模块目录](../)
- [↑ API 参考](../../)
- [↑ 版本首页](../../../)
- [基类/接口 IAllianceCampaignBehavior](../IAllianceCampaignBehavior)
- [同命名空间 AgingCampaignBehavior](../AgingCampaignBehavior)
- [同命名空间 BackstoryCampaignBehavior](../BackstoryCampaignBehavior)
- [同命名空间 BanditInteractionsCampaignBehavior](../BanditInteractionsCampaignBehavior)
- [同命名空间 BanditSpawnCampaignBehavior](../BanditSpawnCampaignBehavior)
