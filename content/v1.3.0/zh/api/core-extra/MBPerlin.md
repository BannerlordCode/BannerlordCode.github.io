---
title: "MBPerlin"
description: "MBPerlin 的自动生成类参考。"
---
# MBPerlin

**Namespace:** TaleWorlds.Core
**Module:** TaleWorlds.Core
**Type:** `public class MBPerlin`
**Base:** 无
**File:** `TaleWorlds.Core/MBPerlin.cs`

## 概述

`MBPerlin` 位于 `TaleWorlds.Core`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `TaleWorlds.Core` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要方法

### Noise
`public static float Noise(float x, float y, float z)`

**用途 / Purpose:** 调用 Noise 对应的操作。

```csharp
// 静态调用，不需要实例
MBPerlin.Noise(0, 0, 0);
```

### NoiseVec3
`public static Vec3 NoiseVec3(float t)`

**用途 / Purpose:** 调用 NoiseVec3 对应的操作。

```csharp
// 静态调用，不需要实例
MBPerlin.NoiseVec3(0);
```

### NoiseVec3
`public static Vec3 NoiseVec3(float x, float y, float z)`

**用途 / Purpose:** 调用 NoiseVec3 对应的操作。

```csharp
// 静态调用，不需要实例
MBPerlin.NoiseVec3(0, 0, 0);
```

## 使用示例

```csharp
MBPerlin.Noise(0, 0, 0);
```

## 参见

- [本区域目录](../)