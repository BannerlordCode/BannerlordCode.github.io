<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `DefaultHideoutModel`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.3.15](../../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# DefaultHideoutModel

**Namespace:** TaleWorlds.CampaignSystem.GameComponents
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class DefaultHideoutModel : HideoutModel`
**Base:** `HideoutModel`
**File:** `TaleWorlds.CampaignSystem/GameComponents/DefaultHideoutModel.cs`

## Overview

`DefaultHideoutModel` is a rule model that usually defines how a subsystem should compute things. Modders most often customize behavior by replacing or subclassing it.

## Mental Model

Treat `DefaultHideoutModel` as a Model-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Properties

| Name | Signature |
|------|-----------|
| `HideoutHiddenDuration` | `public override CampaignTime HideoutHiddenDuration { get; }` |
| `CanAttackHideoutStartTime` | `public override int CanAttackHideoutStartTime { get; }` |
| `CanAttackHideoutEndTime` | `public override int CanAttackHideoutEndTime { get; }` |

## Key Methods

### GetRogueryXpGainOnHideoutMissionEnd
`public override float GetRogueryXpGainOnHideoutMissionEnd(bool isSucceeded)`

**Purpose:** Gets the current value of `roguery xp gain on hideout mission end`.

## Usage Example

```csharp
Game.Current.ReplaceModel<DefaultHideoutModel>(new MyDefaultHideoutModel());
```

## See Also

- [Complete Class Catalog](../catalog)