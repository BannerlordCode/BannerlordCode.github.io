<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `DynamicBodyProperties`
- [← Area / Back to core-extra](./)
- [↑ API Index](../)
- [🏠 Home v1.3.15](../../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# DynamicBodyProperties

**Namespace:** TaleWorlds.Core
**Module:** TaleWorlds.Core
**Type:** `public struct DynamicBodyProperties`
**Base:** none
**File:** `TaleWorlds.Core/DynamicBodyProperties.cs`

## Overview

`DynamicBodyProperties` lives in `TaleWorlds.Core` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.Core` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Methods

### Equals
`public bool Equals(DynamicBodyProperties other)`

**Purpose:** Handles logic related to `equals`.

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
var value = new DynamicBodyProperties();
value.Equals(other);
```

## See Also

- [Complete Class Catalog](../catalog)