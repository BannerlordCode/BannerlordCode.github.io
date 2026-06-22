<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `BannerManager`
- [← 本领域 / 返回 core-extra](./)
- [↑ API 目录](../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# BannerManager

**Namespace:** TaleWorlds.Core
**Module:** TaleWorlds.Core
**Type:** `public class BannerManager`
**Base:** 无
**File:** `TaleWorlds.Core/BannerManager.cs`

## 概述

`BannerManager` 是一个管理器（通常经 Current 单例或 Mission.Current 访问）。用它访问/修改其管理的子系统。

## 主要属性

| Name | Signature |
|------|-----------|
| `BannerIconGroups` | `public MBReadOnlyList<BannerIconGroup> BannerIconGroups { get { return this._bannerIconGroups; }` |

## 主要方法

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

## 使用示例

```csharp
// BannerManager (Manager) 的典型用法
BannerManager.Current;
```

## 参见

- [完整类目录](../catalog)