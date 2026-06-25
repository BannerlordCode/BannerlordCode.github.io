---
title: "Alliance"
description: "Auto-generated class reference for Alliance."
---
# Alliance

**Namespace:** TaleWorlds.CampaignSystem.CampaignBehaviors
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class Alliance`
**Base:** none
**File:** `TaleWorlds.CampaignSystem/CampaignBehaviors/AllianceCampaignBehavior.cs`

## Overview

`Alliance` lives in `TaleWorlds.CampaignSystem.CampaignBehaviors` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.CampaignSystem.CampaignBehaviors` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Methods

### RegisterEvents
`public override void RegisterEvents()`

**Purpose:** Registers `events` with the current system so it can later be observed or dispatched.

```csharp
// Obtain an instance of Alliance from the subsystem API first
Alliance alliance = ...;
alliance.RegisterEvents();
```

### SyncData
`public override void SyncData(IDataStore dataStore)`

**Purpose:** Synchronizes `data` across the relevant contexts or systems.

```csharp
// Obtain an instance of Alliance from the subsystem API first
Alliance alliance = ...;
alliance.SyncData(dataStore);
```

### OnCallToWarAgreementProposedByPlayerKingdom
`public void OnCallToWarAgreementProposedByPlayerKingdom(Kingdom proposedKingdom, Kingdom kingdomToCallToWarAgainst)`

**Purpose:** Invoked when the `call to war agreement proposed by player kingdom` event is raised.

```csharp
// Obtain an instance of Alliance from the subsystem API first
Alliance alliance = ...;
alliance.OnCallToWarAgreementProposedByPlayerKingdom(proposedKingdom, kingdomToCallToWarAgainst);
```

### IsAllyWithKingdom
`public bool IsAllyWithKingdom(Kingdom kingdom1, Kingdom kingdom2)`

**Purpose:** Determines whether the current object is in the `ally with kingdom` state or condition.

```csharp
// Obtain an instance of Alliance from the subsystem API first
Alliance alliance = ...;
var result = alliance.IsAllyWithKingdom(kingdom1, kingdom2);
```

### StartAlliance
`public void StartAlliance(Kingdom proposerKingdom, Kingdom receiverKingdom)`

**Purpose:** Starts the `alliance` flow or state machine.

```csharp
// Obtain an instance of Alliance from the subsystem API first
Alliance alliance = ...;
alliance.StartAlliance(proposerKingdom, receiverKingdom);
```

### EndAlliance
`public void EndAlliance(Kingdom kingdom1, Kingdom kingdom2)`

**Purpose:** Performs the operation described by this method.

```csharp
// Obtain an instance of Alliance from the subsystem API first
Alliance alliance = ...;
alliance.EndAlliance(kingdom1, kingdom2);
```

### HasCalledToWar
`public bool HasCalledToWar(Kingdom callingKingdom, Kingdom calledKingdom)`

**Purpose:** Determines whether the current object already holds `called to war`.

```csharp
// Obtain an instance of Alliance from the subsystem API first
Alliance alliance = ...;
var result = alliance.HasCalledToWar(callingKingdom, calledKingdom);
```

### IsAtWarByCallToWarAgreement
`public bool IsAtWarByCallToWarAgreement(Kingdom calledKingdom, Kingdom kingdomToCallToWarAgainst)`

**Purpose:** Determines whether the current object is in the `at war by call to war agreement` state or condition.

```csharp
// Obtain an instance of Alliance from the subsystem API first
Alliance alliance = ...;
var result = alliance.IsAtWarByCallToWarAgreement(calledKingdom, kingdomToCallToWarAgainst);
```

### StartCallToWarAgreement
`public void StartCallToWarAgreement(Kingdom callingKingdom, Kingdom calledKingdom, Kingdom kingdomToCallToWarAgainst, int callToWarCost, bool isPlayerPaying = false)`

**Purpose:** Starts the `call to war agreement` flow or state machine.

```csharp
// Obtain an instance of Alliance from the subsystem API first
Alliance alliance = ...;
alliance.StartCallToWarAgreement(callingKingdom, calledKingdom, kingdomToCallToWarAgainst, 0, false);
```

### EndCallToWarAgreement
`public void EndCallToWarAgreement(Kingdom callingKingdom, Kingdom calledKingdom, Kingdom kingdomToCallToWarAgainst)`

**Purpose:** Performs the operation described by this method.

```csharp
// Obtain an instance of Alliance from the subsystem API first
Alliance alliance = ...;
alliance.EndCallToWarAgreement(callingKingdom, calledKingdom, kingdomToCallToWarAgainst);
```

### GetKingdomsToCallToWarAgainst
`public List<Kingdom> GetKingdomsToCallToWarAgainst(Kingdom callingKingdom, Kingdom calledKingdom)`

**Purpose:** Reads and returns the `kingdoms to call to war against` value held by the current object.

```csharp
// Obtain an instance of Alliance from the subsystem API first
Alliance alliance = ...;
var result = alliance.GetKingdomsToCallToWarAgainst(callingKingdom, calledKingdom);
```

### AutoGeneratedStaticCollectObjectsAlliance
`public static void AutoGeneratedStaticCollectObjectsAlliance(object o, List<object> collectedObjects)`

**Purpose:** Performs the operation described by this method.

```csharp
// Static call; no instance required
Alliance.AutoGeneratedStaticCollectObjectsAlliance(o, collectedObjects);
```

### AutoGeneratedStaticCollectObjectsCallToWarAgreement
`public static void AutoGeneratedStaticCollectObjectsCallToWarAgreement(object o, List<object> collectedObjects)`

**Purpose:** Performs the operation described by this method.

```csharp
// Static call; no instance required
Alliance.AutoGeneratedStaticCollectObjectsCallToWarAgreement(o, collectedObjects);
```

## Usage Example

```csharp
// Typically call this after obtaining an instance from the subsystem API
Alliance alliance = ...;
alliance.RegisterEvents();
```

## See Also

- [Area Index](../)