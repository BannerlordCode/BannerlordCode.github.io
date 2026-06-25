---
title: "QuestsState"
description: "Auto-generated class reference for QuestsState."
---
# QuestsState

**Namespace:** TaleWorlds.CampaignSystem.GameState
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class QuestsState : GameState`
**Base:** `GameState`
**File:** `TaleWorlds.CampaignSystem/GameState/QuestsState.cs`

## Overview

`QuestsState` lives in `TaleWorlds.CampaignSystem.GameState` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.CampaignSystem.GameState` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `InitialSelectedIssue` | `public IssueBase InitialSelectedIssue { get; }` |
| `InitialSelectedQuest` | `public QuestBase InitialSelectedQuest { get; }` |
| `InitialSelectedLog` | `public JournalLogEntry InitialSelectedLog { get; }` |
| `IsMenuState` | `public override bool IsMenuState { get; set; }` |
| `Handler` | `public IQuestsStateHandler Handler { get; set; }` |

## Usage Example

```csharp
// Obtain an instance from the relevant subsystem API
QuestsState instance = ...;
```

## See Also

- [Area Index](../)