<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `AchievementManager`
- [← 本领域 / 返回 campaign-ext](./)
- [↑ API 目录](../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# AchievementManager

**命名空间:** TaleWorlds.AchievementSystem
**模块:** TaleWorlds.AchievementSystem
**类型:** 类 class class
**领域:** 战役系统 Campaign

## 概述

> 本页为自动生成的存根。`AchievementManager` 是 `TaleWorlds.AchievementSystem` 命名空间下的一个类 class。
> 如需了解其属性、方法和开发者用例，请参考源码或贡
## 主要属性

| Name | Signature |
|------|-----------|
| `AchievementService` | `public static IAchievementService AchievementService { get; set; }` |


## 主要方法

### SetStat

```csharp
public static bool SetStat(string name, int value)
```

### GetStat

```csharp
public static Task<int> GetStat(string name)
```

### GetStats

```csharp
public static Task<int > GetStats(string names)
```

献文档。

## 参见

- [完整类目录](../catalog)
- [本领域目录](../catalog-campaign)