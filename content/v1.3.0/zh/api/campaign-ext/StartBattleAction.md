---
title: "StartBattleAction"
description: "StartBattleAction 的自动生成战役动作参考。"
---
# StartBattleAction

**Namespace:** TaleWorlds.CampaignSystem.Actions
**Module:** TaleWorlds.CampaignSystem
**Type:** static class
**File:** `TaleWorlds.CampaignSystem/Actions/StartBattleAction.cs`

StartBattleAction 是一组静态方法，用于在战役中以特定原因触发"StartBattle"。modder通过调用其 `Apply*` 方法改变游戏状态（每种原因一个重载）。

## 方法

### Apply

```csharp
public static void Apply(PartyBase attackerParty, PartyBase defenderParty)
```

**用途 / Purpose:** **用途 / Purpose:** 将当前对象的效果应用到目标。

### ApplyStartBattle

```csharp
public static void ApplyStartBattle(MobileParty attackerParty, MobileParty defenderParty)
```

**用途 / Purpose:** **用途 / Purpose:** 将 start battle 的效果应用到当前对象。

### ApplyStartRaid

```csharp
public static void ApplyStartRaid(MobileParty attackerParty, Settlement settlement)
```

**用途 / Purpose:** **用途 / Purpose:** 将 start raid 的效果应用到当前对象。

### ApplyStartSallyOut

```csharp
public static void ApplyStartSallyOut(Settlement settlement, MobileParty defenderParty)
```

**用途 / Purpose:** **用途 / Purpose:** 将 start sally out 的效果应用到当前对象。

### ApplyStartAssaultAgainstWalls

```csharp
public static void ApplyStartAssaultAgainstWalls(MobileParty attackerParty, Settlement settlement)
```

**用途 / Purpose:** **用途 / Purpose:** 将 start assault against walls 的效果应用到当前对象。

## 使用示例

```csharp
// 在 mod 中触发一次该动作
StartBattleAction.Apply(attackerParty, defenderParty);
```

## 参见

- [本区域目录](../)
- [战役系统](../../campaign/)