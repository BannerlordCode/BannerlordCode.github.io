---
title: "MultiplayerClassDivisions"
description: "TaleWorlds.MountAndBlade.MultiplayerClassDivisions —— 命名空间 TaleWorlds.MountAndBlade 中的类，来自 bannerlord-1.4.7 源码的自动生成骨架页，仅收录成员签名。"
---

<!-- v147-skeleton -->

# MultiplayerClassDivisions

**Namespace:** `TaleWorlds.MountAndBlade`  
**Module:** `TaleWorlds.MountAndBlade`  
**Type:** `public class MultiplayerClassDivisions`  
**Base:** `无（源码未显式声明基类）`  
**Source:** `TaleWorlds.MountAndBlade/MultiplayerClassDivisions.cs`

## 概述

`MultiplayerClassDivisions` 是 bannerlord-1.4.7 源码中命名空间 `TaleWorlds.MountAndBlade` 下的类，声明于模块目录 `TaleWorlds.MountAndBlade` 的 `TaleWorlds.MountAndBlade/MultiplayerClassDivisions.cs`（第 13 行声明）。该声明访问级别为public（公开），修饰为无特殊修饰，源码中未显式声明基类型；解析到的成员共 57 项，其中 36 项为 public 或 protected。

本页由 `tools/_v147_skeleton.mjs` 从上述源文件抽取生成，作用是提供该类型在 1.4.7 中的真实声明与签名清单。行为说明、调用时机与 mod 集成方式尚未撰写。

## 关键成员

下列签名按源码声明顺序逐字照抄（每项后的说明只描述签名形态，不描述业务用途）：

- `public BasicCharacterObject HeroCharacter { get; private set; }` — 属性，get/set，类型 BasicCharacterObject
- `public BasicCharacterObject TroopCharacter { get; private set; }` — 属性，get/set，类型 BasicCharacterObject
- `public BasicCharacterObject BannerBearerCharacter { get; private set; }` — 属性，get/set，类型 BasicCharacterObject
- `public BasicCultureObject Culture { get; private set; }` — 属性，get/set，类型 BasicCultureObject
- `public MultiplayerClassDivisions.MPHeroClassGroup ClassGroup { get; private set; }` — 属性，get/set，类型 MultiplayerClassDivisions.MPHeroClassGroup
- `public string HeroIdleAnim { get; private set; }` — 属性，get/set，类型 string
- `public string HeroMountIdleAnim { get; private set; }` — 属性，get/set，类型 string
- `public string TroopIdleAnim { get; private set; }` — 属性，get/set，类型 string
- `public string TroopMountIdleAnim { get; private set; }` — 属性，get/set，类型 string
- `public int ArmorValue { get; private set; }` — 属性，get/set，类型 int
- `public int Health { get; private set; }` — 属性，get/set，类型 int
- `public float HeroMovementSpeedMultiplier { get; private set; }` — 属性，get/set，类型 float
- `public float HeroCombatMovementSpeedMultiplier { get; private set; }` — 属性，get/set，类型 float
- `public float HeroTopSpeedReachDuration { get; private set; }` — 属性，get/set，类型 float
- `public float TroopMovementSpeedMultiplier { get; private set; }` — 属性，get/set，类型 float
- `public float TroopCombatMovementSpeedMultiplier { get; private set; }` — 属性，get/set，类型 float
- `public float TroopTopSpeedReachDuration { get; private set; }` — 属性，get/set，类型 float
- `public float TroopMultiplier { get; private set; }` — 属性，get/set，类型 float
- `public int TroopCost { get; private set; }` — 属性，get/set，类型 int
- `public int TroopCasualCost { get; private set; }` — 属性，get/set，类型 int
- `public int TroopBattleCost { get; private set; }` — 属性，get/set，类型 int
- `public int MeleeAI { get; private set; }` — 属性，get/set，类型 int
- `public int RangedAI { get; private set; }` — 属性，get/set，类型 int
- `public TextObject HeroInformation { get; private set; }` — 属性，get/set，类型 TextObject
- `public TextObject TroopInformation { get; private set; }` — 属性，get/set，类型 TextObject
- `public TargetIconType IconType { get; private set; }` — 属性，get/set，类型 TargetIconType
- `public override bool Equals(object obj)` — 方法，1 个参数，返回 bool
- `public override int GetHashCode()` — 方法，0 个参数，返回 int
- `public List<IReadOnlyPerkObject> GetAllAvailablePerksForListIndex(int index, string forcedForGameMode = null)` — 方法，2 个参数，返回 List<IReadOnlyPerkObject>
- `public override void Deserialize(MBObjectManager objectManager, XmlNode node)` — 方法，2 个参数，返回 void

- 其余 6 个 public/protected 成员未在此列出。

## 心智模型

把这一页当作源码的索引来读，而不是教程：上面的 36 条成员记录全部来自 `TaleWorlds.MountAndBlade/MultiplayerClassDivisions.cs` 的真实声明，签名与返回类型是准确事实，而签名背后的行为、调用时机与失败边界本页尚未撰写，需要时请回到该源文件逐行核对。判断一个成员能否从 mod 侧直接调用，看的是 `public class MultiplayerClassDivisions` 这一行的访问级别与修饰（当前为public（公开）、无特殊修饰）以及上面每项的 get/set 与参数个数，而不是本页的措辞。

## 参见

- 本目录索引：[`mission-ext` API](../)
- [ActionOptionData（同命名空间）](../ActionOptionData)
- [AgentAlarmStateWidget（同命名空间）](../AgentAlarmStateWidget)
- [AgentAmmoTextWidget（同命名空间）](../AgentAmmoTextWidget)
- [FastModeSubModule（campaign 桶）](../../campaign/FastModeSubModule)
- [IGameStarter（core-extra 桶）](../../core-extra/IGameStarter)
