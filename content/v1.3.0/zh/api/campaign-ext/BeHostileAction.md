---
title: "BeHostileAction"
description: "BeHostileAction 的自动生成战役动作参考。"
---
# BeHostileAction

**Namespace:** TaleWorlds.CampaignSystem.Actions
**Module:** TaleWorlds.CampaignSystem
**Type:** static class
**File:** `TaleWorlds.CampaignSystem/Actions/BeHostileAction.cs`

BeHostileAction 是一组静态方法，用于在战役中以特定原因触发"BeHostile"。modder通过调用其 `Apply*` 方法改变游戏状态（每种原因一个重载）。

## 方法

### ApplyHostileAction

```csharp
public static void ApplyHostileAction(PartyBase attackerParty, PartyBase defenderParty, float value)
```

**用途 / Purpose:** 将 hostile action 的效果应用到当前对象。

### ApplyMinorCoercionHostileAction

```csharp
public static void ApplyMinorCoercionHostileAction(PartyBase attackerParty, PartyBase defenderParty)
```

**用途 / Purpose:** 将 minor coercion hostile action 的效果应用到当前对象。

### ApplyMajorCoercionHostileAction

```csharp
public static void ApplyMajorCoercionHostileAction(PartyBase attackerParty, PartyBase defenderParty)
```

**用途 / Purpose:** 将 major coercion hostile action 的效果应用到当前对象。

### ApplyEncounterHostileAction

```csharp
public static void ApplyEncounterHostileAction(PartyBase attackerParty, PartyBase defenderParty)
```

**用途 / Purpose:** 将 encounter hostile action 的效果应用到当前对象。

## 使用示例

```csharp
// 在 mod 中触发一次该动作
BeHostileAction.ApplyHostileAction(attackerParty, defenderParty, 100);
```

## 参见

- [本区域目录](../)
- [战役系统](../../campaign/)