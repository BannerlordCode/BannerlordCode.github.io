---
title: "DefaultHideoutModel"
description: "Auto-generated class reference for DefaultHideoutModel."
---
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

**Purpose:** Reads and returns the `roguery xp gain on hideout mission end` value held by the current object.

```csharp
// Obtain an instance of DefaultHideoutModel from the subsystem API first
DefaultHideoutModel defaultHideoutModel = ...;
var result = defaultHideoutModel.GetRogueryXpGainOnHideoutMissionEnd(false);
```

## Usage Example

```csharp
Game.Current.ReplaceModel<DefaultHideoutModel>(new MyDefaultHideoutModel());
```

## See Also

- [Area Index](../)