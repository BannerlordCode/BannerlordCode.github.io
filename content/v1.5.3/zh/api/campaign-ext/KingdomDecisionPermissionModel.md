---
title: "KingdomDecisionPermissionModel"
description: "KingdomDecisionPermissionModel 的自动生成类参考。"
---
# KingdomDecisionPermissionModel

**Namespace:** TaleWorlds.CampaignSystem.ComponentInterfaces
**Module:** TaleWorlds.CampaignSystem
**Type:** `public abstract class KingdomDecisionPermissionModel : MBGameModel<KingdomDecisionPermissionModel> `
**Base:** MBGameModel<KingdomDecisionPermissionModel>
**Source:** TaleWorlds.CampaignSystem/ComponentInterfaces/KingdomDecisionPermissionModel.cs

## 概述

`KingdomDecisionPermissionModel` 的自动生成类参考页面。声明来自 `TaleWorlds.CampaignSystem/ComponentInterfaces/KingdomDecisionPermissionModel.cs`（ILSpy 反编译产物，已剥离 Token/RVA 注释）。

## 心智模型

自动生成的初始占位段落，后续由深写波次替换。

## 主要方法

### IsPolicyDecisionAllowed
`public abstract bool IsPolicyDecisionAllowed(PolicyObject policy)`

### IsWarDecisionAllowedBetweenKingdoms
`public abstract bool IsWarDecisionAllowedBetweenKingdoms(Kingdom kingdom1,Kingdom kingdom2,out TextObject reason)`

### IsPeaceDecisionAllowedBetweenKingdoms
`public abstract bool IsPeaceDecisionAllowedBetweenKingdoms(Kingdom kingdom1,Kingdom kingdom2,out TextObject reason)`

### IsStartAllianceDecisionAllowedBetweenKingdoms
`public abstract bool IsStartAllianceDecisionAllowedBetweenKingdoms(Kingdom kingdom1,Kingdom kingdom2,out TextObject reason)`

### IsAnnexationDecisionAllowed
`public abstract bool IsAnnexationDecisionAllowed(Settlement annexedSettlement)`

### IsExpulsionDecisionAllowed
`public abstract bool IsExpulsionDecisionAllowed(Clan expelledClan)`

### IsKingSelectionDecisionAllowed
`public abstract bool IsKingSelectionDecisionAllowed(Kingdom kingdom)`

## 参见

- [本区域目录](../)
- [API 参考](../../)
