---
title: "PotentialIssueData"
description: "PotentialIssueData：TaleWorlds.CampaignSystem 的 public 结构体；公开成员 10 个（方法 1、属性 6、字段 0）。源文件 TaleWorlds.CampaignSystem/Issues/PotentialIssueData.cs。"
---
# PotentialIssueData

**Namespace:** `TaleWorlds.CampaignSystem.Issues`
**Module:** `TaleWorlds.CampaignSystem`
**Type:** `public struct PotentialIssueData`
**File:** `TaleWorlds.CampaignSystem/Issues/PotentialIssueData.cs`

## 概述

PotentialIssueData 位于 TaleWorlds.CampaignSystem 模块，源文件 TaleWorlds.CampaignSystem/Issues/PotentialIssueData.cs。它是一个 public 结构体，继承链为 PotentialIssueData。public/protected 成员共 10 个：1 方法、6 属性、2 构造函数、1 嵌套类型。

> 本页为批量初稿：签名逐条取自 bannerlord-1.4.6 反编译源码，未经改写。每个方法实际做什么、何时调用、有什么风险，请对照源文件方法体阅读。

## 心智模型

结构事实：PotentialIssueData 是 TaleWorlds.CampaignSystem 的顶层类型，命名空间与模块目录不同（TaleWorlds.CampaignSystem.Issues），继承链 PotentialIssueData。成员构成以属性为主（属性 6/10，方法 1/10），对外主要以状态读取接口暴露。本页只列真实签名：每个方法做什么用、何时调用、有哪些坑，需要对照 TaleWorlds.CampaignSystem/Issues/PotentialIssueData.cs 的方法体或该类型的深写页确认。

## 主要成员

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `OnStartIssue` | `public PotentialIssueData.StartIssueDelegate OnStartIssue` | 属性 |
| `IssueId` | `public string IssueId` | 属性 |
| `IssueType` | `public Type IssueType` | 属性 |
| `Frequency` | `public IssueBase.IssueFrequency Frequency` | 属性 |
| `RelatedObject` | `public object RelatedObject` | 属性 |
| `IsValid` | `public bool IsValid` | 属性 |
| `PotentialIssueData` | `public PotentialIssueData(PotentialIssueData.StartIssueDelegate onStartIssue, Type issueType, IssueBase.IssueFrequency frequency, object relatedObject = null)` | 构造函数 |
| `PotentialIssueData` | `public PotentialIssueData(Type issueType, IssueBase.IssueFrequency frequency)` | 构造函数 |
| `StartIssueDelegate` | `public delegate IssueBase StartIssueDelegate(in PotentialIssueData pid, Hero issueOwner);` | 方法 |
| `StartIssueDelegate` | `public delegate IssueBase StartIssueDelegate(in PotentialIssueData pid, Hero issueOwner)` | 嵌套类型 |

## 参见

- [↑ campaignsystem 模块目录](../)
- [↑ API 参考](../../)
- [↑ 版本首页](../../../)
- [同命名空间 ArmyNeedsSuppliesIssueBehavior](../ArmyNeedsSuppliesIssueBehavior)
- [同命名空间 ArtisanCantSellProductsAtAFairPriceIssueBehavior](../ArtisanCantSellProductsAtAFairPriceIssueBehavior)
- [同命名空间 ArtisanOverpricedGoodsIssueBehavior](../ArtisanOverpricedGoodsIssueBehavior)
- [同命名空间 BettingFraudIssueBehavior](../BettingFraudIssueBehavior)
