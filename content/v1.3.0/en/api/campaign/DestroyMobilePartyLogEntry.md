---
title: "DestroyMobilePartyLogEntry"
description: "Auto-generated class reference for DestroyMobilePartyLogEntry."
---
# DestroyMobilePartyLogEntry

**Namespace:** TaleWorlds.CampaignSystem.LogEntries
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class DestroyMobilePartyLogEntry : LogEntry`
**Base:** `LogEntry`
**File:** `TaleWorlds.CampaignSystem/LogEntries/DestroyMobilePartyLogEntry.cs`

## Overview

`DestroyMobilePartyLogEntry` lives in `TaleWorlds.CampaignSystem.LogEntries` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.CampaignSystem.LogEntries` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Methods

### GetAsRumor
`public override int GetAsRumor(Settlement settlement, out TextObject comment)`

**Purpose:** **Purpose:** Reads and returns the as rumor value held by the this instance.

```csharp
// Obtain an instance of DestroyMobilePartyLogEntry from the subsystem API first
DestroyMobilePartyLogEntry destroyMobilePartyLogEntry = ...;
var result = destroyMobilePartyLogEntry.GetAsRumor(settlement, comment);
```

### ToString
`public override string ToString()`

**Purpose:** **Purpose:** Returns a human-readable string representation of the this instance.

```csharp
// Obtain an instance of DestroyMobilePartyLogEntry from the subsystem API first
DestroyMobilePartyLogEntry destroyMobilePartyLogEntry = ...;
var result = destroyMobilePartyLogEntry.ToString();
```

## Usage Example

```csharp
// Typically call this after obtaining an instance from the subsystem API
DestroyMobilePartyLogEntry destroyMobilePartyLogEntry = ...;
destroyMobilePartyLogEntry.GetAsRumor(settlement, comment);
```

## See Also

- [Area Index](../)