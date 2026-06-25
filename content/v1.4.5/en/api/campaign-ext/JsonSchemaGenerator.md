---
title: "JsonSchemaGenerator"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `JsonSchemaGenerator`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.4.5](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# JsonSchemaGenerator

**Namespace:** Newtonsoft.Json.Schema
**Module:** Newtonsoft.Json
**Type:** `class`
**Base:** none
**File:** `Bannerlord.Source/bin/Newtonsoft.Json/Newtonsoft.Json.Schema/JsonSchemaGenerator.cs`

## Overview

`JsonSchemaGenerator` lives in `Newtonsoft.Json.Schema` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `Newtonsoft.Json.Schema` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Methods

### Generate
`public JsonSchema Generate(Type type)`

**Purpose:** Handles logic related to `generate`.

### Generate
`public JsonSchema Generate(Type type, JsonSchemaResolver resolver)`

**Purpose:** Handles logic related to `generate`.

### Generate
`public JsonSchema Generate(Type type, bool rootSchemaNullable)`

**Purpose:** Handles logic related to `generate`.

### Generate
`public JsonSchema Generate(Type type, JsonSchemaResolver resolver, bool rootSchemaNullable)`

**Purpose:** Handles logic related to `generate`.

## Usage Example

```csharp
var value = new JsonSchemaGenerator();
value.Generate(type);
```

## See Also

- [Complete Class Catalog](../catalog)