---
title: "PersuasionAttempt"
description: "Auto-generated class reference for PersuasionAttempt."
---
# PersuasionAttempt

**Namespace:** TaleWorlds.CampaignSystem.Conversation.Persuasion
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class PersuasionAttempt`
**Base:** none
**File:** `bin/TaleWorlds.CampaignSystem/TaleWorlds.CampaignSystem.Conversation.Persuasion/PersuasionAttempt.cs`

## Overview

`PersuasionAttempt` lives in `TaleWorlds.CampaignSystem.Conversation.Persuasion` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.CampaignSystem.Conversation.Persuasion` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Methods

### IsSuccesful
`public bool IsSuccesful()`

**Purpose:** **Purpose:** Determines whether the this instance is in the succesful state or condition.

```csharp
// Obtain an instance of PersuasionAttempt from the subsystem API first
PersuasionAttempt persuasionAttempt = ...;
var result = persuasionAttempt.IsSuccesful();
```

### Matches
`public bool Matches(Hero targetHero, int reservationType)`

**Purpose:** **Purpose:** Executes the Matches logic.

```csharp
// Obtain an instance of PersuasionAttempt from the subsystem API first
PersuasionAttempt persuasionAttempt = ...;
var result = persuasionAttempt.Matches(targetHero, 0);
```

## Usage Example

```csharp
// Typically call this after obtaining an instance from the subsystem API
PersuasionAttempt persuasionAttempt = ...;
persuasionAttempt.IsSuccesful();
```

## See Also

- [Area Index](../)