---
title: "SetPartyAiAction"
---
<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `SetPartyAiAction`
- [← 本领域 / 返回 campaign-ext](./)
- [↑ API 目录](../)
- [🏠 首页 v1.4.5](../../)
- [⭐ 版本架构](../../architecture/)
<!-- END BREADCRUMB -->
# SetPartyAiAction

## 心智模型

先把 `SetPartyAiAction` 当作这个子系统的入口或数据节点来理解：先看属性代表什么状态，再看方法允许你做什么。

**Namespace:** TaleWorlds.CampaignSystem.Actions
**Module:** TaleWorlds.CampaignSystem
**Type:** static class
**File:** `Bannerlord.Source/bin/TaleWorlds.CampaignSystem/TaleWorlds.CampaignSystem.Actions/SetPartyAiAction.cs`

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

- [完整类目录](../catalog)
- [战役系统目录](../catalog-campaign)