<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `ActivityManager`
- [← 本领域 / 返回 campaign-ext](./)
- [↑ API 目录](../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# ActivityManager

**命名空间:** TaleWorlds.ActivitySystem
**模块:** TaleWorlds.ActivitySystem
**类型:** 类 class class
**领域:** 战役系统 Campaign

## 概述

> 本页为自动生成的存根。`ActivityManager` 是 `TaleWorlds.ActivitySystem` 命名空间下的一个类 class。
> 如需了解其属性、方法和开发者用例，请参考源码或贡
## 主要属性

| Name | Signature |
|------|-----------|
| `ActivityService` | `public static IActivityService ActivityService { get; set; }` |


## 主要方法

### StartActivity

```csharp
public static bool StartActivity(string activityId)
```

### EndActivity

```csharp
public static bool EndActivity(string activityId, ActivityOutcome outcome)
```

### SetActivityAvailability

```csharp
public static bool SetActivityAvailability(string activityId, bool isAvailable)
```

### GetActivity

```csharp
public static Task<Activity> GetActivity(string activityId)
```

### GetActivityTransition

```csharp
public static ActivityTransition GetActivityTransition(string activityId)
```

献文档。

## 参见

- [完整类目录](../catalog)
- [本领域目录](../catalog-campaign)