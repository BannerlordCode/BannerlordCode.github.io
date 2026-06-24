<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `TalkToNpcQuestTask`
- [← Area / Back to campaign](./)
- [↑ API Index](../)
- [🏠 Home v1.3.0](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# TalkToNpcQuestTask

**Namespace:** TaleWorlds.CampaignSystem.Issues.IssueQuestTasks
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class TalkToNpcQuestTask : QuestTaskBase`
**Base:** `QuestTaskBase`
**File:** `TaleWorlds.CampaignSystem/Issues/IssueQuestTasks/TalkToNpcQuestTask.cs`

## Overview

`TalkToNpcQuestTask` lives in `TaleWorlds.CampaignSystem.Issues.IssueQuestTasks` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.CampaignSystem.Issues.IssueQuestTasks` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Methods

### IsTaskCharacter
`public bool IsTaskCharacter()`

**Purpose:** Handles logic related to `is task character`.

### SetReferences
`public override void SetReferences()`

**Purpose:** Sets the value or state of `references`.

## Usage Example

```csharp
var value = new TalkToNpcQuestTask();
value.IsTaskCharacter();
```

## See Also

- [Complete Class Catalog](../catalog)