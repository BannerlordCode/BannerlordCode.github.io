---
title: "SettlementSecurityModel"
description: "裁决定居点每日安全度增减、藏身处被清除以及附近盗匪战败对城镇安全的辐射效果，并据安全度高低决定税收增益/腐败惩罚与要人每日关系、威望变化的规则模型，由 Campaign 在运行时通过 Campaign.Current.Models.SettlementSecurityModel 解析。"
---

# SettlementSecurityModel

**命名空间：** TaleWorlds.CampaignSystem.ComponentInterfaces
**模块：** TaleWorlds.CampaignSystem
**类型：** public abstract class SettlementSecurityModel : MBGameModel<SettlementSecurityModel>
**源文件：** Bannerlord.Source/bin/TaleWorlds.CampaignSystem/TaleWorlds.CampaignSystem.ComponentInterfaces/SettlementSecurityModel.cs

## 概述

该模型集中裁决城镇“安全度（Security）”如何逐日变化：汇总藏身处骚扰、附属村庄被劫掠、被围城、繁荣度、驻军、政策、总督、议题与专长等多条因子，并给出清除藏身处/附近战斗对周围城镇安全的辐射效果；它还把安全度映射到税收（高安全加成、低安全腐败）以及要人每日的关系与威望增减。它只做纯计算，真正的 `Town.Security` 数值由城镇对象与各行为在每日结算时累加，模型本身不持有任何会被写进存档的世界状态。

## 心智模型

SettlementSecurityModel 是一个纯计算的规则扩展点：`Campaign` 在启动时通过 `GameModels` 从已注册的 `GameModel` 集合中按类型解析出 `DefaultSettlementSecurityModel` 唯一实例并缓存，运行时统一用 `Campaign.Current.Models.SettlementSecurityModel` 取得；它不参与存档序列化，也不在每个 tick 被重新构造。`Town` 的 `SecurityChange` / `SecurityChangeExplanation` 属性在界面刷新或每日结算时调用 `CalculateSecurityChange` 读取净变化率；而 `TownSecurityCampaignBehavior` 在藏身处被清除或野外战斗结束时，用 `HideoutClearedSecurityEffectRadius`、`MapEventSecurityEffectRadius` 与两个“附近战斗”方法去改写周围城镇的 `Town.Security`；`CharacterRelationCampaignBehavior` 与 `DefaultSettlementTaxModel` 则读取各阈值/百分比属性与税收联动方法。要改规则就继承并注册一个替换实现；要读结果就走模型，绝不要把模型当成直接写 `Town.Security` 的入口——数值的落地由行为与 `*Action` 完成。

## 何时使用 / 何时不要使用

- **使用**：需要查询或自定义“城镇安全度如何变化 / 安全度对税收与要人关系有什么影响”的规则时，读取 `Campaign.Current.Models.SettlementSecurityModel` 的返回值，或提供一个新的派生类覆盖各抽象成员并通过子模块注册替换默认实现。
- **不要使用**：不要用模型去“执行”安全度变化——模型只计算，真正累加到 `Town.Security` 的是 `TownSecurityCampaignBehavior`、城镇每日结算与税收/关系行为。不要亲自给 `Town.Security` 或要人关系/威望字段赋值了事；也不要把模型的阈值/百分比属性当作持久世界状态（它是无状态的纯函数）。在 `Mission` 或战场逻辑里取 `Campaign.Current.Models` 是错误的访问层。

## 依赖图

上游类型与系统：

- [Campaign](../Campaign) —— 持有 `Models` 集合，是运行时获取该模型的入口。
- [GameModels](../GameModels) —— 在构造时通过 `GetGameModel<SettlementSecurityModel>()` 解析并缓存实例。
- [Settlement](../Settlement) / [Town](../Town) / [Village](../Village) —— 调用方与计算上下文；`Town.SecurityChange` / `SecurityChangeExplanation` 直接委托本模型。
- [ExplainedNumber](../ExplainedNumber) —— `CalculateSecurityChange` 及两个税收方法的返回/回填类型，用于携带带说明项的数值。

下游与协同系统（真实调用方）：

