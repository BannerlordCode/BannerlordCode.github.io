---
title: "PartyWageModel"
description: "计算队伍每日总工资、单个兵种工资与招募金币花费的规则模型，由 Campaign 在运行时通过 Campaign.Current.Models.PartyWageModel 解析，被队伍工资结算、招募/驻军行为与逃兵/升级模型调用。"
---

# PartyWageModel

**命名空间：** TaleWorlds.CampaignSystem.ComponentInterfaces
**模块：** TaleWorlds.CampaignSystem
**类型：** public abstract class PartyWageModel : MBGameModel<PartyWageModel>
**源文件：** Bannerlord.Source/bin/TaleWorlds.CampaignSystem/TaleWorlds.CampaignSystem.ComponentInterfaces/PartyWageModel.cs

## 概述

该模型集中封装了“钱从哪扣”：给定一支队伍（或一份兵册），算出它每日要发多少工资、某个兵种每天值多少工资、以及把某个兵种招募进队要花多少金币。它只做纯计算，不持有任何会被写进存档的世界状态——真正的发薪、扣金与支付上限都记录在 `MobileParty`/`PartyComponent`/`Clan` 上，由工资结算与招募行为驱动。

## 心智模型

PartyWageModel 是一个纯计算的规则扩展点：`Campaign` 在启动时通过 `GameModels` 从已注册的 `GameModel` 集合中按类型解析出 `DefaultPartyWageModel` 唯一实例并缓存，运行时统一用 `Campaign.Current.Models.PartyWageModel` 取得；它不参与存档序列化，也不在每个 tick 被重新构造。发薪流程（如 `ClanFinanceCampaignBehavior` 对家族各队伍扣工资）读取 `MobileParty.TotalWage`（内部转发到 `GetTotalWage`），招募菜单一端（如 `RecruitmentCampaignBehavior`、`GarrisonRecruitmentCampaignBehavior` 及 `RecruitVolunteerTroopVM`）则用 `GetTroopRecruitmentCost` 判定买兵开销、用 `GetCharacterWage` 估算单兵消耗；而逃兵模型 `DefaultPartyDesertionModel` 与升级模型 `DefaultPartyTroopUpgradeModel` 也会调用 `GetTotalWage` 来估算队伍负担。要改工资/招募费规则就继承并注册替换实现；要“发钱/扣钱/改支付上限”必须走对应的行为或 `*Action`（如 `PartyComponent.SetWagePaymentLimit`、家族财政结算），绝不要把模型当成写世界的入口或直接改 `MobileParty.MemberRoster`。

## 何时使用 / 何时不要使用

- **使用**：需要查询或自定义“队伍每天发多少工资 / 某兵种值多少钱 / 招募一个兵要花多少”的规则时，读取 `Campaign.Current.Models.PartyWageModel` 的返回值，或提供一个新的派生类覆盖其抽象成员并通过子模块注册替换默认实现。
- **不要使用**：不要用模型去“扣工资”或“设置支付上限”——它只会判定，真正改 `MobileParty.PaymentLimit`、`Clan` 财政、`PartyComponent` 上限的是发薪行为与 `SetWagePaymentLimit`。不要直接给 `MobileParty.MemberRoster` 改兵来操纵工资；也不要把模型返回值当作持久世界状态（它是无状态的纯函数）。在 `Mission` 或战场逻辑里取 `Campaign.Current.Models` 是错误的访问层。

## 依赖图

上游类型与系统：

- [Campaign](../Campaign) —— 持有 `Models` 集合，是运行时获取该模型的入口；主队创建时通过 `SetWagePaymentLimit(MaxWagePaymentLimit)` 设定默认上限。
- [GameModels](../GameModels) —— 在构造时通过 `GetGameModel<PartyWageModel>()` 解析并缓存实例。
- [CharacterObject](../CharacterObject) —— `GetCharacterWage` 的参数类型；其 `TroopWage` 属性直接转发到本模型的同名方法。

下游与协同系统（调用方）：

