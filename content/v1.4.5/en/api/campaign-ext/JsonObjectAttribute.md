---
title: "JsonObjectAttribute"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `JsonObjectAttribute`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.4.5](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# JsonObjectAttribute

**Namespace:** Newtonsoft.Json
**Module:** Newtonsoft.Json
**Type:** `public sealed class JsonObjectAttribute : JsonContainerAttribute`
**Base:** `JsonContainerAttribute`
**File:** `Bannerlord.Source/bin/Newtonsoft.Json/Newtonsoft.Json/JsonObjectAttribute.cs`

## Overview

`JsonObjectAttribute` is a .NET attribute used to tag a type or member so runtime code or tooling can recognize it by convention.

## Mental Model

Treat `JsonObjectAttribute` as a Attribute-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Properties

| Name | Signature |
|------|-----------|
| `MemberSerialization` | `public MemberSerialization MemberSerialization { get; set; }` |
| `MissingMemberHandling` | `public MissingMemberHandling MissingMemberHandling { get; set; }` |
| `ItemNullValueHandling` | `public NullValueHandling ItemNullValueHandling { get; set; }` |
| `ItemRequired` | `public Required ItemRequired { get; set; }` |

## Usage Example

```csharp
[JsonObjectAttribute]
public class Example { }
```

## See Also

- [Complete Class Catalog](../catalog)