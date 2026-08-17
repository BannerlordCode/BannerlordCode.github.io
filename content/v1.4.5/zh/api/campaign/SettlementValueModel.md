---
title: "SettlementValueModel"
description: "为定居点计算针对某一派系或英雄的战略价值（用于家族首府选举、领地总值核算、封地易主议价与敌方英雄攻城估值）的规则模型，由 Campaign 在运行时通过 Campaign.Current.Models.SettlementValueModel 解析。"
---

# SettlementValueModel

**命名空间：** TaleWorlds.CampaignSystem.ComponentInterfaces
**模块：** TaleWorlds.CampaignSystem
**类型：** abstract class SettlementValueModel : MBGameModel<SettlementValueModel>
**源文件：** Bannerlord.Source/bin/TaleWorlds.CampaignSystem/TaleWorlds.CampaignSystem.ComponentInterfaces/SettlementValueModel.cs

## 概述

该模型集中裁决“一个定居点对某个派系或英雄值多少钱”：给家族挑出最合适的家族首府、核算家族全部封地的基础/阵营价值总和，并估算某定居点对敌对英雄的吸引力。它只做纯计算，不持有任何会被写进存档的世界状态；真正把首府、封地归属写回世界的是 [Clan](../Clan) 的 setter 与对应的 `*Action`。

## 心智模型

SettlementValueModel 是一个纯计算的价值评估 Model 型扩展点：`Campaign` 在启动时通过 `GameModels` 从已注册的 `GameModel` 集合中按类型解析出 `DefaultSettlementValueModel` 唯一实例并缓存，运行时统一用 `Campaign.Current.Models.SettlementValueModel` 取得；它不参与存档序列化，也不在每个 tick 被重新构造。家族 `Clan` 在 `ConsiderAndUpdateHomeSettlement` 与 `ResetPlayerHomeAndFactionMidSettlement` 中调用 `FindMostSuitableHomeSettlement` 来选举家族首府；在核算领地总值时调用 `CalculateSettlementBaseValue` 与 `CalculateSettlementValueForFaction`；[Settlement](../Settlement) 暴露 `GetSettlementValueForFaction` / `GetSettlementValueForEnemyHero` 做转发；`FiefBarterable` 在封地议价时调用 `CalculateSettlementValueForFaction` 估算易主成本。要改价值判断就继承并注册一个替换实现；要改世界状态（迁都、易主）应走 `Clan` 的 setter 与对应 Action，绝不要把模型当成写世界的入口或直接改 `Clan.HomeSettlement`。

## 何时使用 / 何时不要使用

- **使用**：需要查询或自定义“某定居点对某派系/英雄的战略价值”时，读取 `Campaign.Current.Models.SettlementValueModel` 的返回值，或提供一个新的派生类覆盖四个抽象成员并通过子模块注册替换默认实现。
- **不要使用**：不要用模型去“执行”迁都或封地易主——它只会估值，真正写 `Clan.HomeSettlement`、`Settlement.OwnerClan` 的是 `Clan` 的 setter 与 `*Action`。不要亲自给这些世界状态赋值来“让某定居点更值钱”，模型是无状态的纯函数；也不要在 `Mission`/战场逻辑里取 `Campaign.Current.Models`，那是访问了错误的层。

## 依赖图

上游类型与系统：

- [Campaign](../Campaign) —— 持有 `Models` 集合，是运行时获取该模型的入口。
- [GameModels](../GameModels) —— 在构造时通过 `GetGameModel<SettlementValueModel>()` 解析并缓存实例。
- [MapDistanceModel](../MapDistanceModel) —— `DefaultSettlementValueModel` 在首府评分与地理优势计算中反复调用 `GetDistance` 量化“到阵营中枢的距离”。

下游与协同系统（调用方）：

- [Clan](../Clan) —— `ConsiderAndUpdateHomeSettlement`/`ResetPlayerHomeAndFactionMidSettlement` 调 `FindMostSuitableHomeSettlement`；`CalculateTotalSettlementBaseValue` 调 `CalculateSettlementBaseValue`；`CalculateTotalSettlementValueForFaction` 调 `CalculateSettlementValueForFaction`。
- [Settlement](../Settlement) —— `GetSettlementValueForFaction` 转发到 `CalculateSettlementValueForFaction`，`GetSettlementValueForEnemyHero` 转发到 `CalculateSettlementValueForEnemyHero`。
- [FiefBarterable](../../campaign-ext/FiefBarterable) —— 封地议价时调用 `CalculateSettlementValueForFaction` 估算归属某派系后的成本。

