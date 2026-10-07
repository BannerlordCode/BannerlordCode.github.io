---
title: "DefaultItemPickupModel"
description: "Auto-generated class reference for DefaultItemPickupModel."
---
# DefaultItemPickupModel

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class DefaultItemPickupModel : ItemPickupModel`
**Base:** `ItemPickupModel`
**File:** `TaleWorlds.MountAndBlade/DefaultItemPickupModel.cs`

## Overview

`DefaultItemPickupModel` is the shipped implementation of `ItemPickupModel` (`DefaultItemPickupModel.cs:9`) — it decides which loose items on the ground an agent wants, whether a given item can go into a given slot, and whether an agent needs anything at all. It is reached through `MissionGameModels.Current.ItemPickupModel`.

The three methods answer three different questions at three different granularities, and the score values are not normalised — they are just ordering keys.

`GetItemScoreForAgent` returns a priority. A formation banner scores a flat `120f`, higher than everything else. Otherwise, *and only if the agent spawned with the same class of consumable or a shield*, it returns a per-class score: shields 100, arrows/bolts/sling stones 80, javelins 70, throwing axes 60, throwing knives 50, stones 20 — and **boulders return `-1f`** (`DefaultItemPickupModel.cs:31`, `DefaultItemPickupModel.cs:32`), which actively deprioritises them below everything else. Items flagged `CannotBePickedUp`, and items whose class the agent did not spawn with, score `0f`.

`IsItemAvailableForAgent` is a hard gate on a concrete slot, requiring reachability, a vacant position on the agent, and that no other agent is already moving to it (`DefaultItemPickupModel.cs:52`).

`IsAgentEquipmentSuitableForPickUpAvailability` is the coarse "does this agent want anything" test, and its fallbacks are ordered: a lost shield first, then any consumable in a weapon slot at half-or-less of maximum, then the banner-bearer model's `IsBannerSearchingAgent` (`DefaultItemPickupModel.cs:82`, `DefaultItemPickupModel.cs:95`).

## Mental Model

The throw in `GetItemScoreForAgent` is the defining feature of this class and it is *data-dependent*, which is what makes it so surprising (`DefaultItemPickupModel.cs:43`). The `switch` over `WeaponClass` sits inside the `agent.HadSameTypeOfConsumableOrShieldOnSpawn(weaponClass)` branch, and its default arm is `throw new MBException("This pickable item not scored: " + weaponClass.ToString())`. An agent that did *not* spawn with that weapon class never enters the switch and scores `0f` safely. An agent that *did* spawn with a weapon class the switch does not list takes the exception.

So adding a new `WeaponClass` — a modded flail, a grappling hook class, anything the shipped enum does not contain — makes this model throw at runtime, but only for the subset of agents that spawned carrying that class, and only while that item lies on the ground where one of them can see it. The same new class also fails to appear in `IsItemAvailableForAgent`, whose switch returns `false` for anything not listed (`DefaultItemPickupModel.cs:50`).

Note the two switches cover *different* sets. `GetItemScoreForAgent` handles Stone and Boulder; `IsItemAvailableForAgent` handles neither, only the ranged set plus shields and Banner. A boulder on the ground is therefore scored `-1f` — deliberately unwanted — and yet nothing in `IsItemAvailableForAgent` would ever allow it, which is consistent only because the score already says no.

The consumable check inside `IsItemAvailableForAgent` is worth reading carefully: it requires `Amount > 0`, an occupied slot of the *same* weapon class, and that the current amount is at most `ModifiedMaxAmount >> 1` — half. So an agent at 50%+ of its quiver capacity will not pick up more arrows, while the coarse availability test uses the identical half-or-less threshold across every weapon slot.

## How to use

**Getting it.** Read the current model, or replace it wholesale:

```csharp
ItemPickupModel model = MissionGameModels.Current.ItemPickupModel;
```

**Typical use** — scoring an item yourself before deciding whether to steer an agent toward it:

```csharp
ItemPickupModel model = MissionGameModels.Current.ItemPickupModel;
float score = model.GetItemScoreForAgent(spawnedItem, agent);
bool hasRoom = model.IsAgentEquipmentSuitableForPickUpAvailability(agent);
if (score > 0f && hasRoom)
{
    // Worth targeting.
}
```

**Typical use** — subclassing to add a weapon class without inheriting the throw:

```csharp
public class ModItemPickupModel : DefaultItemPickupModel
{
    public override float GetItemScoreForAgent(SpawnedItemEntity item, Agent agent)
    {
        if (item.WeaponCopy.Item.PrimaryWeapon.WeaponClass == WeaponClass.UnenchantedFlail)
            return 75f;
        return base.GetItemScoreForAgent(item, agent);
    }
}
```

**Most common mistake, and what it costs.** Shipping a modded `WeaponClass` and assuming the pickup model degrades gracefully. It does not: the base `throw new MBException` (`DefaultItemPickupModel.cs:43`) is reached for any agent that spawned with that class while the item is on the ground, and an `MBException` inside mission tick takes the battle down. The failure looks intermittent because it depends on which agent walks past — it may only appear in one mission type, or only for one troop tree. Override `GetItemScoreForAgent` to handle your class explicitly before delegating, and note that `IsItemAvailableForAgent` will still return `false` for it until you override that too.

## Key Methods

### GetItemScoreForAgent
`public override float GetItemScoreForAgent(SpawnedItemEntity item, Agent agent)`

**Purpose:** Reads and returns the item score for agent value held by the this instance.

```csharp
// Obtain an instance of DefaultItemPickupModel from the subsystem API first
DefaultItemPickupModel defaultItemPickupModel = ...;
var result = defaultItemPickupModel.GetItemScoreForAgent(item, agent);
```

### IsItemAvailableForAgent
`public override bool IsItemAvailableForAgent(SpawnedItemEntity item, Agent agent, EquipmentIndex slotToPickUp)`

**Purpose:** Determines whether the this instance is in the item available for agent state or condition.

```csharp
// Obtain an instance of DefaultItemPickupModel from the subsystem API first
DefaultItemPickupModel defaultItemPickupModel = ...;
var result = defaultItemPickupModel.IsItemAvailableForAgent(item, agent, slotToPickUp);
```

### IsAgentEquipmentSuitableForPickUpAvailability
`public override bool IsAgentEquipmentSuitableForPickUpAvailability(Agent agent)`

**Purpose:** Determines whether the this instance is in the agent equipment suitable for pick up availability state or condition.

```csharp
// Obtain an instance of DefaultItemPickupModel from the subsystem API first
DefaultItemPickupModel defaultItemPickupModel = ...;
var result = defaultItemPickupModel.IsAgentEquipmentSuitableForPickUpAvailability(agent);
```

## Usage Example

```csharp
Game.Current.ReplaceModel<DefaultItemPickupModel>(new MyDefaultItemPickupModel());
```

## See Also

- [Area Index](../)
- [Agent](../../mission/Agent)
- [BattleBannerBearersModel](../BattleBannerBearersModel)
- [MissionGameModels](../MissionGameModels)
- [DefaultItemPickupModel (中文页面)](../../../../zh/api/mission-ext/DefaultItemPickupModel)