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

**用途 / Purpose:** **用途 / Purpose:** 将 for battle 的效果应用到当前对象。

### ApplyForGivingFood

```csharp
public static void ApplyForGivingFood(Hero hero1, Hero hero2, float value)
```

**用途 / Purpose:** **用途 / Purpose:** 将 for giving food 的效果应用到当前对象。

### ApplyForDefault

```csharp
public static void ApplyForDefault(Hero hero, float value)
```

**用途 / Purpose:** **用途 / Purpose:** 将 for default 的效果应用到当前对象。

### ApplyForJoiningFaction

```csharp
public static void ApplyForJoiningFaction(Hero hero, float value)
```

**用途 / Purpose:** **用途 / Purpose:** 将 for joining faction 的效果应用到当前对象。

### ApplyForDonatePrisoners

```csharp
public static void ApplyForDonatePrisoners(MobileParty donatingParty, float value)
```

**用途 / Purpose:** **用途 / Purpose:** 将 for donate prisoners 的效果应用到当前对象。

### ApplyForRaidingEnemyVillage

```csharp
public static void ApplyForRaidingEnemyVillage(MobileParty side1Party, float value)
```

**用途 / Purpose:** **用途 / Purpose:** 将 for raiding enemy village 的效果应用到当前对象。

### ApplyForBesiegingEnemySettlement

```csharp
public static void ApplyForBesiegingEnemySettlement(MobileParty side1Party, float value)
```

**用途 / Purpose:** **用途 / Purpose:** 将 for besieging enemy settlement 的效果应用到当前对象。

### ApplyForSiegeSafePassageBarter

```csharp
public static void ApplyForSiegeSafePassageBarter(MobileParty side1Party, float value)
```

**用途 / Purpose:** **用途 / Purpose:** 将 for siege safe passage barter 的效果应用到当前对象。

### ApplyForCapturingEnemySettlement

```csharp
public static void ApplyForCapturingEnemySettlement(MobileParty side1Party, float value)
```

**用途 / Purpose:** **用途 / Purpose:** 将 for capturing enemy settlement 的效果应用到当前对象。

### ApplyForLeavingTroopToGarrison

```csharp
public static void ApplyForLeavingTroopToGarrison(Hero hero, float value)
```

**用途 / Purpose:** **用途 / Purpose:** 将 for leaving troop to garrison 的效果应用到当前对象。

### ApplyForBoardGameWon

```csharp
public static void ApplyForBoardGameWon(Hero hero, float value)
```

**用途 / Purpose:** **用途 / Purpose:** 将 for board game won 的效果应用到当前对象。

## 使用示例

```csharp
// 在 mod 中触发一次该动作
GainKingdomInfluenceAction.ApplyForBattle(hero, 100);
```

## 参见

- [本区域目录](../)
- [战役系统](../../campaign/)