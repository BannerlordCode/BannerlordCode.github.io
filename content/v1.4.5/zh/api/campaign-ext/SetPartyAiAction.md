---
title: "SetPartyAiAction"
description: "SetPartyAiAction 的自动生成战役动作参考。"
---
# SetPartyAiAction

**Namespace:** TaleWorlds.CampaignSystem.Actions
**Module:** TaleWorlds.CampaignSystem
**Type:** static class
**File:** `bin/TaleWorlds.CampaignSystem/TaleWorlds.CampaignSystem.Actions/SetPartyAiAction.cs`

SetPartyAiAction 是一组静态方法，用于在战役中以特定原因触发"SetPartyAi"。modder通过调用其 `Apply*` 方法改变游戏状态（每种原因一个重载）。

## 方法

### GetActionForVisitingSettlement

```csharp
public static void GetActionForVisitingSettlement(MobileParty owner, Settlement settlement, MobileParty.NavigationType navigationType, bool isFromPort, bool isTargetingPort)
```

**用途 / Purpose:** 读取并返回当前对象中 action for visiting settlement 的结果。

### GetActionForPatrollingAroundSettlement

```csharp
public static void GetActionForPatrollingAroundSettlement(MobileParty owner, Settlement settlement, MobileParty.NavigationType navigationType, bool isFromPort, bool isTargetingPort)
```

**用途 / Purpose:** 读取并返回当前对象中 action for patrolling around settlement 的结果。

### GetActionForPatrollingAroundPoint

```csharp
public static void GetActionForPatrollingAroundPoint(MobileParty owner, CampaignVec2 position, MobileParty.NavigationType navigationType, bool isFromPort)
```

**用途 / Purpose:** 读取并返回当前对象中 action for patrolling around point 的结果。

### GetActionForRaidingSettlement

```csharp
public static void GetActionForRaidingSettlement(MobileParty owner, Settlement settlement, MobileParty.NavigationType navigationType, bool isFromPort, bool isTargetingPort)
```

**用途 / Purpose:** 读取并返回当前对象中 action for raiding settlement 的结果。

### GetActionForBesiegingSettlement

```csharp
public static void GetActionForBesiegingSettlement(MobileParty owner, Settlement settlement, MobileParty.NavigationType navigationType, bool isFromPort)
```

**用途 / Purpose:** 读取并返回当前对象中 action for besieging settlement 的结果。

### GetActionForEngagingParty

```csharp
public static void GetActionForEngagingParty(MobileParty owner, MobileParty mobileParty, MobileParty.NavigationType navigationType, bool isFromPort)
```

**用途 / Purpose:** 读取并返回当前对象中 action for engaging party 的结果。

### GetActionForGoingAroundParty

```csharp
public static void GetActionForGoingAroundParty(MobileParty owner, MobileParty mobileParty, MobileParty.NavigationType navigationType, bool isFromPort)
```

**用途 / Purpose:** 读取并返回当前对象中 action for going around party 的结果。

### GetActionForDefendingSettlement

```csharp
public static void GetActionForDefendingSettlement(MobileParty owner, Settlement settlement, MobileParty.NavigationType navigationType, bool isFromPort, bool isTargetingPort)
```

**用途 / Purpose:** 读取并返回当前对象中 action for defending settlement 的结果。

### GetActionForEscortingParty

```csharp
public static void GetActionForEscortingParty(MobileParty owner, MobileParty mobileParty, MobileParty.NavigationType navigationType, bool isFromPort, bool isTargetingPort)
```

**用途 / Purpose:** 读取并返回当前对象中 action for escorting party 的结果。

### GetActionForMovingToNearestLand

```csharp
public static void GetActionForMovingToNearestLand(MobileParty owner, Settlement settlement)
```

**用途 / Purpose:** 读取并返回当前对象中 action for moving to nearest land 的结果。

## 使用示例

```csharp
// 在 mod 中触发一次该动作
SetPartyAiAction.GetActionForVisitingSettlement(owner, settlement, navigationType, false, false);
```

## 参见

- [本区域目录](../)
- [战役系统](../../campaign/)