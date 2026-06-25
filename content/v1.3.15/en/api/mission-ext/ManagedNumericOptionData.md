---
title: "ManagedNumericOptionData"
description: "Auto-generated class reference for ManagedNumericOptionData."
---
# ManagedNumericOptionData

**Namespace:** TaleWorlds.MountAndBlade.Options.ManagedOptions
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class ManagedNumericOptionData : ManagedOptionData, INumericOptionData, IOptionData`
**Base:** `ManagedOptionData`
**File:** `TaleWorlds.MountAndBlade/Options/ManagedOptions/ManagedNumericOptionData.cs`

## Overview

`ManagedNumericOptionData` behaves like a data carrier: it packages fields so systems can exchange state in a structured form.

## Mental Model

Treat `ManagedNumericOptionData` as a Data-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Methods

### GetMinValue
`public float GetMinValue()`

**Purpose:** Reads and returns the `min value` value held by the current object.

```csharp
// Obtain an instance of ManagedNumericOptionData from the subsystem API first
ManagedNumericOptionData managedNumericOptionData = ...;
var result = managedNumericOptionData.GetMinValue();
```

### GetMaxValue
`public float GetMaxValue()`

**Purpose:** Reads and returns the `max value` value held by the current object.

```csharp
// Obtain an instance of ManagedNumericOptionData from the subsystem API first
ManagedNumericOptionData managedNumericOptionData = ...;
var result = managedNumericOptionData.GetMaxValue();
```

### GetIsDiscrete
`public bool GetIsDiscrete()`

**Purpose:** Reads and returns the `is discrete` value held by the current object.

```csharp
// Obtain an instance of ManagedNumericOptionData from the subsystem API first
ManagedNumericOptionData managedNumericOptionData = ...;
var result = managedNumericOptionData.GetIsDiscrete();
```

### GetDiscreteIncrementInterval
`public int GetDiscreteIncrementInterval()`

**Purpose:** Reads and returns the `discrete increment interval` value held by the current object.

```csharp
// Obtain an instance of ManagedNumericOptionData from the subsystem API first
ManagedNumericOptionData managedNumericOptionData = ...;
var result = managedNumericOptionData.GetDiscreteIncrementInterval();
```

### GetShouldUpdateContinuously
`public bool GetShouldUpdateContinuously()`

**Purpose:** Reads and returns the `should update continuously` value held by the current object.

```csharp
// Obtain an instance of ManagedNumericOptionData from the subsystem API first
ManagedNumericOptionData managedNumericOptionData = ...;
var result = managedNumericOptionData.GetShouldUpdateContinuously();
```

## Usage Example

```csharp
// This data object is usually returned by campaign/mission APIs
ManagedNumericOptionData entry = ...;
```

## See Also

- [Area Index](../)