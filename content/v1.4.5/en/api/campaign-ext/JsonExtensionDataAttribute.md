---
title: "JsonExtensionDataAttribute"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `JsonExtensionDataAttribute`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.4.5](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# JsonExtensionDataAttribute

**Namespace:** Newtonsoft.Json
**Module:** Newtonsoft.Json
**Type:** `public class JsonExtensionDataAttribute : Attribute`
**Base:** `Attribute`
**File:** `Bannerlord.Source/bin/Newtonsoft.Json/Newtonsoft.Json/JsonExtensionDataAttribute.cs`

## Overview

`JsonExtensionDataAttribute` is a .NET attribute used to tag a type or member so runtime code or tooling can recognize it by convention.

## Mental Model

Treat `JsonExtensionDataAttribute` as a Attribute-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Properties

| Name | Signature |
|------|-----------|
| `WriteData` | `public bool WriteData { get; set; }` |
| `ReadData` | `public bool ReadData { get; set; }` |

## Usage Example

```csharp
[JsonExtensionDataAttribute]
public class Example { }
```

## See Also

- [Complete Class Catalog](../catalog)