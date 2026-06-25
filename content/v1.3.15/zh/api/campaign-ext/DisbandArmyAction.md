---
title: "DisbandArmyAction"
description: "DisbandArmyAction 的自动生成战役动作参考。"
---
# DisbandArmyAction

**Namespace:** TaleWorlds.CampaignSystem.Actions
**Module:** TaleWorlds.CampaignSystem
**Type:** static class
**File:** `TaleWorlds.CampaignSystem/Actions/DisbandArmyAction.cs`

DisbandArmyAction 是一组静态方法，用于在战役中以特定原因触发"DisbandArmy"。modder通过调用其 `Apply*` 方法改变游戏状态（每种原因一个重载）。

## 方法

### ApplyByReleasedByPlayerAfterBattle

```csharp
public static void ApplyByReleasedByPlayerAfterBattle(Army army)
```

**用途 / Purpose:** **用途 / Purpose:** 将 by released by player after battle 的效果应用到当前对象。

### ApplyByArmyLeaderIsDead

```csharp
public static void ApplyByArmyLeaderIsDead(Army army)
```

**用途 / Purpose:** **用途 / Purpose:** 将 by army leader is dead 的效果应用到当前对象。

### ApplyByNotEnoughParty

```csharp
public static void ApplyByNotEnoughParty(Army army)
```

**用途 / Purpose:** **用途 / Purpose:** 将 by not enough party 的效果应用到当前对象。

### ApplyByObjectiveFinished

```csharp
public static void ApplyByObjectiveFinished(Army army)
```

**用途 / Purpose:** **用途 / Purpose:** 将 by objective finished 的效果应用到当前对象。

### ApplyByPlayerTakenPrisoner

```csharp
public static void ApplyByPlayerTakenPrisoner(Army army)
```

**用途 / Purpose:** **用途 / Purpose:** 将 by player taken prisoner 的效果应用到当前对象。

### ApplyByFoodProblem

```csharp
public static void ApplyByFoodProblem(Army army)
```

**用途 / Purpose:** **用途 / Purpose:** 将 by food problem 的效果应用到当前对象。

### ApplyByInactivity

```csharp
public static void ApplyByInactivity(Army army)
```

**用途 / Purpose:** **用途 / Purpose:** 将 by inactivity 的效果应用到当前对象。

### ApplyByCohesionDepleted

```csharp
public static void ApplyByCohesionDepleted(Army army)
```

**用途 / Purpose:** **用途 / Purpose:** 将 by cohesion depleted 的效果应用到当前对象。

### ApplyByNoActiveWar

```csharp
public static void ApplyByNoActiveWar(Army army)
```

**用途 / Purpose:** **用途 / Purpose:** 将 by no active war 的效果应用到当前对象。

### ApplyByUnknownReason

```csharp
public static void ApplyByUnknownReason(Army army)
```

**用途 / Purpose:** **用途 / Purpose:** 将 by unknown reason 的效果应用到当前对象。

### ApplyByLeaderPartyRemoved

```csharp
public static void ApplyByLeaderPartyRemoved(Army army)
```

**用途 / Purpose:** **用途 / Purpose:** 将 by leader party removed 的效果应用到当前对象。

### ApplyByNoShip

```csharp
public static void ApplyByNoShip(Army army)
```

**用途 / Purpose:** **用途 / Purpose:** 将 by no ship 的效果应用到当前对象。

## 使用示例

```csharp
// 在 mod 中触发一次该动作
DisbandArmyAction.ApplyByReleasedByPlayerAfterBattle(army);
```

## 参见

- [本区域目录](../)
- [战役系统](../../campaign/)