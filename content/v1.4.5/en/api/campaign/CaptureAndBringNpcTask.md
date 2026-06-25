---
title: "CaptureAndBringNpcTask"
description: "Auto-generated class reference for CaptureAndBringNpcTask."
---
# CaptureAndBringNpcTask

**Namespace:** TaleWorlds.CampaignSystem.Issues.IssueQuestTasks
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class CaptureAndBringNpcTask : QuestTaskBase`
**Base:** `QuestTaskBase`
**File:** `bin/TaleWorlds.CampaignSystem/TaleWorlds.CampaignSystem.Issues.IssueQuestTasks/CaptureAndBringNpcTask.cs`

## Overview

`CaptureAndBringNpcTask` lives in `TaleWorlds.CampaignSystem.Issues.IssueQuestTasks` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.CampaignSystem.Issues.IssueQuestTasks` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Methods

### OnPlayerBattleEnd
`public void OnPlayerBattleEnd(MapEvent mapEvent)`

**Purpose:** **Purpose:** Invoked when the player battle end event is raised.

```csharp
// Obtain an instance of CaptureAndBringNpcTask from the subsystem API first
CaptureAndBringNpcTask captureAndBringNpcTask = ...;
captureAndBringNpcTask.OnPlayerBattleEnd(mapEvent);
```

### SetReferences
`public override void SetReferences()`

**Purpose:** **Purpose:** Assigns a new value to references and updates the object's internal state.

```csharp
// Obtain an instance of CaptureAndBringNpcTask from the subsystem API first
CaptureAndBringNpcTask captureAndBringNpcTask = ...;
captureAndBringNpcTask.SetReferences();
```

## Usage Example

```csharp
// Typically call this after obtaining an instance from the subsystem API
CaptureAndBringNpcTask captureAndBringNpcTask = ...;
captureAndBringNpcTask.OnPlayerBattleEnd(mapEvent);
```

## See Also

- [Area Index](../)