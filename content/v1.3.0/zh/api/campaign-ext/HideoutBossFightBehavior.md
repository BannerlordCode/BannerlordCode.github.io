---
title: "HideoutBossFightBehavior"
description: "HideoutBossFightBehavior 的自动生成类参考。"
---
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

**用途 / Purpose:** 读取并返回当前对象中 「player frames」 的结果。

```csharp
// 先通过子系统 API 拿到 HideoutBossFightBehavior 实例
HideoutBossFightBehavior hideoutBossFightBehavior = ...;
hideoutBossFightBehavior.GetPlayerFrames(initialFrame, targetFrame, 0);
```

### GetBossFrames
`public void GetBossFrames(out MatrixFrame initialFrame, out MatrixFrame targetFrame, float perturbAmount = 0f)`

**用途 / Purpose:** 读取并返回当前对象中 「boss frames」 的结果。

```csharp
// 先通过子系统 API 拿到 HideoutBossFightBehavior 实例
HideoutBossFightBehavior hideoutBossFightBehavior = ...;
hideoutBossFightBehavior.GetBossFrames(initialFrame, targetFrame, 0);
```

### GetAllyFrames
`public void GetAllyFrames(out List<MatrixFrame> initialFrames, out List<MatrixFrame> targetFrames, int agentCount = 10, float agentOffsetAngle = 0.15707964f, float perturbAmount = 0f)`

**用途 / Purpose:** 读取并返回当前对象中 「ally frames」 的结果。

```csharp
// 先通过子系统 API 拿到 HideoutBossFightBehavior 实例
HideoutBossFightBehavior hideoutBossFightBehavior = ...;
hideoutBossFightBehavior.GetAllyFrames(initialFrames, targetFrames, 0, 0, 0);
```

### GetBanditFrames
`public void GetBanditFrames(out List<MatrixFrame> initialFrames, out List<MatrixFrame> targetFrames, int agentCount = 10, float agentOffsetAngle = 0.15707964f, float perturbAmount = 0f)`

**用途 / Purpose:** 读取并返回当前对象中 「bandit frames」 的结果。

```csharp
// 先通过子系统 API 拿到 HideoutBossFightBehavior 实例
HideoutBossFightBehavior hideoutBossFightBehavior = ...;
hideoutBossFightBehavior.GetBanditFrames(initialFrames, targetFrames, 0, 0, 0);
```

### GetAlliesInitialFrame
`public void GetAlliesInitialFrame(out MatrixFrame frame)`

**用途 / Purpose:** 读取并返回当前对象中 「allies initial frame」 的结果。

```csharp
// 先通过子系统 API 拿到 HideoutBossFightBehavior 实例
HideoutBossFightBehavior hideoutBossFightBehavior = ...;
hideoutBossFightBehavior.GetAlliesInitialFrame(frame);
```

### GetBanditsInitialFrame
`public void GetBanditsInitialFrame(out MatrixFrame frame)`

**用途 / Purpose:** 读取并返回当前对象中 「bandits initial frame」 的结果。

```csharp
// 先通过子系统 API 拿到 HideoutBossFightBehavior 实例
HideoutBossFightBehavior hideoutBossFightBehavior = ...;
hideoutBossFightBehavior.GetBanditsInitialFrame(frame);
```

### IsWorldPointInsideCameraVolume
`public bool IsWorldPointInsideCameraVolume(in Vec3 worldPoint)`

**用途 / Purpose:** 判断当前对象是否处于 「world point inside camera volume」 状态或条件。

```csharp
// 先通过子系统 API 拿到 HideoutBossFightBehavior 实例
HideoutBossFightBehavior hideoutBossFightBehavior = ...;
var result = hideoutBossFightBehavior.IsWorldPointInsideCameraVolume(worldPoint);
```

### ClampWorldPointToCameraVolume
`public bool ClampWorldPointToCameraVolume(in Vec3 worldPoint, out Vec3 clampedPoint)`

**用途 / Purpose:** 处理与 「clamp world point to camera volume」 相关的逻辑。

```csharp
// 先通过子系统 API 拿到 HideoutBossFightBehavior 实例
HideoutBossFightBehavior hideoutBossFightBehavior = ...;
var result = hideoutBossFightBehavior.ClampWorldPointToCameraVolume(worldPoint, clampedPoint);
```

## 使用示例

```csharp
// 通常从对应子系统 API 获取实例后调用
HideoutBossFightBehavior hideoutBossFightBehavior = ...;
hideoutBossFightBehavior.GetPlayerFrames(initialFrame, targetFrame, 0);
```

## 参见

- [本区域目录](../)