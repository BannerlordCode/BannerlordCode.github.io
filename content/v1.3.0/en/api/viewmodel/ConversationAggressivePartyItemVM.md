---
title: "ConversationAggressivePartyItemVM"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `ConversationAggressivePartyItemVM`
- [← Area / Back to viewmodel](./)
- [↑ API Index](../)
- [🏠 Home v1.3.0](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# ConversationAggressivePartyItemVM

**Namespace:** TaleWorlds.CampaignSystem.ViewModelCollection.Conversation
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class ConversationAggressivePartyItemVM : ViewModel`
**Base:** `ViewModel`
**File:** `TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/Conversation/ConversationAggressivePartyItemVM.cs`

## Overview

`ConversationAggressivePartyItemVM` lives in `TaleWorlds.CampaignSystem.ViewModelCollection.Conversation` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.CampaignSystem.ViewModelCollection.Conversation` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `LeaderVisual` | `public CharacterImageIdentifierVM LeaderVisual { get; set; }` |
| `HealthyAmount` | `public int HealthyAmount { get; set; }` |
| `Quests` | `public MBBindingList<QuestMarkerVM> Quests { get; set; }` |

## Key Methods

### ExecuteShowPartyTooltip
`public void ExecuteShowPartyTooltip()`

**Purpose:** Executes the `show party tooltip` operation or workflow.

### ExecuteHideTooltip
`public void ExecuteHideTooltip()`

**Purpose:** Executes the `hide tooltip` operation or workflow.

## Usage Example

```csharp
var value = new ConversationAggressivePartyItemVM();
value.ExecuteShowPartyTooltip();
```

## See Also

- [Complete Class Catalog](../catalog)