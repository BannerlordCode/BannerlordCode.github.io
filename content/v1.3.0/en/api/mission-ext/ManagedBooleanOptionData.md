---
title: "ManagedBooleanOptionData"
description: "Auto-generated class reference for ManagedBooleanOptionData."
---
# ManagedBooleanOptionData

**Namespace:** TaleWorlds.MountAndBlade.Options.ManagedOptions
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class ManagedBooleanOptionData : ManagedOptionData, IBooleanOptionData, IOptionData`
**Base:** `ManagedOptionData`
**File:** `TaleWorlds.MountAndBlade/Options/ManagedOptions/ManagedBooleanOptionData.cs`

## Overview

`ManagedBooleanOptionData` is the boolean case of the managed options system, and in 1.3.0 it is a class with exactly one member: a constructor. The declaration is `public class ManagedBooleanOptionData : ManagedOptionData, IBooleanOptionData, IOptionData` (`ManagedBooleanOptionData.cs:7`), and the body is `public ManagedBooleanOptionData(ManagedOptions.ManagedOptionsType type) : base(type)` followed by an empty block (`ManagedBooleanOptionData.cs:10`).

Everything that makes an option work — the declared type, the current value, the default, the write-back — lives in the base `ManagedOptionData`, which this constructor hands the `ManagedOptionsType` to. The two interfaces are the engine's option shapes: `IBooleanOptionData` marks it as a checkbox-style option and `IOptionData` is the common contract.

Its sibling `ManagedSelectionOptionData` takes the same constructor argument and adds the selection-specific members; between them they cover the two option shapes the engine understands.

## Mental Model

The identity of the option is its enum value, not an instance. `ManagedBooleanOptionData(ManagedOptions.ManagedOptionsType type)` forwards `type` straight to the base (`ManagedBooleanOptionData.cs:10`), so two instances built from the same enum value are the same option as far as the option system is concerned. That means the enum — not a constructor argument you invent — is what the settings screen and the save file key off. `ManagedOptions.ManagedOptionsType` is a long flat enum of every option the game has (`ManagedOptions.cs:437`).

Every one of those options is read as a `float`, whatever its real type. `ManagedOptions.GetConfig(ManagedOptionsType)` returns `float` (`ManagedOptions.cs:13`) and switches on the enum, returning `(float)(BannerlordConfig.ShowBlood ? 1 : 0)` for a boolean and `(float)BannerlordConfig.BattleSize` for a number (`ManagedOptions.cs:34`, `ManagedOptions.cs:28`). The write side mirrors it: `SetConfig` converts back with `((double)value != 0.0)` for the boolean (`ManagedOptions.cs:285`). So "this option is a checkbox" is a property of the enum and the config object, not something this class contributes.

This is a marker type, not a place to put behaviour. There is no field to add without inheriting it, no virtual to override, and no callback. If you want a boolean option to do something when it changes, that hook lives elsewhere in the option system; subclassing this and adding a method gets you a subclass nothing looks for.

Because the type adds no behaviour over its base, registering your own is almost never the right move. You would add an enum member and let the base handle it — the class exists so the engine can tell a boolean option apart from a selection option by its type, not so that you can extend it.

## How to use

**Getting one.** Options are constructed by the managed options system from a `ManagedOptionsType` value. To add a boolean option, add the enum member; to read or write an existing one, go through `ManagedOptions`, not by constructing this yourself.

**Typical use** — reading and writing a boolean option through the system that owns it:

```csharp
using TaleWorlds.MountAndBlade;
using TaleWorlds.MountAndBlade.Options.ManagedOptions;

public static class MyOptionAccess
{
    public static bool IsBloodEnabled()
    {
        // ManagedOptions returns EVERY option as a float (ManagedOptions.cs:13).
        // ShowBlood is stored as 1/0 (ManagedOptions.cs:34).
        return ManagedOptions.GetConfig(ManagedOptions.ManagedOptionsType.ShowBlood) > 0f;
    }

    public static void SetBloodEnabled(bool enabled)
    {
        // SetConfig converts the float back to the bool for you
        // (ManagedOptions.cs:285).
        ManagedOptions.SetConfig(ManagedOptions.ManagedOptionsType.ShowBlood, enabled ? 1f : 0f);
    }

    // Constructing one yourself is possible but gives you no extra capability:
    // var option = new ManagedBooleanOptionData(ManagedOptions.ManagedOptionsType.ShowBlood);
}
```

`ManagedOptions.GetConfig(ManagedOptionsType)` (`ManagedOptions.cs:13`) and `ManagedOptions.SetConfig(ManagedOptionsType, float)` (`ManagedOptions.cs:245`) are the real accessors — the same `GetConfig` pair `MissionMainAgentController.cs:681` uses to read `ControlBlockDirection`.

**Most common mistake:** expecting a `bool` back from the option system, or a value on the option object.

```csharp
bool on = ManagedOptions.GetConfig(ManagedOptions.ManagedOptionsType.ShowBlood);   // float -> bool
var option = new ManagedBooleanOptionData(ManagedOptions.ManagedOptionsType.ShowBlood);
if (option.Value) { }          // no such member: nothing is declared here
```

Both halves of that fail. `GetConfig` returns `float` for every option in the enum — a boolean option is surfaced as `1f`/`0f` (`ManagedOptions.cs:34`), so assigning it to a `bool` does not compile without the comparison. And the class declares no properties at all, only the forwarding constructor (`ManagedBooleanOptionData.cs:10`), so `option.Value` has nothing behind it either. Read through `ManagedOptions` with an explicit `> 0f`, as in the example, and treat this class as the type marker the option system uses to pick a UI widget.

## Usage Example

```csharp
// This data object is usually returned by campaign/mission APIs
ManagedBooleanOptionData entry = ...;
```

## See Also

- [Area Index](../)
- [ManagedSelectionOptionData — the other option shape, with real members](../ManagedSelectionOptionData)
- [ManagedOptions — where the value is actually read and written](../ManagedOptions)
- [中文页面](../../../../zh/api/mission-ext/ManagedBooleanOptionData)