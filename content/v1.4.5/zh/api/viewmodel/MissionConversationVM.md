---
title: "MissionConversationVM"
---
<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `MissionConversationVM`
- [← 本领域 / 返回 viewmodel](./)
- [↑ API 目录](../)
- [🏠 首页 v1.4.5](../../)
- [⭐ 版本架构](../../architecture/)
<!-- END BREADCRUMB -->
# MissionConversationVM

**Namespace:** TaleWorlds.CampaignSystem.ViewModelCollection.Conversation
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class MissionConversationVM : ViewModel`
**Base:** `ViewModel`
**File:** `Bannerlord.Source/bin/TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds.CampaignSystem.ViewModelCollection.Conversation/MissionConversationVM.cs`

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

**用途 / Purpose:** 刷新 `values` 的显示或缓存。

### Tick
`public void Tick(float dt)`

**用途 / Purpose:** 处理 `tick` 相关逻辑。

### OnConversationContinue
`public void OnConversationContinue()`

**用途 / Purpose:** 当 `conversation continue` 事件触发时调用此方法。

### ExecuteLink
`public void ExecuteLink(string link)`

**用途 / Purpose:** 执行 `link` 操作或流程。

### ExecuteConversedHeroLink
`public void ExecuteConversedHeroLink()`

**用途 / Purpose:** 执行 `conversed hero link` 操作或流程。

### Refresh
`public void Refresh()`

**用途 / Purpose:** 刷新 `refresh` 的显示或缓存。

### ExecuteCloseTooltip
`public void ExecuteCloseTooltip()`

**用途 / Purpose:** 执行 `close tooltip` 操作或流程。

### ExecuteHeroTooltip
`public void ExecuteHeroTooltip()`

**用途 / Purpose:** 执行 `hero tooltip` 操作或流程。

### ExecuteFinalizeSelection
`public void ExecuteFinalizeSelection()`

**用途 / Purpose:** 执行 `finalize selection` 操作或流程。

### ExecuteContinue
`public void ExecuteContinue()`

**用途 / Purpose:** 执行 `continue` 操作或流程。

### OnFinalize
`public override void OnFinalize()`

**用途 / Purpose:** 当 `finalize` 事件触发时调用此方法。

## 使用示例

```csharp
var value = new MissionConversationVM();
value.RefreshValues();
```

## 参见

- [完整类目录](../catalog)