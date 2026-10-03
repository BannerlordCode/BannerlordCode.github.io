---
title: "AllianceOfferNotificationItemVM"
description: "The map-notification row for \"a kingdom has offered you an alliance\". Line-for-line parallel to the call-to-war offer but simpler: one kingdom instead of two, four CampaignEvents listeners, a StartAllianceDecision validity recheck, and an OnFinalize that promotes the offer into a pending decision when joining a kingdom removes the entry point."
---
# AllianceOfferNotificationItemVM

**Namespace:** TaleWorlds.CampaignSystem.ViewModelCollection.Map.MapNotificationTypes  
**Module:** TaleWorlds.CampaignSystem.ViewModelCollection  
**Type:** `public class AllianceOfferNotificationItemVM : MapNotificationItemBaseVM`  
**Base:** `MapNotificationItemBaseVM`  
**File:** `TaleWorlds.CampaignSystem.ViewModelCollection.Map.MapNotificationTypes/AllianceOfferNotificationItemVM.cs`

## Overview

When another kingdom proposes an alliance, this row appears on the map notification panel. It is structurally near-identical, line for line, to `AcceptCallToWarOfferNotificationItemVM` in the same directory. The difference is that an alliance needs only **two** kingdoms — the proposer, with no "kingdom you were called against" — so the decision type becomes `StartAllianceDecision` instead of `AcceptCallToWarAgreementDecision`, the behavior callback becomes `OnAllianceOfferedToPlayer` instead of `OnCallToWarAgreementProposedToPlayer`, and one listener is dropped.

Three structural parts:

1. **Click means "propose"**. The `_onInspect` closure re-checks `data.IsValid()` and `Clan.PlayerClan.Kingdom != null`, then tries `new StartAllianceDecision(Clan.PlayerClan, _offeringKingdom).CanMakeDecision(out _)`. On success it calls `Campaign.Current.GetCampaignBehavior<IAllianceCampaignBehavior>()?.OnAllianceOfferedToPlayer(data.OfferingKingdom)` and removes the row; otherwise it shows `"This alliance offer is no longer relevant."` and removes the row anyway.

2. **Four staleness listeners**. The constructor subscribes to `CampaignEvents.OnClanChangedKingdomEvent`, `WarDeclared`, `KingdomDestroyedEvent`, and `OnAllianceStartedEvent`; any hit removes the notification. **Note it does not listen for `MakePeace`** — an alliance offer is not voided by a peace treaty, unlike the call-to-war offer.

3. **Compensation when the entry point disappears**. In `OnFinalize`, if `_shouldDecisionBeCreatedOnClosed` is true (the player joined a kingdom, so the map-notification entry point no longer exists), it builds a `StartAllianceDecision` and attaches it to `Clan.PlayerClan.Kingdom`, provided the player has a kingdom, that kingdom has more than one clan, and no decision from the same proposer already sits in `UnresolvedDecisions`.

## Mental Model

Read it as **"a political snapshot spanning two kingdoms, plus a hook that guarantees the offer is never silently lost"**:

- **Who news it up.** `MapNotificationVM`, registering `_itemConstructors.Add(typeof(AllianceOfferMapNotification), typeof(AllianceOfferNotificationItemVM))` at line 131 and constructing at line 199 via `Activator.CreateInstance`. **Not replaceable from code.**
- **Who holds the reference.** `MapNotificationVM`'s notification item list.
- **What it binds to.** Entirely from the base class. It adds no `[DataSourceProperty]` of its own — its only outward identity is `NotificationIdentifier`.
- **When it is disposed.** The list calls `OnFinalize()` on discard. This class **overrides it correctly**: `CampaignEventDispatcher.Instance.RemoveListeners(this)` first, then the compensation check. This is the right unbinding shape in this directory (contrast `AlleyUnderAttackMapNotificationItemVM`, which puts its detach inside a callback).
- **The same `"ransom"` leftover.** Line 46 reads `base.NotificationIdentifier = "ransom";` — copy-pasted from the ransom notification, exactly as in `AcceptCallToWarOfferNotificationItemVM`. One resource identifier shared by at least three notification types; a mod indexing artwork by it sees several unrelated notifications render identically.
- **One place the compensation branch is more permissive than the click path**: the click path requires `data.IsValid()`, while the compensation branch **never inspects `data`** — it runs after the notification has already been judged stale, relying on the `_shouldDecisionBeCreatedOnClosed` flag alone.
- **`ignoreInfluenceCost: true`.** A promoted decision costs no influence. That is deliberate vanilla behaviour.
- **Misuse #1**: treating it as a live display of alliance status. It revalidates once, on click; later changes cause the row to be withdrawn via event callbacks rather than its text being updated.
- **Misuse #2**: assuming `OnFinalize` only cleans up. It **does mutate campaign state** (a real `AddDecision`), inside `MapNotificationVM`'s item-teardown flow.

