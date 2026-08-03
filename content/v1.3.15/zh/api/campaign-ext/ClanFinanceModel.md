---
title: "ClanFinanceModel"
description: "计算家族收入、支出和每日金币变化的可替换财政策略；不直接转账或修改家族金库。"
---

# ClanFinanceModel

**Namespace:** `TaleWorlds.CampaignSystem.ComponentInterfaces`
**Module:** `TaleWorlds.CampaignSystem`
**Type:** `public abstract class ClanFinanceModel : MBGameModel<ClanFinanceModel>`
**Base:** `MBGameModel<ClanFinanceModel>`
**Source:** `TaleWorlds.CampaignSystem/ComponentInterfaces/ClanFinanceModel.cs`
**Default implementation:** `TaleWorlds.CampaignSystem.GameComponents/DefaultClanFinanceModel.cs`

## 一句话职责

`ClanFinanceModel` 把家族的封地、部队、工坊、商队、贡金、贸易和支出规则汇总为可解释的收入/支出结果；它不直接给英雄转金币，也不负责保存每日结算。

## 心智模型

这是“财政怎么算”和“金币什么时候到账”之间的边界。默认实现由 `SandBoxManager` 注册，`Campaign.Current.Models.ClanFinanceModel` 在战役运行时提供一个策略实例。`CalculateClanIncome`、`CalculateClanExpenses` 和 `CalculateClanGoldChange` 会遍历家族资产、队伍和外交状态，返回 `ExplainedNumber`；UI 可以用它预览，日结 Behavior 才把净值交给 [GiveGoldAction](../GiveGoldAction)。

`applyWithdrawals` 不是普通的显示开关：默认实现的一些收入/支出项会在该标志为真时更新平滑缓存或扣除可提取金额。预览应保持 `false`；只有原版日结路径在确定要提交时才使用 `true`。模型仍然不应直接写 `Hero.Gold` 或触发事件。

## 何时使用，何时不要用

- 想替换家族工资、资产收益、贡金、贸易或项目收入公式时，实现/继承模型并在战役启动阶段通过 `IGameStarter.AddModel` 注册。
- 想展示财政明细时，从 `Campaign.Current.Models.ClanFinanceModel` 查询 `ExplainedNumber`，并把 `includeDescriptions` 设为 `true`。
- 不要在 UI 预览中使用 `applyWithdrawals: true`，也不要把 `CalculateClanGoldChange` 当成“已经发钱”。
- 不要从模型直接调用 `GiveGoldAction`、改变 `Clan` 状态或创建工坊；实际变更由 [CampaignBehaviorBase](../CampaignBehaviorBase) 的每日流程和 Action 执行。

## 依赖关系

#### 上游

- [Campaign](../../campaign/Campaign) 和 [GameModels](../GameModels) 提供注册后的财政策略。
- [Clan](../../campaign/Clan) 提供领袖、家族等级、王国、封地和当前金币。
- `Town`、`Village`、`MobileParty`、`Workshop` 和商队提供资产收入与支出输入；它们的可读状态来自战役实体。
- [PartyWageModel](../PartyWageModel)、Settlement 相关 Models 和贸易/外交 Behavior 提供被财政汇总的规则结果。

#### 下游

- `ClanVariablesCampaignBehavior` 在每日 tick 调用 `CalculateClanGoldChange`，然后通过 [GiveGoldAction](../GiveGoldAction) 对家族领袖执行净金币转移。
- 财政 UI 读取收入/支出明细和 `ExplainedNumber` 的说明行。
- [ChangeClanInfluenceAction](../ChangeClanInfluenceAction) 等 Action 是相邻的世界变更入口；财政模型不应代替它们改变影响力或关系。

## 成员与调用时机

