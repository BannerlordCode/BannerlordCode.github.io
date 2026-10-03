---
title: "ActionCampaignOptionData"
description: "The \"action\" row shape for campaign settings. No view model, no lifecycle, no binding — just an identifier, a sort weight, an enable state, and an Action delegate fired on click, produced by an ICampaignOptionProvider and cached by CampaignOptionsManager."
---
# ActionCampaignOptionData

**Namespace:** TaleWorlds.CampaignSystem.ViewModelCollection  
**Module:** TaleWorlds.CampaignSystem.ViewModelCollection  
**Type:** `public class ActionCampaignOptionData : CampaignOptionData`  
**Base:** `CampaignOptionData`  
**File:** `TaleWorlds.CampaignSystem.ViewModelCollection/ActionCampaignOptionData.cs`

## Overview

This is a **pure data row**, not a view model. The entire file is 24 lines, one private field, two public members. It describes a "click and it happens" row in the campaign settings screen — no toggle state, no numeric value, only an execution.

It extends `CampaignOptionData` but **deliberately passes the base class's numeric capabilities as `null`**:

```csharp
public ActionCampaignOptionData(string identifier, int priorityIndex, CampaignOptionEnableState enableState,
    Action action, Func<CampaignOptionDisableStatus> getIsDisabledWithReason = null)
    : base(identifier, priorityIndex, enableState, null, null, getIsDisabledWithReason)
```

The two parameters after `enableState` in the base constructor are `Func<float> getValue` and `Action<float> setValue`, and here both are `null`. That is precisely the dividing line between numeric options — which read and write one `float` through this pair (and may further map it to difficulty presets) — and action options, which have no value and only a side effect. `getIsDisabledWithReason` is forwarded untouched, so the row can still carry a "why is this greyed out" predicate.

The only base override is `GetDataType()`, returning `CampaignOptionDataType.Action` — the discriminator consumers use to render a button instead of a slider or dropdown. The action itself is wrapped in `ExecuteAction()`, which is exactly `_action?.Invoke()`.

Vanilla constructs it in only two places, both inside `DefaultCampaignOptionsProvider.GetGameplayCampaignOptions()`:

```csharp
yield return new ActionCampaignOptionData("ResetTutorial", 10000, CampaignOptionEnableState.Enabled, ExecuteResetTutorial);
if (TaleWorlds.InputSystem.Input.IsGamepadActive)
{
    yield return new ActionCampaignOptionData("EnableCheats", 11000, CampaignOptionEnableState.Enabled, ExecuteEnableCheats);
}
```

Note that the second is wrapped in a gamepad check — **the row's own presence is the on/off switch**.

## Mental Model

Read it as **"a one-shot button in the settings screen; one `new` is the row's entire identity"**:

- **Who news it up.** Not the UI layer — **the option provider**. Any class implementing `ICampaignOptionProvider` `yield return`s it from `GetGameplayCampaignOptions()` or `GetCharacterCreationCampaignOptions()`. `CampaignOptionsManager.Initialize()` reflectively scans the active game assemblies, `Activator.CreateInstance`s every `ICampaignOptionProvider` implementation, and caches what they produce; `CampaignOptionsManager.GetGameplayCampaignOptions()` then returns the aggregated `List<ICampaignOptionData>`.
- **Who holds the reference.** `CampaignOptionsManager`'s cached list, indirectly consumed by `CampaignOptionsControllerVM` for rendering. **The row is cached** — the existence of `ClearCachedOptions()` is what tells you the produced objects outlive a single panel opening.
- **What it binds to.** Nothing. It has no `[DataSourceProperty]`, does not extend `ViewModel`, and has no `OnPropertyChangedWithValue`. The panel receives an `ICampaignOptionData` and some upper-layer VM decides how to display it. **Do not look for a binding point here; there are none.**
- **When it is disposed.** **Never — not applicable.** This is the single biggest difference between this type and everything else in its bucket: no `OnFinalize`, no `RefreshValues`, no event subscriptions, no `MBBindingList`, no native handles. It is an immutable value object, and GC end is its lifecycle. Applying VM lifecycle discipline to it is simply wrong.
- **`priorityIndex` decides row order**, and is not an array index. `10000` and `11000` push these two rows past difficulty presets (100), auto-allocate clan member perks (1000), and ironman mode (1100).
- **`identifier` is simultaneously lookup key and text key.** The base class's static `GetNameOfOption` / `GetDescriptionOfOption` take the identifier and search the module's `GlobalTextManager` for keys derived from it. Renaming therefore breaks lookup, persistence, and localization together.
- **Misuse #1**: treating it as a callback registry — constructing one elsewhere and calling `ExecuteAction()` yourself. Legal, but it bypasses the `enableState` and `getIsDisabledWithReason` checks, meaning the settings screen may currently be showing the row greyed out.
- **Misuse #2**: assuming the null `getValue`/`setValue` means the base class degrades gracefully. It does not: the base `GetValue()` / `SetValue(float)` implementations call those delegates unconditionally, so any numeric consumer path NREs. **This row must never be read as a numeric option.**

