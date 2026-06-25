---
title: "NewtonsoftMapper"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `NewtonsoftMapper`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.4.5](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# NewtonsoftMapper

**Namespace:** Jose
**Module:** Jose
**Type:** `public class NewtonsoftMapper : IJsonMapper`
**Base:** `IJsonMapper`
**File:** `Bannerlord.Source/bin/jose-jwt/Jose/NewtonsoftMapper.cs`

## Overview

`NewtonsoftMapper` lives in `Jose` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `Jose` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Methods

### Serialize
`public string Serialize(object obj)`

**Purpose:** Handles logic related to `serialize`.

## Usage Example

```csharp
var value = new NewtonsoftMapper();
value.Serialize(obj);
```

## See Also

- [Complete Class Catalog](../catalog)