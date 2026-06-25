---
title: "MBParticleSystem"
description: "MBParticleSystem 的自动生成类参考。"
---
# MBParticleSystem

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** `public struct MBParticleSystem`
**Base:** 无
**File:** `bin/TaleWorlds.MountAndBlade/TaleWorlds.MountAndBlade/MBParticleSystem.cs`

## 概述

`MBParticleSystem` 位于 `TaleWorlds.MountAndBlade`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `TaleWorlds.MountAndBlade` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要方法

### Equals
`public bool Equals(MBParticleSystem a)`

**用途 / Purpose:** **用途 / Purpose:** 比较当前对象与传入实例是否相等。

```csharp
// 先通过子系统 API 拿到 MBParticleSystem 实例
MBParticleSystem mBParticleSystem = ...;
var result = mBParticleSystem.Equals(a);
```

### GetHashCode
`public override int GetHashCode()`

**用途 / Purpose:** **用途 / Purpose:** 返回当前对象的哈希码，用于字典或哈希集合中的快速查找。

```csharp
// 先通过子系统 API 拿到 MBParticleSystem 实例
MBParticleSystem mBParticleSystem = ...;
var result = mBParticleSystem.GetHashCode();
```

## 使用示例

```csharp
// 通常从对应子系统 API 获取实例后调用
MBParticleSystem mBParticleSystem = ...;
mBParticleSystem.Equals(a);
```

## 参见

- [本区域目录](../)