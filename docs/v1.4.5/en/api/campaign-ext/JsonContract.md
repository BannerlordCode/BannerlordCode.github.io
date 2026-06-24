<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `JsonContract`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.4.5](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# JsonContract

**Namespace:** Newtonsoft.Json.Serialization
**Module:** Newtonsoft.Json
**Type:** `public abstract class JsonContract`
**Base:** none
**File:** `Bannerlord.Source/bin/Newtonsoft.Json/Newtonsoft.Json.Serialization/JsonContract.cs`

## Overview

`JsonContract` lives in `Newtonsoft.Json.Serialization` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `Newtonsoft.Json.Serialization` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `UnderlyingType` | `public Type UnderlyingType { get; set; }` |
| `CreatedType` | `public Type CreatedType { get; set; }` |
| `IsReference` | `public bool? IsReference { get; set; }` |
| `Converter` | `public JsonConverter? Converter { get; set; }` |
| `InternalConverter` | `public JsonConverter? InternalConverter { get; set; }` |
| `OnDeserializedCallbacks` | `public IList<SerializationCallback> OnDeserializedCallbacks { get; }` |
| `OnDeserializingCallbacks` | `public IList<SerializationCallback> OnDeserializingCallbacks { get; }` |
| `OnSerializedCallbacks` | `public IList<SerializationCallback> OnSerializedCallbacks { get; }` |
| `OnSerializingCallbacks` | `public IList<SerializationCallback> OnSerializingCallbacks { get; }` |
| `OnErrorCallbacks` | `public IList<SerializationErrorCallback> OnErrorCallbacks { get; }` |
| `DefaultCreator` | `public Func<object>? DefaultCreator { get; set; }` |
| `DefaultCreatorNonPublic` | `public bool DefaultCreatorNonPublic { get; set; }` |

## Usage Example

```csharp
var implementation = new CustomJsonContract();
```

## See Also

- [Complete Class Catalog](../catalog)