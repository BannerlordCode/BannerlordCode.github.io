<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `QualifierData`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.4.5](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# QualifierData

**Namespace:** System.Management
**Module:** System.Management
**Type:** `public class QualifierData`
**Base:** none
**File:** `Bannerlord.Source/bin/System.Management/System.Management/QualifierData.cs`

## Overview

`QualifierData` behaves like a data carrier: it packages fields so systems can exchange state in a structured form.

## Mental Model

Treat `QualifierData` as a Data-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Properties

| Name | Signature |
|------|-----------|
| `IsAmended` | `public bool IsAmended { get; set; }` |
| `IsLocal` | `public bool IsLocal { get; }` |
| `IsOverridable` | `public bool IsOverridable { get; set; }` |
| `Name` | `public string Name { get; }` |
| `PropagatesToInstance` | `public bool PropagatesToInstance { get; set; }` |
| `PropagatesToSubclass` | `public bool PropagatesToSubclass { get; set; }` |
| `Value` | `public object Value { get; set; }` |

## Usage Example

```csharp
var value = new QualifierData();
```

## See Also

- [Complete Class Catalog](../catalog)