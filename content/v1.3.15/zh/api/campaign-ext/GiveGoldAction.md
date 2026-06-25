---
title: "GiveGoldAction"
description: "GiveGoldAction 的自动生成战役动作参考。"
---
# GiveGoldAction

**Namespace:** TaleWorlds.CampaignSystem.Actions
**Module:** TaleWorlds.CampaignSystem
**Type:** static class
**File:** `TaleWorlds.CampaignSystem/Actions/GiveGoldAction.cs`

GiveGoldAction 是一组静态方法，用于在战役中以特定原因触发"GiveGold"。modder通过调用其 `Apply*` 方法改变游戏状态（每种原因一个重载）。

## 方法

### ApplyBetweenCharacters

```csharp
public static void ApplyBetweenCharacters(Hero giverHero, Hero recipientHero, int amount, bool disableNotification = false)
```

**用途 / Purpose:** between characters。

### ApplyForCharacterToSettlement

```csharp
public static void ApplyForCharacterToSettlement(Hero giverHero, Settlement settlement, int amount, bool disableNotification = false)
```

**用途 / Purpose:** for character to settlement。

### ApplyForSettlementToCharacter

```csharp
public static void ApplyForSettlementToCharacter(Settlement giverSettlement, Hero recipientHero, int amount, bool disableNotification = false)
```

**用途 / Purpose:** for settlement to character。

### ApplyForSettlementToParty

```csharp
public static void ApplyForSettlementToParty(Settlement giverSettlement, PartyBase recipientParty, int amount, bool disableNotification = false)
```

**用途 / Purpose:** for settlement to party。

### ApplyForPartyToSettlement

```csharp
public static void ApplyForPartyToSettlement(PartyBase giverParty, Settlement settlement, int amount, bool disableNotification = false)
```

**用途 / Purpose:** for party to settlement。

### ApplyForPartyToCharacter

```csharp
public static void ApplyForPartyToCharacter(PartyBase giverParty, Hero recipientHero, int amount, bool disableNotification = false)
```

**用途 / Purpose:** for party to character。

### ApplyForCharacterToParty

```csharp
public static void ApplyForCharacterToParty(Hero giverHero, PartyBase receipentParty, int amount, bool disableNotification = false)
```

**用途 / Purpose:** for character to party。

### ApplyForPartyToParty

```csharp
public static void ApplyForPartyToParty(PartyBase giverParty, PartyBase receipentParty, int amount, bool disableNotification = false)
```

**用途 / Purpose:** for party to party。

## 使用示例

```csharp
// 在 mod 中触发一次该动作
GiveGoldAction.ApplyBetweenCharacters(giverHero, recipientHero, 100, false);
```

## 参见

- [本区域目录](../)
- [战役系统](../campaign/)