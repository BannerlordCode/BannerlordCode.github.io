<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `LinearFrictionTerm`
- [← Area / Back to core-extra](./)
- [↑ API Index](../)
- [🏠 Home v1.3.15](../../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# LinearFrictionTerm

**Namespace:** TaleWorlds.Core
**Module:** TaleWorlds.Core
**Type:** `public struct LinearFrictionTerm`
**Base:** none
**File:** `TaleWorlds.Core/LinearFrictionTerm.cs`

## Overview

`LinearFrictionTerm` lives in `TaleWorlds.Core` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.Core` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `IsValid` | `public bool IsValid { get; }` |
| `Invalid` | `public static LinearFrictionTerm Invalid { get; }` |
| `One` | `public static LinearFrictionTerm One { get; }` |

## Key Methods

### ElementWiseProduct
`public LinearFrictionTerm ElementWiseProduct(LinearFrictionTerm o)`

**Purpose:** Handles logic related to `element wise product`.

## Usage Example

```csharp
var value = new LinearFrictionTerm();
value.ElementWiseProduct(o);
```

## See Also

- [Complete Class Catalog](../catalog)