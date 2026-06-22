<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `VirtualDirectoryAttribute`
- [← Area / Back to core-extra](./)
- [↑ API Index](../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# VirtualDirectoryAttribute

**Namespace:** TaleWorlds.Library
**Module:** TaleWorlds.Library
**Type:** `public class VirtualDirectoryAttribute : Attribute`
**Base:** `Attribute`
**File:** `TaleWorlds.Library/VirtualDirectoryAttribute.cs`

## Overview

`VirtualDirectoryAttribute` is a .NET attribute applied to members/types to mark them for a purpose (serialization, caching, validation). Annotate with `[VirtualDirectoryAttribute]`.

## Key Properties

| Name | Signature |
|------|-----------|
| `Name` | `public string Name { get; }` |

## Usage Example

```csharp
// Typical usage of VirtualDirectoryAttribute (Attribute)
[VirtualDirectoryAttribute] /* applied to a member/type */;
```

## See Also

- [Complete Class Catalog](../catalog)