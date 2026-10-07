---
title: "EquipmentHelper"
description: "装备搬运的静态工具：把一套 Equipment 的 12 个槽位逐格复制到英雄的另一套装备位上，不判断合法性、不碰背包。"
---

# EquipmentHelper

**命名空间：** `Helpers`
**模块：** `TaleWorlds.CampaignSystem`
**类型：** `public static class EquipmentHelper`
**基类：** 无
**源文件：** `bannerlord-1.4.7/TaleWorlds.CampaignSystem/Helpers/EquipmentHelper.cs`（声明见第 8 行）

## 概述

本类只有一件事——把一套 `Equipment` 原样搬到英雄的另一套装备位上。它不判断该不该装、不做数量或合法性校验、不碰背包，是纯搬运。目标套由源装备的类型标志决定：`IsStealth` 为真写进 `StealthEquipment`，`IsCivilian` 为真写进 `CivilianEquipment`，两者都为假则写进 `BattleEquipment`。

## 心智模型

把 EquipmentHelper 想成「装备复制粘贴」：源是一套 `Equipment`，目标是英雄身上的某一套装备位，本类只做 `for (int i = 0; i < 12; i++) target[i] = new EquipmentElement(source[i].Item, source[i].ItemModifier, null, false);` 这一件事。它存在的意义是让 mod 开发者不必手写 12 次赋值就能把一套装备搬到另一套上。关键设计决策是**目标套由源装备的类型标志决定，调用方无法显式指定**——想写进战斗装备，就得让源装备的 `IsStealth` 和 `IsCivilian` 都为 false。

## 何时使用 / 何时不要使用

**何时使用：**
- 要把英雄当前战斗装备复制成一套备用装备时，用 `AssignHeroEquipmentFromEquipment(hero, hero.BattleEquipment)`。
- 要初始化一套新的潜行装备时，先造一个 `IsStealth = true` 的 `Equipment`，再调本方法。
- 要初始化一套新的平民装备时，先造一个 `IsCivilian = true` 的 `Equipment`，再调本方法。

**何时不要使用：**
- 不要传 null——`hero` 或 `equipment` 为 null 直接 NRE。
- 不要期望它复制 `EquipmentElement` 的全部属性——第 3、4 个实参固定传 `null` 与 `false`，只带过 `Item` 与 `ItemModifier`。
- 不要试图显式指定目标套——目标套由源装备的类型标志决定。

## 成员说明

| 成员 | 用途、副作用与时机 |
|------|-------------------|
| `public static void AssignHeroEquipmentFromEquipment(Hero hero, Equipment equipment)` | 本类唯一成员。按源装备的类型标志挑目标套（`IsStealth` → `StealthEquipment`，`IsCivilian` → `CivilianEquipment`，否则 → `BattleEquipment`），然后 `for (int i = 0; i < 12; i++)` 逐格复制 `Item` 与 `ItemModifier`。`EquipmentHelper.cs:11` |

## 示例

```csharp
// 把玩家当前战斗装备复制成一套「潜行装备」
Equipment battle = Hero.MainHero.BattleEquipment;
EquipmentHelper.AssignHeroEquipmentFromEquipment(Hero.MainHero, battle);
Debug.Print($"copied {battle.Count} slots to {Hero.MainHero.Name}");
```

## 风险与边界

- **硬编码 12 个槽位**（第 26 行），不是按 `Equipment` 的实际槽位数遍历——如果将来游戏扩展了槽位数，本类不会自动跟上。
- `EquipmentElement` 构造的第 3、4 个实参**固定传 `null` 与 `false`**（第 28 行），即只带过 `Item` 与 `ItemModifier`，其他属性（如 `Ammo` 数量）不会被复制。
- 没有 null 检查——`hero` 或 `equipment` 为 null 直接 NRE。
- **目标套由源装备的类型标志决定，调用方无法显式指定**——想写进战斗装备，就得让源装备的 `IsStealth` / `IsCivilian` 都为 false；如果源装备恰好是潜行装备，调本方法会把内容写进 `StealthEquipment` 而不是 `BattleEquipment`。

## 依赖关系

- 上游 / 提供者：
  - [Campaign](../../campaign/Campaign) —— `Hero` 是战役世界对象，三套装备（战斗 / 平民 / 潜行）都挂在它上面。
  - [Mission](../../mission/Mission) —— 装备最终在任务场景里落到 `Agent` 上；本类只负责在战役侧把装备复制到英雄身上。

## 参见

- ↑ 父级：[core-extra 索引](../)
- ↔ 相关：[DialogHelper](../DialogHelper) · [CraftingHelper](../CraftingHelper)
