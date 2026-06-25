---
title: "Iterator"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `Iterator`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.4.5](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# Iterator

**Namespace:** Jose
**Module:** Jose
**Type:** `public class Iterator`
**Area:** campaign-ext

## Overview

`Iterator` lives in `Jose`, and its public surface shows that it acts as a formal extension or data entry point for this subsystem.

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
// First obtain a Iterator instance from game state, then call one of its public methods
var value = new Iterator();
value.Next(false);
```

## See Also

- [Complete Class Catalog](../catalog)
- [Area catalog](../catalog-campaign)
