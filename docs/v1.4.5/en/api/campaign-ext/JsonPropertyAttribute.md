<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `JsonPropertyAttribute`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.4.5](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# JsonPropertyAttribute

**Namespace:** Newtonsoft.Json
**Module:** Newtonsoft.Json
**Type:** `public sealed class JsonPropertyAttribute : Attribute`
**Base:** `Attribute`
**File:** `Bannerlord.Source/bin/Newtonsoft.Json/Newtonsoft.Json/JsonPropertyAttribute.cs`

## Overview

`JsonPropertyAttribute` is a .NET attribute used to tag a type or member so runtime code or tooling can recognize it by convention.

## Mental Model

Treat `JsonPropertyAttribute` as a Attribute-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Properties

| Name | Signature |
|------|-----------|
| `ItemConverterType` | `public Type? ItemConverterType { get; set; }` |
| `ItemConverterParameters` | `public object ? ItemConverterParameters { get; set; }` |
| `NamingStrategyType` | `public Type? NamingStrategyType { get; set; }` |
| `NamingStrategyParameters` | `public object ? NamingStrategyParameters { get; set; }` |
| `NullValueHandling` | `public NullValueHandling NullValueHandling { get; set; }` |
| `DefaultValueHandling` | `public DefaultValueHandling DefaultValueHandling { get; set; }` |
| `ReferenceLoopHandling` | `public ReferenceLoopHandling ReferenceLoopHandling { get; set; }` |
| `ObjectCreationHandling` | `public ObjectCreationHandling ObjectCreationHandling { get; set; }` |
| `TypeNameHandling` | `public TypeNameHandling TypeNameHandling { get; set; }` |
| `IsReference` | `public bool IsReference { get; set; }` |
| `Order` | `public int Order { get; set; }` |
| `Required` | `public Required Required { get; set; }` |
| `PropertyName` | `public string? PropertyName { get; set; }` |
| `ItemReferenceLoopHandling` | `public ReferenceLoopHandling ItemReferenceLoopHandling { get; set; }` |
| `ItemTypeNameHandling` | `public TypeNameHandling ItemTypeNameHandling { get; set; }` |
| `ItemIsReference` | `public bool ItemIsReference { get; set; }` |

## Usage Example

```csharp
[JsonPropertyAttribute]
public class Example { }
```

## See Also

- [Complete Class Catalog](../catalog)