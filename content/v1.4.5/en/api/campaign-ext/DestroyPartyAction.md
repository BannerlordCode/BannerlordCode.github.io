---
title: "DestroyPartyAction"
description: "Destroys a live MobileParty through the Campaign lifecycle, publishes destruction events, and completes roster, prisoner, map-interactable, and tracking cleanup."
---
# DestroyPartyAction

**Namespace:** `TaleWorlds.CampaignSystem.Actions`  
**Module:** `TaleWorlds.CampaignSystem`  
**Type:** `public static class DestroyPartyAction`  
**Base:** none (static class)  
**Source:** `bin/TaleWorlds.CampaignSystem/TaleWorlds.CampaignSystem.Actions/DestroyPartyAction.cs`  
**Version note:** this page describes the shipped v1.4.5 implementation.

## One-line responsibility

Removes a real `MobileParty` that an owning Campaign flow has already decided must disappear, publishes destruction/map-interactable events, and then runs the party's terminal cleanup.

## Mental model

`DestroyPartyAction` is the **end of a map-party lifecycle**, not a shortcut for setting `IsActive` to false. A party may still participate in a [MapEvent](../../campaign/MapEvent), army, siege, settlement visit, disband, or quest. Deciding when it may disappear and which higher-level state must finish first belongs to [DisbandPartyAction](../DisbandPartyAction), battle resolution, a quest, or another owner flow.

v1.4.5 has no public `DestroyPartyActionDetail` or reason enum. It exposes two entries: `Apply(PartyBase, MobileParty)` for ordinary destruction and `ApplyForDisbanding(MobileParty, Settlement)` for a party already owned by a disband flow. Both eventually use the same internal cleanup path; the disband entry first leaves a settlement and publishes a disband event.

`MobileParty.MainParty` is protected and cannot be destroyed by ordinary `Apply`. For any other party the Action expects the target to be active; an inactive target reaches a failed assertion path rather than a supported recovery or safe return.

## Dependencies and lifecycle cascade

```text
Current Campaign battle / owner / disband flow
  -> real MobileParty after its owner-level end conditions
      -> DestroyPartyAction.Apply(destroyerParty, destroyedParty)
          -> CampaignEventDispatcher.OnMobilePartyDestroyed
              -> CampaignEvents.MobilePartyDestroyed
          -> CampaignEventDispatcher.OnMapInteractableDestroyed
              -> CampaignEvents.MapInteractableDestroyed
          -> MobileParty.RemoveParty()
              -> roster/items/prisoners/ships/tracking cleanup
              -> Campaign party collection removal
```

- [MobileParty](../../campaign/MobileParty) owns map position, rosters, prisoners, army/map-event relations, and lifetime; [PartyBase](../../campaign/PartyBase) supplies the destroyer argument and map-interactable identity.
- `ApplyForDisbanding` additionally calls [LeaveSettlementAction](../LeaveSettlementAction), then publishes `CampaignEvents.OnPartyDisbandedEvent` before reusing the ordinary destruction chain.
- [CampaignEvents](../../campaign/CampaignEvents) exposes `MobilePartyDestroyed`, `MapInteractableDestroyed`, and `OnPartyDisbandedEvent`. Listeners observe the relevant boundary; they must not treat a removed party as an active party afterward.
- [CampaignEventDispatcher](../../campaign/CampaignEventDispatcher) forwards callbacks to behaviors; it does not finish a `MapEvent`, army, or siege for the owner.

## The two public entries

```csharp
public static void Apply(PartyBase destroyerParty, MobileParty destroyedParty)

public static void ApplyForDisbanding(
    MobileParty disbandedParty,
    Settlement relatedSettlement)
```

### `Apply`

The ordinary entry first guards `MobileParty.MainParty`. For any other party it expects an active target; if the target is a caravan whose owner has the Insurance Plans perk, it pays the insurance amount through `GiveGoldAction` before removal. It then publishes `MobilePartyDestroyed`, publishes `MapInteractableDestroyed`, and calls `RemoveParty`.

`destroyerParty` may be `null`, such as for system cleanup without an attacking party. It still has to represent the caller's real destruction context; a mod must not fabricate a `PartyBase` just to satisfy the parameter.

The current-Campaign owner can pass its authoritative target to the ordinary entry:

```csharp
public static void DestroyPartyAfterOwnerResolved(
    MobileParty destroyedParty)
{
    if (Campaign.Current == null || destroyedParty == null ||
        destroyedParty == MobileParty.MainParty || !destroyedParty.IsActive)
    {
        return;
    }

    PartyBase destroyer = PartyBase.MainParty;
    if (destroyer == null)
    {
        return;
    }

    DestroyPartyAction.Apply(destroyer, destroyedParty);
}
```

