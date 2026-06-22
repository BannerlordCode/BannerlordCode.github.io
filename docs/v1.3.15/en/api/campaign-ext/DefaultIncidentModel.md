<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `DefaultIncidentModel`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# DefaultIncidentModel

**Namespace:** TaleWorlds.CampaignSystem.GameComponents
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class DefaultIncidentModel : IncidentModel`
**Base:** `IncidentModel`
**File:** `TaleWorlds.CampaignSystem/GameComponents/DefaultIncidentModel.cs`

## Overview

`DefaultIncidentModel` is a game Model — a rules/override point. Subclass it and register via `Game.Current.ReplaceModel<DefaultIncidentModel>(new MyDefaultIncidentModel())` to change how it computes.

## Key Methods

### GetMinGlobalCooldownTime
```csharp
public override CampaignTime GetMinGlobalCooldownTime()
```

### GetMaxGlobalCooldownTime
```csharp
public override CampaignTime GetMaxGlobalCooldownTime()
```

### GetIncidentTriggerGlobalProbability
```csharp
public override float GetIncidentTriggerGlobalProbability()
```

### GetIncidentTriggerProbabilityDuringSiege
```csharp
public override float GetIncidentTriggerProbabilityDuringSiege()
```

### GetIncidentTriggerProbabilityDuringWait
```csharp
public override float GetIncidentTriggerProbabilityDuringWait()
```

## Usage Example

```csharp
// Typical usage of DefaultIncidentModel (Model)
Game.Current.ReplaceModel<DefaultIncidentModel>(new MyDefaultIncidentModel());
```

## See Also

- [Complete Class Catalog](../catalog)