- [MobileParty](../MobileParty) —— `TotalWage` 与 `TotalWageExplained` 属性转发到 `GetTotalWage(this, MemberRoster)`；`PaymentLimit` 以 `MaxWagePaymentLimit` 为默认值。
- [PartyComponent](../PartyComponent) —— `WagePaymentLimit` 默认返回 `MaxWagePaymentLimit`；`LordPartyComponent` 用它初始化支付上限。
- [Clan](../Clan) —— 家族财政结算按各队伍的 `TotalWage` 扣钱，`ClanFinanceExpenseItemVM` 用 `MaxWagePaymentLimit` 标记“无限支付”。
- [RecruitmentCampaignBehavior](../RecruitmentCampaignBehavior) —— 招募玩家队伍时反复调用 `GetTroopRecruitmentCost` 判定金币与工资预算，并用 `GetCharacterWage` 估单兵消耗。
- [GarrisonRecruitmentCampaignBehavior](../GarrisonRecruitmentCampaignBehavior) —— 驻军自动招募时调用 `GetCharacterWage` 与 `GetTroopRecruitmentCost`，把花费计入 `OwnerClan.AutoRecruitmentExpenses`。
- [DefaultPartyDesertionModel](../DefaultPartyDesertionModel) —— 逃兵判定时调用 `GetTotalWage` 估算队伍负担。
- [DefaultPartyTroopUpgradeModel](../DefaultPartyTroopUpgradeModel) —— 升级兵种时读取本模型评估工资变化。
- [PartyBase](../PartyBase) —— 文化特性（如 `AseraiIncreasedWageFeat`）经 `PartyBaseHelper.HasFeat` 影响工资计算。
- [CampaignBehaviorBase](../CampaignBehaviorBase) —— 上述各行为均继承自它，是实际驱动调用方。

共享/相关类型：

- [ExplainedNumber](../ExplainedNumber) —— `GetTotalWage` 与 `GetTroopRecruitmentCost` 的返回类型，携带带说明项的数值分解。
- [Settlement](../Settlement) —— `SetGarrisonWagePaymentLimit` 用 `MaxWagePaymentLimit` 设定驻军上限；工资减免与城镇/城堡专长、建筑绑定。
- [DefaultPartyWageModel](../DefaultPartyWageModel) —— 默认实现，具体工资/招募费公式所在地。

## 风险

- **跨战役重载缓存实例**：`Campaign.Current.Models.PartyWageModel` 在每次新战役/读档时由 `GameModels` 重新解析。把实例缓存进静态字段或长生命周期对象，会在重载后指向旧战役的已销毁对象，调用即崩溃或读到陈旧规则。每次需要时都重新走 `Campaign.Current.Models` 获取。
- **战役开始前访问**：`Campaign.Current` 或 `Campaign.Current.Models` 在战役未启动时为 `null`。在 `MainMenu`、子模块加载早期或编辑器上下文里调用会直接空引用。
- **误判状态层**：该模型是无状态纯函数，没有需要持久化的字段，也不含 `[SaveableField]`。若你新增的派生类里加了可变字段并期望它随存档恢复，会发现这些值永远不会被序列化，从而产生隐蔽的规则漂移。
- **在 Mission/战斗层调用**：模型属于 Campaign 层，仅在战役模拟中存在；在 `Mission` 或战场逻辑里取 `Campaign.Current.Models` 是错误的访问层。
- **只替换模型不改写入路径**：派生类压低了工资或招募费，但真正扣钱、扣金与设定支付上限的是发薪行为与 `PartyComponent.SetWagePaymentLimit`——只替换模型、却让结算方按旧假设处理 `MobileParty.PaymentLimit` 与 `Clan` 财政，会出现“判定便宜却仍原价扣费”或预算不一致。
- **`GetTroopRecruitmentCost` 的 `buyerHero` 为 null 时跳过专长**：默认实现只在 `buyerHero != null` 时叠加买家的各项招募专长加成，并强制 `LimitMin(1f)`；传入 `null`（如赎金估值 `DefaultRansomValueCalculationModel` 所为）会得到不含专长、且下限为 1 的费用，与“玩家实际招募价”不一致，对比时勿混用。
- **`MaxWagePaymentLimit` 同时充当“无限”哨兵**：多个 UI 与行为用“`PaymentLimit == MaxWagePaymentLimit`(10000)”来判定该队是否处于“无上限支付”状态；派生类若改动了该常量却未同步更新相关比较，会破坏无限支付/有限支付的判定。

