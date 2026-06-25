---
title: "BannerHelper"
description: "Auto-generated class reference for BannerHelper."
---
# BannerHelper

**Namespace:** MBHelpers
**Module:** MBHelpers
**Type:** `public static class BannerHelper`
**Base:** none
**File:** `bin/TaleWorlds.MountAndBlade/MBHelpers/BannerHelper.cs`

## Overview

`BannerHelper` is a helper class that usually provides static logic which does not depend on instance state.

## Mental Model

Treat `BannerHelper` as a Helper-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Methods

### AddBannerBonusForBanner
`public static void AddBannerBonusForBanner(BannerEffect bannerEffect, BannerComponent bannerComponent, ref FactoredNumber bonuses)`

**Purpose:** Adds `banner bonus for banner` to the current collection or state.

```csharp
// Static call; no instance required
BannerHelper.AddBannerBonusForBanner(bannerEffect, bannerComponent, bonuses);
```

## Usage Example

```csharp
BannerHelper.Initialize();
```

## See Also

- [Area Index](../)