---
title: "QuestHelper"
description: "任务系统的静态工具集：替代方案检查、强征判定与后果、地图箭头与宣战导致任务失败或取消。"
---

# QuestHelper

**Namespace:** Helpers
**Module:** TaleWorlds.CampaignSystem
**Type:** `public static class QuestHelper`
**Base:** 无（静态类）
**Source:** `bannerlord-1.5.3/TaleWorlds.CampaignSystem/Helpers/QuestHelper.cs`

## 概述

本类分三族——「替代方案」检查（金库 / 名册 / 近战与远程技能表，6 个成员）：判定玩家能不能用「花钱 / 派兵 / 打一场」来绕过任务；「强征」的判定与后果（2 个成员）：`CheckMinorMajorCoercion` 只判、`ApplyGenericMinorMajorCoercionConsequences` 一次性施加全部惩罚；任务与地图/战争的两个杂项（画地图箭头、宣战导致任务失败或取消）。它自己不持有状态，全部是「读状态后做判断」或「把一串既有 Action 串起来」。

## 心智模型

把 QuestHelper 想成任务系统的「工具箱」：它不创建任务、不管理任务状态机，只做三件事——检查玩家有没有替代方案的资源、判定强征是否成立并施加后果、以及两个与任务相关的杂项操作（画地图箭头、宣战导致任务失败或取消）。关键设计决策是**「替代方案」语义的收敛**——金库检查、名册检查、技能表查询这三个方法共同构成「能不能用钱/兵/打一场来绕过任务」的完整判定链。`ApplyGenericMinorMajorCoercionConsequences` 是一次性改了四样东西（任务状态 / 玩家-给予者关系 −5 / 给予者权力 −10 / 玩家荣誉 −50），调用方无法只取其中一项。

## 怎么用

### 怎么拿到它

静态类，直接 `QuestHelper.方法名(...)` 调用。

### 典型用法

- 要检查玩家能不能用钱绕过任务时，用 `CheckGoldForAlternativeSolution(requiredGold, out explanation)`。
- 要检查玩家能不能用兵绕过任务时，用 `CheckRosterForAlternativeSolution(roopRoster, requiredTroopCount, out explanation)`。
- 要获取替代方案所需的近战/远程技能表时，用 `GetAlternativeSolutionMeleeSkills()` / `GetAlternativeSolutionRangedSkills()`。
- 要判定强征是否成立时，用 `CheckMinorMajorCoercion(quest, mapEvent, attackerParty)`。
- 要施加强征后果时，用 `ApplyGenericMinorMajorCoercionConsequences(quest, mapEvent)`。
- 要在地图上画一个箭头时，用 `AddMapArrowFromPointToTarget(name, source, target, life, error)`。
- 要判定宣战是否导致任务失败或取消时，用 `CheckWarDeclarationAndFailOrCancelTheQuest(...)`。

### 最容易踩的坑

- `AddMapArrowFromPointToTarget` 在行为不存在时**静默返回**（第 30–33 行），没有日志、没有异常 ⇒ 箭头不出现时先查 `IMapTracksCampaignBehavior` 是否注册。
- `CheckGoldForAlternativeSolution` 判的是 **`Hero.MainHero` 的金库**（第 40 行），不是任务给予者、也不是某个队伍的。
- `CheckRosterForAlternativeSolution` 的 `minimumTier == 0` 被当作「不限等级」的哨兵（第 67/74 行）⇒ **不能用来要求 tier 0**；伤员被排除（第 69 行）。
- `ApplyGenericMinorMajorCoercionConsequences` 一次性改了**四样东西**（任务状态 / 玩家-给予者关系 −5 / 给予者权力 −10 / 玩家荣誉 −50），调用方无法只取其中一项。
- `GetAveragePriceOfItemInTheWorld` **没有 `num == 0` 保护**（第 141 行）—— 理论上没有城镇/村庄时会**除零**；每次调用都遍历**全部聚落**（O(聚落数)）。
- `CheckWarDeclarationAndFailOrCancelTheQuest` 只有当**任务给予者与玩家已处于战争**时才做任何事（第 147 行），否则整个方法**什么都不做也不报错**。

## 关键成员