- [TownSecurityCampaignBehavior](../TownSecurityCampaignBehavior) —— `OnHideoutDeactivated` 用 `HideoutClearedSecurityEffectRadius` 与 `HideoutClearedSecurityGain` 提升周围城镇安全；`MapEventEnded` 用 `MapEventSecurityEffectRadius`、`GetLootedNearbyPartySecurityEffect` 与 `GetNearbyBanditPartyDefeatedSecurityEffect` 改写范围内城镇安全。
- [CharacterRelationCampaignBehavior](../CharacterRelationCampaignBehavior) —— 每日 tick 依 `ThresholdForNotableRelationBonus` / `ThresholdForNotableRelationPenalty` 与 `DailyNotableRelationBonus` / `DailyNotableRelationPenalty` / `DailyNotablePowerBonus` / `DailyNotablePowerPenalty` 调整要人的关系与威望。
- [SettlementTaxModel](../SettlementTaxModel) —— `CalculateSettlementTaxDueToSecurity` 用 `ThresholdForTaxBoost`、`CalculateGoldGainDueToHighSecurity` 与 `CalculateGoldCutDueToLowSecurity` 把安全度折算进税收。
- [IssueModel](../IssueModel) —— `CalculateSecurityChange` 内部通过 `IssueModel.GetIssueEffectsOfSettlement(DefaultIssueEffects.SettlementSecurity, ...)` 累加议题效果。
- [SettlementLoyaltyModel](../SettlementLoyaltyModel) —— 同属定居点规则模型簇，常与本模型一起被派生替换，且 `CharacterRelationCampaignBehavior` 同时参考两者的阈值。
- [SettlementMilitiaModel](../SettlementMilitiaModel) —— 同属定居点规则模型簇，常一起被派生替换。
- [CampaignBehaviorBase](../CampaignBehaviorBase) —— `TownSecurityCampaignBehavior` / `CharacterRelationCampaignBehavior` 的基类，是实际驱动调用方。
- [Hero](../Hero) —— 要人（`Notables`）的关系/威望被 `CharacterRelationCampaignBehavior` 依据安全度阈值改写。

## 风险

- **跨战役重载缓存实例**：`Campaign.Current.Models.SettlementSecurityModel` 在每次新战役/读档时由 `GameModels` 重新解析。把实例缓存进静态字段或长生命周期对象，会在重载后指向旧战役的已销毁对象，调用即崩溃或读到陈旧规则。每次需要时都重新走 `Campaign.Current.Models` 获取。
- **战役开始前访问**：`Campaign.Current` 或 `Campaign.Current.Models` 在战役未启动时为 `null`。在 `MainMenu`、子模块加载早期或编辑器上下文里调用会直接空引用。
- **误判状态层**：该模型是无状态纯函数，没有需要持久化的字段，也不含 `[SaveableField]`。若你新增的派生类里加了可变字段并期望它随存档恢复，会发现这些值永远不会被序列化，从而产生隐蔽的规则漂移。
- **在 Mission/战斗层调用**：模型属于 Campaign 层，仅在战役模拟中存在；在 `Mission` 或战场逻辑里取 `Campaign.Current.Models` 是错误的访问层。
- **只替换模型不改写入路径**：派生类放宽/收紧了安全度公式或阈值，但真正把结果累加到 `Town.Security` 的是 `TownSecurityCampaignBehavior` 与城镇每日结算，真正折算税收与要人关系的是 `DefaultSettlementTaxModel` 与 `CharacterRelationCampaignBehavior`。只替换模型、却让这些调用方按旧假设处理安全度，会出现“判定变了但数值/税收/关系不随之变化”的不一致。
- **`CalculateSecurityChange` 读取全局状态**：其默认实现会遍历 `Hideout.All` 并用 `MapDistanceModel` 计算距离、读取王国政策与各 `Perk`、议题，开销不小；在热路径里高频调用（如每帧）会造成性能压力。界面刷新用 `Town.SecurityChangeExplanation` 即可，无需自行重复调用。
- **阈值语义不可混用**：`ThresholdForTaxCorruption`(50) 与 `ThresholdForHigherTaxCorruption`(0) 方向相反，前者是“高腐败起点”、后者是“高腐败更深起点”；在派生实现里若把二者颠倒，会让低安全度城镇反而免遭税收惩罚。

## 成员说明

### 安全度每日变化（核心计算）

- **`CalculateSecurityChange(Town town, bool includeDescriptions = false)`**
  - 用途：返回该城镇当日安全度净变化的详细构成（`ExplainedNumber`）。默认实现依次累加：附近受感染藏身处的惩罚（`-2`/`hideout`）、被劫掠附属村庄的惩罚（`-2`/村）、被围城的惩罚（`-3`）、繁荣度惩罚（`Max(-5, -0.0005 * Prosperity)`）、驻军强度加成（按总战力与若干专长比例）、王国政策（城镇的 Bailiffs/Serfdom/Magistrates 各 `+1`，TrialByJury `-0.2`）、总督与多项专长、建筑 `SecurityPerDay`、巡逻队加成，以及向 `SecurityDriftMedium`(50) 回归的“漂移”（`-1 * (Security-50)/15`）。
  - 副作用：无，纯计算；不修改 `Town.Security`。内部会读取 `IssueModel` 与 `MapDistanceModel` 等全局状态。
  - 调用时机：`Town.SecurityChange`（返回 `ResultNumber`）与 `Town.SecurityChangeExplanation`（传 `includeDescriptions: true`）在界面刷新与每日结算时委托此方法；任何需要安全度明细分解的 UI/逻辑都应直接复用。

