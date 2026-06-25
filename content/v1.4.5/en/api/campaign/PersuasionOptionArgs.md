---
title: "PersuasionOptionArgs"
description: "Auto-generated class reference for PersuasionOptionArgs."
---
# PersuasionOptionArgs

**Namespace:** TaleWorlds.CampaignSystem.Conversation.Persuasion
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class PersuasionOptionArgs`
**Base:** none
**File:** `bin/TaleWorlds.CampaignSystem/TaleWorlds.CampaignSystem.Conversation.Persuasion/PersuasionOptionArgs.cs`

## Overview

`PersuasionOptionArgs` lives in `TaleWorlds.CampaignSystem.Conversation.Persuasion` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.CampaignSystem.Conversation.Persuasion` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Methods

### BlockTheOption
`public void BlockTheOption(bool isBlocked)`

**Purpose:** **Purpose:** Executes the BlockTheOption logic.

```csharp
// Obtain an instance of PersuasionOptionArgs from the subsystem API first
PersuasionOptionArgs persuasionOptionArgs = ...;
persuasionOptionArgs.BlockTheOption(false);
```

## Usage Example

```csharp
// Typically call this after obtaining an instance from the subsystem API
PersuasionOptionArgs persuasionOptionArgs = ...;
persuasionOptionArgs.BlockTheOption(false);
```

## See Also

- [Area Index](../)