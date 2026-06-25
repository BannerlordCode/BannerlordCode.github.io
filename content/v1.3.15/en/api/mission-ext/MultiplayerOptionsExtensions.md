---
title: "MultiplayerOptionsExtensions"
description: "Auto-generated class reference for MultiplayerOptionsExtensions."
---
# MultiplayerOptionsExtensions

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** `public static class MultiplayerOptionsExtensions`
**Base:** none
**File:** `TaleWorlds.MountAndBlade/MultiplayerOptionsExtensions.cs`

## Overview

`MultiplayerOptionsExtensions` lives in `TaleWorlds.MountAndBlade` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.MountAndBlade` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Methods

### GetValueText
`public static string GetValueText(this MultiplayerOptions.OptionType optionType, MultiplayerOptions.MultiplayerOptionsAccessMode mode = MultiplayerOptions.MultiplayerOptionsAccessMode.CurrentMapOptions)`

**Purpose:** **Purpose:** Reads and returns the value text value held by the this instance.

```csharp
// Static call; no instance required
MultiplayerOptionsExtensions.GetValueText(optionType, multiplayerOptions.MultiplayerOptionsAccessMode.CurrentMapOptions);
```

### GetBoolValue
`public static bool GetBoolValue(this MultiplayerOptions.OptionType optionType, MultiplayerOptions.MultiplayerOptionsAccessMode mode = MultiplayerOptions.MultiplayerOptionsAccessMode.CurrentMapOptions)`

**Purpose:** **Purpose:** Reads and returns the bool value value held by the this instance.

```csharp
// Static call; no instance required
MultiplayerOptionsExtensions.GetBoolValue(optionType, multiplayerOptions.MultiplayerOptionsAccessMode.CurrentMapOptions);
```

### GetIntValue
`public static int GetIntValue(this MultiplayerOptions.OptionType optionType, MultiplayerOptions.MultiplayerOptionsAccessMode mode = MultiplayerOptions.MultiplayerOptionsAccessMode.CurrentMapOptions)`

**Purpose:** **Purpose:** Reads and returns the int value value held by the this instance.

```csharp
// Static call; no instance required
MultiplayerOptionsExtensions.GetIntValue(optionType, multiplayerOptions.MultiplayerOptionsAccessMode.CurrentMapOptions);
```

### GetStrValue
`public static string GetStrValue(this MultiplayerOptions.OptionType optionType, MultiplayerOptions.MultiplayerOptionsAccessMode mode = MultiplayerOptions.MultiplayerOptionsAccessMode.CurrentMapOptions)`

**Purpose:** **Purpose:** Reads and returns the str value value held by the this instance.

```csharp
// Static call; no instance required
MultiplayerOptionsExtensions.GetStrValue(optionType, multiplayerOptions.MultiplayerOptionsAccessMode.CurrentMapOptions);
```

### SetValue
`public static void SetValue(this MultiplayerOptions.OptionType optionType, bool value, MultiplayerOptions.MultiplayerOptionsAccessMode mode = MultiplayerOptions.MultiplayerOptionsAccessMode.CurrentMapOptions)`

**Purpose:** **Purpose:** Assigns a new value to value and updates the object's internal state.

```csharp
// Static call; no instance required
MultiplayerOptionsExtensions.SetValue(optionType, false, multiplayerOptions.MultiplayerOptionsAccessMode.CurrentMapOptions);
```

### SetValue
`public static void SetValue(this MultiplayerOptions.OptionType optionType, int value, MultiplayerOptions.MultiplayerOptionsAccessMode mode = MultiplayerOptions.MultiplayerOptionsAccessMode.CurrentMapOptions)`

**Purpose:** **Purpose:** Assigns a new value to value and updates the object's internal state.

```csharp
// Static call; no instance required
MultiplayerOptionsExtensions.SetValue(optionType, 0, multiplayerOptions.MultiplayerOptionsAccessMode.CurrentMapOptions);
```

### SetValue
`public static void SetValue(this MultiplayerOptions.OptionType optionType, string value, MultiplayerOptions.MultiplayerOptionsAccessMode mode = MultiplayerOptions.MultiplayerOptionsAccessMode.CurrentMapOptions)`

**Purpose:** **Purpose:** Assigns a new value to value and updates the object's internal state.

```csharp
// Static call; no instance required
MultiplayerOptionsExtensions.SetValue(optionType, "example", multiplayerOptions.MultiplayerOptionsAccessMode.CurrentMapOptions);
```

### GetMinimumValue
`public static int GetMinimumValue(this MultiplayerOptions.OptionType optionType)`

**Purpose:** **Purpose:** Reads and returns the minimum value value held by the this instance.

```csharp
// Static call; no instance required
MultiplayerOptionsExtensions.GetMinimumValue(optionType);
```

### GetMaximumValue
`public static int GetMaximumValue(this MultiplayerOptions.OptionType optionType)`

**Purpose:** **Purpose:** Reads and returns the maximum value value held by the this instance.

```csharp
// Static call; no instance required
MultiplayerOptionsExtensions.GetMaximumValue(optionType);
```

### GetOptionProperty
`public static MultiplayerOptionsProperty GetOptionProperty(this MultiplayerOptions.OptionType optionType)`

**Purpose:** **Purpose:** Reads and returns the option property value held by the this instance.

```csharp
// Static call; no instance required
MultiplayerOptionsExtensions.GetOptionProperty(optionType);
```

## Usage Example

```csharp
MultiplayerOptionsExtensions.GetValueText(optionType, multiplayerOptions.MultiplayerOptionsAccessMode.CurrentMapOptions);
```

## See Also

- [Area Index](../)