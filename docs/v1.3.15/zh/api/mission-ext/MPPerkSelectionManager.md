<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `MPPerkSelectionManager`
- [← 本领域 / 返回 mission-ext](./)
- [↑ API 目录](../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# MPPerkSelectionManager

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class MPPerkSelectionManager`
**Base:** 无
**File:** `TaleWorlds.MountAndBlade/MPPerkSelectionManager.cs`

## 概述

`MPPerkSelectionManager` 是一个管理器（通常经 Current 单例或 Mission.Current 访问）。用它访问/修改其管理的子系统。

## 主要方法

### FreeInstance
```csharp
public static void FreeInstance()
```

### InitializeForUser
```csharp
public void InitializeForUser(string username, PlayerId playerId)
```

### ResetPendingChanges
```csharp
public void ResetPendingChanges()
```

### TryToApplyAndSavePendingChanges
```csharp
public void TryToApplyAndSavePendingChanges()
```

### GetSelectionsForHeroClass
```csharp
public List<MPPerkSelectionManager.MPPerkSelection> GetSelectionsForHeroClass(MultiplayerClassDivisions.MPHeroClass currentHeroClass)
```

### SetSelectionsForHeroClassTemporarily
```csharp
public void SetSelectionsForHeroClassTemporarily(MultiplayerClassDivisions.MPHeroClass currentHeroClass, List<MPPerkSelectionManager.MPPerkSelection> perkChoices)
```

## 使用示例

```csharp
// MPPerkSelectionManager (Manager) 的典型用法
MPPerkSelectionManager.Current;
```

## 参见

- [完整类目录](../catalog)