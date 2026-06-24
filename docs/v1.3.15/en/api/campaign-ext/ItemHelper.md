<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `ItemHelper`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.3.15](../../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# ItemHelper

**Namespace:** Helpers
**Module:** Helpers
**Type:** `public static class ItemHelper`
**Base:** none
**File:** `TaleWorlds.CampaignSystem/Helpers/ItemHelper.cs`

## Overview

`ItemHelper` is a helper class that usually provides static logic which does not depend on instance state.

## Mental Model

Treat `ItemHelper` as a Helper-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Methods

### IsWeaponComparableWithUsage
`public static bool IsWeaponComparableWithUsage(ItemObject item, string comparedUsageId)`

**Purpose:** Handles logic related to `is weapon comparable with usage`.

### IsWeaponComparableWithUsage
`public static bool IsWeaponComparableWithUsage(ItemObject item, string comparedUsageId, out int comparableUsageIndex)`

**Purpose:** Handles logic related to `is weapon comparable with usage`.

### CheckComparability
`public static bool CheckComparability(ItemObject item, ItemObject comparedItem)`

**Purpose:** Handles logic related to `check comparability`.

### CheckComparability
`public static bool CheckComparability(ItemObject item, ItemObject comparedItem, int usageIndex)`

**Purpose:** Handles logic related to `check comparability`.

### GetSwingDamageText
`public static TextObject GetSwingDamageText(WeaponComponentData weapon, ItemModifier itemModifier)`

**Purpose:** Gets the current value of `swing damage text`.

### GetMissileDamageText
`public static TextObject GetMissileDamageText(WeaponComponentData weapon, ItemModifier itemModifier)`

**Purpose:** Gets the current value of `missile damage text`.

### GetThrustDamageText
`public static TextObject GetThrustDamageText(WeaponComponentData weapon, ItemModifier itemModifier)`

**Purpose:** Gets the current value of `thrust damage text`.

### NumberOfItems
`public static TextObject NumberOfItems(int number, ItemObject item)`

**Purpose:** Handles logic related to `number of items`.

## Usage Example

```csharp
ItemHelper.Initialize();
```

## See Also

- [Complete Class Catalog](../catalog)