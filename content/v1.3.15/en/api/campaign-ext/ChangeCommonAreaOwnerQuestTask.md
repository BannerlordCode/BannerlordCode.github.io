---
title: "ChangeCommonAreaOwnerQuestTask"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `ChangeCommonAreaOwnerQuestTask`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.3.15](../../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# ChangeCommonAreaOwnerQuestTask

**Namespace:** TaleWorlds.CampaignSystem.Issues.IssueQuestTasks
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class ChangeCommonAreaOwnerQuestTask : QuestTaskBase`
**Base:** `QuestTaskBase`
**File:** `TaleWorlds.CampaignSystem/Issues/IssueQuestTasks/ChangeCommonAreaOwnerQuestTask.cs`

## Overview

`ChangeCommonAreaOwnerQuestTask` lives in `TaleWorlds.CampaignSystem.Issues.IssueQuestTasks` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.CampaignSystem.Issues.IssueQuestTasks` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Methods

### OnCommonAreaOwnerChanged
`public void OnCommonAreaOwnerChanged(Alley alley, Hero newOwner, Hero oldOwner)`

**Purpose:** Called when the `common area owner changed` event is raised.

### SetReferences
`public override void SetReferences()`

**Purpose:** Sets the value or state of `references`.

## Usage Example

```csharp
var value = new ChangeCommonAreaOwnerQuestTask();
value.OnCommonAreaOwnerChanged(alley, newOwner, oldOwner);
```

## See Also

- [Complete Class Catalog](../catalog)