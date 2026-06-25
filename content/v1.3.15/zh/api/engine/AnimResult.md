---
title: "AnimResult"
---
<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `AnimResult`
- [← 本领域 / 返回 engine](./)
- [↑ API 目录](../)
- [🏠 首页 v1.3.15](../../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# AnimResult

**Namespace:** TaleWorlds.Engine
**Module:** TaleWorlds.Engine
**Type:** `public struct AnimResult`
**Base:** 无
**File:** `TaleWorlds.Engine/AnimResult.cs`

## 概述

`AnimResult` 位于 `TaleWorlds.Engine`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `TaleWorlds.Engine` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要方法

### GetEntitialOutTransform
`public Transformation GetEntitialOutTransform(sbyte boneIndex, Skeleton skeleton)`

**用途 / Purpose:** 获取 `entitial out transform` 的当前值。

### SetOutBoneDisplacement
`public void SetOutBoneDisplacement(sbyte boneIndex, Vec3 position, Skeleton skeleton)`

**用途 / Purpose:** 设置 `out bone displacement` 的值或状态。

### SetOutQuat
`public void SetOutQuat(sbyte boneIndex, Mat3 rotation, Skeleton skeleton)`

**用途 / Purpose:** 设置 `out quat` 的值或状态。

## 使用示例

```csharp
var value = new AnimResult();
value.GetEntitialOutTransform(0, skeleton);
```

## 参见

- [完整类目录](../catalog)