---
title: "MissionConversationVM"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `MissionConversationVM`
- [← Area / Back to viewmodel](./)
- [↑ API Index](../)
- [🏠 Home v1.3.0](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# MissionConversationVM

**Namespace:** TaleWorlds.CampaignSystem.ViewModelCollection.Conversation
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class MissionConversationVM : ViewModel`
**Base:** `ViewModel`
**File:** `TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/Conversation/MissionConversationVM.cs`

## Overview

`MissionConversationVM` lives in `TaleWorlds.CampaignSystem.ViewModelCollection.Conversation` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.CampaignSystem.ViewModelCollection.Conversation` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

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

## Key Methods

### RefreshValues
`public override void RefreshValues()`

**Purpose:** Refreshes the display or cache of `values`.

### OnConversationContinue
`public void OnConversationContinue()`

**Purpose:** Called when the `conversation continue` event is raised.

### ExecuteLink
`public void ExecuteLink(string link)`

**Purpose:** Executes the `link` operation or workflow.

### ExecuteConversedHeroLink
`public void ExecuteConversedHeroLink()`

**Purpose:** Executes the `conversed hero link` operation or workflow.

### Refresh
`public void Refresh()`

**Purpose:** Refreshes the display or cache of `refresh`.

### ExecuteCloseTooltip
`public void ExecuteCloseTooltip()`

**Purpose:** Executes the `close tooltip` operation or workflow.

### ExecuteHeroTooltip
`public void ExecuteHeroTooltip()`

**Purpose:** Executes the `hero tooltip` operation or workflow.

### ExecuteFinalizeSelection
`public void ExecuteFinalizeSelection()`

**Purpose:** Executes the `finalize selection` operation or workflow.

### ExecuteContinue
`public void ExecuteContinue()`

**Purpose:** Executes the `continue` operation or workflow.

### OnFinalize
`public override void OnFinalize()`

**Purpose:** Called when the `finalize` event is raised.

## Usage Example

```csharp
var value = new MissionConversationVM();
value.RefreshValues();
```

## See Also

- [Complete Class Catalog](../catalog)