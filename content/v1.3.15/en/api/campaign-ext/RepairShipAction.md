---
title: "RepairShipAction"
description: "Repairs a campaign ship through the cost model, skill hook, hit-point update, and OnShipRepaired event pipeline."
---
# RepairShipAction

**Namespace:** `TaleWorlds.CampaignSystem.Actions`  
**Module:** `TaleWorlds.CampaignSystem`  
**Type:** `public static class RepairShipAction`  
**Base:** `System.Object` (static; cannot instantiate)  
**Source:** `TaleWorlds.CampaignSystem/Actions/RepairShipAction.cs`

## Responsibility

Repairs a `Ship` to full durability or to the bandit-ship threshold, optionally charging the owning caravan or lord party and always notifying skill and campaign-event consumers for an actual repair.

## Mental model

`Ship.HitPoints` is persistent campaign state, but writing it is not the same as completing a repair transaction. `RepairShipAction` owns the sequence: for a qualifying mobile owner, `Apply` asks `Campaign.Current.Models.ShipCostModel` for a price and transfers it with `GiveGoldAction`; the shared internal path then reports the repaired amount to `SkillLevelingManager`, writes the new hit points, and dispatches `CampaignEvents.OnShipRepairedEvent`.

This Action is not a port or eligibility validator. It does not check that the settlement has a port, that the caller owns the ship, that the party can afford the charge, or that the ship is not already full. Those checks belong to the upstream menu or campaign behavior. Choose the entry point that matches the economic context instead of assigning `ship.HitPoints` directly.

## Public entries

### Apply

```csharp
public static void Apply(Ship ship, Settlement repairPort)
```

Charges the repair cost only when the owner is a mobile caravan or lord party, then repairs to `ship.MaxHitPoints` and reports the given settlement as the repair port.

### ApplyForFree

```csharp
public static void ApplyForFree(Ship ship)
```

Repairs to `ship.MaxHitPoints` without a payment. The repair event receives a null settlement.

### ApplyForBanditShip

```csharp
public static void ApplyForBanditShip(Ship ship)
```

If the ship is below 80 percent of `MaxHitPoints`, repairs it to exactly 80 percent. At or above that threshold it does nothing and dispatches no repair event.

The private `ApplyInternal(Ship, float, Settlement)` is the synchronous commit point. It reports the hit-point delta before writing hit points, then dispatches the event after the new value is visible.

## Dependencies

The upstream state is a [Ship](../Ship) acquired from a [PartyBase](../../campaign/PartyBase) or [MobileParty](../../campaign/MobileParty), plus a validated [Settlement](../../campaign/Settlement) for the paid entry. The price comes from [ShipCostModel](../ShipCostModel); payment uses `GiveGoldAction`, skill progression is notified through `SkillLevelingManager`, and [CampaignEvents](../CampaignEvents) exposes `OnShipRepairedEvent`.

The 1.4.5 source tree contains the class declaration and its three public wrappers, but no class-external direct call to `RepairShipAction`. That absence matters: a mod must supply the port or AI workflow and must not invent an official repair menu call site. The verified behavior of the wrappers is still source-backed: `Apply` and `ApplyForFree` target full durability, while `ApplyForBanditShip` has the 80 percent guard.

## When to use / when not to

- Use `Apply` from a confirmed port transaction when the caller has checked port access, ownership, and available trade gold.
- Use `ApplyForFree` for an explicit quest reward, compensation, or other system-owned free repair.
- Use `ApplyForBanditShip` only for the bandit maintenance rule; it intentionally leaves ships at or above 80 percent untouched.
- Do not write `ship.HitPoints` directly, call paid repair with a null port for a qualifying mobile owner, or hide a repeated repair in a per-frame tick.

## State cascade

| Entry | Cost and target | Side effects and timing |
| --- | --- | --- |
| `Apply(ship, repairPort)` | Uses `ShipCostModel.GetShipRepairCost` for a caravan or lord-party owner, then targets `MaxHitPoints` | `GiveGoldAction` runs before the repair event; use after a one-time payment confirmation |
| `ApplyForFree(ship)` | No payment; targets `MaxHitPoints` | Calls the skill hook, updates hit points, and dispatches with a null port |
| `ApplyForBanditShip(ship)` | Only below 80 percent; targets 80 percent | No-op at or above the threshold, so no skill hook or event is sent in that case |

