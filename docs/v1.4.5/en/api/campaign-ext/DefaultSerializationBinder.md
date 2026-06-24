<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `DefaultSerializationBinder`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.4.5](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# DefaultSerializationBinder

**Namespace:** Newtonsoft.Json.Serialization
**Module:** Newtonsoft.Json
**Type:** `public class DefaultSerializationBinder : SerializationBinder, ISerializationBinder`
**Base:** `SerializationBinder`
**File:** `Bannerlord.Source/bin/Newtonsoft.Json/Newtonsoft.Json.Serialization/DefaultSerializationBinder.cs`

## Overview

`DefaultSerializationBinder` lives in `Newtonsoft.Json.Serialization` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `Newtonsoft.Json.Serialization` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Methods

### BindToType
`public override Type BindToType(string? assemblyName, string typeName)`

**Purpose:** Handles logic related to `bind to type`.

### BindToName
`public override void BindToName(Type serializedType, out string? assemblyName, out string? typeName)`

**Purpose:** Handles logic related to `bind to name`.

## Usage Example

```csharp
var value = new DefaultSerializationBinder();
value.BindToType("example", "example");
```

## See Also

- [Complete Class Catalog](../catalog)