### 安全度阈值与常量属性

- **`MaximumSecurityInSettlement`**（属性，`int`）
  - 用途：安全度的数值上限，默认 `100`。`CalculateGoldGainDueToHighSecurity` 在把安全度映射到税收加成时把它作为映射上界。
  - 副作用：无。调用时机：税收增益映射内部读取。

- **`SecurityDriftMedium`**（属性，`int`）
  - 用途：安全度漂移的中点，默认 `50`。`CalculateSecurityChange` 用 `(Security - 50)/15` 计算“回归中点”的漂移项——高于中点则净减、低于中点则净增。
  - 副作用：无。调用时机：`CalculateSecurityChange` 内部读取。

- **`MapEventSecurityEffectRadius`**（属性，`float`）
  - 用途：野外战斗（MapEvent）对周围城镇安全的辐射半径，默认 `50f`（距离按平方比较）。`TownSecurityCampaignBehavior.MapEventEnded` 用它筛选受影响城镇。
  - 副作用：无。调用时机：战斗结束事件处理内部读取。

- **`HideoutClearedSecurityEffectRadius`**（属性，`float`）
  - 用途：清除藏身处时对周围城镇安全的辐射半径，默认 `100f`（距离按平方比较）。`TownSecurityCampaignBehavior.OnHideoutDeactivated` 用它筛选受益城镇。
  - 副作用：无。调用时机：藏身处清除事件处理内部读取。

- **`HideoutClearedSecurityGain`**（属性，`int`）
  - 用途：清除藏身处后给范围内每个城镇直接追加的安全度，默认 `6`。`OnHideoutDeactivated` 直接 `Town.Security += 该值`。
  - 副作用：无（读取侧）；真正写 `Town.Security` 的是行为。调用时机：藏身处清除事件处理内部读取。

- **`ThresholdForTaxCorruption`**（属性，`int`）/ **`ThresholdForTaxCorruption` 的“更深”版本 `ThresholdForHigherTaxCorruption`**（属性，`int`）
  - 用途：安全度低于 `ThresholdForTaxCorruption`(50) 即开始产生腐败税收惩罚；`ThresholdForHigherTaxCorruption`(0) 是“更深腐败”的更低下界，用于 `CalculateGoldCutDueToLowSecurity` 的 `MBMath.Map(security, 0, 50, 惩罚%, 0)` 映射。
  - 副作用：无。调用时机：`DefaultSettlementTaxModel.CalculateSettlementTaxDueToSecurity` 内部读取。

- **`ThresholdForTaxBoost`**（属性，`int`）
  - 用途：安全度达到该值（默认 `75`）即开始享受税收增益。`CalculateGoldGainDueToHighSecurity` 用它作为 `MBMath.Map(security, 75, 100, 0, 5)` 的下界。
  - 副作用：无。调用时机：税收计算内部读取。

- **`SettlementTaxBoostPercentage`**（属性，`int`）/ **`SettlementTaxPenaltyPercentage`**（属性，`int`）
  - 用途：高安全度税收增益的最大百分比（默认 `5`）与低安全度腐败惩罚的最大百分比（默认 `10`）。分别作为两个税收联动方法 `MBMath.Map` 的上界。
  - 副作用：无。调用时机：两个税收联动方法内部读取。

- **`ThresholdForNotableRelationBonus`**（属性，`int`）/ **`ThresholdForNotableRelationPenalty`**（属性，`int`）
  - 用途：城镇安全度 ≥ `ThresholdForNotableRelationBonus`(75) 时，工匠/商人要人每日有概率获得关系加成；安全度 < `ThresholdForNotableRelationPenalty`(50) 时则获得关系/威望惩罚。`CharacterRelationCampaignBehavior` 用这两个阈值分支。
  - 副作用：无。调用时机：每日角色关系行为内部读取。

- **`DailyNotableRelationBonus`**（属性，`int`）/ **`DailyNotableRelationPenalty`**（属性，`int`）
  - 用途：高安全度时给要人每日的关系增量（默认 `+1`）与低安全度时的关系减量（默认 `-1`），由 `CharacterRelationCampaignBehavior` 经 `ChangeRelationAction` 应用。
  - 副作用：无（读取侧）；真正改关系的是 `ChangeRelationAction`。调用时机：每日角色关系行为内部读取。

