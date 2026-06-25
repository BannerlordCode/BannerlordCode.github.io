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

`ActionOptionData` behaves like a data carrier: it packages fields so systems can exchange state in a structured form.

## Mental Model

Treat `ActionOptionData` as a Data-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

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