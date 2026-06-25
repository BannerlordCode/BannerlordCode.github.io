---
title: "StartBattleAction"
description: "StartBattleAction 的自动生成战役动作参考。"
---
# StartBattleAction

**Namespace:** TaleWorlds.CampaignSystem.Actions
**Module:** TaleWorlds.CampaignSystem
**Type:** static class
**File:** `bin/TaleWorlds.CampaignSystem/TaleWorlds.CampaignSystem.Actions/StartBattleAction.cs`

StartBattleAction 是一组静态方法，用于在战役中以特定原因触发"StartBattle"。modder通过调用其 `Apply*` 方法改变游戏状态（每种原因一个重载）。

## 方法

### Apply

```csharp
public static void Apply(PartyBase attackerParty, PartyBase defenderParty)
```

**用途 / Purpose:** 。

### ApplyStartBattle

```csharp
public static void ApplyStartBattle(MobileParty attackerParty, MobileParty defenderParty)
```

**用途 / Purpose:** start battle。

### ApplyStartRaid

```csharp
public static void ApplyStartRaid(MobileParty attackerParty, Settlement settlement)
```

**用途 / Purpose:** start raid。

### ApplyStartSallyOut

```csharp
public static void ApplyStartSallyOut(Settlement settlement, MobileParty defenderParty)
```

**用途 / Purpose:** start sally out。

### ApplyStartAssaultAgainstWalls

```csharp
public static void ApplyStartAssaultAgainstWalls(MobileParty attackerParty, Settlement settlement)
```

**用途 / Purpose:** start assault against walls。

## 使用示例

```csharp
// 在 mod 中触发一次该动作
StartBattleAction.Apply(attackerParty, defenderParty);
```

## 参见

- [本区域目录](../)
- [战役系统](../../campaign/)