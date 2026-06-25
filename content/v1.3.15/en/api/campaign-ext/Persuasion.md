---
title: "Persuasion"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `Persuasion`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.3.15](../../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# Persuasion

**Namespace:** TaleWorlds.CampaignSystem.Conversation.Persuasion
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class Persuasion`
**Base:** none
**File:** `TaleWorlds.CampaignSystem/Conversation/Persuasion/Persuasion.cs`

## Overview

`Persuasion` lives in `TaleWorlds.CampaignSystem.Conversation.Persuasion` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.CampaignSystem.Conversation.Persuasion` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `DifficultyMultiplier` | `public float DifficultyMultiplier { get; }` |
| `Progress` | `public float Progress { get; }` |

## Key Methods

### CommitProgress
`public void CommitProgress(PersuasionOptionArgs persuasionOptionArgs)`

**Purpose:** Handles logic related to `commit progress`.

### GetChosenOptions
`public IEnumerable<Tuple<PersuasionOptionArgs, PersuasionOptionResult>> GetChosenOptions()`

**Purpose:** Gets the current value of `chosen options`.

## Usage Example

```csharp
var value = new Persuasion();
value.CommitProgress(persuasionOptionArgs);
```

## See Also

- [Complete Class Catalog](../catalog)