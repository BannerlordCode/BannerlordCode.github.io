<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `GangLeaderNeedsToOffloadStolenGoodsIssueQuest`
- [← Area / Back to campaign](./)
- [↑ API Index](../)
- [🏠 Home v1.3.0](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# GangLeaderNeedsToOffloadStolenGoodsIssueQuest

**Namespace:** TaleWorlds.CampaignSystem.Issues
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class GangLeaderNeedsToOffloadStolenGoodsIssueQuest : QuestBase`
**Base:** `QuestBase`
**File:** `TaleWorlds.CampaignSystem/Issues/GangLeaderNeedsToOffloadStolenGoodsIssueBehavior.cs`

## Overview

`GangLeaderNeedsToOffloadStolenGoodsIssueQuest` lives in `TaleWorlds.CampaignSystem.Issues` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.CampaignSystem.Issues` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `IsRemainingTimeHidden` | `public override bool IsRemainingTimeHidden { get; }` |
| `Title` | `public override TextObject Title { get; }` |

## Key Methods

### OnHeroCanHaveCampaignIssuesInfoIsRequested
`public override void OnHeroCanHaveCampaignIssuesInfoIsRequested(Hero hero, ref bool result)`

**Purpose:** Called when the `hero can have campaign issues info is requested` event is raised.

## Usage Example

```csharp
var value = new GangLeaderNeedsToOffloadStolenGoodsIssueQuest();
value.OnHeroCanHaveCampaignIssuesInfoIsRequested(hero, result);
```

## See Also

- [Complete Class Catalog](../catalog)