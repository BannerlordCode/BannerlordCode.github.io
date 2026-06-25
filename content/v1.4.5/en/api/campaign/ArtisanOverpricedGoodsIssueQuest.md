---
title: "ArtisanOverpricedGoodsIssueQuest"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `ArtisanOverpricedGoodsIssueQuest`
- [← Area / Back to campaign](./)
- [↑ API Index](../)
- [🏠 Home v1.4.5](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# ArtisanOverpricedGoodsIssueQuest

**Namespace:** TaleWorlds.CampaignSystem.Issues
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class ArtisanOverpricedGoodsIssueQuest : QuestBase`
**Base:** `QuestBase`
**File:** `Bannerlord.Source/bin/TaleWorlds.CampaignSystem/TaleWorlds.CampaignSystem.Issues/ArtisanOverpricedGoodsIssueBehavior.cs`

## Overview

`ArtisanOverpricedGoodsIssueQuest` lives in `TaleWorlds.CampaignSystem.Issues` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.CampaignSystem.Issues` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `Title` | `public override TextObject Title { get; }` |

## Key Methods

### OnFailed
`public override void OnFailed()`

**Purpose:** Called when the `failed` event is raised.

## Usage Example

```csharp
var value = new ArtisanOverpricedGoodsIssueQuest();
value.OnFailed();
```

## See Also

- [Complete Class Catalog](../catalog)