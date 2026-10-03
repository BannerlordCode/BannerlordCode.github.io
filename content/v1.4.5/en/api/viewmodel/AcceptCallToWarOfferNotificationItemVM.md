---
title: "AcceptCallToWarOfferNotificationItemVM"
description: "The map-notification item for \"a kingdom has called you to war\". MapNotificationVM constructs it reflectively from a type table; it subscribes to five CampaignEvents to notice when the offer goes stale, and its OnFinalize promotes the offer into a real KingdomDecision when joining a kingdom removes the only entry point."
---
# AcceptCallToWarOfferNotificationItemVM

**Namespace:** TaleWorlds.CampaignSystem.ViewModelCollection.Map.MapNotificationTypes  
**Module:** TaleWorlds.CampaignSystem.ViewModelCollection  
**Type:** `public class AcceptCallToWarOfferNotificationItemVM : MapNotificationItemBaseVM`  
**Base:** `MapNotificationItemBaseVM`  
**File:** `TaleWorlds.CampaignSystem.ViewModelCollection.Map.MapNotificationTypes/AcceptCallToWarOfferNotificationItemVM.cs`

## Overview

This is the **view shell around one map notification**, paired with the campaign-side `AcceptCallToWarOfferMapNotification`: some kingdom has asked the player to join it against a third party. The notification data carries only two kingdom references; this layer turns it into a clickable row on the map edge that can dismiss itself and that **auto-voids as the political situation moves underneath it**.

Three jobs make up its entire responsibility:

1. **Click means "propose"**. The constructor assigns `_onInspect` to a closure that first re-checks whether the offer is still live (`data.IsValid()` and the player is in some kingdom), then tries to build an actual `AcceptCallToWarAgreementDecision` via `CanMakeDecision`. On success it notifies `IAllianceCampaignBehavior` and removes the notification; on failure it shows a "This call to war offer is no longer relevant." inquiry and removes the notification anyway.
2. **Stale means self-destruct**. The constructor ends by subscribing to five `CampaignEvents` (clan changed kingdom, war declared, peace made, kingdom destroyed, alliance ended). Any of them firing removes the row. It is a **subscriber**, never a poller.
3. **A vanished entry point still gets the decision**. `OnFinalize` carries one exception: if the row disappeared because *the player joined a kingdom* (`_shouldDecisionBeCreatedOnClosed == true`), it reconstructs the `AcceptCallToWarAgreementDecision` that clicking would have produced and attaches it as a pending kingdom decision, so the offer is not silently swallowed.

## Mental Model

Read it as **"one map notification with a political state machine bolted on — the machine lives on CampaignEvents, and the compensation logic lives in OnFinalize"**:

- **Who news it up.** Nobody writes `new`. `MapNotificationVM`'s constructor holds a `Dictionary<Type, Type>` constructor table; line 132 registers `_itemConstructors.Add(typeof(AcceptCallToWarOfferMapNotification), typeof(AcceptCallToWarOfferNotificationItemVM))` and line 199 builds it with `(MapNotificationItemBaseVM)Activator.CreateInstance(_itemConstructors[type], data)`. **That means you cannot swap it from code** — only the notification data is under your control. It also means its constructor must succeed given a single `AcceptCallToWarOfferMapNotification` argument, or the whole notification fails silently.
- **Who holds the reference.** `MapNotificationVM`'s notification-item list. The list calls `ExecuteRemove()` (take the row down) and `OnFinalize()` (destroy it). This class never caches itself.
- **What it binds to.** It exposes almost no `[DataSourceProperty]` of its own. Everything bindable lives on `MapNotificationItemBaseVM`: `NotificationIdentifier` (which decides the icon/layout resource set), `TitleText`, `DescriptionText`, `SoundId`, `IsFocused`, `RemoveInputKey`. What it *defines* is the meaning of "the player clicked this row", via the `_onInspect` assignment.
- **When it is disposed.** `MapNotificationVM` calls `OnFinalize()` once the row is gone and no longer needed. This override does two things: `CampaignEventDispatcher.Instance.RemoveListeners(this)` detaches all five listeners, and then the compensation branch may genuinely call `AddDecision`. **Miss the detach and you leak**: a dead object still attached to `WarDeclared` re-runs its closure on every future war declaration.
- **A real vanilla quirk.** Constructor line 50 reads `base.NotificationIdentifier = "ransom"`. That is a copy-paste leftover from the ransom notification — one resource identifier shared by two unrelated notification types. Any mod that keys notification artwork off `NotificationIdentifier` will hit this.
- **Three preconditions on the compensation branch.** `Clan.PlayerClan.Kingdom != null`, `Kingdom.Clans.Count > 1` (a one-clan kingdom does not hold decisions), and no existing `AcceptCallToWarAgreementDecision` from the same `CallingKingdom` in `UnresolvedDecisions`. Miss any one and the offer simply vanishes with nothing created.
- **Typical misuse.** Treating it as a tool for "manually constructing a notification to display". It is not one. An instance hand-constructed outside the reflective path never reaches the map notification panel, and its `OnFinalize` compensation would fire at a moment that has nothing to do with `MapNotificationVM`.

