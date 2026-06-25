---
title: "PersuasionTask"
description: "Auto-generated class reference for PersuasionTask."
---
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

```csharp
// Obtain an instance of PersuasionTask from the subsystem API first
PersuasionTask persuasionTask = ...;
persuasionTask.AddOptionToTask(option);
```

### BlockAllOptions
`public void BlockAllOptions()`

**Purpose:** Performs the operation described by this method.

```csharp
// Obtain an instance of PersuasionTask from the subsystem API first
PersuasionTask persuasionTask = ...;
persuasionTask.BlockAllOptions();
```

### UnblockAllOptions
`public void UnblockAllOptions()`

**Purpose:** Performs the operation described by this method.

```csharp
// Obtain an instance of PersuasionTask from the subsystem API first
PersuasionTask persuasionTask = ...;
persuasionTask.UnblockAllOptions();
```

### ApplyEffects
`public void ApplyEffects(float moveToNextStageChance, float blockRandomOptionChance)`

**Purpose:** Applies the effect of `effects` to the current object.

```csharp
// Obtain an instance of PersuasionTask from the subsystem API first
PersuasionTask persuasionTask = ...;
persuasionTask.ApplyEffects(0, 0);
```

## Usage Example

```csharp
// Typically call this after obtaining an instance from the subsystem API
PersuasionTask persuasionTask = ...;
persuasionTask.AddOptionToTask(option);
```

## See Also

- [Area Index](../)