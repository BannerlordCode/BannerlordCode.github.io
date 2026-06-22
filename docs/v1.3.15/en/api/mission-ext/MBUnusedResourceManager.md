<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `MBUnusedResourceManager`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# MBUnusedResourceManager

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class MBUnusedResourceManager`
**Base:** none
**File:** `TaleWorlds.MountAndBlade/MBUnusedResourceManager.cs`

## Overview

`MBUnusedResourceManager` is a manager (often reached via a Current singleton or Mission.Current). Use it to access/modify its managed subsystem.

## Key Methods

### SetMeshUsed
```csharp
public static void SetMeshUsed(string meshName)
```

### SetMaterialUsed
```csharp
public static void SetMaterialUsed(string meshName)
```

### SetBodyUsed
```csharp
public static void SetBodyUsed(string bodyName)
```

## Usage Example

```csharp
// Typical usage of MBUnusedResourceManager (Manager)
MBUnusedResourceManager.Current;
```

## See Also

- [Complete Class Catalog](../catalog)