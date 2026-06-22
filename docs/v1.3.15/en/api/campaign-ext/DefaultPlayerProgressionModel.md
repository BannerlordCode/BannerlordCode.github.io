<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `DefaultPlayerProgressionModel`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# DefaultPlayerProgressionModel

**Namespace:** TaleWorlds.CampaignSystem.GameComponents
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class DefaultPlayerProgressionModel : PlayerProgressionModel`
**Base:** `PlayerProgressionModel`
**File:** `TaleWorlds.CampaignSystem/GameComponents/DefaultPlayerProgressionModel.cs`

## Overview

`DefaultPlayerProgressionModel` is a game Model — a rules/override point. Subclass it and register via `Game.Current.ReplaceModel<DefaultPlayerProgressionModel>(new MyDefaultPlayerProgressionModel())` to change how it computes.

## Key Methods

### GetPlayerProgress
```csharp
public override float GetPlayerProgress()
```

## Usage Example

```csharp
// Typical usage of DefaultPlayerProgressionModel (Model)
Game.Current.ReplaceModel<DefaultPlayerProgressionModel>(new MyDefaultPlayerProgressionModel());
```

## See Also

- [Complete Class Catalog](../catalog)