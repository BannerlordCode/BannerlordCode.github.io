---
title: "BannerManager"
description: "Auto-generated class reference for BannerManager."
---
# BannerManager

**Namespace:** TaleWorlds.Core
**Module:** TaleWorlds.Core
**Type:** `public class BannerManager`
**Base:** none
**File:** `TaleWorlds.Core/BannerManager.cs`

## Overview

`BannerManager` is a manager: it owns a subsystem's lifecycle, lookup entry points, and cross-object coordination responsibilities.

## Mental Model

Treat `BannerManager` as a Manager-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Properties

| Name | Signature |
|------|-----------|
| `Instance` | `public static BannerManager Instance { get; }` |
| `BannerIconGroups` | `public MBReadOnlyList<BannerIconGroup> BannerIconGroups { get; }` |
| `BaseBackgroundId` | `public int BaseBackgroundId { get; }` |

## Key Methods

### Initialize
`public static void Initialize()`

**Purpose:** Prepares the resources, state, or bindings the this instance needs before use.

```csharp
// Static call; no instance required
BannerManager.Initialize();
```

### ResetAndLoad
`public static void ResetAndLoad()`

**Purpose:** Returns and load to its default or initial condition.

```csharp
// Static call; no instance required
BannerManager.ResetAndLoad();
```

### GetColor
`public static uint GetColor(int id)`

**Purpose:** Reads and returns the color value held by the this instance.

```csharp
// Static call; no instance required
BannerManager.GetColor(0);
```

### GetColorId
`public static int GetColorId(uint color)`

**Purpose:** Reads and returns the color id value held by the this instance.

```csharp
// Static call; no instance required
BannerManager.GetColorId(0);
```

### GetRandomColorId
`public int GetRandomColorId(MBFastRandom random)`

**Purpose:** Reads and returns the random color id value held by the this instance.

```csharp
// Obtain an instance of BannerManager from the subsystem API first
BannerManager bannerManager = ...;
var result = bannerManager.GetRandomColorId(random);
```

### GetIconDataFromIconId
`public BannerIconData GetIconDataFromIconId(int id)`

**Purpose:** Reads and returns the icon data from icon id value held by the this instance.

```csharp
// Obtain an instance of BannerManager from the subsystem API first
BannerManager bannerManager = ...;
var result = bannerManager.GetIconDataFromIconId(0);
```

### GetRandomBackgroundId
`public int GetRandomBackgroundId(MBFastRandom random)`

**Purpose:** Reads and returns the random background id value held by the this instance.

```csharp
// Obtain an instance of BannerManager from the subsystem API first
BannerManager bannerManager = ...;
var result = bannerManager.GetRandomBackgroundId(random);
```

### GetRandomBannerIconId
`public int GetRandomBannerIconId(MBFastRandom random)`

**Purpose:** Reads and returns the random banner icon id value held by the this instance.

```csharp
// Obtain an instance of BannerManager from the subsystem API first
BannerManager bannerManager = ...;
var result = bannerManager.GetRandomBannerIconId(random);
```

### GetBackgroundMeshName
`public string GetBackgroundMeshName(int id)`

**Purpose:** Reads and returns the background mesh name value held by the this instance.

```csharp
// Obtain an instance of BannerManager from the subsystem API first
BannerManager bannerManager = ...;
var result = bannerManager.GetBackgroundMeshName(0);
```

### GetIconSourceTextureName
`public string GetIconSourceTextureName(int id)`

**Purpose:** Reads and returns the icon source texture name value held by the this instance.

```csharp
// Obtain an instance of BannerManager from the subsystem API first
BannerManager bannerManager = ...;
var result = bannerManager.GetIconSourceTextureName(0);
```

### SetBaseBackgroundId
`public void SetBaseBackgroundId(int id)`

**Purpose:** Assigns a new value to base background id and updates the object's internal state.

```csharp
// Obtain an instance of BannerManager from the subsystem API first
BannerManager bannerManager = ...;
bannerManager.SetBaseBackgroundId(0);
```

### SetCultureColors
`public void SetCultureColors(BasicCultureObject culture, List<BannerColor> color)`

**Purpose:** Assigns a new value to culture colors and updates the object's internal state.

```csharp
// Obtain an instance of BannerManager from the subsystem API first
BannerManager bannerManager = ...;
bannerManager.SetCultureColors(culture, color);
```

### LoadBannerIcons
`public void LoadBannerIcons()`

**Purpose:** Reads banner icons from persistent storage or a stream.

```csharp
// Obtain an instance of BannerManager from the subsystem API first
BannerManager bannerManager = ...;
bannerManager.LoadBannerIcons();
```

### LoadBannerIcons
`public void LoadBannerIcons(string xmlPath)`

**Purpose:** Reads banner icons from persistent storage or a stream.

```csharp
// Obtain an instance of BannerManager from the subsystem API first
BannerManager bannerManager = ...;
bannerManager.LoadBannerIcons("example");
```

## Usage Example

```csharp
var manager = BannerManager.Current;
```

## See Also

- [Area Index](../)