# FactionHelper

**命名空间：** `Helpers`
**Type:** `public static class FactionHelper`
**Source:** `TaleWorlds.CampaignSystem/Helpers/FactionHelper.cs`

## 概述

FactionHelper 是派系（`IFaction`/`Kingdom`/`Clan`）级别的静态工具集，解决「如何把一个派系的战略状态翻译成可比较的数值或可执行的外交动作」这一问题。它覆盖五类工作：战力评估（潜在战力、敌战力比、贡金战力比）、驻军规模（繁荣度/食物/经济效应、理想驻军强度）、外交动作（结束敌对行为、调整立场、宣战/和平列表）、命名与文本（氏族名/王国名校验、文化名称、派系间称谓）、以及玩家加入条件（雇佣兵/附庸检查、氏族成员调度检查）。

## 心智模型

把 FactionHelper 想成「派系 → 战略数值与外交动作」的决策层。它把派系的抽象状态（氏族 tier、金币、关系、驻军、立场）翻译成可比较的数值（战力比、驻军常数）和可执行的动作（结束敌对行为、调整立场）。它的核心模式是：先读派系的属性（是否王国、氏族列表、领袖金币、当前立场），再把它翻译成 UI 能显示的数值或外交系统能执行的动作。与 `DiplomacyHelper` 的分工是：DiplomacyHelper 管关系与谈判的具体流程，FactionHelper 管战略层面的数值计算与批量动作。

## 怎么用

### 怎么拿到它

静态类，直接 `FactionHelper.方法名(...)` 调用。所有方法都要求调用方自己持有 `IFaction`/`Kingdom`/`Clan` 实例（通常来自 `Kingdom.All`、`Clan.All` 或 `hero.MapFaction`）。

### 典型用法

- 计算某王国每个城墙中心的理想驻军强度时，用 `FindIdealGarrisonStrengthPerWalledCenter`，它综合繁荣度、食物潜力与领主经济效应。
- 检查玩家能否向某王国提出附庸时，用 `CanPlayerOfferVassalage`，它通过 out 参数返回玩家战争列表与目标派系战争列表。
- 两派系开战时批量结束所有敌对行为时，用 `FinishAllRelatedHostileActions` 的 Kingdom 重载，它遍历双方所有氏族。
- 判断某派系是否是掠劫者时，用 `IsLooterFaction`，它排除 deserters 与有定居点的派系。

### 最容易踩的坑

- `GetAllyMinorFactions`（`FactionHelper.cs:610`）直接抛 `NotImplementedException`，是未实现的占位方法，调用即崩。
- `CanPlayerEnterFaction` 的阈值随 `asVassal` 变化：非附庸 >25、附庸 >150，且附庸模式额外计入定居点价值与金币。
- `CanClanBeGrantedFief` 只排除玩家氏族与雇佣兵氏族，不检查其他条件（如派系关系）。
- `IsLooterFaction` 排除 `deserters`，所以逃兵派系不算掠劫者，即使它是匪徒派系。
- `FinishAllRelatedHostileActionsOfNobleToFaction` 会改写地图事件状态与队伍移动模式，属于有副作用的批量操作。

## 关键成员

