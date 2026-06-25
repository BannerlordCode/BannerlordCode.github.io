---
title: "PartyBaseHelper"
description: "PartyBaseHelper 的自动生成类参考。"
---
# PartyBaseHelper

**Namespace:** Helpers
**Module:** Helpers
**Type:** `public static class PartyBaseHelper`
**Base:** 无
**File:** `TaleWorlds.CampaignSystem/Helpers/PartyBaseHelper.cs`

## 概述

`PartyBaseHelper` 是一个帮助类，通常提供不依赖实例状态的静态辅助逻辑。

## 心智模型

把 `PartyBaseHelper` 当作一个 Helper 型扩展点来理解：先确认谁创建它、谁持有它、谁调用它，再决定是继承、组合还是只读使用。

## 主要方法

### SortRoster
`public static void SortRoster(MobileParty mobileParty)`

**用途 / Purpose:** **用途 / Purpose:** 调用 SortRoster 对应的操作。

```csharp
// 静态调用，不需要实例
PartyBaseHelper.SortRoster(mobileParty);
```

### GetPartySizeText
`public static TextObject GetPartySizeText(PartyBase party)`

**用途 / Purpose:** **用途 / Purpose:** 读取并返回当前对象中 party size text 的结果。

```csharp
// 静态调用，不需要实例
PartyBaseHelper.GetPartySizeText(party);
```

### GetPartySizeText
`public static TextObject GetPartySizeText(int healtyNumber, int woundedNumber, bool isInspected)`

**用途 / Purpose:** **用途 / Purpose:** 读取并返回当前对象中 party size text 的结果。

```csharp
// 静态调用，不需要实例
PartyBaseHelper.GetPartySizeText(0, 0, false);
```

### GetShipSizeText
`public static string GetShipSizeText(int shipCount, bool isInspected)`

**用途 / Purpose:** **用途 / Purpose:** 读取并返回当前对象中 ship size text 的结果。

```csharp
// 静态调用，不需要实例
PartyBaseHelper.GetShipSizeText(0, false);
```

### FindPartySizeNormalLimit
`public static float FindPartySizeNormalLimit(MobileParty mobileParty)`

**用途 / Purpose:** **用途 / Purpose:** 在当前集合/范围内查找满足条件的party size normal limit。

```csharp
// 静态调用，不需要实例
PartyBaseHelper.FindPartySizeNormalLimit(mobileParty);
```

### GetCaptainOfTroop
`public static Hero GetCaptainOfTroop(PartyBase affectorParty, CharacterObject affectorCharacter)`

**用途 / Purpose:** **用途 / Purpose:** 读取并返回当前对象中 captain of troop 的结果。

```csharp
// 静态调用，不需要实例
PartyBaseHelper.GetCaptainOfTroop(affectorParty, affectorCharacter);
```

### PrintRosterContents
`public static string PrintRosterContents(TroopRoster roster)`

**用途 / Purpose:** **用途 / Purpose:** 调用 PrintRosterContents 对应的操作。

```csharp
// 静态调用，不需要实例
PartyBaseHelper.PrintRosterContents(roster);
```

### PrintSummarisedItemRoster
`public static TextObject PrintSummarisedItemRoster(ItemRoster items)`

**用途 / Purpose:** **用途 / Purpose:** 调用 PrintSummarisedItemRoster 对应的操作。

```csharp
// 静态调用，不需要实例
PartyBaseHelper.PrintSummarisedItemRoster(items);
```

### PrintRegularTroopCategories
`public static TextObject PrintRegularTroopCategories(TroopRoster roster)`

**用途 / Purpose:** **用途 / Purpose:** 调用 PrintRegularTroopCategories 对应的操作。

```csharp
// 静态调用，不需要实例
PartyBaseHelper.PrintRegularTroopCategories(roster);
```

### GetVisualPartyLeader
`public static CharacterObject GetVisualPartyLeader(PartyBase party)`

**用途 / Purpose:** **用途 / Purpose:** 读取并返回当前对象中 visual party leader 的结果。

```csharp
// 静态调用，不需要实例
PartyBaseHelper.GetVisualPartyLeader(party);
```

### GetSpeedLimitation
`public static int GetSpeedLimitation(ItemRoster partyItemRoster, out ItemObject speedLimitationItem)`

**用途 / Purpose:** **用途 / Purpose:** 读取并返回当前对象中 speed limitation 的结果。

```csharp
// 静态调用，不需要实例
PartyBaseHelper.GetSpeedLimitation(partyItemRoster, speedLimitationItem);
```

### HasFeat
`public static bool HasFeat(PartyBase party, FeatObject feat)`

**用途 / Purpose:** **用途 / Purpose:** 判断当前对象是否已经持有 feat。

```csharp
// 静态调用，不需要实例
PartyBaseHelper.HasFeat(party, feat);
```

## 使用示例

```csharp
PartyBaseHelper.Initialize();
```

## 参见

- [本区域目录](../)