共享/相关类型：

- [Town](../Town) / [Village](../Village) —— 作为 `CalculateSettlementBaseValue` 繁荣度来源，以及多倍率（城堡/城镇/村庄）分型参数。
- [Kingdom](../Kingdom) / [Hero](../Hero) —— 作为 `CalculateSettlementValueForFaction` 的 `IFaction` 与 `CalculateSettlementValueForEnemyHero` 的 `Hero` 入参。
- [SettlementMilitiaModel](../SettlementMilitiaModel) / [SettlementLoyaltyModel](../SettlementLoyaltyModel) / [SettlementSecurityModel](../SettlementSecurityModel) —— 同属定居点规则模型簇，常一起被派生替换。
- [CampaignBehaviorBase](../CampaignBehaviorBase) —— 驱动封地/家族状态变更的行为（如家族相关行为）的基类，是实际改写世界状态的调用者。

## 风险

- **跨战役重载缓存实例**：`Campaign.Current.Models.SettlementValueModel` 在每次新战役/读档时由 `GameModels` 重新解析。把实例缓存进静态字段或长生命周期对象，会在重载后指向旧战役的已销毁对象，调用即崩溃或读到陈旧规则。每次需要时都重新走 `Campaign.Current.Models` 获取。
- **战役开始前访问**：`Campaign.Current` 或 `Campaign.Current.Models` 在战役未启动时为 `null`。在 `MainMenu`、子模块加载早期或编辑器上下文里调用会直接空引用。
- **误判状态层**：该模型是无状态纯函数，没有需要持久化的字段，也不含 `[SaveableField]`。若你新增的派生类里加了可变字段并期望它随存档恢复，会发现这些值永远不会被序列化，从而产生隐蔽的规则漂移。
- **在 Mission/战斗层调用**：模型属于 Campaign 层，仅在战役模拟中存在；在 `Mission` 或战场逻辑里取 `Campaign.Current.Models` 是错误的访问层。
- **只替换模型不改写入路径**：派生类改了估值公式（例如调高某文化加分），但真正把首府/封地归属写回 `Clan.HomeSettlement`、`Settlement.OwnerClan` 的是 `Clan` 的 setter 与对应 Action。只替换模型、却让行为按旧假设处理归属，会出现“估值变了但世界没动”或议价与结果脱节。
- **`FindMostSuitableHomeSettlement` 的返回值可能被直接写入首府**：`Clan.ConsiderAndUpdateHomeSettlement` 会把它的返回值赋给 `HomeSettlement` 并级联 `Hero.UpdateHomeSettlement()`。错误地覆盖评分（例如给叛军/匪帮分支返回非预期的定居点）会悄然把整个家族与麾下英雄的“家”迁移，影响征税、驻军与对话归属。
- **距离评分依赖 `MapDistanceModel`**：`CalculateSettlementBaseValue` 与 `CalculateSettlementValueForFaction` 内部用 `MapDistanceModel.GetDistance` 与 `faction.DistanceToClosestNonAllyFortification` 计算地理优势。若你同时替换了 `MapDistanceModel` 而口径不一致，估值会成倍失真却不报错。

## 成员说明

### 家族首府选举

- **`FindMostSuitableHomeSettlement(Clan clan)`**（返回 `Settlement`）
  - 用途：为给定家族挑选最合适的“家族首府（home settlement）”。默认实现 `GetSettlementScoreForBeingHomeSettlementOfClan` 综合给出一个评分：已是本家领地（`+5120`）、同阵营（`+2560`）、定居点类型（城镇 `+1280` / 城堡 `+640` / 村庄 `+320`）、是否当前/初始首府（分别 `+4.5` / `+3.5`）、文化匹配（自身文化 `+17`、业主文化 `+12`）、到阵营中枢的距离（越近越高，上限 `20`）、总繁荣度与炉灶、邻邦好感度（`SettlementHelper.GetNeighborScoreForConsideringClan`），以及与其它家族首府冲突（`-10`）。叛军/匪帮或无领地则直接退回 `InitialHomeSettlement`。选取策略：先在本家封地中找最高分，分数低于 `5120` 再扩到王国封地，仍低于 `2560` 再扩到全图。
  - 副作用：无，纯计算；会读取 [MapDistanceModel](../MapDistanceModel) 做距离评分，并遍历 `clan.Kingdom.Clans` 检查首府冲突。
  - 调用时机：[Clan](../Clan) 的 `ConsiderAndUpdateHomeSettlement`（首府变更时）与 `ResetPlayerHomeAndFactionMidSettlement`（玩家“复位家族首府”时）调用。

