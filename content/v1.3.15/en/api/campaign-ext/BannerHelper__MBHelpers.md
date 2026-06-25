---
title: "BannerHelper__MBHelpers"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `BannerHelper`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.3.15](../../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# BannerHelper

**Namespace:** MBHelpers
**Module:** MBHelpers
**Type:** `public static class BannerHelper`
**Base:** none
**File:** `TaleWorlds.MountAndBlade/MBHelpers/BannerHelper.cs`

## Overview

`BannerHelper` is a helper class that usually provides static logic which does not depend on instance state.

## Mental Model

Treat `BannerHelper` as a Helper-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Methods

### AddBannerBonusForBanner
`public static void AddBannerBonusForBanner(BannerEffect bannerEffect, BannerComponent bannerComponent, ref FactoredNumber bonuses)`

**Purpose:** Adds `banner bonus for banner` to the current collection or state.

## Usage Example

```csharp
BannerHelper.Initialize();
```

## See Also

- [Complete Class Catalog](../catalog)