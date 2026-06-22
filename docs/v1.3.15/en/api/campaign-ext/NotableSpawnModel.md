<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `NotableSpawnModel`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# NotableSpawnModel

**Namespace:** TaleWorlds.CampaignSystem.ComponentInterfaces
**Module:** TaleWorlds.CampaignSystem
**Type:** `public abstract class NotableSpawnModel : MBGameModel<NotableSpawnModel>`
**Base:** `MBGameModel<NotableSpawnModel>`
**File:** `TaleWorlds.CampaignSystem/ComponentInterfaces/NotableSpawnModel.cs`

## Overview

`NotableSpawnModel` is a game Model — a rules/override point. Subclass it and register via `Game.Current.ReplaceModel<NotableSpawnModel>(new MyNotableSpawnModel())` to change how it computes.

## Key Methods

### GetTargetNotableCountForSettlement
```csharp
public abstract int GetTargetNotableCountForSettlement(Settlement settlement, Occupation occupation)
```

## Usage Example

```csharp
// Typical usage of NotableSpawnModel (Model)
Game.Current.ReplaceModel<NotableSpawnModel>(new MyNotableSpawnModel());
```

## See Also

- [Complete Class Catalog](../catalog)