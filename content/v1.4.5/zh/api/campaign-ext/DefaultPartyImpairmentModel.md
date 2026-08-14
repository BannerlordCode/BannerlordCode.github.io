---
title: "DefaultPartyImpairmentModel"
description: "PartyImpairmentModel 的 Sandbox 默认实现：按队伍状态、成员规模、军团关系和 perk 计算混乱/脆弱规则。"
---

# DefaultPartyImpairmentModel

**Namespace:** `TaleWorlds.CampaignSystem.GameComponents`  
**Module:** `TaleWorlds.CampaignSystem`  
**Type:** `public class DefaultPartyImpairmentModel : PartyImpairmentModel`  
**Base:** `PartyImpairmentModel`  
**Source:** `TaleWorlds.CampaignSystem/GameComponents/DefaultPartyImpairmentModel.cs`  
**Contract:** [PartyImpairmentModel](../PartyImpairmentModel/)

## 一句话职责

它是 vanilla 的队伍失能规则：以 `6` 小时为混乱基础持续时间，按 `Swift Regroup`/`Foragers` 修正，并要求活动、可移动且至少有 10 名普通成员的队伍才有资格混乱。

## 心智模型

该类只提供 [PartyImpairmentModel](../PartyImpairmentModel/) 的计算结果。Sandbox 在战役初始化时注册它；[DisorganizedStateCampaignBehavior](../../campaign/DisorganizedStateCampaignBehavior/) 负责在地图事件和军团边界先检查资格，再调用 `MobileParty.SetDisorganized(true)`。`MobileParty` 在写入状态时才读取本类的持续时间。

这条边界很重要：替换默认 Model 会改变规则，不会自动把所有队伍标成混乱。它也不会保存自己的随机结果；状态到期时间由 `MobileParty` 使用 [CampaignTime](../CampaignTime/) 计算并持有。

## 何时使用，何时不要用

- 需要保留 vanilla perk 修正，只收紧混乱资格或改一般脆弱时长时，继承本类并覆盖一个成员。
- 只想诊断当前生效结果时，从 `Campaign.Current.Models.PartyImpairmentModel` 查询，而不是创建新实例。
- 不要在重写的 Model 里调用 `SetDisorganized`、写队伍字段或触发地图事件；这些会绕过 [DisorganizedStateCampaignBehavior](../../campaign/DisorganizedStateCampaignBehavior/) 的阶段检查。
- 不要把 `GetSiegeExpectedVulnerabilityTime` 的小时值当成持续时长；它表示一天中的预期时间点。

## 依赖

- [PartyImpairmentModel](../PartyImpairmentModel/) 是抽象契约。
- [GameModels](../GameModels/) 负责注册顺序和运行期暴露。
- [MobileParty](../../campaign/MobileParty/) 提供成员数、海上状态、地图事件、perk 和军团关系。
- [DisorganizedStateCampaignBehavior](../../campaign/DisorganizedStateCampaignBehavior/) 负责调用资格检查及状态写入。
- [BesiegerCamp](../BesiegerCamp/) 在围城流程中也使用资格判断；[CampaignTime](../CampaignTime/) 负责把小时数变成到期时间。

## 成员说明

| 成员 | Vanilla 行为 | 调用时机与副作用 |
|---|---|---|
| `GetDisorganizedStateDuration(MobileParty party)` | 以 `6f` 小时创建 `ExplainedNumber`；劫掠/攻城突击且非海上时加入 `Swift Regroup`，再加入 `Foragers` 的队伍修正。 | `MobileParty.SetDisorganized(true)` 写入到期时间前调用；只返回解释数值。 |
| `GetVulnerabilityStateDuration(PartyBase party)` | 返回 `MBRandom.RandomFloatNormal + 4f`。 | 由相关战役流程按需读取；不设置脆弱状态。 |
| `GetSiegeExpectedVulnerabilityTime()` | 按当前小时、日出、日长和随机值计算当天范围内的时间点。 | 围城逻辑读取；不启动围城或修改队伍。 |
| `CanGetDisorganized(PartyBase party)` | 要求 `IsActive`、`IsMobile`、普通成员总数至少 `10`；军团中必须是领袖，或已附属于军团。 | Behavior 在 `SetDisorganized` 前调用；返回 `true` 仍不是状态写入。 |

## 真实读取与替换示例

```csharp
using TaleWorlds.CampaignSystem;
using TaleWorlds.CampaignSystem.ComponentInterfaces;
using TaleWorlds.CampaignSystem.Party;
using TaleWorlds.Core;

PartyImpairmentModel model = Campaign.Current.Models.PartyImpairmentModel;
PartyBase party = MobileParty.MainParty.Party;
bool canDisorganize = model.CanGetDisorganized(party);
```

如果只想要求混乱队伍必须有领袖，可以在启动时追加一个派生实现，并保留默认资格检查：

```csharp
using TaleWorlds.CampaignSystem.GameComponents;
using TaleWorlds.Core;

public sealed class MyPartyImpairmentModel : DefaultPartyImpairmentModel
{
    public override bool CanGetDisorganized(PartyBase party)
    {
        return base.CanGetDisorganized(party) && party.MobileParty.LeaderHero != null;
    }
}

protected override void InitializeGameStarter(Game game, IGameStarter starter)
{
    starter.AddModel(new MyPartyImpairmentModel());
}
```

实际状态仍由战役 Behavior 在地图事件正确边界调用 `SetDisorganized`，而不是由这个覆盖类主动设置。

## 风险与版本边界

1. 覆盖 `CanGetDisorganized` 时若忘记 `IsActive`、`IsMobile`、成员数和军团关系边界，会让已移除或不具备地图移动能力的对象进入队伍状态。
2. 覆盖持续时间时要返回非负、合理的小时数；`MobileParty` 会直接把 `ResultNumber` 传入 `CampaignTime.HoursFromNow`。
3. `GetSiegeExpectedVulnerabilityTime` 返回的是当天小时位置，不是 `HoursFromNow` 的参数。单位混淆会让围城 AI 在错误时间进入脆弱窗口。
4. 不要在 Model 中持久化随机值或调用状态 Action。需要保存自定义状态时，应使用 [CampaignBehaviorBase](../CampaignBehaviorBase/) 的 SaveSystem 契约。
5. v1.4.5 保持 `6` 小时基准、`4` 小时随机脆弱时长、`10` 人资格门槛和 perk 修正规则；反编译语法变化不改变 Mod 可见契约。

## 导航

- [父级：campaign-ext](../)
- [契约：PartyImpairmentModel](../PartyImpairmentModel/)
- [模型家族手册](../models/)
- [同级：DefaultPartyTradeModel](../DefaultPartyTradeModel/) · [DefaultPartyFoodBuyingModel](../DefaultPartyFoodBuyingModel/)
- [消费者：DisorganizedStateCampaignBehavior](../../campaign/DisorganizedStateCampaignBehavior/) · [BesiegerCamp](../BesiegerCamp/)
- [注册容器：GameModels](../GameModels/) · [CampaignGameStarter](../CampaignGameStarter/)
