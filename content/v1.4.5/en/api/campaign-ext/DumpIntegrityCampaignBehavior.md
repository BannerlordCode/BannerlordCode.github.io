---
title: "DumpIntegrityCampaignBehavior"
description: "Auto-generated class reference for DumpIntegrityCampaignBehavior."
---
# DumpIntegrityCampaignBehavior

**Namespace:** SandBox.CampaignBehaviors
**Module:** SandBox.CampaignBehaviors
**Type:** `public class DumpIntegrityCampaignBehavior : CampaignBehaviorBase`
**Base:** `CampaignBehaviorBase`
**File:** `Modules.SandBox/SandBox/SandBox.CampaignBehaviors/DumpIntegrityCampaignBehavior.cs`

## Overview

`DumpIntegrityCampaignBehavior` lives in `SandBox.CampaignBehaviors` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `SandBox.CampaignBehaviors` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Methods

### SyncData
`public override void SyncData(IDataStore dataStore)`

**Purpose:** **Purpose:** Synchronizes data across the relevant contexts or systems.

```csharp
// Obtain an instance of DumpIntegrityCampaignBehavior from the subsystem API first
DumpIntegrityCampaignBehavior dumpIntegrityCampaignBehavior = ...;
dumpIntegrityCampaignBehavior.SyncData(dataStore);
```

### RegisterEvents
`public override void RegisterEvents()`

**Purpose:** **Purpose:** Registers events with the current system so it can later be observed or dispatched.

```csharp
// Obtain an instance of DumpIntegrityCampaignBehavior from the subsystem API first
DumpIntegrityCampaignBehavior dumpIntegrityCampaignBehavior = ...;
dumpIntegrityCampaignBehavior.RegisterEvents();
```

### IsGameIntegrityAchieved
`public static bool IsGameIntegrityAchieved(out TextObject reason)`

**Purpose:** **Purpose:** Determines whether the this instance is in the game integrity achieved state or condition.

```csharp
// Static call; no instance required
DumpIntegrityCampaignBehavior.IsGameIntegrityAchieved(reason);
```

## Usage Example

```csharp
// Typically call this after obtaining an instance from the subsystem API
DumpIntegrityCampaignBehavior dumpIntegrityCampaignBehavior = ...;
dumpIntegrityCampaignBehavior.SyncData(dataStore);
```

## See Also

- [Area Index](../)