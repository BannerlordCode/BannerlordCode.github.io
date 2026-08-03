---
title: "PartyImpairmentModel"
description: "决定战役队伍能否进入混乱状态、混乱与脆弱持续时间以及围城脆弱时间的可替换规则模型。"
---
# PartyImpairmentModel

**命名空间:** `TaleWorlds.CampaignSystem.ComponentInterfaces`  
**模块:** `TaleWorlds.CampaignSystem`  
**类型:** `public abstract class PartyImpairmentModel : MBGameModel<PartyImpairmentModel>`  
**基类:** `MBGameModel<PartyImpairmentModel>`  
**源文件:** `TaleWorlds.CampaignSystem/ComponentInterfaces/PartyImpairmentModel.cs`  
**默认实现:** `TaleWorlds.CampaignSystem.GameComponents/DefaultPartyImpairmentModel.cs`

## 一句话职责

它计算队伍是否具备进入混乱状态的资格、混乱和一般脆弱状态应持续多久，以及围城流程应使用的脆弱时间；它不决定哪场战斗触发状态，也不直接写入 `MobileParty` 的状态字段。

## 心智模型

这是“允许不允许、持续多长时间”的战役规则层，不是状态机命令。`DisorganizedStateCampaignBehavior` 在地图事件开始/结束、队伍离开军团和攻击菜单事件中调用 `CanGetDisorganized`；通过后，行为才调用 `MobileParty.SetDisorganized(true)`。`SetDisorganized` 再调用 `GetDisorganizedStateDuration`，把小时数转换为 `CampaignTime.HoursFromNow(...)` 并写入队伍的到期时间。

```text
MapEvent / Army / Siege lifecycle
             |
             v
Campaign.Current.Models.PartyImpairmentModel
       +-----+------------------+
       v                        v
CanGetDisorganized        duration/time queries
       |                        |
       v                        v
Behavior -> SetDisorganized   MobileParty / siege consumers
```

因此，`CanGetDisorganized` 返回 `true` 并不代表队伍已经混乱，读取持续时间也不会改变队伍。这个模型接收 `MobileParty`/`PartyBase` 和战役时间，不能当作 Mission 中 `Agent` 的状态 API；查询方法必须保持无副作用，因为同一结果可能在多个战役阶段重复读取。

## 何时使用，何时不要用

- 想调整混乱资格、混乱持续时间、一般脆弱持续时间或围城脆弱时间分布时，替换这个 Model。
- 想在 UI、日志或 AI 预览中读取当前规则时，从 `Campaign.Current.Models.PartyImpairmentModel` 查询，并把 `ExplainedNumber.ResultNumber` 当作小时数。
- 不要在 Model 方法里调用 `SetDisorganized`、修改 `_isDisorganized`、推进 `CampaignTime` 或发布事件；触发时机属于 Behavior、Siege 和队伍生命周期。
- 不要把一次查询缓存成跨存档的状态时间。需要持久化的是行为状态和时间戳，而不是随机生成的下一次持续时间。

## 依赖图

### 上游

| 类型 | 关系 |
| --- | --- |
| [`Campaign`](../../campaign/Campaign) | 提供当前战役和 `Models` 注册表。 |
| [`GameModels`](../GameModels) | 在战役构造时保存 `PartyImpairmentModel` 实例。 |
| [`PartyBase`](../../campaign/PartyBase) | 提供活动/移动状态和到 `MobileParty` 的关联。 |
| [`MobileParty`](../../campaign/MobileParty) | 提供成员数量、军团关系、地图事件和海上状态。 |
| [`CampaignTime`](../CampaignTime) | 把持续小时数转换成会随战役推进的到期时间。 |

### 下游

| 类型 | 关系 |
| --- | --- |
| [`DisorganizedStateCampaignBehavior`](../../campaign/DisorganizedStateCampaignBehavior) | 订阅地图事件、军团移除和攻击菜单事件，在资格通过后写入混乱状态。 |
| [`MobileParty`](../../campaign/MobileParty) | 使用混乱持续时间设置到期时间，并在时间过去后清除状态。 |
| [`BesiegerCamp`](../BesiegerCamp) | 队伍离开围城时检查资格并可能设置混乱。 |
| [`MapEvent`](../../campaign/MapEvent) | 提供 raid、siege assault、撤退和外交结束等状态输入。 |

### 事件、Action 与存档边界

模型不派发事件，也没有自己的存档 payload。`DisorganizedStateCampaignBehavior.SyncData` 保存的是行为内部的事件检查标志；队伍状态和到期时间由 `MobileParty` 的生命周期处理。不要从模型里模拟地图事件、调用 Action 或自行写一份时间字段。

## 成员契约

