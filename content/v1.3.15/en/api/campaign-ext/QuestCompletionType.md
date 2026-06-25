---
title: "QuestCompletionType"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `QuestCompletionType`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.3.15](../../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# QuestCompletionType

**Namespace:** TaleWorlds.CampaignSystem.ViewModelCollection.Quests
**Module:** TaleWorlds.CampaignSystem
**Type:** `public enum QuestCompletionType`
**Area:** campaign-ext

## Overview

`QuestCompletionType` lives in `TaleWorlds.CampaignSystem.ViewModelCollection.Quests`, and its public surface shows that it acts as a formal extension or data entry point for this subsystem.

## Mental Model

Start from namespace `TaleWorlds.CampaignSystem.ViewModelCollection.Quests` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Enum Values

| Name |
|------|
| `Active` |
| `Successful` |

## Usage Example

```csharp
QuestCompletionType example = QuestCompletionType.Active;
```

## See Also

- [Complete Class Catalog](../catalog)
- [Area catalog](../catalog-campaign)
