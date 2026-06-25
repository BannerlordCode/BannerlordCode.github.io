---
title: "Missile"
description: "Missile 的自动生成类参考。"
---
# Missile

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class Missile : MBMissile`
**Base:** `MBMissile`
**File:** `bin/TaleWorlds.MountAndBlade/TaleWorlds.MountAndBlade/Mission.cs`

## 概述

`Missile` 位于 `TaleWorlds.MountAndBlade`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `TaleWorlds.MountAndBlade` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要属性

| Name | Signature |
|------|-----------|
| `Entity` | `public GameEntity Entity { get; }` |
| `Weapon` | `public MissionWeapon Weapon { get; }` |
| `ShooterAgent` | `public Agent ShooterAgent { get; }` |
| `MissionObjectToIgnore` | `public MissionObject MissionObjectToIgnore { get; }` |
| `AlreadyHitEntityToIgnore` | `public GameEntity AlreadyHitEntityToIgnore { get; }` |

## 主要方法

### CalculatePassbySoundParametersMT
`public void CalculatePassbySoundParametersMT(ref SoundEventParameter soundEventParameter)`

**用途 / Purpose:** **用途 / Purpose:** 计算passby sound parameters m t的当前值或结果。

```csharp
// 先通过子系统 API 拿到 Missile 实例
Missile missile = ...;
missile.CalculatePassbySoundParametersMT(soundEventParameter);
```

### CalculateBounceBackVelocity
`public void CalculateBounceBackVelocity(Vec3 rotationSpeed, AttackCollisionData collisionData, out Vec3 velocity, out Vec3 angularVelocity)`

**用途 / Purpose:** **用途 / Purpose:** 计算bounce back velocity的当前值或结果。

```csharp
// 先通过子系统 API 拿到 Missile 实例
Missile missile = ...;
missile.CalculateBounceBackVelocity(rotationSpeed, collisionData, velocity, angularVelocity);
```

### PassThroughEntity
`public void PassThroughEntity(GameEntity entity)`

**用途 / Purpose:** **用途 / Purpose:** 调用 PassThroughEntity 对应的操作。

```csharp
// 先通过子系统 API 拿到 Missile 实例
Missile missile = ...;
missile.PassThroughEntity(entity);
```

## 使用示例

```csharp
// 通常从对应子系统 API 获取实例后调用
Missile missile = ...;
missile.CalculatePassbySoundParametersMT(soundEventParameter);
```

## 参见

- [本区域目录](../)