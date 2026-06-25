---
title: "BsonObjectIdConverter"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `BsonObjectIdConverter`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.4.5](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# BsonObjectIdConverter

**Namespace:** Newtonsoft.Json.Converters
**Module:** Newtonsoft.Json
**Type:** `class`
**Base:** none
**File:** `Bannerlord.Source/bin/Newtonsoft.Json/Newtonsoft.Json.Converters/BsonObjectIdConverter.cs`

## Overview

`BsonObjectIdConverter` lives in `Newtonsoft.Json.Converters` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `Newtonsoft.Json.Converters` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Methods

### CanConvert
`public override bool CanConvert(Type objectType)`

**Purpose:** Checks whether the current object can `convert`.

## Usage Example

```csharp
var value = new BsonObjectIdConverter();
value.CanConvert(objectType);
```

## See Also

- [Complete Class Catalog](../catalog)