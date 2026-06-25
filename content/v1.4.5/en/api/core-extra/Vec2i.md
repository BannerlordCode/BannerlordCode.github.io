---
title: "Vec2i"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `Vec2i`
- [← Area / Back to core-extra](./)
- [↑ API Index](../)
- [🏠 Home v1.4.5](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# Vec2i

**Namespace:** TaleWorlds.Library
**Module:** TaleWorlds.Library
**Type:** `public struct Vec2i : IEquatable<Vec2i>`
**Base:** `IEquatable<Vec2i>`
**File:** `Bannerlord.Source/bin/TaleWorlds.Library/TaleWorlds.Library/Vec2i.cs`

## Overview

`Vec2i` lives in `TaleWorlds.Library` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.Library` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Methods

### Equals
`public override bool Equals(object obj)`

**Purpose:** Handles logic related to `equals`.

### Equals
`public bool Equals(Vec2i value)`

**Purpose:** Handles logic related to `equals`.

### GetHashCode
`public override int GetHashCode()`

**Purpose:** Gets the current value of `hash code`.

## Usage Example

```csharp
var value = new Vec2i();
value.Equals(obj);
```

## See Also

- [Complete Class Catalog](../catalog)