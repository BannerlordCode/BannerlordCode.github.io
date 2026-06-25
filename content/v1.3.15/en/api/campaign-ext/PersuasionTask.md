---
title: "PersuasionTask"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `PersuasionTask`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.3.15](../../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# PersuasionTask

**Namespace:** TaleWorlds.CampaignSystem.Conversation.Persuasion
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class PersuasionTask`
**Base:** none
**File:** `TaleWorlds.CampaignSystem/Conversation/Persuasion/PersuasionTask.cs`

## Overview

`PersuasionTask` lives in `TaleWorlds.CampaignSystem.Conversation.Persuasion` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.CampaignSystem.Conversation.Persuasion` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Methods

### AddOptionToTask
`public void AddOptionToTask(PersuasionOptionArgs option)`

**Purpose:** Adds `option to task` to the current collection or state.

### BlockAllOptions
`public void BlockAllOptions()`

**Purpose:** Handles logic related to `block all options`.

### UnblockAllOptions
`public void UnblockAllOptions()`

**Purpose:** Handles logic related to `unblock all options`.

### ApplyEffects
`public void ApplyEffects(float moveToNextStageChance, float blockRandomOptionChance)`

**Purpose:** Applies `effects` to the current object.

## Usage Example

```csharp
var value = new PersuasionTask();
value.AddOptionToTask(option);
```

## See Also

- [Complete Class Catalog](../catalog)