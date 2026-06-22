<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `DefaultNotableSpawnModel`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# DefaultNotableSpawnModel

**Namespace:** TaleWorlds.CampaignSystem.GameComponents
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class DefaultNotableSpawnModel : NotableSpawnModel`
**Base:** `NotableSpawnModel`
**File:** `TaleWorlds.CampaignSystem/GameComponents/DefaultNotableSpawnModel.cs`

## Overview

`DefaultNotableSpawnModel` is a game Model — a rules/override point. Subclass it and register via `Game.Current.ReplaceModel<DefaultNotableSpawnModel>(new MyDefaultNotableSpawnModel())` to change how it computes.

## Key Methods

### GetTargetNotableCountForSettlement
```csharp
public override int GetTargetNotableCountForSettlement(Settlement settlement, Occupation occupation)
```

## Usage Example

```csharp
// Typical usage of DefaultNotableSpawnModel (Model)
Game.Current.ReplaceModel<DefaultNotableSpawnModel>(new MyDefaultNotableSpawnModel());
```

## See Also

- [Complete Class Catalog](../catalog)