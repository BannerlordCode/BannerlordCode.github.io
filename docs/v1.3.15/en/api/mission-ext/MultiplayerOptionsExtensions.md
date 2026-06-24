<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `MultiplayerOptionsExtensions`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.3.15](../../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# MultiplayerOptionsExtensions

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** `public static class MultiplayerOptionsExtensions`
**Area:** mission-ext

## Overview

`MultiplayerOptionsExtensions` lives in `TaleWorlds.MountAndBlade`, and its public surface shows that it acts as a formal extension or data entry point for this subsystem.

## Mental Model

Start from namespace `TaleWorlds.MountAndBlade` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Methods

### GetValueText
`public static string GetValueText(this MultiplayerOptions.OptionType optionType, MultiplayerOptions.MultiplayerOptionsAccessMode mode = MultiplayerOptions.MultiplayerOptionsAccessMode.CurrentMapOptions)`

**Purpose:** Gets the current value of `value text`.

### GetBoolValue
`public static bool GetBoolValue(this MultiplayerOptions.OptionType optionType, MultiplayerOptions.MultiplayerOptionsAccessMode mode = MultiplayerOptions.MultiplayerOptionsAccessMode.CurrentMapOptions)`

**Purpose:** Gets the current value of `bool value`.

### GetIntValue
`public static int GetIntValue(this MultiplayerOptions.OptionType optionType, MultiplayerOptions.MultiplayerOptionsAccessMode mode = MultiplayerOptions.MultiplayerOptionsAccessMode.CurrentMapOptions)`

**Purpose:** Gets the current value of `int value`.

### GetStrValue
`public static string GetStrValue(this MultiplayerOptions.OptionType optionType, MultiplayerOptions.MultiplayerOptionsAccessMode mode = MultiplayerOptions.MultiplayerOptionsAccessMode.CurrentMapOptions)`

**Purpose:** Gets the current value of `str value`.

### SetValue
`public static void SetValue(this MultiplayerOptions.OptionType optionType, bool value, MultiplayerOptions.MultiplayerOptionsAccessMode mode = MultiplayerOptions.MultiplayerOptionsAccessMode.CurrentMapOptions)`

**Purpose:** Sets the value or state of `value`.

### SetValue
`public static void SetValue(this MultiplayerOptions.OptionType optionType, int value, MultiplayerOptions.MultiplayerOptionsAccessMode mode = MultiplayerOptions.MultiplayerOptionsAccessMode.CurrentMapOptions)`

**Purpose:** Sets the value or state of `value`.

### SetValue
`public static void SetValue(this MultiplayerOptions.OptionType optionType, string value, MultiplayerOptions.MultiplayerOptionsAccessMode mode = MultiplayerOptions.MultiplayerOptionsAccessMode.CurrentMapOptions)`

**Purpose:** Sets the value or state of `value`.

### GetMinimumValue
`public static int GetMinimumValue(this MultiplayerOptions.OptionType optionType)`

**Purpose:** Gets the current value of `minimum value`.

### GetMaximumValue
`public static int GetMaximumValue(this MultiplayerOptions.OptionType optionType)`

**Purpose:** Gets the current value of `maximum value`.

### GetOptionProperty
`public static MultiplayerOptionsProperty GetOptionProperty(this MultiplayerOptions.OptionType optionType)`

**Purpose:** Gets the current value of `option property`.

## Usage Example

```csharp
// Prepare the required context, then call the static entry point directly
MultiplayerOptionsExtensions.GetValueText(optionType, multiplayerOptions.MultiplayerOptionsAccessMode.CurrentMapOptions);
```

## See Also

- [Complete Class Catalog](../catalog)
- [Area catalog](../catalog-mountandblade)
