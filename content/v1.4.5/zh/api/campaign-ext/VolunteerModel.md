---
title: "VolunteerModel"
description: "英雄志愿兵槽位上限、每日生成概率、基础兵种和可招募资格的可替换战役模型契约。"
---
# VolunteerModel

**Namespace:** `TaleWorlds.CampaignSystem.ComponentInterfaces`  
**Module:** `TaleWorlds.CampaignSystem`  
**Type:** `public abstract class VolunteerModel : MBGameModel<VolunteerModel>`  
**Base:** `MBGameModel<VolunteerModel>`  
**Source:** `TaleWorlds.CampaignSystem/ComponentInterfaces/VolunteerModel.cs`

## 一句话职责

`VolunteerModel` 决定一个英雄能展示/提供多少志愿兵槽位、每日空槽生成的概率、初始基础兵种以及英雄是否有资格拥有志愿兵；它不直接改 `Hero.VolunteerTypes`、金币或部队名册。

## 心智模型

把 `Hero.VolunteerTypes` 看成一个由英雄持有的六格候选队列，`VolunteerModel` 是这个队列的规则裁判。`RecruitmentCampaignBehavior` 每日调用资格、基础兵种和概率方法，然后把 `CharacterObject` 写入空槽或升级已有槽；玩家招募时再由行为清空槽位并把兵加入队伍。`GarrisonRecruitmentCampaignBehavior` 用另一条上限方法把同一批志愿兵加入城镇驻军。

`MaxVolunteerTier` 是志愿兵升级允许达到的兵种 Tier，不是槽位数量。槽位数组和招募循环在当前源码中固定为 6 格，因此自定义实现不能把这个属性当成数组长度。

## 何时使用 / 何时不要使用

- 想改变关系、战争、政策、繁荣、Perk 对招募槽位/概率的影响时，替换模型方法。
- 想自定义“招募动作”的扣钱、清空槽位或加入名册时，修改对应行为/Action 流程，而不是在模型里写回状态。
- 想改变兵种树上限时，调整 `MaxVolunteerTier`；不要用它改变 `Hero.VolunteerTypes` 的数组长度。
- 不要在模型中缓存英雄、据点或随机结果；模型是运行时规则对象，没有自己的存档同步边界。

## 依赖

| 类型/流程 | 关系 |
| --- | --- |
| [`Hero`](../../campaign/Hero) | 持有 6 个 `VolunteerTypes` 槽位；`Hero.CanHaveRecruits` 直接转发到模型。 |
| [`Settlement`](../../campaign/Settlement) / [`Town`](../../campaign/Town) | 提供卖方英雄所在地、领主派系、城镇繁荣和交易绑定城镇等概率输入。 |
| [`CharacterObject`](../../campaign/CharacterObject) | `GetBasicVolunteer` 返回的文化基础兵种，以及槽位实际存放的兵种对象。 |
| [`RecruitmentCampaignBehavior`](../RecruitmentCampaignBehavior) | 每日生成、升级、地图招募和个人招募的主要消费者；它负责清空槽位、支付金币和更新队伍。 |
| [`GarrisonRecruitmentCampaignBehavior`](../GarrisonRecruitmentCampaignBehavior) | 读取驻军可招募上限，筛选有兵的槽位并把志愿兵加入驻军。 |
| [`GameModels`](../GameModels) / [`Campaign`](../../campaign/Campaign) | 提供战役运行时已注册的模型实例。 |

## 公共契约

| 成员 | 用途、时机与副作用 |
| --- | --- |
| `MaxVolunteerTier` | 招募行为用它判断已有志愿兵是否仍可升级；它描述兵种 Tier 上限，不写入英雄。 |
| `MaximumIndexHeroCanRecruitFromHero` | 返回个人队伍可使用的槽位上界；消费者以 `index < result` 判断。可用 `useValueAsRelation` 覆盖默认关系读取。 |
| `MaximumIndexGarrisonCanRecruitFromHero` | 为据点驻军返回从某英雄取兵的槽位上界；不执行转移。 |
| `GetDailyVolunteerProductionProbability` | 返回指定槽位在每日 tick 中生成志愿兵的概率，通常由 `MBRandom.RandomFloat` 比较；不保证本次一定生成。 |
| `GetBasicVolunteer` | 返回卖方英雄的文化基础兵种；不把兵写进任何槽位。 |
| `CanHaveRecruits` | 返回英雄是否参加志愿兵生成/招募流程；`Hero.CanHaveRecruits` 直接使用它。 |

## 真实获取路径

```csharp
using System.Linq;
using TaleWorlds.CampaignSystem;
using TaleWorlds.CampaignSystem.ComponentInterfaces;
using TaleWorlds.CampaignSystem.Settlements;

Settlement settlement = Settlement.All
    .FirstOrDefault(candidate => candidate.IsTown && candidate.Notables.Count > 0);
Hero notable = settlement?.Notables.FirstOrDefault(hero => hero.IsAlive);

if (Campaign.Current != null && notable?.CurrentSettlement != null)
{
    VolunteerModel model = Campaign.Current.Models.VolunteerModel;
    int availableSlots = model.MaximumIndexHeroCanRecruitFromHero(
        Hero.MainHero, notable);
    CharacterObject baseTroop = model.GetBasicVolunteer(notable);
    float firstSlotProbability = model.GetDailyVolunteerProductionProbability(
        notable, 0, notable.CurrentSettlement);
}
```

自定义实现应在 Campaign 启动阶段通过 `CampaignGameStarter.AddModel` 注册。要真正招募，应让 `RecruitmentCampaignBehavior` 继续负责费用、`VolunteerTypes[index] = null` 和 `AddElementToMemberRoster` 等状态变更。

## 风险与版本边界

- 当前 `Hero.VolunteerTypes` 是长度为 6 的数组；模型返回超过 6 的槽位上界会让行为访问越界，返回负数则会改变循环和招募资格语义。
- 概率方法返回概率而不是兵种或数量；不要把 `0.7` 当成每日必定生成一个兵，也不要在模型中自己调用随机数后再让行为随机一次。
- `MaxVolunteerTier` 与 6 个槽位是两个维度；把 Tier 4 误读为“四格”会截断志愿兵队列。
- `GetBasicVolunteer` 和概率方法都假设英雄处在有效的 Campaign/Settlement 生命周期；读档加载、英雄死亡或脱离据点时不要无条件调用 vanilla 实现。
- 模型不负责支付招募成本、清空槽位或更新名册；把这些操作放进计算方法会造成重复招募和存档状态不一致。
- 本页契约以 1.4.5 调用点说明；具体政策、Perk 和职业判断应随目标游戏版本复核。

## 导航

- [上级：Campaign-Ext](..)
- [同级：Models 家族](../models/)
- [默认实现：DefaultVolunteerModel](../DefaultVolunteerModel)
- [相关：Hero](../../campaign/Hero) · [CharacterObject](../../campaign/CharacterObject)
- [消费端：RecruitmentCampaignBehavior](../RecruitmentCampaignBehavior) · [GarrisonRecruitmentCampaignBehavior](../GarrisonRecruitmentCampaignBehavior)
