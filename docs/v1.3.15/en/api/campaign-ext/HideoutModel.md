<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `HideoutModel`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# HideoutModel

**Namespace:** TaleWorlds.CampaignSystem.ComponentInterfaces
**Module:** TaleWorlds.CampaignSystem
**Type:** `public abstract class HideoutModel : MBGameModel<HideoutModel>`
**Base:** `MBGameModel<HideoutModel>`
**File:** `TaleWorlds.CampaignSystem/ComponentInterfaces/HideoutModel.cs`

## Overview

`HideoutModel` is a game Model — a rules/override point. Subclass it and register via `Game.Current.ReplaceModel<HideoutModel>(new MyHideoutModel())` to change how it computes.

## Key Properties

| Name | Signature |
|------|-----------|
| `HideoutHiddenDuration` | `public abstract CampaignTime HideoutHiddenDuration { get; }` |
| `CanAttackHideoutStartTime` | `public abstract int CanAttackHideoutStartTime { get; }` |
| `CanAttackHideoutEndTime` | `public abstract int CanAttackHideoutEndTime { get; }` |

## Key Methods

### GetRogueryXpGainOnHideoutMissionEnd
```csharp
public abstract float GetRogueryXpGainOnHideoutMissionEnd(bool isSucceeded)
```

## Usage Example

```csharp
// Typical usage of HideoutModel (Model)
Game.Current.ReplaceModel<HideoutModel>(new MyHideoutModel());
```

## See Also

- [Complete Class Catalog](../catalog)