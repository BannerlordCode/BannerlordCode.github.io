---
title: "IAllianceCampaignBehavior"
description: "IAllianceCampaignBehavior：TaleWorlds.CampaignSystem 的 public 接口；公开成员 16 个（方法 16、属性 0、字段 0）。源文件 TaleWorlds.CampaignSystem/CampaignBehaviors/IAllianceCampaignBehavior.cs。"
---
# IAllianceCampaignBehavior

**Namespace:** `TaleWorlds.CampaignSystem.CampaignBehaviors`
**Module:** `TaleWorlds.CampaignSystem`
**Type:** `public interface IAllianceCampaignBehavior`
**File:** `TaleWorlds.CampaignSystem/CampaignBehaviors/IAllianceCampaignBehavior.cs`

## 概述

IAllianceCampaignBehavior 位于 TaleWorlds.CampaignSystem 模块，源文件 TaleWorlds.CampaignSystem/CampaignBehaviors/IAllianceCampaignBehavior.cs。它是一个 public 接口，继承链为 IAllianceCampaignBehavior。public/protected 成员共 16 个：16 方法。

> 本页为批量初稿：签名逐条取自 bannerlord-1.4.6 反编译源码，未经改写。每个方法实际做什么、何时调用、有什么风险，请对照源文件方法体阅读。

## 心智模型

结构事实：IAllianceCampaignBehavior 是 TaleWorlds.CampaignSystem 的顶层类型，命名空间与模块目录不同（TaleWorlds.CampaignSystem.CampaignBehaviors），继承链 IAllianceCampaignBehavior。成员构成以方法为主（方法 16/16，属性 0/16），对外主要以操作入口暴露。本页只列真实签名：每个方法做什么用、何时调用、有哪些坑，需要对照 TaleWorlds.CampaignSystem/CampaignBehaviors/IAllianceCampaignBehavior.cs 的方法体或该类型的深写页确认。

## 主要成员

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `OnAllianceOfferedToPlayerKingdom` | `void OnAllianceOfferedToPlayerKingdom(Kingdom proposerKingdom);` | 方法 |
| `OnAllianceOfferedToPlayer` | `void OnAllianceOfferedToPlayer(Kingdom proposerKingdom);` | 方法 |
| `OnCallToWarAgreementProposedToPlayerKingdom` | `void OnCallToWarAgreementProposedToPlayerKingdom(Kingdom proposerKingdom, Kingdom kingdomToCallToWarAgainst);` | 方法 |
| `OnCallToWarAgreementProposedByPlayerKingdom` | `void OnCallToWarAgreementProposedByPlayerKingdom(Kingdom proposedKingdom, Kingdom kingdomToCallToWarAgainst);` | 方法 |
| `OnCallToWarAgreementProposedToPlayer` | `void OnCallToWarAgreementProposedToPlayer(Kingdom proposerKingdom, Kingdom kingdomToCallToWarAgainst);` | 方法 |
| `OnCallToWarAgreementProposedByPlayer` | `void OnCallToWarAgreementProposedByPlayer(Kingdom proposedKingdom, Kingdom kingdomToCallToWarAgainst);` | 方法 |
| `IsAllyWithKingdom` | `bool IsAllyWithKingdom(Kingdom kingdom1, Kingdom kingdom2);` | 方法 |
| `StartAlliance` | `void StartAlliance(Kingdom proposerKingdom, Kingdom receiverKingdom);` | 方法 |
| `EndAlliance` | `void EndAlliance(Kingdom kingdom1, Kingdom kingdom2);` | 方法 |
| `HasCalledToWar` | `bool HasCalledToWar(Kingdom callingKingdom, Kingdom calledKingdom);` | 方法 |
| `IsAtWarByCallToWarAgreement` | `bool IsAtWarByCallToWarAgreement(Kingdom calledKingdom, Kingdom kingdomToCallToWarAgainst, out Kingdom callingKingdom);` | 方法 |
| `StartCallToWarAgreement` | `void StartCallToWarAgreement(Kingdom callingKingdom, Kingdom calledKingdom, Kingdom kingdomToCallToWarAgainst, int callToWarCost, bool isPlayerPaying = false);` | 方法 |
| `EndCallToWarAgreement` | `void EndCallToWarAgreement(Kingdom callingKingdom, Kingdom calledKingdom, Kingdom kingdomToCallToWarAgainst);` | 方法 |
| `List` | `List<Kingdom>GetKingdomsToCallToWarAgainst(Kingdom callingKingdom, Kingdom calledKingdom);` | 方法 |
| `GetAllianceEndDate` | `CampaignTime GetAllianceEndDate(Kingdom kingdom1, Kingdom kingdom2);` | 方法 |
| `DenyCallToWarAgreement` | `void DenyCallToWarAgreement(Kingdom callingKingdom, Kingdom calledKingdom);` | 方法 |

## 参见

- [↑ campaignsystem 模块目录](../)
- [↑ API 参考](../../)
- [↑ 版本首页](../../../)
- [同命名空间 AgingCampaignBehavior](../AgingCampaignBehavior)
- [同命名空间 AllianceCampaignBehavior](../AllianceCampaignBehavior)
- [同命名空间 BackstoryCampaignBehavior](../BackstoryCampaignBehavior)
- [同命名空间 BanditInteractionsCampaignBehavior](../BanditInteractionsCampaignBehavior)
