---
title: "AttackInformation"
description: "AttackInformation：TaleWorlds.MountAndBlade 的 public 结构体；公开成员 2 个（方法 0、属性 0、字段 0）。源文件 TaleWorlds.MountAndBlade/AttackInformation.cs。"
---
# AttackInformation

**Namespace:** `TaleWorlds.MountAndBlade`
**Module:** `TaleWorlds.MountAndBlade`
**Type:** `public struct AttackInformation`
**File:** `TaleWorlds.MountAndBlade/AttackInformation.cs`

## 概述

AttackInformation 位于 TaleWorlds.MountAndBlade 模块，源文件 TaleWorlds.MountAndBlade/AttackInformation.cs。它是一个 public 结构体，继承链为 AttackInformation。public/protected 成员共 2 个：2 构造函数。

> 本页为批量初稿：签名逐条取自 bannerlord-1.4.6 反编译源码，未经改写。每个方法实际做什么、何时调用、有什么风险，请对照源文件方法体阅读。

## 心智模型

结构事实：AttackInformation 是 TaleWorlds.MountAndBlade 的顶层类型，命名空间与模块目录一致，继承链 AttackInformation。成员构成以方法为主（方法 0/2，属性 0/2），对外主要以操作入口暴露。本页只列真实签名：每个方法做什么用、何时调用、有哪些坑，需要对照 TaleWorlds.MountAndBlade/AttackInformation.cs 的方法体或该类型的深写页确认。

## 主要成员

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `AttackInformation` | `public AttackInformation(Agent attackerAgent, Agent victimAgent, WeakGameEntity hitObject, in AttackCollisionData attackCollisionData, in MissionWeapon attackerWeapon)` | 构造函数 |
| `AttackInformation` | `public AttackInformation(Agent attackerAgent, Agent victimAgent, float armorAmountFloat, WeaponComponentData shieldOnBack, AgentFlag victimAgentFlags, Agent.AIStateFlag victimAgentAIStateFlags, float victimAgentAbsorbedDamageRatio, float damageMultiplierOfBone, float combatDifficultyMultiplier, MissionWeapon attackerWeapon, MissionWeapon victimMainHandWeapon, MissionWeapon victimShield, bool canGiveDamageToAgentShield, bool isVictimAgentLeftStance, bool isFriendlyFire, bool doesAttackerHaveMountAgent, bool doesVictimHaveMountAgent, Vec2 attackerAgentMovementVelocity, Vec2 attackerAgentMountMovementDirection, float attackerMovementDirectionAsAngle, Vec2 victimAgentMovementVelocity, Vec2 victimAgentMountMovementDirection, float victimMovementDirectionAsAngle, bool isVictimAgentSameWithAttackerAgent, bool isAttackerAgentMine, bool doesAttackerHaveRiderAgent, bool isAttackerAgentRiderAgentMine, bool isAttackerAgentMount, bool isVictimAgentMine, bool doesVictimHaveRiderAgent, bool isVictimAgentRiderAgentMine, bool isVictimAgentMount, bool isAttackerAgentNull, bool isAttackerAIControlled, BasicCharacterObject attackerAgentCharacter, BasicCharacterObject attackerRiderAgentCharacter, Monster attackerAgentMonster, IAgentOriginBase attackerAgentOrigin, IAgentOriginBase attackerRiderAgentOrigin, BasicCharacterObject victimAgentCharacter, BasicCharacterObject victimRiderAgentCharacter, IAgentOriginBase victimAgentOrigin, IAgentOriginBase victimRiderAgentOrigin, Vec3 attackerAgentPosition, Vec2 attackerAgentMovementDirection, Vec3 attackerAgentVelocity, float attackerAgentMountChargeDamageProperty, Vec3 attackerAgentCurrentWeaponOffset, bool isAttackerAgentHuman, bool isAttackerAgentActive, bool isAttackerAgentDoingPassiveAttack, bool isVictimAgentNull, float victimAgentScale, float victimAgentHealth, float victimAgentMaxHealth, float victimAgentWeight, float victimAgentTotalEncumbrance, bool isVictimAgentHuman, Vec3 victimAgentPosition, Vec2 victimAgentMovementDirection, Vec3 victimAgentVelocity, int weaponAttachBoneIndex, MissionWeapon offHandItem, bool isHeadShot, bool isVictimRiderAgentSameAsAttackerAgent, bool isAttackerPlayer, bool isVictimPlayer, DestructableComponent hitObjectDestructibleComponent)` | 构造函数 |

## 参见

- [↑ mountandblade 模块目录](../)
- [↑ API 参考](../../)
- [↑ 版本首页](../../../)
- [同命名空间 ActionIndexCache](../ActionIndexCache)
- [同命名空间 AgentBuildData](../AgentBuildData)
- [同命名空间 AgentCapsuleData](../AgentCapsuleData)
- [同命名空间 AgentCommonAILogic](../AgentCommonAILogic)
