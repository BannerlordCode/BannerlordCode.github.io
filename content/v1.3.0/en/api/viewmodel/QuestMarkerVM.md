---
title: "QuestMarkerVM"
description: "Auto-generated class reference for QuestMarkerVM."
---
# QuestMarkerVM

**Namespace:** TaleWorlds.CampaignSystem.ViewModelCollection.Quests
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class QuestMarkerVM : ViewModel`
**Base:** `ViewModel`
**File:** `TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/Quests/QuestMarkerVM.cs`

## Overview

`QuestMarkerVM` lives in `TaleWorlds.CampaignSystem.ViewModelCollection.Quests` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.CampaignSystem.ViewModelCollection.Quests` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `QuestTitle` | `public TextObject QuestTitle { get; }` |
| `QuestHintText` | `public TextObject QuestHintText { get; }` |
| `IssueQuestFlag` | `public CampaignUIHelper.IssueQuestFlags IssueQuestFlag { get; }` |
| `IsTrackMarker` | `public bool IsTrackMarker { get; set; }` |
| `QuestMarkerType` | `public int QuestMarkerType { get; set; }` |
| `QuestHint` | `public HintViewModel QuestHint { get; set; }` |

## Key Methods

### RefreshValues
`public override void RefreshValues()`

**Purpose:** **Purpose:** Keeps the display or cache of values in sync with the underlying state.

```csharp
// Obtain an instance of QuestMarkerVM from the subsystem API first
QuestMarkerVM questMarkerVM = ...;
questMarkerVM.RefreshValues();
```

## Usage Example

```csharp
// Typically call this after obtaining an instance from the subsystem API
QuestMarkerVM questMarkerVM = ...;
questMarkerVM.RefreshValues();
```

## See Also

- [Area Index](../)