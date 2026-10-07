---
title: "KingdomGiftFiefPopupVM"
description: "Auto-generated class reference for KingdomGiftFiefPopupVM."
---
# KingdomGiftFiefPopupVM

**Namespace:** TaleWorlds.CampaignSystem.ViewModelCollection
**Module:** TaleWorlds.CampaignSystem.ViewModelCollection
**Type:** `public class KingdomGiftFiefPopupVM : ViewModel`
**Base:** `ViewModel`
**File:** `bin/TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds.CampaignSystem.ViewModelCollection.KingdomManagement/KingdomGiftFiefPopupVM.cs`

## Overview

`KingdomGiftFiefPopupVM` is the **kingdom screen popup that hands a settlement to a clan** — the "you have a spare fief, who gets it?" dialog. The file is 419 lines; the type is `public class KingdomGiftFiefPopupVM : ViewModel` (`KingdomGiftFiefPopupVM.cs:13`).

Its shape is the standard kingdom-screen pattern: a constructor that builds a bindable clan list and a sort controller (`:323`-`:329`), a large block of `string` properties that `RefreshValues()` fills from localization (`:331`-…), two bound child objects (`InputKeyItemVM DoneInputKey` `:52`, `CancelInputKey` `:69`), and a bindable selection model (`MBBindingList<KingdomClanItemVM> Clans` `:103`, `KingdomClanItemVM CurrentSelectedClan` `:120`, `KingdomClanSortControllerVM ClanSortController` `:137`). The only campaign mutation is one line inside `ExecuteGiftSettlement()`.

## Mental Model

Picture it as **a handover slip with a recipient list**. The popup is handed a settlement, builds a list of candidate clans, and when the player confirms it performs exactly one irreversible act — `Campaign.Current.KingdomManager.GiftSettlementOwnership(_settlementToGive, CurrentSelectedClan.Clan)` (`:388`) — and then tells its owner it happened through the `Action onSettlementGranted` callback the constructor took (`:323`).

Two boundaries follow from that model and they are the ones that bite.

First, **`ExecuteGiftSettlement` is guarded but not valid.** The whole body sits inside `if (_settlementToGive != null && CurrentSelectedClan != null)` (`:387`), so calling it with nothing selected is a silent no-op — not an error, not a closed popup, just nothing. A mod that wires it to a button and forgets the selection gate gives the player a dead button with no feedback.

Second, **the callback fires only on success, and it fires after the mutation.** `_onSettlementGranted()` is called at `:390`, inside the guard and after `GiftSettlementOwnership`. So it is a **success notification, not an "attempted" notification** — and a subclass overriding `ExecuteGiftSettlement` without calling `base` silently disconnects the owner screen's refresh.

The third thing worth internalising: **all eleven text properties are `string`, produced by `RefreshValues()`.** `TitleText` (`:171`), `GiftText` (`:188`), `CancelText` (`:205`), `BannerText` (`:222`), `TypeText` (`:239`), `NameText` (`:256`), `InfluenceText` (`:273`), `FiefsText` (`:290`), `MembersText` (`:307`) — the `TextObject` is constructed and `.ToString()`-ed inside `RefreshValues` (`:334` `-…`). **Before the first `RefreshValues()` they are null**, and the constructor calls it at `:328`, so a normally-constructed instance is populated — but one built by a serializer that bypasses the constructor is not.

## How to use

**How to obtain it.** Construct it with the success callback, then `OpenWith` a settlement. `public KingdomGiftFiefPopupVM(Action onSettlementGranted)` (`:323`) is the only constructor and its parameter is not optional — the popup's contract with its owner is that it gets told when the gift landed.

**A typical use.** A kingdom screen that wants to refresh itself after the gift, reacting to the callback rather than polling:

```csharp
using TaleWorlds.CampaignSystem.ViewModelCollection;

_popup = new KingdomGiftFiefPopupVM(() =>
{
    // Fires only after GiftSettlementOwnership succeeded.
    RefreshKingdomPanels();
});

_popup.OpenWith(settlementToGive);
_popup.IsOpen = true;
```

**What to watch out for.** Treating `IsOpen` as the state that decides whether a gift happens. It does not. `ExecuteGiftSettlement` gates on `_settlementToGive != null && CurrentSelectedClan != null` (`:387`) — **and `ExecuteClose()` sets `_settlementToGive = null`** (`:397`). So a mod that closes the popup and then calls `ExecuteGiftSettlement` gets a silent no-op, because closing already discarded the settlement. The consequence is a gift that silently never happens while every visible signal says the dialog was used.

## Key members