- `public static void AddMapArrowFromPointToTarget(TextObject name, CampaignVec2 sourcePosition, CampaignVec2 targetPosition, float life, float error)` —— 从 `sourcePosition` 指向 `targetPosition` 画一个地图箭头。加随机抖动后沿方向前移 4，行为不存在时静默返回。`QuestHelper.cs:21`
- `public static bool CheckGoldForAlternativeSolution(int requiredGold, out TextObject explanation)` —— 检查 `Hero.MainHero` 的金库是否足够支付替代方案。不够时给出本地化解释文本并返回 `false`。`QuestHelper.cs:38`
- `public static List<SkillObject> GetAlternativeSolutionMeleeSkills()` —— 返回**新建的** `List<SkillObject>`：`DefaultSkills.OneHanded` / `TwoHanded` / `Polearm`。`QuestHelper.cs:51`
- `public static bool CheckRosterForAlternativeSolution(TroopRoster troopRoster, int requiredTroopCount, out TextObject explanation, int minimumTier = 0, bool mountedRequired = false)` —— 数「可用于替代方案」的兵：排除英雄、不可转移兵、伤员，按等级与是否骑马过滤。`QuestHelper.cs:62`
- `public static List<SkillObject> GetAlternativeSolutionRangedSkills()` —— 返回 `DefaultSkills.Bow` / `Crossbow` / `Throwing`。`QuestHelper.cs:92`
- `public static bool CheckMinorMajorCoercion(QuestBase questToCheck, MapEvent mapEvent, PartyBase attackerParty)` —— 一行判据：玩家在**村庄**里强征补给或壮丁，而这个村恰好有该任务。要求 `attackerParty == PartyBase.MainParty`。`QuestHelper.cs:103`
- `public static void ApplyGenericMinorMajorCoercionConsequences(QuestBase quest, MapEvent mapEvent)` —— 强征的后果，**一串写操作**：任务失败、玩家-给予者关系 −5、给予者权力 −10、玩家荣誉 −50。`QuestHelper.cs:109`
- `public static int GetAveragePriceOfItemInTheWorld(ItemObject item)` —— 遍历 `Settlement.All` 累加所有城镇与村庄的物品价格，返回均价。没有 `num == 0` 保护。`QuestHelper.cs:124`
- `public static void CheckWarDeclarationAndFailOrCancelTheQuest(QuestBase questToCheck, IFaction faction1, IFaction faction2, DeclareWarAction.DeclareWarDetail detail, TextObject failLog, TextObject cancelLog, bool forceCancel = false)` —— 若任务给予者与玩家已处于战争：玩家引起的战争 → 任务失败；否则 → 任务取消。`QuestHelper.cs:145`
- `public static int CalculateInitialGoldForBanditQuestParty(MobileParty banditParty)` —— 公式是「强度 × (0~20 的随机) + 50」，同一支匪帮每次调用结果都不同。`QuestHelper.cs:159`

## 真实示例

```csharp
// 检查金库是否足够支付替代方案
TextObject explanation;
bool hasGold = QuestHelper.CheckGoldForAlternativeSolution(500, out explanation);
// 检查名册是否有足够的兵
TroopRoster roster = MobileParty.MainParty.MemberRoster;
bool hasTroops = QuestHelper.CheckRosterForAlternativeSolution(roster, 5, out explanation);
Debug.Print($"hasGold={hasGold} hasTroops={hasTroops}");
```

## 参见

- ↔ [DiplomacyHelper](../DiplomacyHelper) —— `CheckWarDeclarationAndFailOrCancelTheQuest` 直接调它的 `IsWarCausedByPlayer` 判断宣战责任
- ↔ [StringHelpers](../StringHelpers) —— `ApplyGenericMinorMajorCoercionConsequences` 直接调它的 `SetCharacterProperties` 填任务给予者信息
- ↔ [Campaign](../../campaign/Campaign) —— `AddMapArrowFromPointToTarget` 通过 `Campaign.Current.GetCampaignBehavior<IMapTracksCampaignBehavior>()` 取地图轨迹行为

## 导航

- ↑ [API 参考](../../) —— 本版本 API 层入口：按任务找页的路径表
- ↑ [v1.5.3 首页](../../../) —— 19 个桶的完整缺口表与覆盖现状
- ↔ [模块地图](../../../architecture/module-map) —— 确认某个类型属于哪一桶