## Key members

| Member | Signature | What it is actually for |
| --- | --- | --- |
| Constructor | `public AcceptCallToWarOfferNotificationItemVM(AcceptCallToWarOfferMapNotification data)` | Invoked reflectively by `MapNotificationVM`. Stores the two kingdom references in readonly fields, assembles the `_onInspect` closure, attaches the five `CampaignEvents` listeners, and sets `NotificationIdentifier` to `"ransom"` (a vanilla copy-paste leftover). |
| `_onInspect` (inherited `protected Action`) | closure assigned in the constructor | Runs when the player clicks the row. Re-validates the offer, tries to build an `AcceptCallToWarAgreementDecision`; on success fires `IAllianceCampaignBehavior.OnCallToWarAgreementProposedToPlayer` and removes the row, on failure shows an `InformationManager.ShowInquiry` "no longer relevant" dialog and removes the row. |
| `RemoveAcceptCallToWarOfferNotification` | `private void RemoveAcceptCallToWarOfferNotification(bool shouldDecisionCreatedOnClosed)` | The single teardown path. Records "should a decision be promoted on close" into `_shouldDecisionBeCreatedOnClosed`, then calls the base `ExecuteRemove()`. All five event callbacks funnel through it rather than calling `ExecuteRemove()` themselves. |
| `OnClanChangedKingdom` | `private void OnClanChangedKingdom(Clan, Kingdom, Kingdom, ChangeKingdomAction.ChangeKingdomActionDetail, bool)` | Player changed kingdom → void the offer, promote nothing (`false`). *Another* clan joined the player's kingdom → void the offer **and** promote a decision (`true`), because the entry point moved from the map notification to the kingdom's domestic panel. |
| `OnWarDeclared` | `private void OnWarDeclared(IFaction, IFaction, DeclareWarAction.DeclareWarDetail)` | Voids the offer once the player's faction is already at war with the kingdom it was being called against — the premise is gone. |
| `OnPeaceDeclared` | `private void OnPeaceDeclared(IFaction, IFaction, MakePeaceAction.MakePeaceDetail)` | Voids the offer on peace between the two kingdoms, regardless of which is `offeringKingdom` and which is `kingdomToCallToWarAgainst`. The comparison is written symmetrically and covers both directions. |
| `OnAllianceEnded` | `private void OnAllianceEnded(Kingdom kingdom1, Kingdom kingdom2)` | Voids the offer when the alliance between the player's kingdom and the proposer ends. |
| `OnKingdomDestroyed` | `private void OnKingdomDestroyed(Kingdom kingdom)` | Voids the offer if the player's kingdom, the proposer, or the call-to-war target is destroyed. |
| `OnFinalize` | `public override void OnFinalize()` | Lifecycle terminus. First `CampaignEventDispatcher.Instance.RemoveListeners(this)`; then, if the compensation conditions hold, builds and calls `Kingdom.AddDecision(..., ignoreInfluenceCost: true)`. **This is the only place that mutates campaign state.** |

## Real Example

The game's own construction path is reflective, not `new`:

```csharp
// MapNotificationVM constructor, line 132 (registration)
//   _itemConstructors.Add(typeof(AcceptCallToWarOfferMapNotification), typeof(AcceptCallToWarOfferNotificationItemVM));
// MapNotificationVM, line 199 (construction)
//   mapNotificationItemBaseVM = (MapNotificationItemBaseVM)Activator.CreateInstance(_itemConstructors[type], data);
```

What a mod *can* legitimately do is mirror the same validity test:

```csharp
using TaleWorlds.CampaignSystem.CampaignBehaviors;
using TaleWorlds.CampaignSystem.Election;
using TaleWorlds.CampaignSystem.MapNotificationTypes;

// Exactly the same predicate as AcceptCallToWarOfferNotificationItemVM's _onInspect.
public bool TryPromoteCallToWarOffer(AcceptCallToWarOfferMapNotification data)
{
    if (data == null || !data.IsValid() || Clan.PlayerClan.Kingdom == null)
    {
        return false;
    }

    AcceptCallToWarAgreementDecision decision =
        new AcceptCallToWarAgreementDecision(Clan.PlayerClan, data.OfferingKingdom, data.KingdomToCallToWarAgainst);

    if (!decision.CanMakeDecision(out _))
    {
        return false;
    }

    Campaign.Current.GetCampaignBehavior<IAllianceCampaignBehavior>()
              ?.OnCallToWarAgreementProposedToPlayer(data.OfferingKingdom, data.KingdomToCallToWarAgainst);
    return true;
}
```

