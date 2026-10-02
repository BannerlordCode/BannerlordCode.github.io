---
title: "CampaignOptionsManager"
description: "The reflection-based registry that discovers every ICampaignOptionProvider in the active modules and flattens their options into one shared, cached list. Mods add campaign options by shipping a provider class — no registration call, no ordering discipline, and a shared cache you must clear yourself."
---
# CampaignOptionsManager

**Namespace:** TaleWorlds.CampaignSystem.ViewModelCollection  
**Module:** TaleWorlds.CampaignSystem.ViewModelCollection  
**Type:** `public static class CampaignOptionsManager`  
**Base:** none  
**File:** `TaleWorlds.CampaignSystem.ViewModelCollection/CampaignOptionsManager.cs`

## Overview

`CampaignOptionsManager` is how campaign options (gameplay sliders, booleans, dropdowns, action buttons shown on the options screen) get into the game without anyone calling an "add" method. `Initialize()` walks `ModuleHelper.GetActiveGameAssemblies()`, and for every type that is assignable to `ICampaignOptionProvider` — excluding the interface type itself — it does `Activator.CreateInstance(type)` and appends the result to a private static `_optionProviders` list. Discovery is therefore purely reflection-based over the assemblies the active modules own; shipping a public, parameterless provider class in your mod is the whole registration step.

The two query methods, `GetGameplayCampaignOptions()` and `GetCharacterCreationCampaignOptions()`, are identical apart from which interface method they call. Both **clear `_currentOptions` first**, then iterate `_optionProviders` **back to front** (`for (int num = _optionProviders.Count - 1; num >= 0; num--)`), appending every non-null result. Walking in reverse means that among providers returning the *same* option identifier, the **last** provider registered ends up **first** in the returned list — which, combined with the reverse iteration, means the first-registered provider's entry is the one an id lookup finds first. Either way, the practical rule is: return unique identifiers from your provider.

The returned list is the manager's own `_currentOptions` field, not a copy. Callers that mutate it corrupt the shared cache for everyone; the intended cleanup is `ClearCachedOptions()`.

## Mental Model

Think of it as **"a global option registry populated once by reflection, queried through a shared mutable list"**:

- **Who calls `Initialize`:** the game's own bootstrap, once per process, before any options screen is built. Calling it a second time *appends* to `_optionProviders` — it does not clear — so every provider gets instantiated twice and every option appears twice.
- **Typical call order:** `Initialize()` at startup → a screen controller calls `GetGameplayCampaignOptions()` to build its `MBBindingList<CampaignOptionItemVM>` → `CampaignOptionsControllerVM` takes ownership of the list → on `OnFinalize` it calls `ClearCachedOptions()`. The cache is deliberately shared between the gameplay options screen and the character-creation screen, in sequence, not concurrently.
- **Common misuse trap — the returned list is the cache.** `GetGameplayCampaignOptions()` returns `_currentOptions` itself. `Add`, `Remove`, or `Sort` on it and the next caller sees your edits. Build your own `MBBindingList` from it and leave the shared list alone.
- **Common misuse trap — reverse provider order.** Providers are consumed last-registered-first. If two of your own providers emit the same `GetIdentifier()`, one of them wins by registration order and the other silently disappears from the UI. Identifiers are your uniqueness constraint; there is no duplicate detection.
- **Common misuse trap — a provider that throws.** `Activator.CreateInstance` runs your constructor during `Initialize`, with no try/catch. A provider whose constructor reads `Campaign.Current` (which does not exist yet at bootstrap) turns a harmless-looking class into a startup failure.
- **Common misuse trap — forgetting to clear.** Without `ClearCachedOptions()`, `_currentOptions` holds the previous screen's options. Since the next `Get*` call clears it anyway, the visible symptom is usually a `KeyNotFoundException` or a stale item during teardown rather than incorrect data — but a screen that captured the list and keeps it alive after teardown will happily mutate the shared instance.

## When to Use / When NOT to Use

**Use it when:**
- You want to contribute a campaign option (a slider, a toggle, a dropdown, an action button) to the base game's options screen. Implement `ICampaignOptionProvider`, return your `ICampaignOptionData` objects, and do nothing else.
- You want to enumerate the full set of campaign options at runtime to read or validate them.
- You need to check whether an option identifier exists (`GetOptionWithIdExists`).