| 成员 | 用途与调用时机 | 副作用边界 |
| --- | --- | --- |
| `GetDisorganizedStateDuration(MobileParty party)` | 计算队伍进入混乱状态后应持续的小时数；`MobileParty.SetDisorganized(true)` 在真正写状态前调用。 | 返回带说明的 `ExplainedNumber`，不设置状态、不推进时间。 |
| `GetVulnerabilityStateDuration(PartyBase party)` | 计算战役流程请求的一般脆弱状态持续时间。 | 返回 `float`，不启动战斗、不改变队伍。 |
| `GetSiegeExpectedVulnerabilityTime()` | 为围城流程提供一天内的预期脆弱时间。 | 返回时间点，不创建围城事件、不写队伍状态。 |
| `CanGetDisorganized(PartyBase partyBase)` | 检查队伍是否活动、可移动、成员足够且军团关系允许进入混乱。 | 只做资格判断；`true` 不等于已经调用 `SetDisorganized`。 |

## 默认实现的规则

`DefaultPartyImpairmentModel` 的混乱基础持续时间是 `6` 小时。若队伍不在海上、当前地图事件是 raid 或 siege assault，并且队伍拥有 `SwiftRegroup`，会把该 Perk 的主要效果加入解释值；`Foragers` 还会通过队伍 Perk 辅助逻辑提供修正。`CanGetDisorganized` 要求 `PartyBase` 活动、可移动、普通成员至少 `10` 人，并且队伍不在军团中，或自己是军团领袖，或已附属于军团。

一般脆弱持续时间默认是 `MBRandom.RandomFloatNormal + 4f`，所以它是随机结果。围城预期脆弱时间使用当前战役小时、日出、`HoursInDay` 和正态/幂次随机值映射到一天内的时间点，不应解释为“从现在开始固定几个小时”。

## 真实读取与应用路径

下面的查询从实际注册的 Model 获取规则，适合诊断或 UI 预览；它不会改变队伍：

```csharp
using TaleWorlds.CampaignSystem;
using TaleWorlds.CampaignSystem.ComponentInterfaces;
using TaleWorlds.CampaignSystem.Party;
using TaleWorlds.Core;

public bool TryReadImpairmentPolicy(
    out float disorganizedHours, out float vulnerabilityHours)
{
    disorganizedHours = 0f;
    vulnerabilityHours = 0f;
    if (Campaign.Current == null || MobileParty.MainParty == null)
    {
        return false;
    }

    PartyImpairmentModel model = Campaign.Current.Models.PartyImpairmentModel;
    MobileParty party = MobileParty.MainParty;
    if (!model.CanGetDisorganized(party.Party))
    {
        return false;
    }

    disorganizedHours = model.GetDisorganizedStateDuration(party).ResultNumber;
    vulnerabilityHours = model.GetVulnerabilityStateDuration(party.Party);
    return true;
}
```

真实状态应用由行为负责，典型顺序是 `CanGetDisorganized(party.Party)` 成功后调用 `party.SetDisorganized(true)`。不要把这一步塞进上面的查询函数，否则地图事件结束、围城离开和队伍移除事件可能重复写入状态。

## 替换模型的安全边界

如果只想调整持续时间，保留原模型的资格判断和 `ExplainedNumber` 解释链；如果要调整资格，必须同时检查 `DisorganizedStateCampaignBehavior`、`BesiegerCamp` 和 `MobileParty.SetDisorganized` 的调用条件。自定义模型仍要支持海上队伍、没有军团的队伍、军团附属队伍和失活 `PartyBase` 的输入边界。

## 风险与排错顺序

1. **错误的 PartyBase 假设:** `PartyBase` 不保证永远关联存活的 `MobileParty`；读取成员或军团属性前要检查关联和活动状态。
2. **把解释值当存档:** `GetDisorganizedStateDuration` 返回 `ExplainedNumber`，调用者应取 `ResultNumber`，不要序列化整个说明对象。
3. **模型内写状态:** 调用 `SetDisorganized` 会造成递归或重复写入，并绕过地图事件对主队、撤退方和海上队伍的边界判断。
4. **缓存随机值:** 加载时生成的持续时间不能跨存档、跨天复用；持久化应由队伍/Behavior 的既有时间字段负责。
5. **只改资格不查调用者:** 过度放宽资格会让成员不足、失活或未正确附属的队伍进入混乱，导致地图 AI 与队伍生命周期不一致。
6. **模型未注册:** 在战役装配前直接访问强类型 Model 可能为空；跨模式代码可用 `GetGameModel<PartyImpairmentModel>()` 判空并选择明确回退。

## 版本与导航

v1.3.15 与 v1.4.5 保留四个抽象成员和 `6` 小时混乱基础值；两个版本都对海上队伍、地图事件和 Perk 进行条件判断。版本差异应以目标版本的 `DefaultPartyImpairmentModel` 和 Behavior 调用点为准，不要只复制一个随机公式。

- [父级：Campaign 扩展 API](../)
- [队伍模型目录](../models/)
- [↔ PartyTradeModel](../PartyTradeModel)
- [↔ PartyFoodBuyingModel](../PartyFoodBuyingModel)
- [DisorganizedStateCampaignBehavior](../../campaign/DisorganizedStateCampaignBehavior)
- [MobileParty](../../campaign/MobileParty)
- [PartyBase](../../campaign/PartyBase)
- [CampaignTime](../CampaignTime)
- [BesiegerCamp](../BesiegerCamp)
