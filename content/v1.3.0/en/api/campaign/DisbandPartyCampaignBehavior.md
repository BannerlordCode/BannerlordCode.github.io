---
title: "DisbandPartyCampaignBehavior"
description: "Auto-generated class reference for DisbandPartyCampaignBehavior."
---
# DisbandPartyCampaignBehavior

**Namespace:** TaleWorlds.CampaignSystem.CampaignBehaviors
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class DisbandPartyCampaignBehavior : CampaignBehaviorBase, IDisbandPartyCampaignBehavior, ICampaignBehavior`
**Base:** `CampaignBehaviorBase`
**File:** `TaleWorlds.CampaignSystem/CampaignBehaviors/DisbandPartyCampaignBehavior.cs`

## Overview

`DisbandPartyCampaignBehavior` lives in `TaleWorlds.CampaignSystem.CampaignBehaviors` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.CampaignSystem.CampaignBehaviors` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Methods

### RegisterEvents
`public override void RegisterEvents()`

**Purpose:** **Purpose:** Registers events with the current system so it can later be observed or dispatched.

```csharp
// Obtain an instance of DisbandPartyCampaignBehavior from the subsystem API first
DisbandPartyCampaignBehavior disbandPartyCampaignBehavior = ...;
disbandPartyCampaignBehavior.RegisterEvents();
```

### IsPartyWaitingForDisband
`public bool IsPartyWaitingForDisband(MobileParty party)`

**Purpose:** **Purpose:** Determines whether the this instance is in the party waiting for disband state or condition.

```csharp
// Obtain an instance of DisbandPartyCampaignBehavior from the subsystem API first
DisbandPartyCampaignBehavior disbandPartyCampaignBehavior = ...;
var result = disbandPartyCampaignBehavior.IsPartyWaitingForDisband(party);
```

### SyncData
`public override void SyncData(IDataStore dataStore)`

**Purpose:** **Purpose:** Synchronizes data across the relevant contexts or systems.

```csharp
// Obtain an instance of DisbandPartyCampaignBehavior from the subsystem API first
DisbandPartyCampaignBehavior disbandPartyCampaignBehavior = ...;
disbandPartyCampaignBehavior.SyncData(dataStore);
```

## Usage Example

```csharp
// Typically call this after obtaining an instance from the subsystem API
DisbandPartyCampaignBehavior disbandPartyCampaignBehavior = ...;
disbandPartyCampaignBehavior.RegisterEvents();
```

## See Also

- [Area Index](../)