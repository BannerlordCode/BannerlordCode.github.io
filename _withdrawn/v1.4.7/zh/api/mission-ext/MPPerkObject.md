---
title: "MPPerkObject"
description: "TaleWorlds.MountAndBlade.MPPerkObject —— 命名空间 TaleWorlds.MountAndBlade 中的类，来自 bannerlord-1.4.7 源码的自动生成骨架页，仅收录成员签名。"
---

<!-- v147-skeleton -->

# MPPerkObject

**Namespace:** `TaleWorlds.MountAndBlade`  
**Module:** `TaleWorlds.MountAndBlade`  
**Type:** `public class MPPerkObject : IReadOnlyPerkObject`  
**Base:** `IReadOnlyPerkObject`  
**Source:** `TaleWorlds.MountAndBlade/MPPerkObject.cs`

## 概述

`MPPerkObject` 是 bannerlord-1.4.7 源码中命名空间 `TaleWorlds.MountAndBlade` 下的类，声明于模块目录 `TaleWorlds.MountAndBlade` 的 `TaleWorlds.MountAndBlade/MPPerkObject.cs`（第 12 行声明）。该声明访问级别为public（公开），修饰为无特殊修饰，基类型是 `IReadOnlyPerkObject`；解析到的成员共 266 项，其中 35 项为 public 或 protected。

本页由 `tools/_v147_skeleton.mjs` 从上述源文件抽取生成，作用是提供该类型在 1.4.7 中的真实声明与签名清单。行为说明、调用时机与 mod 集成方式尚未撰写。

## 关键成员

下列签名按源码声明顺序逐字照抄（每项后的说明只描述签名形态，不描述业务用途）：

- `public MPOnSpawnPerkHandlerInstance(IEnumerable<IReadOnlyPerkObject> perks)` — 方法，1 个参数，返回 M
- `public MPOnSpawnPerkHandlerInstance(MissionPeer peer)` — 方法，1 个参数，返回 M
- `public MPPerkHandlerInstance(Agent agent)` — 方法，1 个参数，返回 M
- `public MPPerkHandlerInstance(MissionPeer peer)` — 方法，1 个参数，返回 M
- `public MPCombatPerkHandlerInstance(Agent attacker, Agent defender)` — 方法，2 个参数，返回 M
- `protected MPOnSpawnPerkHandler(IEnumerable<IReadOnlyPerkObject> perks)` — 方法，1 个参数，返回 M
- `protected MPOnSpawnPerkHandler(MissionPeer peer)` — 方法，1 个参数，返回 M
- `public float GetExtraTroopCount()` — 方法，0 个参数，返回 float
- `public IEnumerable<ValueTuple<EquipmentIndex, EquipmentElement>> GetAlternativeEquipments(bool isPlayer)` — 方法，1 个参数，返回 IEnumerable<ValueTuple<EquipmentIndex, EquipmentElement>>
- `public float GetDrivenPropertyBonusOnSpawn(bool isPlayer, DrivenProperty drivenProperty, float baseValue)` — 方法，3 个参数，返回 float
- `public float GetHitpoints(bool isPlayer)` — 方法，1 个参数，返回 float
- `protected MPPerkHandler(Agent agent)` — 方法，1 个参数，返回 M
- `protected MPPerkHandler(MissionPeer peer)` — 方法，1 个参数，返回 M
- `public void OnEvent(MPPerkCondition.PerkEventFlags flags)` — 方法，1 个参数，返回 void
- `public void OnEvent(Agent agent, MPPerkCondition.PerkEventFlags flags)` — 方法，2 个参数，返回 void
- `public void OnTick(int tickCount)` — 方法，1 个参数，返回 void
- `public float GetDrivenPropertyBonus(DrivenProperty drivenProperty, float baseValue)` — 方法，2 个参数，返回 float
- `public float GetRangedAccuracy()` — 方法，0 个参数，返回 float
- `public float GetThrowingWeaponSpeed(WeaponComponentData attackerWeapon)` — 方法，1 个参数，返回 float
- `public float GetDamageInterruptionThreshold()` — 方法，0 个参数，返回 float
- `public float GetMountManeuver()` — 方法，0 个参数，返回 float
- `public float GetMountSpeed()` — 方法，0 个参数，返回 float
- `public int GetGoldOnKill(float attackerValue, float victimValue)` — 方法，2 个参数，返回 int
- `public int GetGoldOnAssist()` — 方法，0 个参数，返回 int
- `public int GetRewardedGoldOnAssist()` — 方法，0 个参数，返回 int
- `public bool GetIsTeamRewardedOnDeath()` — 方法，0 个参数，返回 bool
- `public IEnumerable<ValueTuple<MissionPeer, int>> GetTeamGoldRewardsOnDeath()` — 方法，0 个参数，返回 IEnumerable<ValueTuple<MissionPeer, int>>
- `public float GetEncumbrance(bool isOnBody)` — 方法，1 个参数，返回 float
- `protected MPCombatPerkHandler(Agent attacker, Agent defender)` — 方法，2 个参数，返回 M
- `public float GetDamage(WeaponComponentData attackerWeapon, DamageTypes damageType, bool isAlternativeAttack)` — 方法，3 个参数，返回 float

- 其余 5 个 public/protected 成员未在此列出。

## 心智模型

把这一页当作源码的索引来读，而不是教程：上面的 35 条成员记录全部来自 `TaleWorlds.MountAndBlade/MPPerkObject.cs` 的真实声明，签名与返回类型是准确事实，而签名背后的行为、调用时机与失败边界本页尚未撰写，需要时请回到该源文件逐行核对。判断一个成员能否从 mod 侧直接调用，看的是 `public class MPPerkObject : IReadOnlyPerkObject` 这一行的访问级别与修饰（当前为public（公开）、无特殊修饰）以及上面每项的 get/set 与参数个数，而不是本页的措辞。

## 参见

- 本目录索引：[`mission-ext` API](../)
- [ActionOptionData（同命名空间）](../ActionOptionData)
- [AgentAlarmStateWidget（同命名空间）](../AgentAlarmStateWidget)
- [AgentAmmoTextWidget（同命名空间）](../AgentAmmoTextWidget)
- [FastModeSubModule（campaign 桶）](../../campaign/FastModeSubModule)
- [IGameStarter（core-extra 桶）](../../core-extra/IGameStarter)
