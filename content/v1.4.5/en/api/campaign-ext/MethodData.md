---
title: "MethodData"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `MethodData`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.4.5](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# MethodData

**Namespace:** System.Management
**Module:** System.Management
**Type:** `public class MethodData`
**Base:** none
**File:** `Bannerlord.Source/bin/System.Management/System.Management/MethodData.cs`

## Overview

`MethodData` behaves like a data carrier: it packages fields so systems can exchange state in a structured form.

## Mental Model

Treat `MethodData` as a Data-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Properties

| Name | Signature |
|------|-----------|
| `InParameters` | `public ManagementBaseObject InParameters { get; }` |
| `Name` | `public string Name { get; }` |
| `Origin` | `public string Origin { get; }` |
| `OutParameters` | `public ManagementBaseObject OutParameters { get; }` |
| `Qualifiers` | `public QualifierDataCollection Qualifiers { get; }` |

## Usage Example

```csharp
var value = new MethodData();
```

## See Also

- [Complete Class Catalog](../catalog)