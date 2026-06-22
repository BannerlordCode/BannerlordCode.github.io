<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `FactionManager`
- [← 本领域 / 返回 campaign-ext](./)
- [↑ API 目录](../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# FactionManager

**Namespace:** TaleWorlds.CampaignSystem
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class FactionManager`
**Base:** 无
**File:** `TaleWorlds.CampaignSystem/FactionManager.cs`

## 概述

`FactionManager` 是一个管理器（通常经 Current 单例或 Mission.Current 访问）。用它访问/修改其管理的子系统。

## 主要属性

| Name | Signature |
|------|-----------|
| `Instance` | `public static FactionManager Instance { get; }` |

## 主要方法

### DeclareWar
```csharp
public static void DeclareWar(IFaction faction1, IFaction faction2)
```

### SetNeutral
```csharp
public static void SetNeutral(IFaction faction1, IFaction faction2)
```

### IsAtWarAgainstFaction
```csharp
public static bool IsAtWarAgainstFaction(IFaction faction1, IFaction faction2)
```

### IsAtConstantWarAgainstFaction
```csharp
public static bool IsAtConstantWarAgainstFaction(IFaction faction1, IFaction faction2)
```

### IsNeutralWithFaction
```csharp
public static bool IsNeutralWithFaction(IFaction faction1, IFaction faction2)
```

### GetRelationBetweenClans
```csharp
public static int GetRelationBetweenClans(Clan clan1, Clan clan2)
```

## 使用示例

```csharp
// FactionManager (Manager) 的典型用法
FactionManager.Current;
```

## 参见

- [完整类目录](../catalog)