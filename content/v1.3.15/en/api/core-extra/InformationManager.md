---
title: "InformationManager"
description: "Static facade for player-facing messages, confirm dialogs, and tooltips: DisplayMessage / ShowInquiry. Not a log or debug sink."
---

# InformationManager

**Namespace:** TaleWorlds.Library  
**Module:** TaleWorlds.Library  
**Type:** `public static class InformationManager`  
**Base:** —  
**File:** `TaleWorlds.Library/InformationManager.cs`  
**Authority source:** 1.4.5 (semantics match 1.3.15)

## Overview

`InformationManager` is Bannerlord's static facade for **player-visible** feedback: screen float text, system notifications, modal confirms (`Inquiry`), text-input dialogs (`TextInquiry`), and hover tooltips.

It does **not** render UI itself. Public methods only raise internal `event`s / `Func`s. The real Gauntlet layer in View assemblies subscribes and draws. So:

- With UI subscribers: the player sees the message
- Without subscribers (pure tests, too-early lifecycle): the call is a no-op. No throw, and **no** log file write

**It is not:**

| Misuse | Correct alternative |
|--------|---------------------|
| Dev logs / crash diagnostics | `Debug.Print`, your own file log, Harmony debugging |
| Campaign map notification strip (clickable MapNotification) | `Campaign.Current` notification system / the matching MapNotification type |
| In-mission kill feed / chat | Mission / multiplayer-specific VM paths |

## Mental Model

```
Mod / logic layer
    │  InformationManager.DisplayMessage / ShowInquiry / ...
    ▼
Static event bus (Library, no render state)
    │  DisplayMessageInternal / OnShowInquiry / ...
    ▼
View / Gauntlet subscribers (actual popups and float text)
```

Three levels of player feedback, pick by how interruptive they are:

| Level | API | Scene |
|-------|-----|-------|
| Light | `DisplayMessage` | "Gained 50 denars", "Cannot do that". Does not block input |
| Medium | `AddSystemNotification` | Short system notification string |
| Heavy | `ShowInquiry` / `ShowTextInquiry` | Must confirm/cancel or type text; can pause game logic |

**When to use**

- Behavior / VM / SubModule needs the **player to see feedback right now**
- Confirm before a dangerous action (disband, abandon quest, overwrite-style prompts)
- Register custom tooltip types (`RegisterTooltip`)

**When not to use**

- High-frequency every-frame output (spam)
- As assert / logging
- Expecting messages after `Clear()` or after View unload
- Need a durable, clickable map event → Map Notification, not `DisplayMessage`

## Dependencies

| Direction | Type / system | Relationship |
|-----------|---------------|--------------|
| Payload | [InformationMessage](../InformationMessage) | `DisplayMessage` arg: text, color, sound, category |
| Payload | [InquiryData](../InquiryData) | Confirm title/body/button callbacks |
| Payload | `TextInquiryData` | Inquiry with text input |
| Downstream | Gauntlet Information / Inquiry UI | Subscribes to `*Internal` / `OnShow*` events |
| Parallel | Campaign MapNotification | Map-side durable notifications; different API |
| Callers | [CampaignBehaviorBase](../../campaign-ext/CampaignBehaviorBase), ViewModel, [MBSubModuleBase](../../core/MBSubModuleBase) | Most common trigger points |
| Tooltip | `TooltipBaseVM` + `RegisterTooltip<TRegistered, TTooltip>` | Type → refresh delegate + movie name |

## Risks and crash boundaries

| Risk | Consequence | Mitigation |
|------|-------------|------------|
| Treat this as a logger | Player spam; no diagnostic value in release | Logs go through `Debug` / your own channel |
| Nested `ShowInquiry` from a callback without queue discipline | Stacked dialogs, broken state | Finish work in the callback first; `HideInquiry` if needed; check `IsAnyInquiryActive()` |
| `pauseGameActiveState: true` at the wrong time | Map/mission logic paused; feels frozen | Only for modal confirms; cancel path must restore |
| Affirmative/Negative `Action` captures large objects | Leaks or stale refs after load | Callbacks should only touch stable singletons (`Hero.MainHero`, etc.) or weak holds |
| Rely on visibility in headless / too-early stages | Silent no-op; logic ran, player saw nothing | Critical confirms must not depend on UI alone; decouple logic from display |
| Call display after engine `Clear()` | Events nulled; no effect | Engine lifecycle only; mods should not casually `Clear` |
| Tooltip registration type clashes | Later registration overwrites or movie not found | Unique registration types; `UnregisterTooltip` on unload |

## Key members

### Messages

| Member | Purpose and timing |
|--------|--------------------|
| `DisplayMessage(InformationMessage message)` | Screen info bar. Most common. |
| `HideAllMessages()` | Hide currently visible messages (does not roll back logic). |
| `ClearAllMessages()` | Clear message queue/display. |
| `AddSystemNotification(string message)` | System notification string. |

### Inquiries

