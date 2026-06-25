---
title: "DeflateCompression"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `DeflateCompression`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.4.5](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# DeflateCompression

**Namespace:** Jose
**Module:** Jose
**Type:** `public class DeflateCompression : ICompression`
**Base:** `ICompression`
**File:** `Bannerlord.Source/bin/jose-jwt/Jose/DeflateCompression.cs`

## Overview

`DeflateCompression` lives in `Jose` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `Jose` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Methods

### Compress
`public byte Compress(byte plainText)`

**Purpose:** Handles logic related to `compress`.

### Decompress
`public byte Decompress(byte compressedText)`

**Purpose:** Handles logic related to `decompress`.

## Usage Example

```csharp
var value = new DeflateCompression();
value.Compress(0);
```

## See Also

- [Complete Class Catalog](../catalog)