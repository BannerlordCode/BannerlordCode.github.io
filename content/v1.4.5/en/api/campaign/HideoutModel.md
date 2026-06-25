---
title: "HideoutModel"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `HideoutModel`
- [← Area / Back to campaign](./)
- [↑ API Index](../)
- [🏠 Home v1.4.5](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# HideoutModel

**Namespace:** TaleWorlds.CampaignSystem.ComponentInterfaces
**Module:** TaleWorlds.CampaignSystem
**Type:** `public abstract class HideoutModel : MBGameModel<HideoutModel>`
**Base:** `MBGameModel<HideoutModel>`
**File:** `Bannerlord.Source/bin/TaleWorlds.CampaignSystem/TaleWorlds.CampaignSystem.ComponentInterfaces/HideoutModel.cs`

## Overview

`HideoutModel` is a rule model that usually defines how a subsystem should compute things. Modders most often customize behavior by replacing or subclassing it.

## Mental Model

Treat `HideoutModel` as a Model-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Properties

| Name | Signature |
|------|-----------|
| `HideoutHiddenDuration` | `public abstract CampaignTime HideoutHiddenDuration { get; }` |
| `CanAttackHideoutStartTime` | `public abstract int CanAttackHideoutStartTime { get; }` |
| `CanAttackHideoutEndTime` | `public abstract int CanAttackHideoutEndTime { get; }` |

## Key Methods

### GetRogueryXpGainAsGhost
`public abstract float GetRogueryXpGainAsGhost()`

**Purpose:** Gets the current value of `roguery xp gain as ghost`.

### GetRogueryXpGainOnHideoutMissionEnd
`public abstract float GetRogueryXpGainOnHideoutMissionEnd(bool isSucceeded)`

**Purpose:** Gets the current value of `roguery xp gain on hideout mission end`.

### GetSendTroopsSuccessChance
`public abstract float GetSendTroopsSuccessChance(Hideout hideout)`

**Purpose:** Gets the current value of `send troops success chance`.

## Usage Example

```csharp
var implementation = new CustomHideoutModel();
```

## See Also

- [Complete Class Catalog](../catalog)