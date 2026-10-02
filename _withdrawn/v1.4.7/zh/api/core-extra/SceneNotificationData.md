---
title: "SceneNotificationData"
description: "TaleWorlds.Core.SceneNotificationData —— 命名空间 TaleWorlds.Core 中的类，来自 bannerlord-1.4.7 源码的自动生成骨架页，仅收录成员签名。"
---

<!-- v147-skeleton -->

# SceneNotificationData

**Namespace:** `TaleWorlds.Core`  
**Module:** `TaleWorlds.Core`  
**Type:** `public class SceneNotificationData`  
**Base:** `无（源码未显式声明基类）`  
**Source:** `TaleWorlds.Core/SceneNotificationData.cs`

## 概述

`SceneNotificationData` 是 bannerlord-1.4.7 源码中命名空间 `TaleWorlds.Core` 下的类，声明于模块目录 `TaleWorlds.Core` 的 `TaleWorlds.Core/SceneNotificationData.cs`（第 8 行声明）。该声明访问级别为public（公开），修饰为无特殊修饰，源码中未显式声明基类型；解析到的成员共 21 项，其中 18 项为 public 或 protected。

本页由 `tools/_v147_skeleton.mjs` 从上述源文件抽取生成，作用是提供该类型在 1.4.7 中的真实声明与签名清单。行为说明、调用时机与 mod 集成方式尚未撰写。

## 关键成员

下列签名按源码声明顺序逐字照抄（每项后的说明只描述签名形态，不描述业务用途）：

- `public SceneNotificationCharacter(BasicCharacterObject character, Equipment overriddenEquipment = null, BodyProperties overriddenBodyProperties = default(BodyProperties), bool useCivilianEquipment = false, uint customColor1 = 4294967295U, uint customColor2 = 4294967295U, bool useHorse = false)` — 方法，7 个参数，返回 S
- `public readonly BasicCharacterObject Character;` — 字段，类型 BasicCharacterObject
- `public readonly Equipment OverriddenEquipment;` — 字段，类型 Equipment
- `public readonly BodyProperties OverriddenBodyProperties;` — 字段，类型 BodyProperties
- `public readonly bool UseCivilianEquipment;` — 字段，类型 bool
- `public readonly bool UseHorse;` — 字段，类型 bool
- `public readonly uint CustomColor1;` — 字段，类型 uint
- `public readonly uint CustomColor2;` — 字段，类型 uint
- `public SceneNotificationShip(string shipPrefabId, List<ShipVisualSlotInfo> shipUpgrades, float shipHitPointRatio, uint sailColor1, uint sailColor2, int shipSeed)` — 方法，6 个参数，返回 S
- `public readonly string ShipPrefabId;` — 字段，类型 string
- `public readonly List<ShipVisualSlotInfo> ShipUpgrades;` — 字段，类型 List<ShipVisualSlotInfo>
- `public readonly float ShipHitPointRatio;` — 字段，类型 float
- `public readonly uint SailColor1;` — 字段，类型 uint
- `public readonly uint SailColor2;` — 字段，类型 uint
- `public readonly int ShipSeed;` — 字段，类型 int
- `public bool InitializePhysics;` — 字段，类型 bool
- `public bool DisableStaticShadows;` — 字段，类型 bool
- `public float? OverriddenWaterStrength;` — 字段，类型 float?


## 心智模型

把这一页当作源码的索引来读，而不是教程：上面的 18 条成员记录全部来自 `TaleWorlds.Core/SceneNotificationData.cs` 的真实声明，签名与返回类型是准确事实，而签名背后的行为、调用时机与失败边界本页尚未撰写，需要时请回到该源文件逐行核对。判断一个成员能否从 mod 侧直接调用，看的是 `public class SceneNotificationData` 这一行的访问级别与修饰（当前为public（公开）、无特殊修饰）以及上面每项的 get/set 与参数个数，而不是本页的措辞。

## 参见

- 本目录索引：[`core-extra` API](../)
- [BannerHelper（同命名空间）](../BannerHelper)
- [BannerImageIdentifier（同命名空间）](../BannerImageIdentifier)
- [CallbackDebugTool（同命名空间）](../CallbackDebugTool)
- [FastModeSubModule（campaign 桶）](../../campaign/FastModeSubModule)
- [CustomBattleSubModule（custombattle 桶）](../../custombattle/CustomBattleSubModule)