## 成员说明

### 支付上限

- **`MaxWagePaymentLimit`**（属性，返回 `int`）
  - 用途：工资支付上限，即一支队伍被允许的最高每日工资。默认实现 `DefaultPartyWageModel` 返回 `10000`。`PartyComponent.WagePaymentLimit`、`LordPartyComponent` 初始值、`MobileParty.PaymentLimit` 默认值、`Campaign` 初始化主队、`ClanVariablesCampaignBehavior` 设定驻军/战队上限都引用它；`ClanFinanceExpenseItemVM` 用 “`PaymentLimit == MaxWagePaymentLimit`” 标记“无限支付”。
  - 副作用：无，纯计算。
  - 调用时机：队伍创建/读档初始化上限、UI 判定是否无限支付、财政结算时钳制工资。

### 单兵与整队工资

- **`GetCharacterWage(CharacterObject character)`**
  - 用途：返回该兵种每天的工资。默认实现按 `CharacterObject.Tier` 分段：0→1、1→2、2→3、3→5、4→8、5→12、6→17、其余→23；若 `Occupation` 为 `Mercenary` 则整体乘 `1.5f`（`MercenaryWageFactor`）。`CharacterObject.TroopWage` 属性直接转发到此方法。
  - 副作用：无，纯计算。
  - 调用时机：`CharacterObject.TroopWage` 读取；`AiVisitSettlementBehavior`、`GarrisonRecruitmentCampaignBehavior`、`RecruitPrisonersCampaignBehavior`、`RecruitmentCampaignBehavior` 在估算单兵消耗时调用。

- **`GetTotalWage(MobileParty mobileParty, TroopRoster troopRoster, bool includeDescriptions = false)`**
  - 用途：返回整支队伍每日总工资（`ExplainedNumber`）。默认实现先按兵册累加“兵种工资 × 数量”，并分桶统计步兵/骑兵/远程/土匪/雇佣兵/护卫工资；英雄按 `TroopWage` 计（家族领袖、主角领主豁免）；随后叠加大量乘法因子——盗匪豁免（`Roguery.DeepPockets`）、远程高阶减免（`Crossbow.PickedShots`）、驻军专长（`MilitaryTradition`/`Berserker`/`DrillSergant`/`HunterClan`/`StiffUpperLip` 与 `StandardBearer`/`PeasantLeader`/`CavalryTactics` 的局部比例减免）、帝国驻军文化特性、建筑（`GarrisonWageReduction`）、政策（`MilitaryCoronae`）、交易/管理/雇佣兵专长（`SwordForBarter`/`Contractors`/`MercenaryConnections`/`Frugal`/`EfficientCampaigner`/`MasterOfWarcraft`/`PriceOfLoyalty`/`ContentTrades`）、阿塞赖文化加薪等，最终 `LimitMin(0f)`。`includeDescriptions` 为真时返回带说明项的分解。
  - 副作用：无，纯计算；内部借助多个 `ExplainedNumber` 累积因子。
  - 调用时机：`MobileParty.TotalWage` / `TotalWageExplained` 转发；`DefaultPartyDesertionModel` 估负担、`DefaultPartyTroopUpgradeModel` 估升级前后工资变化。

### 招募花费

