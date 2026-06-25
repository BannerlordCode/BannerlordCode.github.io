---
title: "PlayerSessionId"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `PlayerSessionId`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.4.5](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# PlayerSessionId

**Namespace:** TaleWorlds.MountAndBlade.Diamond
**Module:** TaleWorlds.MountAndBlade
**Type:** `public struct PlayerSessionId`
**Base:** none
**File:** `Bannerlord.Source/bin/TaleWorlds.MountAndBlade.Diamond/TaleWorlds.MountAndBlade.Diamond/PlayerSessionId.cs`

## Overview

`PlayerSessionId` lives in `TaleWorlds.MountAndBlade.Diamond` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.MountAndBlade.Diamond` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `Guid` | `public Guid Guid { get; }` |

## Key Methods

### NewGuid
`public static PlayerSessionId NewGuid()`

**Purpose:** Handles logic related to `new guid`.

### ToString
`public override string ToString()`

**Purpose:** Handles logic related to `to string`.

### ToByteArray
`public byte ToByteArray()`

**Purpose:** Handles logic related to `to byte array`.

### Equals
`public override bool Equals(object o)`

**Purpose:** Handles logic related to `equals`.

### GetHashCode
`public override int GetHashCode()`

**Purpose:** Gets the current value of `hash code`.

## Usage Example

```csharp
PlayerSessionId.NewGuid();
```

## See Also

- [Complete Class Catalog](../catalog)