---
title: "NativeNumericOptionData"
description: "Auto-generated class reference for NativeNumericOptionData."
---
# NativeNumericOptionData

**Namespace:** TaleWorlds.Engine.Options
**Module:** TaleWorlds.Engine
**Type:** `public class NativeNumericOptionData : NativeOptionData, INumericOptionData, IOptionData`
**Base:** `NativeOptionData`
**File:** `bin/TaleWorlds.Engine/TaleWorlds.Engine.Options/NativeNumericOptionData.cs`

## Overview

`NativeNumericOptionData` behaves like a data carrier: it packages fields so systems can exchange state in a structured form.

## Mental Model

Treat `NativeNumericOptionData` as a Data-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Methods

### GetMinValue
`public float GetMinValue()`

**Purpose:** Reads and returns the `min value` value held by the current object.

```csharp
// Obtain an instance of NativeNumericOptionData from the subsystem API first
NativeNumericOptionData nativeNumericOptionData = ...;
var result = nativeNumericOptionData.GetMinValue();
```

### GetMaxValue
`public float GetMaxValue()`

**Purpose:** Reads and returns the `max value` value held by the current object.

```csharp
// Obtain an instance of NativeNumericOptionData from the subsystem API first
NativeNumericOptionData nativeNumericOptionData = ...;
var result = nativeNumericOptionData.GetMaxValue();
```

### GetIsDiscrete
`public bool GetIsDiscrete()`

**Purpose:** Reads and returns the `is discrete` value held by the current object.

```csharp
// Obtain an instance of NativeNumericOptionData from the subsystem API first
NativeNumericOptionData nativeNumericOptionData = ...;
var result = nativeNumericOptionData.GetIsDiscrete();
```

### GetDiscreteIncrementInterval
`public int GetDiscreteIncrementInterval()`

**Purpose:** Reads and returns the `discrete increment interval` value held by the current object.

```csharp
// Obtain an instance of NativeNumericOptionData from the subsystem API first
NativeNumericOptionData nativeNumericOptionData = ...;
var result = nativeNumericOptionData.GetDiscreteIncrementInterval();
```

### GetShouldUpdateContinuously
`public bool GetShouldUpdateContinuously()`

**Purpose:** Reads and returns the `should update continuously` value held by the current object.

```csharp
// Obtain an instance of NativeNumericOptionData from the subsystem API first
NativeNumericOptionData nativeNumericOptionData = ...;
var result = nativeNumericOptionData.GetShouldUpdateContinuously();
```

## Usage Example

```csharp
// This data object is usually returned by campaign/mission APIs
NativeNumericOptionData entry = ...;
```

## See Also

- [Area Index](../)