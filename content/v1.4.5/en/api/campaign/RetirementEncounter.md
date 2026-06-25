---
title: "RetirementEncounter"
description: "Auto-generated class reference for RetirementEncounter."
---
# RetirementEncounter

**Namespace:** TaleWorlds.CampaignSystem.Encounters
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class RetirementEncounter : LocationEncounter`
**Base:** `LocationEncounter`
**File:** `bin/TaleWorlds.CampaignSystem/TaleWorlds.CampaignSystem.Encounters/RetirementEncounter.cs`

## Overview

`RetirementEncounter` lives in `TaleWorlds.CampaignSystem.Encounters` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.CampaignSystem.Encounters` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Methods

### CreateAndOpenMissionController
`public override IMission CreateAndOpenMissionController(Location nextLocation, Location previousLocation = null, CharacterObject talkToChar = null, string playerSpecialSpawnTag = null)`

**Purpose:** Constructs a new `and open mission controller` entity and returns it to the caller.

```csharp
// Obtain an instance of RetirementEncounter from the subsystem API first
RetirementEncounter retirementEncounter = ...;
var result = retirementEncounter.CreateAndOpenMissionController(nextLocation, null, null, "example");
```

## Usage Example

```csharp
// Typically call this after obtaining an instance from the subsystem API
RetirementEncounter retirementEncounter = ...;
retirementEncounter.CreateAndOpenMissionController(nextLocation, null, null, "example");
```

## See Also

- [Area Index](../)