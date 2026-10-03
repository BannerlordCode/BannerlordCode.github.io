---
title: "AuxiliaryKeyOptionVM"
description: "One row of the auxiliary key binding settings: a single HotKey. It picks the key for the active device, folds Ctrl/Shift/Alt prefixes into the description, and keeps a temporary CurrentKey until OnDone commits it. Set is public, but the actual conflict arbitration happens in the parent group."
---
# AuxiliaryKeyOptionVM

**Namespace:** TaleWorlds.MountAndBlade.ViewModelCollection.GameOptions.AuxiliaryKeys  
**Module:** TaleWorlds.MountAndBlade.ViewModelCollection  
**Type:** `public class AuxiliaryKeyOptionVM : KeyOptionVM`  
**Base:** `KeyOptionVM`  
**File:** `TaleWorlds.MountAndBlade.ViewModelCollection.GameOptions.AuxiliaryKeys/AuxiliaryKeyOptionVM.cs`

## Overview

One `HotKey` is one row of the options screen. It extends `KeyOptionVM` (the common base for key-binding options) and does three things: **pick which key to display for the active device**, **fold modifiers into a human-readable description**, and **stage edits in a temporary object until Done**.

There is an easily-missed detail in the constructor (`AuxiliaryKeyOptionVM.cs:18-31`): **it does not simply take `HotKey.Keys[0]`, it filters by device**:

```csharp
base.Key = (TaleWorlds.InputSystem.Input.IsGamepadActive
    ? CurrentHotKey.Keys.FirstOrDefault((Key x) => x.IsControllerInput)
    : CurrentHotKey.Keys.FirstOrDefault((Key x) => !x.IsControllerInput));
if (base.Key == null)
{
    base.Key = new Key(InputKey.Invalid);
}
base.CurrentKey = new Key(base.Key.InputKey);
```

Note that `FirstOrDefault(...)` performs **no null-element check** — it dereferences `x.IsControllerInput` directly. The parent class `AuxiliaryKeyGroupVM.PopulateHotKeys` filters with `x != null && x.IsKeyboardInput && ...` *before* creating rows, so on this path the array holds no nulls. **That safety is inherited from the parent's ordering guarantee.**

`base.CurrentKey = new Key(base.Key.InputKey)` is the crux: **it is an independent new object, not an alias of `Key`.** Every user edit lands on this temporary object until `OnDone()`.

## Three layers of state

The key to understanding this class is that there are three distinct "key" concepts:

| Concept | Source | Meaning |
| --- | --- | --- |
| `CurrentHotKey` | `public HotKey CurrentHotKey { get; private set; }` (`:16`) | The real campaign-side hotkey record. **Read-only reference.** |
| `Key` (base) | Selected from `CurrentHotKey.Keys` at construction or in `Update()` | The **currently saved** binding. |
| `CurrentKey` (base) | `new Key(Key.InputKey)` at construction | The **user's in-progress edit**; `Set()` writes it, `OnDone()` commits it. |

## Mental Model

Read it as **"a single-row binding editor with a staging area; it does no conflict arbitration itself, it just escalates the request to the group"**:

