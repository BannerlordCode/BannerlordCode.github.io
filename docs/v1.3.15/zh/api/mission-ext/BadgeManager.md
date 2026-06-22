<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `BadgeManager`
- [← 本领域 / 返回 mission-ext](./)
- [↑ API 目录](../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# BadgeManager

**Namespace:** TaleWorlds.MountAndBlade.Diamond.MultiplayerBadges
**Module:** TaleWorlds.MountAndBlade
**Type:** `public static class BadgeManager`
**Base:** 无
**File:** `TaleWorlds.MountAndBlade.Diamond/MultiplayerBadges/BadgeManager.cs`

## 概述

`BadgeManager` 是一个管理器（通常经 Current 单例或 Mission.Current 访问）。用它访问/修改其管理的子系统。

## 主要属性

| Name | Signature |
|------|-----------|
| `Badges` | `public static List<Badge> Badges { get; }` |
| `IsInitialized` | `public static bool IsInitialized { get; }` |

## 主要方法

### InitializeWithXML
```csharp
public static void InitializeWithXML(string xmlPath)
```

### OnFinalize
```csharp
public static void OnFinalize()
```

### GetByIndex
```csharp
public static Badge GetByIndex(int index)
```

### GetById
```csharp
public static Badge GetById(string id)
```

### GetByType
```csharp
public static List<Badge> GetByType(BadgeType type)
```

### GetBadgeConditionValue
```csharp
public static string GetBadgeConditionValue(this PlayerData playerData, BadgeCondition condition)
```

### GetBadgeConditionNumericValue
```csharp
public static int GetBadgeConditionNumericValue(this PlayerData playerData, BadgeCondition condition)
```

## 使用示例

```csharp
// BadgeManager (Manager) 的典型用法
BadgeManager.Current;
```

## 参见

- [完整类目录](../catalog)