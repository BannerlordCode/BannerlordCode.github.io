---
title: "CampaignInformationManager"
description: "Campaign's information bridge: persists map notices, turns visible logs into player feedback, and forwards dialog notifications to UI."
---
# CampaignInformationManager

**Namespace:** `TaleWorlds.CampaignSystem`  
**Module:** `TaleWorlds.CampaignSystem`  
**Type:** `public class CampaignInformationManager`  
**Base:** `System.Object`  
**Source:** `TaleWorlds.CampaignSystem/CampaignInformationManager.cs`  
**Authority:** 1.3.15; the ownership and lifecycle boundary is the same in 1.4.5

## One-line responsibility

It is the Campaign-owned information relay: it hands persistent map notices to `MBInformationManager`, turns eligible campaign logs into player feedback, and forwards dialog-notification events to the UI layer.

## Mental model

`CampaignInformationManager` is not a general logger and not a UI control. `Campaign` creates and owns one instance; the instance stores `_mapNotices`, which is part of the campaign save state. When the campaign session starts, `RegisterEvents` connects it to `MBInformationManager.OnRemoveMapNotice`. When the session ends or changes, `DeRegisterEvents` removes that subscription.

```text
Campaign
  └─ CampaignInformationManager
       ├─ _mapNotices ([InformationData], saved)
       │    └─ MBInformationManager.AddNotice -> map-notice UI
       ├─ LogEntryHistory -> NewLogEntryAdded -> InformationManager.DisplayMessage
       └─ static dialog events -> Campaign UI / Gauntlet subscribers
```

This type sits between the Campaign layer and player-facing feedback. Use `NewMapNoticeAdded` for an `InformationData` that should remain in the map notification panel until the player handles it. Use [InformationManager](../../core-extra/InformationManager) directly for an ephemeral message; do not maintain a parallel private notice list. Use `InformationDataExists<T>` to prevent duplicate business notices instead of recreating a notice to infer state.

## When to use, and when not to

**Use it when:**

- A `CampaignBehavior` creates a map notice that the player can handle later.
- A loaded campaign must re-register valid notices with `MBInformationManager`.
- You need to deduplicate a notice by a stable hero, kingdom, party, or decision identity.
- Campaign UI subscribers are alive and you need the dialog-notification bridge such as `AddDialogLine`.

**Do not use it when:**

- You need a public log-writing API. Logs are produced by `LogEntryHistory` and the relevant Campaign behavior; this manager only turns visible `IChatNotification` entries into feedback.
- You want to edit `_mapNotices` or its save field through reflection. Add real `InformationData` through `NewMapNoticeAdded` and let the notification own its lifecycle.
- The main menu, loading flow, or an unloaded campaign is active. UI events may have no subscribers, or the old manager may already be disconnected.
- You need to change relations, wars, ownership, or another campaign state. Use the matching `*Action.Apply`; this manager only presents the result.

## Dependencies

| Direction | Type / system | Relationship |
|---|---|---|
| Creation and owner | [Campaign](../../campaign/Campaign) | Creates and exposes the manager; calls `DeRegisterEvents` at session teardown |
| Map-notice input | [InformationData](../../core-extra/InformationData) | `NewMapNoticeAdded` accepts a concrete notification type and saves its reference |
| Map-notice output | [MBInformationManager](../../core-extra/MBInformationManager) | Adds/removes notices; the actual map panel is downstream |
| Immediate feedback | [InformationManager](../../core-extra/InformationManager) | Visible `IChatNotification` entries eventually call `DisplayMessage` |
| Event source | [CampaignEvents](../CampaignEvents), [CampaignBehaviorBase](../CampaignBehaviorBase) | Behaviors create notices at the correct campaign-event boundary |
| Log source | `LogEntryHistory`, `IChatNotification` | Log insertion calls `NewLogEntryAdded`; only visible chat notifications become feedback |
| Text and voice | [TextObject](../../localization/TextObject), [VoiceOverModel](../VoiceOverModel) | Resolves localized dialog text and character voice paths |
| Save | [SaveableCampaignTypeDefiner](../SaveableCampaignTypeDefiner), `[SaveableField(10)]` | Registers `_mapNotices` as a persisted member |

## Lifecycle and key members

### Creation, registration, and load

- `Campaign` creates the instance and persists it as part of its own state. A mod should not construct a replacement and assign it back.
- `RegisterEvents()` sets `_isSessionLaunched` to `true` and subscribes to `MBInformationManager.OnRemoveMapNotice`. This is the phase in which removals from the map UI can be mirrored into the saved list.
- `DeRegisterEvents()` sets `_isSessionLaunched` to `false` and unsubscribes. It is a session boundary, not a method to call repeatedly during normal campaign play.
- `OnGameLoaded()` removes null or invalid `InformationData` values, then re-adds the remaining notices through `MBInformationManager.AddNotice`. It rebuilds the UI after loading; it is not the new-notice entry point.

### Map notices

- `NewMapNoticeAdded(InformationData informationData)` appends the notice to `_mapNotices`, then calls `MBInformationManager.AddNotice`. Pass a real, save-compatible `InformationData` subtype whose validity can survive a load.
- `InformationDataExists<T>(Func<T, bool> predicate)` searches only the current persisted list for one notification type. A predicate can match a hero, kingdom, party, or decision; `null` means that any instance of the type is enough.
- `NoticeType` labels categories such as war, peace, settlement-owner, hero-faction, and barter announcements. It describes classification; it does not construct a notification.

### Log and dialog bridges

