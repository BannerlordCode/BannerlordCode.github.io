---
title: "SkillHelper"
description: "把某个角色的技能值换算成加成写进 ExplainedNumber，并给这个加成造显示文本。"
---

# SkillHelper

**命名空间：** `Helpers`
**模块：** `TaleWorlds.CampaignSystem`
**类型：** `public static class SkillHelper`
**基类：** 无
**源文件：** `bannerlord-1.4.7/TaleWorlds.CampaignSystem/Helpers/SkillHelper.cs`（声明见第 13 行）

## 概述

`SkillHelper` 做两件事：**把某个角色的技能值换算成加成，写进 `ExplainedNumber`**（4 个 `AddSkillBonusFor*` + 私有 `AddToStat`）与**给这个加成造显示文本**（`GetEffectDescriptionForSkillLevel`）。加成的**真源是 `SkillEffect` 与角色的 `GetSkillValue`**，本类只负责「找谁」「加多少」「怎么加」。

## 心智模型

把 `SkillHelper` 想成**技能加成的搬运工**。它不决定「技能值是多少」（那是 `CharacterObject.GetSkillValue` 的事），也不决定「加成怎么算」（那是 `SkillEffect.GetSkillEffectValue` 的事）。它只做三件事：

1. **找谁**：按角色类型（`PartyRole`）找到实际担任这个角色的角色。`AddSkillBonusForParty` 按「队伍里谁实际担任这个角色」取技能值，取值优先级是：`PartyLeader` → `GetEffectiveRoleHolder` → `GetEffectivePartyLeaderForSkill`。`AddSkillBonusForTown` 只认 `ClanLeader` 和 `Governor` 两个角色。
2. **加多少**：`SkillEffect.GetSkillEffectValue(skillLevel)` 算出加成值，`AddToStat` 决定是 `Add` 还是 `AddFactor`。
3. **怎么加**：`AddToStat` 只处理 `EffectIncrementType.Add` 和 `AddFactor` 两种，其他什么都不做。

**关键洞察：本类是静默的。** 三段都拿不到人时**静默什么都不加**，不报错。传既非 `ClanLeader` 也非 `Governor` 的 `SkillEffect` 给 `AddSkillBonusForTown`，**什么都不做也不报错**。

**与 `FeatHelper` / `TraitEffectHelper` 是并列的不同加成来源**，写法刻意一致（`Add` / `AddFactor` 二选一）。

## 何时使用 / 何时不要使用

**何时使用：**
- 你要把某个角色的技能值加成写进一个可解释数值（比如 UI 上显示「+10% 骑兵速度」）。
- 你要给技能加成造显示文本（比如「+10%」）。
- 你要理解「为什么某个角色有技能加成」——答案在 `SkillEffect` 和 `GetSkillValue` 里。

**何时不要使用：**
- 你要改技能值——改角色数据或 `SkillEffect`，不是改这个类。
- 你要改加成计算——改 `SkillEffect.GetSkillEffectValue`，不是改这个类。
- 你要处理特性（Feat）或特质（Trait）加成——那些在 `FeatHelper` / `TraitEffectHelper` 里。

## 成员说明

| 成员 | 用途、副作用与时机 |
|---|---|
| `AddSkillBonusForSkillLevel(SkillEffect skillEffect, ref ExplainedNumber explainedNumber, int skillLevel)` | 按技能等级取加成值，`IncludeDescriptions` 为真时用 `GameTexts.FindText("role", ...)` 作说明文本。`SkillHelper.cs:16` |
| `AddSkillBonusForParty(SkillEffect skillEffect, MobileParty party, ref ExplainedNumber explainedNumber)` | 按「队伍里谁实际担任这个角色」取技能值，三段优先级；**三段都拿不到人时静默什么都不加**。`SkillHelper.cs:23` |
| `AddSkillBonusForTown(SkillEffect skillEffect, Town town, ref ExplainedNumber explainedNumber)` | 只认 `ClanLeader` 和 `Governor` 两个角色；**其他角色一律不加也不报错**。`SkillHelper.cs:48` |
| `AddSkillBonusForCharacter(SkillEffect skillEffect, CharacterObject character, ref ExplainedNumber explainedNumber)` | 最简单一条：`character.GetSkillValue` → `GetSkillEffectValue` → `AddToStat`。`SkillHelper.cs:70` |
| `GetEffectDescriptionForSkillLevel(SkillEffect effect, int level)` | 造显示文本；**返回的是共享的 `Description` 对象且就地改写了它的 `a0`**，同一 `SkillEffect` 的两次不同 `level` 调用会互相覆盖。`SkillHelper.cs:78` |
| `AddToStat(ref ExplainedNumber stat, EffectIncrementType effectIncrementType, float number, TextObject text)` | **私有，不对外**。只处理 `Add` 和 `AddFactor` 两种，其他什么都不做。`SkillHelper.cs:87` |
| `GetEffectivePartyLeaderForSkill(PartyBase party)` | 找「事实上的领队」：`LeaderHero` → `MemberRoster.GetCharacterAtIndex(0)`（拿队里第 0 号兵当领队）。`SkillHelper.cs:101` |

## 示例

```csharp
// 把某个角色的技能值加成写进一个可解释数值里
ExplainedNumber number = new ExplainedNumber(0f, true, null);
CharacterObject character = Hero.MainHero.CharacterObject;
SkillHelper.AddSkillBonusForCharacter(effect, character, ref number);
Debug.Print($"skill bonus = {number.ResultNumber}");

// 也可以按队伍取技能值
SkillHelper.AddSkillBonusForParty(effect, MobileParty.MainParty, ref number);
Debug.Print($"party bonus = {number.ResultNumber}");
```

## 风险与边界

1. **`AddSkillBonusForParty` 三段都拿不到人时静默什么都不加**——不报错，调用方无法区分「没有这个角色」和「角色技能值为 0」。
2. **`AddSkillBonusForTown` 只认 `ClanLeader` 和 `Governor`**——传其他角色进来什么都不做也不报错。
3. **`GetEffectDescriptionForSkillLevel` 返回的是共享的 `Description` 对象且就地改写了它的 `a0`**——同一 `SkillEffect` 的两次不同 `level` 调用会互相覆盖；想要稳定文本必须自己 `new TextObject(effect.Description.ToString())`。
4. **`AddFactor` 的值要 ×100**——因为 `AddFactor` 是百分比，`GetEffectDescriptionForSkillLevel` 里会 ×100。
5. **`GetEffectivePartyLeaderForSkill` 拿队里第 0 号兵当「事实上的领队」**——这不是真正的领队，只是 roster 里的第一个。

## 依赖关系

- 上游 / 提供者：
  - [Game](../../core-extra/Game) —— 说明文本走 `GameTexts`，经 `Game.Current.GameTextManager` 解析。
  - [Campaign](../../campaign/Campaign) —— 技能与角色都是战役世界对象；`ExplainedNumber` 的消费方在战役模型层。

## 参见

- ↑ 父级：[core-extra 索引](../)
- ↔ 相关：[ItemHelper](../ItemHelper)
