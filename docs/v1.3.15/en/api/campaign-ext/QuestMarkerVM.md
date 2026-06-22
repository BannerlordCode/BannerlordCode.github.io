<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `QuestMarkerVM`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# QuestMarkerVM

**Namespace:** TaleWorlds.CampaignSystem.ViewModelCollection.Quests
**Module:** TaleWorlds.CampaignSystem
**Type:** class
**Area:** Campaign System

## Overview

> This is an auto-generated stub. `QuestMarkerVM` is a class in the `TaleWorlds.CampaignSystem.ViewModelCollection.Quests` namespace.
> For properties, methods, and developer use-cases, refer to source code or contribute documentation.


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

```csharp
public void RefreshWith(CampaignUIHelper.IssueQuestFlags issueQuestFlag, TextObject questTitle = null, TextObject questHintText = null)
```

### RefreshValues

```csharp
public override void RefreshValues()
```

## See Also

- [Complete Class Catalog](../catalog)
- [Area catalog](../catalog-campaign)