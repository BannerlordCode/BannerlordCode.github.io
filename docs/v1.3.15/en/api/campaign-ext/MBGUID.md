<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `MBGUID`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.3.15](../../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# MBGUID

**Namespace:** TaleWorlds.ObjectSystem
**Module:** TaleWorlds.ObjectSystem
**Type:** `public struct MBGUID : IComparable, IEquatable<MBGUID>`
**Base:** `IComparable`
**Area:** campaign-ext

## Overview

`MBGUID` lives in `TaleWorlds.ObjectSystem`, and its public surface shows that it acts as a formal extension or data entry point for this subsystem.

## Mental Model

Start from namespace `TaleWorlds.ObjectSystem` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `InternalValue` | `public uint InternalValue { get; }` |
| `SubId` | `public uint SubId { get; }` |

## Key Methods

### GetHash2
`public static long GetHash2(MBGUID id1, MBGUID id2)`

**Purpose:** Gets the current value of `hash2`.

### CompareTo
`public int CompareTo(object a)`

**Purpose:** Handles logic related to `compare to`.

### GetTypeIndex
`public uint GetTypeIndex()`

**Purpose:** Gets the current value of `type index`.

### GetHashCode
`public override int GetHashCode()`

**Purpose:** Gets the current value of `hash code`.

### ToString
`public override string ToString()`

**Purpose:** Handles logic related to `to string`.

### Equals
`public override bool Equals(object obj)`

**Purpose:** Handles logic related to `equals`.

### Equals
`public bool Equals(MBGUID other)`

**Purpose:** Handles logic related to `equals`.

## Usage Example

```csharp
// Prepare the required context, then call the static entry point directly
MBGUID.GetHash2(id1, id2);
```

## See Also

- [Complete Class Catalog](../catalog)
- [Area catalog](../catalog-campaign)
