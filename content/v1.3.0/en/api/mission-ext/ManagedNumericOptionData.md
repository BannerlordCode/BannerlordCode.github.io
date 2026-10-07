---
title: "ManagedNumericOptionData"
description: "Auto-generated class reference for ManagedNumericOptionData."
---
# ManagedNumericOptionData

**Namespace:** TaleWorlds.MountAndBlade.Options.ManagedOptions
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class ManagedNumericOptionData : ManagedOptionData, INumericOptionData, IOptionData`
**Base:** `ManagedOptionData`
**File:** `TaleWorlds.MountAndBlade/Options/ManagedOptions/ManagedNumericOptionData.cs`

## Overview

`ManagedNumericOptionData` is the options-screen data object for every slider and spinner backed by a `ManagedOptions.ManagedOptionsType` (`ManagedNumericOptionData.cs:7`). It implements `INumericOptionData` and `IOptionData` over a `ManagedOptionData` base, and it is pure metadata: given an option type it reports the minimum, the maximum, whether the value steps discretely, the step size, and whether edits apply live.

All of that is decided in one place. The constructor computes `_minValue` and `_maxValue` once, by calling the private static `GetLimitValue(type, isMin)` (`ManagedNumericOptionData.cs:10`, `ManagedNumericOptionData.cs:12`), and both fields are `readonly`. Five ranges are hardcoded in that method — AutoSaveInterval 4..60, FirstPersonFov 45..100, CombatCameraDistance 0.7..2.4, UIScale 0.75..1.0 — and BattleSize instead reads `BannerlordConfig.MinBattleSize` / `MaxBattleSize` so that config file overrides are honoured (`ManagedNumericOptionData.cs:35`).

`GetIsDiscrete` and `GetShouldUpdateContinuously` both switch on the same enum, which is what makes the slider a stepper or a smooth bar.

## Mental Model

The range is **frozen at construction**. Because `_minValue` and `_maxValue` are `readonly` and assigned in the constructor from `BannerlordConfig`, the object remembers the config values as they were when the option object was created. An option object built before a config change and queried afterwards will report the old range. In practice option objects are created when the options screen is built, so this is rarely visible — but it does mean you cannot retarget a range after construction, only replace the object.

`GetIsDiscrete` contains a branch that cannot change the outcome. Walk it: inside the `type <= AutoSaveInterval` arm, anything that is neither `BattleSize` nor `AutoSaveInterval` returns false, and the two that remain fall through to the final `return true`. In the `else if (type != FirstPersonFov)` arm, the `if (type != UIScale) return false;` is immediately followed by an unconditional `return false;` on the very next statement. So UIScale returns false, and so does everything else that reaches that point — the two statements are indistinguishable (`ManagedNumericOptionData.cs:96`, `ManagedNumericOptionData.cs:98`). Net result: only `BattleSize`, `AutoSaveInterval` and `FirstPersonFov` are discrete. Do not read that inner test as "UIScale is treated specially here".

`GetDiscreteIncrementInterval` returns `1` unconditionally (`ManagedNumericOptionData.cs:106`, `ManagedNumericOptionData.cs:108`), with no regard for the option's units. For BattleSize that is a one-troop step; for AutoSaveInterval, whose range is 4..60, it is a one-unit step. If you need a coarser or finer step you must override the method — there is no per-option configuration.

`GetShouldUpdateContinuously` returns `type != UIScale` (`ManagedNumericOptionData.cs:112`, `ManagedNumericOptionData.cs:115`), so UIScale is the single option that does not apply on every edit; everything else applies live as you drag.

Finally, the fall-through at the end of `GetLimitValue` returns `1f` for max and `0f` for min (`ManagedNumericOptionData.cs:76`, `ManagedNumericOptionData.cs:80`). That is the answer for any `ManagedOptionsType` not explicitly listed — including a modded new enum value. The result is a slider with range 0..1 rather than an error, so a mod that adds an option type gets a working-but-useless control unless it supplies its own data object.

## How to use

**Getting it.** Construct one per option type and hand it to the options screen:

```csharp
var fovOption = new ManagedNumericOptionData(ManagedOptions.ManagedOptionsType.FirstPersonFov);
MBDebug.Print("fov range: " + fovOption.GetMinValue() + " .. " + fovOption.GetMaxValue());
MBDebug.Print("discrete: " + fovOption.GetIsDiscrete() + ", live: " + fovOption.GetShouldUpdateContinuously());
```

**Typical use** — subclassing to give a new or modded option type a real range:

```csharp
public class MyOptionData : ManagedNumericOptionData
{
    public MyOptionData(ManagedOptions.ManagedOptionsType type) : base(type) { }

