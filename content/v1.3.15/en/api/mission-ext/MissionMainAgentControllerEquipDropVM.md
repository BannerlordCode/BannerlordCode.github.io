---
title: "MissionMainAgentControllerEquipDropVM"
description: "Auto-generated class reference for MissionMainAgentControllerEquipDropVM."
---
# MissionMainAgentControllerEquipDropVM

**Namespace:** TaleWorlds.MountAndBlade.ViewModelCollection.HUD
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class MissionMainAgentControllerEquipDropVM : ViewModel`
**Base:** `ViewModel`
**File:** `TaleWorlds.MountAndBlade.ViewModelCollection/HUD/MissionMainAgentControllerEquipDropVM.cs`

## Overview

`MissionMainAgentControllerEquipDropVM` is the view-model behind the controller's "drop your weapons" prompt — the panel that slides up when the main agent holds a controller input and lists what they are carrying so a slot can be picked. It is a `ViewModel` subclass (`MissionMainAgentControllerEquipDropVM.cs:10`) whose entire output is two `[DataSourceProperty]` collections plus a handful of strings the gauntlet layer binds to.

It is a *pure presenter*. Nothing in it touches the agent's equipment — it reads `Agent.Main.Equipment` to build rows (`MissionMainAgentControllerEquipDropVM.cs:78`) and then reports the player's choice back out through the `Action<EquipmentIndex> toggleItem` callback that was handed to its constructor (`MissionMainAgentControllerEquipDropVM.cs:13`). The actual equip or drop is somebody else's job.

Its lifecycle has two halves and both matter. `InitializeMainAgentPropterties()` (`MissionMainAgentControllerEquipDropVM.cs:36` — the misspelling is the engine's real method name) hooks `Mission.Current.OnMainAgentChanged` and immediately replays the handler with `null` so the current agent is subscribed straight away (line 38, `MissionMainAgentControllerEquipDropVM.cs:39`). `OnFinalize()` (`MissionMainAgentControllerEquipDropVM.cs:228`) undoes exactly that: it removes the delegate from `Agent.Main` (`MissionMainAgentControllerEquipDropVM.cs:234`), unsubscribes from `Mission.Current.OnMainAgentChanged` (line 236) and finalizes every row.

The list itself is rebuilt from scratch by `OnToggle(bool)` (`MissionMainAgentControllerEquipDropVM.cs:63`): it clears `EquippedWeapons`, then, if enabled, inserts a sentinel "None" row built from `GameTexts.FindText("str_cancel")` with a **null identifier** (`MissionMainAgentControllerEquipDropVM.cs:75`), followed by one `ControllerEquippedItemVM` per non-empty equipment slot between `EquipmentIndex.WeaponItemBeginSlot` and `EquipmentIndex.ExtraWeaponSlot` (line 78), and finally a separate `EquippedExtraWeapon` for the extra-weapon slot with its own `HaveExtraWeapon` flag.

## Mental Model

Model this as **a snapshot of `Agent.Main.Equipment` that exists only while the panel is open**, plus a one-shot callback carrying the chosen slot out. Once `OnToggle(false)` has run, the rows are gone and `EquippedWeapons` is empty; nothing about the selection survives except `_lastSelectedItem`, which is cleared immediately after the callback fires (`MissionMainAgentControllerEquipDropVM.cs:110`). If you need the choice later, capture it in your own `toggleItem` delegate.

Five behaviours here will bite a mod that treats the VM as a passive display object:

- **Calling `OnToggle(true)` before the agent is ready throws.** The rebuild path dereferences `Agent.Main.Equipment` (`MissionMainAgentControllerEquipDropVM.cs:78`) with no null guard. `IsMainAgentAvailable()` (`MissionMainAgentControllerEquipDropVM.cs:29`) is the only availability check in the class and it is *private* and only used to decide whether the prompt text is shown — it never gates the enumeration.
- **Double-initialisation double-subscribes.** `InitializeMainAgentPropterties` adds `OnMainAgentWeaponChange` to `Agent.Main.OnMainAgentWieldedItemChange` (`MissionMainAgentControllerEquipDropVM.cs:52`) and nothing removes it except `OnFinalize`. Call the initialiser twice without finalising and the agent holds two delegates, so every wield change runs `UpdateItemsWieldStatus` twice. `OnMainAgentChanged` only unsubscribes from the agent it is *handed* as `oldAgent` (line 47) — if the engine calls it with `null` while `Agent.Main` has already moved on, the previous agent keeps the stale delegate for the rest of the mission.
- **The first row is not a weapon and cannot be selected meaningfully.** The "None" row's identifier is `null` (line 75), and the close branch only fires the callback `if (this._lastSelectedItem.Identifier is EquipmentIndex)` (`MissionMainAgentControllerEquipDropVM.cs:102`). Pick "None", close the panel, and `_toggleItem` is never invoked — the drop is simply cancelled. That is by design, but it means "no row highlighted on close" and "user picked None" are indistinguishable from the outside.
- **Hotkeys are remapped by weapon count, and `GetWeaponHotKey` can return null.** The private static at `MissionMainAgentControllerEquipDropVM.cs:245` is not a straight index→key map: with exactly one weapon the first row gets `ControllerEquipDropWeapon4` (line 251) and with more than one it gets `ControllerEquipDropWeapon1` (line 255); index 4 is hard-wired to `ControllerEquipDropExtraWeapon`, and anything beyond that falls through to `return null` after `Debug.FailedAssert` (line 284). A row can therefore carry a null hotkey with no exception.
- **`SetDropProgressForIndex` uses a 0.2 threshold and silently zeroes non-matching rows.** For each row the test is `equipmentIndex != eqIndex || progress <= 0.2f` (`MissionMainAgentControllerEquipDropVM.cs:159`), and every row that fails it — including the "None" row, whose identifier is not an `EquipmentIndex` at all — is assigned `DropProgress = 0`. A hold under 20% never shows a progress bar, and the "None" row can never show one.
- **`OnWeaponDroppedAtIndex(int droppedWeaponIndex)` ignores its argument.** The body is `this.OnToggle(true)` (`MissionMainAgentControllerEquipDropVM.cs:132`) — the index is not used for anything. And `OnCancelHoldController()` (line 125) is an empty method, so a cancelled hold leaves the previous rows in place rather than tearing the panel down.
- **The prompt texts are resolved to plain strings too early.** `RefreshValues` does `new TextObject("{=HEEZhL90}Press to Equip", null).ToString()` (`MissionMainAgentControllerEquipDropVM.cs:24`) and the same for the drop text (line 25). Calling `ToString()` resolves the string id against the language active at that moment and stores the result in a `string` property, so the panel does not re-translate if the language changes while it is open. `OnGamepadActiveChanged` compounds this by writing `string.Empty` into `HoldToDropText` when a gamepad goes inactive (line 292) — the text is gone, not merely hidden.

## How to use

### Getting one

You construct it yourself with the callback, then initialise and drive it. The constructor is `MissionMainAgentControllerEquipDropVM(Action<EquipmentIndex> toggleItem)` (`MissionMainAgentControllerEquipDropVM.cs:13`); the row type it produces is `ControllerEquippedItemVM` and the label helper it calls is `MissionMainAgentEquipmentControllerVM.GetItemTypeAsString`. Call `InitializeMainAgentPropterties()` once, drive it from `OnToggle(true/false)`, and call `OnFinalize()` when your layer is torn down — skipping that last step is what leaks the delegate described above.

### Typical use

```csharp
using TaleWorlds.Core;
using TaleWorlds.MountAndBlade.ViewModelCollection.HUD;