- **`GetTroopRecruitmentCost(CharacterObject troop, Hero buyerHero, bool withoutItemCost = false)`**
  - 用途：返回把 `troop` 招募进来要花的金币（`ExplainedNumber`）。默认实现按 `troop.Level` 分档定基础费（≤1→10、≤6→20、≤11→50、≤16→100、≤21→200、≤26→400、≤31→600、≤36→1000、>36→1500）；若 `troop` 有马且 `withoutItemCost` 为 false，则 <26 级加 150、否则加 500；若兵种为雇佣兵/匪徒/护卫，则总费用再翻为 `BaseNumber * 3`；最后当 `buyerHero != null` 时按买家专长（如 `Throwing.HeadHunter`、`OneHanded.ChinkInTheArmor`、`TwoHanded.ShowOfStrength`、`Polearm.HardyFrontline`、`Bow.RenownedArcher`、`Crossbow.Piercer`、可汗文化特性、`Steward.Frugal`、`Trade.SwordForBarter`、`Charm.SlickNegotiator`）追加折扣因子，并 `LimitMin(1f)`。
  - 副作用：无，纯计算；`buyerHero` 为 null 时跳过所有买家专长加成。
  - 调用时机：`RecruitmentCampaignBehavior`、`GarrisonRecruitmentCampaignBehavior` 实际买兵时；`RecruitVolunteerTroopVM` 在招募菜单显示价格；`DefaultRansomValueCalculationModel`（传 `null` 买家）估赎金；`TutorialPhase`、`DefeatTheConspiracyQuestBehavior`、`LordNeedsGarrisonTroopsIssueQuestBehavior` 估算任务花费。

## 示例

读取主角队伍今天的每日总工资（含说明项分解）：

```csharp
MobileParty party = MobileParty.MainParty;
int dailyWage = (int)Campaign.Current.Models.PartyWageModel
    .GetTotalWage(party, party.MemberRoster, includeDescriptions: false).ResultNumber;
```

估算招募某个兵种需要花费的金币：

```csharp
ExplainedNumber recruitmentCost = Campaign.Current.Models.PartyWageModel
    .GetTroopRecruitmentCost(troopToRecruit, Hero.MainHero, withoutItemCost: false);
int goldCost = recruitmentCost.RoundedResultNumber;
```

## 怎么用

### 怎么拿到它

**源文件：** `bannerlord-1.4.5/Bannerlord.Source/bin/TaleWorlds.CampaignSystem/TaleWorlds.CampaignSystem.ComponentInterfaces/PartyWageModel.cs`（全文 16 行）。
**入口：** `Campaign.Current.Models.PartyWageModel`（由 `GameModels` 在战役建立 / 读档时解析）。

`public abstract class PartyWageModel : MBGameModel<PartyWageModel>`（`PartyWageModel.cs:7`），**4 个成员全是 abstract**。

**4 个成员里有 2 个返回 `ExplainedNumber`、2 个返回裸 `int`**——这是本页最重要的一条分界：

| 成员 | 返回 | 行号 |
| --- | --- | --- |
| `MaxWagePaymentLimit` | `int` | `:9` |
| `GetCharacterWage(CharacterObject)` | `int` | `:11` |
| `GetTotalWage(MobileParty, TroopRoster, bool)` | `ExplainedNumber` | `:13` |
| `GetTroopRecruitmentCost(CharacterObject, Hero, bool)` | `ExplainedNumber` | `:15` |

**裸 `int` 是「已折算完的定值」，`ExplainedNumber` 是「带分解过程的结果」。** 后两个都需要你显式取 `.ResultNumber` 或 `.RoundedResultNumber`（`ExplainedNumber.cs`），**不取就拿不到数**。

### 典型用法

**`withoutItemCost` 这个参数只对第二个 `ExplainedNumber` 生效。** `GetTroopRecruitmentCost` 的 `withoutItemCost` 决定的是「物品成本算不算进总价」，它与 `GetTotalWage` 无关——后者根本没有这个参数（`:13` 只有 `includeDescriptions`）。

**而 `includeDescriptions` 只影响明细，不影响数值。** 两个 `ExplainedNumber` 成员都以它结尾（`:13`/`:15`），传 `true` 会让每一条修正都带上一句可读的来源文案。**用于 UI 就传 true，用于算账就传 false 省钱。**

想在同一次查询里同时拿到「明细」和「纯数」，做法是调一次带明细的再取两个属性：

```csharp
public static void DumpWageBreakdown(MobileParty party)
{
    PartyWageModel model = Campaign.Current.Models.PartyWageModel;
    ExplainedNumber total = model.GetTotalWage(party, party.MemberRoster, includeDescriptions: true);
    Debug.Print("wage=" + total.ResultNumber + " rounded=" + total.RoundedResultNumber, 0);
    for (int i = 0; i < total.Lines.Count; i++)
    {
        ExplanationLine line = total.Lines[i];
        Debug.Print("  " + line.OperationType + " " + line.Name + " = " + line.Number, 0);
    }
    int cap = model.MaxWagePaymentLimit;
    Debug.Print("cap=" + cap + " over cap? " + (total.ResultNumber > cap), 0);
}
```

