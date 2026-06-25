---
title: "DecisionItemBaseVM"
description: "DecisionItemBaseVM 的自动生成类参考。"
---
# DecisionItemBaseVM

**Namespace:** TaleWorlds.CampaignSystem.ViewModelCollection.KingdomManagement.Decisions.ItemTypes
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class DecisionItemBaseVM : ViewModel`
**Base:** `ViewModel`
**File:** `bin/TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds.CampaignSystem.ViewModelCollection.KingdomManagement.Decisions.ItemTypes/DecisionItemBaseVM.cs`

## 概述

`DecisionItemBaseVM` 位于 `TaleWorlds.CampaignSystem.ViewModelCollection.KingdomManagement.Decisions.ItemTypes`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `TaleWorlds.CampaignSystem.ViewModelCollection.KingdomManagement.Decisions.ItemTypes` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要属性

| Name | Signature |
|------|-----------|
| `KingdomDecisionMaker` | `public KingdomElection KingdomDecisionMaker { get; }` |
| `DoneInputKey` | `public InputKeyItemVM DoneInputKey { get; set; }` |
| `EndDecisionHint` | `public HintViewModel EndDecisionHint { get; set; }` |
| `DecisionType` | `public int DecisionType { get; set; }` |
| `TotalInfluenceText` | `public string TotalInfluenceText { get; set; }` |
| `IsActive` | `public bool IsActive { get; set; }` |
| `CurrentStageIndex` | `public int CurrentStageIndex { get; set; }` |
| `IsPlayerSupporter` | `public bool IsPlayerSupporter { get; set; }` |
| `CanEndDecision` | `public bool CanEndDecision { get; set; }` |
| `IsKingsDecisionOver` | `public bool IsKingsDecisionOver { get; set; }` |
| `RelationChangeText` | `public string RelationChangeText { get; set; }` |
| `DescriptionText` | `public string DescriptionText { get; set; }` |
| `TitleText` | `public string TitleText { get; set; }` |
| `DoneText` | `public string DoneText { get; set; }` |
| `InfluenceCostText` | `public string InfluenceCostText { get; set; }` |
| `DecisionOptionsList` | `public MBBindingList<DecisionOptionVM> DecisionOptionsList { get; set; }` |

## 主要方法

### RefreshValues
`public override void RefreshValues()`

**用途 / Purpose:** **用途 / Purpose:** 使 values 的显示或缓存与底层状态保持一致。

```csharp
// 先通过子系统 API 拿到 DecisionItemBaseVM 实例
DecisionItemBaseVM decisionItemBaseVM = ...;
decisionItemBaseVM.RefreshValues();
```

### ExecuteFinalSelection
`public void ExecuteFinalSelection()`

**用途 / Purpose:** **用途 / Purpose:** 执行 final selection 对应的操作或工作流。

```csharp
// 先通过子系统 API 拿到 DecisionItemBaseVM 实例
DecisionItemBaseVM decisionItemBaseVM = ...;
decisionItemBaseVM.ExecuteFinalSelection();
```

### OnFinalize
`public override void OnFinalize()`

**用途 / Purpose:** **用途 / Purpose:** 在 finalize 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 DecisionItemBaseVM 实例
DecisionItemBaseVM decisionItemBaseVM = ...;
decisionItemBaseVM.OnFinalize();
```

### SetDoneInputKey
`public void SetDoneInputKey(InputKeyItemVM inputKeyItemVM)`

**用途 / Purpose:** **用途 / Purpose:** 为 done input key 赋新值，并同步更新对象内部状态。

```csharp
// 先通过子系统 API 拿到 DecisionItemBaseVM 实例
DecisionItemBaseVM decisionItemBaseVM = ...;
decisionItemBaseVM.SetDoneInputKey(inputKeyItemVM);
```

## 使用示例

```csharp
// 通常从对应子系统 API 获取实例后调用
DecisionItemBaseVM decisionItemBaseVM = ...;
decisionItemBaseVM.RefreshValues();
```

## 参见

- [本区域目录](../)