---
title: "MissionConversationVM"
description: "Auto-generated class reference for MissionConversationVM."
---
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

**Purpose:** Keeps the display or cache of values in sync with the underlying state.

```csharp
// Obtain an instance of MissionConversationVM from the subsystem API first
MissionConversationVM missionConversationVM = ...;
missionConversationVM.RefreshValues();
```

### Tick
`public void Tick(float dt)`

**Purpose:** Advances the this instance's state by one frame or update cycle.

```csharp
// Obtain an instance of MissionConversationVM from the subsystem API first
MissionConversationVM missionConversationVM = ...;
missionConversationVM.Tick(0);
```

### OnConversationContinue
`public void OnConversationContinue()`

**Purpose:** Invoked when the conversation continue event is raised.

```csharp
// Obtain an instance of MissionConversationVM from the subsystem API first
MissionConversationVM missionConversationVM = ...;
missionConversationVM.OnConversationContinue();
```

### ExecuteLink
`public void ExecuteLink(string link)`

**Purpose:** Runs the operation or workflow associated with link.

```csharp
// Obtain an instance of MissionConversationVM from the subsystem API first
MissionConversationVM missionConversationVM = ...;
missionConversationVM.ExecuteLink("example");
```

### ExecuteConversedHeroLink
`public void ExecuteConversedHeroLink()`

**Purpose:** Runs the operation or workflow associated with conversed hero link.

```csharp
// Obtain an instance of MissionConversationVM from the subsystem API first
MissionConversationVM missionConversationVM = ...;
missionConversationVM.ExecuteConversedHeroLink();
```

### Refresh
`public void Refresh()`

**Purpose:** Refreshes the this instance's display or cache to match the underlying state.

```csharp
// Obtain an instance of MissionConversationVM from the subsystem API first
MissionConversationVM missionConversationVM = ...;
missionConversationVM.Refresh();
```

### ExecuteCloseTooltip
`public void ExecuteCloseTooltip()`

**Purpose:** Runs the operation or workflow associated with close tooltip.

```csharp
// Obtain an instance of MissionConversationVM from the subsystem API first
MissionConversationVM missionConversationVM = ...;
missionConversationVM.ExecuteCloseTooltip();
```

### ExecuteHeroTooltip
`public void ExecuteHeroTooltip()`

**Purpose:** Runs the operation or workflow associated with hero tooltip.

```csharp
// Obtain an instance of MissionConversationVM from the subsystem API first
MissionConversationVM missionConversationVM = ...;
missionConversationVM.ExecuteHeroTooltip();
```

### ExecuteFinalizeSelection
`public void ExecuteFinalizeSelection()`

**Purpose:** Runs the operation or workflow associated with finalize selection.

```csharp
// Obtain an instance of MissionConversationVM from the subsystem API first
MissionConversationVM missionConversationVM = ...;
missionConversationVM.ExecuteFinalizeSelection();
```

### ExecuteContinue
`public void ExecuteContinue()`

**Purpose:** Runs the operation or workflow associated with continue.

```csharp
// Obtain an instance of MissionConversationVM from the subsystem API first
MissionConversationVM missionConversationVM = ...;
missionConversationVM.ExecuteContinue();
```

### OnFinalize
`public override void OnFinalize()`

**Purpose:** Invoked when the finalize event is raised.

```csharp
// Obtain an instance of MissionConversationVM from the subsystem API first
MissionConversationVM missionConversationVM = ...;
missionConversationVM.OnFinalize();
```

## Usage Example

```csharp
// Typically call this after obtaining an instance from the subsystem API
MissionConversationVM missionConversationVM = ...;
missionConversationVM.RefreshValues();
```

## See Also

- [Area Index](../)