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

**用途 / Purpose:** get action for visiting settlement。

### GetActionForPatrollingAroundSettlement

```csharp
public static void GetActionForPatrollingAroundSettlement(MobileParty owner, Settlement settlement, MobileParty.NavigationType navigationType, bool isFromPort, bool isTargetingPort)
```

**用途 / Purpose:** get action for patrolling around settlement。

### GetActionForPatrollingAroundPoint

```csharp
public static void GetActionForPatrollingAroundPoint(MobileParty owner, CampaignVec2 position, MobileParty.NavigationType navigationType, bool isFromPort)
```

**用途 / Purpose:** get action for patrolling around point。

### GetActionForRaidingSettlement

```csharp
public static void GetActionForRaidingSettlement(MobileParty owner, Settlement settlement, MobileParty.NavigationType navigationType, bool isFromPort, bool isTargetingPort)
```

**用途 / Purpose:** get action for raiding settlement。

### GetActionForBesiegingSettlement

```csharp
public static void GetActionForBesiegingSettlement(MobileParty owner, Settlement settlement, MobileParty.NavigationType navigationType, bool isFromPort)
```

**用途 / Purpose:** get action for besieging settlement。

### GetActionForEngagingParty

```csharp
public static void GetActionForEngagingParty(MobileParty owner, MobileParty mobileParty, MobileParty.NavigationType navigationType, bool isFromPort)
```

**用途 / Purpose:** get action for engaging party。

### GetActionForGoingAroundParty

```csharp
public static void GetActionForGoingAroundParty(MobileParty owner, MobileParty mobileParty, MobileParty.NavigationType navigationType, bool isFromPort)
```

**用途 / Purpose:** get action for going around party。

### GetActionForDefendingSettlement

```csharp
public static void GetActionForDefendingSettlement(MobileParty owner, Settlement settlement, MobileParty.NavigationType navigationType, bool isFromPort, bool isTargetingPort)
```

**用途 / Purpose:** get action for defending settlement。

### GetActionForEscortingParty

```csharp
public static void GetActionForEscortingParty(MobileParty owner, MobileParty mobileParty, MobileParty.NavigationType navigationType, bool isFromPort, bool isTargetingPort)
```

**用途 / Purpose:** get action for escorting party。

### GetActionForMovingToNearestLand

```csharp
public static void GetActionForMovingToNearestLand(MobileParty owner, Settlement settlement)
```

**用途 / Purpose:** get action for moving to nearest land。

## 使用示例

```csharp
// 在 mod 中触发一次该动作
SetPartyAiAction.GetActionForVisitingSettlement(owner, settlement, navigationType, false, false);
```

## 参见

- [本区域目录](../)
- [战役系统](../../campaign/)