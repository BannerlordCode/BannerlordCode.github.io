---
title: "JsonContainerAttribute"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `JsonContainerAttribute`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.4.5](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# JsonContainerAttribute

**Namespace:** Newtonsoft.Json
**Module:** Newtonsoft.Json
**Type:** `public abstract class JsonContainerAttribute : Attribute`
**Base:** `Attribute`
**File:** `Bannerlord.Source/bin/Newtonsoft.Json/Newtonsoft.Json/JsonContainerAttribute.cs`

## Overview

`JsonContainerAttribute` is a .NET attribute used to tag a type or member so runtime code or tooling can recognize it by convention.

## Mental Model

Treat `JsonContainerAttribute` as a Attribute-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Properties

| Name | Signature |
|------|-----------|
| `Id` | `public string? Id { get; set; }` |
| `Title` | `public string? Title { get; set; }` |
| `Description` | `public string? Description { get; set; }` |
| `ItemConverterType` | `public Type? ItemConverterType { get; set; }` |
| `ItemConverterParameters` | `public object ? ItemConverterParameters { get; set; }` |
| `NamingStrategyType` | `public Type? NamingStrategyType { get; set; }` |
| `NamingStrategyParameters` | `public object ? NamingStrategyParameters { get; set; }` |
| `IsReference` | `public bool IsReference { get; set; }` |
| `ItemIsReference` | `public bool ItemIsReference { get; set; }` |
| `ItemReferenceLoopHandling` | `public ReferenceLoopHandling ItemReferenceLoopHandling { get; set; }` |
| `ItemTypeNameHandling` | `public TypeNameHandling ItemTypeNameHandling { get; set; }` |

## Usage Example

```csharp
var implementation = new CustomJsonContainerAttribute();
```

## See Also

- [Complete Class Catalog](../catalog)