| Member | Signature | What it is for |
| --- | --- | --- |
| `KingdomGiftFiefPopupVM` (constructor) | `public KingdomGiftFiefPopupVM(Action onSettlementGranted)` (`:323`) | Builds `_clans` as an `MBBindingList<KingdomClanItemVM>` (`:325`), stores the callback (`:326`), constructs `ClanSortController = new KingdomClanSortControllerVM(ref _clans)` (`:327`) — **by `ref`, so the controller shares the list rather than copying it** — and calls `RefreshValues()` (`:328`). The parameter is required; there is no parameterless overload. |
| `OpenWith` | `public void OpenWith(Settlement settlement)` (`:379`) | The real entry point: stores `_settlementToGive` (`:381`), calls `RefreshClanList()` (`:382`), sets `IsOpen = true` (`:383`). **It does not call `RefreshValues()`** — text is the constructor's job, not this method's. |
| `ExecuteGiftSettlement` | `public void ExecuteGiftSettlement()` (`:386`) | The only campaign mutation: guarded by `_settlementToGive != null && CurrentSelectedClan != null` (`:387`), then `Campaign.Current.KingdomManager.GiftSettlementOwnership(_settlementToGive, CurrentSelectedClan.Clan)` (`:388`), `ExecuteClose()` (`:391`), `_onSettlementGranted()` (`:392`). **The guard makes an unselected call a silent no-op, and the callback fires only on success.** |
| `ExecuteClose` | `public void ExecuteClose()` (`:396`) | Sets `_settlementToGive = null` (`:398`) and `IsOpen = false` (`:399`). **Discarding the settlement here is what makes a later `ExecuteGiftSettlement` a no-op** — the two methods are order-dependent. |
| `IsOpen` | `public bool IsOpen` (`:154`) | Whether the popup is displayed. **A plain field, not derived from the settlement** — so it can be `true` with nothing to give. |
| `Clans` / `CurrentSelectedClan` | `public MBBindingList<KingdomClanItemVM> Clans` (`:103`), `public KingdomClanItemVM CurrentSelectedClan` (`:120`) | The candidate list and the current pick. **`ExecuteGiftSettlement` reads `CurrentSelectedClan.Clan`, not the item VM itself** (`:388`) — the row is a view, the `Clan` is the model. |
| `ClanSortController` | `public KingdomClanSortControllerVM ClanSortController` (`:137`) | Sorting for the list, constructed with `ref _clans` (`:327`). Because the list is passed by reference, **re-sorting mutates the same `MBBindingList` the template binds to** rather than a copy. |
| `IsAnyClanSelected` | `public bool IsAnyClanSelected` (`:86`) | Whether a row is picked — the flag a template normally gates the confirm button on. **It is not the same test as `ExecuteGiftSettlement`'s own guard**, which additionally requires `_settlementToGive != null`. |
| `DoneInputKey` / `CancelInputKey` | `public InputKeyItemVM DoneInputKey` (`:52`), `CancelInputKey` (`:69`) | Glyphs for the two hotkeys, populated by `SetDoneInputKey` (`:409`) / `SetCancelInputKey` (`:414`) via `InputKeyItemVM.CreateFromHotKey(hotKey, isConsoleOnly: true)`. **Null until those setters run**, and `OnFinalize()` null-conditional-finalizes both (`:404`, `:405`). |
| `SetDoneInputKey` / `SetCancelInputKey` | `public void SetDoneInputKey(HotKey hotKey)` (`:409`), `SetCancelInputKey` (`:414`) | Late-bind the glyphs after construction. **Both pass `isConsoleOnly: true`**, so these keys render as console-button glyphs. |
| `OnFinalize` | `public override void OnFinalize()` (`:402`) | `base.OnFinalize()` then `DoneInputKey?.OnFinalize()` and `CancelInputKey?.OnFinalize()` (`:405`-`:406`). **Both null-conditional**, which is why the keys may safely be unset. |
| `RefreshValues` | `public override void RefreshValues()` (`:331`) | Localizes all the text properties, e.g. `TitleText = new TextObject("{=rOKAvjtT}Gift Settlement").ToString();` (`:334`) and `GiftText = GameTexts.FindText("str_gift").ToString();` (`:335`). Called from the constructor (`:328`). **Every result is `.ToString()`-ed**, so no `TextObject` survives for later re-binding. |
| Text properties | `TitleText` (`:171`), `GiftText` (`:188`), `CancelText` (`:205`), `BannerText` (`:222`), `TypeText` (`:239`), `NameText` (`:256`), `InfluenceText` (`:273`), `FiefsText` (`:290`), `MembersText` (`:307`) | Nine localized `string`s for the dialog and the column headers. `NameText` additionally uses a **variant key**: `GameTexts.FindText("str_scoreboard_header", "name")` — it is a scoreboard column header, not a dialog string. |

## Examples

Construct with the success callback and open on a settlement — the order matters, because `RefreshValues` runs in the constructor and `OpenWith` only builds the list:

