---
title: "ManagedOptionData"
description: "Auto-generated class reference for ManagedOptionData."
---
# ManagedOptionData

**Namespace:** TaleWorlds.MountAndBlade.Options.ManagedOptions
**Module:** TaleWorlds.MountAndBlade
**Type:** `public abstract class ManagedOptionData : IOptionData`
**Base:** `IOptionData`
**File:** `TaleWorlds.MountAndBlade/Options/ManagedOptions/ManagedOptionData.cs`

## Overview

`ManagedOptionData` behaves like a data carrier: it packages fields so systems can exchange state in a structured form.

## Mental Model

Treat `ManagedOptionData` as a Data-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Methods

### GetDefaultValue
`public virtual float GetDefaultValue()`

**Purpose:** Reads and returns the default value value held by the this instance.

```csharp
// Obtain an instance of ManagedOptionData from the subsystem API first
ManagedOptionData managedOptionData = ...;
var result = managedOptionData.GetDefaultValue();
```

### Commit
`public void Commit()`

**Purpose:** Executes the Commit logic.

```csharp
// Obtain an instance of ManagedOptionData from the subsystem API first
ManagedOptionData managedOptionData = ...;
managedOptionData.Commit();
```

### GetValue
`public float GetValue(bool forceRefresh)`

**Purpose:** Reads and returns the value value held by the this instance.

```csharp
// Obtain an instance of ManagedOptionData from the subsystem API first
ManagedOptionData managedOptionData = ...;
var result = managedOptionData.GetValue(false);
```

### SetValue
`public void SetValue(float value)`

**Purpose:** Assigns a new value to value and updates the object's internal state.

```csharp
// Obtain an instance of ManagedOptionData from the subsystem API first
ManagedOptionData managedOptionData = ...;
managedOptionData.SetValue(0);
```

### GetOptionType
`public object GetOptionType()`

**Purpose:** Reads and returns the option type value held by the this instance.

```csharp
// Obtain an instance of ManagedOptionData from the subsystem API first
ManagedOptionData managedOptionData = ...;
var result = managedOptionData.GetOptionType();
```

### IsNative
`public bool IsNative()`

**Purpose:** Determines whether the this instance is in the native state or condition.

```csharp
// Obtain an instance of ManagedOptionData from the subsystem API first
ManagedOptionData managedOptionData = ...;
var result = managedOptionData.IsNative();
```

### IsAction
`public bool IsAction()`

**Purpose:** Determines whether the this instance is in the action state or condition.

```csharp
// Obtain an instance of ManagedOptionData from the subsystem API first
ManagedOptionData managedOptionData = ...;
var result = managedOptionData.IsAction();
```

### GetIsDisabledAndReasonID
`public ValueTuple<string, bool> GetIsDisabledAndReasonID()`

**Purpose:** Reads and returns the is disabled and reason i d value held by the this instance.

```csharp
// Obtain an instance of ManagedOptionData from the subsystem API first
ManagedOptionData managedOptionData = ...;
var result = managedOptionData.GetIsDisabledAndReasonID();
```

## Usage Example

```csharp
// Typically obtained from a subsystem API or factory
ManagedOptionData instance = ...;
```

## See Also

- [Area Index](../)