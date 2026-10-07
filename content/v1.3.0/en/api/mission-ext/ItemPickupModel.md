---
title: "ItemPickupModel"
description: "Auto-generated class reference for ItemPickupModel."
---
# ItemPickupModel

**Namespace:** TaleWorlds.MountAndBlade.ComponentInterfaces
**Module:** TaleWorlds.MountAndBlade
**Type:** `public abstract class ItemPickupModel : MBGameModel<ItemPickupModel>`
**Base:** `MBGameModel<ItemPickupModel>`
**File:** `TaleWorlds.MountAndBlade/ComponentInterfaces/ItemPickupModel.cs`

## Overview

`ItemPickupModel` is the abstract `MBGameModel<ItemPickupModel>` that decides whether a human AI agent should stop and pick a given piece of loot off the ground. It declares three abstract members — `GetItemScoreForAgent`, `IsItemAvailableForAgent` and `IsAgentEquipmentSuitableForPickUpAvailability` (`ItemPickupModel.cs:10`, `ItemPickupModel.cs:13`, `ItemPickupModel.cs:16`) — and nothing else: no fields, no constructor, no per-mission state. The single consumer in the shipped game is `HumanAIComponent`, which caches it once per agent at `MissionGameModels.Current.ItemPickupModel` and calls it from `SelectPickableItem` (`HumanAIComponent.cs:159`, `HumanAIComponent.cs:393`, `HumanAIComponent.cs:399`). `MissionGameModels` fills the property in its constructor from `GetGameModel<ItemPickupModel>()` (`MissionGameModels.cs:112`); the editor build supplies `DefaultItemPickupModel` via `EditorGame.cs:60`, and the campaign build supplies its own subclass from `SandBoxSubModule`. It has nothing to do with player input — no player-facing code path calls it.

## Mental Model

The three members answer three different questions and the caller keeps them apart, which is why collapsing them into one "can this agent have this item" test is the classic mistake.

`IsAgentEquipmentSuitableForPickUpAvailability` is a *per-agent, per-frame* gate that asks "does this agent have any reason to want anything at all". `HumanAIComponent.cs:159` ANDs it into a six-condition expression that also requires the agent to be assignable for scripted movement, alarmed, able to attack, not mid combat action, and not in water. Because the model is one conjunct of seven, returning `true` from it changes nothing on its own — every other conjunct must hold first.

`IsItemAvailableForAgent` is the *per-candidate* test and it takes the destination slot, which is computed by the caller through `MissionEquipment.SelectWeaponPickUpSlot` at `HumanAIComponent.cs:387` before the model is consulted. The shipped implementation is deliberately narrow: for thrown weapons it only allows a top-up of an already-correct slot at half or less of `ModifiedMaxAmount` (`DefaultItemPickupModel.cs:65`); for shields it requires `agent.HasLostShield()`; for a banner it requires the slot to be empty. It returns `false` by default, so a `WeaponClass` your override does not enumerate simply becomes unpickable rather than an error.

`GetItemScoreForAgent` is not a preference score in the ordinary sense — it is a *filter plus a ranking*. `SelectPickableItem` initialises the running best to `0f` (`HumanAIComponent.cs:367`) and only replaces the winner on a strict `>` comparison (`HumanAIComponent.cs:400`). So `0` and any negative value both mean "never pick this up", not "low priority". `DefaultItemPickupModel` leans on that: it returns a negative score specifically to veto boulders when the agent already spawned with that consumable type (`DefaultItemPickupModel.cs:32`), and it returns `0f` for everything not consumed by that same predicate — which is only true for items the agent spawned with, so the stock model only ever restocks what the agent started the battle carrying.

Watch the failure mode in the shipped implementation: `GetItemScoreForAgent` throws `MBException("This pickable item not scored: " + ...)` for a `WeaponClass` that reaches the `HadSameTypeOfConsumableOrShieldOnSpawn` branch without being in the switch (`DefaultItemPickupModel.cs:43`). Add a new `WeaponClass` to the game, do not extend that switch, and the exception surfaces inside a mission AI tick rather than at load.

## How to use

**Getting it.** Register from a submodule with `gameStarter.AddModel<ItemPickupModel>(new MyPickupModel())` (`BasicGameStarter.cs:47`); read it inside a mission as `MissionGameModels.Current.ItemPickupModel`. There is no `Game.Current.GetModel<T>()` in 1.3.0 and no `ReplaceModel<T>` either — both are later-version APIs.

