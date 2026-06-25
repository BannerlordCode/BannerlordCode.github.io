---
title: "CaptureAndBringNpcTask"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `CaptureAndBringNpcTask`
- [← Area / Back to campaign](./)
- [↑ API Index](../)
- [🏠 Home v1.3.0](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# CaptureAndBringNpcTask

**Namespace:** TaleWorlds.CampaignSystem.Issues.IssueQuestTasks
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class CaptureAndBringNpcTask : QuestTaskBase`
**Base:** `QuestTaskBase`
**File:** `TaleWorlds.CampaignSystem/Issues/IssueQuestTasks/CaptureAndBringNpcTask.cs`

## Overview

`CaptureAndBringNpcTask` lives in `TaleWorlds.CampaignSystem.Issues.IssueQuestTasks` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.CampaignSystem.Issues.IssueQuestTasks` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Methods

### OnPlayerBattleEnd
`public void OnPlayerBattleEnd(MapEvent mapEvent)`

**Purpose:** Called when the `player battle end` event is raised.

### SetReferences
`public override void SetReferences()`

**Purpose:** Sets the value or state of `references`.

## Usage Example

```csharp
var value = new CaptureAndBringNpcTask();
value.OnPlayerBattleEnd(mapEvent);
```

## See Also

- [Complete Class Catalog](../catalog)