---
title: "DefaultIncidentModel"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `DefaultIncidentModel`
- [← Area / Back to campaign](./)
- [↑ API Index](../)
- [🏠 Home v1.3.0](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# DefaultIncidentModel

**Namespace:** TaleWorlds.CampaignSystem.GameComponents
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class DefaultIncidentModel : IncidentModel`
**Base:** `IncidentModel`
**File:** `TaleWorlds.CampaignSystem/GameComponents/DefaultIncidentModel.cs`

## Overview

`DefaultIncidentModel` is a rule model that usually defines how a subsystem should compute things. Modders most often customize behavior by replacing or subclassing it.

## Mental Model

Treat `DefaultIncidentModel` as a Model-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Methods

### GetMinGlobalCooldownTime
`public override CampaignTime GetMinGlobalCooldownTime()`

**Purpose:** Gets the current value of `min global cooldown time`.

### GetMaxGlobalCooldownTime
`public override CampaignTime GetMaxGlobalCooldownTime()`

**Purpose:** Gets the current value of `max global cooldown time`.

### GetIncidentTriggerGlobalProbability
`public override float GetIncidentTriggerGlobalProbability()`

**Purpose:** Gets the current value of `incident trigger global probability`.

### GetIncidentTriggerProbabilityDuringSiege
`public override float GetIncidentTriggerProbabilityDuringSiege()`

**Purpose:** Gets the current value of `incident trigger probability during siege`.

### GetIncidentTriggerProbabilityDuringWait
`public override float GetIncidentTriggerProbabilityDuringWait()`

**Purpose:** Gets the current value of `incident trigger probability during wait`.

## Usage Example

```csharp
Game.Current.ReplaceModel<DefaultIncidentModel>(new MyDefaultIncidentModel());
```

## See Also

- [Complete Class Catalog](../catalog)