- **`DailyNotablePowerBonus`**（属性，`int`）/ **`DailyNotablePowerPenalty`**（属性，`int`）
  - 用途：低安全度时，团伙头目（`GangLeader`）每日有概率获得威望（默认 `+1`），其它要人则失去威望（默认 `-1`），由 `CharacterRelationCampaignBehavior` 经 `Hero.AddPower` 应用。
  - 副作用：无（读取侧）；真正改威望的是 `Hero.AddPower`。调用时机：每日角色关系行为内部读取。

### 地图事件与安全度辐射

- **`GetLootedNearbyPartySecurityEffect(Town town, float sumOfAttackedPartyStrengths)`**
  - 用途：返回某次野外战斗中“附近友方/村庄方被劫掠”对城镇安全的负向效果，默认 `-1 * sumOfAttackedPartyStrengths * 0.005f`（即战败方总战力越大、安全度掉得越多）。`town` 参数在默认实现中未被使用。
  - 副作用：无，纯计算。调用时机：仅 `TownSecurityCampaignBehavior.MapEventEnded` 在战胜方含盗匪且涉及平民方时调用，并把结果加到 `town.Town.Security`。

- **`GetNearbyBanditPartyDefeatedSecurityEffect(Town town, float sumOfAttackedPartyStrengths)`**
  - 用途：返回“附近盗匪被击败”对城镇安全的增益，默认 `sumOfAttackedPartyStrengths * 0.005f`（战败方总战力越大、安全度涨得越多）。`town` 参数在默认实现中未被使用。
  - 副作用：无，纯计算。调用时机：仅 `TownSecurityCampaignBehavior.MapEventEnded` 在战败方含盗匪时调用，并把结果加到 `town.Town.Security`。

### 税收与要人关系的安全度联动

- **`CalculateGoldGainDueToHighSecurity(Town town, ref ExplainedNumber explainedNumber)`**
  - 用途：把“高安全度”折算成税收增益因子。默认实现用 `MBMath.Map(town.Security, ThresholdForTaxBoost, MaximumSecurityInSettlement, 0, SettlementTaxBoostPercentage)` 得到百分比，再以 `AddFactor(百分比 * 0.01f, ...)` 追加到税收数值上。
  - 副作用：通过 `ref` 修改传入的 `ExplainedNumber`（仅追加因子，不触碰世界状态）。调用时机：仅 `DefaultSettlementTaxModel.CalculateSettlementTaxDueToSecurity` 在安全度 ≥ `ThresholdForTaxBoost` 时调用。

- **`CalculateGoldCutDueToLowSecurity(Town town, ref ExplainedNumber explainedNumber)`**
  - 用途：把“低安全度（腐败）”折算成税收惩罚因子。默认实现用 `MBMath.Map(town.Security, ThresholdForHigherTaxCorruption, ThresholdForTaxCorruption, SettlementTaxPenaltyPercentage, 0)` 得到百分比，再以 `AddFactor(-1 * 百分比 * 0.01f, ...)` 从税收中扣除。
  - 副作用：通过 `ref` 修改传入的 `ExplainedNumber`（仅追加因子，不触碰世界状态）。调用时机：仅 `DefaultSettlementTaxModel.CalculateSettlementTaxDueToSecurity` 在安全度低于 `ThresholdForTaxCorruption` 时调用。

## 示例

读取某城镇今日的带说明安全度变化明细（界面与每日结算都走此路径）：

```csharp
Town town = Settlement.CurrentSettlement.Town;
ExplainedNumber securityChange =
    Campaign.Current.Models.SettlementSecurityModel
        .CalculateSecurityChange(town, includeDescriptions: true);
float dailyDelta = securityChange.ResultNumber;
```

把安全度折算进税收的增益/惩罚（通常在税收计算流程中由 `DefaultSettlementTaxModel` 调用）：

```csharp
ExplainedNumber tax = new ExplainedNumber(100f, includeDescriptions: false);
Campaign.Current.Models.SettlementSecurityModel
    .CalculateGoldGainDueToHighSecurity(town, ref tax);
Campaign.Current.Models.SettlementSecurityModel
    .CalculateGoldCutDueToLowSecurity(town, ref tax);
```

## 参见

- ↑ 父级：[战役 API 索引](../)
- ↔ 相关：[Campaign](../Campaign) · [GameModels](../GameModels) · [Settlement](../Settlement) · [Town](../Town) · [Village](../Village) · [SettlementLoyaltyModel](../SettlementLoyaltyModel) · [SettlementMilitiaModel](../SettlementMilitiaModel) · [SettlementTaxModel](../SettlementTaxModel) · [IssueModel](../IssueModel) · [TownSecurityCampaignBehavior](../TownSecurityCampaignBehavior) · [CharacterRelationCampaignBehavior](../CharacterRelationCampaignBehavior) · [ExplainedNumber](../ExplainedNumber) · [Hero](../Hero) · [CampaignBehaviorBase](../CampaignBehaviorBase)
