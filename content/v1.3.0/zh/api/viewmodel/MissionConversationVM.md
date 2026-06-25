---
title: "MissionConversationVM"
description: "MissionConversationVM 的自动生成类参考。"
---
# MissionConversationVM

**Namespace:** TaleWorlds.CampaignSystem.ViewModelCollection.Conversation
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class MissionConversationVM : ViewModel`
**Base:** `ViewModel`
**File:** `TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/Conversation/MissionConversationVM.cs`

## 概述

`MissionConversationVM` 位于 `TaleWorlds.CampaignSystem.ViewModelCollection.Conversation`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `TaleWorlds.CampaignSystem.ViewModelCollection.Conversation` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要属性

| Name | Signature |
|------|-----------|
| `SelectedAnOptionOrLinkThisFrame` | `public bool SelectedAnOptionOrLinkThisFrame { get; set; }` |
| `Persuasion` | `public PersuasionVM Persuasion { get; set; }` |
| `PowerComparer` | `public PowerLevelComparer PowerComparer { get; set; }` |
| `Relation` | `public int Relation { get; set; }` |
| `MinRelation` | `public int MinRelation { get; set; }` |
| `MaxRelation` | `public int MaxRelation { get; set; }` |
| `DefenderLeader` | `public ConversationAggressivePartyItemVM DefenderLeader { get; set; }` |
| `AttackerLeader` | `public ConversationAggressivePartyItemVM AttackerLeader { get; set; }` |
| `AttackerParties` | `public MBBindingList<ConversationAggressivePartyItemVM> AttackerParties { get; set; }` |
| `DefenderParties` | `public MBBindingList<ConversationAggressivePartyItemVM> DefenderParties { get; set; }` |
| `MoreOptionText` | `public string MoreOptionText { get; set; }` |
| `GoldText` | `public string GoldText { get; set; }` |
| `PersuasionText` | `public string PersuasionText { get; set; }` |
| `IsCurrentCharacterValidInEncyclopedia` | `public bool IsCurrentCharacterValidInEncyclopedia { get; set; }` |
| `IsLoadingOver` | `public bool IsLoadingOver { get; set; }` |
| `IsPersuading` | `public bool IsPersuading { get; set; }` |
| `ContinueText` | `public string ContinueText { get; set; }` |
| `CurrentCharacterNameLbl` | `public string CurrentCharacterNameLbl { get; set; }` |
| `AnswerList` | `public MBBindingList<ConversationItemVM> AnswerList { get; set; }` |
| `DialogText` | `public string DialogText { get; set; }` |
| `IsAggressive` | `public bool IsAggressive { get; set; }` |
| `SelectedSide` | `public int SelectedSide { get; set; }` |
| `RelationText` | `public string RelationText { get; set; }` |
| `IsRelationEnabled` | `public bool IsRelationEnabled { get; set; }` |
| `IsBannerEnabled` | `public bool IsBannerEnabled { get; set; }` |
| `CurrentSelectedAnswer` | `public ConversationItemVM CurrentSelectedAnswer { get; set; }` |
| `ConversedHeroBanner` | `public BannerImageIdentifierVM ConversedHeroBanner { get; set; }` |
| `RelationHint` | `public HintViewModel RelationHint { get; set; }` |
| `FactionHint` | `public HintViewModel FactionHint { get; set; }` |
| `GoldHint` | `public HintViewModel GoldHint { get; set; }` |

## 主要方法

### RefreshValues
`public override void RefreshValues()`

**用途 / Purpose:** **用途 / Purpose:** 使 values 的显示或缓存与底层状态保持一致。

```csharp
// 先通过子系统 API 拿到 MissionConversationVM 实例
MissionConversationVM missionConversationVM = ...;
missionConversationVM.RefreshValues();
```

### OnConversationContinue
`public void OnConversationContinue()`

**用途 / Purpose:** **用途 / Purpose:** 在 conversation continue 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 MissionConversationVM 实例
MissionConversationVM missionConversationVM = ...;
missionConversationVM.OnConversationContinue();
```

### ExecuteLink
`public void ExecuteLink(string link)`

**用途 / Purpose:** **用途 / Purpose:** 执行 link 对应的操作或工作流。

```csharp
// 先通过子系统 API 拿到 MissionConversationVM 实例
MissionConversationVM missionConversationVM = ...;
missionConversationVM.ExecuteLink("example");
```

### ExecuteConversedHeroLink
`public void ExecuteConversedHeroLink()`

**用途 / Purpose:** **用途 / Purpose:** 执行 conversed hero link 对应的操作或工作流。

```csharp
// 先通过子系统 API 拿到 MissionConversationVM 实例
MissionConversationVM missionConversationVM = ...;
missionConversationVM.ExecuteConversedHeroLink();
```

### Refresh
`public void Refresh()`

**用途 / Purpose:** **用途 / Purpose:** 刷新当前对象的显示或缓存，使其与底层状态保持一致。

```csharp
// 先通过子系统 API 拿到 MissionConversationVM 实例
MissionConversationVM missionConversationVM = ...;
missionConversationVM.Refresh();
```

### ExecuteCloseTooltip
`public void ExecuteCloseTooltip()`

**用途 / Purpose:** **用途 / Purpose:** 执行 close tooltip 对应的操作或工作流。

```csharp
// 先通过子系统 API 拿到 MissionConversationVM 实例
MissionConversationVM missionConversationVM = ...;
missionConversationVM.ExecuteCloseTooltip();
```

### ExecuteHeroTooltip
`public void ExecuteHeroTooltip()`

**用途 / Purpose:** **用途 / Purpose:** 执行 hero tooltip 对应的操作或工作流。

```csharp
// 先通过子系统 API 拿到 MissionConversationVM 实例
MissionConversationVM missionConversationVM = ...;
missionConversationVM.ExecuteHeroTooltip();
```

### ExecuteFinalizeSelection
`public void ExecuteFinalizeSelection()`

**用途 / Purpose:** **用途 / Purpose:** 执行 finalize selection 对应的操作或工作流。

```csharp
// 先通过子系统 API 拿到 MissionConversationVM 实例
MissionConversationVM missionConversationVM = ...;
missionConversationVM.ExecuteFinalizeSelection();
```

### ExecuteContinue
`public void ExecuteContinue()`

**用途 / Purpose:** **用途 / Purpose:** 执行 continue 对应的操作或工作流。

```csharp
// 先通过子系统 API 拿到 MissionConversationVM 实例
MissionConversationVM missionConversationVM = ...;
missionConversationVM.ExecuteContinue();
```

### OnFinalize
`public override void OnFinalize()`

**用途 / Purpose:** **用途 / Purpose:** 在 finalize 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 MissionConversationVM 实例
MissionConversationVM missionConversationVM = ...;
missionConversationVM.OnFinalize();
```

## 使用示例

```csharp
// 通常从对应子系统 API 获取实例后调用
MissionConversationVM missionConversationVM = ...;
missionConversationVM.RefreshValues();
```

## 参见

- [本区域目录](../)