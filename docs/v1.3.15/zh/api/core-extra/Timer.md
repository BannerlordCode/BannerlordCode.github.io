<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `Timer`
- [← 本领域 / 返回 core-extra](./)
- [↑ API 目录](../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# Timer

**命名空间:** TaleWorlds.Core
**模块:** TaleWorlds.Core
**类型:** 类 class class
**领域:** 核心数据 Core

## 概述

> 本页为自动生成的存根。`Timer` 是 `TaleWorlds.Core` 命名空间下的一个类 class。
> 如需了解其属性、方法和开发者用例，请参考源码或贡
## 主要属性

| Name | Signature |
|------|-----------|
| `StartTime` | `public float StartTime { get; set; }` |
| `Duration` | `public float Duration { get; set; }` |
| `PreviousDeltaTime` | `public float PreviousDeltaTime { get; }` |


## 主要方法

### Check

```csharp
public virtual bool Check(float gameTime)
```

### ElapsedTime

```csharp
public float ElapsedTime()
```

### Reset

```csharp
public void Reset(float gameTime)
```

### Reset

```csharp
public void Reset(float gameTime, float newDuration)
```

### AdjustStartTime

```csharp
public void AdjustStartTime(float deltaTime)
```

献文档。

## 参见

- [完整类目录](../catalog)
- [本领域目录](../catalog-core)