---
title: "CrimeModel"
description: "裁决玩家在各派系（Clan/Kingdom）之间犯罪评级上限、分级阈值与赎罪成本的规则扩展点，由 Campaign 在运行时通过 Campaign.Current.Models.CrimeModel 解析，被定罪行为、赎罪 Action 与定居点准入模型等调用。"
---

# CrimeModel

**命名空间：** TaleWorlds.CampaignSystem.ComponentInterfaces
**模块：** TaleWorlds.CampaignSystem
**类型：** public abstract class CrimeModel : MBGameModel<CrimeModel>
**源文件：** Bannerlord.Source/bin/TaleWorlds.CampaignSystem/TaleWorlds.CampaignSystem.ComponentInterfaces/CrimeModel.cs

## 概述

该模型集中裁决“玩家在某一派系身上的犯罪评级（crime rating）意味着什么”：评级的硬上限、可被宣战的阈值、缴付赎罪后该降到多少、玩家当前犯罪属于轻/中/重哪一级，以及用金币或影响力清偿所需代价与每日自然衰减。它只做纯判定与计算，真正的评级增减由 [ChangeCrimeRatingAction](../../campaign-ext/ChangeCrimeRatingAction) 写入 `IFaction.MainHeroCrimeRating`，赎罪动作由 [PayForCrimeAction](../../campaign-ext/PayForCrimeAction) 完成。

## 心智模型

CrimeModel 是一个专门裁决玩家“犯罪评级”的规则扩展点：Campaign 在启动时通过 `GameModels` 从已注册的 `GameModel` 集合中按类型解析出唯一实例（`DefaultCrimeModel`）并缓存，运行时统一用 `Campaign.Current.Models.CrimeModel` 取得；它不参与存档序列化，也不在每个 tick 被重新构造。定罪行为 `CrimeCampaignBehavior` 在玩家进入定居点时读取 `IsPlayerCrimeRatingModerate` / `IsPlayerCrimeRatingSevere` 决定守卫是否接管；而 `ChangeCrimeRatingAction` 用 `GetMaxCrimeRating` 把评级钳制在 0~100 区间，超过 `DeclareWarCrimeRatingThreshold` 时还会触发“可被宣战”的提示；玩家真正交钱消灾由 `PayForCrimeAction` 驱动，它用 `GetCrimeRatingAfterPunishment`、`GetMinAcceptableCrimeRating` 与 `GetCost` 计算扣减与花费。要改犯罪规则就继承并注册替换实现；要“执行”评级增减必须走对应的 Action，绝不要把模型当成写世界的入口或直接改 `IFaction.MainHeroCrimeRating`。

## 何时使用 / 何时不要使用

- **使用**：需要查询或自定义“玩家在某派系的犯罪评级处于哪一级 / 赎罪要花多少”的规则时，读取 `Campaign.Current.Models.CrimeModel` 的返回值，或提供一个新的派生类覆盖其抽象成员并通过子模块注册替换默认实现。
- **不要使用**：不要用模型去“增加或清零”犯罪评级——它只会判定与计算，真正改写 `IFaction.MainHeroCrimeRating` 的是 [ChangeCrimeRatingAction](../../campaign-ext/ChangeCrimeRatingAction)，真正执行赎罪扣减的是 [PayForCrimeAction](../../campaign-ext/PayForCrimeAction)。不要亲自给 `MainHeroCrimeRating` 赋值了事；也不要把模型返回值当作持久世界状态（它是无状态的纯函数）。

## 依赖图

上游类型与系统：

- [Campaign](../Campaign) —— 持有 `Models` 集合，是运行时获取该模型的入口。
- [GameModels](../GameModels) —— 在构造时通过 `GetGameModel<CrimeModel>()` 解析并缓存实例。
- [AlleyModel](../AlleyModel) —— `GetDailyCrimeRatingChange` 内读取 `GetDailyCrimeRatingOfAlley` 累加玩家拥有暗巷城镇的犯罪评级增益。
- [DefaultCrimeModel](../DefaultCrimeModel) —— 默认具体实现，所有抽象成员的真实算法都在其中。

下游与协同系统（调用方）：

