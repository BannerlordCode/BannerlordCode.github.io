<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `DefaultHideoutModel`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# DefaultHideoutModel

**Namespace:** TaleWorlds.CampaignSystem.GameComponents
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class DefaultHideoutModel : HideoutModel`
**Base:** `HideoutModel`
**File:** `TaleWorlds.CampaignSystem/GameComponents/DefaultHideoutModel.cs`

## Overview

`DefaultHideoutModel` is a game Model — a rules/override point. Subclass it and register via `Game.Current.ReplaceModel<DefaultHideoutModel>(new MyDefaultHideoutModel())` to change how it computes.

## Key Properties

| Name | Signature |
|------|-----------|
| `HideoutHiddenDuration` | `public override CampaignTime HideoutHiddenDuration { get; }` |
| `CanAttackHideoutStartTime` | `public override int CanAttackHideoutStartTime { get; }` |
| `CanAttackHideoutEndTime` | `public override int CanAttackHideoutEndTime { get; }` |

## Key Methods

### GetRogueryXpGainOnHideoutMissionEnd
```csharp
public override float GetRogueryXpGainOnHideoutMissionEnd(bool isSucceeded)
```

## Usage Example

```csharp
// Typical usage of DefaultHideoutModel (Model)
Game.Current.ReplaceModel<DefaultHideoutModel>(new MyDefaultHideoutModel());
```

## See Also

- [Complete Class Catalog](../catalog)