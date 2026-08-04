---
title: "DefaultVolunteerModel"
description: "Bannerlord 默认志愿兵槽位、关系/派系修正、繁荣概率、文化基础兵种与招募资格规则。"
---
# DefaultVolunteerModel

**Namespace:** `TaleWorlds.CampaignSystem.GameComponents`  
**Module:** `TaleWorlds.CampaignSystem`  
**Type:** `public class DefaultVolunteerModel : VolunteerModel`  
**Base:** [`VolunteerModel`](../VolunteerModel)  
**Source:** `TaleWorlds.CampaignSystem/GameComponents/DefaultVolunteerModel.cs`（1.4.5 权威实现）

## 一句话职责

`DefaultVolunteerModel` 将关系、同阵营/战争状态、难度、英雄职业、政策、领地繁荣、骑术 Perk 和文化兵种规则组合成默认志愿兵可见槽位与每日生成规则。

## 心智模型

默认实现有两条独立链：第一条决定“买家能看到/使用到卖家哪几个槽位”，第二条决定“卖家的每个空槽今天是否生成或升级”。个人招募与驻军招募共用槽位数组，但个人招募会额外考虑买家与卖家的关系和战争状态；驻军路径只用 `settlement.Owner` 作为买家。

六个志愿兵槽位的索引是 `0..5`。`MaxVolunteerTier` 返回 `4`，由每日升级逻辑用于阻止兵种 Tier 达到上限后继续升级；它不是槽位上限。所有槽位上界在默认实现中最终都被限制到 `6`。

## 依赖与消费链

| 类型/流程 | 关系 |
| --- | --- |
| [`VolunteerModel`](../VolunteerModel) / [`GameModels`](../GameModels) | 定义契约并在 Campaign 启动后提供当前实现。 |
| [`Hero`](../../campaign/Hero) / [`Settlement`](../../campaign/Settlement) | 提供关系、派系、所在地、繁荣和志愿兵槽位输入。 |
| [`RecruitmentCampaignBehavior`](../RecruitmentCampaignBehavior) | 每日消费概率与 Tier 上限，并负责槽位写回、费用和队伍名册。 |
| [`GarrisonRecruitmentCampaignBehavior`](../GarrisonRecruitmentCampaignBehavior) | 消费驻军上界并把选中的志愿兵加入驻军。 |

## 默认规则

| 成员/阶段 | 1.4.5 默认行为 |
| --- | --- |
| `MaxVolunteerTier` | 固定为 `4`。 |
| 基础槽位上界 | 以 `1` 为基础；玩家买家叠加 `DifficultyModel.GetPlayerRecruitSlotBonus`；满足同族领主与 `OneOfTheFamily` 时还可加成，结果限制在 `0..6`。 |
| 个人关系修正 | 关系 `<0` 为 `-1`；`5/10/20/40/60/80/100` 分段逐步增加到 `7`；同阵营加 `1`；非主角买家加 `1`；战争通常扣除 `1` 或 `2`，但小势力英雄从村庄提供兵时免除该战争扣减。 |
| 个人 Perk 修正 | 商人、同文化、农村/城市名人和工程师相关的买家 Perk 可增加槽位；最终仍 `Min(6, ...)`。 |
| 驻军上界 | `MaximumIndexGarrisonCanRecruitFromHero` 使用据点所有者作为买家，复用基础上界逻辑，不执行招募。 |
| 生成概率 | 以 `0.7` 为基础；先按英雄所属派系的领地繁荣和村庄数量计算低于 46 时的补偿，再计算 `0.75 * Clamp(num^(index+1), 0, 1)`。`Cantons` 政策增加 `20%` 因子；有效的坐骑槽位在相应城镇有 `CavalryTactics` 时再加 Perk 因子。 |
| 基础兵种 | 农村名人且其村庄绑定城堡时返回文化的 `EliteBasicTroop`，否则返回文化的 `BasicTroop`。 |
| 招募资格 | `Occupation.Mercenary` 或源码职业枚举连续区间内的六种职业返回 `true`，其他职业返回 `false`。 |

## 成员说明与调用时机

