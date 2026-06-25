---
title: "DefaultHideoutModel"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `DefaultHideoutModel`
- [← Area / Back to campaign](./)
- [↑ API Index](../)
- [🏠 Home v1.4.5](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# DefaultHideoutModel

**Namespace:** TaleWorlds.CampaignSystem.GameComponents
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class DefaultHideoutModel : HideoutModel`
**Base:** `HideoutModel`
**File:** `Bannerlord.Source/bin/TaleWorlds.CampaignSystem/TaleWorlds.CampaignSystem.GameComponents/DefaultHideoutModel.cs`

## Overview

`DefaultHideoutModel` is a rule model that usually defines how a subsystem should compute things. Modders most often customize behavior by replacing or subclassing it.

## Mental Model

Treat `DefaultHideoutModel` as a Model-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Methods

### GetRogueryXpGainAsGhost
`public override float GetRogueryXpGainAsGhost()`

**Purpose:** Gets the current value of `roguery xp gain as ghost`.

### GetRogueryXpGainOnHideoutMissionEnd
`public override float GetRogueryXpGainOnHideoutMissionEnd(bool isSucceeded)`

**Purpose:** Gets the current value of `roguery xp gain on hideout mission end`.

### GetSendTroopsSuccessChance
`public override float GetSendTroopsSuccessChance(Hideout hideout)`

**Purpose:** Gets the current value of `send troops success chance`.

## Usage Example

```csharp
Game.Current.ReplaceModel<DefaultHideoutModel>(new MyDefaultHideoutModel());
```

## See Also

- [Complete Class Catalog](../catalog)