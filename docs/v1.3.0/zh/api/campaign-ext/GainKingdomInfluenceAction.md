<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `GainKingdomInfluenceAction`
- [← 本领域 / 返回 campaign-ext](./)
- [↑ API 目录](../)
- [🏠 首页 v1.3.0](../../)
- [⭐ 版本架构](../../architecture/)
<!-- END BREADCRUMB -->
# GainKingdomInfluenceAction

## 心智模型

先把 `GainKingdomInfluenceAction` 当作这个子系统的入口或数据节点来理解：先看属性代表什么状态，再看方法允许你做什么。

**Namespace:** TaleWorlds.CampaignSystem.Actions
**Module:** TaleWorlds.CampaignSystem
**Type:** static class
**File:** `TaleWorlds.CampaignSystem/Actions/GainKingdomInfluenceAction.cs`

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

- [完整类目录](../catalog)
- [战役系统目录](../catalog-campaign)