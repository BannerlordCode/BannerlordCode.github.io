<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `IncidentModel`
- [← Area / Back to campaign](./)
- [↑ API Index](../)
- [🏠 Home v1.3.0](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# IncidentModel

**Namespace:** TaleWorlds.CampaignSystem.ComponentInterfaces
**Module:** TaleWorlds.CampaignSystem
**Type:** `public abstract class IncidentModel : MBGameModel<IncidentModel>`
**Base:** `MBGameModel<IncidentModel>`
**File:** `TaleWorlds.CampaignSystem/ComponentInterfaces/IncidentModel.cs`

## Overview

`IncidentModel` is a rule model that usually defines how a subsystem should compute things. Modders most often customize behavior by replacing or subclassing it.

## Mental Model

Treat `IncidentModel` as a Model-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Methods

### GetMinGlobalCooldownTime
`public abstract CampaignTime GetMinGlobalCooldownTime()`

**Purpose:** Gets the current value of `min global cooldown time`.

### GetMaxGlobalCooldownTime
`public abstract CampaignTime GetMaxGlobalCooldownTime()`

**Purpose:** Gets the current value of `max global cooldown time`.

### GetIncidentTriggerGlobalProbability
`public abstract float GetIncidentTriggerGlobalProbability()`

**Purpose:** Gets the current value of `incident trigger global probability`.

### GetIncidentTriggerProbabilityDuringSiege
`public abstract float GetIncidentTriggerProbabilityDuringSiege()`

**Purpose:** Gets the current value of `incident trigger probability during siege`.

### GetIncidentTriggerProbabilityDuringWait
`public abstract float GetIncidentTriggerProbabilityDuringWait()`

**Purpose:** Gets the current value of `incident trigger probability during wait`.

## Usage Example

```csharp
var implementation = new CustomIncidentModel();
```

## See Also

- [Complete Class Catalog](../catalog)