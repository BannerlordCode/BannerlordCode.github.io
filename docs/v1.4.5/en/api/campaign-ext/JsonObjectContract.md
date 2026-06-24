<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `JsonObjectContract`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.4.5](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# JsonObjectContract

**Namespace:** Newtonsoft.Json.Serialization
**Module:** Newtonsoft.Json
**Type:** `public class JsonObjectContract : JsonContainerContract`
**Base:** `JsonContainerContract`
**File:** `Bannerlord.Source/bin/Newtonsoft.Json/Newtonsoft.Json.Serialization/JsonObjectContract.cs`

## Overview

`JsonObjectContract` lives in `Newtonsoft.Json.Serialization` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `Newtonsoft.Json.Serialization` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `MemberSerialization` | `public MemberSerialization MemberSerialization { get; set; }` |
| `MissingMemberHandling` | `public MissingMemberHandling? MissingMemberHandling { get; set; }` |
| `ItemRequired` | `public Required? ItemRequired { get; set; }` |
| `ItemNullValueHandling` | `public NullValueHandling? ItemNullValueHandling { get; set; }` |
| `Properties` | `public JsonPropertyCollection Properties { get; }` |
| `CreatorParameters` | `public JsonPropertyCollection CreatorParameters { get; }` |
| `OverrideCreator` | `public ObjectConstructor<object>? OverrideCreator { get; set; }` |
| `ExtensionDataSetter` | `public ExtensionDataSetter? ExtensionDataSetter { get; set; }` |
| `ExtensionDataGetter` | `public ExtensionDataGetter? ExtensionDataGetter { get; set; }` |
| `ExtensionDataValueType` | `public Type? ExtensionDataValueType { get; set; }` |
| `ExtensionDataNameResolver` | `public Func<string, string>? ExtensionDataNameResolver { get; set; }` |

## Usage Example

```csharp
var example = new JsonObjectContract();
```

## See Also

- [Complete Class Catalog](../catalog)