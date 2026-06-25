---
title: "Army"
description: "Army 的自动生成类参考。"
---
# Army

**Namespace:** TaleWorlds.CampaignSystem
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class Army : ITrackableCampaignObject, ITrackableBase`
**Base:** `ITrackableCampaignObject`
**File:** `bin/TaleWorlds.CampaignSystem/TaleWorlds.CampaignSystem/Army.cs`

## 概述

`Army` 位于 `TaleWorlds.CampaignSystem`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `TaleWorlds.CampaignSystem` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要属性

| Name | Signature |
|------|-----------|
| `ArmyType` | `public ArmyTypes ArmyType { get; set; }` |
| `ArmyOwner` | `public Hero ArmyOwner { get; set; }` |
| `Cohesion` | `public float Cohesion { get; set; }` |
| `Morale` | `public float Morale { get; }` |
| `LeaderParty` | `public MobileParty LeaderParty { get; }` |
| `EstimatedStrength` | `public float EstimatedStrength { get; }` |
| `Kingdom` | `public Kingdom Kingdom { get; set; }` |
| `AiBehaviorObject` | `public IMapPoint AiBehaviorObject { get; set; }` |
| `Name` | `public TextObject Name { get; }` |

## 主要方法

### ToString
`public override string ToString()`

**用途 / Purpose:** 返回当前对象的人类可读字符串表示。

```csharp
// 先通过子系统 API 拿到 Army 实例
Army army = ...;
var result = army.ToString();
```

### CalculateCurrentStrength
`public float CalculateCurrentStrength()`

**用途 / Purpose:** 计算「current strength」的当前值或结果。

```csharp
// 先通过子系统 API 拿到 Army 实例
Army army = ...;
var result = army.CalculateCurrentStrength();
```

### GetCustomStrength
`public float GetCustomStrength(BattleSideEnum side, MapEvent.PowerCalculationContext context)`

**用途 / Purpose:** 读取并返回当前对象中 「custom strength」 的结果。

```csharp
// 先通过子系统 API 拿到 Army 实例
Army army = ...;
var result = army.GetCustomStrength(side, context);
```

### UpdateName
`public void UpdateName()`

**用途 / Purpose:** 重新计算并更新 「name」 的最新表示。

```csharp
// 先通过子系统 API 拿到 Army 实例
Army army = ...;
army.UpdateName();
```

### DoesLeaderPartyAndAttachedPartiesContain
`public bool DoesLeaderPartyAndAttachedPartiesContain(MobileParty party)`

**用途 / Purpose:** 返回「leader party and attached parties contain」对当前对象是否成立的布尔结果。

```csharp
// 先通过子系统 API 拿到 Army 实例
Army army = ...;
var result = army.DoesLeaderPartyAndAttachedPartiesContain(party);
```

### BoostCohesionWithInfluence
`public void BoostCohesionWithInfluence(float cohesionToGain, int cost)`

**用途 / Purpose:** 提升「cohesion with influence」的数值或强度。

```csharp
// 先通过子系统 API 拿到 Army 实例
Army army = ...;
army.BoostCohesionWithInfluence(0, 0);
```

### RecalculateArmyMorale
`public void RecalculateArmyMorale()`

**用途 / Purpose:** 重新计算「army morale」以反映最新状态。

```csharp
// 先通过子系统 API 拿到 Army 实例
Army army = ...;
army.RecalculateArmyMorale();
```

### GetNotificationText
`public TextObject GetNotificationText()`

**用途 / Purpose:** 读取并返回当前对象中 「notification text」 的结果。

```csharp
// 先通过子系统 API 拿到 Army 实例
Army army = ...;
var result = army.GetNotificationText();
```

### GetLongTermBehaviorText
`public TextObject GetLongTermBehaviorText(bool setWithLink = false)`

**用途 / Purpose:** 读取并返回当前对象中 「long term behavior text」 的结果。

```csharp
// 先通过子系统 API 拿到 Army 实例
Army army = ...;
var result = army.GetLongTermBehaviorText(false);
```

### Gather
`public void Gather(Settlement initialHostileSettlement, MBReadOnlyList<MobileParty> partiesToCallToArmy = null)`

**用途 / Purpose:** 收集或汇总当前对象相关的内容。

```csharp
// 先通过子系统 API 拿到 Army 实例
Army army = ...;
army.Gather(initialHostileSettlement, null);
```

### IsWaitingForArmyMembers
`public bool IsWaitingForArmyMembers()`

**用途 / Purpose:** 判断当前对象是否处于 「waiting for army members」 状态或条件。

```csharp
// 先通过子系统 API 拿到 Army 实例
Army army = ...;
var result = army.IsWaitingForArmyMembers();
```

### FinishArmyObjective
`public void FinishArmyObjective()`

**用途 / Purpose:** 结束「army objective」流程并执行必要的收尾工作。

```csharp
// 先通过子系统 API 拿到 Army 实例
Army army = ...;
army.FinishArmyObjective();
```

### GetRelativePositionForParty
`public Vec2 GetRelativePositionForParty(MobileParty mobileParty, Vec2 armyFacing)`

**用途 / Purpose:** 读取并返回当前对象中 「relative position for party」 的结果。

```csharp
// 先通过子系统 API 拿到 Army 实例
Army army = ...;
var result = army.GetRelativePositionForParty(mobileParty, armyFacing);
```

### AddPartyToMergedParties
`public void AddPartyToMergedParties(MobileParty mobileParty)`

**用途 / Purpose:** 将 「party to merged parties」 添加到当前容器或状态中。

```csharp
// 先通过子系统 API 拿到 Army 实例
Army army = ...;
army.AddPartyToMergedParties(mobileParty);
```

### SetPositionAfterMapChange
`public void SetPositionAfterMapChange(CampaignVec2 newPosition)`

**用途 / Purpose:** 为 「position after map change」 赋新值，并同步更新对象内部状态。

```csharp
// 先通过子系统 API 拿到 Army 实例
Army army = ...;
army.SetPositionAfterMapChange(newPosition);
```

### CheckPositionsForMapChangeAndUpdateIfNeeded
`public void CheckPositionsForMapChangeAndUpdateIfNeeded()`

**用途 / Purpose:** 检查「positions for map change and update if needed」在当前对象中是否成立。

```csharp
// 先通过子系统 API 拿到 Army 实例
Army army = ...;
army.CheckPositionsForMapChangeAndUpdateIfNeeded();
```

## 使用示例

```csharp
// 通常从对应子系统 API 获取实例后调用
Army army = ...;
army.ToString();
```

## 参见

- [本区域目录](../)