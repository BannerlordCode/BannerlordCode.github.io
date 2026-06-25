---
title: "CraftingHelper"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `CraftingHelper`
- [← Area / Back to system](./)
- [↑ API Index](../)
- [🏠 Home v1.3.0](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# CraftingHelper

**Namespace:** Helpers
**Module:** Helpers
**Type:** `public static class CraftingHelper`
**Base:** none
**File:** `TaleWorlds.CampaignSystem/Helpers/CraftingHelper.cs`

## Overview

`CraftingHelper` is a helper class that usually provides static logic which does not depend on instance state.

## Mental Model

Treat `CraftingHelper` as a Helper-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Methods

### GetAvailableHeroesForCrafting
`public static IEnumerable<Hero> GetAvailableHeroesForCrafting()`

**Purpose:** Gets the current value of `available heroes for crafting`.

### ChangeCurrentCraftingTemplate
`public static void ChangeCurrentCraftingTemplate(CraftingTemplate craftingTemplate)`

**Purpose:** Handles logic related to `change current crafting template`.

### OpenCrafting
`public static void OpenCrafting(CraftingTemplate craftingTemplate, CraftingState oldState = null)`

**Purpose:** Handles logic related to `open crafting`.

## Usage Example

```csharp
CraftingHelper.Initialize();
```

## See Also

- [Complete Class Catalog](../catalog)