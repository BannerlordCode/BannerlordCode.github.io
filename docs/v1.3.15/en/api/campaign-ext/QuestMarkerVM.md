<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `QuestMarkerVM`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.3.15](../../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
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

### RefreshWith
`public void RefreshWith(CampaignUIHelper.IssueQuestFlags issueQuestFlag, TextObject questTitle = null, TextObject questHintText = null)`

**Purpose:** Refreshes the display or cache of `with`.

### RefreshValues
`public override void RefreshValues()`

**Purpose:** Refreshes the display or cache of `values`.

## Usage Example

```csharp
var value = new QuestMarkerVM();
value.RefreshWith(issueQuestFlag, null, null);
```

## See Also

- [Complete Class Catalog](../catalog)