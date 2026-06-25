---
title: "RomanticState"
description: "Auto-generated class reference for RomanticState."
---
# RomanticState

**Namespace:** TaleWorlds.CampaignSystem
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class RomanticState`
**Base:** none
**File:** `TaleWorlds.CampaignSystem/Romance.cs`

## Overview

`RomanticState` lives in `TaleWorlds.CampaignSystem` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.CampaignSystem` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Methods

### Partner
`public Hero Partner(Hero hero)`

**Purpose:** Performs the operation described by this method.

```csharp
// Obtain an instance of RomanticState from the subsystem API first
RomanticState romanticState = ...;
var result = romanticState.Partner(hero);
```

## Usage Example

```csharp
// Typically call this after obtaining an instance from the subsystem API
RomanticState romanticState = ...;
romanticState.Partner(hero);
```

## See Also

- [Area Index](../)