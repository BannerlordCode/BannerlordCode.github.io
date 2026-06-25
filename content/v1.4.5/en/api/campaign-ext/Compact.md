---
title: "Compact"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `Compact`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.4.5](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# Compact

**Namespace:** Jose
**Module:** Jose
**Type:** `public class Compact`
**Base:** none
**File:** `Bannerlord.Source/bin/jose-jwt/Jose/Compact.cs`

## Overview

`Compact` lives in `Jose` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `Jose` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Methods

### Next
`public byte Next(bool decode = true)`

**Purpose:** Handles logic related to `next`.

### Serialize
`public static string Serialize(params byte parts)`

**Purpose:** Handles logic related to `serialize`.

### Serialize
`public static string Serialize(byte header, string payload, params byte other)`

**Purpose:** Handles logic related to `serialize`.

### Parse
`public static byte Parse(string token)`

**Purpose:** Handles logic related to `parse`.

### Iterate
`public static Iterator Iterate(string token)`

**Purpose:** Handles logic related to `iterate`.

## Usage Example

```csharp
var value = new Compact();
value.Next(false);
```

## See Also

- [Complete Class Catalog](../catalog)