---
title: "CompressionInfo"
description: "Auto-generated class reference for CompressionInfo."
---
# CompressionInfo

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class CompressionInfo`
**Base:** none
**File:** `TaleWorlds.MountAndBlade/CompressionInfo.cs`

## Overview

`CompressionInfo` lives in `TaleWorlds.MountAndBlade` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.MountAndBlade` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `FullPrecision` | `public static CompressionInfo.Float FullPrecision { get; }` |

## Key Methods

### GetNumBits
`public int GetNumBits()`

**Purpose:** Reads and returns the `num bits` value held by the current object.

```csharp
// Obtain an instance of CompressionInfo from the subsystem API first
CompressionInfo compressionInfo = ...;
var result = compressionInfo.GetNumBits();
```

### GetMaximumValue
`public int GetMaximumValue()`

**Purpose:** Reads and returns the `maximum value` value held by the current object.

```csharp
// Obtain an instance of CompressionInfo from the subsystem API first
CompressionInfo compressionInfo = ...;
var result = compressionInfo.GetMaximumValue();
```

### GetNumBits
`public int GetNumBits()`

**Purpose:** Reads and returns the `num bits` value held by the current object.

```csharp
// Obtain an instance of CompressionInfo from the subsystem API first
CompressionInfo compressionInfo = ...;
var result = compressionInfo.GetNumBits();
```

### GetNumBits
`public int GetNumBits()`

**Purpose:** Reads and returns the `num bits` value held by the current object.

```csharp
// Obtain an instance of CompressionInfo from the subsystem API first
CompressionInfo compressionInfo = ...;
var result = compressionInfo.GetNumBits();
```

### GetNumBits
`public int GetNumBits()`

**Purpose:** Reads and returns the `num bits` value held by the current object.

```csharp
// Obtain an instance of CompressionInfo from the subsystem API first
CompressionInfo compressionInfo = ...;
var result = compressionInfo.GetNumBits();
```

### GetNumBits
`public int GetNumBits()`

**Purpose:** Reads and returns the `num bits` value held by the current object.

```csharp
// Obtain an instance of CompressionInfo from the subsystem API first
CompressionInfo compressionInfo = ...;
var result = compressionInfo.GetNumBits();
```

### GetMaximumValue
`public float GetMaximumValue()`

**Purpose:** Reads and returns the `maximum value` value held by the current object.

```csharp
// Obtain an instance of CompressionInfo from the subsystem API first
CompressionInfo compressionInfo = ...;
var result = compressionInfo.GetMaximumValue();
```

### GetMinimumValue
`public float GetMinimumValue()`

**Purpose:** Reads and returns the `minimum value` value held by the current object.

```csharp
// Obtain an instance of CompressionInfo from the subsystem API first
CompressionInfo compressionInfo = ...;
var result = compressionInfo.GetMinimumValue();
```

### GetPrecision
`public float GetPrecision()`

**Purpose:** Reads and returns the `precision` value held by the current object.

```csharp
// Obtain an instance of CompressionInfo from the subsystem API first
CompressionInfo compressionInfo = ...;
var result = compressionInfo.GetPrecision();
```

### ClampValueAccordingToLimits
`public void ClampValueAccordingToLimits(ref float x)`

**Purpose:** Performs the operation described by this method.

```csharp
// Obtain an instance of CompressionInfo from the subsystem API first
CompressionInfo compressionInfo = ...;
compressionInfo.ClampValueAccordingToLimits(x);
```

## Usage Example

```csharp
// Typically call this after obtaining an instance from the subsystem API
CompressionInfo compressionInfo = ...;
compressionInfo.GetNumBits();
```

## See Also

- [Area Index](../)