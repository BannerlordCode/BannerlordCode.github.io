---
title: "HideoutBossFightBehavior"
---
<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `HideoutBossFightBehavior`
- [← 本领域 / 返回 campaign-ext](./)
- [↑ API 目录](../)
- [🏠 首页 v1.3.0](../../)
- [⭐ 版本架构](../../architecture/)
<!-- END BREADCRUMB -->
# HideoutBossFightBehavior

**Namespace:** SandBox.Objects.Cinematics
**Module:** SandBox.Objects
**Type:** `public class HideoutBossFightBehavior : ScriptComponentBehavior`
**Base:** `ScriptComponentBehavior`
**File:** `SandBox/Objects/Cinematics/HideoutBossFightBehavior.cs`

## 概述

`HideoutBossFightBehavior` 位于 `SandBox.Objects.Cinematics`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `SandBox.Objects.Cinematics` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要属性

| Name | Signature |
|------|-----------|
| `PerturbSeed` | `public int PerturbSeed { get; }` |
| `Invalid` | `public static HideoutBossFightBehavior.HideoutBossFightPreviewEntityInfo Invalid { get; }` |
| `IsValid` | `public bool IsValid { get; }` |

## 主要方法

### GetPlayerFrames
`public void GetPlayerFrames(out MatrixFrame initialFrame, out MatrixFrame targetFrame, float perturbAmount = 0f)`

**用途 / Purpose:** 获取 `player frames` 的当前值。

### GetBossFrames
`public void GetBossFrames(out MatrixFrame initialFrame, out MatrixFrame targetFrame, float perturbAmount = 0f)`

**用途 / Purpose:** 获取 `boss frames` 的当前值。

### GetAllyFrames
`public void GetAllyFrames(out List<MatrixFrame> initialFrames, out List<MatrixFrame> targetFrames, int agentCount = 10, float agentOffsetAngle = 0.15707964f, float perturbAmount = 0f)`

**用途 / Purpose:** 获取 `ally frames` 的当前值。

### GetBanditFrames
`public void GetBanditFrames(out List<MatrixFrame> initialFrames, out List<MatrixFrame> targetFrames, int agentCount = 10, float agentOffsetAngle = 0.15707964f, float perturbAmount = 0f)`

**用途 / Purpose:** 获取 `bandit frames` 的当前值。

### GetAlliesInitialFrame
`public void GetAlliesInitialFrame(out MatrixFrame frame)`

**用途 / Purpose:** 获取 `allies initial frame` 的当前值。

### GetBanditsInitialFrame
`public void GetBanditsInitialFrame(out MatrixFrame frame)`

**用途 / Purpose:** 获取 `bandits initial frame` 的当前值。

### IsWorldPointInsideCameraVolume
`public bool IsWorldPointInsideCameraVolume(in Vec3 worldPoint)`

**用途 / Purpose:** 处理 `is world point inside camera volume` 相关逻辑。

### ClampWorldPointToCameraVolume
`public bool ClampWorldPointToCameraVolume(in Vec3 worldPoint, out Vec3 clampedPoint)`

**用途 / Purpose:** 处理 `clamp world point to camera volume` 相关逻辑。

## 使用示例

```csharp
var value = new HideoutBossFightBehavior();
value.GetPlayerFrames(initialFrame, targetFrame, 0);
```

## 参见

- [完整类目录](../catalog)