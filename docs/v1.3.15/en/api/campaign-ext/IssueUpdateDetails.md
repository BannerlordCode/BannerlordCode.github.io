<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `IssueUpdateDetails`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.3.15](../../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# IssueUpdateDetails

**Namespace:** TaleWorlds.CampaignSystem.Issues
**Module:** TaleWorlds.CampaignSystem
**Type:** `public enum IssueUpdateDetails`
**Area:** campaign-ext

## Overview

`IssueUpdateDetails` lives in `TaleWorlds.CampaignSystem.Issues`, and its public surface shows that it acts as a formal extension or data entry point for this subsystem.

## Mental Model

Start from namespace `TaleWorlds.CampaignSystem.Issues` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Enum Values

| Name |
|------|
| `None` |
| `PlayerStartedIssueQuestClassicSolution` |
| `PlayerSentTroopsToQuest` |
| `SentTroopsFinishedQuest` |
| `SentTroopsFailedQuest` |
| `IssueFinishedWithSuccess` |
| `IssueFinishedWithBetrayal` |
| `IssueFinishedByAILord` |
| `IssueFail` |
| `IssueCancel` |

## Usage Example

```csharp
IssueUpdateDetails example = IssueUpdateDetails.None;
```

## See Also

- [Complete Class Catalog](../catalog)
- [Area catalog](../catalog-campaign)
