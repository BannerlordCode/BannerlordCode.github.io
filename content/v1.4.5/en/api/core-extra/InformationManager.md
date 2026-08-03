---
title: "InformationManager"
description: "A static information bus that forwards messages, tooltips, and inquiry requests to the active UI layer without owning business state or windows."
---
# InformationManager

**Namespace:** `TaleWorlds.Library`
**Module:** `TaleWorlds.Library`
**Type:** `public static class InformationManager`
**Base:** none
**File:** `bin/TaleWorlds.Library/TaleWorlds.Library/InformationManager.cs`

## Overview

`InformationManager` is the static bridge used by game code to request information UI. It forwards `InformationMessage`, `InquiryData`, `TextInquiryData`, and tooltip arguments to UI/ViewModel callbacks that have already been wired for the current game session. The downstream message list, inquiry state, and Gauntlet view own the actual UI; calling this type does not return a window or persist mod business state.

## Mental Model

Treat it as a one-way bus wired during the UI lifecycle: the mod constructs real data and publishes a request, while TaleWorlds UI code consumes it, pauses the game, and runs the supplied callbacks. Whether it is the main menu or a campaign/mission UI, it is appropriate to show feedback, ask the player a question, or request a tooltip only after the corresponding consumer has been wired. It is not a general window service during module unload, without a consumer, or from a thread that violates the UI contract. With no consumer, most event invocations quietly become no-ops and state queries return `false`.

## ↑ Parent Navigation

- [Core-extra API index](../)
- [v1.4.5 architecture and roadmap](../../../architecture/roadmap)

## ↔ Sibling Navigation

- [MBInformationManager](../MBInformationManager): the Core bridge for quick information, scene notifications, and multi-selection inquiries.
- [GameTexts](../GameTexts): obtains localized titles and button text from the game text table.
- [InformationMessage](../InformationMessage): the value object consumed by `DisplayMessage`.

## Children / Related Entry Points

- [InquiryData](../InquiryData) - a normal inquiry with affirmative and negative Actions.
- [TextInquiryData](../TextInquiryData) - a text input inquiry with validation and string callbacks.
- [TooltipBaseVM](../TooltipBaseVM) - the ViewModel base required when registering a tooltip.
- [Campaign](../../campaign/Campaign) - campaign UI uses this bus for decisions, notifications, and tooltips.

## Dependencies

The upstream owner is the game module, which wires the static events and `IsAny*Internal` delegates during UI lifecycle setup. Typical downstream consumers include [MBInformationManager](../MBInformationManager), campaign ViewModels, and [TooltipBaseVM](../TooltipBaseVM). `ShowInquiry` forwards `pauseGameActiveState` and `prioritize`; the consumer decides how to pause and queue the UI. `RegisterTooltip<TRegistered, TTooltip>` maps a registered type to a `TooltipBaseVM`, refresh delegate, and movie name, while `ShowTooltip` uses that registered type as the lookup key.

## Lifecycle, Threading, and Cleanup Risks

- Every API is static. Do not write `new InformationManager()` or look for a `Current` instance.
- `DisplayMessage`, `ShowTooltip`, `ShowInquiry`, and the hide methods do not throw merely because their corresponding event has no subscriber, but that also does not mean a UI request was displayed.
- `Clear()` is an event-unbinding operation used during module transitions. The `Module` cleanup path calls it, but it does not clear `RegisteredTypes`, `OnAddSystemNotification`, or `IsAnyTooltipActiveInternal`; a mod that wires these itself must unregister them and its tooltips during unload/reload.
- An `InformationMessage` or inquiry Action may run after the request returns. Do not capture a ViewModel, Mission, or dead entity that may no longer be valid; long-lived state belongs in Campaign and Save systems.
- These events touch UI consumers. Follow the existing UI lifecycle and thread expectations instead of publishing from a worker thread or assuming an inquiry can finish during save or scene transition.

## Public Member Behavior

### Messages and system notifications

`DisplayMessage(InformationMessage message)` only invokes `DisplayMessageInternal`; the consumer interprets `Information`, `Detail`, `Color`, `Category`, and `SoundEventPath`. `AddSystemNotification(string message)` is a separate `OnAddSystemNotification` event and is not a substitute when the mod needs message color, category, or sound. `HideAllMessages()` and `ClearAllMessages()` request that the downstream message view hide or clear its contents.

### Inquiries and state queries

`ShowInquiry` forwards an `InquiryData`, pause flag, and priority. `ShowTextInquiry` forwards a `TextInquiryData`, whose `TextCondition` controls input validation. `HideInquiry()` only requests hiding. `IsAnyInquiryActive()` returns `false` when its internal delegate is null, so it answers whether the connected UI reports an active inquiry; it does not prove that no other modal UI exists.

### Tooltip registration and display

`ShowTooltip(Type type, params object[] args)` passes the type and arguments unchanged to the tooltip UI. The source uses `typeof(MobileParty)`, a `MobileParty` instance, and extension flags; the argument count and meaning must match the registered ViewModel consumer. `RegisterTooltip<TRegistered, TTooltip>` writes `typeof(TRegistered)` into `RegisteredTypes`, replacing an existing record for the same key. `UnregisterTooltip<TRegistered>` only logs when the key is absent. `GetIsAnyTooltipActive()` and `GetIsAnyTooltipActiveAndExtended()` both return `false` when the status delegate is absent.

## Real Examples

### Show a MobileParty tooltip from campaign UI

This follows the same shape as the campaign ViewModels: acquire a real object from `MobileParty.MainParty`, pass its registered type and arguments, and explicitly hide the tooltip when the hover state ends.

```csharp
private void ShowMainPartyTooltip()
{
    if (MobileParty.MainParty != null)
    {
        InformationManager.ShowTooltip(typeof(MobileParty), MobileParty.MainParty, true, false);
    }
}

private void HideMainPartyTooltip()
{
    InformationManager.HideTooltip();
}
```

### Show a confirmation inquiry with real localized text

The source uses `GameTexts.FindText` and `TextObject.ToString()` before constructing `InquiryData`. The affirmative Action should only operate on objects that are still in a valid lifecycle, perform the real operation, and then close or update the UI.

```csharp
private void ShowResetConfirmation()
{
    InformationManager.ShowInquiry(
        new InquiryData(
            GameTexts.FindText("str_decision").ToString(),
            new TextObject("{=I2sZ7K28}Are you sure want to reset tutorials?").ToString(),
            true,
            true,
            GameTexts.FindText("str_yes").ToString(),
            GameTexts.FindText("str_no").ToString(),
            ResetTutorials,
            null),
        pauseGameActiveState: true,
        prioritize: true);
}

private void ResetTutorials()
{
    Game.Current.EventManager.TriggerEvent(new ResetAllTutorialsEvent());
    InformationManager.DisplayMessage(new InformationMessage(new TextObject("{=Iefr8Fra}Tutorials have been reset.").ToString()));
}
```

## See Also

- [Core-extra API index](../)
- [MBInformationManager](../MBInformationManager)
- [InformationMessage](../InformationMessage)
- [InquiryData](../InquiryData)
- [TextInquiryData](../TextInquiryData)
