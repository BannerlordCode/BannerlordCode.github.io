---
title: "Number"
description: "Auto-generated class reference for Number."
---
# Number

**Namespace:** TaleWorlds.CampaignSystem.CampaignBehaviors
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class Number`
**Base:** none
**File:** `bin/TaleWorlds.CampaignSystem/TaleWorlds.CampaignSystem.CampaignBehaviors/LordConversationsCampaignBehavior.cs`

## Overview

`Number` lives in `TaleWorlds.CampaignSystem.CampaignBehaviors` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.CampaignSystem.CampaignBehaviors` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Methods

### GetBetween
`public IEnumerable<Number> GetBetween(int start, int end)`

**Purpose:** Reads and returns the `between` value held by the current object.

```csharp
// Obtain an instance of Number from the subsystem API first
Number number = ...;
var result = number.GetBetween(0, 0);
```

## Usage Example

```csharp
// Typically call this after obtaining an instance from the subsystem API
Number number = ...;
number.GetBetween(0, 0);
```

## See Also

- [Area Index](../)