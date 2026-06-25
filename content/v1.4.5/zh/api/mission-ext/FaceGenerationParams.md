---
title: "FaceGenerationParams"
description: "FaceGenerationParams 的自动生成类参考。"
---
# FaceGenerationParams

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** `public struct FaceGenerationParams`
**Base:** 无
**File:** `bin/TaleWorlds.MountAndBlade/TaleWorlds.MountAndBlade/FaceGenerationParams.cs`

## 概述

`FaceGenerationParams` 位于 `TaleWorlds.MountAndBlade`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `TaleWorlds.MountAndBlade` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要方法

### Create
`public static FaceGenerationParams Create()`

**用途 / Purpose:** 创建当前对象的新实例或相关实体。

```csharp
// 静态调用，不需要实例
FaceGenerationParams.Create();
```

### SetRaceGenderAndAdjustParams
`public void SetRaceGenderAndAdjustParams(int race, int gender, int curAge)`

**用途 / Purpose:** 为 「race gender and adjust params」 赋新值，并同步更新对象内部状态。

```csharp
// 先通过子系统 API 拿到 FaceGenerationParams 实例
FaceGenerationParams faceGenerationParams = ...;
faceGenerationParams.SetRaceGenderAndAdjustParams(0, 0, 0);
```

### SetRandomParamsExceptKeys
`public void SetRandomParamsExceptKeys(int race, int gender, int minAge, out float scale)`

**用途 / Purpose:** 为 「random params except keys」 赋新值，并同步更新对象内部状态。

```csharp
// 先通过子系统 API 拿到 FaceGenerationParams 实例
FaceGenerationParams faceGenerationParams = ...;
faceGenerationParams.SetRandomParamsExceptKeys(0, 0, 0, scale);
```

## 使用示例

```csharp
FaceGenerationParams.Create();
```

## 参见

- [本区域目录](../)