---
title: "AcceptCallToWarOfferMapNotification"
description: "Call-to-war map notice: offering kingdom, target kingdom and a 24h expiry; only raised while the player's realm is a single clan."
---

# AcceptCallToWarOfferMapNotification

**Namespace:** `TaleWorlds.CampaignSystem.MapNotificationTypes`
**Module:** `TaleWorlds.CampaignSystem`
**Type:** `public class AcceptCallToWarOfferMapNotification : InformationData`
**Base:** `InformationData`
**File:** `bin/TaleWorlds.CampaignSystem/TaleWorlds.CampaignSystem.MapNotificationTypes/AcceptCallToWarOfferMapNotification.cs`

## Overview

`AcceptCallToWarOfferMapNotification` is the map notice for "an ally is calling you to war against someone". Compared with its sibling [AllianceOfferMapNotification](../AllianceOfferMapNotification) it carries **one** extra [Kingdom](../Kingdom): `KingdomToCallToWarAgainst`. So reading a call-to-war notice takes three pieces: who is calling (`OfferingKingdom`), who is the target (`KingdomToCallToWarAgainst`), and when it expires (`TriggerTime`).

The gate for raising it is identical to the alliance offer: `Clan.PlayerClan.Kingdom.Clans.Count == 1`. In the single-clan phase you get a direct personal prompt; a multi-clan realm goes down the `AcceptCallToWarAgreementDecision` voting route instead. Both notice types share the same 24-hour expiry because `TriggerTime` comes from the same `AllianceModel.DurationForOffers`.

## Mental Model

Read it as **a self-expiring triple of "who, whom, until when"**. The chain:

1. **Who decides to raise it.** `AllianceCampaignBehavior.OnCallToWarAgreementProposedToPlayerKingdom` (`Bannerlord.Source/bin/TaleWorlds.CampaignSystem/TaleWorlds.CampaignSystem.CampaignBehaviors/AllianceCampaignBehavior.cs:232`):

   ```csharp
   if (Clan.PlayerClan.Kingdom.Clans.Count == 1)
   {
       TextObject textObject = new TextObject("{=PneX4Ayw}A courier bearing a call to war offer from the {KINGDOM_NAME} against {KINGDOM_TO_CALL_TO_WAR_AGAINST} has arrived at the court of your realm.");
       textObject.SetTextVariable("KINGDOM_NAME", proposerKingdom.Name);
       textObject.SetTextVariable("KINGDOM_TO_CALL_TO_WAR_AGAINST", kingdomToCallToWarAgainst.Name);
       Campaign.Current.CampaignInformationManager.NewMapNoticeAdded(new AcceptCallToWarOfferMapNotification(proposerKingdom, kingdomToCallToWarAgainst, textObject));
       return;
   }
   ```

   Note the `return` — once the notice is posted the method **stops there** and never reaches the lines below that build an `AcceptCallToWarAgreementDecision`. The multi-clan branch is the mirror image: it first `FirstOrDefault`s an existing decision for the same (callingKingdom, targetKingdom) pair, removes it if found, then `new AcceptCallToWarAgreementDecision(...)` + `AddDecision(..., ignoreInfluenceCost: true)`. **Duplicate proposals of the same shape are de-duplicated by remove-then-add — that is the boundary between this notice and the decision path.**

2. **Write → lookup → expiry.** `NewMapNoticeAdded` → `MapNotificationVM` consults `_itemConstructors` (mapping to `AcceptCallToWarOfferNotificationItemVM` at `Bannerlord.Source/bin/TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds.CampaignSystem.ViewModelCollection.Map/MapNotificationVM.cs:132`) → on load, `CampaignInformationManager.OnGameLoaded`'s `RemoveAll(t => t == null || !t.IsValid())` sweeps expired entries.

The mental anchor that matters most is again **the second single-argument constructor**, `AcceptCallToWarOfferMapNotification(TextObject description)`. It calls `base(description)` only, leaving all three fields at defaults: `OfferingKingdom` null, `KingdomToCallToWarAgainst` null, `TriggerTime` `CampaignTime.Zero`. That is the deserialization shape; such an instance has `IsValid()` permanently false and is **dropped at the next load**. Using it to post a notice means posting a card that cannot survive a save.

The second anchor is the **`TriggerTime` dependency**. Line 56 of the three-argument constructor dereferences `Campaign.Current.Models.AllianceModel.DurationForOffers` unconditionally, so constructing during `OnSubModuleLoad` NREs; the single-argument overload does not read it.