    // base would have returned 0..1 for an unrecognised type.
    public override float GetMinValue() => 0.25f;
    public override float GetMaxValue() => 4f;

    // base returns 1 for every type; a 0.25 step suits a multiplier.
    public override int GetDiscreteIncrementInterval() => 1;
}
```

**Typical use** — overriding the cadence for a continuous numeric option:

```csharp
public class ApplyOnReleaseOptionData : ManagedNumericOptionData
{
    public ApplyOnReleaseOptionData(ManagedOptions.ManagedOptionsType type) : base(type) { }

    // base returns true for everything except UIScale.
    public override bool GetShouldUpdateContinuously() => false;
}
```

**Most common mistake, and what it costs.** Assuming the range can be adjusted after construction, or assuming an unrecognised option type will fail loudly. Both fail silently. `_minValue` and `_maxValue` are `readonly` and set in the constructor, so a mod that sets them reflectively, or that expects a later config change to widen the slider, sees the original range; and a modded `ManagedOptionsType` hits the fall-through and gets a 0..1 slider that looks perfectly valid and is simply wrong for the quantity it is bound to. Because the object honours whatever range it reports without validating the stored value against it, a value outside the range can end up set with nothing complaining — build the option object after configuration is loaded, and give new option types their own `ManagedNumericOptionData` subclass.

## Key Methods

### GetMinValue
`public float GetMinValue()`

**Purpose:** Reads and returns the min value value held by the this instance.

```csharp
// Obtain an instance of ManagedNumericOptionData from the subsystem API first
ManagedNumericOptionData managedNumericOptionData = ...;
var result = managedNumericOptionData.GetMinValue();
```

### GetMaxValue
`public float GetMaxValue()`

**Purpose:** Reads and returns the max value value held by the this instance.

```csharp
// Obtain an instance of ManagedNumericOptionData from the subsystem API first
ManagedNumericOptionData managedNumericOptionData = ...;
var result = managedNumericOptionData.GetMaxValue();
```

### GetIsDiscrete
`public bool GetIsDiscrete()`

**Purpose:** Reads and returns the is discrete value held by the this instance.

```csharp
// Obtain an instance of ManagedNumericOptionData from the subsystem API first
ManagedNumericOptionData managedNumericOptionData = ...;
var result = managedNumericOptionData.GetIsDiscrete();
```

### GetDiscreteIncrementInterval
`public int GetDiscreteIncrementInterval()`

**Purpose:** Reads and returns the discrete increment interval value held by the this instance.

```csharp
// Obtain an instance of ManagedNumericOptionData from the subsystem API first
ManagedNumericOptionData managedNumericOptionData = ...;
var result = managedNumericOptionData.GetDiscreteIncrementInterval();
```

### GetShouldUpdateContinuously
`public bool GetShouldUpdateContinuously()`

**Purpose:** Reads and returns the should update continuously value held by the this instance.

```csharp
// Obtain an instance of ManagedNumericOptionData from the subsystem API first
ManagedNumericOptionData managedNumericOptionData = ...;
var result = managedNumericOptionData.GetShouldUpdateContinuously();
```

## Usage Example

```csharp
// This data object is usually returned by campaign/mission APIs
ManagedNumericOptionData entry = ...;
```

## See Also

- [Area Index](../)
- [ManagedOptionData](../ManagedOptionData)
- [ManagedOptions](../ManagedOptions)
- [MBGameManager](../MBGameManager)
- [ManagedNumericOptionData (中文页面)](../../../../zh/api/mission-ext/ManagedNumericOptionData)