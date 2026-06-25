---
title: "Persuasion"
description: "Auto-generated class reference for Persuasion."
---
# Persuasion

**Namespace:** TaleWorlds.CampaignSystem.Conversation.Persuasion
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class Persuasion`
**Base:** none
**File:** `bin/TaleWorlds.CampaignSystem/TaleWorlds.CampaignSystem.Conversation.Persuasion/Persuasion.cs`

## Overview

`Persuasion` lives in `TaleWorlds.CampaignSystem.Conversation.Persuasion` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.CampaignSystem.Conversation.Persuasion` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `Progress` | `public float Progress { get; }` |

## Key Methods

### CommitProgress
`public void CommitProgress(PersuasionOptionArgs persuasionOptionArgs)`

**Purpose:** Performs the operation described by this method.

```csharp
// Obtain an instance of Persuasion from the subsystem API first
Persuasion persuasion = ...;
persuasion.CommitProgress(persuasionOptionArgs);
```

### GetChosenOptions
`public IEnumerable<Tuple<PersuasionOptionArgs, PersuasionOptionResult>> GetChosenOptions()`

**Purpose:** Reads and returns the `chosen options` value held by the current object.

```csharp
// Obtain an instance of Persuasion from the subsystem API first
Persuasion persuasion = ...;
var result = persuasion.GetChosenOptions();
```

## Usage Example

```csharp
// Typically call this after obtaining an instance from the subsystem API
Persuasion persuasion = ...;
persuasion.CommitProgress(persuasionOptionArgs);
```

## See Also

- [Area Index](../)