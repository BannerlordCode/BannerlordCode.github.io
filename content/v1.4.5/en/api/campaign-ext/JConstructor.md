---
title: "JConstructor"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `JConstructor`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.4.5](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# JConstructor

**Namespace:** Newtonsoft.Json.Linq
**Module:** Newtonsoft.Json
**Type:** `public class JConstructor : JContainer`
**Base:** `JContainer`
**File:** `Bannerlord.Source/bin/Newtonsoft.Json/Newtonsoft.Json.Linq/JConstructor.cs`

## Overview

`JConstructor` lives in `Newtonsoft.Json.Linq` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `Newtonsoft.Json.Linq` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `Name` | `public string? Name { get; set; }` |
| `this` | `public override JToken? this { get; }` |

## Key Methods

### WriteToAsync
`public override async Task WriteToAsync(JsonWriter writer, CancellationToken cancellationToken, params JsonConverter converters)`

**Purpose:** Handles logic related to `write to async`.

### LoadAsync
`public new static Task<JConstructor> LoadAsync(JsonReader reader, CancellationToken cancellationToken = default(CancellationToken))`

**Purpose:** Loads `async` data.

### LoadAsync
`public new static async Task<JConstructor> LoadAsync(JsonReader reader, JsonLoadSettings? settings, CancellationToken cancellationToken = default(CancellationToken))`

**Purpose:** Loads `async` data.

### WriteTo
`public override void WriteTo(JsonWriter writer, params JsonConverter converters)`

**Purpose:** Handles logic related to `write to`.

### Load
`public new static JConstructor Load(JsonReader reader)`

**Purpose:** Loads `load` data.

### Load
`public new static JConstructor Load(JsonReader reader, JsonLoadSettings? settings)`

**Purpose:** Loads `load` data.

## Usage Example

```csharp
var value = new JConstructor();
value.WriteToAsync(writer, cancellationToken, converters);
```

## See Also

- [Complete Class Catalog](../catalog)