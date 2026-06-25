---
title: "JsonSchemaResolver"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `JsonSchemaResolver`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.4.5](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# JsonSchemaResolver

**Namespace:** Newtonsoft.Json.Schema
**Module:** Newtonsoft.Json
**Type:** `public class JsonSchemaResolver`
**Base:** none
**File:** `Bannerlord.Source/bin/Newtonsoft.Json/Newtonsoft.Json.Schema/JsonSchemaResolver.cs`

## Overview

`JsonSchemaResolver` lives in `Newtonsoft.Json.Schema` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `Newtonsoft.Json.Schema` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `LoadedSchemas` | `public IList<JsonSchema> LoadedSchemas { get; set; }` |

## Key Methods

### GetSchema
`public virtual JsonSchema GetSchema(string reference)`

**Purpose:** Gets the current value of `schema`.

## Usage Example

```csharp
var value = new JsonSchemaResolver();
value.GetSchema("example");
```

## See Also

- [Complete Class Catalog](../catalog)