| 成员 | 用途与时机 | 副作用边界 |
|---|---|---|
| `PartyGoldLowerThreshold` | 新建/恢复家族队伍时判断领袖需要的最低金币；默认实现为 5000。 | 只读阈值，不自动补钱。 |
| `CalculateClanGoldChange(Clan, bool, bool, bool)` | 汇总收入与支出得到净变化；日结提交和 UI 总览都会读取。 | `applyWithdrawals` 为真时可能推进模型内部提取/平滑状态。 |
| `CalculateClanIncome(Clan, bool, bool, bool)` | 单独汇总封地、队伍、工坊、商队、贡金、贸易等收入。 | 不把结果写入领袖金币。 |
| `CalculateClanExpenses(Clan, bool, bool, bool)` | 汇总驻军/队伍工资、雇佣兵、贡金、自动招募和其他支出。 | 不直接扣余额。 |
| `CalculateTownIncomeFromTariffs(Clan, Town, bool)` | 计算家族从城镇关税得到的项目收入。 | 只返回数值，真实结算由财政日程负责。 |
| `CalculateTownIncomeFromProjects(Town)` | 计算城镇项目对收入的贡献。 | 不推进建筑项目。 |
| `CalculateNotableDailyGoldChange(Hero, bool)` | 计算活跃杰出人物的每日金币变化；由每日 Hero tick 消费。 | 不直接给 Hero 发金币。 |
| `CalculateVillageIncome(Clan, Village, bool)` | 计算家族从村庄得到的收入。 | 不改变村庄产出或所有权。 |
| `CalculateOwnerIncomeFromCaravan(MobileParty)` | 计算商队所有者收入。 | 不移动商队或创建交易。 |
| `CalculateOwnerIncomeFromWorkshop(Workshop)` | 计算工坊所有者收入。 | 不改变生产类型或工坊库存。 |
| `RevenueSmoothenFraction()` | 提供收入平滑比例，供默认财政实现控制波动。 | 只返回策略参数。 |

## 真实预览示例

```csharp
using TaleWorlds.CampaignSystem;
using TaleWorlds.CampaignSystem.ComponentInterfaces;

Clan clan = Clan.PlayerClan;
ClanFinanceModel finance = Campaign.Current.Models.ClanFinanceModel;
ExplainedNumber income = finance.CalculateClanIncome(
    clan,
    includeDescriptions: true,
    applyWithdrawals: false,
    includeDetails: true);
ExplainedNumber expenses = finance.CalculateClanExpenses(
    clan,
    includeDescriptions: true,
    applyWithdrawals: false,
    includeDetails: true);
float projectedChange = income.ResultNumber + expenses.ResultNumber;
```

这个示例只做 UI/日志预览。原版每日家族流程在确认结算时才用 `CalculateClanGoldChange(..., applyWithdrawals: true)`，再通过 `GiveGoldAction` 应用结果；Mod 不应因为预览按钮被点击就重复提交金币。

## 风险与排错

1. 将 `applyWithdrawals: true` 用在菜单刷新、tooltip 或 AI 试算中，可能推进收入平滑或提取状态，导致同一天重复扣款、重复发钱或不同存档结果。
2. `CalculateClanGoldChange` 的结果不是余额。调用方若再次把它当成绝对金币设置值，会丢失家族已有余额和 `GiveGoldAction` 的转账语义。
3. 财政项依赖家族当前王国、封地、队伍、工坊和贸易 Behavior；在 Campaign 加载早期调用可能出现空模型、空 Behavior 或不完整资产集合。
4. 替换模型时保留 `ExplainedNumber` 的符号约定：收入增加、支出减少。返回未解释的总和会让财政 UI 与日结日志无法定位差异。
5. 模型本身不负责存档。需要跨档保留的平滑系数或自定义资产应由 Behavior 的 `SyncData`/Saveable 契约保存，不能依赖模型实例寿命。

## 导航

- [Parent: campaign-ext](./)
- [Models family guide](../models)
- [Sibling: PartyWageModel](../PartyWageModel) · [DiplomacyModel](../DiplomacyModel)
- [Related: Clan](../../campaign/Clan) · [Campaign](../../campaign/Campaign) · [GiveGoldAction](../GiveGoldAction)
