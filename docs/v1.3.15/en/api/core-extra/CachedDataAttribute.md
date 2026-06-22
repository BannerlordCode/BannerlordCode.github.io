<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `CachedDataAttribute`
- [← Area / Back to core-extra](./)
- [↑ API Index](../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# CachedDataAttribute

**Namespace:** TaleWorlds.Library
**Module:** TaleWorlds.Library
**Type:** `public class CachedDataAttribute : Attribute`
**Base:** `Attribute`
**File:** `TaleWorlds.Library/CachedDataAttribute.cs`

## Overview

`CachedDataAttribute` is a .NET attribute applied to members/types to mark them for a purpose (serialization, caching, validation). Annotate with `[CachedDataAttribute]`.

## Usage Example

```csharp
// Typical usage of CachedDataAttribute (Attribute)
[CachedDataAttribute] /* applied to a member/type */;
```

## See Also

- [Complete Class Catalog](../catalog)