---
title: "EquipmentHelper"
description: "装备搬运的静态工具：把一套 Equipment 的 12 个槽位逐格复制到英雄的另一套装备位上，不判断合法性、不碰背包。"
---

# EquipmentHelper

**Namespace:** Helpers
**Module:** TaleWorlds.CampaignSystem
**Type:** `public static class EquipmentHelper`
**Base:** 无（静态类）
**Source:** `bannerlord-1.5.3/TaleWorlds.CampaignSystem/Helpers/EquipmentHelper.cs`

## 概述

本类只有一件事——把一套 `Equipment` 原样搬到英雄的另一套装备位上。它不判断该不该装、不做数量或合法性校验、不碰背包，是纯搬运。目标套由源装备的类型标志决定：`IsStealth` 为真写进 `StealthEquipment`，`IsCivilian` 为真写进 `CivilianEquipment`，两者都为假则写进 `BattleEquipment`。

## 心智模型

把 EquipmentHelper 想成「装备复制粘贴」：源是一套 `Equipment`，目标是英雄身上的某一套装备位，本类只做 `for (int i = 0; i < 12; i++) target[i] = new EquipmentElement(source[i].Item, source[i].ItemModifier, null, false);` 这一件事。它存在的意义是让 mod 开发者不必手写 12 次赋值就能把一套装备搬到另一套上。关键设计决策是**目标套由源装备的类型标志决定，调用方无法显式指定**——想写进战斗装备，就得让源装备的 `IsStealth` 和 `IsCivilian` 都为 false。

## 怎么用

### 怎么拿到它

静态类，直接 `EquipmentHelper.AssignHeroEquipmentFromEquipment(hero, equipment)` 调用。

### 典型用法

- 要把英雄当前战斗装备复制成一套备用装备时，用 `AssignHeroEquipmentFromEquipment(hero, hero.BattleEquipment)`。
- 要初始化一套新的潜行装备时，先造一个 `IsStealth = true` 的 `Equipment`，再调本方法。
- 要初始化一套新的平民装备时，先造一个 `IsCivilian = true` 的 `Equipment`，再调本方法。

### 最容易踩的坑

- **硬编码 12 个槽位**（第 26 行），不是按 `Equipment` 的实际槽位数遍历——如果将来游戏扩展了槽位数，本类不会自动跟上。
- `EquipmentElement` 构造的第 3、4 个实参**固定传 `null` 与 `false`**（第 28 行），即只带过 `Item` 与 `ItemModifier`，其他属性（如 `Ammo` 数量）不会被复制。
- 没有 null 检查——`hero` 或 `equipment` 为 `null` 直接 NRE。
- **目标套由源装备的类型标志决定，调用方无法显式指定**——想写进战斗装备，就得让源装备的 `IsStealth` / `IsCivilian` 都为 false；如果源装备恰好是潜行装备，调本方法会把内容写进 `StealthEquipment` 而不是 `BattleEquipment`。

## 关键成员

- `public static void AssignHeroEquipmentFromEquipment(Hero hero, Equipment equipment)` —— 本类唯一成员。按源装备的类型标志挑目标套（`IsStealth` → `StealthEquipment`，`IsCivilian` → `CivilianEquipment`，否则 → `BattleEquipment`），然后 `for (int i = 0; i < 12; i++)` 逐格复制 `Item` 与 `ItemModifier`。`EquipmentHelper.cs:11`

## 真实示例

```csharp
// 把玩家当前战斗装备复制成一套「潜行装备」
Equipment battle = Hero.MainHero.BattleEquipment;
EquipmentHelper.AssignHeroEquipmentFromEquipment(Hero.MainHero, battle);
Debug.Print($"copied {battle.Count} slots to {Hero.MainHero.Name}");
// 注意：目标套由 battle 的类型标志决定；battle 既非 Stealth 也非 Civilian ⇒ 写回 BattleEquipment
```

## 参见

- ↔ [ItemHelper](../ItemHelper) —— 同桶配套：它比较物品与生成伤害/数量文本，本类负责把装备装上英雄
- ↔ [Campaign](../../campaign/Campaign) —— `Hero` 是战役世界对象，装备读写都发生在战役生命周期内
- ↔ [GameModels](../../campaign/GameModels) —— 物品与装备的数值规则在模型层，不写死在 helper 里

## 导航

- ↑ [API 参考](../../) —— 本版本 API 层入口：按任务找页的路径表
- ↑ [v1.5.3 首页](../../../) —— 19 个桶的完整缺口表与覆盖现状
- ↔ [模块地图](../../../architecture/module-map) —— 确认某个类型属于哪一桶