- **FindPotentialStrength**（`FactionHelper.cs:22`）— 计算派系的潜在战力，王国按氏族 tier 求和（雇佣兵氏族打折），乘以 2 倍。
- **GetEnemyKingdoms**（`FactionHelper.cs:48`）— 返回与派系交战的所有王国列表。
- **GetStances**（`FactionHelper.cs:54`）— 返回派系与所有其他王国/氏族的立场链接列表。
- **GetPowerRatioToEnemies**（`FactionHelper.cs:83`）— 返回王国当前总战力与敌王国总战力的比值。
- **IsClanNameApplicable**（`FactionHelper.cs:120`）— 校验氏族名是否可用，返回 (是否适用, 原因) 元组。
- **IsKingdomNameApplicable**（`FactionHelper.cs:147`）— 校验王国名是否可用，返回 (是否适用, 原因) 元组。
- **GetPowerRatioToTributePayedKingdoms**（`FactionHelper.cs:174`）— 返回王国当前总战力与贡金王国总战力的比值。
- **CanClanBeGrantedFief**（`FactionHelper.cs:182`）— 判断氏族能否被赐予领地（非玩家氏族且非雇佣兵）。
- **CanPlayerEnterFaction**（`FactionHelper.cs:188`）— 判断玩家能否加入派系，按声望/定居点价值/金币/关系综合评分。
- **GetTotalEnemyKingdomPower**（`FactionHelper.cs:201`）— 返回所有敌王国的当前总战力之和。
- **GetTotalTributePayedKingdomsPower**（`FactionHelper.cs:212`）— 返回所有贡金王国的战力之和（按贡金比例折算）。
- **GetKingdomArmies**（`FactionHelper.cs:232`）— 返回王国的军队列表，非王国派系返回空列表。
- **SettlementProsperityEffectOnGarrisonSizeConstant**（`FactionHelper.cs:242`）— 返回城镇繁荣度对驻军规模的效应常数（2.2 倍饱和曲线）。
- **SettlementFoodPotentialEffectOnGarrisonSizeConstant**（`FactionHelper.cs:248`）— 返回定居点食物潜力对驻军规模的效应常数（按村庄 hearth 计算）。
- **OwnerClanEconomyEffectOnGarrisonSizeConstant**（`FactionHelper.cs:262`）— 返回领主氏族经济对驻军规模的效应常数（按领袖金币分档）。
- **FindIdealGarrisonStrengthPerWalledCenter**（`FactionHelper.cs:284`）— 计算王国每个城墙中心的理想驻军强度，综合繁荣度/食物/经济效应。
- **FinishAllRelatedHostileActionsOfNobleToFaction**（`FactionHelper.cs:322`）— 结束某贵族对某派系的所有敌对行为（地图事件/围城/袭击/交战）。
- **FinishAllRelatedHostileActionsOfFactionToFaction**（`FactionHelper.cs:384`）— 结束派系 1 所有领主对派系 2 的敌对行为。
- **FinishAllRelatedHostileActions**（`FactionHelper.cs:393`）— 氏族对氏族版本，双向结束双方所有领主的敌对行为。
- **FinishAllRelatedHostileActions**（`FactionHelper.cs:406`）— 王国对王国版本，遍历双方所有氏族。
- **AdjustFactionStancesForClanJoiningKingdom**（`FactionHelper.cs:419`）— 氏族加入王国时调整其所有立场（非恒定战争则议和或重置和平统计）。
- **GetTermUsedByOtherFaction**（`FactionHelper.cs:444`）— 返回某派系对另一派系的称谓文本（中性/贬义，按文化同异分支）。
- **GetFormalNameForFactionCulture**（`FactionHelper.cs:476`）— 返回文化对应的派系正式名称文本。
- **GetInformalNameForFactionCulture**（`FactionHelper.cs:482`）— 返回文化对应的派系非正式名称文本。
- **GetAdjectiveForFactionCulture**（`FactionHelper.cs:488`）— 返回文化对应的派系形容词文本。
- **GenerateClanNameforPlayer**（`FactionHelper.cs:494`）— 为玩家生成氏族名，vlandia 文化用固定名，其他用命名生成器。
- **GetDistanceToClosestNonAllyFortificationOfFaction**（`FactionHelper.cs:510`）— 返回派系中心到最近非盟友要塞的距离。
- **GetMidSettlementOfFaction**（`FactionHelper.cs:532`）— 返回派系的几何中心定居点（按距离和最小化），无定居点时回退到家园。
- **GetPossibleKingdomsToDeclareWar**（`FactionHelper.cs:582`）— 返回王国可宣战的所有王国列表（排除已交战）。
- **GetPossibleKingdomsToDeclarePeace**（`FactionHelper.cs:596`）— 返回王国可议和的所有王国列表（仅已交战）。
- **GetAllyMinorFactions**（`FactionHelper.cs:610`）— 未实现，直接抛 NotImplementedException。
- **ChooseHeirClanForFiefs**（`FactionHelper.cs:616`）— 为领地选择继承氏族（原氏族灭绝时）。
- **CanPlayerOfferMercenaryService**（`FactionHelper.cs:743`）— 检查玩家能否向王国提出雇佣兵服务，通过 out 参数返回战争列表。
- **CanPlayerOfferVassalage**（`FactionHelper.cs:766`）— 检查玩家能否向王国提出附庸，通过 out 参数返回战争列表。
- **IsMainClanMemberAvailableForRecall**（`FactionHelper.cs:789`）— 检查氏族成员能否被召回主队，失败时输出原因。
- **IsMainClanMemberAvailableForPartyLeaderChange**（`FactionHelper.cs:822`）— 检查氏族成员能否被调任为队伍领袖，失败时输出原因。
- **IsMainClanMemberAvailableForSendingSettlement**（`FactionHelper.cs:890`）— 检查氏族成员能否被派往定居点，失败时输出原因。
- **IsMainClanMemberAvailableForSendingSettlementAsGovernor**（`FactionHelper.cs:927`）— 检查氏族成员能否被任命为总督，失败时输出原因。
- **IsLooterFaction**（`FactionHelper.cs:978`）— 判断派系是否是掠劫者（匪徒且无定居点且无航海能力，排除 deserters）。

## 真实示例

```csharp
// 计算某王国每个城墙中心的理想驻军强度
float ideal = FactionHelper.FindIdealGarrisonStrengthPerWalledCenter(kingdom);
Debug.Print($"理想驻军强度: {ideal}");

// 检查玩家能否向某王国提出附庸
List<IFaction> playerWars;
List<IFaction> warsOfFaction;
bool canOffer = FactionHelper.CanPlayerOfferVassalage(kingdom, out playerWars, out warsOfFaction);
```

## 参见

- ↔ [DiplomacyHelper](../DiplomacyHelper) — 派系关系与谈判工具，FactionHelper 的战略数值与 DiplomacyHelper 的谈判流程互补
- ↔ [GameModels](../../campaign/GameModels) — 强类型属性容器，驻军/外交模型的实际读取入口
- ↔ [QuestHelper](../QuestHelper) — 派系任务工具，领地继承与派系任务相关

## 导航

- ↑ [API 参考](../../) —— 本版本 API 层入口：按任务找页的路径表
- ↑ [v1.5.3 首页](../../../) —— 19 个桶的完整缺口表与覆盖现状
- ↔ [模块地图](../../../architecture/module-map) —— 确认某个类型属于哪一桶
