---
title: "AuxiliaryKeyGroupVM"
description: "The view model for one auxiliary key binding category (such as \"general\" or \"campaign only\") in the options screen. It filters HotKeys by the active device, builds the child rows, and resolves key conflicts by swapping the two bindings rather than rejecting or overwriting — the most interesting design choice in the type."
---
# AuxiliaryKeyGroupVM

**Namespace:** TaleWorlds.MountAndBlade.ViewModelCollection.GameOptions.AuxiliaryKeys  
**Module:** TaleWorlds.MountAndBlade.ViewModelCollection  
**Type:** `public class AuxiliaryKeyGroupVM : ViewModel`  
**Base:** `ViewModel`  
**File:** `TaleWorlds.MountAndBlade.ViewModelCollection.GameOptions.AuxiliaryKeys/AuxiliaryKeyGroupVM.cs`

## Overview

The auxiliary key page of the options screen groups bindings into categories. This class is one group.

The constructor (`AuxiliaryKeyGroupVM.cs:59-68`) takes four things — a category id, a batch of `HotKey`s, a keybind-request callback, and an extra-information callback — then **immediately builds the rows and refreshes**.

Two design choices are worth real attention.

### One: filtering by the active device

`PopulateHotKeys()` (`:70-97`) asks, before building each row, "does this HotKey have a usable key on the device currently in use?":

```csharp
bool num;
if (!TaleWorlds.InputSystem.Input.IsGamepadActive)
{
    if (key == null) { continue; }
    num = key.DefaultKeys.Any((Key x) => x != null && x.IsKeyboardInput && x.InputKey != InputKey.Invalid);
}
else
{
    if (key == null) { continue; }
    num = key.DefaultKeys.Any((Key x) => x != null && x.IsControllerInput && x.InputKey != InputKey.Invalid);
}
if (num)
{
    HotKeys.Add(new AuxiliaryKeyOptionVM(key, _onKeybindRequest, SetHotKey, _getExtraInformation));
}
```

**Keyboard and gamepad are mutually exclusive paths.** In gamepad mode a keyboard-only HotKey is hidden entirely rather than shown greyed out. And this filtering happens **only at construction** — device switching is handled by `OnGamepadActiveStateChanged()`, which merely calls `Update()` and `OnDone()` and **does not re-filter or rebuild the list**.

### Two: conflicts are resolved by swapping, not rejecting

`SetHotKey` (`:114-129`) is the most valuable logic in the class:

```csharp
private void SetHotKey(AuxiliaryKeyOptionVM option, InputKey newKey)
{
    InputKey inputKey = option.CurrentKey.InputKey;
    if (newKey != inputKey)
    {
        option.CurrentKey.ChangeKey(newKey);
        option.OptionValueText = Module.CurrentModule.GlobalTextManager
            .GetHotKeyGameTextFromKeyID(option.CurrentKey.ToString().ToLower()).ToString();
        option.UpdateIsChanged();
        AuxiliaryKeyOptionVM auxiliaryKeyOptionVM = HotKeys.FirstOrDefault((AuxiliaryKeyOptionVM k) =>
            k != option && k.CurrentKey.InputKey == option.CurrentKey.InputKey && k.CurrentHotKey.HasSameModifiers(option.CurrentHotKey));
        auxiliaryKeyOptionVM?.Set(inputKey);
        if (auxiliaryKeyOptionVM != null)
        {
            MBInformationManager.AddQuickInformation(new TextObject("{=gb2S2aRq}Swapped {FIRST_KEY} and {SECOND_KEY}")
                .SetTextVariable("FIRST_KEY", option.Name)
                .SetTextVariable("SECOND_KEY", auxiliaryKeyOptionVM.Name), -1000);
        }
    }
}
```

When the new key is *identical* to an existing row's key **and** the modifiers match, it **does not raise a conflict warning** — it silently moves the other row onto your old key, then shows a "Swapped X and Y" toast. That is the opposite of the "this key is already in use" behaviour most settings screens implement.

## Who uses it

The only construction site is **`GameKeyOptionCategoryVM.cs:167`**:

```csharp
AuxiliaryKeyGroups.Add(new AuxiliaryKeyGroupVM(auxiliaryKeyCategory.Key, auxiliaryKeyCategory.Value, _onKeybindRequest, GetExtraInformationText));
```

## Mental Model

Read it as **"a keybinding group that owns a conflict arbiter; it is not merely a list container, it is the holder of the arbitration policy"**:

- **Who news it up.** `GameKeyOptionCategoryVM` (`:167`), constructing one per category of the dictionary.
- **Who holds the reference.** The outer `GameKeyOptionCategoryVM.AuxiliaryKeyGroups` bindable list, ultimately owned by the options screen. **Note that `SetHotKey` is handed to every child as a delegate** (`:94`), so even though this class holds no direct reference to `GameKeyOptionCategoryVM`, it reaches it indirectly through that closure.
- **What it binds to.** Only two — `HotKeys` (`MBBindingList<AuxiliaryKeyOptionVM>`) and `Description` (the category's display name). The group template in the prefab binds exactly those.
- **When it is disposed.** **This class does not override `OnFinalize`.** It registers no `CampaignEvents` and no `Game.Current.EventManager` handler, holding only an `IEnumerable<HotKey>` reference and three callbacks. **So it cannot leak by itself**; the real lifetime responsibility sits with `GameKeyOptionCategoryVM`, and with deciding when `OnDone()` commits the temporary edits onto `HotKey.Keys`.
- 🔴 **`Update()` and `IsChanged()` are `internal`.** Only `OnDone()`, `OnGamepadActiveStateChanged()`, and `RefreshValues()` are `public`. **A mod cannot drive `Update()` itself** — and therefore cannot respond to device switching on its own.
- 🔴 **Device switching does not rebuild the list.** `OnGamepadActiveStateChanged()` does only `Update(); OnDone();` (`:159-163`). `Update()` calls `AuxiliaryKeyOptionVM.Update()` per row, which reselects `Key` for the current device — but **the construction-time filtering result stands**. The practical consequence: a gamepad-only HotKey still occupies a row in keyboard mode, merely showing `InputKey.Invalid`.
- 🔴 **The swap logic only sees one group.** `HotKeys.FirstOrDefault(...)` searches **this group's `HotKeys`**, not the global binding table. **Cross-category conflicts are never swapped.**
- **`HasSameModifiers` is a precondition for swapping.** Only two rows whose modifiers (Shift/Ctrl/Alt combinations) match are eligible. `Ctrl+K` and bare `K` are not treated as a conflict and are never swapped.
- **`SetHotKey` is private but used as a delegate.** It is passed to every `AuxiliaryKeyOptionVM` in the shape `Action<AuxiliaryKeyOptionVM, InputKey>` (`:94`), which the child invokes from its `Set(InputKey)`. **This is where the two layers are coupled by closure** — changing its signature means changing both sides.
- **Misuse**: assuming a new key takes effect immediately. **It does not.** `Set` only mutates the temporary `option.CurrentKey` object; writing back to `HotKey.Keys` happens in `OnDone()` → `AuxiliaryKeyOptionVM.OnDone()` → `base.Key.ChangeKey(base.CurrentKey.InputKey)`.

## Key members

| Member | Signature | What it is actually for |
| --- | --- | --- |
| Constructor | `public AuxiliaryKeyGroupVM(string categoryId, IEnumerable<HotKey> keys, Action<KeyOptionVM> onKeybindRequest, Func<KeyOptionVM, string> getExtraInformation)` (`:59-68`) | Called from `GameKeyOptionCategoryVM.cs:167`. Stores the four inputs, creates an empty `HotKeys`, then **immediately** calls `PopulateHotKeys()` and `RefreshValues()`. **The device filter runs exactly once, here.** |
| `HotKeys` | `[DataSourceProperty] public MBBindingList<AuxiliaryKeyOptionVM> HotKeys` (`:25-40`) | The group's child rows. `PopulateHotKeys` clears then fills it, admitting only HotKeys with a usable key on the current device. |
| `Description` | `[DataSourceProperty] public string Description` (`:42-57`) | The category display name. Prefers `str_hotkey_category_name` + `_categoryId`, and **falls back to the raw `_categoryId` when no text key exists** (`:102-106`) — so the id is a meaningful fallback caption. |
| `PopulateHotKeys` | `private void PopulateHotKeys()` (`:70-97`) | Branches mutually exclusively on `Input.IsGamepadActive`, using `DefaultKeys.Any(...)` to test for a valid key per device, and skipping null HotKeys. **Private, and called only by the constructor.** |
| `SetHotKey` | `private void SetHotKey(AuxiliaryKeyOptionVM option, InputKey newKey)` (`:114-129`) | **The conflict-arbitration core.** After writing the new key it searches this group for another row with the same key *and* the same modifiers, **calls that row's `Set(inputKey)` to move it onto your old key**, and shows a "Swapped X and Y" toast. `private`, but handed to every child as a delegate. |
| `RefreshValues` | `public override void RefreshValues()` (`:99-112`) | Sets `Description`, then calls `RefreshValues()` on every child row. |
| `Update` 🔴 | `internal void Update()` (`:131-137`) | Calls `hotKey.Update()` per row so each reselects `Key` and copy for the current device. **A mod cannot call this.** |
| `IsChanged` 🔴 | `internal bool IsChanged()` (`:147-157`) | Walks `HotKeys` looking for any entry whose `IsChanged` is true. **A mod cannot call this** — so you cannot ask "does this group have unsaved edits?". |
| `OnDone` | `public void OnDone()` (`:139-145`) | Calls `hotKey.OnDone()` per row, committing the temporary `CurrentKey` onto `HotKey.Keys`. **The only moment the change actually takes effect.** |
| `OnGamepadActiveStateChanged` | `public void OnGamepadActiveStateChanged()` (`:159-163`) | The device-switch callback. Does only `Update(); OnDone();`. **It does not re-filter or rebuild the list.** |

## Real Example

Resolving the category display name — **note that `_categoryId` is private with no accessor, so a mod must keep its own copy**:

```csharp
using TaleWorlds.Core;

public string ResolveGroupDescription(string categoryId)
{
    // You must pass the categoryId in yourself: AuxiliaryKeyGroupVM._categoryId is
    // private readonly, and no public property exposes it.
    string description = categoryId;

    if (Module.CurrentModule.GlobalTextManager.TryGetText("str_hotkey_category_name", categoryId, out TextObject text))
    {
        description = text.ToString();
    }

    return description;
}
```

Implementing a "reject on conflict" policy, to contrast with vanilla's automatic swap:

```csharp
public bool TryAssignStrictly(AuxiliaryKeyGroupVM group, AuxiliaryKeyOptionVM target, InputKey newKey)
{
    for (int i = 0; i < group.HotKeys.Count; i++)
    {
        AuxiliaryKeyOptionVM other = group.HotKeys[i];
        if (other != target
            && other.CurrentKey.InputKey == newKey
            && other.CurrentHotKey.HasSameModifiers(target.CurrentHotKey))
        {
            // Vanilla calls other.Set(...) here to swap, then shows "Swapped ...".
            // Swapped for a rejection: return false so the UI can say "already in use".
            MBInformationManager.ShowHint("Already used by " + other.Name);
            return false;
        }
    }

    target.Set(newKey);
    return true;
}
```

Committing the edits — **you must go through `OnDone`, otherwise only the temporary object changed**:

```csharp
public void CommitGroup(AuxiliaryKeyGroupVM group)
{
    // Per-row Set only mutates option.CurrentKey, a temporary object.
    // Writing back to HotKey.Keys is OnDone -> AuxiliaryKeyOptionVM.OnDone -> Key.ChangeKey.
    group.OnDone();
}
```

Re-picking a row's binding for the current device — **note it reads `CurrentHotKey.DefaultKeys` and still branches by device**:

```csharp
using System.Linq;
using TaleWorlds.InputSystem;

public bool HasAnyKeyOnCurrentDevice(AuxiliaryKeyOptionVM option)
{
    HotKey hotKey = option.CurrentHotKey;

    if (Input.IsGamepadActive)
    {
        return hotKey.DefaultKeys.Any(k => k != null && k.IsControllerInput && k.InputKey != InputKey.Invalid);
    }

    return hotKey.DefaultKeys.Any(k => k != null && k.IsKeyboardInput && k.InputKey != InputKey.Invalid);
}
```

## Risks and crash boundaries

- 🔴 **`Update()` and `IsChanged()` are `internal`; mods do not compile against them** (`:131`, `:147`). The holder is the same-assembly `GameKeyOptionCategoryVM`. **You cannot ask "does this group have unsaved edits", nor drive the device-switch reselect yourself.** This is the most common compile error on this page.
- 🔴 **Device switching does not rebuild the list.** `OnGamepadActiveStateChanged()` only does `Update(); OnDone();`. The construction-time keyboard/gamepad filter stands, so a gamepad-only HotKey **still occupies a row** in keyboard mode, merely displaying `InputKey.Invalid`.
- 🔴 **The conflict swap only sees within this group.** The search range is `HotKeys`, not a global binding table. **Cross-category conflicts are never swapped** — two rows in different categories can end up bound to the same key.
- **`HasSameModifiers` gates the swap.** `Ctrl+K` and bare `K` are not a conflict and are never exchanged.
- **Everything before `OnDone()` is temporary.** `Set(newKey)` only changes the `option.CurrentKey` `Key` object; the write-back to `HotKey.Keys` happens via `OnDone()` → `AuxiliaryKeyOptionVM.OnDone()` → `base.Key.ChangeKey(base.CurrentKey.InputKey)`. **Skipping `OnDone` means the UI shows a change that was never saved.**
- **`PopulateHotKeys()` is private and called once.** There is **no public way to re-filter a group** for a new device state — you have to construct a new instance.
- **Delegate coupling**: `SetHotKey` is passed into every child as `Action<AuxiliaryKeyOptionVM, InputKey>` (`:94`). Changing its signature means changing `AuxiliaryKeyOptionVM`'s constructor parameter type as well.
- **Lifecycle**: this class **does not override `OnFinalize` and registers no events**, holding only an `IEnumerable<HotKey>` and three callbacks. **It cannot leak by itself.** The real release responsibility is `GameKeyOptionCategoryVM`'s. What does hold this class indirectly is the child rows' delegate, which captures `this`.
- **Serialization**: none. No `SyncData`, no `IDataStore` contact. Bindings are ultimately persisted through the `HotKey` side; this class takes no part.
- **`Description` may be the raw id.** With no `str_hotkey_category_name` entry it falls back to `_categoryId`. **A category without a text key displays its internal id** — that is the fallback, not a bug.
- 🔴 **`_categoryId` has no public accessor.** It is a `private readonly string` (`:17`), and this class exposes **no** public property or method that hands it out. A mod that did not keep its own copy **cannot read the category id back off the instance** — only the already-populated `Description`.
- **Native boundary**: none. Pure managed, though persistence of `HotKey.Keys` reaches into the input system's storage.
- **Cross-version**: the three `HotKey.Modifiers` values (`Alt` / `Shift` / `Control`), the four text keys `str_hotkey_category_name` / `str_hotkey_name` / `str_hotkey_description` / `str_hot_key_with_modifier`, and the call shape at `GameKeyOptionCategoryVM.cs:167` are all v1.4.5 shapes.

## Dependencies

- ↑ VM base: [ViewModel](../../core-extra/ViewModel) — property-change notification and the `RefreshValues` contract
- ↔ Sibling: [AuxiliaryKeyOptionVM](../AuxiliaryKeyOptionVM) — **the child rows this class produces**; `Set` / `OnDone` / `Update` / `UpdateIsChanged` all live there
- ↔ Sibling: [GameKeyOptionCategoryVM](../GameKeyOptionCategoryVM) — **the sole constructor and holder** (`GameKeyOptionCategoryVM.cs:167`)
- ↑ Base class: [KeyOptionVM](../KeyOptionVM) — the child's base class, supplying `Name`, `Key`, `CurrentKey`, `IsChanged`
- → Key data: [HotKey](../../campaign-ext/HotKey), [Key](../../campaign-ext/Key), [InputKey](../../campaign-ext/InputKey)
- → Text: [GameTextManager](../../core-extra/GameTextManager) and [Module](../../core/Module)'s `GlobalTextManager`
- → List container: [MBBindingList](../../core-extra/MBBindingList)
