<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `ItemHelper`
- [← 本领域 / 返回 campaign-ext](./)
- [↑ API 目录](../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# ItemHelper

**命名空间:** Helpers
**模块:** Helpers
**类型:** 类 class class
**领域:** 战役系统 Campaign

## 概述

> 本页为自动生成的存根。`ItemHelper` 是 `Helpers` 命名空间下的一个类 class。
> 如需了解其属性、方法和开发者用例，请参考源码或贡
## 主要方法

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

献文档。

## 参见

- [完整类目录](../catalog)
- [本领域目录](../catalog-campaign)