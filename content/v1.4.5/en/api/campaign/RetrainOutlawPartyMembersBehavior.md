---
title: "RetrainOutlawPartyMembersBehavior"
description: "Auto-generated class reference for RetrainOutlawPartyMembersBehavior."
---
# RetrainOutlawPartyMembersBehavior

**Namespace:** TaleWorlds.CampaignSystem.CampaignBehaviors
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class RetrainOutlawPartyMembersBehavior : CampaignBehaviorBase, IRetrainOutlawPartyMembersCampaignBehavior, ICampaignBehavior`
**Base:** `CampaignBehaviorBase`
**File:** `bin/TaleWorlds.CampaignSystem/TaleWorlds.CampaignSystem.CampaignBehaviors/RetrainOutlawPartyMembersBehavior.cs`

## Overview

`RetrainOutlawPartyMembersBehavior` lives in `TaleWorlds.CampaignSystem.CampaignBehaviors` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.CampaignSystem.CampaignBehaviors` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Methods

### RegisterEvents
`public override void RegisterEvents()`

**Purpose:** **Purpose:** Registers events with the current system so it can later be observed or dispatched.

```csharp
// Obtain an instance of RetrainOutlawPartyMembersBehavior from the subsystem API first
RetrainOutlawPartyMembersBehavior retrainOutlawPartyMembersBehavior = ...;
retrainOutlawPartyMembersBehavior.RegisterEvents();
```

### SyncData
`public override void SyncData(IDataStore dataStore)`

**Purpose:** **Purpose:** Synchronizes data across the relevant contexts or systems.

```csharp
// Obtain an instance of RetrainOutlawPartyMembersBehavior from the subsystem API first
RetrainOutlawPartyMembersBehavior retrainOutlawPartyMembersBehavior = ...;
retrainOutlawPartyMembersBehavior.SyncData(dataStore);
```

### GetRetrainedNumber
`public int GetRetrainedNumber(CharacterObject character)`

**Purpose:** **Purpose:** Reads and returns the retrained number value held by the this instance.

```csharp
// Obtain an instance of RetrainOutlawPartyMembersBehavior from the subsystem API first
RetrainOutlawPartyMembersBehavior retrainOutlawPartyMembersBehavior = ...;
var result = retrainOutlawPartyMembersBehavior.GetRetrainedNumber(character);
```

### SetRetrainedNumber
`public void SetRetrainedNumber(CharacterObject character, int number)`

**Purpose:** **Purpose:** Assigns a new value to retrained number and updates the object's internal state.

```csharp
// Obtain an instance of RetrainOutlawPartyMembersBehavior from the subsystem API first
RetrainOutlawPartyMembersBehavior retrainOutlawPartyMembersBehavior = ...;
retrainOutlawPartyMembersBehavior.SetRetrainedNumber(character, 0);
```

## Usage Example

```csharp
// Typically call this after obtaining an instance from the subsystem API
RetrainOutlawPartyMembersBehavior retrainOutlawPartyMembersBehavior = ...;
retrainOutlawPartyMembersBehavior.RegisterEvents();
```

## See Also

- [Area Index](../)