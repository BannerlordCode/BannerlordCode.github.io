---
title: "IssueQuestFlags"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `IssueQuestFlags`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.3.15](../../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# IssueQuestFlags

**Namespace:** TaleWorlds.CampaignSystem.GameMenus
**Module:** TaleWorlds.CampaignSystem
**Type:** `public enum IssueQuestFlags`
**Area:** campaign-ext

## Overview

`IssueQuestFlags` lives in `TaleWorlds.CampaignSystem.GameMenus`, and its public surface shows that it acts as a formal extension or data entry point for this subsystem.

## Mental Model

Start from namespace `TaleWorlds.CampaignSystem.GameMenus` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Enum Values

| Name |
|------|
| `None` |
| `0` |
| `AvailableIssue` |
| `1` |
| `ActiveIssue` |
| `2` |
| `ActiveStoryQuest` |
| `4` |
| `TrackedIssue` |
| `8` |
| `TrackedStoryQuest` |

## Usage Example

```csharp
IssueQuestFlags example = IssueQuestFlags.None;
```

## See Also

- [Complete Class Catalog](../catalog)
- [Area catalog](../catalog-campaign)