- [Clan](../Clan) —— 暴露 `DailyCrimeRatingChange` / `DailyCrimeRatingChangeExplained` 属性，内部调用 `GetDailyCrimeRatingChange(this)`。
- [Kingdom](../Kingdom) —— 同上，暴露每日犯罪评级衰减属性。
- [CrimeCampaignBehavior](../CrimeCampaignBehavior) —— 玩家进入定居点时调用 `DeclareWarCrimeRatingThreshold`、`IsPlayerCrimeRatingModerate`、`IsPlayerCrimeRatingSevere`。
- [PlayerCaptivityCampaignBehavior](../PlayerCaptivityCampaignBehavior) —— 判定玩家被俘时能否被己方势力释放，读取 `IsPlayerCrimeRatingModerate` / `IsPlayerCrimeRatingSevere`。
- [ChangeCrimeRatingAction](../../campaign-ext/ChangeCrimeRatingAction) —— 真正改写 `MainHeroCrimeRating`，使用 `GetMaxCrimeRating` 钳制并据 `DeclareWarCrimeRatingThreshold` 触发宣战提示。
- [PayForCrimeAction](../../campaign-ext/PayForCrimeAction) —— 执行赎罪，使用 `GetCrimeRatingAfterPunishment`、`GetMinAcceptableCrimeRating`、`GetCost`。
- [DefaultSettlementAccessModel](../DefaultSettlementAccessModel) —— 判定玩家能否进入定居点，调用 `DoesPlayerHaveAnyCrimeRating`、`IsPlayerCrimeRatingMild/Moderate/Severe`。
- [DefaultBribeCalculationModel](../DefaultBribeCalculationModel) —— 计算贿赂金额时复用 `GetCost(faction, CrimeModel.PaymentMethod.Gold, 0f)`。
- [ExplainedNumber](../ExplainedNumber) —— `GetDailyCrimeRatingChange` 的返回类型，用于携带带说明项的衰减数值。

> 注：源码中 `GuardsCampaignBehavior` 与 `MissionCrimeHandler` 也大量调用 `IsPlayerCrimeRatingMild/Moderate/Severe`（前者决定守卫是否攻击玩家，后者在战场中据此让守卫追杀），但二者目前尚无独立文档页，故此处仅作调用点说明、不另列链接。

共享/相关类型：

- [IFaction](../IFaction) —— 几乎所有成员的首个参数类型，代表“带有 `MainHeroCrimeRating` 的派系”。
- [Hero](../Hero) / [Settlement](../Settlement) —— 犯罪评级的归属与判定上下文（如 `Settlement.CurrentSettlement.MapFaction`、`Hero.MainHero`）。
- [CampaignBehaviorBase](../CampaignBehaviorBase) —— 上述定罪/俘虏等行为均继承自它，是实际驱动调用的基类。

## 风险

- **跨战役重载缓存实例**：`Campaign.Current.Models.CrimeModel` 在每次新战役/读档时由 `GameModels` 重新解析。把实例缓存进静态字段或长生命周期对象，会在重载后指向旧战役的已销毁对象，调用即崩溃或读到陈旧规则。每次需要时都重新走 `Campaign.Current.Models` 获取。
- **战役开始前访问**：`Campaign.Current` 或 `Campaign.Current.Models` 在战役未启动时为 `null`。在 `MainMenu`、子模块加载早期或编辑器上下文里调用会直接空引用。
- **误判状态层**：该模型是无状态纯函数，没有需要持久化的字段，也不含 `[SaveableField]`。若你新增的派生类里加了可变字段并期望它随存档恢复，会发现这些值永远不会被序列化，从而产生隐蔽的规则漂移。
- **`GetCost` 的支付方式陷阱**：默认实现仅对 `PaymentMethod.Gold` 与 `PaymentMethod.Influence` 返回非负代价，`Punishment` / `Execution` / `ExMachina` 一律返回 `0f`。若你传入这些“非金钱”方式却期望得到费用，会得到 0，导致赎罪/贿赂逻辑误判为“免费”。
- **阈值魔法数耦合**：默认实现用常量 `30f`（中度门槛）与 `65f`（重度门槛）划分轻/中/重三级，而 `GetMinAcceptableCrimeRating` 又返回 `20f`/`30f`。若你覆盖其中某个阈值却不联动其余，调用方按布尔 `IsPlayerCrimeRatingXxx` 做分支时会出现“评级卡在边界”的不一致。
- **只替换模型不改写入路径**：派生类调整了上限或赎罪残留值，但真正把 `MainHeroCrimeRating` 钳制与扣减的仍是 `ChangeCrimeRatingAction` 与 `PayForCrimeAction`，读取每日衰减的是 `Clan`/`Kingdom` 属性。只替换模型、却让 Action 按旧假设处理数值，会出现“判定变宽松却支付金额不变”或衰减与界面脱节。
- **`GetDailyCrimeRatingChange` 依赖外部模型与专长**：其衰减项读取 `AlleyModel.GetDailyCrimeRatingOfAlley` 并加 `Roguery.WhiteLies` 专长加成。若你替换了 `AlleyModel` 或改动了相关专长，犯罪评级的每日自然衰减也会随之变化，需一并验证。

