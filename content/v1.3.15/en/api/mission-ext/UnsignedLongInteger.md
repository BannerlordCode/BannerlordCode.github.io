---
title: "UnsignedLongInteger"
description: "Auto-generated class reference for UnsignedLongInteger."
---
# UnsignedLongInteger

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** `public struct UnsignedLongInteger`
**Base:** none
**File:** `TaleWorlds.MountAndBlade/CompressionInfo.cs`

## Overview

`UnsignedLongInteger` lives in `TaleWorlds.MountAndBlade` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.MountAndBlade` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Methods

### GetNumBits
`public int GetNumBits()`

**Purpose:** **Purpose:** Reads and returns the num bits value held by the this instance.

```csharp
// Obtain an instance of UnsignedLongInteger from the subsystem API first
UnsignedLongInteger unsignedLongInteger = ...;
var result = unsignedLongInteger.GetNumBits();
```

## Usage Example

```csharp
// Typically call this after obtaining an instance from the subsystem API
UnsignedLongInteger unsignedLongInteger = ...;
unsignedLongInteger.GetNumBits();
```

## See Also

- [Area Index](../)