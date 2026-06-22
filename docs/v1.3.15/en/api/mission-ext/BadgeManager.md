<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `BadgeManager`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# BadgeManager

**Namespace:** TaleWorlds.MountAndBlade.Diamond.MultiplayerBadges
**Module:** TaleWorlds.MountAndBlade
**Type:** `public static class BadgeManager`
**Base:** none
**File:** `TaleWorlds.MountAndBlade.Diamond/MultiplayerBadges/BadgeManager.cs`

## Overview

`BadgeManager` is a manager (often reached via a Current singleton or Mission.Current). Use it to access/modify its managed subsystem.

## Key Properties

| Name | Signature |
|------|-----------|
| `Badges` | `public static List<Badge> Badges { get; }` |
| `IsInitialized` | `public static bool IsInitialized { get; }` |

## Key Methods

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

## Usage Example

```csharp
// Typical usage of BadgeManager (Manager)
BadgeManager.Current;
```

## See Also

- [Complete Class Catalog](../catalog)