```csharp
// Make agents pick up a healing consumable even if they did not spawn with one.
public class MyPickupModel : ItemPickupModel
{
    public override float GetItemScoreForAgent(SpawnedItemEntity item, Agent agent)
    {
        float stock = base.GetItemScoreForAgent(item, agent);
        if (stock > 0f)
        {
            return stock;                       // keep the stock restocking behaviour
        }
        if (item.WeaponCopy.Item.ItemFlags.HasAnyFlag(ItemFlags.CannotBePickedUp))
        {
            return 0f;
        }
        // Must exceed 0f: the caller keeps the best item only on a strict >.
        return 30f;
    }

    public override bool IsAgentEquipmentSuitableForPickUpAvailability(Agent agent)
    {
        return true || base.IsAgentEquipmentSuitableForPickUpAvailability(agent);
    }

    public override bool IsItemAvailableForAgent(SpawnedItemEntity item, Agent agent, EquipmentIndex slotToPickUp)
    {
        return base.IsItemAvailableForAgent(item, agent, slotToPickUp)
            || agent.Equipment[slotToPickUp].IsEmpty;
    }
}

public class MySubModule : MBSubModuleBase
{
    protected override void OnGameStart(Game game, IModDependencyResolver resolver)
    {
        base.OnGameStart(game, resolver);
        gameStarter.AddModel<ItemPickupModel>(new MyPickupModel());
    }
}
```

**The mistake that silently disables the whole feature.** Returning a negative or zero score to express "low priority". The caller's running maximum starts at `0f` and only accepts a strictly greater value, so `-1` is not "deprioritise", it is "this item can never be chosen", no matter how good the item is or how close the agent is.

## Key Methods

### GetItemScoreForAgent
`public abstract float GetItemScoreForAgent(SpawnedItemEntity item, Agent agent)`

**Purpose:** Reads and returns the item score for agent value held by the this instance.

```csharp
// Obtain an instance of ItemPickupModel from the subsystem API first
ItemPickupModel itemPickupModel = ...;
var result = itemPickupModel.GetItemScoreForAgent(item, agent);
```

### IsItemAvailableForAgent
`public abstract bool IsItemAvailableForAgent(SpawnedItemEntity item, Agent agent, EquipmentIndex slotToPickUp)`

**Purpose:** Determines whether the this instance is in the item available for agent state or condition.

```csharp
// Obtain an instance of ItemPickupModel from the subsystem API first
ItemPickupModel itemPickupModel = ...;
var result = itemPickupModel.IsItemAvailableForAgent(item, agent, slotToPickUp);
```

### IsAgentEquipmentSuitableForPickUpAvailability
`public abstract bool IsAgentEquipmentSuitableForPickUpAvailability(Agent agent)`

**Purpose:** Determines whether the this instance is in the agent equipment suitable for pick up availability state or condition.

```csharp
// Obtain an instance of ItemPickupModel from the subsystem API first
ItemPickupModel itemPickupModel = ...;
var result = itemPickupModel.IsAgentEquipmentSuitableForPickUpAvailability(agent);
```

**Reading it yourself.** Nothing but `HumanAIComponent` calls these three members, so if you want to reason about what an agent will do, enumerate the same candidates the AI enumerates — a scene box query for `SpawnedItemEntity`, not a mission object list:

```csharp
Vec3 min = Agent.Main.Position - new Vec3(10f, 10f, 10f);
Vec3 max = Agent.Main.Position + new Vec3(10f, 10f, 10f);
WeakGameEntity[] entities = new WeakGameEntity[128];
UIntPtr[] ids = new UIntPtr[128];
ItemPickupModel pickup = MissionGameModels.Current.ItemPickupModel;

int n = Mission.Current.Scene.SelectEntitiesInBoxWithScriptComponent<SpawnedItemEntity>(
    ref min, ref max, entities, ids);

for (int i = 0; i < n; i++)
{
    SpawnedItemEntity item = entities[i].GetFirstScriptOfType<SpawnedItemEntity>();
    EquipmentIndex slot = MissionEquipment.SelectWeaponPickUpSlot(Agent.Main, item.WeaponCopy, item.IsStuckMissile());
    if (pickup.IsItemAvailableForAgent(item, Agent.Main, slot))
    {
        Debug.Print("score=" + pickup.GetItemScoreForAgent(item, Agent.Main), false);
    }
}
```

**Boundary to respect.** All three members sit on the human AI tick path, which also runs while a battle loads and tears down. Reading `MissionGameModels.Current` outside a live mission is a `NullReferenceException`, because `MissionGameModels.Current` is nulled again by `MissionGameModels.Clear()` (`MissionGameModels.cs:133`).

## See Also

- [HumanAIComponent — the only shipped caller of all three members](../HumanAIComponent)
- [MissionDifficultyModel — the other one-line abstract model](../MissionDifficultyModel)
- [CustomBattleBannerBearersModel — referenced from the stock scoring implementation](../CustomBattleBannerBearersModel)
- [Mission — mission lifetime and MissionGameModels clearing](../MissionBoundaryCrossingHandler)
- [Area Index](../)