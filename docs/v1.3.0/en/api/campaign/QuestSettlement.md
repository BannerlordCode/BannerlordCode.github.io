<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `QuestSettlement`
- [← Area / Back to campaign](./)
- [↑ API Index](../)
- [🏠 Home v1.3.0](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# QuestSettlement

**Namespace:** TaleWorlds.CampaignSystem.Issues
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class QuestSettlement`
**Base:** none
**File:** `TaleWorlds.CampaignSystem/Issues/ScoutEnemyGarrisonsIssueBehavior.cs`

## Overview

`QuestSettlement` lives in `TaleWorlds.CampaignSystem.Issues` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.CampaignSystem.Issues` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Methods

### IsScoutingCompleted
`public bool IsScoutingCompleted()`

**Purpose:** Handles logic related to `is scouting completed`.

### SetScoutingCompleted
`public void SetScoutingCompleted()`

**Purpose:** Sets the value or state of `scouting completed`.

### ResetCurrentProgress
`public void ResetCurrentProgress()`

**Purpose:** Resets `current progress` to its initial state.

## Usage Example

```csharp
var value = new QuestSettlement();
value.IsScoutingCompleted();
```

## See Also

- [Complete Class Catalog](../catalog)