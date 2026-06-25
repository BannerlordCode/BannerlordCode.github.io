---
title: "PropertyData"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `PropertyData`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.4.5](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# PropertyData

**Namespace:** System.Management
**Module:** System.Management
**Type:** `public class PropertyData`
**Base:** none
**File:** `Bannerlord.Source/bin/System.Management/System.Management/PropertyData.cs`

## Overview

`PropertyData` behaves like a data carrier: it packages fields so systems can exchange state in a structured form.

## Mental Model

Treat `PropertyData` as a Data-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Properties

| Name | Signature |
|------|-----------|
| `IsArray` | `public bool IsArray { get; }` |
| `IsLocal` | `public bool IsLocal { get; }` |
| `Name` | `public string Name { get; }` |
| `Origin` | `public string Origin { get; }` |
| `Qualifiers` | `public QualifierDataCollection Qualifiers { get; }` |
| `Type` | `public CimType Type { get; }` |
| `Value` | `public object Value { get; set; }` |

## Usage Example

```csharp
var value = new PropertyData();
```

## See Also

- [Complete Class Catalog](../catalog)