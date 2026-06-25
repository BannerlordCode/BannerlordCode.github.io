---
title: "BannerManager"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `BannerManager`
- [← Area / Back to core-extra](./)
- [↑ API Index](../)
- [🏠 Home v1.3.0](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
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

**Purpose:** Initializes the state, resources, or bindings for `initialize`.

### ResetAndLoad
`public static void ResetAndLoad()`

**Purpose:** Resets `and load` to its initial state.

### GetColor
`public static uint GetColor(int id)`

**Purpose:** Gets the current value of `color`.

### GetColorId
`public static int GetColorId(uint color)`

**Purpose:** Gets the current value of `color id`.

### GetRandomColorId
`public int GetRandomColorId(MBFastRandom random)`

**Purpose:** Gets the current value of `random color id`.

### GetIconDataFromIconId
`public BannerIconData GetIconDataFromIconId(int id)`

**Purpose:** Gets the current value of `icon data from icon id`.

### GetRandomBackgroundId
`public int GetRandomBackgroundId(MBFastRandom random)`

**Purpose:** Gets the current value of `random background id`.

### GetRandomBannerIconId
`public int GetRandomBannerIconId(MBFastRandom random)`

**Purpose:** Gets the current value of `random banner icon id`.

### GetBackgroundMeshName
`public string GetBackgroundMeshName(int id)`

**Purpose:** Gets the current value of `background mesh name`.

### GetIconSourceTextureName
`public string GetIconSourceTextureName(int id)`

**Purpose:** Gets the current value of `icon source texture name`.

### SetBaseBackgroundId
`public void SetBaseBackgroundId(int id)`

**Purpose:** Sets the value or state of `base background id`.

### SetCultureColors
`public void SetCultureColors(BasicCultureObject culture, List<BannerColor> color)`

**Purpose:** Sets the value or state of `culture colors`.

### LoadBannerIcons
`public void LoadBannerIcons()`

**Purpose:** Loads `banner icons` data.

### LoadBannerIcons
`public void LoadBannerIcons(string xmlPath)`

**Purpose:** Loads `banner icons` data.

## Usage Example

```csharp
var manager = BannerManager.Current;
```

## See Also

- [Complete Class Catalog](../catalog)