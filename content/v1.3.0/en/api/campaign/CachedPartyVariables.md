---
title: "CachedPartyVariables"
description: "Auto-generated class reference for CachedPartyVariables."
---
# CachedPartyVariables

**Namespace:** TaleWorlds.CampaignSystem.Party
**Module:** TaleWorlds.CampaignSystem
**Type:** `internal struct CachedPartyVariables`
**Base:** none
**File:** `TaleWorlds.CampaignSystem/Party/MobileParty.cs`

## Overview

`CachedPartyVariables` lives in `TaleWorlds.CampaignSystem.Party` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.CampaignSystem.Party` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Methods

### ToString
`public override string ToString()`

**Purpose:** Returns a human-readable string representation of the this instance.

```csharp
// Obtain an instance of CachedPartyVariables from the subsystem API first
CachedPartyVariables cachedPartyVariables = ...;
var result = cachedPartyVariables.ToString();
```

## Usage Example

```csharp
// Typically call this after obtaining an instance from the subsystem API
CachedPartyVariables cachedPartyVariables = ...;
cachedPartyVariables.ToString();
```

## See Also

- [Area Index](../)