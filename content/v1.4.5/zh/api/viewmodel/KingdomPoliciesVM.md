---
title: "KingdomPoliciesVM"
description: "KingdomPoliciesVM 的自动生成类参考。"
---
# KingdomPoliciesVM

**Namespace:** TaleWorlds.CampaignSystem.ViewModelCollection.KingdomManagement.Policies
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class KingdomPoliciesVM : KingdomCategoryVM`
**Base:** `KingdomCategoryVM`
**File:** `bin/TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds.CampaignSystem.ViewModelCollection.KingdomManagement.Policies/KingdomPoliciesVM.cs`

## 概述

`KingdomPoliciesVM` 位于 `TaleWorlds.CampaignSystem.ViewModelCollection.KingdomManagement.Policies`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `TaleWorlds.CampaignSystem.ViewModelCollection.KingdomManagement.Policies` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要属性

| Name | Signature |
|------|-----------|
| `DoneHint` | `public HintViewModel DoneHint { get; set; }` |
| `ActivePolicies` | `public MBBindingList<KingdomPolicyItemVM> ActivePolicies { get; set; }` |
| `OtherPolicies` | `public MBBindingList<KingdomPolicyItemVM> OtherPolicies { get; set; }` |
| `CurrentSelectedPolicy` | `public KingdomPolicyItemVM CurrentSelectedPolicy { get; set; }` |
| `CanProposeOrDisavowPolicy` | `public bool CanProposeOrDisavowPolicy { get; set; }` |
| `ProposalAndDisavowalCost` | `public int ProposalAndDisavowalCost { get; set; }` |
| `NumOfActivePoliciesText` | `public string NumOfActivePoliciesText { get; set; }` |
| `NumOfOtherPoliciesText` | `public string NumOfOtherPoliciesText { get; set; }` |
| `IsInProposeMode` | `public bool IsInProposeMode { get; set; }` |
| `DisavowPolicyText` | `public string DisavowPolicyText { get; set; }` |
| `CurrentActiveModeText` | `public string CurrentActiveModeText { get; set; }` |
| `CurrentActionText` | `public string CurrentActionText { get; set; }` |
| `ProposeNewPolicyText` | `public string ProposeNewPolicyText { get; set; }` |
| `BackText` | `public string BackText { get; set; }` |
| `PoliciesText` | `public string PoliciesText { get; set; }` |
| `ActivePoliciesText` | `public string ActivePoliciesText { get; set; }` |
| `PolicyLikelihoodText` | `public string PolicyLikelihoodText { get; set; }` |
| `LikelihoodHint` | `public HintViewModel LikelihoodHint { get; set; }` |
| `PolicyLikelihood` | `public int PolicyLikelihood { get; set; }` |
| `OtherPoliciesText` | `public string OtherPoliciesText { get; set; }` |
| `ProposeOrDisavowText` | `public string ProposeOrDisavowText { get; set; }` |
| `ProposeActionExplanationText` | `public string ProposeActionExplanationText { get; set; }` |

## 主要方法

### RefreshValues
`public override void RefreshValues()`

**用途 / Purpose:** **用途 / Purpose:** 使 values 的显示或缓存与底层状态保持一致。

```csharp
// 先通过子系统 API 拿到 KingdomPoliciesVM 实例
KingdomPoliciesVM kingdomPoliciesVM = ...;
kingdomPoliciesVM.RefreshValues();
```

### SelectPolicy
`public void SelectPolicy(PolicyObject policy)`

**用途 / Purpose:** **用途 / Purpose:** 调用 SelectPolicy 对应的操作。

```csharp
// 先通过子系统 API 拿到 KingdomPoliciesVM 实例
KingdomPoliciesVM kingdomPoliciesVM = ...;
kingdomPoliciesVM.SelectPolicy(policy);
```

### RefreshPolicyList
`public void RefreshPolicyList()`

**用途 / Purpose:** **用途 / Purpose:** 使 policy list 的显示或缓存与底层状态保持一致。

```csharp
// 先通过子系统 API 拿到 KingdomPoliciesVM 实例
KingdomPoliciesVM kingdomPoliciesVM = ...;
kingdomPoliciesVM.RefreshPolicyList();
```

## 使用示例

```csharp
// 通常从对应子系统 API 获取实例后调用
KingdomPoliciesVM kingdomPoliciesVM = ...;
kingdomPoliciesVM.RefreshValues();
```

## 参见

- [本区域目录](../)