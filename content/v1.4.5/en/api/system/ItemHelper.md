---
title: "ItemHelper"
description: "Auto-generated class reference for ItemHelper."
---
# ItemHelper

**Namespace:** Helpers
**Module:** Helpers
**Type:** `public static class ItemHelper`
**Base:** none
**File:** `bin/TaleWorlds.CampaignSystem/Helpers/ItemHelper.cs`

## Overview

`ItemHelper` is a helper class that usually provides static logic which does not depend on instance state.

## Mental Model

Treat `ItemHelper` as a Helper-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Methods

### IsWeaponComparableWithUsage
`public static bool IsWeaponComparableWithUsage(ItemObject item, string comparedUsageId)`

**Purpose:** **Purpose:** Determines whether the this instance is in the weapon comparable with usage state or condition.

```csharp
// Static call; no instance required
ItemHelper.IsWeaponComparableWithUsage(item, "example");
```

### IsWeaponComparableWithUsage
`public static bool IsWeaponComparableWithUsage(ItemObject item, string comparedUsageId, out int comparableUsageIndex)`

**Purpose:** **Purpose:** Determines whether the this instance is in the weapon comparable with usage state or condition.

```csharp
// Static call; no instance required
ItemHelper.IsWeaponComparableWithUsage(item, "example", comparableUsageIndex);
```

### CheckComparability
`public static bool CheckComparability(ItemObject item, ItemObject comparedItem)`

**Purpose:** **Purpose:** Verifies whether comparability holds true for the this instance.

```csharp
// Static call; no instance required
ItemHelper.CheckComparability(item, comparedItem);
```

### CheckComparability
`public static bool CheckComparability(ItemObject item, ItemObject comparedItem, int usageIndex)`

**Purpose:** **Purpose:** Verifies whether comparability holds true for the this instance.

```csharp
// Static call; no instance required
ItemHelper.CheckComparability(item, comparedItem, 0);
```

### GetSwingDamageText
`public static TextObject GetSwingDamageText(WeaponComponentData weapon, ItemModifier itemModifier)`

**Purpose:** **Purpose:** Reads and returns the swing damage text value held by the this instance.

```csharp
// Static call; no instance required
ItemHelper.GetSwingDamageText(weapon, itemModifier);
```

### GetMissileDamageText
`public static TextObject GetMissileDamageText(WeaponComponentData weapon, ItemModifier itemModifier)`

**Purpose:** **Purpose:** Reads and returns the missile damage text value held by the this instance.

```csharp
// Static call; no instance required
ItemHelper.GetMissileDamageText(weapon, itemModifier);
```

### GetThrustDamageText
`public static TextObject GetThrustDamageText(WeaponComponentData weapon, ItemModifier itemModifier)`

**Purpose:** **Purpose:** Reads and returns the thrust damage text value held by the this instance.

```csharp
// Static call; no instance required
ItemHelper.GetThrustDamageText(weapon, itemModifier);
```

### NumberOfItems
`public static TextObject NumberOfItems(int number, ItemObject item)`

**Purpose:** **Purpose:** Executes the NumberOfItems logic.

```csharp
// Static call; no instance required
ItemHelper.NumberOfItems(0, item);
```

## Usage Example

```csharp
ItemHelper.Initialize();
```

## See Also

- [Area Index](../)