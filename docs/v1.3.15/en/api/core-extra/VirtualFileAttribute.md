<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `VirtualFileAttribute`
- [← Area / Back to core-extra](./)
- [↑ API Index](../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# VirtualFileAttribute

**Namespace:** TaleWorlds.Library
**Module:** TaleWorlds.Library
**Type:** `public class VirtualFileAttribute : Attribute`
**Base:** `Attribute`
**File:** `TaleWorlds.Library/VirtualFileAttribute.cs`

## Overview

`VirtualFileAttribute` is a .NET attribute applied to members/types to mark them for a purpose (serialization, caching, validation). Annotate with `[VirtualFileAttribute]`.

## Key Properties

| Name | Signature |
|------|-----------|
| `Name` | `public string Name { get; }` |
| `Content` | `public string Content { get; }` |

## Usage Example

```csharp
// Typical usage of VirtualFileAttribute (Attribute)
[VirtualFileAttribute] /* applied to a member/type */;
```

## See Also

- [Complete Class Catalog](../catalog)