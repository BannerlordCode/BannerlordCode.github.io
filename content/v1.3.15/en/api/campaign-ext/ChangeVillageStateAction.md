---
title: "ChangeVillageStateAction"
description: "Auto-generated campaign action reference for ChangeVillageStateAction."
---
# ChangeVillageStateAction

**Namespace:** TaleWorlds.CampaignSystem.Actions
**Module:** TaleWorlds.CampaignSystem
**Type:** static class
**File:** `TaleWorlds.CampaignSystem/Actions/ChangeVillageStateAction.cs`

## Overview

`ChangeVillageStateAction` is the only sanctioned way to move a village between the five states in `Village.VillageStates` (`Village.cs:487`): `Normal`, `BeingRaided`, `ForcedForVolunteers`, `ForcedForSupplies`, `Looted`. It is a static class (`ChangeVillageStateAction.cs:8`) exposing five named wrappers — `ApplyBySettingToNormal` (line 23), `ApplyBySettingToBeingRaided` (line 29), `ApplyBySettingToBeingForcedForSupplies` (line 35), `ApplyBySettingToBeingForcedForVolunteers` (line 41) and `ApplyBySettingToLooted` (line 47) — that all funnel into one private `ApplyInternal(Village, VillageStates, MobileParty)` (line 11).

Each wrapper is three lines: take `settlement.Village`, hard-code one enum member, pass a raider party (or `null` for `Normal`), delegate. That design is deliberate: the raider identity is threaded through so that campaign listeners can attribute the change, and the enum member is threaded through so there is exactly one call site that emits the event.

`ApplyInternal` is where the actual work is, and it is only three lines deep: an equality guard (`ChangeVillageStateAction.cs:14`), the state write, `CampaignEventDispatcher.Instance.OnVillageStateChanged(village, oldState, newState, raiderParty)` (line 17), and `village.Settlement.Party.SetLevelMaskIsDirty()` (line 18) so the map icon re-evaluates.

## Mental Model

Model this as *the only writer of one enum field, plus the notification that the rest of the campaign hangs off*. Everything else — map icons, village AI, production, whether the village counts as deserted — is downstream of the event this class raises. If you want the world to react, you go through this class; if you assign `village.VillageState` yourself you get half the reaction and none of the attribution.

There are four behaviours worth knowing before you call it, and none of them are obvious from the method names:

- **Writing the same state is a complete no-op.** The whole body sits inside `if (newState != villageState)` (`ChangeVillageStateAction.cs:14`), and `Village.VillageState`'s own setter has the same guard. So calling `ApplyBySettingToBeingRaided` on a village that is already being raided fires *no* `OnVillageStateChanged` and *no* `OnVillageBeingRaided`. A mod that re-applies state every tick to "make sure" gets one event the first time and silence forever after.
- **The three "interesting" state events do not cover the forced-for states.** `Village.VillageState`'s setter dispatches `OnVillageBecomeNormal`, `OnVillageBeingRaided` and `OnVillageLooted` (`Village.cs:131`, `Village.cs:134`, `Village.cs:140`) but explicitly `break`s out of the switch for `ForcedForVolunteers` and `ForcedForSupplies` (`Village.cs:138`). Listeners of those three events never hear about a village being forced for supplies or volunteers — only `OnVillageStateChanged` sees those transitions. This is the single most common surprise in this area of the campaign.
- **`Settlement.Village` is a public field with no null guard** (`Settlement.cs:1816`), and every wrapper dereferences it immediately. Pass a town or a castle settlement and you get a `NullReferenceException` on the first line of `ApplyInternal`. `ChangeVillageStateAction` has no `is Settlement.IsVillage` check and will not give you a clean failure.
- **`ApplyBySettingToNormal` passes `null` as the raider** (`ChangeVillageStateAction.cs:25`), and `OnVillageStateChanged`'s fourth parameter is a `MobileParty` that is genuinely null on that path (`CampaignEventDispatcher.cs:409`). A listener that dereferences `raiderParty` without a null check works fine during a raid and crashes the moment a village recovers. The contract is asymmetric: raider-carrying states guarantee the party, `Normal` does not.
- **Nothing here rolls the village's loot or hearth tax back.** `Looted` also flips `Village.IsDeserted`, which is just `_villageState == Looted` (`Village.cs:155`). Returning a looted village to `Normal` clears the deserted flag but does not restore anything the raid consumed; if your mod wants recovery to be symmetric it has to apply that itself.

## How to use

### Getting one

Nothing to obtain — it is `public static class ChangeVillageStateAction` (`ChangeVillageStateAction.cs:8`). The real call site in the campaign is the raid and "force for supplies" logic: those behaviours hold a `Settlement`, read `settlement.Village`, and pick the wrapper that matches what they are about to do. From a mod, call it from any `CampaignBehaviorBase` event handler, and always check `settlement.Village != null` first.

### Typical use

```csharp
using TaleWorlds.CampaignSystem;
using TaleWorlds.CampaignSystem.Actions;
using TaleWorlds.CampaignSystem.Settlements;

public class RaidPunishment : CampaignBehaviorBase
{
    public override void RegisterEvents()
    {
        CampaignEvents.OnVillageStateChangedEvent.AddListenerOn<OnVillageStateChangedEvent>(OnVillageStateChanged);
    }

    public override void SyncData()
    {
    }

    private void OnVillageStateChanged(Village village, Village.VillageStates oldState,
                                       Village.VillageStates newState, MobileParty raiderParty)
    {
        // raiderParty is genuinely null when the village returned to Normal
        // (ChangeVillageStateAction.cs:25), so this null check is not optional.
        if (newState == Village.VillageStates.Looted && raiderParty != null)
        {
            ChangeVillageStateAction.ApplyBySettingToNormal(village.Settlement);
        }
    }
}

public static class ForceSupplies
{
    public static void Press(Village village, MobileParty raider)
    {
        // Only a forced-for transition: OnVillageBeingRaided and friends never fire,
        // because Village.VillageState's setter breaks out for these two members.
        ChangeVillageStateAction.ApplyBySettingToBeingForcedForSupplies(village.Settlement, raider);
    }
}
```

## Methods

### ApplyBySettingToNormal

```csharp
public static void ApplyBySettingToNormal(Settlement settlement)
```

**Purpose:** Applies the effect of by setting to normal to the this instance.

### ApplyBySettingToBeingRaided

```csharp
public static void ApplyBySettingToBeingRaided(Settlement settlement, MobileParty raider)
```

**Purpose:** Applies the effect of by setting to being raided to the this instance.

### ApplyBySettingToBeingForcedForSupplies

```csharp
public static void ApplyBySettingToBeingForcedForSupplies(Settlement settlement, MobileParty raider)
```

**Purpose:** Applies the effect of by setting to being forced for supplies to the this instance.

### ApplyBySettingToBeingForcedForVolunteers

```csharp
public static void ApplyBySettingToBeingForcedForVolunteers(Settlement settlement, MobileParty raider)
```

**Purpose:** Applies the effect of by setting to being forced for volunteers to the this instance.

### ApplyBySettingToLooted

```csharp
public static void ApplyBySettingToLooted(Settlement settlement, MobileParty raider)
```

**Purpose:** Applies the effect of by setting to looted to the this instance.

## Usage Example

```csharp
// Check Village first: Settlement.Village is a public field and is null for towns and castles.
if (settlement.Village != null)
{
    ChangeVillageStateAction.ApplyBySettingToNormal(settlement);
}
```

## See Also

- [Area Index](../)
- [Campaign System](../../campaign/)