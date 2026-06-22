<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `CharacterRelationManager`
- [← 本领域 / 返回 campaign-ext](./)
- [↑ API 目录](../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# CharacterRelationManager

**Namespace:** TaleWorlds.CampaignSystem
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class CharacterRelationManager`
**Base:** 无
**File:** `TaleWorlds.CampaignSystem/CharacterRelationManager.cs`

## 概述

`CharacterRelationManager` 是一个管理器（通常经 Current 单例或 Mission.Current 访问）。用它访问/修改其管理的子系统。

## 主要属性

| Name | Signature |
|------|-----------|
| `Instance` | `public static CharacterRelationManager Instance { get; }` |

## 主要方法

### GetHeroRelation
```csharp
public static int GetHeroRelation(Hero hero1, Hero hero2)
```

### SetHeroRelation
```csharp
public static void SetHeroRelation(Hero hero1, Hero hero2, int value)
```

### AfterLoad
```csharp
public void AfterLoad()
```

### RemoveHero
```csharp
public void RemoveHero(Hero deadHero)
```

### GetRelation
```csharp
public int GetRelation(Hero hero1, Hero hero2)
```

### SetRelation
```csharp
public void SetRelation(Hero hero1, Hero hero2, int value)
```

### Remove
```csharp
public void Remove(Hero hero)
```

### ClearOldData
```csharp
public void ClearOldData()
```

## 使用示例

```csharp
// CharacterRelationManager (Manager) 的典型用法
CharacterRelationManager.Current;
```

## 参见

- [完整类目录](../catalog)