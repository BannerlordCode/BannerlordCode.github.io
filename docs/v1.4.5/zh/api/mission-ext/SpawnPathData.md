<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `SpawnPathData`
- [← 本领域 / 返回 mission-ext](./)
- [↑ API 目录](../)
- [🏠 首页 v1.4.5](../../)
- [⭐ 版本架构](../../architecture/)
<!-- END BREADCRUMB -->
# SpawnPathData

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class SpawnPathData`
**Base:** 无
**File:** `Bannerlord.Source/bin/TaleWorlds.MountAndBlade/TaleWorlds.MountAndBlade/SpawnPathData.cs`

## 概述

`SpawnPathData` 更像一个数据载体：它封装一组字段，让系统之间以结构化方式交换状态。

## 心智模型

把 `SpawnPathData` 当作一个 Data 型扩展点来理解：先确认谁创建它、谁持有它、谁调用它，再决定是继承、组合还是只读使用。

## 主要属性

| Name | Signature |
|------|-----------|
| `IsValid` | `public bool IsValid { get; }` |

## 主要方法

### Invert
`public SpawnPathData Invert()`

**用途 / Purpose:** 处理 `invert` 相关逻辑。

### ClampPathOffset
`public void ClampPathOffset(ref float relativePathOffset)`

**用途 / Purpose:** 处理 `clamp path offset` 相关逻辑。

### ConvertPointToRelativePathOffset
`public float ConvertPointToRelativePathOffset(int pointIndex)`

**用途 / Purpose:** 处理 `convert point to relative path offset` 相关逻辑。

### ConvertRelativePathOffsetToPathDistance
`public float ConvertRelativePathOffsetToPathDistance(float relativePathOffset)`

**用途 / Purpose:** 处理 `convert relative path offset to path distance` 相关逻辑。

### GetNodeIndexAtPathDistance
`public int GetNodeIndexAtPathDistance(float pathDistance)`

**用途 / Purpose:** 获取 `node index at path distance` 的当前值。

### GetBaseOffset
`public float GetBaseOffset()`

**用途 / Purpose:** 获取 `base offset` 的当前值。

### IsPathOffsetValid
`public bool IsPathOffsetValid(float relativePathOffset)`

**用途 / Purpose:** 处理 `is path offset valid` 相关逻辑。

### GetOffsetOverflow
`public float GetOffsetOverflow(float relativePathOffset)`

**用途 / Purpose:** 获取 `offset overflow` 的当前值。

### GetSpawnFrame
`public MatrixFrame GetSpawnFrame(float relativePathOffset, bool searchNearestValidFrame = false, SearchDirection searchDirection = SearchDirection.Backward)`

**用途 / Purpose:** 获取 `spawn frame` 的当前值。

### GetSpawnPathFrameFacingTarget
`public void GetSpawnPathFrameFacingTarget(float basePathOffset, float targetPathOffset, bool useTangentDirection, out Vec2 spawnPathPosition, out Vec2 spawnPathDirection, bool decideDirectionDynamically = false, float dynamicDistancePercentage = 0.2f)`

**用途 / Purpose:** 获取 `spawn path frame facing target` 的当前值。

### Create
`public static SpawnPathData Create(Scene scene, Path path, float pivotOffset, bool isInverted = false, SnapMethod snapType = SnapMethod.DontSnap)`

**用途 / Purpose:** 创建一个 `create` 实例或对象。

## 使用示例

```csharp
var value = new SpawnPathData();
```

## 参见

- [完整类目录](../catalog)