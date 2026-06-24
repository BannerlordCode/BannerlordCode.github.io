<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `JTokenEqualityComparer`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.4.5](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# JTokenEqualityComparer

**Namespace:** Newtonsoft.Json.Linq
**Module:** Newtonsoft.Json
**Type:** `public class JTokenEqualityComparer : IEqualityComparer<JToken>`
**Base:** `IEqualityComparer<JToken>`
**File:** `Bannerlord.Source/bin/Newtonsoft.Json/Newtonsoft.Json.Linq/JTokenEqualityComparer.cs`

## Overview

`JTokenEqualityComparer` lives in `Newtonsoft.Json.Linq` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `Newtonsoft.Json.Linq` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Methods

### Equals
`public bool Equals(JToken x, JToken y)`

**Purpose:** Handles logic related to `equals`.

### GetHashCode
`public int GetHashCode(JToken obj)`

**Purpose:** Gets the current value of `hash code`.

## Usage Example

```csharp
var value = new JTokenEqualityComparer();
value.Equals(x, y);
```

## See Also

- [Complete Class Catalog](../catalog)