---
title: "Clan"
description: "战役层的家族与阵营对象：对内管族长、声望、等级与家臣缓存，对外以 IFaction 身份参与战争与外交。"
---
# Clan

**命名空间：** `TaleWorlds.CampaignSystem`
**模块：** `TaleWorlds.CampaignSystem`
**类型：** `public sealed class Clan`
**基类：** `MBObjectBase`（实现 `IFaction`）
**源文件：** `bannerlord-1.4.7/TaleWorlds.CampaignSystem/Clan.cs`（声明见第 23 行）

## 概述
Clan 是 campaign 层的家族/阵营对象，同时实现 `IFaction`——它既是"家族"（有 `Leader`、`Renown`、`Tier`、家臣与伙伴），又是"派系"（有领地、战争状态、外交立场、旗帜颜色）。它向上归属 `Kingdom`（可选），向下持有 `Hero` 成员缓存与 `Settlement` 领地缓存，是建国、外交、雇佣兵、继承人系统的操作入口。

## 心智模型
把 Clan 想成"家族账本 + 派系外壳"：对内管 `Leader`/`Renown`/`Tier` 与 `AliveLords` 等成员缓存，对外以 `IFaction` 身份参与战争（`FactionsAtWarWith`）与外交（`GetStanceWith`）。状态由战役事件驱动：英雄换阵营会触发 `OnLordAdded`/`OnLordRemoved` 维护缓存；`AddRenown` 可能升 `Tier` 并广播 `OnClanTierChanged`。Clan 不负责：单个英雄的成长（在 `Hero`）、部队编成（在 `MobileParty`）、领地内部经济（在 `Settlement`/`Town`）。灭族只是 `DeactivateClan` 置 `IsEliminated`，对象仍留在 `Clan.All` 里——"灭亡"是标记而非销毁。

## 怎么用
拿实例的常规路径：`Clan.PlayerClan`（玩家家族）、`Clan.All`、`Clan.FindFirst(predicate)`，或从 `Kingdom` 的成员列表遍历。四条真实坑：

1. `Gold` 是 `Leader.Gold` 的转发（Clan.cs:714）——`Leader` 为 null 时返回 0；给家族加钱要先 `SetLeader` 或走 `ChangeClanInfluenceAction`，直接读 `Gold` 会误判家族没钱。
2. `Banner` 的 getter 在 clan 是王国 ruling clan 时返回 `Kingdom.Banner`（Clan.cs:730）——想拿家族自己的原始旗帜要用 `ClanOriginalBanner`（Clan.cs:748）。
3. `Influence` 的 setter 在扣减时会给 `Leader` 加技能经验（Clan.cs:529）——刷影响力消耗会意外升级 Leader 的技能，mod 里批量扣影响力前要有意识。
4. `Tier` 的 setter 会夹到 `ClanTierModel` 的 min/max（Clan.cs:817）——直接赋超界值会被静默夹取，升级判定要走 `AddRenown`。