- `NewLogEntryAdded(LogEntry log)` displays feedback only when the session is launched and the log implements `IChatNotification` with `IsVisibleNotification == true`. The color comes from `Campaign.Current.Models.DiplomacyModel.GetNotificationColor`.
- `AddDialogLine(...)` invokes the UI subscriber through `OnDisplayDialog` and resolves a voice path from the `TextObject` and `CharacterObject`. With no subscriber it returns `null`.
- `GetStatusOfDialogNotification(handle)` returns `Inactive` when no subscriber exists. That is a safe “no active UI bridge” default, not proof that a campaign event has completed.
- `ClearDialogNotification(handle, fadeOut)` and `ClearAllDialogNotifications(fadeOut)` ask the UI to clear display state; they do not roll back Campaign logic.
- `GetIsAnyDialogNotificationActiveOrQueued()` returns `false` without a UI subscriber and is useful as a defensive check before requesting another notification.

## Real examples

### Example 1: Add a clickable map notice from a CampaignBehavior

The original `AllianceCampaignBehavior` obtains the manager from `Campaign.Current` and creates a real `AllianceOfferMapNotification` when an alliance offer reaches the player's kingdom:

```csharp
using TaleWorlds.CampaignSystem;
using TaleWorlds.CampaignSystem.MapNotificationTypes;
using TaleWorlds.Localization;

private void QueueAllianceNotice(Kingdom offeringKingdom)
{
    TextObject text = new TextObject(
        "{=my_mod_alliance_notice}A courier bearing an alliance offer has arrived.");

    Campaign.Current.CampaignInformationManager.NewMapNoticeAdded(
        new AllianceOfferMapNotification(offeringKingdom, text));
}
```

Source call site: `TaleWorlds.CampaignSystem/CampaignBehaviors/AllianceCampaignBehavior.cs`, `IAllianceCampaignBehavior.OnAllianceOfferedToPlayerKingdom`.

### Example 2: Deduplicate by a business identity

The original notification view models use the generic query; a mod should also query the current campaign instance rather than a static flag that is unrelated to saves:

```csharp
private void QueueVassalOfferNotice(Kingdom kingdomToOffer, TextObject offerText)
{
    bool alreadyQueued = Campaign.Current.CampaignInformationManager
        .InformationDataExists<VassalOfferMapNotification>(
            notification => notification.OfferedKingdom == kingdomToOffer);

    if (!alreadyQueued)
    {
        Campaign.Current.CampaignInformationManager.NewMapNoticeAdded(
            new VassalOfferMapNotification(kingdomToOffer, offerText));
    }
}
```

Source call sites: `VassalOfferMapNotificationItemVM` performs the query and `VassalAndMercenaryOfferCampaignBehavior` creates the notice.

## Risks and crash boundaries

- **Save references must be stable.** `_mapNotices` is `[SaveableField(10)]`; its elements are saved with the campaign. Putting a transient UI object, an unregistered custom `InformationData`, or an object with invalid external references into the list can make a notice invalid on load and, in severe cases, break save deserialization.
- **Add through the manager.** Calling `MBInformationManager.AddNotice` alone updates the runtime/UI queue but does not add the object to `_mapNotices`; the notice will disappear on save and cannot be deduplicated after load.
- **Respect the session lifetime.** After `DeRegisterEvents`, the old manager no longer receives removal callbacks. Keeping it in a static callback or using it in the next campaign can route work to unloaded UI state.
- **Deduplicate with stable identities.** Reference equality is not enough after a save/load rebuild. Prefer `Hero`, `Kingdom`, `Settlement`, or other persisted identities and query before constructing the notice.
- **A dialog handle is not Campaign state.** `DialogNotificationHandle` belongs to the UI bridge. `GetStatusOfDialogNotification` returning `Inactive` can mean there is no subscriber; do not use it as the completion condition for a campaign event or clear stale handles after UI teardown without checking the lifecycle.
- **Voice resolution can fail.** `AddDialogLine` calls `MBTextManager.TryGetVoiceObject` and `VoiceOverModel.GetSoundPathForCharacter`; the source asserts and returns `null` when no voice object is found. Use real localized text and a valid character context, and allow a text-only fallback.
- **Do not flood notices from high-frequency ticks.** Map notices are saved and queued for UI. Unconditional creation in `HourlyTick` or `DailyTick` causes duplicates, save growth, and an unmanageable notification queue.

## Cross-version notes

In 1.4.5, `Campaign` still owns this manager, map notices remain part of campaign state, and the UI bridge still runs through `MBInformationManager`. Cross-version mods should depend on these public boundaries rather than token numbers or private field layout from decompiled files. If a notification subtype is absent in the target version, use a real `InformationData` subtype that exists there.

## ↑ Parent navigation

- [CampaignSystem API](../)
- [Campaign](../../campaign/Campaign) — creates, owns, and scopes the manager
- [CampaignEvents](../CampaignEvents) — event timing and behavior subscriptions

## ↔ Sibling navigation

| Page | Relationship |
|---|---|
| [InformationData](../../core-extra/InformationData) | Persistent map-notice payload base |
| [MBInformationManager](../../core-extra/MBInformationManager) | Downstream map-notice and UI bridge |
| [InformationManager](../../core-extra/InformationManager) | Immediate feedback sink for visible chat notifications |
| [CampaignBehaviorBase](../CampaignBehaviorBase) | Normal lifecycle entry point for mod-created notices |
| [SaveableCampaignTypeDefiner](../SaveableCampaignTypeDefiner) | Registers this manager and its save members |

## See also

- [Developer roadmap](../../../architecture/developer-roadmap)
- [Crash and save boundaries](../../../architecture/crash-boundaries)
- [Save system](../../../architecture/save-system)