The third anchor is that **the VM has a "build the decision while you are at it" side effect**. `AcceptCallToWarOfferNotificationItemVM.OnFinalize()` first calls `CampaignEventDispatcher.Instance.RemoveListeners(this)`, then — only when all four of `_shouldDecisionBeCreatedOnClosed`, `Clan.PlayerClan.Kingdom != null`, `Clan.PlayerClan.Kingdom.Clans.Count > 1`, and "`UnresolvedDecisions` has no entry whose `CallingKingdom == _offeringKingdom`" hold — constructs an `AcceptCallToWarAgreementDecision(Clan.PlayerClan, _offeringKingdom, _kingdomToCallToWarAgainst)`, **calls `CanMakeDecision(out var _)` on it, and only then `AddDecision(..., ignoreInfluenceCost: true)`**. Mind the de-duplication query: it compares **`CallingKingdom` only, never `KingdomToCallToWarAgainst`** — a second proposal from the same caller against a different target is blocked by the first one's existence.

## Key members

| Member | Signature | What it is for |
| --- | --- | --- |
| `OfferingKingdom` | `[SaveableProperty(1)] public Kingdom OfferingKingdom { get; private set; }` | The kingdom issuing the call. **Only the three-argument constructor assigns it**; the single-argument overload leaves it null. The VM's button callback feeds it together with `KingdomToCallToWarAgainst` into the decision constructor. Pulled into the save graph by `AutoGeneratedInstanceCollectObjects`. |
| `KingdomToCallToWarAgainst` | `[SaveableProperty(2)] public Kingdom KingdomToCallToWarAgainst { get; private set; }` | **The extra field this type carries relative to the alliance offer** — the kingdom being called against. Its `SaveableProperty` id 2 collides with the alliance notice's `TriggerTime` id, but they are separate types with separate numbering. |
| `TriggerTime` | `[SaveableProperty(3)] public CampaignTime TriggerTime { get; private set; }` | Expiry, `CampaignTime.Now + AllianceModel.DurationForOffers` (24 hours in vanilla). The only input to `IsValid()`. |
| `IsValid` | `public override bool IsValid() => !TriggerTime.IsPast` | Overrides the base, which always returns true. Used by `OnGameLoaded`'s `RemoveAll`. **Not polled during play.** |
| `TitleText` | `public override TextObject TitleText => new TextObject("{=ywL1bGlZ}Accept Call To War Offer")` | Title: hard-coded English plus a key, **a fresh `TextObject` on every access**. |
| `SoundEventPath` | `public override string SoundEventPath => "event:/ui/notification/peace_offer"` | Audio event name, **shared with [AllianceOfferMapNotification](../AllianceOfferMapNotification) via `peace_offer`**. |
| Constructor A | `public AcceptCallToWarOfferMapNotification(Kingdom offeringKingdom, Kingdom kingdomToCallToWarAgainst, TextObject descriptionText)` | Calls `base(descriptionText)` → assigns both kingdoms → `TriggerTime = CampaignTime.Now + Campaign.Current.Models.AllianceModel.DurationForOffers`. **The only shape suitable for posting a live notice.** |
| Constructor B | `public AcceptCallToWarOfferMapNotification(TextObject description)` | Calls `base(description)` only; **all three fields stay at defaults**. The deserialization shape — posting through it gets the card swept by `IsValid()` at the next load. |

## Examples

The only official construction shape, copied from `AllianceCampaignBehavior.OnCallToWarAgreementProposedToPlayerKingdom`:

```csharp
if (Clan.PlayerClan.Kingdom.Clans.Count == 1)
{
    TextObject textObject = new TextObject("{=PneX4Ayw}A courier bearing a call to war offer from the {KINGDOM_NAME} against {KINGDOM_TO_CALL_TO_WAR_AGAINST} has arrived at the court of your realm.");
    textObject.SetTextVariable("KINGDOM_NAME", proposerKingdom.Name);
    textObject.SetTextVariable("KINGDOM_TO_CALL_TO_WAR_AGAINST", kingdomToCallToWarAgainst.Name);
    Campaign.Current.CampaignInformationManager.NewMapNoticeAdded(new AcceptCallToWarOfferMapNotification(proposerKingdom, kingdomToCallToWarAgainst, textObject));
    return;
}
```

Ask whether a call-to-war offer is still pending and how long the window is:

```csharp
bool pending = Campaign.Current.CampaignInformationManager.InformationDataExists<AcceptCallToWarOfferMapNotification>(null);
Debug.Print("pending call-to-war offers = " + pending, 0);
Debug.Print("window = " + Campaign.Current.Models.AllianceModel.DurationForOffers.ToString(), 0);
```

Post a call-to-war notice directly for a multi-clan player realm, bypassing the decision route:

```csharp
Kingdom calling = Kingdom.All.Find((Kingdom k) => k.StringId == "sturgia");
Kingdom target = Kingdom.All.Find((Kingdom k) => k.StringId == "empire");
if (calling != null && target != null)
{
    TextObject note = new TextObject("{=mykey4}{CALLER} calls your realm to war on {TARGET}.");
    note.SetTextVariable("CALLER", calling.Name);
    note.SetTextVariable("TARGET", target.Name);
    Campaign.Current.CampaignInformationManager.NewMapNoticeAdded(new AcceptCallToWarOfferMapNotification(calling, target, note));
}
```

