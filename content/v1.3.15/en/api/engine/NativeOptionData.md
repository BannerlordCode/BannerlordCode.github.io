---
title: "NativeOptionData"
description: "Auto-generated class reference for NativeOptionData."
---
# NativeOptionData

**Namespace:** TaleWorlds.Engine.Options
**Module:** TaleWorlds.Engine
**Type:** `public abstract class NativeOptionData : IOptionData`
**Base:** `IOptionData`
**File:** `TaleWorlds.Engine/Options/NativeOptionData.cs`

## Overview

`NativeOptionData` behaves like a data carrier: it packages fields so systems can exchange state in a structured form.

## Mental Model

Treat `NativeOptionData` as a Data-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Methods

### GetDefaultValue
`public virtual float GetDefaultValue()`

**Purpose:** **Purpose:** Reads and returns the default value value held by the this instance.

```csharp
// Obtain an instance of NativeOptionData from the subsystem API first
NativeOptionData nativeOptionData = ...;
var result = nativeOptionData.GetDefaultValue();
```

### Commit
`public void Commit()`

**Purpose:** **Purpose:** Executes the Commit logic.

```csharp
// Obtain an instance of NativeOptionData from the subsystem API first
NativeOptionData nativeOptionData = ...;
nativeOptionData.Commit();
```

### GetValue
`public float GetValue(bool forceRefresh)`

**Purpose:** **Purpose:** Reads and returns the value value held by the this instance.

```csharp
// Obtain an instance of NativeOptionData from the subsystem API first
NativeOptionData nativeOptionData = ...;
var result = nativeOptionData.GetValue(false);
```

### SetValue
`public void SetValue(float value)`

**Purpose:** **Purpose:** Assigns a new value to value and updates the object's internal state.

```csharp
// Obtain an instance of NativeOptionData from the subsystem API first
NativeOptionData nativeOptionData = ...;
nativeOptionData.SetValue(0);
```

### GetOptionType
`public object GetOptionType()`

**Purpose:** **Purpose:** Reads and returns the option type value held by the this instance.

```csharp
// Obtain an instance of NativeOptionData from the subsystem API first
NativeOptionData nativeOptionData = ...;
var result = nativeOptionData.GetOptionType();
```

### IsNative
`public bool IsNative()`

**Purpose:** **Purpose:** Determines whether the this instance is in the native state or condition.

```csharp
// Obtain an instance of NativeOptionData from the subsystem API first
NativeOptionData nativeOptionData = ...;
var result = nativeOptionData.IsNative();
```

### IsAction
`public bool IsAction()`

**Purpose:** **Purpose:** Determines whether the this instance is in the action state or condition.

```csharp
// Obtain an instance of NativeOptionData from the subsystem API first
NativeOptionData nativeOptionData = ...;
var result = nativeOptionData.IsAction();
```

### GetIsDisabledAndReasonID
`public ValueTuple<string, bool> GetIsDisabledAndReasonID()`

**Purpose:** **Purpose:** Reads and returns the is disabled and reason i d value held by the this instance.

```csharp
// Obtain an instance of NativeOptionData from the subsystem API first
NativeOptionData nativeOptionData = ...;
var result = nativeOptionData.GetIsDisabledAndReasonID();
```

## Usage Example

```csharp
// Typically obtained from a subsystem API or factory
NativeOptionData instance = ...;
```

## See Also

- [Area Index](../)