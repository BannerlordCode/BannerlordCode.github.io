---
title: "UnsignedInteger"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `UnsignedInteger`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.3.0](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# UnsignedInteger

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** `public struct UnsignedInteger`
**Base:** none
**File:** `TaleWorlds.MountAndBlade/CompressionInfo.cs`

## Overview

`UnsignedInteger` lives in `TaleWorlds.MountAndBlade` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.MountAndBlade` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Methods

### GetNumBits
`public int GetNumBits()`

**Purpose:** Gets the current value of `num bits`.

## Usage Example

```csharp
var value = new UnsignedInteger();
value.GetNumBits();
```

## See Also

- [Complete Class Catalog](../catalog)