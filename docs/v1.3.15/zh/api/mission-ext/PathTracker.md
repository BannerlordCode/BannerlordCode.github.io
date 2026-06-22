<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `PathTracker`
- [← 本领域 / 返回 mission-ext](./)
- [↑ API 目录](../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# PathTracker

**命名空间:** TaleWorlds.MountAndBlade
**模块:** TaleWorlds.MountAndBlade
**类型:** 类 class class
**领域:** 战斗系统 MountAndBlade

## 概述

> 本页为自动生成的存根。`PathTracker` 是 `TaleWorlds.MountAndBlade` 命名空间下的一个类 class。
> 如需了解其属性、方法和开发者用例，请参考源码或贡
## 主要属性

| Name | Signature |
|------|-----------|
| `TotalDistanceTraveled` | `public float TotalDistanceTraveled { get; set; }` |
| `HasChanged` | `public bool HasChanged { get; }` |
| `IsValid` | `public bool IsValid { get; }` |
| `HasReachedEnd` | `public bool HasReachedEnd { get; }` |
| `PathTraveledPercentage` | `public float PathTraveledPercentage { get; }` |
| `CurrentFrame` | `public MatrixFrame CurrentFrame { get; }` |


## 主要方法

### UpdateVersion

```csharp
public void UpdateVersion()
```

### PathExists

```csharp
public bool PathExists()
```

### Advance

```csharp
public void Advance(float deltaDistance)
```

### GetPathLength

```csharp
public float GetPathLength()
```

### CurrentFrameAndColor

```csharp
public void CurrentFrameAndColor(out MatrixFrame frame, out Vec3 color)
```

### Reset

```csharp
public void Reset()
```

献文档。

## 参见

- [完整类目录](../catalog)
- [本领域目录](../catalog-mountandblade)