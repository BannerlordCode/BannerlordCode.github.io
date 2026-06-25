---
title: "SessionKey"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `SessionKey`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.4.5](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# SessionKey

**Namespace:** TaleWorlds.Diamond
**Module:** TaleWorlds.Diamond
**Type:** `public struct SessionKey`
**Base:** none
**File:** `Bannerlord.Source/bin/TaleWorlds.Diamond/TaleWorlds.Diamond/SessionKey.cs`

## Overview

`SessionKey` lives in `TaleWorlds.Diamond` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.Diamond` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Methods

### NewGuid
`public static SessionKey NewGuid()`

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
SessionKey.NewGuid();
```

## See Also

- [Complete Class Catalog](../catalog)