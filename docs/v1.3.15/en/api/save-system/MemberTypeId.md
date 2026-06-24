<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `MemberTypeId`
- [← Area / Back to save-system](./)
- [↑ API Index](../)
- [🏠 Home v1.3.15](../../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# MemberTypeId

**Namespace:** TaleWorlds.SaveSystem.Definition
**Module:** TaleWorlds.SaveSystem
**Type:** `public struct MemberTypeId`
**Area:** save-system

## Overview

`MemberTypeId` lives in `TaleWorlds.SaveSystem.Definition`, and its public surface shows that it acts as a formal extension or data entry point for this subsystem.

## Mental Model

Start from namespace `TaleWorlds.SaveSystem.Definition` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `SaveId` | `public short SaveId { get; }` |
| `Invalid` | `public static MemberTypeId Invalid { get; }` |

## Key Methods

### ToString
`public override string ToString()`

**Purpose:** Handles logic related to `to string`.

### Equals
`public override bool Equals(object obj)`

**Purpose:** Handles logic related to `equals`.

### GetHashCode
`public override int GetHashCode()`

**Purpose:** Gets the current value of `hash code`.

## Usage Example

```csharp
// First obtain a MemberTypeId instance from game state, then call one of its public methods
var value = new MemberTypeId();
value.ToString();
```

## See Also

- [Complete Class Catalog](../catalog)
- [Area catalog](../catalog-save)
