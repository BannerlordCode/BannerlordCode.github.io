<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `SaveableInterfaceAttribute`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.3.15](../../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# SaveableInterfaceAttribute

**Namespace:** TaleWorlds.SaveSystem
**Module:** TaleWorlds.SaveSystem
**Type:** `public class SaveableInterfaceAttribute : Attribute`
**Base:** `Attribute`
**File:** `TaleWorlds.SaveSystem/SaveableInterfaceAttribute.cs`

## Overview

`SaveableInterfaceAttribute` is a .NET attribute used to tag a type or member so runtime code or tooling can recognize it by convention.

## Mental Model

Treat `SaveableInterfaceAttribute` as a Attribute-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Properties

| Name | Signature |
|------|-----------|
| `SaveId` | `public int SaveId { get; set; }` |

## Usage Example

```csharp
SaveableInterfaceAttribute implementation = GetSaveableInterfaceAttributeImplementation();
```

## See Also

- [Complete Class Catalog](../catalog)