## Key members

| Member | Signature | What it is actually for |
| --- | --- | --- |
| Constructor | `public AllianceOfferNotificationItemVM(AllianceOfferMapNotification data)` | Called reflectively. Stores `_offeringKingdom`, assembles `_onInspect`, subscribes four `CampaignEvents`, and sets `NotificationIdentifier = "ransom"`. |
| `_onInspect` (base `protected Action`) | closure assigned in the constructor | On click: revalidate the offer, attempt a `StartAllianceDecision`, then either fire `IAllianceCampaignBehavior.OnAllianceOfferedToPlayer` and remove, or show an `InformationManager.ShowInquiry` "no longer relevant" and remove. |
| `RemoveAllianceOfferNotification` | `private void RemoveAllianceOfferNotification(bool shouldDecisionCreatedOnClosed)` | The single teardown path: records the compensation flag, then calls `ExecuteRemove()`. All four event callbacks funnel through it. |
| `OnAllianceStarted` | `private void OnAllianceStarted(Kingdom kingdom1, Kingdom kingdom2)` | Voids the offer once the player's kingdom and the proposer have **actually allied** — the offer has been cashed in, no need to keep prompting. |
| `OnWarDeclared` | `private void OnWarDeclared(IFaction, IFaction, DeclareWarAction.DeclareWarDetail)` | Voids the offer when the player's faction goes to war with the proposer. |
| `OnKingdomDestroyed` | `private void OnKingdomDestroyed(Kingdom kingdom)` | Voids the offer if either the player's kingdom or the proposer is destroyed. |
| `OnClanChangedKingdom` | `private void OnClanChangedKingdom(Clan, Kingdom, Kingdom, ChangeKingdomAction.ChangeKingdomActionDetail, bool)` | Player changed kingdom → void, promote nothing. Another clan joined the player's kingdom → void **and** promote, because the entry point moved from the map notification to the kingdom's domestic panel. |
| `OnFinalize` | `public override void OnFinalize()` | `RemoveListeners(this)` detaches the four listeners; then, if the compensation conditions hold, builds and calls `Kingdom.AddDecision(..., ignoreInfluenceCost: true)`. **The only place campaign state is mutated.** |
| `_offeringKingdom` | `private readonly Kingdom _offeringKingdom` | The only field, taken from `data.OfferingKingdom` at construction. Readonly. |
| `_shouldDecisionBeCreatedOnClosed` | `private bool _shouldDecisionBeCreatedOnClosed` | The compensation switch, written by `RemoveAllianceOfferNotification`'s parameter. **Initialised to `false` explicitly on the constructor's first line.** |

## Real Example

Reproducing its validity predicate — the same one the `_onInspect` closure uses:

```csharp
using TaleWorlds.CampaignSystem.Election;

public bool IsAllianceOfferStillActionable(AllianceOfferMapNotification data)
{
    if (data == null || !data.IsValid() || Clan.PlayerClan.Kingdom == null)
    {
        return false;
    }

    StartAllianceDecision probe =
        new StartAllianceDecision(Clan.PlayerClan, data.OfferingKingdom);

    return probe.CanMakeDecision(out _);
}
```

Reproducing the compensation branch — note that it **does not check `data`**, unlike the click path:

