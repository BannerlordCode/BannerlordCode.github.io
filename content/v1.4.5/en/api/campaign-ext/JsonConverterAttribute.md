---
title: "JsonConverterAttribute"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `JsonConverterAttribute`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.4.5](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# JsonConverterAttribute

**Namespace:** Newtonsoft.Json
**Module:** Newtonsoft.Json
**Type:** `public sealed class JsonConverterAttribute : Attribute`
**Base:** `Attribute`
**File:** `Bannerlord.Source/bin/Newtonsoft.Json/Newtonsoft.Json/JsonConverterAttribute.cs`

## Overview

`JsonConverterAttribute` is a .NET attribute used to tag a type or member so runtime code or tooling can recognize it by convention.

## Mental Model

Treat `JsonConverterAttribute` as a Attribute-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Properties

| Name | Signature |
|------|-----------|
| `ConverterParameters` | `public object ? ConverterParameters { get; }` |

## Usage Example

```csharp
[JsonConverterAttribute]
public class Example { }
```

## See Also

- [Complete Class Catalog](../catalog)