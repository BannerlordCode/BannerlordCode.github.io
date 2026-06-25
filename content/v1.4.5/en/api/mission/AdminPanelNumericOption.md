---
title: "AdminPanelNumericOption"
description: "Auto-generated class reference for AdminPanelNumericOption."
---
# AdminPanelNumericOption

**Namespace:** TaleWorlds.MountAndBlade.Multiplayer.Admin.Internal
**Module:** TaleWorlds.MountAndBlade
**Type:** `internal class AdminPanelNumericOption : AdminPanelOption<int>, IAdminPanelNumericOption, IAdminPanelOption<int>, IAdminPanelOption`
**Base:** `AdminPanelOption<int>`
**File:** `Modules.CustomBattle/TaleWorlds.MountAndBlade.Multiplayer/TaleWorlds.MountAndBlade.Multiplayer.Admin.Internal/AdminPanelNumericOption.cs`

## Overview

`AdminPanelNumericOption` lives in `TaleWorlds.MountAndBlade.Multiplayer.Admin.Internal` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.MountAndBlade.Multiplayer.Admin.Internal` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Methods

### SetMinimumValue
`public AdminPanelNumericOption SetMinimumValue(int value)`

**Purpose:** Assigns a new value to minimum value and updates the object's internal state.

```csharp
// Obtain an instance of AdminPanelNumericOption from the subsystem API first
AdminPanelNumericOption adminPanelNumericOption = ...;
var result = adminPanelNumericOption.SetMinimumValue(0);
```

### SetMaximumValue
`public AdminPanelNumericOption SetMaximumValue(int value)`

**Purpose:** Assigns a new value to maximum value and updates the object's internal state.

```csharp
// Obtain an instance of AdminPanelNumericOption from the subsystem API first
AdminPanelNumericOption adminPanelNumericOption = ...;
var result = adminPanelNumericOption.SetMaximumValue(0);
```

### SetMinimumAndMaximumFrom
`public AdminPanelNumericOption SetMinimumAndMaximumFrom(OptionType optionType)`

**Purpose:** Assigns a new value to minimum and maximum from and updates the object's internal state.

```csharp
// Obtain an instance of AdminPanelNumericOption from the subsystem API first
AdminPanelNumericOption adminPanelNumericOption = ...;
var result = adminPanelNumericOption.SetMinimumAndMaximumFrom(optionType);
```

### GetMinimumValue
`public int? GetMinimumValue()`

**Purpose:** Reads and returns the minimum value value held by the this instance.

```csharp
// Obtain an instance of AdminPanelNumericOption from the subsystem API first
AdminPanelNumericOption adminPanelNumericOption = ...;
var result = adminPanelNumericOption.GetMinimumValue();
```

### GetMaximumValue
`public int? GetMaximumValue()`

**Purpose:** Reads and returns the maximum value value held by the this instance.

```csharp
// Obtain an instance of AdminPanelNumericOption from the subsystem API first
AdminPanelNumericOption adminPanelNumericOption = ...;
var result = adminPanelNumericOption.GetMaximumValue();
```

## Usage Example

```csharp
// Typically call this after obtaining an instance from the subsystem API
AdminPanelNumericOption adminPanelNumericOption = ...;
adminPanelNumericOption.SetMinimumValue(0);
```

## See Also

- [Area Index](../)