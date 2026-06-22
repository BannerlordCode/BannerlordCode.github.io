<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `DefaultDisguiseDetectionModel`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# DefaultDisguiseDetectionModel

**Namespace:** TaleWorlds.CampaignSystem.GameComponents
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class DefaultDisguiseDetectionModel : DisguiseDetectionModel`
**Base:** `DisguiseDetectionModel`
**File:** `TaleWorlds.CampaignSystem/GameComponents/DefaultDisguiseDetectionModel.cs`

## Overview

`DefaultDisguiseDetectionModel` is a game Model — a rules/override point. Subclass it and register via `Game.Current.ReplaceModel<DefaultDisguiseDetectionModel>(new MyDefaultDisguiseDetectionModel())` to change how it computes.

## Key Methods

### CalculateDisguiseDetectionProbability
```csharp
public override float CalculateDisguiseDetectionProbability(Settlement settlement)
```

## Usage Example

```csharp
// Typical usage of DefaultDisguiseDetectionModel (Model)
Game.Current.ReplaceModel<DefaultDisguiseDetectionModel>(new MyDefaultDisguiseDetectionModel());
```

## See Also

- [Complete Class Catalog](../catalog)