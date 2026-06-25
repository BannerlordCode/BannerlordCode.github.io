---
title: "BarberCampaignBehavior"
description: "Auto-generated class reference for BarberCampaignBehavior."
---
# BarberCampaignBehavior

**Namespace:** SandBox.CampaignBehaviors
**Module:** SandBox.CampaignBehaviors
**Type:** `public class BarberCampaignBehavior : CampaignBehaviorBase, IFacegenCampaignBehavior, ICampaignBehavior`
**Base:** `CampaignBehaviorBase`
**File:** `SandBox/CampaignBehaviors/BarberCampaignBehavior.cs`

## Overview

`BarberCampaignBehavior` lives in `SandBox.CampaignBehaviors` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `SandBox.CampaignBehaviors` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Methods

### RegisterEvents
`public override void RegisterEvents()`

**Purpose:** **Purpose:** Registers events with the current system so it can later be observed or dispatched.

```csharp
// Obtain an instance of BarberCampaignBehavior from the subsystem API first
BarberCampaignBehavior barberCampaignBehavior = ...;
barberCampaignBehavior.RegisterEvents();
```

### SyncData
`public override void SyncData(IDataStore store)`

**Purpose:** **Purpose:** Synchronizes data across the relevant contexts or systems.

```csharp
// Obtain an instance of BarberCampaignBehavior from the subsystem API first
BarberCampaignBehavior barberCampaignBehavior = ...;
barberCampaignBehavior.SyncData(store);
```

### GetFaceGenFilter
`public IFaceGeneratorCustomFilter GetFaceGenFilter()`

**Purpose:** **Purpose:** Reads and returns the face gen filter value held by the this instance.

```csharp
// Obtain an instance of BarberCampaignBehavior from the subsystem API first
BarberCampaignBehavior barberCampaignBehavior = ...;
var result = barberCampaignBehavior.GetFaceGenFilter();
```

### GetHaircutIndices
`public int GetHaircutIndices(BasicCharacterObject character)`

**Purpose:** **Purpose:** Reads and returns the haircut indices value held by the this instance.

```csharp
// Obtain an instance of BarberCampaignBehavior from the subsystem API first
BarberCampaignBehavior barberCampaignBehavior = ...;
var result = barberCampaignBehavior.GetHaircutIndices(character);
```

### GetFacialHairIndices
`public int GetFacialHairIndices(BasicCharacterObject character)`

**Purpose:** **Purpose:** Reads and returns the facial hair indices value held by the this instance.

```csharp
// Obtain an instance of BarberCampaignBehavior from the subsystem API first
BarberCampaignBehavior barberCampaignBehavior = ...;
var result = barberCampaignBehavior.GetFacialHairIndices(character);
```

### GetAvailableStages
`public FaceGeneratorStage GetAvailableStages()`

**Purpose:** **Purpose:** Reads and returns the available stages value held by the this instance.

```csharp
// Obtain an instance of BarberCampaignBehavior from the subsystem API first
BarberCampaignBehavior barberCampaignBehavior = ...;
var result = barberCampaignBehavior.GetAvailableStages();
```

## Usage Example

```csharp
// Typically call this after obtaining an instance from the subsystem API
BarberCampaignBehavior barberCampaignBehavior = ...;
barberCampaignBehavior.RegisterEvents();
```

## See Also

- [Area Index](../)