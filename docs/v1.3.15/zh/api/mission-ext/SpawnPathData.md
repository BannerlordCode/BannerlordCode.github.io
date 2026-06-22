<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `SpawnPathData`
- [← 本领域 / 返回 mission-ext](./)
- [↑ API 目录](../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# SpawnPathData

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** `public struct SpawnPathData`
**Base:** 无
**File:** `TaleWorlds.MountAndBlade/SpawnPathData.cs`

## 概述

`SpawnPathData` 是一个数据结构/DTO，持有结构化字段。构造它以传递或序列化数据。

## 主要属性

| Name | Signature |
|------|-----------|
| `IsValid` | `public bool IsValid { get; }` |

## 主要方法

### Invert
```csharp
public SpawnPathData Invert()
```

### ClampPathOffset
```csharp
public float ClampPathOffset(float pathOffsetRatio)
```

### GetOffsetOverflow
```csharp
public float GetOffsetOverflow(float pathOffset)
```

### GetSpawnPathFrameFacingTarget
```csharp
public void GetSpawnPathFrameFacingTarget(float baseOffset, float targetOffset, bool useTangentDirection, out Vec2 spawnPathPosition, out Vec2 spawnPathDirection, bool decideDirectionDynamically = false, float dynamicDistancePercentage = 0.2f)
```

### GetSpawnPathFrameFacingPivot
```csharp
public void GetSpawnPathFrameFacingPivot(float pathOffset, bool useTangentDirection, out Vec2 spawnPathPosition, out Vec2 spawnPathDirection)
```

### GetSpawnPathFrameFacingTangentDirection
```csharp
public void GetSpawnPathFrameFacingTangentDirection(float baseOffset, int tangentDirection, out Vec2 spawnPathPosition, out Vec2 spawnPathDirection)
```

### Create
```csharp
public static SpawnPathData Create(Scene scene, Path path, float pivotRatio = 0f, bool isInverted = false, SpawnPathData.SnapMethod snapType = SpawnPathData.SnapMethod.DontSnap)
```

## 使用示例

```csharp
// SpawnPathData (Data) 的典型用法
new SpawnPathData { /* fill fields */ };;
```

## 参见

- [完整类目录](../catalog)