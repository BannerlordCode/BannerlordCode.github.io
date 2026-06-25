---
title: "JPropertyDescriptor"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `JPropertyDescriptor`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.4.5](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# JPropertyDescriptor

**Namespace:** Newtonsoft.Json.Linq
**Module:** Newtonsoft.Json
**Type:** `public class JPropertyDescriptor : PropertyDescriptor`
**Base:** `PropertyDescriptor`
**File:** `Bannerlord.Source/bin/Newtonsoft.Json/Newtonsoft.Json.Linq/JPropertyDescriptor.cs`

## Overview

`JPropertyDescriptor` lives in `Newtonsoft.Json.Linq` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `Newtonsoft.Json.Linq` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Methods

### CanResetValue
`public override bool CanResetValue(object component)`

**Purpose:** Checks whether the current object can `reset value`.

### GetValue
`public override object? GetValue(object component)`

**Purpose:** Gets the current value of `value`.

### ResetValue
`public override void ResetValue(object component)`

**Purpose:** Resets `value` to its initial state.

### SetValue
`public override void SetValue(object component, object value)`

**Purpose:** Sets the value or state of `value`.

### ShouldSerializeValue
`public override bool ShouldSerializeValue(object component)`

**Purpose:** Handles logic related to `should serialize value`.

## Usage Example

```csharp
var value = new JPropertyDescriptor();
value.CanResetValue(component);
```

## See Also

- [Complete Class Catalog](../catalog)