---
title: "FactionHelper：派系规则、验证与转换门槛"
description: "FactionHelper 是 v1.4.5 中处理派系强度与立场查询、名称验证、加入条件、驻军估算和 Clan 管理资格的战役工具。"
---
# FactionHelper

**命名空间:** `Helpers`  
**模块:** `TaleWorlds.CampaignSystem`  
**类型:** `public static class FactionHelper`  
**基类:** 无  
**源文件:** `bin/TaleWorlds.CampaignSystem/Helpers/FactionHelper.cs`

## 一句话职责

它集中提供派系级计算和 UI 资格判断，同时暴露少量明确会改变世界状态的方法，用来结束敌对行动或调整派系立场；它本身不拥有派系对象，也不代替后续 Action 执行加入、转移、任命或改名。

## 心智模型

`FactionHelper` 不是通用的派系服务，也不拥有 `Kingdom`、`Clan` 或 `Settlement`。它读取当前 Campaign 对象图和活动 Model，计算强度比例、立场、距离、驻军系数、名称、候选列表；验证方法通过布尔值和解释文本为 UI 提供判断，但不会执行加入、转移、任命或改名。

这个类同时跨过了读写边界。`FinishAllRelatedHostileActionsOfNobleToFaction` 可能把 `MapEvent` 标记为外交结束、停止队伍、清空围城营地并结束军团目标；`AdjustFactionStancesForClanJoiningKingdom` 可能调用 `MakePeaceAction.Apply` 并重置立场统计。因此这些方法是战役转换，不是计算预览，必须在拥有对应 Action 或派系变化的生命周期中调用。

## 何时使用，何时不要使用

- 需要当前派系关系、战力比例、宣战/和平候选、加权中心聚落，或派系/文化对应文本时使用查询方法。
- 把 `IsClanNameApplicable` 和 `IsKingdomNameApplicable` 作为 `InformationManager` 的文本验证回调。返回成功只表示提议名称通过本 Helper 的规则，不会给对象改名。
- 在 UI 即将发生转换前使用 `CanPlayerOfferMercenaryService`、`CanPlayerOfferVassalage` 和 `IsMainClanMemberAvailableFor*`，随后仍由拥有流程的 Action 或 CampaignBehavior 执行变化。
- 把驻军相关方法当作 Model 输入或解释值使用，不要用它们替代当前 `GarrisonModel` 或直接增兵。
- 不要把 `FinishAllRelatedHostileActions*` 当成只读清理预览；它可能改变 MapEvent、队伍移动、军团目标和围城状态。
- v1.4.5 的 `GetAllyMinorFactions` 方法体直接抛出 `NotImplementedException`，不要把它当成可用查询。

## 依赖关系与变更边界

```text
IFaction / Clan / Kingdom / Settlement / Hero
                    |
                    v
             FactionHelper
          /       |        \
         v        v         v
       查询    UI 门槛    转换辅助
         |        |          |
   Model/事件   UI       Action / MapEvent / 队伍
```

- 派系对象图：[`IFaction`](../../campaign/IFaction)、[`Clan`](../../campaign/Clan)、[`Kingdom`](../../campaign/Kingdom)、[`StanceLink`](../../campaign/StanceLink) 和 [`Army`](../../campaign/Army) 提供 Helper 读取的关系和所有权。
- Campaign Model：[`MapDistanceModel`](../../campaign/MapDistanceModel)、`DiplomacyModel`、`AgeModel`、`ClanTierModel`、`ClanFinanceModel` 和 `DelayedTeleportationModel` 提供版本相关的阈值与距离。
- UI 消费者：Clan 和 Kingdom 管理 ViewModel 使用名称验证器以及 `IsMainClanMemberAvailableFor*` 的解释文本来启用或禁用操作。
- 变更消费者：[`MakePeaceAction`](../../campaign-ext/MakePeaceAction) 和其他战役 Action 才拥有持久变化；`FactionHelper` 只协调一部分敌对行动清理。
- 队伍上下文：[`Hero`](../../campaign/Hero)、[`MobileParty`](../../campaign/MobileParty) 和 [`Settlement`](../../campaign/Settlement) 是成员调动门槛所需的真实输入。

## 公开成员按契约分组

