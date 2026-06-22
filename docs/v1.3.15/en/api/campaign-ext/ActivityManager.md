<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `ActivityManager`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# ActivityManager

**Namespace:** TaleWorlds.ActivitySystem
**Module:** TaleWorlds.ActivitySystem
**Type:** class
**Area:** Campaign System

## Overview

> This is an auto-generated stub. `ActivityManager` is a class in the `TaleWorlds.ActivitySystem` namespace.
> For properties, methods, and developer use-cases, refer to source code or contribute documentation.


## Key Properties

| Name | Signature |
|------|-----------|
| `ActivityService` | `public static IActivityService ActivityService { get; set; }` |


## Key Methods

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

## See Also

- [Complete Class Catalog](../catalog)
- [Area catalog](../catalog-campaign)