### `ApplyForDisbanding`

The disband entry has no destroyer. If the party is currently in a settlement, it first calls [LeaveSettlementAction](../LeaveSettlementAction). It then publishes `CampaignEvents.OnPartyDisbandedEvent` with the caller-supplied `relatedSettlement`, and finally calls the same internal destruction path with a null destroyer.

Do not use `ApplyForDisbanding` as a generic delete operation. It means the disband owner has already made the disband decision and needs settlement exit and disband listeners to observe that semantic boundary.

When that owner has a real settlement relationship, it can resolve the `Settlement` from current Campaign state before entering this path:

```csharp
public static void DestroyDisbandingPartyAtOwnerSettlement(
    MobileParty disbandedParty)
{
    if (Campaign.Current == null || disbandedParty == null ||
        disbandedParty == MobileParty.MainParty || !disbandedParty.IsActive ||
        !disbandedParty.IsDisbanding)
    {
        return;
    }

    Settlement relatedSettlement =
        MobilePartyHelper.GetCurrentSettlementOfMobilePartyForAICalculation(
            disbandedParty);
    if (relatedSettlement == null)
    {
        return;
    }

    DestroyPartyAction.ApplyForDisbanding(disbandedParty, relatedSettlement);
}
```

## Caller-owned preconditions

Both entries return `void` and have no success result. The owner of the party lifecycle should verify all of the following before calling:

1. `Campaign.Current`, the target party, and event dispatch are initialized; the target is not a stale save object, an already removed reference, or the main party in a teardown path.
2. For ordinary `Apply`, the target is an active, real, non-main party. For `ApplyForDisbanding`, the target is genuinely in the owner's disband flow and `relatedSettlement` belongs to that flow. `IsDisbanding` alone does not select the entry; the owner flow and the presence of a related settlement/disband semantic do.
3. The target is no longer an active object required by a `MapEvent`, army, siege, quest, or encounter. Use the appropriate battle resolution, army dispersion, [DisbandPartyAction](../DisbandPartyAction), or quest cleanup first.
4. The caller has decided how its roster, hero prisoners, ships, caravan insurance, and quest state should be handled. The Action performs system cleanup but does not decide gameplay legality.
5. After the call, treat the target reference as terminal; do not add it to an army, move it, save it, or re-register it for map tracking.

## Ordinary destruction order

The v1.4.5 `ApplyInternal` order is observable:

1. If the target is `MobileParty.MainParty`, perform no destruction.
2. If the target is inactive, print diagnostics and trigger a failed assertion; this is not a recovery branch.
3. If the target is a caravan with an owner who has Insurance Plans, pay the perk-defined insurance gold first.
4. Publish `CampaignEventDispatcher.Instance.OnMobilePartyDestroyed(destroyedParty, destroyerParty)`.
5. Publish `OnMapInteractableDestroyed(destroyedParty.Party)` so map-interactable listeners process the party's disappearance.
6. Call `destroyedParty.RemoveParty()` for the actual roster, item, prisoner, ship, locator, tracking, and Campaign-collection cleanup.

Consequently, a `MobilePartyDestroyed` listener receives a still-readable party argument, but it must not treat the event as permission to destroy the same party again. After `RemoveParty`, the object is no longer an active Campaign party.

## Disband entry order

`ApplyForDisbanding` adds three layers of semantics before ordinary destruction:

1. If `disbandedParty.CurrentSettlement` is not null, call `LeaveSettlementAction.ApplyForParty` first.
2. Call `CampaignEventDispatcher.Instance.OnPartyDisbanded(disbandedParty, relatedSettlement)`, which maps to the public `CampaignEvents.OnPartyDisbandedEvent`.
3. Enter the internal destruction path with a null destroyer, continuing the ordinary insurance, destruction-event, and `RemoveParty` order.

A behavior that needs the “party disbanded” meaning should listen to `OnPartyDisbandedEvent`; a behavior that needs any party to disappear from the map should listen to `MobilePartyDestroyed`. They are different events and neither is replaced by removing an item from a list.

## Safe current-Campaign examples

The helpers below accept real objects obtained by current-Campaign owner flows. They do not randomly select or construct a map party. The entry is chosen by the owner's lifecycle semantics, not by `IsDisbanding` alone.

### Ordinary destruction after owner resolution

