---
title: "UnsignedInteger"
description: "Auto-generated class reference for UnsignedInteger."
---
# UnsignedInteger

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** `public struct UnsignedInteger`
**Base:** none
**File:** `bin/TaleWorlds.MountAndBlade/TaleWorlds.MountAndBlade/CompressionInfo.cs`

## Overview

`UnsignedInteger` lives in `TaleWorlds.MountAndBlade` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.MountAndBlade` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Methods

### GetNumBits
`public int GetNumBits()`

**Purpose:** Reads and returns the num bits value held by the this instance.

```csharp
// Obtain an instance of UnsignedInteger from the subsystem API first
UnsignedInteger unsignedInteger = ...;
var result = unsignedInteger.GetNumBits();
```

## Usage Example

```csharp
// Typically call this after obtaining an instance from the subsystem API
UnsignedInteger unsignedInteger = ...;
unsignedInteger.GetNumBits();
```

## See Also

- [Area Index](../)