## 成员说明

### 犯罪评级阈值与范围

- **`DeclareWarCrimeRatingThreshold`**（属性，返回 `float`）
  - 用途：玩家在某派系身上的犯罪评级超过此值时，该派系可对其宣战。默认实现返回 `60f`；[DiplomacyHelper](../) 与 `CrimeCampaignBehavior` 据它判断“可宣战”提示。
  - 副作用：无，纯查询。
  - 调用时机：`DiplomacyHelper` 判断敌意、`CrimeCampaignBehavior` 在定居点判定是否给出“可被宣战”警告时读取。

- **`GetMaxCrimeRating()`**
  - 用途：返回犯罪评级的硬上限。默认实现返回 `100f`；[ChangeCrimeRatingAction](../../campaign-ext/ChangeCrimeRatingAction) 用 `MBMath.ClampFloat(..., 0f, GetMaxCrimeRating())` 把评级钳制在 0~100。
  - 副作用：无。调用时机：每次调用 `ChangeCrimeRatingAction.Apply` 改评级时。

- **`GetMinAcceptableCrimeRating(IFaction faction)`**
  - 用途：支付赎罪时玩家至少要把评级清到多低。默认实现：非己方派系返回 `30f`，己方派系返回 `20f`。[PayForCrimeAction](../../campaign-ext/PayForCrimeAction) 把它作为 `GetCost` 的 `minimumCrimeRating` 参数。
  - 副作用：无。调用时机：赎罪结算时。

- **`GetCrimeRatingAfterPunishment()`**
  - 用途：玩家缴付惩罚后残留的犯罪评级。默认实现返回 `25f`；[PayForCrimeAction](../../campaign-ext/PayForCrimeAction) 用 `MathF.Min(faction.MainHeroCrimeRating, 此值)` 计算实际扣减量。
  - 副作用：无。调用时机：赎罪结算时。

### 玩家犯罪评级分级判定

- **`DoesPlayerHaveAnyCrimeRating(IFaction faction)`**
  - 用途：判断玩家在该派系是否留有任何犯罪记录，即 `faction.MainHeroCrimeRating > 0f`。[DefaultSettlementAccessModel](../DefaultSettlementAccessModel) 用它决定是否限制玩家进入定居点。
  - 副作用：无。调用时机：定居点准入判定时。

- **`IsPlayerCrimeRatingMild(IFaction faction)`**
  - 用途：评级是否处于“轻度”区间，即 `0 < MainHeroCrimeRating <= 30f`（默认阈值）。
  - 副作用：无。调用时机：`GuardsCampaignBehavior`、`DefaultSettlementAccessModel` 据它决定中立势力定居点是否放行玩家。

- **`IsPlayerCrimeRatingModerate(IFaction faction)`**
  - 用途：评级是否处于“中度”区间，即 `30f < MainHeroCrimeRating <= 65f`。
  - 副作用：无。调用时机：`CrimeCampaignBehavior`、`PlayerCaptivityCampaignBehavior`、`GuardsCampaignBehavior` 据此升级守卫敌意。

- **`IsPlayerCrimeRatingSevere(IFaction faction)`**
  - 用途：评级是否达到“重度”，即 `MainHeroCrimeRating >= 65f`。
  - 副作用：无。调用时机：`CrimeCampaignBehavior` 触发接管、`MissionCrimeHandler` 在战场中让守卫追杀玩家、`GuardsCampaignBehavior` 升级为攻击。

