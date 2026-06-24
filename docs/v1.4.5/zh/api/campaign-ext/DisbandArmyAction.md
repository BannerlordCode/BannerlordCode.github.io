<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `DisbandArmyAction`
- [← 本领域 / 返回 campaign-ext](./)
- [↑ API 目录](../)
- [🏠 首页 v1.4.5](../../)
- [⭐ 版本架构](../../architecture/)
<!-- END BREADCRUMB -->
# DisbandArmyAction

## 心智模型

先把 `DisbandArmyAction` 当作这个子系统的入口或数据节点来理解：先看属性代表什么状态，再看方法允许你做什么。

**Namespace:** TaleWorlds.CampaignSystem.Actions
**Module:** TaleWorlds.CampaignSystem
**Type:** static class
**File:** `Bannerlord.Source/bin/TaleWorlds.CampaignSystem/TaleWorlds.CampaignSystem.Actions/DisbandArmyAction.cs`

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

- [完整类目录](../catalog)
- [战役系统目录](../catalog-campaign)