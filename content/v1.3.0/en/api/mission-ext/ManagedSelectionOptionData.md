---
title: "ManagedSelectionOptionData"
description: "Auto-generated class reference for ManagedSelectionOptionData."
---
# ManagedSelectionOptionData

**Namespace:** TaleWorlds.MountAndBlade.Options.ManagedOptions
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class ManagedSelectionOptionData : ManagedOptionData, ISelectionOptionData, IOptionData`
**Base:** `ManagedOptionData`
**File:** `TaleWorlds.MountAndBlade/Options/ManagedOptions/ManagedSelectionOptionData.cs`

## Overview

`ManagedSelectionOptionData` is the dropdown case of the managed options system, and unlike its boolean sibling it does real work: it resolves, once, how many entries an option has and what they are called. The declaration is `public class ManagedSelectionOptionData : ManagedOptionData, ISelectionOptionData, IOptionData` (`ManagedSelectionOptionData.cs:10`).

The constructor does the resolution. It calls the two static helpers and stores the results: `_selectableOptionsLimit = GetOptionsLimit(type)` and `_selectableOptionNames = GetOptionNames(type)` (`ManagedSelectionOptionData.cs:15`). Both fields are `readonly` (`ManagedSelectionOptionData.cs:133`), and the two instance getters — `GetSelectableOptionsLimit()` (`ManagedSelectionOptionData.cs:20`) and `GetSelectableOptionNames()` (`ManagedSelectionOptionData.cs:26`) — only return what was cached at construction.

`GetOptionsLimit` is a hand-written table. It returns real numbers for the selection options: `3` for `ControlBlockDirection` and `ControlAttackDirection` (`ManagedSelectionOptionData.cs:43`), `6` for `NumberOfCorpses` (`ManagedSelectionOptionData.cs:46`), `7` for `BattleSize` (`ManagedSelectionOptionData.cs:48`), `2` for `CrosshairType`, `OrderType` and `OrderLayoutType` (`ManagedSelectionOptionData.cs:67`), and live counts for `Language` (`ManagedSelectionOptionData.cs:39`) and `VoiceLanguage` (`ManagedSelectionOptionData.cs:84`).

## Mental Model

`GetOptionsLimit` returns 0 for anything that is not a selection option — the switch falls through to a bare `return 0` (`ManagedSelectionOptionData.cs:89`). That is how the option system distinguishes shapes: it hands every enum member to this class and a `0` limit means "not a dropdown". Do not read a 0 as "an empty dropdown".

The names are usually localisation keys built by concatenation, not literal text. For `Language` and `VoiceLanguage` the iterator yields the actual language titles (`ManagedSelectionOptionData.cs:101`); for everything else it yields `"str_options_type_" + typeName + "_" + j` (`ManagedSelectionOptionData.cs:124`) where `typeName` is `type.ToString()`. So adding a selection option to the enum means also adding `str_options_type_<YourOptionName>_0` through `_N-1` to your text table — the limit and the keys are two separate obligations that the code does not connect.

The `SelectionData` flag is `IsLocalizationId` (`SelectionData.cs:16`) and it changes meaning between the two branches, which is the easiest thing to get wrong when reading this file. Language entries pass `false` alongside a real, already-localised title in `Data` (`ManagedSelectionOptionData.cs:101`); synthesised entries pass `true` alongside a key (`ManagedSelectionOptionData.cs:124`). Same constructor argument, opposite meaning, decided by which branch produced it.

Both instance getters are cache reads. The `IEnumerable<SelectionData>` field is produced by a `yield return` iterator (`ManagedSelectionOptionData.cs:93`), which means the sequence is lazily evaluated — the *limit* was computed at construction but the *names* are generated on first enumeration. Nothing recomputes either if the option set changes mid-session; a mod that adds a language or voices after construction gets stale results.

`GetOptionNames` iterates `j` from 0 to the limit it calls itself (`ManagedSelectionOptionData.cs:119`), so the names and the count can never disagree for the synthesised branch — but for the language branches the count is `LocalizedTextManager.GetLanguageIds(...).Count` at the time of the call, so two enumerations at different times can yield different lengths.

## How to use

**Getting one.** Constructed by the option system from a `ManagedOptionsType`. To read a selection option's value, still go through `ManagedOptions.GetConfig`, which returns every option as a `float` (`ManagedOptions.cs:13`); this class only supplies the metadata the settings widget needs.

**Typical use** — asking what a dropdown should contain:

```csharp
using System.Collections.Generic;
using TaleWorlds.Engine.Options;
using TaleWorlds.MountAndBlade;
using TaleWorlds.MountAndBlade.Options.ManagedOptions;