**Do NOT use it when:**
- You want a *game menu* option. Those go through `CampaignGameStarter.AddGameMenuOption`, a completely different registry.
- You want per-save option persistence. Campaign options are process/global configuration, not campaign save state — they are not written into a campaign save by this class.
- You are on the character-creation screen and need different data than the gameplay screen. Implement both interface methods and let the screen pick; do not maintain your own parallel list.

## Dependencies

- [ICampaignOptionProvider](../ICampaignOptionProvider) — the interface you implement; `GetGameplayCampaignOptions` / `GetCharacterCreationCampaignOptions` are the two hooks.
- [ICampaignOptionData](../ICampaignOptionData) — the per-option contract carrying identifier, name, description, value, enable state and disable reason.
- [CampaignOptionItemVM](../CampaignOptionItemVM) — the view-model wrapper the options screen builds from each `ICampaignOptionData`; it is also what owns the change callback.
- [CampaignOptionsControllerVM](../CampaignOptionsControllerVM) — the screen controller that consumes the list, sorts it, and is responsible for calling `ClearCachedOptions` on finalize.
- [ModuleHelper](../../campaign-ext/ModuleHelper) — supplies `GetActiveGameAssemblies()`, the set of assemblies reflection is run over.

## Key members

### `public static void Initialize()`

Iterates `ModuleHelper.GetActiveGameAssemblies()`, calls `GetTypesSafe()` on each, and instantiates every concrete `ICampaignOptionProvider` into `_optionProviders`.
- **Return value:** none.
- **Requires:** a non-null `type` and `type != typeof(ICampaignOptionProvider)`; a null entry from `GetTypesSafe()` is skipped.
- **Not idempotent:** a second call duplicates every provider and every option. There is no `_initialized` guard.

### `public static bool GetOptionWithIdExists(string identifier)`

Returns whether any entry of the **current cache** has a matching `GetIdentifier()`. Returns `false` for a null or empty identifier without touching the list.
- **Prerequisite:** `_currentOptions` must already have been populated by a `Get*CampaignOptions()` call. Called before any, it inspects an empty list and returns `false` for everything.

### `public static List<ICampaignOptionData> GetGameplayCampaignOptions()`

Clears the cache, walks providers in reverse, and appends every non-null `IEnumerable<ICampaignOptionData>` from `GetGameplayCampaignOptions()`. Returns `_currentOptions`.
- **Return semantics:** the manager's own list — shared, mutable, and re-cleared by the next call. Copy it before keeping it.

### `public static List<ICampaignOptionData> GetCharacterCreationCampaignOptions()`

Same shape, calling `ICampaignOptionProvider.GetCharacterCreationCampaignOptions()`. Also returns `_currentOptions`.

### `public static void ClearCachedOptions()`

`_currentOptions.Clear()`. Called by `CampaignOptionsControllerVM.OnFinalize` so the next screen starts from a clean cache.
- **Note:** it clears only `_currentOptions`; `_optionProviders` is untouched and stays populated for the process lifetime.

## Examples

### Example 1 — a mod contributing two campaign options

```csharp
using System;
using System.Collections.Generic;
using TaleWorlds.CampaignSystem.ViewModelCollection;

namespace MyMod.Options
{
    public class MyModOptionProvider : ICampaignOptionProvider
    {
        // Options are delegate-backed: the data object does not own the storage.
        private static readonly BooleanCampaignOptionData FastTravel =
            new BooleanCampaignOptionData(
                identifier: "MyModFastTravel",
                priorityIndex: 100,
                enableState: CampaignOptionEnableState.Enabled,
                getValue: () => SettingsStore.FastTravel ? 1f : 0f,
                setValue: v => SettingsStore.FastTravel = v != 0f);

        private static readonly NumericCampaignOptionData ProgressionRate =
            new NumericCampaignOptionData(
                identifier: "MyModProgressionRate",
                priorityIndex: 101,
                enableState: CampaignOptionEnableState.Enabled,
                getValue: () => SettingsStore.ProgressionRate,
                setValue: v => SettingsStore.ProgressionRate = v,
                minValue: 0.5f,
                maxValue: 2f,
                isDiscrete: false);

        public IEnumerable<ICampaignOptionData> GetGameplayCampaignOptions()
        {
            yield return FastTravel;
            yield return ProgressionRate;
        }

        public IEnumerable<ICampaignOptionData> GetCharacterCreationCampaignOptions()
        {
            // Nothing during character creation.
        }
    }
}
```

