---
title: "JsonProperty"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `JsonProperty`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.4.5](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# JsonProperty

**Namespace:** Newtonsoft.Json.Serialization
**Module:** Newtonsoft.Json
**Type:** `public class JsonProperty`
**Base:** none
**File:** `Bannerlord.Source/bin/Newtonsoft.Json/Newtonsoft.Json.Serialization/JsonProperty.cs`

## Overview

`JsonProperty` lives in `Newtonsoft.Json.Serialization` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `Newtonsoft.Json.Serialization` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `PropertyName` | `public string? PropertyName { get; set; }` |
| `DeclaringType` | `public Type? DeclaringType { get; set; }` |
| `Order` | `public int? Order { get; set; }` |
| `UnderlyingName` | `public string? UnderlyingName { get; set; }` |
| `ValueProvider` | `public IValueProvider? ValueProvider { get; set; }` |
| `AttributeProvider` | `public IAttributeProvider? AttributeProvider { get; set; }` |
| `PropertyType` | `public Type? PropertyType { get; set; }` |
| `Converter` | `public JsonConverter? Converter { get; set; }` |
| `MemberConverter` | `public JsonConverter? MemberConverter { get; set; }` |
| `Ignored` | `public bool Ignored { get; set; }` |
| `Readable` | `public bool Readable { get; set; }` |
| `Writable` | `public bool Writable { get; set; }` |
| `HasMemberAttribute` | `public bool HasMemberAttribute { get; set; }` |
| `DefaultValue` | `public object? DefaultValue { get; set; }` |
| `Required` | `public Required Required { get; set; }` |
| `IsReference` | `public bool? IsReference { get; set; }` |
| `NullValueHandling` | `public NullValueHandling? NullValueHandling { get; set; }` |
| `DefaultValueHandling` | `public DefaultValueHandling? DefaultValueHandling { get; set; }` |
| `ReferenceLoopHandling` | `public ReferenceLoopHandling? ReferenceLoopHandling { get; set; }` |
| `ObjectCreationHandling` | `public ObjectCreationHandling? ObjectCreationHandling { get; set; }` |
| `TypeNameHandling` | `public TypeNameHandling? TypeNameHandling { get; set; }` |
| `ShouldSerialize` | `public Predicate<object>? ShouldSerialize { get; set; }` |
| `ShouldDeserialize` | `public Predicate<object>? ShouldDeserialize { get; set; }` |
| `GetIsSpecified` | `public Predicate<object>? GetIsSpecified { get; set; }` |
| `SetIsSpecified` | `public Action<object, object?>? SetIsSpecified { get; set; }` |
| `ItemConverter` | `public JsonConverter? ItemConverter { get; set; }` |
| `ItemIsReference` | `public bool? ItemIsReference { get; set; }` |
| `ItemTypeNameHandling` | `public TypeNameHandling? ItemTypeNameHandling { get; set; }` |
| `ItemReferenceLoopHandling` | `public ReferenceLoopHandling? ItemReferenceLoopHandling { get; set; }` |

## Key Methods

### ToString
`public override string ToString()`

**Purpose:** Handles logic related to `to string`.

## Usage Example

```csharp
var value = new JsonProperty();
value.ToString();
```

## See Also

- [Complete Class Catalog](../catalog)