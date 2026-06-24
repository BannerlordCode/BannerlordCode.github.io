<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `ReflectionAttributeProvider`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.4.5](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# ReflectionAttributeProvider

**Namespace:** Newtonsoft.Json.Serialization
**Module:** Newtonsoft.Json
**Type:** `public class ReflectionAttributeProvider : IAttributeProvider`
**Base:** `IAttributeProvider`
**File:** `Bannerlord.Source/bin/Newtonsoft.Json/Newtonsoft.Json.Serialization/ReflectionAttributeProvider.cs`

## Overview

`ReflectionAttributeProvider` lives in `Newtonsoft.Json.Serialization` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `Newtonsoft.Json.Serialization` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Methods

### GetAttributes
`public IList<Attribute> GetAttributes(bool inherit)`

**Purpose:** Gets the current value of `attributes`.

### GetAttributes
`public IList<Attribute> GetAttributes(Type attributeType, bool inherit)`

**Purpose:** Gets the current value of `attributes`.

## Usage Example

```csharp
var value = new ReflectionAttributeProvider();
value.GetAttributes(false);
```

## See Also

- [Complete Class Catalog](../catalog)