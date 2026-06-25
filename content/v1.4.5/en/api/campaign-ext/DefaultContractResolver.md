---
title: "DefaultContractResolver"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `DefaultContractResolver`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.4.5](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# DefaultContractResolver

**Namespace:** Newtonsoft.Json.Serialization
**Module:** Newtonsoft.Json
**Type:** `public class DefaultContractResolver : IContractResolver`
**Base:** `IContractResolver`
**File:** `Bannerlord.Source/bin/Newtonsoft.Json/Newtonsoft.Json.Serialization/DefaultContractResolver.cs`

## Overview

`DefaultContractResolver` lives in `Newtonsoft.Json.Serialization` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `Newtonsoft.Json.Serialization` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `DefaultMembersSearchFlags` | `public BindingFlags DefaultMembersSearchFlags { get; set; }` |
| `SerializeCompilerGeneratedMembers` | `public bool SerializeCompilerGeneratedMembers { get; set; }` |
| `IgnoreSerializableInterface` | `public bool IgnoreSerializableInterface { get; set; }` |
| `IgnoreSerializableAttribute` | `public bool IgnoreSerializableAttribute { get; set; }` |
| `IgnoreIsSpecifiedMembers` | `public bool IgnoreIsSpecifiedMembers { get; set; }` |
| `IgnoreShouldSerializeMembers` | `public bool IgnoreShouldSerializeMembers { get; set; }` |
| `NamingStrategy` | `public NamingStrategy? NamingStrategy { get; set; }` |

## Key Methods

### GetEnumerator
`public IEnumerator<KeyValuePair<object, object>> GetEnumerator()`

**Purpose:** Gets the current value of `enumerator`.

### ResolveContract
`public virtual JsonContract ResolveContract(Type type)`

**Purpose:** Handles logic related to `resolve contract`.

### GetResolvedPropertyName
`public string GetResolvedPropertyName(string propertyName)`

**Purpose:** Gets the current value of `resolved property name`.

## Usage Example

```csharp
var value = new DefaultContractResolver();
value.GetEnumerator();
```

## See Also

- [Complete Class Catalog](../catalog)