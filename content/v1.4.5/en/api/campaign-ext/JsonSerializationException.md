---
title: "JsonSerializationException"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `JsonSerializationException`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.4.5](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# JsonSerializationException

**Namespace:** Newtonsoft.Json
**Module:** Newtonsoft.Json
**Type:** `public class JsonSerializationException : JsonException`
**Base:** `JsonException`
**File:** `Bannerlord.Source/bin/Newtonsoft.Json/Newtonsoft.Json/JsonSerializationException.cs`

## Overview

`JsonSerializationException` is an exception type used to signal a specific error condition; callers decide whether to catch it, translate it, or let it bubble up.

## Mental Model

Treat `JsonSerializationException` as a Exception-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Properties

| Name | Signature |
|------|-----------|
| `LineNumber` | `public int LineNumber { get; }` |
| `LinePosition` | `public int LinePosition { get; }` |
| `Path` | `public string? Path { get; }` |

## Usage Example

```csharp
try { CallJsonSerializationException(); } catch (JsonSerializationException exception) { Handle(exception); }
```

## See Also

- [Complete Class Catalog](../catalog)