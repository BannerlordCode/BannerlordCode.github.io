<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `FaceGenerationParams`
- [← 本领域 / 返回 mission-ext](./)
- [↑ API 目录](../)
- [🏠 首页 v1.3.15](../../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# FaceGenerationParams

**命名空间:** TaleWorlds.MountAndBlade
**模块:** TaleWorlds.MountAndBlade
**类型:** `public struct FaceGenerationParams`
**领域:** mission-ext

## 概述

`FaceGenerationParams` 位于 `TaleWorlds.MountAndBlade`，它的公开成员表明它是这一子系统暴露给 mod 的一个正式扩展或数据入口。

## 心智模型

先从命名空间 `TaleWorlds.MountAndBlade` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要方法

### Create
`public static FaceGenerationParams Create()`

**用途 / Purpose:** 创建一个 `create` 实例或对象。

### SetRaceGenderAndAdjustParams
`public void SetRaceGenderAndAdjustParams(int race, int gender, int curAge)`

**用途 / Purpose:** 设置 `race gender and adjust params` 的值或状态。

### SetRandomParamsExceptKeys
`public void SetRandomParamsExceptKeys(int race, int gender, int minAge, out float scale)`

**用途 / Purpose:** 设置 `random params except keys` 的值或状态。

## 使用示例

```csharp
// 先准备该类型需要的上下文，然后直接调用静态入口
FaceGenerationParams.Create();
```

## 参见

- [完整类目录](../catalog)
- [本领域目录](../catalog-mountandblade)
