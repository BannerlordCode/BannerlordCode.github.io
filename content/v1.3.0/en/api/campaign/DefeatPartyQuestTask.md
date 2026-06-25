---
title: "DefeatPartyQuestTask"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `DefeatPartyQuestTask`
- [← Area / Back to campaign](./)
- [↑ API Index](../)
- [🏠 Home v1.3.0](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# DefeatPartyQuestTask

**Namespace:** TaleWorlds.CampaignSystem.Issues.IssueQuestTasks
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class DefeatPartyQuestTask : QuestTaskBase`
**Base:** `QuestTaskBase`
**File:** `TaleWorlds.CampaignSystem/Issues/IssueQuestTasks/DefeatPartyQuestTask.cs`

## Overview

`DefeatPartyQuestTask` lives in `TaleWorlds.CampaignSystem.Issues.IssueQuestTasks` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.CampaignSystem.Issues.IssueQuestTasks` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Methods

### OnMapEventEnded
`public void OnMapEventEnded(MapEvent mapEvent)`

**Purpose:** Called when the `map event ended` event is raised.

### SetReferences
`public override void SetReferences()`

**Purpose:** Sets the value or state of `references`.

### PartyConditionDelegateType
`public delegate bool PartyConditionDelegateType(PartyBase defeatedParty)`

**Purpose:** Handles logic related to `party condition delegate type`.

### OnPartyDefeatedDelegateType
`public delegate void OnPartyDefeatedDelegateType(PartyBase party)`

**Purpose:** Called when the `party defeated delegate type` event is raised.

## Usage Example

```csharp
var value = new DefeatPartyQuestTask();
value.OnMapEventEnded(mapEvent);
```

## See Also

- [Complete Class Catalog](../catalog)