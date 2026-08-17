---
title: "SettlementMilitiaModel"
description: "定义定居点民兵增长、兵种比例与攻城补充规则的计算模型，由 Campaign 在运行时通过 Campaign.Current.Models.SettlementMilitiaModel 解析。"
---

# SettlementMilitiaModel

**命名空间：** TaleWorlds.CampaignSystem.ComponentInterfaces
**模块：** TaleWorlds.CampaignSystem
**类型：** abstract class SettlementMilitiaModel : MBGameModel<SettlementMilitiaModel>
**源文件：** Bannerlord.Source/bin/TaleWorlds.CampaignSystem/TaleWorlds.CampaignSystem.ComponentInterfaces/SettlementMilitiaModel.cs

## 概述

该模型负责推导每个定居点每日的民兵增减速率、攻城结束后的民兵补充量、老兵民兵的生成概率，以及新民兵中近战与远程兵种的比例。它只做纯计算，不持有任何会被写进存档的世界状态，真正的民兵数值由定居点对象与领地行为读写。

## 心智模型

SettlementMilitiaModel 是一个纯计算的规则扩展点：Campaign 在启动时通过 `GameModels` 从已注册的 `GameModel` 集合中按类型解析出唯一实例并持有，运行时统一用 `Campaign.Current.Models.SettlementMilitiaModel` 取得，它既不参与存档序列化，也不会在每个 tick 被重新构造。领地行为 `MilitiasCampaignBehavior` 在守城或攻城胜利后调用 `MilitiaToSpawnAfterSiege` 把结果累加进 `Settlement.Militia`；而 `Settlement`、`Town`、`Village` 的 `MilitiaChange` 属性则在每日结算或界面刷新时调用 `CalculateMilitiaChange` 来读取净变化率。要改规则就继承并注册一个替换实现，要读结果就走模型，绝不要直接改模型字段。

## 何时使用 / 何时不要使用

- **使用**：需要查询或自定义“民兵如何增长/补充”的规则时，读取 `Campaign.Current.Models.SettlementMilitiaModel` 的返回值，或提供一个新的派生类覆盖四个抽象方法并通过子模块注册替换默认实现。
- **不要使用**：不要直接给 `Settlement.Militia` 以外的模型字段赋值来“让某个定居点多出民兵”——模型是无状态的纯函数，真正的状态在 [Settlement](../Settlement) 上。要改变世界状态应走领地行为（如 `MilitiasCampaignBehavior`）或对应的 `*Action`，而不是篡改模型。

## 依赖图

上游类型与系统：

- [Campaign](../Campaign) —— 持有 `Models` 集合，是运行时获取该模型的入口。
- [GameModels](../GameModels) —— 在构造时通过 `GetGameModel<SettlementMilitiaModel>()` 解析并缓存实例。
- [Settlement](../Settlement) / [Town](../Town) / [Village](../Village) —— 调用方，依赖 `CalculateMilitiaChange` 暴露 `MilitiaChange` 属性。

下游与协同系统：

- [SettlementLoyaltyModel](../SettlementLoyaltyModel) —— `DefaultSettlementMilitiaModel` 在叛变加成计算时读取其阈值与百分比常量。
- [SettlementSecurityModel](../SettlementSecurityModel) —— 同属定居点规则模型簇，常一起被派生替换。
- [CampaignBehaviorBase](../CampaignBehaviorBase) —— `MilitiasCampaignBehavior` 是其具体子类，是实际修改民兵数量的调用者。
- `ExplainedNumber`（`TaleWorlds.Core`）—— `CalculateMilitiaChange` 与 `CalculateVeteranMilitiaSpawnChance` 的返回类型，用于携带带说明项的数值。

## 风险