| 分组 | 成员 | 源码确认的行为 |
|---|---|---|
| 强度与关系 | `FindPotentialStrength`、`GetEnemyKingdoms`、`GetStances`、`GetPowerRatioToEnemies`、`GetPowerRatioToTributePayedKingdoms`、`GetTotalEnemyKingdomPower`、`GetTotalTributePayedKingdomsPower`、`GetKingdomArmies` | 读取派系成员、当前战力、战争链接、立场链接、负数中立贡金或 Kingdom 军团。比例分母会加 `0.0001f`；它们是当前计算，不是存档分数。 |
| 名称验证 | `IsClanNameApplicable`、`IsKingdomNameApplicable` | 检查长度、特殊字符、首尾或重复空格和重名，并排除当前玩家 Clan 或 Kingdom。返回带合并本地化错误文本的 `Tuple<bool, string>`。 |
| 加入与领地门槛 | `CanClanBeGrantedFief`、`CanPlayerEnterFaction`、`CanPlayerOfferMercenaryService`、`CanPlayerOfferVassalage`、`GetPossibleKingdomsToDeclareWar`、`GetPossibleKingdomsToDeclarePeace` | 读取玩家、Clan、Kingdom、关系、Tier、聚落、外交和战争状态，返回权限或候选列表；不会执行宣战、和平、附庸或佣兵加入。 |
| 驻军输入 | `SettlementProsperityEffectOnGarrisonSizeConstant`、`SettlementFoodPotentialEffectOnGarrisonSizeConstant`、`OwnerClanEconomyEffectOnGarrisonSizeConstant`、`FindIdealGarrisonStrengthPerWalledCenter` | 计算繁荣度、村庄 hearth、领主金钱和派系/Clan 战力对城墙中心的系数；不会增兵，也不替代 `GarrisonModel`。 |
| 敌对行动转换 | `FinishAllRelatedHostileActionsOfNobleToFaction` 及其派系、Clan、Kingdom overload，`AdjustFactionStancesForClanJoiningKingdom` | 可能更新 MapEvent 和队伍行为、调用 `MakePeaceAction.Apply`、重置和平统计、清空围城目标并停止队伍。这些是变更路径。 |
| 名称与文化文本 | `GetTermUsedByOtherFaction`、`GetFormalNameForFactionCulture`、`GetInformalNameForFactionCulture`、`GetAdjectiveForFactionCulture`、`GetAdjectiveForFaction`、`GenerateClanNameforPlayer` | 返回本地化文本或生成玩家 Clan 名称。`GenerateClanNameforPlayer` 对 Vlandia 使用特殊结果，否则调用 `NameGenerator.Current`；不会自动赋值。 |
| 聚落几何 | `GetDistanceToClosestNonAllyFortificationOfFaction`、`GetMidSettlementOfFaction`、`ChooseHeirClanForFiefs` | 使用当前聚落和 `MapDistanceModel` 选择加权中心或合格 Clan，不改变旧 Clan。不同方法在没有结果时可能回退到 `Clan.PlayerClan` 或返回 null。 |
| 成员可用性 | `IsMainClanMemberAvailableForRecall`、`IsMainClanMemberAvailableForPartyLeaderChange`、`IsMainClanMemberAvailableForSendingSettlement`、`IsMainClanMemberAvailableForSendingSettlementAsGovernor` | 检查年龄、囚禁、战斗、海上、军团、总督、目标聚落、金钱、传送和恢复状态，并通过 `out TextObject` 返回解释。这些是门槛，不是后续 Action。 |
| 明确不支持 | `GetAllyMinorFactions` | v1.4.5 方法体抛出 `NotImplementedException`；不能因为签名存在就把它写成有效查询。 |

## 真实 C# 示例：组合当前查询与门槛

下面使用真实的战役对象获取路径，并把 Helper 结果与之后才会改变世界的 Action 分开：

```csharp
using System;
using Helpers;
using TaleWorlds.CampaignSystem;
using TaleWorlds.CampaignSystem.Settlements;
using TaleWorlds.Localization;

Kingdom playerKingdom = Clan.PlayerClan.Kingdom;
if (playerKingdom != null)
{
    float enemyPowerRatio = FactionHelper.GetPowerRatioToEnemies(playerKingdom);
    Settlement center = FactionHelper.GetMidSettlementOfFaction(playerKingdom);
}

Tuple<bool, string> proposedName = FactionHelper.IsClanNameApplicable("House Corvand");
if (!proposedName.Item1)
{
    TextObject validationText = new TextObject(proposedName.Item2);
}

Hero candidate = Hero.OneToOneConversationHero;
Settlement target = Settlement.CurrentSettlement;
if (candidate != null && target != null)
{
    TextObject explanation;
    bool canSend = FactionHelper.IsMainClanMemberAvailableForSendingSettlement(candidate, target, out explanation);
}
```

