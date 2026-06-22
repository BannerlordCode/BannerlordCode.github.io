<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `MissionTimer`
- [← 本领域 / 返回 mission-ext](./)
- [↑ API 目录](../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# MissionTimer

**命名空间:** TaleWorlds.MountAndBlade
**模块:** TaleWorlds.MountAndBlade
**类型:** 类 class class
**领域:** 战斗系统 MountAndBlade

## 概述

> 本页为自动生成的存根。`MissionTimer` 是 `TaleWorlds.MountAndBlade` 命名空间下的一个类 class。
> 如需了解其属性、方法和开发者用例，请参考源码或贡
## 主要方法

### GetStartTime

```csharp
public MissionTime GetStartTime()
```

### GetTimerDuration

```csharp
public float GetTimerDuration()
```

### GetRemainingTimeInSeconds

```csharp
public float GetRemainingTimeInSeconds(bool synched = false)
```

### Check

```csharp
public bool Check(bool reset = false)
```

### Reset

```csharp
public void Reset()
```

### Set

```csharp
public void Set(float timeInSeconds)
```

### SetDuration

```csharp
public void SetDuration(float duration)
```

### CreateSynchedTimerClient

```csharp
public static MissionTimer CreateSynchedTimerClient(float startTimeInSeconds, float duration)
```

献文档。

## 参见

- [完整类目录](../catalog)
- [本领域目录](../catalog-mountandblade)