And turn the offer into a real kingdom decision, mirroring the `OnFinalize` compensation branch:

```csharp
using System.Linq;

public void PushCallToWarDecision(Kingdom callingKingdom, Kingdom targetKingdom)
{
    Kingdom playerKingdom = Clan.PlayerClan.Kingdom;
    if (playerKingdom == null || playerKingdom.Clans.Count <= 1)
    {
        return;
    }

    bool alreadyPending = playerKingdom.UnresolvedDecisions
        .OfType<AcceptCallToWarAgreementDecision>()
        .Any(d => d.CallingKingdom == callingKingdom);

    AcceptCallToWarAgreementDecision fresh =
        new AcceptCallToWarAgreementDecision(Clan.PlayerClan, callingKingdom, targetKingdom);

    if (!alreadyPending && fresh.CanMakeDecision(out _))
    {
        playerKingdom.AddDecision(fresh, ignoreInfluenceCost: true);
    }
}
```

## Risks and crash boundaries

- **Lifecycle and event leaks.** The constructor attaches five `CampaignEvents` in one go and relies entirely on `RemoveListeners(this)` inside `OnFinalize`. Any teardown path that bypasses `MapNotificationVM` — hand-constructing, hand-disposing — leaves all five attached, and each future war declaration, peace, or kingdom change executes a dead closure that still holds `Kingdom` references.
- **It mutates campaign state, irreversibly.** The compensation branch really calls `Kingdom.AddDecision`, and passes `ignoreInfluenceCost: true`, so a promoted decision costs no influence. That is vanilla behavior and a subclass cannot suppress it: the method is an `override`, but the base-class call site is `MapNotificationVM`'s reflective path, and swapping the type means mutating that private constructor table.
- **Serialization.** None whatsoever. No `SyncData`, no `IDataStore`; the notification is pure UI state. Nothing about "this offer is currently displayed" reaches the savegame, and after loading, map notifications are re-pushed from the campaign side.
- **Native boundary.** None. Pure managed C#, no contact with `Bannerlord.Native`.
- **Implicit `Clan.PlayerClan` / `Hero.MainHero` dependency.** The closure dereferences `Clan.PlayerClan.Kingdom` and `Hero.MainHero.MapFaction` directly and performs **no null checks** beyond the ones shown. In a headless context — campaign not fully initialized, or a notification outliving the campaign — a null `Clan.PlayerClan` is a straight NRE. This is also why the ordering in `OnFinalize` is right: `RemoveListeners` happens immediately after `base.OnFinalize()`, before any compensation could run.
- **Fragile resource identity.** `NotificationIdentifier = "ransom"` overlaps with the ransom notification. Any mod indexing notification artwork by that string — especially one trying to give different notifications different icons or sounds — will see both render identically.
- **Cross-version.** The `AcceptCallToWarAgreementDecision` promotion mechanism and `_shouldDecisionBeCreatedOnClosed` exist in v1.4.5; earlier versions have no `OnClanChangedKingdom`-triggered promotion branch. The `"ransom"` leftover is present verbatim in the 1.4.5 source.

## Dependencies

- ↑ Base class: [MapNotificationItemBaseVM](../MapNotificationItemBaseVM) — supplies `_onInspect`, `ExecuteRemove()`, `NavigationHandler`, `NotificationIdentifier`
- ↔ Sibling: [AllianceOfferNotificationItemVM](../AllianceOfferNotificationItemVM) — the alliance-offer notification, structurally near-identical line for line
- ↔ Sibling: [MapNotificationVM](../MapNotificationVM) — owner of the type constructor table and the only construction entry point
- → Data source: [AcceptCallToWarOfferMapNotification](../../campaign/AcceptCallToWarOfferMapNotification)
- → Decision type: [AcceptCallToWarAgreementDecision](../../campaign/AcceptCallToWarAgreementDecision)
- → Behavior interface: [IAllianceCampaignBehavior](../../campaign/IAllianceCampaignBehavior)
- → Event source: [CampaignEvents](../../campaign-ext/CampaignEvents) — the five non-serialized listeners
- ↑ VM base: [ViewModel](../../core-extra/ViewModel)
