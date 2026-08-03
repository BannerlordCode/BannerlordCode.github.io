---
title: "ChangeGovernorAction"
description: "The campaign transition for assigning or removing a town governor while synchronizing location, busy state, references, and governor-change events."
---
# ChangeGovernorAction

**Namespace:** TaleWorlds.CampaignSystem.Actions  
**Module:** TaleWorlds.CampaignSystem  
**Type:** static class  
**Source:** `TaleWorlds.CampaignSystem/Actions/ChangeGovernorAction.cs`

## Responsibility

Change the governorship of a [Town](../Town) through a campaign action that coordinates `Town.Governor`, `Hero.GovernorOf`, hero movement, and the governor lifecycle events.

## Mental model

Governor assignment is not just a property assignment because a governor must be tied to the town and arrive there on a valid campaign path. `Apply(town, governor)` first remembers the old governor. Passing `null` removes the town's governor. For a non-prisoner hero already at the target settlement, it assigns the town's governor and immediately teleports that hero to the settlement. Otherwise it clears the town governor and schedules a delayed teleport as governor instead. It then clears the old governor's `GovernorOf`, dispatches `OnGovernorChanged`, and marks a non-null incoming hero busy with `BecomeGovernor`.

Use `RemoveGovernorOf(hero)` only when `hero.GovernorOf` is known to be non-null; it dereferences that town immediately. Use `RemoveGovernorOfIfExists(town)` when clearing an optional assignment. Vanilla's town-management UI uses the latter for an empty selection, while settlement-ownership and hero-removal flows use the former after they have established that the hero is a governor.

## Dependencies and execution order

| Role | Connection | Why it matters |
|---|---|---|
| Town state | [Town](../Town) | Its `Governor` property is the settlement-side reference. |
| Hero state | [Hero](../../campaign/Hero) | `GovernorOf`, prison state, current settlement, and busy state determine the transition. |
| Travel implementation | [TeleportHeroAction](../TeleportHeroAction) | Immediate travel is used only for a non-prisoner already at the target; all other non-null assignments become delayed travel. |
| Event consumers | [CampaignEventReceiver](../CampaignEventReceiver) | `OnGovernorChanged` occurs after references are cleared/assigned; `OnHeroGetsBusy` follows it for a new governor. |
| Owner-change workflow | [ChangeOwnerOfSettlementAction](../ChangeOwnerOfSettlementAction) | Ownership changes are a common downstream reason to clear or replace a governor. |

The event timing is important: receivers see the old governor already detached, and a non-null new governor has already been assigned or scheduled for governor travel. They should not infer that the hero is physically in the settlement when the delayed branch was selected.

## Member timing

`Apply` is the assignment/removal entry after a town and candidate are known. Call it on the campaign thread, not while the town or hero is being destructed. `RemoveGovernorOf` is a strict helper for a known governor. `RemoveGovernorOfIfExists` is the defensive town-side cleanup helper and is the correct choice for menu-driven deselection or teardown where the town may be ungoverned.

## Risk boundary

Do not edit `Town.Governor` and `Hero.GovernorOf` independently. A one-sided edit leaves stale links that later lifecycle code dereferences; the action explicitly cleans both sides for removals. Do not replace a governor by clearing a hero property alone, and do not call `RemoveGovernorOf` without checking `GovernorOf`: the internal helper assumes it exists.

Do not treat the delayed branch as an immediate assignment. A prisoner or a hero elsewhere is not written into `Town.Governor` by that branch; a teleportation workflow must complete. Event handlers must also avoid assigning another governor synchronously from `OnGovernorChanged`, because the busy event for the original non-null candidate is dispatched immediately afterward.

## Real acquisition-path example

The current main hero provides both a real hero acquisition path and the settlement being visited. This assigns only a non-prisoner hero to a settlement that actually has a town.

```csharp
using TaleWorlds.CampaignSystem;
using TaleWorlds.CampaignSystem.Actions;
using TaleWorlds.CampaignSystem.Settlements;

Settlement currentSettlement = Hero.MainHero.CurrentSettlement;
if (Campaign.Current != null && currentSettlement?.Town != null && !Hero.MainHero.IsPrisoner)
{
    ChangeGovernorAction.Apply(currentSettlement.Town, Hero.MainHero);
}
```

## Navigation

- ↑ [Campaign extension API](../)
- ↔ [ChangeClanInfluenceAction](./ChangeClanInfluenceAction) · [ChangeClanLeaderAction](./ChangeClanLeaderAction)
- Related: [Town](../Town) · [Hero](../../campaign/Hero) · [TeleportHeroAction](../TeleportHeroAction) · [ChangeOwnerOfSettlementAction](../ChangeOwnerOfSettlementAction)