All actual repairs call `SkillLevelingManager.OnShipRepaired(ship, delta)`, assign `ship.HitPoints`, and then call `CampaignEventDispatcher.OnShipRepaired(ship, repairPort)`. The Action does not change `Ship.Owner`; ownership remains the responsibility of [ChangeShipOwnerAction](../ChangeShipOwnerAction).

## Risks and save boundaries

- `Apply` immediately reads `ship.Owner`; for a caravan or lord party it also reads `Campaign.Current.Models` and passes `repairPort` into `GiveGoldAction`. A null ship, owner, campaign, or required port can fail before the hit-point update.
- `GiveGoldAction` may clamp the payment to the party's available gold, but repair still proceeds to full durability. Check the balance before calling or a caller can create an unintended underpayment.
- The Action does not validate `repairPort.HasPort`, siege/hostility rules, or ownership. Do not infer those permissions from the method name.
- Calling `Apply` or `ApplyForFree` on an already-full ship still reports a zero delta and dispatches an event. Repeated calls can duplicate listener rewards or refresh work; the bandit entry alone has a threshold no-op.
- Ship hit points and ownership are saved campaign state. Direct hit-point writes skip the cost, skill hook, and event contract; changing state during early load or before ownership restoration can produce a save that lacks its expected side effects.
- The default 1.4.5 `DefaultShipCostModel` returns zero for repair, but a replacement model or content module may charge a nonzero amount. Treat the model as the contract, not the current default value.

## Real example: repair a damaged main-party ship

This example acquires the ship from the real `MobileParty.MainParty.Ships` collection and the port from `Settlement.CurrentSettlement`. It is shaped for a port-menu consequence or another one-time campaign confirmation callback.

```csharp
using System.Linq;
using TaleWorlds.CampaignSystem;
using TaleWorlds.CampaignSystem.Actions;
using TaleWorlds.CampaignSystem.Party;
using TaleWorlds.CampaignSystem.Settlements;

public static void RepairFirstDamagedPlayerShip()
{
    if (Campaign.Current == null)
        return;

    MobileParty party = MobileParty.MainParty;
    Settlement port = Settlement.CurrentSettlement;
    if (party == null || port == null || !port.HasPort)
        return;

    Ship ship = party.Ships.FirstOrDefault(
        candidate => candidate.HitPoints < candidate.MaxHitPoints);
    if (ship == null || ship.Owner != party.Party)
        return;

    int cost = (int)Campaign.Current.Models.ShipCostModel
        .GetShipRepairCost(ship, party.Party);
    if (party.PartyTradeGold >= cost)
        RepairShipAction.Apply(ship, port);
}
```

The caller checks access and resources, while the Action owns the payment, skill callback, hit-point write, and repair event. Do not run this method every frame.

## Version note

The three public entries, owner condition for paid repair, full/80 percent targets, and event order are equivalent in v1.3.15 and v1.4.5. The 1.4.5 decompiled source omits only the default argument at the private call site. Always query the current `ShipCostModel`, because content modules can replace the default zero-cost implementation.

## Navigation

- Save boundary: [`SaveableTypeDefiner`](../../save-system/SaveableTypeDefiner/) registers affected `Ship` fields; the repair event is not replayed on load, so owner and hit points should be committed through the Action.
- Parent: [campaign-ext API](../)
- Siblings: [RaftStateChangeAction](../RaftStateChangeAction) · [RemoveCompanionDetail](../RemoveCompanionDetail) · [ChangeShipOwnerAction](../ChangeShipOwnerAction)
- Children: [Apply](#apply) · [ApplyForFree](#applyforfree) · [ApplyForBanditShip](#applyforbanditship)
- Related: [Ship](../Ship) · [ShipCostModel](../ShipCostModel) · [MobileParty](../../campaign/MobileParty) · [Settlement](../../campaign/Settlement) · [CampaignEvents](../CampaignEvents)
