---
title: "BarberCampaignBehavior"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `BarberCampaignBehavior`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.4.5](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# BarberCampaignBehavior

**Namespace:** SandBox.CampaignBehaviors
**Module:** SandBox.CampaignBehaviors
**Type:** `public class BarberCampaignBehavior : CampaignBehaviorBase, IFacegenCampaignBehavior, ICampaignBehavior`
**Base:** `CampaignBehaviorBase`
**File:** `Bannerlord.Source/Modules.SandBox/SandBox/SandBox.CampaignBehaviors/BarberCampaignBehavior.cs`

## Overview

`BarberCampaignBehavior` lives in `SandBox.CampaignBehaviors` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `SandBox.CampaignBehaviors` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Methods

### GetHaircutIndices
`public int GetHaircutIndices(BasicCharacterObject character)`

**Purpose:** Gets the current value of `haircut indices`.

### GetFacialHairIndices
`public int GetFacialHairIndices(BasicCharacterObject character)`

**Purpose:** Gets the current value of `facial hair indices`.

### GetAvailableStages
`public FaceGeneratorStage GetAvailableStages()`

**Purpose:** Gets the current value of `available stages`.

### RegisterEvents
`public override void RegisterEvents()`

**Purpose:** Handles logic related to `register events`.

### SyncData
`public override void SyncData(IDataStore store)`

**Purpose:** Handles logic related to `sync data`.

### GetFaceGenFilter
`public IFaceGeneratorCustomFilter GetFaceGenFilter()`

**Purpose:** Gets the current value of `face gen filter`.

## Usage Example

```csharp
var value = new BarberCampaignBehavior();
value.GetHaircutIndices(character);
```

## See Also

- [Complete Class Catalog](../catalog)