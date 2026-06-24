<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `FaceGenerationParams`
- [← 本领域 / 返回 mission-ext](./)
- [↑ API 目录](../)
- [🏠 首页 v1.3.0](../../)
- [⭐ 版本架构](../../architecture/)
<!-- END BREADCRUMB -->
# FaceGenerationParams

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** `public struct FaceGenerationParams`
**Base:** 无
**File:** `TaleWorlds.MountAndBlade/FaceGenerationParams.cs`

## 概述

`FaceGenerationParams` 位于 `TaleWorlds.MountAndBlade`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

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
FaceGenerationParams.Create();
```

## 参见

- [完整类目录](../catalog)