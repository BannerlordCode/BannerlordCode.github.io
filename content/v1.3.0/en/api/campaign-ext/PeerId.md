---
title: "PeerId"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `PeerId`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.3.0](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# PeerId

**Namespace:** TaleWorlds.Diamond
**Module:** TaleWorlds.Diamond
**Type:** `public struct PeerId`
**Base:** none
**File:** `TaleWorlds.Diamond/PeerId.cs`

## Overview

`PeerId` lives in `TaleWorlds.Diamond` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.Diamond` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `IsValid` | `public bool IsValid { get; }` |
| `Empty` | `public static PeerId Empty { get; }` |

## Key Methods

### ToByteArray
`public byte ToByteArray()`

**Purpose:** Handles logic related to `to byte array`.

### ToString
`public override string ToString()`

**Purpose:** Handles logic related to `to string`.

### FromString
`public static PeerId FromString(string peerIdAsString)`

**Purpose:** Handles logic related to `from string`.

### Equals
`public override bool Equals(object o)`

**Purpose:** Handles logic related to `equals`.

### GetHashCode
`public override int GetHashCode()`

**Purpose:** Gets the current value of `hash code`.

## Usage Example

```csharp
var value = new PeerId();
value.ToByteArray();
```

## See Also

- [Complete Class Catalog](../catalog)