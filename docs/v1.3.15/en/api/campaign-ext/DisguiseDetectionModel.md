<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `DisguiseDetectionModel`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# DisguiseDetectionModel

**Namespace:** TaleWorlds.CampaignSystem.ComponentInterfaces
**Module:** TaleWorlds.CampaignSystem
**Type:** `public abstract class DisguiseDetectionModel : MBGameModel<DisguiseDetectionModel>`
**Base:** `MBGameModel<DisguiseDetectionModel>`
**File:** `TaleWorlds.CampaignSystem/ComponentInterfaces/DisguiseDetectionModel.cs`

## Overview

`DisguiseDetectionModel` is a game Model — a rules/override point. Subclass it and register via `Game.Current.ReplaceModel<DisguiseDetectionModel>(new MyDisguiseDetectionModel())` to change how it computes.

## Key Methods

### CalculateDisguiseDetectionProbability
```csharp
public abstract float CalculateDisguiseDetectionProbability(Settlement settlement)
```

## Usage Example

```csharp
// Typical usage of DisguiseDetectionModel (Model)
Game.Current.ReplaceModel<DisguiseDetectionModel>(new MyDisguiseDetectionModel());
```

## See Also

- [Complete Class Catalog](../catalog)