public class MyControllerDropPanel
{
    private readonly MissionMainAgentControllerEquipDropVM _vm;

    public MyControllerDropPanel()
    {
        // The callback fires only when the player picked a real EquipmentIndex row
        // and then closed the panel (MissionMainAgentControllerEquipDropVM.cs:102).
        _vm = new MissionMainAgentControllerEquipDropVM(OnSlotChosen);
        _vm.InitializeMainAgentPropterties();
    }

    public void Open()
    {
        // Requires Agent.Main to exist: OnToggle(true) reads Agent.Main.Equipment directly.
        _vm.OnToggle(true);
    }

    public void Close()
    {
        // Fires _toggleItem for the last selected weapon row, then clears the rows.
        _vm.OnToggle(false);
    }

    // Holding the input reports progress; below 0.2 the bar is forced back to zero.
    public void ReportHold(EquipmentIndex slot, float progress)
    {
        _vm.SetDropProgressForIndex(slot, progress);
    }

    public void TearDown()
    {
        // Required: this is what removes OnMainAgentWeaponChange from Agent.Main.
        _vm.OnFinalize();
    }

    private void OnSlotChosen(EquipmentIndex slot)
    {
        // The real drop belongs to you; this VM never mutates equipment.
        Agent.Main.Equipment[slot] = MissionWeapon.Initial;
    }
}
```

### The mistake that bites

Calling `InitializeMainAgentPropterties()` again instead of `OnFinalize()` before re-creating the panel. The initialiser unconditionally does `Mission.Current.OnMainAgentChanged += this.OnMainAgentChanged` (`MissionMainAgentControllerEquipDropVM.cs:38`) and then `OnMainAgentChanged(null)` attaches `OnMainAgentWeaponChange` to `Agent.Main` (line 52) — and because you passed `null`, the handler has no `oldAgent` to detach from (line 45). The agent now holds two delegates, every wield change fires `UpdateItemsWieldStatus` twice, and `Mission.Current.OnMainAgentChanged` has a dangling subscriber pointing at a view-model you thought you had replaced. Always `OnFinalize()` first.

## Usage Example

## Key Properties

| Name | Signature |
|------|-----------|
| `EquippedWeapons` | `public MBBindingList<ControllerEquippedItemVM> EquippedWeapons { get; set; }` |
| `EquippedExtraWeapon` | `public ControllerEquippedItemVM EquippedExtraWeapon { get; set; }` |
| `HoldToDropText` | `public string HoldToDropText { get; set; }` |
| `PressToEquipText` | `public string PressToEquipText { get; set; }` |
| `IsActive` | `public bool IsActive { get; set; }` |
| `HaveExtraWeapon` | `public bool HaveExtraWeapon { get; set; }` |

## Key Methods

### RefreshValues
`public override void RefreshValues()`

**Purpose:** Keeps the display or cache of values in sync with the underlying state.

```csharp
// Obtain an instance of MissionMainAgentControllerEquipDropVM from the subsystem API first
MissionMainAgentControllerEquipDropVM missionMainAgentControllerEquipDropVM = ...;
missionMainAgentControllerEquipDropVM.RefreshValues();
```

### InitializeMainAgentPropterties
`public void InitializeMainAgentPropterties()`

**Purpose:** Prepares the resources, state, or bindings required by main agent propterties.

```csharp
// Obtain an instance of MissionMainAgentControllerEquipDropVM from the subsystem API first
MissionMainAgentControllerEquipDropVM missionMainAgentControllerEquipDropVM = ...;
missionMainAgentControllerEquipDropVM.InitializeMainAgentPropterties();
```

### OnToggle
`public void OnToggle(bool isEnabled)`

**Purpose:** Invoked when the toggle event is raised.

```csharp
// Obtain an instance of MissionMainAgentControllerEquipDropVM from the subsystem API first
MissionMainAgentControllerEquipDropVM missionMainAgentControllerEquipDropVM = ...;
missionMainAgentControllerEquipDropVM.OnToggle(false);
```

### OnCancelHoldController
`public void OnCancelHoldController()`

**Purpose:** Invoked when the cancel hold controller event is raised.

```csharp
// Obtain an instance of MissionMainAgentControllerEquipDropVM from the subsystem API first
MissionMainAgentControllerEquipDropVM missionMainAgentControllerEquipDropVM = ...;
missionMainAgentControllerEquipDropVM.OnCancelHoldController();
```

### OnWeaponDroppedAtIndex
`public void OnWeaponDroppedAtIndex(int droppedWeaponIndex)`

**Purpose:** Invoked when the weapon dropped at index event is raised.

```csharp
// Obtain an instance of MissionMainAgentControllerEquipDropVM from the subsystem API first
MissionMainAgentControllerEquipDropVM missionMainAgentControllerEquipDropVM = ...;
missionMainAgentControllerEquipDropVM.OnWeaponDroppedAtIndex(0);
```

### OnWeaponEquippedAtIndex
`public void OnWeaponEquippedAtIndex(int equippedWeaponIndex)`

**Purpose:** Invoked when the weapon equipped at index event is raised.

```csharp
// Obtain an instance of MissionMainAgentControllerEquipDropVM from the subsystem API first
MissionMainAgentControllerEquipDropVM missionMainAgentControllerEquipDropVM = ...;
missionMainAgentControllerEquipDropVM.OnWeaponEquippedAtIndex(0);
```

### SetDropProgressForIndex
`public void SetDropProgressForIndex(EquipmentIndex eqIndex, float progress)`

**Purpose:** Assigns a new value to drop progress for index and updates the object's internal state.

```csharp
// Obtain an instance of MissionMainAgentControllerEquipDropVM from the subsystem API first
MissionMainAgentControllerEquipDropVM missionMainAgentControllerEquipDropVM = ...;
missionMainAgentControllerEquipDropVM.SetDropProgressForIndex(eqIndex, 0);
```

### OnFinalize
`public override void OnFinalize()`

**Purpose:** Invoked when the finalize event is raised.

```csharp
// Obtain an instance of MissionMainAgentControllerEquipDropVM from the subsystem API first
MissionMainAgentControllerEquipDropVM missionMainAgentControllerEquipDropVM = ...;
missionMainAgentControllerEquipDropVM.OnFinalize();
```

### OnGamepadActiveChanged
`public void OnGamepadActiveChanged(bool isActive)`

**Purpose:** Invoked when the gamepad active changed event is raised.

```csharp
// Obtain an instance of MissionMainAgentControllerEquipDropVM from the subsystem API first
MissionMainAgentControllerEquipDropVM missionMainAgentControllerEquipDropVM = ...;
missionMainAgentControllerEquipDropVM.OnGamepadActiveChanged(false);
```

## Usage Example

```csharp
// Typically call this after obtaining an instance from the subsystem API
MissionMainAgentControllerEquipDropVM missionMainAgentControllerEquipDropVM = ...;
missionMainAgentControllerEquipDropVM.RefreshValues();
```

## See Also

- [ControllerEquippedItemVM](../ControllerEquippedItemVM) — the row type this VM fills `EquippedWeapons` with
- [EquipmentActionItemVM](../EquipmentActionItemVM) — the selection payload passed back through `OnItemSelected`
- [MissionMainAgentEquipmentControllerVM](../MissionMainAgentEquipmentControllerVM) — supplies the item-type label this VM reuses
- [Area Index](../)