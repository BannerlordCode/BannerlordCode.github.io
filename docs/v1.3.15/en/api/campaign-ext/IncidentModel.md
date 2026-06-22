<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `IncidentModel`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# IncidentModel

**Namespace:** TaleWorlds.CampaignSystem.ComponentInterfaces
**Module:** TaleWorlds.CampaignSystem
**Type:** `public abstract class IncidentModel : MBGameModel<IncidentModel>`
**Base:** `MBGameModel<IncidentModel>`
**File:** `TaleWorlds.CampaignSystem/ComponentInterfaces/IncidentModel.cs`

## Overview

`IncidentModel` is a game Model — a rules/override point. Subclass it and register via `Game.Current.ReplaceModel<IncidentModel>(new MyIncidentModel())` to change how it computes.

## Key Methods

### GetMinGlobalCooldownTime
```csharp
public abstract CampaignTime GetMinGlobalCooldownTime()
```

### GetMaxGlobalCooldownTime
```csharp
public abstract CampaignTime GetMaxGlobalCooldownTime()
```

### GetIncidentTriggerGlobalProbability
```csharp
public abstract float GetIncidentTriggerGlobalProbability()
```

### GetIncidentTriggerProbabilityDuringSiege
```csharp
public abstract float GetIncidentTriggerProbabilityDuringSiege()
```

### GetIncidentTriggerProbabilityDuringWait
```csharp
public abstract float GetIncidentTriggerProbabilityDuringWait()
```

## Usage Example

```csharp
// Typical usage of IncidentModel (Model)
Game.Current.ReplaceModel<IncidentModel>(new MyIncidentModel());
```

## See Also

- [Complete Class Catalog](../catalog)