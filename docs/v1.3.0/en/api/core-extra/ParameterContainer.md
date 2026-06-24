<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `ParameterContainer`
- [← Area / Back to core-extra](./)
- [↑ API Index](../)
- [🏠 Home v1.3.0](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# ParameterContainer

**Namespace:** TaleWorlds.Library
**Module:** TaleWorlds.Library
**Type:** `public class ParameterContainer`
**Base:** none
**File:** `TaleWorlds.Library/ParameterContainer.cs`

## Overview

`ParameterContainer` lives in `TaleWorlds.Library` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.Library` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `Iterator` | `public IEnumerable<KeyValuePair<string, string>> Iterator { get; }` |

## Key Methods

### AddParameter
`public void AddParameter(string key, string value, bool overwriteIfExists)`

**Purpose:** Adds `parameter` to the current collection or state.

### AddParameterConcurrent
`public void AddParameterConcurrent(string key, string value, bool overwriteIfExists)`

**Purpose:** Adds `parameter concurrent` to the current collection or state.

### AddParametersConcurrent
`public void AddParametersConcurrent(IEnumerable<KeyValuePair<string, string>> parameters, bool overwriteIfExists)`

**Purpose:** Adds `parameters concurrent` to the current collection or state.

### ClearParameters
`public void ClearParameters()`

**Purpose:** Handles logic related to `clear parameters`.

### TryGetParameter
`public bool TryGetParameter(string key, out string outValue)`

**Purpose:** Attempts to get `get parameter`, usually returning the result in an out parameter.

### TryGetParameterAsBool
`public bool TryGetParameterAsBool(string key, out bool outValue)`

**Purpose:** Attempts to get `get parameter as bool`, usually returning the result in an out parameter.

### TryGetParameterAsInt
`public bool TryGetParameterAsInt(string key, out int outValue)`

**Purpose:** Attempts to get `get parameter as int`, usually returning the result in an out parameter.

### TryGetParameterAsUInt16
`public bool TryGetParameterAsUInt16(string key, out ushort outValue)`

**Purpose:** Attempts to get `get parameter as u int16`, usually returning the result in an out parameter.

### TryGetParameterAsFloat
`public bool TryGetParameterAsFloat(string key, out float outValue)`

**Purpose:** Attempts to get `get parameter as float`, usually returning the result in an out parameter.

### TryGetParameterAsByte
`public bool TryGetParameterAsByte(string key, out byte outValue)`

**Purpose:** Attempts to get `get parameter as byte`, usually returning the result in an out parameter.

### TryGetParameterAsSByte
`public bool TryGetParameterAsSByte(string key, out sbyte outValue)`

**Purpose:** Attempts to get `get parameter as s byte`, usually returning the result in an out parameter.

### TryGetParameterAsVec3
`public bool TryGetParameterAsVec3(string key, out Vec3 outValue)`

**Purpose:** Attempts to get `get parameter as vec3`, usually returning the result in an out parameter.

### TryGetParameterAsVec2
`public bool TryGetParameterAsVec2(string key, out Vec2 outValue)`

**Purpose:** Attempts to get `get parameter as vec2`, usually returning the result in an out parameter.

### GetParameter
`public string GetParameter(string key)`

**Purpose:** Gets the current value of `parameter`.

### Clone
`public ParameterContainer Clone()`

**Purpose:** Handles logic related to `clone`.

## Usage Example

```csharp
var value = new ParameterContainer();
value.AddParameter("example", "example", false);
```

## See Also

- [Complete Class Catalog](../catalog)