Nothing else is required — a public parameterless class in an active module's assembly is discovered by `Initialize()`.

### Example 2 — reading the options, safely

```csharp
using System.Collections.Generic;
using TaleWorlds.CampaignSystem.ViewModelCollection;

public static class MyModOptionReader
{
    public static float ReadProgressionRate()
    {
        // GetGameplayCampaignOptions returns the shared cache: iterate, never mutate.
        List<ICampaignOptionData> options = CampaignOptionsManager.GetGameplayCampaignOptions();
        foreach (ICampaignOptionData option in options)
        {
            if (option.GetIdentifier() == "MyModProgressionRate")
            {
                return option.GetValue();
            }
        }

        return 1f;   // provider not present: fall back rather than throw
    }

    public static bool FastTravelEnabled()
    {
        if (!CampaignOptionsManager.GetOptionWithIdExists("MyModFastTravel"))
        {
            return false;
        }

        var buffer = new List<ICampaignOptionData>(CampaignOptionsManager.GetGameplayCampaignOptions());
        foreach (ICampaignOptionData option in buffer)
        {
            if (option.GetIdentifier() == "MyModFastTravel")
            {
                return option.GetValue() != 0f;
            }
        }

        return false;
    }
}
```

## Risks and crash boundaries

- **Save serialization:** none, and this is deliberate. Campaign options are global configuration stored for the process, not campaign save state; nothing here writes into an `IDataStore`. Consequence for mods: an option the player set is not recorded in the save, so a save does not capture "this campaign was created with fast travel off", and nothing validates that an option still exists when a save is loaded.
- **Cross-domain dependencies:** the class lives in the ViewModelCollection assembly and calls into `TaleWorlds.ModuleManager`. The dependency edge is reflection-based rather than a compile-time reference, which is exactly what makes it extensible — and also what makes it invisible to the compiler. A typo'd interface name or a missing assembly reference produces "provider not found" at runtime, not a build error.
- **Load order:** `Initialize()` depends on `ModuleHelper.GetActiveGameAssemblies()`, which is only meaningful after module initialisation. And `Initialize()` itself instantiates providers, so any provider constructor that touches `Campaign.Current`, `Game.Current`, or a view will run too early and throw during startup. Keep provider constructors trivial — return static data.
- **ID stability:** option identifiers are plain strings with no namespace and no duplicate check. Renaming `GetIdentifier()` orphans the player's saved preference for that option (there is no saved preference file here, but the UI loses track of it across versions), and reusing an identifier that another mod already claims means one of you silently disappears based on provider registration order.
- **Shared mutable cache.** Two screens alive at once (e.g. an overlay options screen over character creation) will clobber each other's `_currentOptions`. The design assumes strictly sequential use.
- **`Initialize()` has no guard and no exception handling.** A provider whose constructor throws kills startup, and a double call silently doubles every option in the list.

## Cross-Version Notes

- **v1.3.x → v1.4.5:** the static surface is unchanged — `Initialize`, `ClearCachedOptions`, `GetGameplayCampaignOptions`, `GetCharacterCreationCampaignOptions`, `GetOptionWithIdExists`. Discovery has always been reflection over `ModuleHelper.GetActiveGameAssemblies()`.
- **v1.4.5:** providers are still consumed in **reverse** registration order and the returned list is still the manager's own `_currentOptions` field rather than a copy. Do not write a mod that relies on forward ordering.
- **v1.4.5:** there is no `UnregisterProvider`, no `AddProvider` and no `IsInitialized` member. Providers are fixed for the process lifetime.

## See Also

- ↑ Parent bucket: [ViewModel API index](../)
- ↔ Sibling: [ICampaignOptionProvider](../ICampaignOptionProvider) — the interface you implement
- ↔ Sibling: [ICampaignOptionData](../ICampaignOptionData) — the per-option contract
- ↔ Sibling: [CampaignOptionItemVM](../CampaignOptionItemVM) — the view-model wrapper the screen builds
- ↔ Sibling: [CampaignOptionsControllerVM](../CampaignOptionsControllerVM) — the screen controller that consumes and clears the cache
- ↔ Cross-bucket: [ModuleHelper](../../campaign-ext/ModuleHelper) — supplies the assemblies reflection runs over
