---
title: "AdminPanelOption"
description: "Auto-generated class reference for AdminPanelOption."
---
# AdminPanelOption

**Namespace:** TaleWorlds.MountAndBlade.Multiplayer.Admin
**Module:** TaleWorlds.MountAndBlade
**Type:** `internal class AdminPanelOption<T> : IAdminPanelOptionInternal<T>, IAdminPanelOptionInternal, IAdminPanelOption<T>, IAdminPanelOption`
**Base:** `IAdminPanelOptionInternal<T>`
**File:** `Modules.CustomBattle/TaleWorlds.MountAndBlade.Multiplayer/TaleWorlds.MountAndBlade.Multiplayer.Admin/AdminPanelOption.cs`

## Overview

`AdminPanelOption` lives in `TaleWorlds.MountAndBlade.Multiplayer.Admin` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.MountAndBlade.Multiplayer.Admin` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `CanRevertToDefaultValue` | `public bool CanRevertToDefaultValue { get; }` |

## Key Methods

### AddValueChangedCallback
`public void AddValueChangedCallback(Action callback)`

**Purpose:** Adds value changed callback to the current collection or state.

```csharp
// Obtain an instance of AdminPanelOption from the subsystem API first
AdminPanelOption adminPanelOption = ...;
adminPanelOption.AddValueChangedCallback(callback);
```

### RemoveValueChangedCallback
`public void RemoveValueChangedCallback(Action callback)`

**Purpose:** Removes value changed callback from the current collection or state.

```csharp
// Obtain an instance of AdminPanelOption from the subsystem API first
AdminPanelOption adminPanelOption = ...;
adminPanelOption.RemoveValueChangedCallback(callback);
```

### OnFinalize
`public virtual void OnFinalize()`

**Purpose:** Invoked when the finalize event is raised.

```csharp
// Obtain an instance of AdminPanelOption from the subsystem API first
AdminPanelOption adminPanelOption = ...;
adminPanelOption.OnFinalize();
```

### BuildOptionType
`public AdminPanelOption<T> BuildOptionType(OptionType optionType, MultiplayerOptionsAccessMode accessMode = (MultiplayerOptionsAccessMode)1, bool buildDefaultValue = true, bool buildInitialValue = true)`

**Purpose:** Assembles and returns the built result for option type.

```csharp
// Obtain an instance of AdminPanelOption from the subsystem API first
AdminPanelOption adminPanelOption = ...;
var result = adminPanelOption.BuildOptionType(optionType, (MultiplayerOptionsAccessMode)1, false, false);
```

### BuildIsRequired
`public AdminPanelOption<T> BuildIsRequired(bool isRequired)`

**Purpose:** Assembles and returns the built result for is required.

```csharp
// Obtain an instance of AdminPanelOption from the subsystem API first
AdminPanelOption adminPanelOption = ...;
var result = adminPanelOption.BuildIsRequired(false);
```

### BuildRequiresRestart
`public AdminPanelOption<T> BuildRequiresRestart(bool requiresRestart)`

**Purpose:** Assembles and returns the built result for requires restart.

```csharp
// Obtain an instance of AdminPanelOption from the subsystem API first
AdminPanelOption adminPanelOption = ...;
var result = adminPanelOption.BuildRequiresRestart(false);
```

### BuildName
`public AdminPanelOption<T> BuildName(TextObject name)`

**Purpose:** Assembles and returns the built result for name.

```csharp
// Obtain an instance of AdminPanelOption from the subsystem API first
AdminPanelOption adminPanelOption = ...;
var result = adminPanelOption.BuildName(name);
```

### BuildDescription
`public AdminPanelOption<T> BuildDescription(TextObject description)`

**Purpose:** Assembles and returns the built result for description.

```csharp
// Obtain an instance of AdminPanelOption from the subsystem API first
AdminPanelOption adminPanelOption = ...;
var result = adminPanelOption.BuildDescription(description);
```

### BuildInitialValue
`public AdminPanelOption<T> BuildInitialValue(T value)`

**Purpose:** Assembles and returns the built result for initial value.

```csharp
// Obtain an instance of AdminPanelOption from the subsystem API first
AdminPanelOption adminPanelOption = ...;
var result = adminPanelOption.BuildInitialValue(value);
```

### BuildDefaultValue
`public AdminPanelOption<T> BuildDefaultValue(T value)`

**Purpose:** Assembles and returns the built result for default value.

```csharp
// Obtain an instance of AdminPanelOption from the subsystem API first
AdminPanelOption adminPanelOption = ...;
var result = adminPanelOption.BuildDefaultValue(value);
```

### BuildOnAppliedCallback
`public AdminPanelOption<T> BuildOnAppliedCallback(Action<T> onApplied)`

**Purpose:** Assembles and returns the built result for on applied callback.

```csharp
// Obtain an instance of AdminPanelOption from the subsystem API first
AdminPanelOption adminPanelOption = ...;
var result = adminPanelOption.BuildOnAppliedCallback(onApplied);
```

### GetValue
`public T GetValue()`

**Purpose:** Reads and returns the value value held by the this instance.

```csharp
// Obtain an instance of AdminPanelOption from the subsystem API first
AdminPanelOption adminPanelOption = ...;
var result = adminPanelOption.GetValue();
```

### SetValue
`public void SetValue(T value)`

**Purpose:** Assigns a new value to value and updates the object's internal state.

```csharp
// Obtain an instance of AdminPanelOption from the subsystem API first
AdminPanelOption adminPanelOption = ...;
adminPanelOption.SetValue(value);
```

### GetIsAvailable
`public virtual bool GetIsAvailable()`

**Purpose:** Reads and returns the is available value held by the this instance.

```csharp
// Obtain an instance of AdminPanelOption from the subsystem API first
AdminPanelOption adminPanelOption = ...;
var result = adminPanelOption.GetIsAvailable();
```

### OnApplyChanges
`public void OnApplyChanges()`

**Purpose:** Invoked when the apply changes event is raised.

```csharp
// Obtain an instance of AdminPanelOption from the subsystem API first
AdminPanelOption adminPanelOption = ...;
adminPanelOption.OnApplyChanges();
```

### RevertChanges
`public void RevertChanges()`

**Purpose:** Executes the RevertChanges logic.

```csharp
// Obtain an instance of AdminPanelOption from the subsystem API first
AdminPanelOption adminPanelOption = ...;
adminPanelOption.RevertChanges();
```

### RestoreDefaults
`public void RestoreDefaults()`

**Purpose:** Executes the RestoreDefaults logic.

```csharp
// Obtain an instance of AdminPanelOption from the subsystem API first
AdminPanelOption adminPanelOption = ...;
adminPanelOption.RestoreDefaults();
```

### SetOnRefreshCallback
`public void SetOnRefreshCallback(Action callback)`

**Purpose:** Assigns a new value to on refresh callback and updates the object's internal state.

```csharp
// Obtain an instance of AdminPanelOption from the subsystem API first
AdminPanelOption adminPanelOption = ...;
adminPanelOption.SetOnRefreshCallback(callback);
```

### GetIsDisabled
`public virtual bool GetIsDisabled(out string reason)`

**Purpose:** Reads and returns the is disabled value held by the this instance.

```csharp
// Obtain an instance of AdminPanelOption from the subsystem API first
AdminPanelOption adminPanelOption = ...;
var result = adminPanelOption.GetIsDisabled(reason);
```

### GetOptionType
`public OptionType GetOptionType()`

**Purpose:** Reads and returns the option type value held by the this instance.

```csharp
// Obtain an instance of AdminPanelOption from the subsystem API first
AdminPanelOption adminPanelOption = ...;
var result = adminPanelOption.GetOptionType();
```

### GetOptionAccessMode
`public MultiplayerOptionsAccessMode GetOptionAccessMode()`

**Purpose:** Reads and returns the option access mode value held by the this instance.

```csharp
// Obtain an instance of AdminPanelOption from the subsystem API first
AdminPanelOption adminPanelOption = ...;
var result = adminPanelOption.GetOptionAccessMode();
```

## Usage Example

```csharp
// Typically call this after obtaining an instance from the subsystem API
AdminPanelOption adminPanelOption = ...;
adminPanelOption.AddValueChangedCallback(callback);
```

## See Also

- [Area Index](../)