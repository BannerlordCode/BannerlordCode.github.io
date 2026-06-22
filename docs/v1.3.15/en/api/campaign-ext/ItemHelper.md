<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `ItemHelper`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# ItemHelper

**Namespace:** Helpers
**Module:** Helpers
**Type:** class
**Area:** Campaign System

## Overview

> This is an auto-generated stub. `ItemHelper` is a class in the `Helpers` namespace.
> For properties, methods, and developer use-cases, refer to source code or contribute documentation.


## Key Methods

### IsWeaponComparableWithUsage

```csharp
public static bool IsWeaponComparableWithUsage(ItemObject item, string comparedUsageId)
```

### IsWeaponComparableWithUsage

```csharp
public static bool IsWeaponComparableWithUsage(ItemObject item, string comparedUsageId, out int comparableUsageIndex)
```

### CheckComparability

```csharp
public static bool CheckComparability(ItemObject item, ItemObject comparedItem)
```

### CheckComparability

```csharp
public static bool CheckComparability(ItemObject item, ItemObject comparedItem, int usageIndex)
```

### GetSwingDamageText

```csharp
public static TextObject GetSwingDamageText(WeaponComponentData weapon, ItemModifier itemModifier)
```

### GetMissileDamageText

```csharp
public static TextObject GetMissileDamageText(WeaponComponentData weapon, ItemModifier itemModifier)
```

### GetThrustDamageText

```csharp
public static TextObject GetThrustDamageText(WeaponComponentData weapon, ItemModifier itemModifier)
```

### NumberOfItems

```csharp
public static TextObject NumberOfItems(int number, ItemObject item)
```

## See Also

- [Complete Class Catalog](../catalog)
- [Area catalog](../catalog-campaign)