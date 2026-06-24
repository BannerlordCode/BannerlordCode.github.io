<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `RevenueFarmingIssueQuest`
- [← Area / Back to campaign](./)
- [↑ API Index](../)
- [🏠 Home v1.4.5](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# RevenueFarmingIssueQuest

**Namespace:** TaleWorlds.CampaignSystem.Issues
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class RevenueFarmingIssueQuest : QuestBase`
**Base:** `QuestBase`
**File:** `Bannerlord.Source/bin/TaleWorlds.CampaignSystem/TaleWorlds.CampaignSystem.Issues/RevenueFarmingIssueBehavior.cs`

## Overview

`RevenueFarmingIssueQuest` lives in `TaleWorlds.CampaignSystem.Issues` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.CampaignSystem.Issues` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `TargetSettlement` | `public Settlement TargetSettlement { get; }` |

## Key Methods

### RevenuesAreDeliveredToSteward
`public void RevenuesAreDeliveredToSteward()`

**Purpose:** Handles logic related to `revenues are delivered to steward`.

### FindCurrentRevenueVillage
`public RevenueVillage FindCurrentRevenueVillage()`

**Purpose:** Handles logic related to `find current revenue village`.

### SetVillageAsCompleted
`public void SetVillageAsCompleted(RevenueVillage village, bool addLog = true)`

**Purpose:** Sets the value or state of `village as completed`.

## Usage Example

```csharp
var value = new RevenueFarmingIssueQuest();
value.RevenuesAreDeliveredToSteward();
```

## See Also

- [Complete Class Catalog](../catalog)