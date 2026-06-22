<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `MissionReinforcementsHelper`
- [← 本领域 / 返回 mission-ext](./)
- [↑ API 目录](../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# MissionReinforcementsHelper

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** `public static class MissionReinforcementsHelper`
**Base:** 无
**File:** `TaleWorlds.MountAndBlade/MissionReinforcementsHelper.cs`

## 概述

`MissionReinforcementsHelper` 是一个静态工具类，提供辅助方法。

## 主要方法

### OnMissionStart
```csharp
public static void OnMissionStart()
```

### GetReinforcementAssignments
```csharp
public unsafe static List<ValueTuple<IAgentOriginBase, int>> GetReinforcementAssignments(BattleSideEnum battleSide, List<IAgentOriginBase> troopOrigins)
```

### OnMissionEnd
```csharp
public static void OnMissionEnd()
```

### Compare
```csharp
public int Compare(MissionReinforcementsHelper.ReinforcementFormationPriority left, MissionReinforcementsHelper.ReinforcementFormationPriority right)
```

### Initialize
```csharp
public void Initialize(Formation formation, uint initTime)
```

### AddProspectiveTroop
```csharp
public void AddProspectiveTroop(FormationClass troopClass)
```

### IsInitialized
```csharp
public bool IsInitialized(uint initTime)
```

### GetPriority
```csharp
public MissionReinforcementsHelper.ReinforcementFormationPriority GetPriority(FormationClass troopClass)
```

## 使用示例

```csharp
// MissionReinforcementsHelper (Helper) 的典型用法
MissionReinforcementsHelper./* static helper method */();;
```

## 参见

- [完整类目录](../catalog)