- **跨战役重载缓存实例**：`Campaign.Current.Models.SettlementMilitiaModel` 在每次新战役/读档时由 `GameModels` 重新解析。把实例缓存进静态字段或长生命周期对象，会在重载后指向旧战役的已销毁对象，调用即崩溃或读到陈旧规则。每次需要时都重新走 `Campaign.Current.Models` 获取。
- **战役开始前访问**：`Campaign.Current` 或 `Campaign.Current.Models` 在战役未启动时为 `null`。在 `MainMenu`、子模块加载早期或编辑器上下文里调用会直接空引用。
- **误判状态层**：该模型是无状态纯函数，没有需要持久化的字段，也不含 `[SaveableField]`。若你新增的派生类里加了可变字段并期望它随存档恢复，会发现这些值永远不会被序列化，从而产生隐蔽的规则漂移。
- **在 Mission/战斗层调用**：模型属于 Campaign 层，仅在战役模拟中存在；在 `Mission` 或战场逻辑里取 `Campaign.Current.Models` 是错误的访问层。
- **只替换模型不改写入路径**：派生类改变了增长公式，但真正累加民兵的是 `MilitiasCampaignBehavior`（攻城补充）和定居点每日结算（增长）。只替换模型、却让行为按旧假设处理 `Settlement.Militia`，会出现数值与预测不一致。

## 成员说明

### 民兵增减计算

- **`CalculateMilitiaChange(Settlement settlement, bool includeDescriptions = false)`**
  - 用途：返回定居点每日民兵净变化的详细构成（`ExplainedNumber`），含基础值、随现有民兵衰减的“退伍”、炉灶数、繁荣度、叛变加成，以及建筑/政策/专长/议题效果。
  - 副作用：无，纯计算。
  - 调用时机：`Settlement`/`Town`/`Village` 的 `MilitiaChange` 属性与 `TownManagementVM` 界面在每次刷新时读取；传入 `includeDescriptions: true` 可得到带说明项的分解。

### 老兵与兵种比例

- **`CalculateVeteranMilitiaSpawnChance(Settlement settlement)`**
  - 用途：返回该定居点生成老兵民兵的概率（`ExplainedNumber`，多为基础 0~1 的因子），依据总督专长（如 `CitizenMilitia`、`Drills`、`SevenVeterans`）、巴丹文化特性与建筑效果累加。
  - 副作用：无，纯计算。
  - 调用时机：`Settlement` 在生成/升级民兵兵种时调用，决定新兵是否为老兵。

- **`CalculateMilitiaSpawnRate(Settlement settlement, out float meleeTroopRate, out float rangedTroopRate)`**
  - 用途：通过 `out` 参数回填新民兵中近战与远程兵种的比例；默认实现为 `0.5f` / `0.5f`。
  - 副作用：仅写入两个 `out` 参数，不改动任何世界状态。
  - 调用时机：`Settlement` 实际生成民兵兵种组成时调用。

### 攻城后补充

- **`MilitiaToSpawnAfterSiege(Town town)`**
  - 用途：返回攻城结束后立即补充到定居点的民兵数量（默认实现为 `2 * (45 + RandomInt(10))`）。
  - 副作用：无，纯计算；真正的累加由调用方完成。
  - 调用时机：仅由 `MilitiasCampaignBehavior.OnAfterSiegeCompleted` 在守城或攻城胜利时调用，并把结果加到 `siegeSettlement.Militia`。

## 示例

读取某定居点的每日民兵净变化率：

```csharp
Settlement settlement = Settlement.All.GetRandomElement();
ExplainedNumber change = Campaign.Current.Models.SettlementMilitiaModel
    .CalculateMilitiaChange(settlement, includeDescriptions: false);
float dailyDelta = change.ResultNumber;
```

获取兵种比例与老兵生成概率：

```csharp
float meleeRate, rangedRate;
Campaign.Current.Models.SettlementMilitiaModel
    .CalculateMilitiaSpawnRate(settlement, out meleeRate, out rangedRate);
ExplainedNumber veteranChance =
    Campaign.Current.Models.SettlementMilitiaModel.CalculateVeteranMilitiaSpawnChance(settlement);
```

## 参见

- ↑ 父级：[战役 API 索引](../)
- ↔ 相关：[Campaign](../Campaign) · [GameModels](../GameModels) · [Settlement](../Settlement) · [Town](../Town) · [Village](../Village) · [SettlementLoyaltyModel](../SettlementLoyaltyModel) · [SettlementSecurityModel](../SettlementSecurityModel) · [CampaignBehaviorBase](../CampaignBehaviorBase)