### 赎罪成本

- **`GetCost(IFaction faction, PaymentMethod paymentMethod, float minimumCrimeRating)`**
  - 用途：计算清偿犯罪评级的代价。先取 `x = Max(0f, faction.MainHeroCrimeRating - minimumCrimeRating)`；当 `paymentMethod` 为 `Gold` 时返回 `(int)(Pow(x, 1.2f) * 100f)`，为 `Influence` 时返回 `Pow(x, 1.2f)`，其余方式返回 `0f`。[PayForCrimeAction](../../campaign-ext/PayForCrimeAction) 与 `DefaultBribeCalculationModel` 都以此算出赎金/贿赂额。
  - 副作用：无，纯计算。`PaymentMethod` 是内嵌于本模型的 `[Flags]` 枚举：`Gold=1`、`Influence=2`、`Punishment=4`、`Execution=8`、`ExMachina=0x1000`。
  - 调用时机：赎罪结算、贿赂计算时。

### 每日犯罪评级变化

- **`GetDailyCrimeRatingChange(IFaction faction, bool includeDescriptions = false)`**
  - 用途：返回该派系每日犯罪评级的净衰减（`ExplainedNumber`）。先累加玩家拥有的暗巷城镇数 × `AlleyModel.GetDailyCrimeRatingOfAlley`；若评级已≈0 直接返回；否则按玩家与派系的关系加负值——己方家族 `-5`、己方王国（身为领袖）`-5`、同王国 `-1.5`、经家族同王国 `-1.25`、交战 `-0.25`、基线 `-1`，并叠加 `Roguery.WhiteLies` 专长加成。返回 `includeDescriptions: true` 可得到带说明项的分解。
  - 副作用：无；真正的评级写入由 `ChangeCrimeRatingAction` 完成。
  - 调用时机：[Clan](../Clan) 与 [Kingdom](../Kingdom) 的 `DailyCrimeRatingChange` / `DailyCrimeRatingChangeExplained` 属性在每日结算或界面刷新时调用。

## 示例

进入定居点前先判定玩家犯罪评级是否已达重度（守卫会据此攻击）：

```csharp
IFaction mapFaction = Settlement.CurrentSettlement.MapFaction;
if (!Campaign.Current.Models.CrimeModel.IsPlayerCrimeRatingSevere(mapFaction))
{
    // 犯罪评级未达重度，守卫不会主动追杀玩家
}
```

计算用金币清偿该派系犯罪评级所需的花费：

```csharp
float costGold = Campaign.Current.Models.CrimeModel
    .GetCost(faction, CrimeModel.PaymentMethod.Gold,
             Campaign.Current.Models.CrimeModel.GetMinAcceptableCrimeRating(faction));
```

读取某派系每日犯罪评级的自然衰减（含说明项）：

```csharp
ExplainedNumber daily = Campaign.Current.Models.CrimeModel
    .GetDailyCrimeRatingChange(faction, includeDescriptions: true);
float decay = daily.ResultNumber;
```

## 参见

- ↑ 父级：[战役 API 索引](../)
- ↔ 相关：[Campaign](../Campaign) · [GameModels](../GameModels) · [DefaultCrimeModel](../DefaultCrimeModel) · [AlleyModel](../AlleyModel) · [Clan](../Clan) · [Kingdom](../Kingdom) · [CrimeCampaignBehavior](../CrimeCampaignBehavior) · [PlayerCaptivityCampaignBehavior](../PlayerCaptivityCampaignBehavior) · [ChangeCrimeRatingAction](../../campaign-ext/ChangeCrimeRatingAction) · [PayForCrimeAction](../../campaign-ext/PayForCrimeAction) · [DefaultSettlementAccessModel](../DefaultSettlementAccessModel) · [DefaultBribeCalculationModel](../DefaultBribeCalculationModel) · [IFaction](../IFaction) · [Hero](../Hero) · [Settlement](../Settlement) · [ExplainedNumber](../ExplainedNumber) · [CampaignBehaviorBase](../CampaignBehaviorBase)