### 领地价值评估

- **`CalculateSettlementBaseValue(Settlement settlement)`**（返回 `float`）
  - 用途：返回定居点的“基础价值”（不针对特定派系）。默认实现 = 城堡 `×1.25` × `settlement.GetValue()` × `GetBaseGeographicalAdvantage` × `0.33`；基础地理优势由“到阵营中枢的距离”反比得出（`1/(1+距离/平均镇间距)`）。
  - 副作用：无，纯计算；依赖 `MapDistanceModel.GetDistance` 与 `Campaign.GetAverageDistanceBetweenClosestTwoTownsWithNavigationType`。
  - 调用时机：仅 [Clan](../Clan) 的 `CalculateTotalSettlementBaseValue` 累加各封地基础值。

- **`CalculateSettlementValueForFaction(Settlement settlement, IFaction faction)`**（返回 `float`）
  - 用途：返回定居点对某派系的价值。默认实现在 `GetValue` 基础上叠加：城堡 `×1.25`、同阵营 `×1.1`、同文化 `×1.1`、`GeographicalAdvantageForFaction`（考虑与最近非盟友要塞的距离，越靠近己方前沿越高）、有港口的要塞 `×1.2`，若该派系尚无任何港口定居点则再 `×1.4`，最后 `×0.33`。
  - 副作用：无，纯计算；读取 `MapDistanceModel` 与 `faction.DistanceToClosestNonAllyFortification`。
  - 调用时机：[Settlement](../Settlement) 的 `GetSettlementValueForFaction` 转发；[Clan](../Clan) 的 `CalculateTotalSettlementValueForFaction` 累加；`FiefBarterable` 在封地议价时估算归属某派系后的成本。

- **`CalculateSettlementValueForEnemyHero(Settlement settlement, Hero hero)`**（返回 `float`）
  - 用途：返回定居点对“敌方英雄”的价值（用于攻城/敌对估值）。公式与 `ForFaction` 相同，但改用 `hero.Clan` 与 `hero.Culture` 作为同阵营/同文化判定，并读取 `hero.MapFaction` 计算地理优势；同样包含城堡倍率、有港口要塞倍率与最终 `×0.33`。
  - 副作用：无，纯计算；依赖 `MapDistanceModel`。
  - 调用时机：仅 [Settlement](../Settlement) 的 `GetSettlementValueForEnemyHero` 转发；用于判定敌方英雄对该定居点的重视程度（如夺城动机）。

## 示例

选举玩家家族的首府并估算某定居点对玩家王国的价值：

```csharp
Settlement newHome = Campaign.Current.Models.SettlementValueModel
    .FindMostSuitableHomeSettlement(Clan.PlayerClan);

float valueForKingdom = Campaign.Current.Models.SettlementValueModel
    .CalculateSettlementValueForFaction(settlement, Clan.PlayerClan.Kingdom);
```

估算敌方英雄对该定居点的估值（用于攻城动机判断）：

```csharp
float enemyValue = Campaign.Current.Models.SettlementValueModel
    .CalculateSettlementValueForEnemyHero(settlement, enemyHero);
```

## 参见

- ↑ 父级：[战役 API 索引](../)
- ↔ 相关：[Campaign](../Campaign) · [GameModels](../GameModels) · [MapDistanceModel](../MapDistanceModel) · [Clan](../Clan) · [Settlement](../Settlement) · [Town](../Town) · [Village](../Village) · [Kingdom](../Kingdom) · [Hero](../Hero) · [FiefBarterable](../../campaign-ext/FiefBarterable) · [SettlementMilitiaModel](../SettlementMilitiaModel) · [SettlementLoyaltyModel](../SettlementLoyaltyModel) · [SettlementSecurityModel](../SettlementSecurityModel)
