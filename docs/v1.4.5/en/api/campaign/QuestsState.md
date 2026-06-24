<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `QuestsState`
- [← Area / Back to campaign](./)
- [↑ API Index](../)
- [🏠 Home v1.4.5](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# QuestsState

**Namespace:** TaleWorlds.CampaignSystem.GameState
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class QuestsState : TaleWorlds.Core.GameState`
**Base:** `TaleWorlds.Core.GameState`
**File:** `Bannerlord.Source/bin/TaleWorlds.CampaignSystem/TaleWorlds.CampaignSystem.GameState/QuestsState.cs`

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
| `Handler` | `public IQuestsStateHandler Handler { get; set; }` |

## Usage Example

```csharp
var example = new QuestsState();
```

## See Also

- [Complete Class Catalog](../catalog)