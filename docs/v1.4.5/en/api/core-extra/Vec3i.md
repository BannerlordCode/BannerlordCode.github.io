<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `Vec3i`
- [← Area / Back to core-extra](./)
- [↑ API Index](../)
- [🏠 Home v1.4.5](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# Vec3i

**Namespace:** TaleWorlds.Library
**Module:** TaleWorlds.Library
**Type:** `public struct Vec3i`
**Base:** none
**File:** `Bannerlord.Source/bin/TaleWorlds.Library/TaleWorlds.Library/Vec3i.cs`

## Overview

`Vec3i` lives in `TaleWorlds.Library` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.Library` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `this` | `public int this { get; set; }` |

## Key Methods

### Vec3i
`public struct Vec3i(int x = 0, int y = 0, int z = 0)`

**Purpose:** Handles logic related to `vec3i`.

### ToVec3
`public Vec3 ToVec3()`

**Purpose:** Handles logic related to `to vec3`.

### Equals
`public override bool Equals(object obj)`

**Purpose:** Handles logic related to `equals`.

### GetHashCode
`public override int GetHashCode()`

**Purpose:** Gets the current value of `hash code`.

### ToString
`public override string ToString()`

**Purpose:** Handles logic related to `to string`.

## Usage Example

```csharp
var value = new Vec3i();
value.Vec3i(0, 0, 0);
```

## See Also

- [Complete Class Catalog](../catalog)