- **Who news it up.** `AuxiliaryKeyGroupVM.PopulateHotKeys()`, line 94: `HotKeys.Add(new AuxiliaryKeyOptionVM(key, _onKeybindRequest, SetHotKey, _getExtraInformation));`. **The only construction site in the tree**, and it lives inside a `private` method.
- **Who holds the reference.** The parent group's `MBBindingList<AuxiliaryKeyOptionVM> HotKeys`, ultimately owned by `GameKeyOptionCategoryVM`. And **the parent is held by this row in return**, via the `SetHotKey` delegate passed in at construction — a two-way reference between parent and child.
- **What it binds to.** **This class declares no `[DataSourceProperty]` at all.** Everything it writes lands on the base `KeyOptionVM`: `Name`, `OptionValueText`, `Description`, `ExtraInformationText`, `Key`, `CurrentKey`, `IsChanged`. Unlike most view models in this directory, it is a row type that **fills in its base class**.
- **When it is disposed.** Via the inherited `KeyOptionVM` (→ `ViewModel`) contract, with the parent group or options screen calling `OnFinalize()`. **This class does not override it** and registers no events, holding only a `HotKey` reference and three callbacks. **So it cannot leak by itself.**
- 🔴 **`Set(InputKey)` is public but does not arbitrate conflicts.** It does exactly two things: `_onKeySet(this, newKey)` (escalating to the group's `SetHotKey`, **where arbitration happens**) and `RefreshValues()`. So what "assigning an already-taken key" does **depends entirely on the parent group**, not on this row.
- 🔴 **`ExecuteKeybindRequest()` is private.** (`:72-75`) It calls `_onKeybindRequest(this)` — also reachable only through Gauntlet's by-name binding. **There is no public C# entry point for requesting a rebind.**
- 🔴 **Edits do not land until `OnDone()`.** `OnDone()` (`:95-98`) is one line — `base.Key.ChangeKey(base.CurrentKey.InputKey);` — and note it writes to **`Key`, not `HotKey.Keys`**. So it moves the saved value to the staged value, and the actual persistence happens elsewhere, on the `HotKey` side. **Skipping one `OnDone` on this chain leaves the UI showing a new key that was never saved.**
- **`UpdateIsChanged()` is `internal`** (`:100-103`), so **a mod cannot call it**. It also writes `base.IsChanged = base.CurrentKey != base.Key;` — which is a **value comparison, not a reference comparison**, because `TaleWorlds.InputSystem.Key` overrides `operator ==` (`Key.cs:99-110`) to compare `InputKey` with **null guards on both sides**.
- **The modifier prefix order is fixed.** `RefreshValues` (`:50-63`) walks `Alt` → `Shift` → `Control`, and **each pass re-wraps the already-composed `text3`** in `str_hot_key_with_modifier`. So `Ctrl+Shift+K` renders as a nested `Ctrl(Shift(K))`-style structure with **Alt outermost**. That is vanilla behaviour.
- **Misuse**: assuming `Set` will reject a taken key. **It will not** — the parent group swaps it silently.
- **Misuse #2**: constructing your own `Key(InputKey.Invalid)` and then comparing with `Equals`. `Key`'s `operator ==` null-guards both sides, but `Key.Equals` (`:89-92`) does **not** — `return (obj as Key).InputKey == InputKey;` NREs on null. **Use `==`, never `Equals`.**

## Key members

| Member | Signature | What it is actually for |
| --- | --- | --- |
| `CurrentHotKey` | `public HotKey CurrentHotKey { get; private set; }` (`:16`) | The campaign-side hotkey record behind this row. **A read-only reference**; the `private set` fires once, in the constructor. It is the only extra context this class carries beyond `KeyOptionVM`'s two strings (`_groupId`, `_id`). |
| Constructor | `public AuxiliaryKeyOptionVM(HotKey hotKey, Action<KeyOptionVM> onKeybindRequest, Action<AuxiliaryKeyOptionVM, InputKey> onKeySet, Func<AuxiliaryKeyOptionVM, string> getExtraInformation)` (`:18-31`) | The only construction site (`AuxiliaryKeyGroupVM.cs:94`). Passes `hotKey.GroupId` / `hotKey.Id` / `onKeybindRequest` to the base; picks a controller / non-controller key with `FirstOrDefault` based on `Input.IsGamepadActive`; **manufactures `new Key(InputKey.Invalid)` when none matches**; creates the staging area via `CurrentKey = new Key(Key.InputKey)`; then `RefreshValues()`. |
| `Set` | `public override void Set(InputKey newKey)` (`:77-81`) | **Purely an escalation, no arbitration.** `_onKeySet(this, newKey)` hands off to the group's `SetHotKey` (**where the swap happens**), then `RefreshValues()`. **A taken key does not fail — it gets swapped.** |
| `OnDone` | `public override void OnDone()` (`:95-98`) | **The only commit action**, a single line: `base.Key.ChangeKey(base.CurrentKey.InputKey);`. Moves the staged value into the saved value; **it does not write `HotKey.Keys` itself.** |
| `Update` | `public override void Update()` (`:83-93`) | Reselects `Key` from `CurrentHotKey.Keys` for the current device (manufacturing `InputKey.Invalid` when nothing matches), rebuilds `CurrentKey = new Key(Key.InputKey)`, then `UpdateIsChanged()` + `RefreshValues()`. **Use it after a device switch.** |
| `RefreshValues` | `public override void RefreshValues()` (`:33-70`) | Produces all display copy: the name (`str_hotkey_name` + `_groupId + "_" + `_id`), `OptionValueText` (`GetHotKeyGameTextFromKeyID`), the `Alt`→`Shift`→`Control` **nested wrapping** of `str_hot_key_with_modifier`, `Description` (`{STR1}\n \n{STR2}`), and `ExtraInformationText` from the callback. |
| `ExecuteRevert` | `public override void ExecuteRevert()` (`:105-108`) | Undo: calls `Set(base.Key.InputKey)` — **which means it goes through `Set`, and therefore through the group's arbitration path.** |
| `ExecuteKeybindRequest` 🔴 | `private void ExecuteKeybindRequest()` (`:72-75`) | `_onKeybindRequest(this)`. **Private, fired by Gauntlet name binding; no public C# entry point.** |
| `UpdateIsChanged` 🔴 | `internal override void UpdateIsChanged()` (`:100-103`) | `base.IsChanged = base.CurrentKey != base.Key;`. **`internal` — a mod cannot call it.** And this is a **value** comparison: `Key` overrides `operator ==` (`Key.cs:99-110`) on `InputKey` with null guards on both sides. |

There are no health-bar, focus, or hint members on this class — those belong to [AgentInteractionInterfaceVM](../AgentInteractionInterfaceVM).

## Real Example

Picking which key a HotKey should display for the current device — the same logic as the constructor and `Update`:

```csharp
using System.Linq;
using TaleWorlds.InputSystem;

public InputKey PickKeyForCurrentDevice(HotKey hotKey)
{
    bool gamepad = Input.IsGamepadActive;

    Key picked = gamepad
        ? hotKey.Keys.FirstOrDefault(k => k.IsControllerInput)
        : hotKey.Keys.FirstOrDefault(k => !k.IsControllerInput);

    // Nothing matched means Invalid, which is exactly why vanilla
    // manufactures new Key(InputKey.Invalid) here.
    return picked == null ? InputKey.Invalid : picked.InputKey;
}
```

Composing the modifier-prefixed display text — mind the nesting order:

```csharp
using TaleWorlds.Core;
using TaleWorlds.InputSystem;

public string ComposeBindingText(HotKey hotKey, Key currentKey)
{
    string text = Module.CurrentModule.GlobalTextManager
        .GetHotKeyGameTextFromKeyID(currentKey.ToString().ToLower()).ToString();

    // Vanilla always walks Alt -> Shift -> Control, and each pass re-wraps the
    // already-composed text in str_hot_key_with_modifier, so Alt ends up outermost.
    HotKey.Modifiers[] order =
    {
        HotKey.Modifiers.Alt,
        HotKey.Modifiers.Shift,
        HotKey.Modifiers.Control
    };

    for (int i = 0; i < order.Length; i++)
    {
        if (hotKey.HasModifier(order[i]))
        {
            MBTextManager.SetTextVariable("KEY", text);
            MBTextManager.SetTextVariable("MODIFIER", Module.CurrentModule.GlobalTextManager
                .GetHotKeyGameTextFromKeyID("any" + order[i].ToString().ToLower()).ToString());
            text = Module.CurrentModule.GlobalTextManager.FindText("str_hot_key_with_modifier").ToString();
        }
    }

    return text;
}
```

Correctly asking "has this row been edited" — **use `==`, never `Equals`**:

```csharp
using TaleWorlds.InputSystem;

public bool IsDirty(AuxiliaryKeyOptionVM option)
{
    // Key and CurrentKey are public-get / protected-set properties on KeyOptionVM
    // (KeyOptionVM.cs:33/46), so a mod can read them.
    // Key overrides operator == (Key.cs:99-110): value comparison on InputKey,
    // null-guarded on both sides.
    // Do not switch to Equals(object): Key.Equals (:89-92) reads
    // (obj as Key).InputKey == InputKey and NREs on null.
    return option.CurrentKey != option.Key;
}
```

Walking the full "rebind → revert → commit" sequence:

```csharp
public void RebindAndCommit(AuxiliaryKeyOptionVM option, InputKey newKey)
{
    // 1) Assign: escalated to the group, which may auto-swap, then refreshes copy
    option.Set(newKey);

    // 2) Nothing is persisted yet. IsDirty is a value comparison
    if (option.CurrentKey != option.Key)
    {
        // 3) Revert also goes through Set, so it hits the group's arbitration too
        option.ExecuteRevert();
    }

    // 4) The actual commit: staged value moves into the saved value
    option.OnDone();
}
```

## Risks and crash boundaries

- 🔴 **`Set` does not arbitrate.** It escalates to the group's `SetHotKey`, **where the conflict swap happens**. Assigning an already-taken key therefore does not fail and does not warn about occupation — it is **silently swapped** (with a "Swapped X and Y" toast). Using this class without the group's arbitration means conflict behaviour is entirely whatever your `onKeySet` does.
- 🔴 **`ExecuteKeybindRequest()` is private.** The only way to start a rebind is Gauntlet name binding; there is no public path from another assembly.
- 🔴 **`UpdateIsChanged()` is `internal`.** (`:100`) A mod cannot call it and cannot reliably work out on its own whether the row is dirty — it can only read the cached `IsChanged` that `Update()` writes.
- **`OnDone()` does not write `HotKey.Keys`.** It only does `base.Key.ChangeKey(base.CurrentKey.InputKey)`, mutating the "saved value" `Key` object. The persistence above that lives on the `HotKey` side. **Missing one `OnDone` on this chain desynchronises the display from the stored binding.**
- **The staging area is a fresh object, not an alias.** `CurrentKey = new Key(Key.InputKey)` (`:29`) guarantees edits never pollute the saved value — at the cost that **any edit made by writing `CurrentKey` directly detaches the two** (harmless for storage, since only `OnDone` commits).
- **The constructor's `FirstOrDefault` performs no null-element check.** It dereferences `x.IsControllerInput` directly. That is safe only because `AuxiliaryKeyGroupVM.PopulateHotKeys` filters with `x != null && ...` first. **Constructing this class yourself with a `Keys` array containing nulls NREs during construction.**
- **`Key.Equals` has no null guard; `operator ==` does.** `Key.cs:89-92`'s `Equals` is `(obj as Key).InputKey == InputKey` and NREs on null, while `Key.cs:99-110`'s `operator ==` null-checks both sides. **Always use `==` / `!=`.**
- **Modifier copy is nested, in a fixed `Alt` → `Shift` → `Control` order**, with Alt outermost. A `Ctrl+Shift+K` binding renders in that nested shape. **Not a bug, but it is vanilla behaviour.**
- **No listeners and no `OnFinalize` override**, so **the class cannot leak by itself**. It holds a `HotKey` reference plus three callbacks, one of which (`SetHotKey`) captures the parent group — a two-way parent/child reference, so caching either side long-term pins the other.
- **Serialization**: none. No `SyncData`, no `IDataStore` contact. Binding persistence is on the `HotKey` side.
- **This class declares no `[DataSourceProperty]`.** Everything bindable lives on the base `KeyOptionVM`. Renaming a base property breaks this whole layer at once.
- **Native boundary**: this class is pure managed, but its downstream `HotKey` / `Input` / `Key` live in `TaleWorlds.InputSystem` and ultimately touch input-system storage.
- **Cross-version**: the three text keys `str_hotkey_name` / `str_hotkey_description` / `str_hot_key_with_modifier`, the three `HotKey.Modifiers` values, and both the `operator ==` and `Equals` overloads of `Key` are v1.4.5 shapes.

## Dependencies

- ↑ Base class: [KeyOptionVM](../KeyOptionVM) — supplies the binding surface `Name` / `Key` / `CurrentKey` / `IsChanged` / `OptionValueText` / `Description` / `ExtraInformationText`
- ↔ Sibling: [AuxiliaryKeyGroupVM](../AuxiliaryKeyGroupVM) — **the sole construction site** (`AuxiliaryKeyGroupVM.cs:94`) and **the conflict arbiter** (its `SetHotKey` arrives here as a delegate)
- ↔ Sibling: [GameKeyOptionCategoryVM](../GameKeyOptionCategoryVM) — the owner one level up, supplying `_onKeybindRequest` and `GetExtraInformationText`
- → Key data: [HotKey](../../campaign-ext/HotKey), [Key](../../campaign-ext/Key), [InputKey](../../campaign-ext/InputKey)
- → Text: [GameTextManager](../../core-extra/GameTextManager) and [Module](../../core/Module)'s `GlobalTextManager`
- → Input state: `TaleWorlds.InputSystem.Input.IsGamepadActive` — the single source of truth for the device test