| Member | Purpose and timing |
|--------|--------------------|
| `ShowInquiry(InquiryData, pauseGameActiveState = false, prioritize = false)` | Yes/no (or single-button) modal. |
| `ShowTextInquiry(TextInquiryData, ...)` | Modal with text input. |
| `HideInquiry()` | Close the current inquiry. |
| `IsAnyInquiryActive()` | Whether an inquiry is already up (internal Func may be null → false). |

### Tooltips

| Member | Purpose and timing |
|--------|--------------------|
| `ShowTooltip(Type type, params object[] args)` | Show hover tip by registered type. |
| `HideTooltip()` | Hide. |
| `GetIsAnyTooltipActive()` / `GetIsAnyTooltipActiveAndExtended()` | Query tooltip state. |
| `RegisterTooltip<TRegistered, TTooltip>(...)` | Register type → VM refresh + Gauntlet movie. |
| `UnregisterTooltip<TRegistered>()` | Unregister. |
| `RegisteredTypes` | Read-only registry. |

### Lifecycle

| Member | Purpose |
|--------|---------|
| `Clear()` | Detach all events and delegates; engine calls this on session/module teardown. |

Public events (`DisplayMessageInternal`, `OnShowInquiry`, …) are for the **View layer**. Gameplay mods should **call methods**, not attach their own render handlers.

## Real examples

### Example 1: Light player feedback

```csharp
using TaleWorlds.Library;

// Default white text
InformationManager.DisplayMessage(
    new InformationMessage("Recruited 5 troops."));

// With color (green-ish success, red-ish failure; match your project Color conventions)
InformationManager.DisplayMessage(
    new InformationMessage("Not enough gold.", new Color(1f, 0.2f, 0.2f)));

// Category (some UI filters by Category)
InformationManager.DisplayMessage(
    new InformationMessage("Inventory full.", new Color(1f, 0.8f, 0.2f), "Inventory"));
```

### Example 2: Confirm dialog (Campaign / any logic layer)

```csharp
using System;
using TaleWorlds.Library;

public static void ConfirmDisbandParty(Action onConfirm)
{
    if (InformationManager.IsAnyInquiryActive())
        return; // avoid stacked dialogs

    var data = new InquiryData(
        titleText: "Disband party",
        text: "Disband the current party? This cannot be undone.",
        isAffirmativeOptionShown: true,
        isNegativeOptionShown: true,
        affirmativeText: "Confirm",
        negativeText: "Cancel",
        affirmativeAction: () => onConfirm?.Invoke(),
        negativeAction: () => { /* close only */ });

    // pauseGameActiveState: true only when the map needs a pause
    InformationManager.ShowInquiry(data, pauseGameActiveState: true, prioritize: false);
}
```

### Example 3: Feedback from a CampaignBehavior

```csharp
using TaleWorlds.CampaignSystem;
using TaleWorlds.Library;

public class MyRewardBehavior : CampaignBehaviorBase
{
    public override void RegisterEvents()
    {
        CampaignEvents.HeroPrisonerReleased.AddNonSerializedListener(this, OnReleased);
    }

    public override void SyncData(IDataStore dataStore) { }

    private void OnReleased(
        Hero prisoner,
        PartyBase party,
        IFaction capturer,
        EndCaptivityDetail detail,
        bool showNotification)
    {
        if (prisoner != Hero.MainHero)
            return;

        InformationManager.DisplayMessage(
            new InformationMessage($"{prisoner.Name} is free again."));
        InformationManager.AddSystemNotification("You left captivity.");
    }
}
```

### Example 4: Register a custom tooltip (UI mod)

```csharp
using TaleWorlds.Library;
// TTooltip must inherit TooltipBaseVM; movieName maps to a Gauntlet XML
// InformationManager.RegisterTooltip<MyHoverTarget, MyTooltipVM>(
//     onRefreshData: (vm, args) => vm.UpdateFrom(args),
//     movieName: "MyTooltipMovie");
```

## Cross-version notes

- **1.3.x / 1.4.5:** `DisplayMessage` / `ShowInquiry` / tooltip registration APIs are stable.
- In 1.4.5, `TooltipRegistry` is a struct with a primary constructor; gameplay code still only uses `RegisterTooltip`.
- Map notifications, encyclopedia, and quest log each have their own channel. Don't dump every "tell the player" into `DisplayMessage`.

## ↑ Parent Navigation

- [core-extra index](./) — module for this page
- [SDK overview](../../../architecture/sdk-overview)
- [Game](../Game) — session context

## ↔ Sibling Navigation

| Page | Relationship |
|------|--------------|
| [InformationMessage](../InformationMessage) | Float-text payload |
| [InquiryData](../InquiryData) | Confirm payload |
| [Game](../Game) | Current session |
| [MBSubModuleBase](../../core/MBSubModuleBase) | Startup-time prompts |
| [CampaignBehaviorBase](../../campaign-ext/CampaignBehaviorBase) | Campaign logic feedback |
| [CampaignTime](../../campaign-ext/CampaignTime) | Often paired with "due soon" reminders |

## See also

- [Doc contract](../../../architecture/doc-contract)
- [Module system](../../../architecture/module-system)