| 成员 | 具体用途 |
| --- | --- |
| `MaximumIndexHeroCanRecruitFromHero` | UI 和地图招募行为用买家、卖家、关系和派系关系计算可用槽位上界；`useValueAsRelation < -100` 时读取真实关系，否则使用调用者传入值。 |
| `MaximumIndexGarrisonCanRecruitFromHero` | 驻军每日刷新时把 `settlement.Owner` 传给共享内部计算；返回的是循环上界，不会扣钱或清空槽位。 |
| `GetDailyVolunteerProductionProbability` | `RecruitmentCampaignBehavior` 对 `i=0..5` 的每个槽位做随机比较；成功后才把基础兵种填入空槽或尝试升级已有兵。 |
| `GetBasicVolunteer` | 只选择 `CharacterObject`；村庄绑定城堡的农村名人得到精英基础兵，其余得到文化基础兵。 |
| `CanHaveRecruits` | `Hero.CanHaveRecruits` 和每日招募筛选使用它；它只检查职业，不替代 `IsAlive`、所在地和槽位内容检查。 |

## 真实消费链示例

```csharp
using System.Linq;
using TaleWorlds.CampaignSystem;
using TaleWorlds.CampaignSystem.Settlements;

Settlement settlement = Settlement.All
    .FirstOrDefault(candidate => candidate.IsTown && candidate.Notables.Count > 0);
Hero notable = settlement?.Notables.FirstOrDefault(hero =>
    hero.IsAlive && hero.CanHaveRecruits);

if (Campaign.Current != null && notable?.CurrentSettlement != null)
{
    int slotsForPlayer = Campaign.Current.Models.VolunteerModel
        .MaximumIndexHeroCanRecruitFromHero(Hero.MainHero, notable);
    CharacterObject basicTroop = Campaign.Current.Models.VolunteerModel
        .GetBasicVolunteer(notable);
    float chance = Campaign.Current.Models.VolunteerModel
        .GetDailyVolunteerProductionProbability(notable, 0, notable.CurrentSettlement);
}
```

实际招募仍由 `RecruitmentCampaignBehavior` 完成：它把志愿兵从 `VolunteerTypes` 槽位移除，向队伍名册加入兵，并通过招募流程扣除费用。若是驻军，`GarrisonRecruitmentCampaignBehavior` 会按工资排序后把选中的槽位加入 `GarrisonParty`。

## 替换实现入口

```csharp
if (gameStarter is CampaignGameStarter campaignStarter)
{
    campaignStarter.AddModel(new MyVolunteerModel());
}
```

自定义模型应保留 6 槽位的数组契约、概率值的 `[0, 1]` 语义和 `MaxVolunteerTier` 的 Tier 语义；如果要改变实际招募费用或名册写回，应改对应行为/PartyWageModel，而不是把副作用塞进这里。

## 风险与版本边界

- `GetDailyVolunteerProductionProbability` 的默认代码直接访问 `hero.CurrentSettlement.MapFaction.Fiefs`，因此英雄没有有效所在地时可能空引用；调用前应确认 Campaign 和 settlement 生命周期。
- `hero.VolunteerTypes[index]` 要求 `index` 落在 6 个槽位内。`RecruitmentCampaignBehavior` 当前按 `0..5` 调用，模型不要返回或接受另一个数组长度假设。
- 个人招募的关系和战争修正会改变可见槽位，而不是改变每个槽位的兵种 Tier；不要把两条规则混成一个数值。
- `MaxVolunteerTier=4` 只控制升级阶段。把它设为 6 并不会扩大 `VolunteerTypes`，却可能允许不同的升级链长期写入更高 Tier 兵种。
- 默认方法返回 `CharacterObject`、概率或上界，不负责 `GiveGoldAction`、名册写回或事件广播；重复执行这些操作会产生重复招募、费用错误和存档不一致。
- 政策、Perk、职业枚举和繁荣阈值是默认实现细节，不应未经目标版本源码确认就承诺跨版本完全相同。

## 导航

- [接口契约：VolunteerModel](../VolunteerModel)
- [上级：Campaign-Ext](..)
- [同级：Models 家族](../models/)
- [相关：Hero](../../campaign/Hero) · [CharacterObject](../../campaign/CharacterObject)
- [消费端：RecruitmentCampaignBehavior](../RecruitmentCampaignBehavior) · [GarrisonRecruitmentCampaignBehavior](../GarrisonRecruitmentCampaignBehavior)