## Key members

| Member | Signature | What it is actually for |
| --- | --- | --- |
| Constructor | `public ActionCampaignOptionData(string identifier, int priorityIndex, CampaignOptionEnableState enableState, Action action, Func<CampaignOptionDisableStatus> getIsDisabledWithReason = null)` | Establishes a "click once, run this" settings row. Passes `getValue`/`setValue` explicitly as `null` to declare itself action-typed, and forwards `getIsDisabledWithReason` to the base for the greyed-out reason. |
| `GetDataType` | `public override CampaignOptionDataType GetDataType()` | The only override, always returning `CampaignOptionDataType.Action`. Consumers use it to render a button rather than a slider or dropdown. |
| `ExecuteAction` | `public void ExecuteAction()` | Invokes the `Action` passed at construction, written as `_action?.Invoke()`. **Note it is `public`**: any code holding the row can fire it — there is no "only the UI can reach this" guarantee. |
| `_action` | `private Action _action` | The only field. Assigned at construction, never mutated afterwards, and reachable through no public getter or setter. |

Note that `getIsDisabledWithReason` returns `CampaignOptionDisableStatus`, which is a **struct, not an enum** (see `CampaignOptionDisableStatus.cs`). It has exactly three readonly properties — `IsDisabled`, `DisabledReason`, `ValueIfDisabled` — all assigned by the constructor `(bool isDisabled, string disabledReason, float valueIfDisabled = -1f)`. There are no named constants such as `Locked` or `Active`; producing a "why greyed out" string is entirely up to you.

## Real Example

Registering your own action row — that is the entire flow a mod needs:

```csharp
using System.Collections.Generic;
using TaleWorlds.CampaignSystem.Party;
using TaleWorlds.CampaignSystem.ViewModelCollection;

public class MyCampaignOptionProvider : ICampaignOptionProvider
{
    public IEnumerable<ICampaignOptionData> GetGameplayCampaignOptions()
    {
        yield return new ActionCampaignOptionData(
            "MyOpenJunkDrawer",
            12000,
            CampaignOptionEnableState.Enabled,
            ExecuteOpenJunkDrawer);
    }

    public IEnumerable<ICampaignOptionData> GetCharacterCreationCampaignOptions()
    {
        yield break;
    }

    private static void ExecuteOpenJunkDrawer()
    {
        InformationManager.ShowTooltip(typeof(MobileParty), MobileParty.MainParty, true, true);
    }
}
```

Picking it back out of the aggregated list and firing it — `GetDataType()` is the correct way to recognise "this row is a button":

```csharp
public bool RunMyOption(string identifier)
{
    foreach (ICampaignOptionData option in CampaignOptionsManager.GetGameplayCampaignOptions())
    {
        if (option.GetDataType() != CampaignOptionDataType.Action)
        {
            continue;
        }

        ActionCampaignOptionData action = option as ActionCampaignOptionData;
        if (action != null && action.GetIdentifier() == identifier)
        {
            action.ExecuteAction();
            return true;
        }
    }

    return false;
}
```