`Clan.PlayerClan`、`Hero.OneToOneConversationHero` 和 `Settlement.CurrentSettlement` 都是实时战役获取路径。`proposedName` 与 `canSend` 只是判断结果；成功不会自动调用改名或英雄转移 Action。

## 真实调用路径与变更示例

StoryMode 和战役 UI 会把 `FactionHelper.IsClanNameApplicable` 或 `IsKingdomNameApplicable` 直接作为 `InformationManager.ShowTextInquiry` 的验证委托。用户编辑文本时这个回调可能被反复调用，所以它必须保持验证职责；确认回调才拥有真正的名称赋值。

Clan 管理 ViewModel 使用 `IsMainClanMemberAvailableForPartyLeaderChange`、`IsMainClanMemberAvailableForSendingSettlement` 和 `IsMainClanMemberAvailableForSendingSettlementAsGovernor` 生成禁用原因。这些方法会检查战斗、围城、海上、总督、囚犯和延迟传送状态，但不会绕过后续 Action 或任命流程。

例外是敌对行动族。Clan 加入 Kingdom 时，`AdjustFactionStancesForClanJoiningKingdom` 可能对非恒久战争立场调用 `MakePeaceAction.Apply`，随后在两个方向调用 `FinishAllRelatedHostileActionsOfFactionToFaction`。因此不能把它用于 UI 刷新时的无副作用预览，也不能重复调用。

## 风险与存档边界

- 很多方法假定 `Campaign.Current` 已存在。`CanPlayerEnterFaction` 还要求 `Hero.OneToOneConversationHero`、当前聚落和派系 Model 有效；菜单启动或拆除阶段调用可能失败。
- 名称验证收到 null 字符串时会先触发 failed assertion，再把值当作空字符串。应在 UI 边界验证输入，不要把返回文本当成持久化错误记录。
- `GetEnemyKingdoms` 返回对当前战争列表的 LINQ 投影，应在 Campaign 有效期间枚举；`GetStances` 会遍历 `Kingdom.All` 和 `Clan.All`，并跳过输入派系本身。
- `GetDistanceToClosestNonAllyFortificationOfFaction` 在没有派系中心聚落或没有更近候选时返回 `float.MaxValue`。拿它计算旅行时间或普通距离比较前必须处理这个哨兵值。
- `GetMidSettlementOfFaction` 使用加权距离启发式：村庄距离乘 `0.1`，城堡距离乘 `0.25`。它不是所有权或 AI Model 选出的唯一聚落。
- 可用性方法返回的是调用时门槛和解释；战斗、围城、Action 或 tick 后可能立即过期，真正应用变化前必须重新检查。
- 敌对行动方法会改变 MapEvent 和队伍状态，甚至派发 Action。不要从渲染循环、重复 tooltip 刷新或推测计算中调用。
- `GetAllyMinorFactions` 是明确不支持且会抛异常的路径。不要捕获后伪装成空盟友列表，否则会隐藏源码层面的不支持。
- Helper 不定义存档 schema。不要把 `TextObject` 解释、枚举器、派系快照、缓存聚落引用作为跨存档句柄保存。

## 版本注记

本页依据 v1.4.5 的 `FactionHelper.cs` 及其 CampaignSystem、StoryMode、Clan 管理和日志调用点。`GetAllyMinorFactions` 的异常、比例分母 `0.0001f`、驻军公式和基于 Model 的可用性门槛都是版本相关细节，面向其他版本时应重新核对。

## 导航

- [↑ API 系统索引](../)
- [↔ PartyBaseHelper](../PartyBaseHelper)
- [↔ SettlementHelper](../SettlementHelper)
- [相关：IFaction](../../campaign/IFaction)
- [相关：Clan](../../campaign/Clan)
- [相关：Kingdom](../../campaign/Kingdom)
- [相关：StanceLink](../../campaign/StanceLink)
- [相关：Hero](../../campaign/Hero)
- [相关：Settlement](../../campaign/Settlement)
- [相关：MakePeaceAction](../../campaign-ext/MakePeaceAction)
- [相关：MapDistanceModel](../../campaign/MapDistanceModel)
