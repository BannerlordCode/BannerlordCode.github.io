---
title: "ActionOptionData"
description: "Auto-generated class reference for ActionOptionData."
---
# ActionOptionData

**Namespace:** TaleWorlds.MountAndBlade.Options
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class ActionOptionData : IOptionData`
**Base:** `IOptionData`
**File:** `TaleWorlds.MountAndBlade/Options/ActionOptionData.cs`

## Overview

The settings row that behaves like a button. `ActionOptionData` implements the eight-member `IOptionData` contract (`IOptionData.cs:9`-`IOptionData.cs:30`) by pairing an `Action` you supply with a type discriminator, and answering every value question with a constant. It is the type the engine uses for the entries in an options category that do something when clicked — the video screen's "Benchmark" tile is one (`OptionsProvider.cs:25`).

## Mental Model

`ActionOptionData` is the *button* shape of the settings system. Its three constructors (`ActionOptionData.cs:15`, `ActionOptionData.cs:22`, `ActionOptionData.cs:29`) each pair an `Action` you supply with a discriminator — a managed option id, a native option id, or a free-form string id — and every value-side member is a stub: `GetValue` returns `0f` whatever you pass for `forceRefresh` (`ActionOptionData.cs:62`), `SetValue` has an empty body (`ActionOptionData.cs:74`), `GetDefaultValue` returns `0f` (`ActionOptionData.cs:42`), and `Commit` is empty (`ActionOptionData.cs:37`). The only thing that ever happens is `OnAction`. `IsAction()` (`ActionOptionData.cs:79`) is the flag a layout reads to decide between drawing a clickable tile and a value row: it is true only when `_nativeType` is `None` **and** `_managedType` is `ManagedOptionsType.Language`, which is enum member 0 (`ManagedOptions.cs:440`) and therefore the value the field already holds by default. So the string-id constructor yields a button; the native-id constructor yields a value row that merely carries an `Action` along.

## How to use

**Getting one.** There is no factory and no registry — you construct it. The engine's own call site is `OptionsProvider.cs:25`, which yields `new ActionOptionData("Benchmark", onBenchmarkClick)` out of the private `GetVideoGeneralOptions` generator, and `OptionsProvider.cs:18` wraps that sequence into an `OptionCategory`. A screen calls `OptionsProvider.GetVideoOptionCategory(...)`, hands the category to its view model, and the view model enumerates the `IEnumerable<IOptionData>` — it never constructs one. To add a tile of your own, produce your own `IEnumerable<IOptionData>` for a custom category, or hook the provider.

**Typical use.**

```csharp
// Same shape as OptionsProvider.GetVideoGeneralOptions (OptionsProvider.cs:22-36).
IEnumerable<IOptionData> myOptions = new IOptionData[]
{
    new ActionOptionData("MyModRunBenchmark", RunBenchmark),                  // ctor at ActionOptionData.cs:29
    new ActionOptionData(NativeOptions.NativeOptionsType.VSync, ApplyVSync)  // ctor at ActionOptionData.cs:22
};

// A layout asks IsAction() before it draws; only the string-id row answers true.
foreach (IOptionData option in myOptions)
{
    if (option.IsAction())
    {
        string id = (string)option.GetOptionType(); // returns the string you passed in
        // id == "MyModRunBenchmark" for the first row
    }
}

// The Action you handed the constructor is the whole contract; Commit() is empty.
void RunBenchmark() { }
void ApplyVSync() { }
```

**Watch out.** `GetIsDisabledAndReasonID()` (`ActionOptionData.cs:85`) builds its tuple from two literals — `string.Empty` and `false` (`ActionOptionData.cs:87`) — on every call. This type can never report itself disabled and can never carry a reason id, so a tile that must grey out while a battle is loading stays clickable and firing your `Action`. Returning `true` from your callback does not help; you have to return a different `IOptionData` implementation.

## Key Properties

| Name | Signature |
|------|-----------|
| `OnAction` | `public Action OnAction { get; }` |

## Key Methods

### Commit
`public void Commit()`

**Purpose:** Executes the Commit logic.

```csharp
// Obtain an instance of ActionOptionData from the subsystem API first
ActionOptionData actionOptionData = ...;
actionOptionData.Commit();
```

### GetDefaultValue
`public float GetDefaultValue()`

**Purpose:** Reads and returns the default value value held by the this instance.

```csharp
// Obtain an instance of ActionOptionData from the subsystem API first
ActionOptionData actionOptionData = ...;
var result = actionOptionData.GetDefaultValue();
```

### GetOptionType
`public object GetOptionType()`

**Purpose:** Reads and returns the option type value held by the this instance.

```csharp
// Obtain an instance of ActionOptionData from the subsystem API first
ActionOptionData actionOptionData = ...;
var result = actionOptionData.GetOptionType();
```

### GetValue
`public float GetValue(bool forceRefresh)`

**Purpose:** Reads and returns the value value held by the this instance.

```csharp
// Obtain an instance of ActionOptionData from the subsystem API first
ActionOptionData actionOptionData = ...;
var result = actionOptionData.GetValue(false);
```

### IsNative
`public bool IsNative()`

**Purpose:** Determines whether the this instance is in the native state or condition.

```csharp
// Obtain an instance of ActionOptionData from the subsystem API first
ActionOptionData actionOptionData = ...;
var result = actionOptionData.IsNative();
```

### SetValue
`public void SetValue(float value)`

**Purpose:** Assigns a new value to value and updates the object's internal state.

```csharp
// Obtain an instance of ActionOptionData from the subsystem API first
ActionOptionData actionOptionData = ...;
actionOptionData.SetValue(0);
```

### IsAction
`public bool IsAction()`

**Purpose:** Determines whether the this instance is in the action state or condition.

```csharp
// Obtain an instance of ActionOptionData from the subsystem API first
ActionOptionData actionOptionData = ...;
var result = actionOptionData.IsAction();
```

### GetIsDisabledAndReasonID
`public ValueTuple<string, bool> GetIsDisabledAndReasonID()`

**Purpose:** Reads and returns the is disabled and reason i d value held by the this instance.

```csharp
// Obtain an instance of ActionOptionData from the subsystem API first
ActionOptionData actionOptionData = ...;
var result = actionOptionData.GetIsDisabledAndReasonID();
```

## Usage Example

```csharp
// This data object is usually returned by campaign/mission APIs
ActionOptionData entry = ...;
```

## See Also

- [Area Index](../)
- [IOptionData](../../engine/IOptionData)
- [NativeOptions](../../engine/NativeOptions)