A row that carries a "why greyed out" reason — the only place `getIsDisabledWithReason` belongs:

```csharp
public IEnumerable<ICampaignOptionData> GetGameplayCampaignOptions()
{
    yield return new ActionCampaignOptionData(
        "MyOpenJunkDrawer",
        12000,
        CampaignOptionEnableState.Enabled,
        ExecuteOpenJunkDrawer,
        GetJunkDrawerDisabledReason);
}

private static CampaignOptionDisableStatus GetJunkDrawerDisabledReason()
{
    // CampaignOptionDisableStatus is a struct: three readonly properties,
    // all filled in one shot by the constructor.
    if (MobileParty.MainParty.IsCurrentlyAtSea)
    {
        return new CampaignOptionDisableStatus(
            true,
            "The junk drawer cannot be opened while at sea.");
    }

    return new CampaignOptionDisableStatus(false, string.Empty);
}
```

## Risks and crash boundaries

- **No lifecycle, and none needed.** This is the only type in its bucket you can safely `new` and drop. No `OnFinalize`, no event registration, no native resources. Managing it the way you manage a view model — caching, reusing, disposing — is pure overhead.
- **`getValue` / `setValue` are null, not empty implementations.** `CampaignOptionData.GetValue()` and `SetValue(float)` call those delegates unconditionally. Every numeric consumer path — difficulty-preset read/write, slider refresh, save sync — NREs on an action row. The only reason `GetDataType()` exists is to let consumers **avoid** that path.
- **`ExecuteAction()` is unguarded, unthrottled, and returns nothing.** It checks neither `enableState` nor `getIsDisabledWithReason`, reports no success, and swallows nothing. An exception from the delegate propagates straight to the caller. A hotkey binding or AI routine calling it directly is executing the action while the UI shows it disabled.
- **Delegate capture is a hidden lifetime.** `_action` is usually a method group or closure. If you pass a delegate capturing `this` or a view model while the row is cached in `CampaignOptionsManager` across panel openings, you have extended that object's life. `static` methods in your provider sidestep this entirely.
- **`CampaignOptionsManager`'s cache means "the yield is frozen".** The provider's `GetGameplayCampaignOptions()` is called and cached at manager initialization; the row will not re-evaluate itself as external state changes. To make a row appear or vanish dynamically — as vanilla does for `EnableCheats` via `Input.IsGamepadActive` — the decision must be made at **yield time**, not at execution time.
- **Serialization**: the type itself takes no part in savegames. But the `identifier` it carries is treated as the option key by the settings screen's persistence, so changing it orphans a player's existing preference for that row.
- **Native boundary**: none. Pure managed.
- **Cross-version**: `CampaignOptionDataType.Action` and `CampaignOptionEnableState.Enabled` both exist in v1.4.5. The `priorityIndex` values on vanilla's two instances (`ResetTutorial`, `EnableCheats`) are this version's numbers and should not be assumed stable across versions.

## Dependencies

- ↑ Base class: [CampaignOptionData](../CampaignOptionData) — numeric read/write, text lookup, enable state, and disable reason all live there
- ↔ Sibling: [DefaultCampaignOptionsProvider](../DefaultCampaignOptionsProvider) — vanilla's only user, producing the `ResetTutorial` and `EnableCheats` rows
- ↔ Sibling: [CampaignOptionsManager](../CampaignOptionsManager) — reflectively instantiates every `ICampaignOptionProvider` and caches the output
- ↔ Sibling: [CampaignOptionsControllerVM](../CampaignOptionsControllerVM) — renders the aggregated options into settings rows
- ↔ Sibling: [CampaignOptionDataType](../CampaignOptionDataType) — the enum containing `Action` alongside the other option shapes
- ↔ Sibling: [CampaignOptionEnableState](../CampaignOptionEnableState) — `Enabled` / `Disabled` and friends
- → Campaign object references: [MobileParty](../../campaign/MobileParty); `Party` has no page in the v1.4.5 zh / en trees, so it is not linked
- ↑ Text lookup: [GameTextManager](../../core-extra/GameTextManager)
