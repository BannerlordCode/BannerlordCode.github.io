<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `BannerManager`
- [← Area / Back to core-extra](./)
- [↑ API Index](../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# BannerManager

**Namespace:** TaleWorlds.Core
**Module:** TaleWorlds.Core
**Type:** `public class BannerManager`
**Base:** none
**File:** `TaleWorlds.Core/BannerManager.cs`

## Overview

`BannerManager` is a manager (often reached via a Current singleton or Mission.Current). Use it to access/modify its managed subsystem.

## Key Properties

| Name | Signature |
|------|-----------|
| `BannerIconGroups` | `public MBReadOnlyList<BannerIconGroup> BannerIconGroups { get { return this._bannerIconGroups; }` |

## Key Methods

### Initialize
```csharp
public static void Initialize()
```

### ResetAndLoad
```csharp
public static void ResetAndLoad()
```

### GetColor
```csharp
public static uint GetColor(int id)
```

### GetColorId
```csharp
public static int GetColorId(uint color)
```

### GetRandomColorId
```csharp
public int GetRandomColorId(MBFastRandom random)
```

### GetIconDataFromIconId
```csharp
public BannerIconData GetIconDataFromIconId(int id)
```

### GetRandomBackgroundId
```csharp
public int GetRandomBackgroundId(MBFastRandom random)
```

### GetRandomBannerIconId
```csharp
public int GetRandomBannerIconId(MBFastRandom random)
```

### GetBackgroundMeshName
```csharp
public string GetBackgroundMeshName(int id)
```

### GetIconSourceTextureName
```csharp
public string GetIconSourceTextureName(int id)
```

### SetBaseBackgroundId
```csharp
public void SetBaseBackgroundId(int id)
```

### SetCultureColors
```csharp
public void SetCultureColors(BasicCultureObject culture, List<BannerColor> color)
```

### LoadBannerIcons
```csharp
public void LoadBannerIcons()
```

### LoadBannerIcons
```csharp
public void LoadBannerIcons(string xmlPath)
```

## Usage Example

```csharp
// Typical usage of BannerManager (Manager)
BannerManager.Current;
```

## See Also

- [Complete Class Catalog](../catalog)