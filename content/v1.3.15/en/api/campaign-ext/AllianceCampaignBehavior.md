---
title: "AllianceCampaignBehavior"
description: "Auto-generated class reference for AllianceCampaignBehavior."
---
# AllianceCampaignBehavior

**Namespace:** TaleWorlds.CampaignSystem.CampaignBehaviors
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class AllianceCampaignBehavior : CampaignBehaviorBase, IAllianceCampaignBehavior`
**Base:** `CampaignBehaviorBase`
**File:** `TaleWorlds.CampaignSystem/CampaignBehaviors/AllianceCampaignBehavior.cs`

## Overview

`AllianceCampaignBehavior` lives in `TaleWorlds.CampaignSystem.CampaignBehaviors` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.CampaignSystem.CampaignBehaviors` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Methods

### RegisterEvents
`public override void RegisterEvents()`

**Purpose:** Registers events with the current system so it can later be observed or dispatched.

```csharp
// Obtain an instance of AllianceCampaignBehavior from the subsystem API first
AllianceCampaignBehavior allianceCampaignBehavior = ...;
allianceCampaignBehavior.RegisterEvents();
```

### SyncData
`public override void SyncData(IDataStore dataStore)`

**Purpose:** Synchronizes data across the relevant contexts or systems.

```csharp
// Obtain an instance of AllianceCampaignBehavior from the subsystem API first
AllianceCampaignBehavior allianceCampaignBehavior = ...;
allianceCampaignBehavior.SyncData(dataStore);
```

### OnCallToWarAgreementProposedByPlayerKingdom
`public void OnCallToWarAgreementProposedByPlayerKingdom(Kingdom proposedKingdom, Kingdom kingdomToCallToWarAgainst)`

**Purpose:** Invoked when the call to war agreement proposed by player kingdom event is raised.

```csharp
// Obtain an instance of AllianceCampaignBehavior from the subsystem API first
AllianceCampaignBehavior allianceCampaignBehavior = ...;
allianceCampaignBehavior.OnCallToWarAgreementProposedByPlayerKingdom(proposedKingdom, kingdomToCallToWarAgainst);
```

### IsAllyWithKingdom
`public bool IsAllyWithKingdom(Kingdom kingdom1, Kingdom kingdom2)`

**Purpose:** Determines whether the this instance is in the ally with kingdom state or condition.

```csharp
// Obtain an instance of AllianceCampaignBehavior from the subsystem API first
AllianceCampaignBehavior allianceCampaignBehavior = ...;
var result = allianceCampaignBehavior.IsAllyWithKingdom(kingdom1, kingdom2);
```

### StartAlliance
`public void StartAlliance(Kingdom proposerKingdom, Kingdom receiverKingdom)`

**Purpose:** Starts the alliance flow or state machine.

```csharp
// Obtain an instance of AllianceCampaignBehavior from the subsystem API first
AllianceCampaignBehavior allianceCampaignBehavior = ...;
allianceCampaignBehavior.StartAlliance(proposerKingdom, receiverKingdom);
```

### EndAlliance
`public void EndAlliance(Kingdom kingdom1, Kingdom kingdom2)`

**Purpose:** Executes the EndAlliance logic.

```csharp
// Obtain an instance of AllianceCampaignBehavior from the subsystem API first
AllianceCampaignBehavior allianceCampaignBehavior = ...;
allianceCampaignBehavior.EndAlliance(kingdom1, kingdom2);
```

### HasCalledToWar
`public bool HasCalledToWar(Kingdom callingKingdom, Kingdom calledKingdom)`

**Purpose:** Determines whether the this instance already holds called to war.

```csharp
// Obtain an instance of AllianceCampaignBehavior from the subsystem API first
AllianceCampaignBehavior allianceCampaignBehavior = ...;
var result = allianceCampaignBehavior.HasCalledToWar(callingKingdom, calledKingdom);
```

### IsAtWarByCallToWarAgreement
`public bool IsAtWarByCallToWarAgreement(Kingdom calledKingdom, Kingdom kingdomToCallToWarAgainst)`

**Purpose:** Determines whether the this instance is in the at war by call to war agreement state or condition.

```csharp
// Obtain an instance of AllianceCampaignBehavior from the subsystem API first
AllianceCampaignBehavior allianceCampaignBehavior = ...;
var result = allianceCampaignBehavior.IsAtWarByCallToWarAgreement(calledKingdom, kingdomToCallToWarAgainst);
```

### StartCallToWarAgreement
`public void StartCallToWarAgreement(Kingdom callingKingdom, Kingdom calledKingdom, Kingdom kingdomToCallToWarAgainst, int callToWarCost, bool isPlayerPaying = false)`

**Purpose:** Starts the call to war agreement flow or state machine.

```csharp
// Obtain an instance of AllianceCampaignBehavior from the subsystem API first
AllianceCampaignBehavior allianceCampaignBehavior = ...;
allianceCampaignBehavior.StartCallToWarAgreement(callingKingdom, calledKingdom, kingdomToCallToWarAgainst, 0, false);
```

### EndCallToWarAgreement
`public void EndCallToWarAgreement(Kingdom callingKingdom, Kingdom calledKingdom, Kingdom kingdomToCallToWarAgainst)`

**Purpose:** Executes the EndCallToWarAgreement logic.

```csharp
// Obtain an instance of AllianceCampaignBehavior from the subsystem API first
AllianceCampaignBehavior allianceCampaignBehavior = ...;
allianceCampaignBehavior.EndCallToWarAgreement(callingKingdom, calledKingdom, kingdomToCallToWarAgainst);
```

### GetKingdomsToCallToWarAgainst
`public List<Kingdom> GetKingdomsToCallToWarAgainst(Kingdom callingKingdom, Kingdom calledKingdom)`

**Purpose:** Reads and returns the kingdoms to call to war against value held by the this instance.

```csharp
// Obtain an instance of AllianceCampaignBehavior from the subsystem API first
AllianceCampaignBehavior allianceCampaignBehavior = ...;
var result = allianceCampaignBehavior.GetKingdomsToCallToWarAgainst(callingKingdom, calledKingdom);
```

### AutoGeneratedStaticCollectObjectsAlliance
`public static void AutoGeneratedStaticCollectObjectsAlliance(object o, List<object> collectedObjects)`

**Purpose:** Executes the AutoGeneratedStaticCollectObjectsAlliance logic.

```csharp
// Static call; no instance required
AllianceCampaignBehavior.AutoGeneratedStaticCollectObjectsAlliance(o, collectedObjects);
```

### AutoGeneratedStaticCollectObjectsCallToWarAgreement
`public static void AutoGeneratedStaticCollectObjectsCallToWarAgreement(object o, List<object> collectedObjects)`

**Purpose:** Executes the AutoGeneratedStaticCollectObjectsCallToWarAgreement logic.

```csharp
// Static call; no instance required
AllianceCampaignBehavior.AutoGeneratedStaticCollectObjectsCallToWarAgreement(o, collectedObjects);
```

## Usage Example

```csharp
// Typically call this after obtaining an instance from the subsystem API
AllianceCampaignBehavior allianceCampaignBehavior = ...;
allianceCampaignBehavior.RegisterEvents();
```

## See Also

- [Area Index](../)