## Risks and crash boundaries

- **The single-argument overload is a trap.** All three fields stay unassigned, `TriggerTime` remains `CampaignTime.Zero`, and `IsValid()` is permanently false. **Posting through it means a card the next load deletes.**
- **The constructor depends on `Campaign.Current.Models.AllianceModel`.** Line 56 dereferences it unconditionally, so **constructing during `OnSubModuleLoad` NREs**; the single-argument overload does not read it.
- **The gate is "single-clan player realm".** `Clans.Count == 1` is required, and the branch `return`s right after posting. Multi-clan realms take the `AcceptCallToWarAgreementDecision` route.
- **The VM has a side effect.** `AcceptCallToWarOfferNotificationItemVM.OnFinalize()` will construct a decision, call `CanMakeDecision`, and `AddDecision` when all four conditions hold. **A mod posting its own notice inherits this implicit path**, along with its de-duplication that compares `CallingKingdom` but not the target kingdom.
- **`IsValid()` is only swept in bulk on load.** `RemoveAll(t => t == null || !t.IsValid())` inside `CampaignInformationManager.OnGameLoaded` (line 91) is the sole automatic eviction point. Do not assume the card disappears after 24 hours.
- **The notice list is private and not enumerable.** `CampaignInformationManager._mapNotices` is a `private List<InformationData>` (line 25); the public surface offers only `NewMapNoticeAdded` and `InformationDataExists<T>`.
- **Both `Kingdom` fields can be null.** Only the save shape produces that, and the VM's button callback hands them straight to the decision constructor.
- **The `SaveableProperty` ids collide with the alliance notice.** This type uses 1/2/3, [AllianceOfferMapNotification](../AllianceOfferMapNotification) uses 1/2. **Numbering is per type — do not reason across types.**
- **The VM must be registered.** A type missing from `_itemConstructors` is discarded without an error.
- **The sound is shared with the alliance offer.** `event:/ui/notification/peace_offer` serves both notices.
- **`DurationForOffers` is a swappable model value.** Replacing `AllianceModel` replaces this type's lifetime.

## Cross-Version Notes

`bannerlord-1.4.5/Bannerlord.Source/bin/TaleWorlds.CampaignSystem/TaleWorlds.CampaignSystem.MapNotificationTypes/AcceptCallToWarOfferMapNotification.cs` is 68 lines with 8 public members and `SaveableProperty` ids 1/2/3. The 1.4.6 file of the same name exposes an identical public surface; 1.3.15 has no file of that name.

The default duration likewise comes from [DefaultAllianceModel](../DefaultAllianceModel).DurationForOffers => `CampaignTime.Hours(24f)` at `Bannerlord.Source/bin/TaleWorlds.CampaignSystem/TaleWorlds.CampaignSystem.GameComponents/DefaultAllianceModel.cs:117` — the same source as [AllianceOfferMapNotification](../AllianceOfferMapNotification).

## Dependencies

- Base: [InformationData](../../core-extra/InformationData) supplies `DescriptionText` (`[SaveableField(2)]`), the abstract `TitleText` / `SoundEventPath`, and an `IsValid()` that always returns true.
- Duration source: [AllianceModel](../AllianceModel).DurationForOffers; official implementation [DefaultAllianceModel](../DefaultAllianceModel) line 117.
- Sole construction site: [AllianceCampaignBehavior](../AllianceCampaignBehavior).OnCallToWarAgreementProposedToPlayerKingdom at `Bannerlord.Source/bin/TaleWorlds.CampaignSystem/TaleWorlds.CampaignSystem.CampaignBehaviors/AllianceCampaignBehavior.cs:232`.
- Decision-side alternative: [AcceptCallToWarAgreementDecision](../AcceptCallToWarAgreementDecision), built either by the VM's `OnFinalize()` or by the official multi-clan branch, then `AddDecision(..., ignoreInfluenceCost: true)`.
- Payload: two [Kingdom](../Kingdom) values, with the admission test reading [Clan](../Clan).PlayerClan.Kingdom.Clans.Count.
- Write and eviction: [CampaignInformationManager](../CampaignInformationManager) — `NewMapNoticeAdded` / `InformationDataExists<T>`, plus `OnGameLoaded`'s `RemoveAll`.
- UI mapping: `_itemConstructors.Add(typeof(AcceptCallToWarOfferMapNotification), typeof(AcceptCallToWarOfferNotificationItemVM))` at `Bannerlord.Source/bin/TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds.CampaignSystem.ViewModelCollection.Map/MapNotificationVM.cs:132`.
- Where the war state actually lands: `AllianceCampaignBehavior.StartCallToWarAgreement` / `DenyCallToWarAgreement` in the same file.
