<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `VirtualFileAttribute`
- [← Area / Back to core-extra](./)
- [↑ API Index](../)
- [🏠 Home v1.3.15](../../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# VirtualFileAttribute

**Namespace:** TaleWorlds.Library
**Module:** TaleWorlds.Library
**Type:** `public class VirtualFileAttribute : Attribute`
**Base:** `Attribute`
**File:** `TaleWorlds.Library/VirtualFileAttribute.cs`

## Overview

`VirtualFileAttribute` is a .NET attribute used to tag a type or member so runtime code or tooling can recognize it by convention.

## Mental Model

Treat `VirtualFileAttribute` as a Attribute-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Properties

| Name | Signature |
|------|-----------|
| `Name` | `public string Name { get; }` |
| `Content` | `public string Content { get; }` |

## Usage Example

```csharp
[VirtualFileAttribute]
public class Example { }
```

## See Also

- [Complete Class Catalog](../catalog)