public static class MyDropdown
{
    public static bool TryBuild(ManagedOptions.ManagedOptionsType type,
        out List<string> labels, out int currentIndex)
    {
        labels = new List<string>();
        currentIndex = -1;

        // Constructs and resolves limit + names once.
        ManagedSelectionOptionData option = new ManagedSelectionOptionData(type);

        int limit = option.GetSelectableOptionsLimit();
        if (limit <= 0)
        {
            // 0 means "not a selection option" (ManagedSelectionOptionData.cs:89).
            return false;
        }

        foreach (SelectionData entry in option.GetSelectableOptionNames())
        {
            labels.Add(entry.Data);
        }

        // Every option reads back as a float.
        currentIndex = (int)ManagedOptions.GetConfig(type);
        return true;
    }
}
```

`ManagedOptions.GetConfig(ManagedOptionsType)` is the value accessor (`ManagedOptions.cs:13`); `GetOptionsLimit` and `GetOptionNames` are the two static helpers this class calls at construction (`ManagedSelectionOptionData.cs:15`).

**Most common mistake:** expecting `GetOptionNames` to return human-readable text for a custom option.

```csharp
var option = new ManagedSelectionOptionData(ManagedOptions.ManagedOptionsType.BattleSize);
foreach (SelectionData e in option.GetSelectableOptionNames())
{
    Debug.WriteLine(e.Data);   // "str_options_type_BattleSize_0", not "Small"
}
```

For every non-language option the returned `Data` is a **text key** assembled from the enum's own `ToString()` (`ManagedSelectionOptionData.cs:124`), so what comes back is `str_options_type_BattleSize_0` and not a display string. Log or display it and you show players raw keys; the localisation step belongs to the option widget, which is not part of this class. Localise it yourself with `GameTexts.FindText`, or drive the settings screen, as in the example.

## Key Methods

### GetSelectableOptionsLimit
`public int GetSelectableOptionsLimit()`

**Purpose:** Reads and returns the selectable options limit value held by the this instance.

```csharp
// Obtain an instance of ManagedSelectionOptionData from the subsystem API first
ManagedSelectionOptionData managedSelectionOptionData = ...;
var result = managedSelectionOptionData.GetSelectableOptionsLimit();
```

### GetSelectableOptionNames
`public IEnumerable<SelectionData> GetSelectableOptionNames()`

**Purpose:** Reads and returns the selectable option names value held by the this instance.

```csharp
// Obtain an instance of ManagedSelectionOptionData from the subsystem API first
ManagedSelectionOptionData managedSelectionOptionData = ...;
var result = managedSelectionOptionData.GetSelectableOptionNames();
```

### GetOptionsLimit
`public static int GetOptionsLimit(ManagedOptions.ManagedOptionsType optionType)`

**Purpose:** Reads and returns the options limit value held by the this instance.

```csharp
// Static call; no instance required
ManagedSelectionOptionData.GetOptionsLimit(optionType);
```

## Usage Example

```csharp
// This data object is usually returned by campaign/mission APIs
ManagedSelectionOptionData entry = ...;
```

## See Also

- [Area Index](../)
- [ManagedBooleanOptionData — the other option shape, which adds nothing over the base](../ManagedBooleanOptionData)
- [ManagedOptions — where every option's value is read and written](../ManagedOptions)
- [中文页面](../../../../zh/api/mission-ext/ManagedSelectionOptionData)