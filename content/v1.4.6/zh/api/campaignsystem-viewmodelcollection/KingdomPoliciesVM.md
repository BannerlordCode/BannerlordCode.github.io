---
title: "KingdomPoliciesVM"
description: "KingdomPoliciesVM：TaleWorlds.CampaignSystem.ViewModelCollection 的 public 类，继承 KingdomCategoryVM；公开成员 26 个（方法 3、属性 22、字段 0）。源文件 TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/KingdomManagement/Policies/KingdomPoliciesVM.cs。"
---
# KingdomPoliciesVM

**Namespace:** `TaleWorlds.CampaignSystem.ViewModelCollection.KingdomManagement.Policies`
**Module:** `TaleWorlds.CampaignSystem.ViewModelCollection`
**Type:** `public class KingdomPoliciesVM : KingdomCategoryVM`
**File:** `TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/KingdomManagement/Policies/KingdomPoliciesVM.cs`

## 概述

KingdomPoliciesVM 位于 TaleWorlds.CampaignSystem.ViewModelCollection 模块，源文件 TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/KingdomManagement/Policies/KingdomPoliciesVM.cs。它是一个 public 类，实现/继承 KingdomCategoryVM，继承链为 KingdomPoliciesVM → KingdomCategoryVM → ViewModel。public/protected 成员共 26 个：3 方法、22 属性、1 构造函数。

> 本页为批量初稿：签名逐条取自 bannerlord-1.4.6 反编译源码，未经改写。每个方法实际做什么、何时调用、有什么风险，请对照源文件方法体阅读。

## 心智模型

结构事实：KingdomPoliciesVM 是 TaleWorlds.CampaignSystem.ViewModelCollection 的顶层类型，命名空间与模块目录不同（TaleWorlds.CampaignSystem.ViewModelCollection.KingdomManagement.Policies），继承链 KingdomPoliciesVM → KingdomCategoryVM → ViewModel。成员构成以属性为主（属性 22/26，方法 3/26），对外主要以状态读取接口暴露。继承链上的 ViewModel 不在本模块内，说明该类型把一部分行为交给跨模块基类。本页只列真实签名：每个方法做什么用、何时调用、有哪些坑，需要对照 TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/KingdomManagement/Policies/KingdomPoliciesVM.cs 的方法体或该类型的深写页确认。

## 主要成员

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `KingdomPoliciesVM` | `public KingdomPoliciesVM(Action<KingdomDecision>forceDecide)` | 构造函数 |
| `RefreshValues` | `public override void RefreshValues()` | 方法 |
| `SelectPolicy` | `public void SelectPolicy(PolicyObject policy)` | 方法 |
| `RefreshPolicyList` | `public void RefreshPolicyList()` | 方法 |
| `DoneHint` | `public HintViewModel DoneHint` | 属性 |
| `MBBindingList` | `public MBBindingList<KingdomPolicyItemVM>ActivePolicies` | 属性 |
| `MBBindingList` | `public MBBindingList<KingdomPolicyItemVM>OtherPolicies` | 属性 |
| `CurrentSelectedPolicy` | `public KingdomPolicyItemVM CurrentSelectedPolicy` | 属性 |
| `CanProposeOrDisavowPolicy` | `public bool CanProposeOrDisavowPolicy` | 属性 |
| `ProposalAndDisavowalCost` | `public int ProposalAndDisavowalCost` | 属性 |
| `NumOfActivePoliciesText` | `public string NumOfActivePoliciesText` | 属性 |
| `NumOfOtherPoliciesText` | `public string NumOfOtherPoliciesText` | 属性 |
| `IsInProposeMode` | `public bool IsInProposeMode` | 属性 |
| `DisavowPolicyText` | `public string DisavowPolicyText` | 属性 |
| `CurrentActiveModeText` | `public string CurrentActiveModeText` | 属性 |
| `CurrentActionText` | `public string CurrentActionText` | 属性 |
| `ProposeNewPolicyText` | `public string ProposeNewPolicyText` | 属性 |
| `BackText` | `public string BackText` | 属性 |
| `PoliciesText` | `public string PoliciesText` | 属性 |
| `ActivePoliciesText` | `public string ActivePoliciesText` | 属性 |
| `PolicyLikelihoodText` | `public string PolicyLikelihoodText` | 属性 |
| `LikelihoodHint` | `public HintViewModel LikelihoodHint` | 属性 |
| `PolicyLikelihood` | `public int PolicyLikelihood` | 属性 |
| `OtherPoliciesText` | `public string OtherPoliciesText` | 属性 |
| `ProposeOrDisavowText` | `public string ProposeOrDisavowText` | 属性 |
| `ProposeActionExplanationText` | `public string ProposeActionExplanationText` | 属性 |

## 参见

- [↑ campaignsystem-viewmodelcollection 模块目录](../)
- [↑ API 参考](../../)
- [↑ 版本首页](../../../)
- [基类/接口 KingdomCategoryVM](../KingdomCategoryVM)
- [同命名空间 KingdomPolicyItemVM](../KingdomPolicyItemVM)
