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

**用途 / Purpose:** released by player after battle。

### ApplyByArmyLeaderIsDead

```csharp
public static void ApplyByArmyLeaderIsDead(Army army)
```

**用途 / Purpose:** army leader is dead。

### ApplyByNotEnoughParty

```csharp
public static void ApplyByNotEnoughParty(Army army)
```

**用途 / Purpose:** not enough party。

### ApplyByObjectiveFinished

```csharp
public static void ApplyByObjectiveFinished(Army army)
```

**用途 / Purpose:** objective finished。

### ApplyByLowPartySizeRatio

```csharp
public static void ApplyByLowPartySizeRatio(Army army)
```

**用途 / Purpose:** low party size ratio。

### ApplyByPlayerTakenPrisoner

```csharp
public static void ApplyByPlayerTakenPrisoner(Army army)
```

**用途 / Purpose:** player taken prisoner。

### ApplyByFoodProblem

```csharp
public static void ApplyByFoodProblem(Army army)
```

**用途 / Purpose:** food problem。

### ApplyByInactivity

```csharp
public static void ApplyByInactivity(Army army)
```

**用途 / Purpose:** inactivity。

### ApplyByCohesionDepleted

```csharp
public static void ApplyByCohesionDepleted(Army army)
```

**用途 / Purpose:** cohesion depleted。

### ApplyByNoActiveWar

```csharp
public static void ApplyByNoActiveWar(Army army)
```

**用途 / Purpose:** no active war。

### ApplyByUnknownReason

```csharp
public static void ApplyByUnknownReason(Army army)
```

**用途 / Purpose:** unknown reason。

### ApplyByLeaderPartyRemoved

```csharp
public static void ApplyByLeaderPartyRemoved(Army army)
```

**用途 / Purpose:** leader party removed。

### ApplyByNoShip

```csharp
public static void ApplyByNoShip(Army army)
```

**用途 / Purpose:** no ship。

## 使用示例

```csharp
// 在 mod 中触发一次该动作
DisbandArmyAction.ApplyByReleasedByPlayerAfterBattle(army);
```

## 参见

- [本区域目录](../)
- [战役系统](../campaign/)