---
title: "GiveGoldAction"
description: "GiveGoldAction 的自动生成战役动作参考。"
---
# GiveGoldAction

**Namespace:** TaleWorlds.CampaignSystem.Actions
**Module:** TaleWorlds.CampaignSystem
**Type:** static class
**File:** `bin/TaleWorlds.CampaignSystem/TaleWorlds.CampaignSystem.Actions/GiveGoldAction.cs`

GiveGoldAction 是一组静态方法，用于在战役中以特定原因触发"GiveGold"。modder通过调用其 `Apply*` 方法改变游戏状态（每种原因一个重载）。

## 方法

### ApplyBetweenCharacters

```csharp
public static void ApplyBetweenCharacters(Hero giverHero, Hero recipientHero, int amount, bool disableNotification = false)
```

**用途 / Purpose:** 将 between characters 的效果应用到当前对象。

### ApplyForCharacterToSettlement

```csharp
public static void ApplyForCharacterToSettlement(Hero giverHero, Settlement settlement, int amount, bool disableNotification = false)
```

**用途 / Purpose:** 将 for character to settlement 的效果应用到当前对象。

### ApplyForSettlementToCharacter

```csharp
public static void ApplyForSettlementToCharacter(Settlement giverSettlement, Hero recipientHero, int amount, bool disableNotification = false)
```

**用途 / Purpose:** 将 for settlement to character 的效果应用到当前对象。

### ApplyForSettlementToParty

```csharp
public static void ApplyForSettlementToParty(Settlement giverSettlement, PartyBase recipientParty, int amount, bool disableNotification = false)
```

**用途 / Purpose:** 将 for settlement to party 的效果应用到当前对象。

### ApplyForPartyToSettlement

```csharp
public static void ApplyForPartyToSettlement(PartyBase giverParty, Settlement settlement, int amount, bool disableNotification = false)
```

**用途 / Purpose:** 将 for party to settlement 的效果应用到当前对象。

### ApplyForPartyToCharacter

```csharp
public static void ApplyForPartyToCharacter(PartyBase giverParty, Hero recipientHero, int amount, bool disableNotification = false)
```

**用途 / Purpose:** 将 for party to character 的效果应用到当前对象。

### ApplyForCharacterToParty

```csharp
public static void ApplyForCharacterToParty(Hero giverHero, PartyBase receipentParty, int amount, bool disableNotification = false)
```

**用途 / Purpose:** 将 for character to party 的效果应用到当前对象。

### ApplyForPartyToParty

```csharp
public static void ApplyForPartyToParty(PartyBase giverParty, PartyBase receipentParty, int amount, bool disableNotification = false)
```

**用途 / Purpose:** 将 for party to party 的效果应用到当前对象。

## 使用示例

```csharp
// 在 mod 中触发一次该动作
GiveGoldAction.ApplyBetweenCharacters(giverHero, recipientHero, 100, false);
```

## 参见

- [本区域目录](../)
- [战役系统](../../campaign/)