```csharp
using TaleWorlds.CampaignSystem.ViewModelCollection;

_popup = new KingdomGiftFiefPopupVM(OnSettlementGranted);
_popup.OpenWith(settlementToGive);
```

Guard the confirm path yourself, because the built-in guard is silent:

```csharp
using TaleWorlds.MountAndBlade;
using TaleWorlds.CampaignSystem.ViewModelCollection;

if (_popup.CurrentSelectedClan == null)
{
    Debug.Print("no clan selected; ExecuteGiftSettlement would be a no-op", 0);
    return;
}
_popup.ExecuteGiftSettlement();
```

Bind the hotkey glyphs before the template reads them:

```csharp
using TaleWorlds.InputSystem;

_popup.SetDoneInputKey(new HotKey("Enter"));
_popup.SetCancelInputKey(new HotKey("Escape"));
Debug.Print("cancel key = " + _popup.CancelInputKey, 0);
```

Refresh the text after a localization change, accepting that the values are strings and must be re-read rather than rebound:

```csharp
_popup.RefreshValues();
Debug.Print("title now = " + _popup.TitleText + " / cancel = " + _popup.CancelText, 0);
```

## Risks and crash boundaries

- **`ExecuteGiftSettlement` silently no-ops** when `_settlementToGive` or `CurrentSelectedClan` is null (`:387`). No exception, no log, no close — the popup just sits there.
- **`ExecuteClose` nulls the settlement** (`:397`), so **close-then-gift is a guaranteed no-op.** The two methods are order-dependent and nothing enforces the order.
- **The success callback fires only inside the guard**, after the mutation (`:390`). A subclass overriding `ExecuteGiftSettlement` without calling `base` disconnects the owner screen's refresh with no error.
- **`IsAnyClanSelected` (`:86`) is a weaker condition than `ExecuteGiftSettlement`'s guard.** It does not include `_settlementToGive != null`, so a template can enable the button in a state where the command will do nothing.
- **`ExecuteGiftSettlement` dereferences `Campaign.Current`** (`:388`). Outside a live campaign this is a null dereference — the popup has no `IsValid` check of its own.
- **Every text property is a `string`, not a `TextObject`.** `RefreshValues` `.ToString()`-s each one (`:334`+), so a caller cannot substitute a variable afterwards.
- **`DoneInputKey` / `CancelInputKey` are null until their setters run** (`:409`, `:414`). Reading either earlier gives null; `OnFinalize` is null-conditional (`:405`-`:406`) so teardown survives that.
- **`ClanSortController` shares the list by `ref`** (`:327`), so sorting is not an isolated operation on a snapshot.
- **`OpenWith` does not re-localize.** Text is refreshed once in the constructor (`:328`); a popup reused across a language change keeps the old strings until something calls `RefreshValues()`.
- **The gift is irreversible.** `GiftSettlementOwnership` (`:388`) is a single campaign call with no confirmation step inside this class — the popup's own guard is the only thing between the player and a permanent ownership change.
- **Not a save participant.** `ViewModel`; all state is transient UI state.

## Cross-Version Notes

The v1.4.5 file is 419 lines. The same-named file in `bannerlord-1.3.0` and `bannerlord-1.3.15` under `Bannerlord.Source/bin/TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds.CampaignSystem.ViewModelCollection.KingdomManagement/` keeps the same shape, and `bannerlord-1.5.3` retains it. **The localized strings are the volatile part**: the hard-coded key `{=rOKAvjtT}Gift Settlement` (`:334`) is a translation id baked into this file, so a re-localisation that drops that id changes the title without any code change.

## Dependencies

- Base class: `ViewModel` in `TaleWorlds.Core.ViewModelCollection`, whose `RefreshValues` (`:331`) and `OnFinalize` (`:402`) this type overrides.
- The one campaign mutation: `Campaign.Current.KingdomManager.GiftSettlementOwnership(Settlement, Clan)` (`:388`) in `TaleWorlds.CampaignSystem`.
- Row and sort models: `KingdomClanItemVM` and `KingdomClanSortControllerVM`, both in the same `…ViewModelCollection.KingdomManagement` namespace.
- Bindable list: `MBBindingList<T>` (`:103`, `:324`) from `TaleWorlds.Library`.
- Hotkey glyphs: `InputKeyItemVM` (`:52`, `:69`) and `HotKey` from `TaleWorlds.InputSystem`.
- Localization: `TextObject` and `GameTexts.FindText` in `TaleWorlds.Localization` (`:334`+).
- Entities transferred: [`Settlement`](../../campaign/Settlement) and [`Clan`](../../campaign/Clan) in the campaign bucket.
- Sibling kingdom-screen popups sharing this pattern: [`KingdomElection`](../../campaign/KingdomElection) and [`ClanCreationPopup`-style view-models in the same namespace.
- Bucket index: [viewmodel API](../)
