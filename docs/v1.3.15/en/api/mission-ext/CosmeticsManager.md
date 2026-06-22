<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `CosmeticsManager`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# CosmeticsManager

**Namespace:** TaleWorlds.MountAndBlade.Diamond.Cosmetics
**Module:** TaleWorlds.MountAndBlade
**Type:** `public static class CosmeticsManager`
**Base:** none
**File:** `TaleWorlds.MountAndBlade.Diamond/Cosmetics/CosmeticsManager.cs`

## Overview

`CosmeticsManager` is a manager (often reached via a Current singleton or Mission.Current). Use it to access/modify its managed subsystem.

## Key Properties

| Name | Signature |
|------|-----------|
| `CosmeticElementsList` | `public static MBReadOnlyList<CosmeticElement> CosmeticElementsList { get; }` |

## Key Methods

### GetCosmeticElement
```csharp
public static CosmeticElement GetCosmeticElement(string cosmeticId)
```

### LoadFromXml
```csharp
public static void LoadFromXml(string path)
```

## Usage Example

```csharp
// Typical usage of CosmeticsManager (Manager)
CosmeticsManager.Current;
```

## See Also

- [Complete Class Catalog](../catalog)