---
title: "MountDamageEffect"
description: "MountDamageEffect 的自动生成类参考。"
---
# MountDamageEffect

**Namespace:** TaleWorlds.MountAndBlade.Network.Gameplay.Perks.Effects
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class MountDamageEffect : MPCombatPerkEffect`
**Base:** `MPCombatPerkEffect`
**File:** `Modules.CustomBattle/TaleWorlds.MountAndBlade.Multiplayer/TaleWorlds.MountAndBlade.Network.Gameplay.Perks.Effects/MountDamageEffect.cs`

## 概述

`MountDamageEffect` 位于 `TaleWorlds.MountAndBlade.Network.Gameplay.Perks.Effects`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `TaleWorlds.MountAndBlade.Network.Gameplay.Perks.Effects` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要方法

### GetMountDamage
`public override float GetMountDamage(WeaponComponentData attackerWeapon, DamageTypes damageType, bool isAlternativeAttack)`

**用途 / Purpose:** **用途 / Purpose:** 读取并返回当前对象中 mount damage 的结果。

```csharp
// 先通过子系统 API 拿到 MountDamageEffect 实例
MountDamageEffect mountDamageEffect = ...;
var result = mountDamageEffect.GetMountDamage(attackerWeapon, damageType, false);
```

## 使用示例

```csharp
// 通常从对应子系统 API 获取实例后调用
MountDamageEffect mountDamageEffect = ...;
mountDamageEffect.GetMountDamage(attackerWeapon, damageType, false);
```

## 参见

- [本区域目录](../)