---
title: "ParameterContainer"
description: "Auto-generated class reference for ParameterContainer."
---
# ParameterContainer

**Namespace:** TaleWorlds.Library
**Module:** TaleWorlds.Library
**Type:** `public class ParameterContainer`
**Base:** none
**File:** `bin/TaleWorlds.Library/TaleWorlds.Library/ParameterContainer.cs`

## Overview

`ParameterContainer` lives in `TaleWorlds.Library` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.Library` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Methods

### AddParameter
`public void AddParameter(string key, string value, bool overwriteIfExists)`

**Purpose:** Adds parameter to the current collection or state.

```csharp
// Obtain an instance of ParameterContainer from the subsystem API first
ParameterContainer parameterContainer = ...;
parameterContainer.AddParameter("example", "example", false);
```

### AddParameterConcurrent
`public void AddParameterConcurrent(string key, string value, bool overwriteIfExists)`

**Purpose:** Adds parameter concurrent to the current collection or state.

```csharp
// Obtain an instance of ParameterContainer from the subsystem API first
ParameterContainer parameterContainer = ...;
parameterContainer.AddParameterConcurrent("example", "example", false);
```

### AddParametersConcurrent
`public void AddParametersConcurrent(IEnumerable<KeyValuePair<string, string>> parameters, bool overwriteIfExists)`

**Purpose:** Adds parameters concurrent to the current collection or state.

```csharp
// Obtain an instance of ParameterContainer from the subsystem API first
ParameterContainer parameterContainer = ...;
parameterContainer.AddParametersConcurrent(iEnumerable<KeyValuePair<string, "example", false);
```

### ClearParameters
`public void ClearParameters()`

**Purpose:** Removes all parameters from the this instance.

```csharp
// Obtain an instance of ParameterContainer from the subsystem API first
ParameterContainer parameterContainer = ...;
parameterContainer.ClearParameters();
```

### TryGetParameter
`public bool TryGetParameter(string key, out string outValue)`

**Purpose:** Attempts to retrieve get parameter, usually returning success through an out parameter.

```csharp
// Obtain an instance of ParameterContainer from the subsystem API first
ParameterContainer parameterContainer = ...;
var result = parameterContainer.TryGetParameter("example", outValue);
```

### TryGetParameterAsBool
`public bool TryGetParameterAsBool(string key, out bool outValue)`

**Purpose:** Attempts to retrieve get parameter as bool, usually returning success through an out parameter.

```csharp
// Obtain an instance of ParameterContainer from the subsystem API first
ParameterContainer parameterContainer = ...;
var result = parameterContainer.TryGetParameterAsBool("example", outValue);
```

### TryGetParameterAsInt
`public bool TryGetParameterAsInt(string key, out int outValue)`

**Purpose:** Attempts to retrieve get parameter as int, usually returning success through an out parameter.

```csharp
// Obtain an instance of ParameterContainer from the subsystem API first
ParameterContainer parameterContainer = ...;
var result = parameterContainer.TryGetParameterAsInt("example", outValue);
```

### TryGetParameterAsUInt16
`public bool TryGetParameterAsUInt16(string key, out ushort outValue)`

**Purpose:** Attempts to retrieve get parameter as u int16, usually returning success through an out parameter.

```csharp
// Obtain an instance of ParameterContainer from the subsystem API first
ParameterContainer parameterContainer = ...;
var result = parameterContainer.TryGetParameterAsUInt16("example", outValue);
```

### TryGetParameterAsFloat
`public bool TryGetParameterAsFloat(string key, out float outValue)`

**Purpose:** Attempts to retrieve get parameter as float, usually returning success through an out parameter.

```csharp
// Obtain an instance of ParameterContainer from the subsystem API first
ParameterContainer parameterContainer = ...;
var result = parameterContainer.TryGetParameterAsFloat("example", outValue);
```

### TryGetParameterAsByte
`public bool TryGetParameterAsByte(string key, out byte outValue)`

**Purpose:** Attempts to retrieve get parameter as byte, usually returning success through an out parameter.

```csharp
// Obtain an instance of ParameterContainer from the subsystem API first
ParameterContainer parameterContainer = ...;
var result = parameterContainer.TryGetParameterAsByte("example", outValue);
```

### TryGetParameterAsSByte
`public bool TryGetParameterAsSByte(string key, out sbyte outValue)`

**Purpose:** Attempts to retrieve get parameter as s byte, usually returning success through an out parameter.

```csharp
// Obtain an instance of ParameterContainer from the subsystem API first
ParameterContainer parameterContainer = ...;
var result = parameterContainer.TryGetParameterAsSByte("example", outValue);
```

### TryGetParameterAsVec3
`public bool TryGetParameterAsVec3(string key, out Vec3 outValue)`

**Purpose:** Attempts to retrieve get parameter as vec3, usually returning success through an out parameter.

```csharp
// Obtain an instance of ParameterContainer from the subsystem API first
ParameterContainer parameterContainer = ...;
var result = parameterContainer.TryGetParameterAsVec3("example", outValue);
```

### TryGetParameterAsVec2
`public bool TryGetParameterAsVec2(string key, out Vec2 outValue)`

**Purpose:** Attempts to retrieve get parameter as vec2, usually returning success through an out parameter.

```csharp
// Obtain an instance of ParameterContainer from the subsystem API first
ParameterContainer parameterContainer = ...;
var result = parameterContainer.TryGetParameterAsVec2("example", outValue);
```

### GetParameter
`public string GetParameter(string key)`

**Purpose:** Reads and returns the parameter value held by the this instance.

```csharp
// Obtain an instance of ParameterContainer from the subsystem API first
ParameterContainer parameterContainer = ...;
var result = parameterContainer.GetParameter("example");
```

### Clone
`public ParameterContainer Clone()`

**Purpose:** Duplicates the this instance's state and returns a new instance.

```csharp
// Obtain an instance of ParameterContainer from the subsystem API first
ParameterContainer parameterContainer = ...;
var result = parameterContainer.Clone();
```

## Usage Example

```csharp
// Typically call this after obtaining an instance from the subsystem API
ParameterContainer parameterContainer = ...;
parameterContainer.AddParameter("example", "example", false);
```

## See Also

- [Area Index](../)