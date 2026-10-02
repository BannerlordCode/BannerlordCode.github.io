---
title: "KingdomPolicyItemVM"
description: "KingdomPolicyItemVM：TaleWorlds.CampaignSystem.ViewModelCollection.KingdomManagement.Policies 的 public 类，继承 KingdomItemVM；公开成员 11 个（方法 2、属性 8、字段 0）。canonical 桶 viewmodel。源文件 TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/KingdomManagement/Policies/KingdomPolicyItemVM.cs。"
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# KingdomPolicyItemVM

**Namespace:** `TaleWorlds.CampaignSystem.ViewModelCollection.KingdomManagement.Policies`
**Module:** `TaleWorlds.CampaignSystem.ViewModelCollection`
**Type:** `public class KingdomPolicyItemVM : KingdomItemVM`
**File:** `TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/KingdomManagement/Policies/KingdomPolicyItemVM.cs`
**Bucket:** `viewmodel` (rule:TaleWorlds.CampaignSystem.ViewModelCollection)

## 概述

KingdomPolicyItemVM 位于 TaleWorlds.CampaignSystem.ViewModelCollection 模块，源文件 TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/KingdomManagement/Policies/KingdomPolicyItemVM.cs。它是一个 public 类，实现/继承 KingdomItemVM，继承链为 KingdomPolicyItemVM → KingdomItemVM → ViewModel → IViewModel → INotifyPropertyChanged。public/protected 成员共 11 个：2 方法、8 属性、1 构造函数。

> 本页为批量初稿：签名逐条取自 bannerlord-1.4.6 反编译源码，未经改写。桶归属由 `tools/_dir-map-canonical.json` 现算。每个方法实际做什么、何时调用、有什么风险，请对照源文件方法体阅读。

## 心智模型

结构事实：KingdomPolicyItemVM 落在 canonical 桶 `viewmodel`（命中规则 `rule:TaleWorlds.CampaignSystem.ViewModelCollection`），命名空间 `TaleWorlds.CampaignSystem.ViewModelCollection.KingdomManagement.Policies`，继承链 KingdomPolicyItemVM → KingdomItemVM → ViewModel → IViewModel → INotifyPropertyChanged。成员构成以属性为主（属性 8/11，方法 2/11），对外主要以状态读取接口暴露。继承链上的 INotifyPropertyChanged 不在同桶内，说明该类型把一部分行为交给跨桶基类。本页只列真实签名：每个方法做什么用、何时调用、有哪些坑，需要对照 TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/KingdomManagement/Policies/KingdomPolicyItemVM.cs 的方法体或该类型的深写页确认。

## 主要成员

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `KingdomPolicyItemVM` | `public KingdomPolicyItemVM(PolicyObject policy, Action<KingdomPolicyItemVM>onSelect, Func<PolicyObject, bool>getIsPolicyActive)` | 构造函数 |
| `RefreshValues` | `public override void RefreshValues()` | 方法 |
| `OnSelect` | `protected override void OnSelect()` | 方法 |
| `PolicyAcceptanceText` | `public string PolicyAcceptanceText` | 属性 |
| `MBBindingList` | `public MBBindingList<StringItemWithHintVM>PolicyEffectList` | 属性 |
| `PolicyLikelihoodText` | `public string PolicyLikelihoodText` | 属性 |
| `LikelihoodHint` | `public HintViewModel LikelihoodHint` | 属性 |
| `Policy` | `public PolicyObject Policy` | 属性 |
| `PolicyLikelihood` | `public int PolicyLikelihood` | 属性 |
| `Name` | `public string Name` | 属性 |
| `Explanation` | `public string Explanation` | 属性 |

## 参见

- [↑ 本桶目录](..//)
- [↑ API 参考](../..//)
- [↑ 版本首页](../../..//)
- [基类/接口 KingdomItemVM](../KingdomItemVM/)
- [同命名空间 KingdomPoliciesVM](../KingdomPoliciesVM/)
