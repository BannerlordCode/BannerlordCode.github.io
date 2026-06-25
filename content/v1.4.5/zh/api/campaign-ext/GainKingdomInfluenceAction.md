---
title: "GainKingdomInfluenceAction"
description: "GainKingdomInfluenceAction 的自动生成战役动作参考。"
---
# GainKingdomInfluenceAction

**Namespace:** TaleWorlds.CampaignSystem.Actions
**Module:** TaleWorlds.CampaignSystem
**Type:** static class
**File:** `bin/TaleWorlds.CampaignSystem/TaleWorlds.CampaignSystem.Actions/GainKingdomInfluenceAction.cs`

GainKingdomInfluenceAction 是一组静态方法，用于在战役中以特定原因触发"GainKingdomInfluence"。modder通过调用其 `Apply*` 方法改变游戏状态（每种原因一个重载）。

## 方法

### ApplyForBattle

```csharp
public static void ApplyForBattle(Hero hero, float value)
```

**用途 / Purpose:** for battle。

### ApplyForGivingFood

```csharp
public static void ApplyForGivingFood(Hero hero1, Hero hero2, float value)
```

**用途 / Purpose:** for giving food。

### ApplyForDefault

```csharp
public static void ApplyForDefault(Hero hero, float value)
```

**用途 / Purpose:** for default。

### ApplyForJoiningFaction

```csharp
public static void ApplyForJoiningFaction(Hero hero, float value)
```

**用途 / Purpose:** for joining faction。

### ApplyForDonatePrisoners

```csharp
public static void ApplyForDonatePrisoners(MobileParty donatingParty, float value)
```

**用途 / Purpose:** for donate prisoners。

### ApplyForRaidingEnemyVillage

```csharp
public static void ApplyForRaidingEnemyVillage(MobileParty side1Party, float value)
```

**用途 / Purpose:** for raiding enemy village。

### ApplyForBesiegingEnemySettlement

```csharp
public static void ApplyForBesiegingEnemySettlement(MobileParty side1Party, float value)
```

**用途 / Purpose:** for besieging enemy settlement。

### ApplyForSiegeSafePassageBarter

```csharp
public static void ApplyForSiegeSafePassageBarter(MobileParty side1Party, float value)
```

**用途 / Purpose:** for siege safe passage barter。

### ApplyForCapturingEnemySettlement

```csharp
public static void ApplyForCapturingEnemySettlement(MobileParty side1Party, float value)
```

**用途 / Purpose:** for capturing enemy settlement。

### ApplyForLeavingTroopToGarrison

```csharp
public static void ApplyForLeavingTroopToGarrison(Hero hero, float value)
```

**用途 / Purpose:** for leaving troop to garrison。

### ApplyForBoardGameWon

```csharp
public static void ApplyForBoardGameWon(Hero hero, float value)
```

**用途 / Purpose:** for board game won。

## 使用示例

```csharp
// 在 mod 中触发一次该动作
GainKingdomInfluenceAction.ApplyForBattle(hero, 100);
```

## 参见

- [本区域目录](../)
- [战役系统](../../campaign/)