```csharp
using System.Linq;
using TaleWorlds.CampaignSystem.Election;

public bool TryPromoteAllianceOffer(Kingdom offeringKingdom)
{
    Kingdom playerKingdom = Clan.PlayerClan.Kingdom;
    if (playerKingdom == null || playerKingdom.Clans.Count <= 1)
    {
        return false;
    }

    bool alreadyPending = playerKingdom.UnresolvedDecisions
        .OfType<StartAllianceDecision>()
        .Any(d => d.KingdomToStartAllianceWith == offeringKingdom);

    StartAllianceDecision fresh =
        new StartAllianceDecision(Clan.PlayerClan, offeringKingdom);

    if (alreadyPending || !fresh.CanMakeDecision(out _))
    {
        return false;
    }

    playerKingdom.AddDecision(fresh, ignoreInfluenceCost: true);
    return true;
}
```

Tracking whether the offer has been cashed in, so you never prompt twice:

```csharp
public class MyAllianceOfferWatcher : CampaignBehaviorBase
{
    private readonly List<AllianceOfferMapNotification> _seen =
        new List<AllianceOfferMapNotification>();

    public override void RegisterEvents()
    {
        CampaignEvents.OnAllianceStartedEvent.AddNonSerializedListener(this, OnAllianceStarted);
    }

    private void OnAllianceStarted(Kingdom kingdom1, Kingdom kingdom2)
    {
        // Same predicate as AllianceOfferNotificationItemVM.OnAllianceStarted
        if ((kingdom1 == Clan.PlayerClan.Kingdom && kingdom2 != null) ||
            (kingdom2 == Clan.PlayerClan.Kingdom && kingdom1 != null))
        {
            _seen.Clear();
        }
    }
}
```

## Risks and crash boundaries

- **Lifecycle and unbinding**: this is the type in this directory that unbinds correctly — `RemoveListeners(this)` inside `OnFinalize` clears all four. **The order matters and is right**: unbinding happens after `base.OnFinalize()` but before the compensation check, so events cannot re-enter this object while compensation runs.
- **It mutates campaign state.** The compensation branch really calls `Kingdom.AddDecision`, with `ignoreInfluenceCost: true`. That happens inside `MapNotificationVM`'s teardown, i.e. as a side effect of closing the panel. A subclass cannot switch it off — the call site is on the reflective path.
- **Serialization**: none. No `SyncData`, no `IDataStore` contact.
- **Bare dereferences of `Clan.PlayerClan.Kingdom`.** Both `_onInspect` and `OnFinalize` read it directly, null-checking only on some paths. In a headless context — campaign not fully initialized, or a notification outliving the campaign — a null `Clan.PlayerClan` is a straight NRE.
- **The compensation path never validates `data`.** If `_shouldDecisionBeCreatedOnClosed` is set while `data` has gone stale, it still attempts to create the decision (though `CanMakeDecision` will usually refuse). That is the vanilla logic.
- **`NotificationIdentifier = "ransom"` collides with several notification types.** Any mod distinguishing notifications by that string misclassifies.
- **No `MakePeace` listener.** An alliance offer survives a peace treaty. That is a semantic difference from the call-to-war offer, not an omission.
- **Native boundary**: none. Pure managed.
- **Cross-version**: `StartAllianceDecision`, `KingdomToStartAllianceWith`, `OnAllianceOfferedToPlayer`, and all four `CampaignEvents` accessors (`OnClanChangedKingdomEvent` / `WarDeclared` / `KingdomDestroyedEvent` / `OnAllianceStartedEvent`) are v1.4.5 shapes.

## Dependencies

- ↑ Base class: [MapNotificationItemBaseVM](../MapNotificationItemBaseVM) — supplies `_onInspect`, `ExecuteRemove()`, `NavigationHandler`, `NotificationIdentifier`
- ↔ Sibling: [MapNotificationVM](../MapNotificationVM) — the type constructor table and only construction entry point
- ↔ Sibling: [AcceptCallToWarOfferNotificationItemVM](../AcceptCallToWarOfferNotificationItemVM) — the line-for-line parallel call-to-war offer, with one extra `MakePeace` listener and one extra target kingdom
- → Data source: [AllianceOfferMapNotification](../../campaign/AllianceOfferMapNotification)
- → Decision type: [StartAllianceDecision](../../campaign/StartAllianceDecision)
- → Behavior interface: [IAllianceCampaignBehavior](../../campaign/IAllianceCampaignBehavior)
- → Event source: [CampaignEvents](../../campaign-ext/CampaignEvents) — the four listeners
- → Derived objects: [Kingdom](../../campaign/Kingdom), [Clan](../../campaign/Clan)
