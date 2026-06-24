<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `WeaponDesign`
- [← Area / Back to core-extra](./)
- [↑ API Index](../)
- [🏠 Home v1.3.0](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# WeaponDesign

**Namespace:** TaleWorlds.Core
**Module:** TaleWorlds.Core
**Type:** `public class WeaponDesign`
**Base:** none
**File:** `TaleWorlds.Core/WeaponDesign.cs`

## Overview

`WeaponDesign` lives in `TaleWorlds.Core` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.Core` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `WeaponName` | `public TextObject WeaponName { get; }` |
| `UsedPieces` | `public WeaponDesignElement UsedPieces { get; }` |
| `HashedCode` | `public string HashedCode { get; }` |
| `PiecePivotDistances` | `public float PiecePivotDistances { get; }` |
| `TotalLength` | `public float TotalLength { get; }` |
| `HandToBottomLength` | `public float HandToBottomLength { get; }` |
| `BottomPivotOffset` | `public float BottomPivotOffset { get; }` |

## Key Methods

### Equals
`public override bool Equals(object obj)`

**Purpose:** Handles logic related to `equals`.

### GetHashCode
`public override int GetHashCode()`

**Purpose:** Gets the current value of `hash code`.

## Usage Example

```csharp
var value = new WeaponDesign();
value.Equals(obj);
```

## See Also

- [Complete Class Catalog](../catalog)