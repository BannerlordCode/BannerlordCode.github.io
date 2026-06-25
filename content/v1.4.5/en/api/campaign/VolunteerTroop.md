---
title: "VolunteerTroop"
description: "Auto-generated class reference for VolunteerTroop."
---
# VolunteerTroop

**Namespace:** TaleWorlds.CampaignSystem.CampaignBehaviors
**Module:** TaleWorlds.CampaignSystem
**Type:** `public struct VolunteerTroop`
**Base:** none
**File:** `bin/TaleWorlds.CampaignSystem/TaleWorlds.CampaignSystem.CampaignBehaviors/GarrisonRecruitmentCampaignBehavior.cs`

## Overview

`VolunteerTroop` lives in `TaleWorlds.CampaignSystem.CampaignBehaviors` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.CampaignSystem.CampaignBehaviors` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Methods

### VolunteerTroop
`public struct VolunteerTroop(Hero ownerNotable, int notableVolunteerArrayIndex)`

**Purpose:** Executes the VolunteerTroop logic.

```csharp
// Obtain an instance of VolunteerTroop from the subsystem API first
VolunteerTroop volunteerTroop = ...;
var result = volunteerTroop.VolunteerTroop(ownerNotable, 0);
```

### CompareTo
`public int CompareTo(object obj)`

**Purpose:** Compares the this instance with the supplied instance for ordering.

```csharp
// Obtain an instance of VolunteerTroop from the subsystem API first
VolunteerTroop volunteerTroop = ...;
var result = volunteerTroop.CompareTo(obj);
```

## Usage Example

```csharp
// Typically call this after obtaining an instance from the subsystem API
VolunteerTroop volunteerTroop = ...;
volunteerTroop.VolunteerTroop(ownerNotable, 0);
```

## See Also

- [Area Index](../)