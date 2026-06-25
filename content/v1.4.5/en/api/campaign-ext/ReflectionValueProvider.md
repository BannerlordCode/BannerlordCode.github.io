---
title: "ReflectionValueProvider"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `ReflectionValueProvider`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.4.5](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# ReflectionValueProvider

**Namespace:** Newtonsoft.Json.Serialization
**Module:** Newtonsoft.Json
**Type:** `public class ReflectionValueProvider : IValueProvider`
**Base:** `IValueProvider`
**File:** `Bannerlord.Source/bin/Newtonsoft.Json/Newtonsoft.Json.Serialization/ReflectionValueProvider.cs`

## Overview

`ReflectionValueProvider` lives in `Newtonsoft.Json.Serialization` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `Newtonsoft.Json.Serialization` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Methods

### SetValue
`public void SetValue(object target, object? value)`

**Purpose:** Sets the value or state of `value`.

### GetValue
`public object? GetValue(object target)`

**Purpose:** Gets the current value of `value`.

## Usage Example

```csharp
var value = new ReflectionValueProvider();
value.SetValue(target, value);
```

## See Also

- [Complete Class Catalog](../catalog)