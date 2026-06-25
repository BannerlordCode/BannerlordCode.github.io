---
title: "CraftingHelper"
description: "Auto-generated class reference for CraftingHelper."
---
# CraftingHelper

**Namespace:** Helpers
**Module:** Helpers
**Type:** `public static class CraftingHelper`
**Base:** none
**File:** `bin/TaleWorlds.CampaignSystem/Helpers/CraftingHelper.cs`

## Overview

`CraftingHelper` is a helper class that usually provides static logic which does not depend on instance state.

## Mental Model

Treat `CraftingHelper` as a Helper-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Methods

### GetAvailableHeroesForCrafting
`public static IEnumerable<Hero> GetAvailableHeroesForCrafting()`

**Purpose:** **Purpose:** Reads and returns the available heroes for crafting value held by the this instance.

```csharp
// Static call; no instance required
CraftingHelper.GetAvailableHeroesForCrafting();
```

### ChangeCurrentCraftingTemplate
`public static void ChangeCurrentCraftingTemplate(CraftingTemplate craftingTemplate)`

**Purpose:** **Purpose:** Executes the ChangeCurrentCraftingTemplate logic.

```csharp
// Static call; no instance required
CraftingHelper.ChangeCurrentCraftingTemplate(craftingTemplate);
```

### OpenCrafting
`public static void OpenCrafting(CraftingTemplate craftingTemplate, CraftingState oldState = null)`

**Purpose:** **Purpose:** Opens the resource or UI associated with crafting.

```csharp
// Static call; no instance required
CraftingHelper.OpenCrafting(craftingTemplate, null);
```

## Usage Example

```csharp
CraftingHelper.Initialize();
```

## See Also

- [Area Index](../)