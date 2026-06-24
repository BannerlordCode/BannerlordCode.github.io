<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `SaveableFieldAttribute`
- [← Area / Back to save-system](./)
- [↑ API Index](../)
- [🏠 Home v1.4.5](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# SaveableFieldAttribute

**Namespace:** TaleWorlds.SaveSystem
**Module:** TaleWorlds.SaveSystem
**Type:** `public class SaveableFieldAttribute : Attribute`
**Base:** `Attribute`
**File:** `Bannerlord.Source/bin/TaleWorlds.SaveSystem/TaleWorlds.SaveSystem/SaveableFieldAttribute.cs`

## Overview

`SaveableFieldAttribute` is a .NET attribute used to tag a type or member so runtime code or tooling can recognize it by convention.

## Mental Model

Treat `SaveableFieldAttribute` as a Attribute-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Properties

| Name | Signature |
|------|-----------|
| `LocalSaveId` | `public short LocalSaveId { get; set; }` |

## Usage Example

```csharp
[SaveableFieldAttribute]
public class Example { }
```

## See Also

- [Complete Class Catalog](../catalog)