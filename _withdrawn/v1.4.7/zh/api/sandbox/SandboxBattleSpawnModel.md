---
title: "SandboxBattleSpawnModel"
description: "SandBox.GameComponents.SandboxBattleSpawnModel —— 命名空间 SandBox.GameComponents 中的类，来自 bannerlord-1.4.7 源码的自动生成骨架页，仅收录成员签名。"
---

<!-- v147-skeleton -->

# SandboxBattleSpawnModel

**Namespace:** `SandBox.GameComponents`  
**Module:** `SandBox`  
**Type:** `public class SandboxBattleSpawnModel : BattleSpawnModel`  
**Base:** `BattleSpawnModel`  
**Source:** `SandBox/GameComponents/SandboxBattleSpawnModel.cs`

## 概述

`SandboxBattleSpawnModel` 是 bannerlord-1.4.7 源码中命名空间 `SandBox.GameComponents` 下的类，声明于模块目录 `SandBox` 的 `SandBox/GameComponents/SandboxBattleSpawnModel.cs`（第 14 行声明）。该声明访问级别为public（公开），修饰为无特殊修饰，基类型是 `BattleSpawnModel`；解析到的成员共 33 项，其中 8 项为 public 或 protected。

本页由 `tools/_v147_skeleton.mjs` 从上述源文件抽取生成，作用是提供该类型在 1.4.7 中的真实声明与签名清单。行为说明、调用时机与 mod 集成方式尚未撰写。

## 关键成员

下列签名按源码声明顺序逐字照抄（每项后的说明只描述签名形态，不描述业务用途）：

- `public DeploymentFormationClass OOBFormationClass;` — 字段，类型 DeploymentFormationClass
- `public FormationClass PrimaryFormationClass;` — 字段，类型 FormationClass
- `public int PrimaryClassTroopCount;` — 字段，类型 int
- `public int PrimaryClassDesiredTroopCount;` — 字段，类型 int
- `public FormationClass SecondaryFormationClass;` — 字段，类型 FormationClass
- `public int SecondaryClassTroopCount;` — 字段，类型 int
- `public int SecondaryClassDesiredTroopCount;` — 字段，类型 int
- `public Hero Captain;` — 字段，类型 Hero


## 心智模型

把这一页当作源码的索引来读，而不是教程：上面的 8 条成员记录全部来自 `SandBox/GameComponents/SandboxBattleSpawnModel.cs` 的真实声明，签名与返回类型是准确事实，而签名背后的行为、调用时机与失败边界本页尚未撰写，需要时请回到该源文件逐行核对。判断一个成员能否从 mod 侧直接调用，看的是 `public class SandboxBattleSpawnModel : BattleSpawnModel` 这一行的访问级别与修饰（当前为public（公开）、无特殊修饰）以及上面每项的 get/set 与参数个数，而不是本页的措辞。

## 参见

- 本目录索引：[`sandbox` API](../)
- [Add1000GoldCheat（同命名空间）](../Add1000GoldCheat)
- [Add100InfluenceCheat（同命名空间）](../Add100InfluenceCheat)
- [Add100RenownCheat（同命名空间）](../Add100RenownCheat)
- [FastModeSubModule（campaign 桶）](../../campaign/FastModeSubModule)
- [IGameStarter（core-extra 桶）](../../core-extra/IGameStarter)