## 关键成员
| 成员 | 用途 |
| --- | --- |
| `Name` / `InformalName` / `ChangeClanName` | 家族名族；`ChangeClanName` 同时改正式名与 informal 名（Clan.cs:296、302、1316） |
| `Culture` | 文化，决定默认部队模板、基础兵种与装备（Clan.cs:308） |
| `Kingdom` | 所属王国；setter 走 `SetKingdomInternal`，会先 `LeaveKingdomInternal` 再挂新王国（Clan.cs:401） |
| `IsMapFaction` | 无王国时 clan 自己就是地图派系（Clan.cs:569） |
| `Fiefs` / `Villages` / `Settlements` | 领地缓存（只读），由成员维护逻辑刷新（Clan.cs:438、448、458） |
| `AliveLords` / `DeadLords` / `Heroes` / `Companions` / `SupporterNotables` | 成员缓存族，由 `OnLordAdded`/`OnLordRemoved` 维护（Clan.cs:478、488、498、508、468） |
| `Influence` / `InfluenceChangeExplained` | 影响力；扣减时给 Leader 加技能经验，`InfluenceChangeExplained` 走 `ClanPoliticsModel` 给明细（Clan.cs:529、547） |
| `CurrentTotalStrength` / `UpdateCurrentStrength` | 战力缓存；`UpdateCurrentStrength` 汇总战团与城防军估算战力（Clan.cs:559、940） |
| `Leader` / `SetLeader` | 族长；`SetLeader` 会反向把 `hero.Clan` 设为 this（Clan.cs:704、1279） |
| `Gold` | 转发 `Leader.Gold`，Leader 为 null 时返回 0（Clan.cs:714） |
| `Banner` / `ClanOriginalBanner` | ruling clan 时 `Banner` 返回王国旗；原始家族旗用 `ClanOriginalBanner`（Clan.cs:730、748） |
| `Renown` / `AddRenown` / `ResetClanRenown` | 声望族；`AddRenown` 在正数时累加并可能升 Tier、广播 `OnClanTierChanged`（Clan.cs:786、1684、1699） |
| `Tier` / `RenownRequirementForNextTier` / `CompanionLimit` / `WarPartyLimit` | 等级族，全部走 `ClanTierModel`；`Tier` setter 夹到 min/max（Clan.cs:817、968、978、1003） |
| `IsAtWarWith` / `FactionsAtWarWith` / `UpdateFactionsAtWarWith` | 战争族；`UpdateFactionsAtWarWith` 重建与王国/其他 clan 的交战列表（Clan.cs:1012、958、875） |
| `GetStanceWith` | 外交立场，走 `FactionManager`（Clan.cs:1329） |
| `HomeSettlement` / `SetInitialHomeSettlement` / `ConsiderAndUpdateHomeSettlement` / `CalculateMidSettlement` | 主城族；`ConsiderAndUpdateHomeSettlement` 用 `SettlementValueModel` 选最合适主城并联动刷新英雄（Clan.cs:912、1289、1296、1747） |
| `ClanLeaveKingdom` | 退王国：先扣影响力、驱离城镇村民，再置 `Kingdom = null`（Clan.cs:1393） |
| `StartMercenaryService` / `EndMercenaryService` | 雇佣兵状态切换（Clan.cs:1422、1453） |
| `CreateClan` / `CreateSettlementRebelClan` / `CreateCompanionToLordClan` | 工厂方法：新建 clan、为起义 settlement 建 rebel clan、为伙伴封爵建 clan（Clan.cs:1041、1722、1756） |
| `GetHeirApparents` | 继承人候选打分，走 `HeirSelectionCalculationModel`（Clan.cs:1774） |
| `All` / `NonBanditFactions` / `BanditFactions` / `FindFirst` / `FindAll` | 静态查询入口（Clan.cs:1466、1476、1506、1447、1459） |
| `UpdateBannerColor` | 改旗色（背景色 + 图标色）（Clan.cs:1858） |
| `IsEliminated` | 灭族标记，由 `DeactivateClan` 置位（Clan.cs:360） |
| `Color` / `Color2` | 派系颜色对（Clan.cs:641、647） |

## 真实示例
```csharp
Clan clan = Clan.CreateClan("my_mod_clan");
clan.ChangeClanName(new TextObject("My Clan"), new TextObject("My Clan"));
clan.SetLeader(Hero.MainHero);
clan.AddRenown(120f);
clan.UpdateBannerColor(0xFF000000u, 0xFFFFFFFFu);
```

## 参见
- [Hero](../Hero)
- [Settlement](../Settlement)
- [IFaction](../IFaction)
- [Campaign](../Campaign)
- [MBObjectBase](../../campaign-ext/MBObjectBase)

## 导航
- ↑ [campaign 桶索引](../)
- ↑ [API 参考](../../)
- ↑ [v1.4.7 中文首页](../../../)
- ↔ [架构总览](../../../architecture/)