```csharp
using TaleWorlds.CampaignSystem;
using TaleWorlds.CampaignSystem.Actions;

public static void DestroyPartyAfterOwnerResolved(
    MobileParty destroyedParty)
{
    if (Campaign.Current == null || destroyedParty == null)
    {
        return;
    }

    PartyBase destroyer = PartyBase.MainParty;
    if (destroyer == null || destroyedParty == MobileParty.MainParty ||
        !destroyedParty.IsActive)
    {
        return;
    }

    DestroyPartyAction.Apply(destroyer, destroyedParty);
}
```

`destroyedParty` should come from an authoritative current-Campaign result, such as a depleted party supplied by battle resolution, rather than a newly constructed object. The same ordinary entry is also used by the stock disband owner when the member roster is empty or when no related settlement is available. Therefore, a true `IsDisbanding` value does not by itself forbid `Apply`; use `Apply` when the owner has reached ordinary destruction semantics and has no disband/settlement boundary to publish.

### Disbanding with a real related settlement

When the owner does need the disband semantic and can resolve a real related settlement, obtain that settlement from Campaign state and use the disband entry:

```csharp
using Helpers;
using TaleWorlds.CampaignSystem;
using TaleWorlds.CampaignSystem.Actions;
using TaleWorlds.CampaignSystem.Settlements;

public static void DestroyDisbandingPartyAtOwnerSettlement(
    MobileParty disbandedParty)
{
    if (Campaign.Current == null || disbandedParty == null ||
        disbandedParty == MobileParty.MainParty || !disbandedParty.IsActive ||
        !disbandedParty.IsDisbanding)
    {
        return;
    }

    Settlement relatedSettlement =
        MobilePartyHelper.GetCurrentSettlementOfMobilePartyForAICalculation(
            disbandedParty);
    if (relatedSettlement == null)
    {
        return;
    }

    DestroyPartyAction.ApplyForDisbanding(disbandedParty, relatedSettlement);
}
```

`MobilePartyHelper.GetCurrentSettlementOfMobilePartyForAICalculation` returns the party's current settlement, or a nearby last-visited settlement when the Campaign helper considers it related. This is the same acquisition used by `DisbandPartyCampaignBehavior` before `ApplyForDisbanding`; if it returns `null`, that behavior follows its ordinary `Apply` fallback after completing its own disband cleanup.

## `RemoveParty` cleanup boundary

`RemoveParty` is not a simple collection removal. It clears or processes member/prisoner rosters and party items, releases hero prisoners, handles ships, removes map locators/tracking, publishes party-removal callbacks, and removes the party from the Campaign's MobileParty management collection. After the call, event arguments may still reference the object, but it is no longer a party that can move or join an army.

This is why [KillCharacterAction](../KillCharacterAction), battle resolution, [DisbandPartyAction](../DisbandPartyAction), and other high-level flows must perform their owner-specific cleanup before delegating here. They decide who should disappear, whether the leader becomes fugitive, how a MapEvent ends, and how an army changes; `DestroyPartyAction` closes the final party lifetime.

## Direct mutation and save risks

Do not set `MobileParty.IsActive` to `false`, remove a party from `MobileParty.All` or an army list, or clear `MemberRoster`/`PrisonRoster` as a substitute. Those shortcuts skip the destruction events, map-interactable removal, hero-prisoner release, ship/tracking cleanup, and Campaign-collection synchronization. A save can then contain a party that is invisible but still referenced by an army or map event.

Do not call this while a party is still participating in an active `MapEvent`, siege, or army tick unless the owning flow has completed that phase. Do not read the leader or call AI methods after `RemoveParty`. If a behavior saves a party ID or reference, clear its own state on destruction/disband events and reacquire current objects during a new Campaign or load lifecycle; never write a terminal object back into a save.

## Navigation

- **↑ Parent:** [Campaign extension API index](../) · [Campaign system](../../campaign/)
- **↔ Siblings:** [DisbandPartyAction](../DisbandPartyAction) · [LeaveSettlementAction](../LeaveSettlementAction) · [KillCharacterAction](../KillCharacterAction) · [ChangeOwnerOfSettlementAction](../ChangeOwnerOfSettlementAction)
- **Related:** [MobileParty](../../campaign/MobileParty) · [PartyBase](../../campaign/PartyBase) · [Settlement](../../campaign/Settlement) · [MapEvent](../../campaign/MapEvent) · [Army](../../campaign/Army) · [CampaignEvents](../../campaign/CampaignEvents) · [CampaignEventDispatcher](../../campaign/CampaignEventDispatcher)