**明细在 `Lines`，不在 `OutPutData`。** `Lines` 是 `List<ExplanationLine>`（`ExplainedNumber.cs:29`），每项是 `readonly struct ExplanationLine(string name, float number, OperationType operationType)`（`:20`），三个字段 `Number` / `Name` / `OperationType` 全是 public readonly 字段而非属性（`:22`/`:24`/`:26`）。`OperationType` 枚举含 `Multiply` / `LimitMin` / `LimitMax`（`:15`-`:17`），**所以每一行是「乘」还是「钳位」必须看这个字段，不能只看符号。**

**另一个必须知道的性质：`ResultNumber` 是钳位后的。** 它是 `MathF.Clamp(_unclampedResultNumber, LimitMinValue, LimitMaxValue)`（`ExplainedNumber.cs:115`），下界与上界分别由 `LimitMinValue`（`:123`）与 `LimitMaxValue`（`:135`）暴露。**所以你以为的原始值可能已经被夹过——要拿未钳位值得另寻入口。**

**`MaxWagePaymentLimit` 与 `GetTotalWage` 是两个独立数字，谁也不知道谁。** 上例最后一行那句比较是**你必须自己加的**——模型不会告诉你「超了」。**超限后的行为（截断 / 拒付 / 照付）由消费方决定，不在本 Model 内。** 这是本页最容易漏的一环。

替换时 4 个成员都要实现：

```csharp
public class FlatWageModel : PartyWageModel
{
    public override int MaxWagePaymentLimit => 100000;
    public override int GetCharacterWage(CharacterObject character) => 2;
    public override ExplainedNumber GetTotalWage(MobileParty mobileParty, TroopRoster troopRoster, bool includeDescriptions = false)
    {
        return new ExplainedNumber(troopRoster.Count * 2, includeDescriptions);
    }
    public override ExplainedNumber GetTroopRecruitmentCost(CharacterObject troop, Hero buyerHero, bool withoutItemCost = false)
    {
        return new ExplainedNumber(troop.Tier * 10, includeDescriptions);
    }
}
```

**注意 `ExplainedNumber` 的构造需要显式传 `includeDescriptions`。** 上例里用 `troopRoster.Count * 2` 而不是逐兵累加，是为了避开 `GetCharacterWage` 的递归——**注意不要在 `GetTotalWage` 内部又去调 `GetCharacterWage` 再相加成同一个 `ExplainedNumber`，否则你会在一个对象里嵌套自己。**

### 最容易踩的坑

**跨战役重载缓存实例**：`Campaign.Current.Models.PartyWageModel` 在每次新战役/读档时由 `GameModels` 重新解析。把实例缓存进静态字段或长生命周期对象，会在重载后指向旧战役的已销毁对象，调用即崩溃或读到陈旧规则。每次需要时都重新走 `Campaign.Current.Models` 获取。

## 参见

- ↑ 父级：[战役 API 索引](../)
- ↔ 相关：[Campaign](../Campaign) · [GameModels](../GameModels) · [MobileParty](../MobileParty) · [CharacterObject](../CharacterObject) · [PartyComponent](../PartyComponent) · [Clan](../Clan) · [RecruitmentCampaignBehavior](../RecruitmentCampaignBehavior) · [GarrisonRecruitmentCampaignBehavior](../GarrisonRecruitmentCampaignBehavior) · [DefaultPartyDesertionModel](../DefaultPartyDesertionModel) · [DefaultPartyTroopUpgradeModel](../DefaultPartyTroopUpgradeModel) · [PartyBase](../PartyBase) · [Settlement](../Settlement) · [ExplainedNumber](../ExplainedNumber) · [DefaultPartyWageModel](../DefaultPartyWageModel) · [CampaignBehaviorBase](../CampaignBehaviorBase)
