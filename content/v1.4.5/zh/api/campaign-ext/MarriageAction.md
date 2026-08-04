---
title: "MarriageAction"
description: "提交经过 MarriageModel 认可的 Hero 婚姻，应用关系与恋爱状态，并协调 Clan、总督、军团和 party 状态。"
---
# MarriageAction

**命名空间:** `TaleWorlds.CampaignSystem.Actions`  
**模块:** `TaleWorlds.CampaignSystem`  
**类型:** `public static class MarriageAction`  
**基类:** 无（静态类）  
**源文件:** `bin/TaleWorlds.CampaignSystem/TaleWorlds.CampaignSystem.Actions/MarriageAction.cs`

## 一句话职责

把一对已经通过当前 `MarriageModel` 资格判断并被 romance、barter 或 Campaign owner 接受的真实 Hero 提交为夫妻，写入双向配偶和关系状态，结束求爱，并完成 Clan、总督、军团、party、home settlement、恋爱状态和事件通知所需的联动更新；它不负责预览或决定婚姻资格。

## 心智模型

`MarriageAction` 是战役层的**提交步骤**。当前 [MarriageModel](../../campaign/MarriageModel) 决定两人是否适合结婚、关系增加多少，以及婚后应由哪个 Clan 承担归属。`MarriageAction.Apply` 消费这些决定并立即改变世界；它不是求婚、预览、barter 接受或资格查询接口。

模型拒绝时，方法只输出诊断并返回，不改变任一 Hero。模型接受时，源码先双向写入 `Spouse`，再应用有效关系增量，计算婚后 Clan，随后发布 `CampaignEvents.BeforeHeroesMarried`，再处理 Clan 不同的 Hero。这个清理可能移除总督、脱离或解散军团、结束敌对行动、从 party roster 移除 Hero、将 Hero 变成 fugitive、解散领主 party、修改 Clan 并更新 home settlement。最后结束两人的 courtship，并用 [ChangeRomanticStateAction](../ChangeRomanticStateAction) 写入 `RomanceLevelEnum.Marriage`。

事件名含有 `Before`，但在 v1.4.5 中它是在**配偶与关系已经写入、Clan 清理和最终恋爱状态尚未完成**时派发。监听器必须使用参数中的 Hero，不能假设所有最终副作用已经结束。

只有在 romance、barter 或战役流程已取得活 Hero 并明确接受模型结果后才调用。不要直接设置 `Hero.Spouse`，也不要为了询问两人能否结婚而调用它。

## 依赖图

```text
Romance / barter / 战役 owner
  -> Campaign.Current.Models.MarriageModel
      -> MarriageAction.Apply(firstHero, secondHero, showNotification)
          -> Hero.Spouse 与 ChangeRelationAction
          -> CampaignEvents.BeforeHeroesMarried
          -> ChangeGovernor / DisbandArmy / MakeHeroFugitive / party 清理
          -> ChangeRomanticStateAction(Marriage)
```

**上游:** [MarriageModel](../../campaign/MarriageModel)、[Hero](../../campaign/Hero)、romance Behavior 和 [MarriageBarterable](../../campaign/MarriageBarterable) 流程提供配对与接受结果。  
**下游:** [CampaignEvents](../../campaign/CampaignEvents) 与 [CampaignEventDispatcher](../../campaign/CampaignEventDispatcher) 通知 Behavior；[Clan](../../campaign/Clan)、[MobileParty](../../campaign/MobileParty) 以及据点/总督系统消费归属和位置变化。  
**相关 Action:** [ChangeRelationAction](../ChangeRelationAction)、[ChangeRomanticStateAction](../ChangeRomanticStateAction)、[ChangeGovernorAction](../ChangeGovernorAction)、[DisbandArmyAction](../DisbandArmyAction)、[MakeHeroFugitiveAction](../MakeHeroFugitiveAction)。

## 关键入口与状态顺序

### `Apply`

```csharp
public static void Apply(Hero firstHero, Hero secondHero, bool showNotification = true)
```

`showNotification` 会传给 `OnBeforeHeroesMarried`；关系 Action 则以 `showQuickNotification: false` 调用。重要可观察顺序如下：

1. `MarriageModel.IsCoupleSuitableForMarriage` 先决定整个操作是否继续。
2. 双向写入 `Spouse`。
3. `ChangeRelationAction.ApplyRelationChangeBetweenHeroes` 应用模型计算的关系增量。
4. `MarriageModel.GetClanAfterMarriage` 选择目标 Clan；源码可能交换 Hero 参数顺序，使目标 Clan 一侧的 Hero 先处理。
5. 派发 `CampaignEvents.BeforeHeroesMarried`。
6. 对需要迁移的 Hero 执行 Clan 清理。
7. 结束 courtship，并通过 `ChangeRomanticStateAction.Apply` 写入婚姻恋爱状态。

## Model 与 Action 的边界

查询和构造求婚使用 Model，求婚/决定被接受后才调用 Action：

| 目标 | 正确边界 | 原因 |
| --- | --- | --- |
| 判断配对资格 | `Campaign.Current.Models.MarriageModel.IsCoupleSuitableForMarriage` | 不改变 Hero。 |
| 计算关系或目标 Clan | `GetEffectiveRelationIncrease` / `GetClanAfterMarriage` | 当前 Model 持有版本化规则。 |
| 提交已接受的婚姻 | `MarriageAction.Apply` | 执行完整状态与事件级联。 |
| 观察婚姻提交 | `CampaignEvents.BeforeHeroesMarried` | 是通知边界，不是第二个提交入口。 |

## 真实当前 Campaign 示例

### 从当前 Campaign 选择模型认可的配偶

原版战役从当前 romance/offer 流程取得 Hero。下面使用同样的活对象集合，并先询问当前 Model 再提交：

```csharp
using System.Linq;
using TaleWorlds.CampaignSystem;
using TaleWorlds.CampaignSystem.Actions;

public static void MarryMainHeroWithEligibleHero()
{
    if (Campaign.Current == null || Hero.MainHero == null)
        return;

    Hero partner = Hero.AllAliveHeroes.FirstOrDefault(hero =>
        hero != Hero.MainHero &&
        Campaign.Current.Models.MarriageModel.IsCoupleSuitableForMarriage(Hero.MainHero, hero));
    if (partner == null)
        return;

    MarriageAction.Apply(Hero.MainHero, partner, showNotification: false);
}
```

这是即时世界变更。真实 mod 应将它放在自己已经接受的任务、barter 或 decision 状态之后，不应把“第一个符合条件的人”直接当成面向玩家的求婚系统。

### 观察婚前清理阶段的事件

```csharp
using TaleWorlds.CampaignSystem;

private void RegisterEvents()
{
    CampaignEvents.BeforeHeroesMarried.AddNonSerializedListener(this, OnBeforeHeroesMarried);
}

private void OnBeforeHeroesMarried(Hero firstHero, Hero secondHero, bool showNotification)
{
    RememberMarriage(firstHero.StringId, secondHero.StringId, showNotification);
}
```

回调中读取传入的 Hero；不要假设 outgoing party、总督或最终 romance 清理已经完成。

## 风险与存档边界

- **Action 信任 Campaign 状态。** 它立即读取 `Campaign.Current.Models`，在模块加载、主菜单或 Campaign 销毁阶段调用可能在返回前失败。
- **不适合的配对是 no-op。** 如果 UI 或任务需要解释拒绝原因，应先询问当前 Model；不要把“调用返回”理解为接受成功。
- **Spouse 写入是耦合操作。** 只设置一方 `Spouse` 会跳过关系、courtship、恋爱状态、Clan 与 party 清理，可能在存档中留下不对称婚姻。
- **Clan 移动具有破坏性副作用。** Hero 跨 kingdom 语境移动时可能脱离军团；军团 leader 可能导致军团解散；领主 party 的 leader 可能进入 disband 路径。
- **总督和 party 引用可能在调用中失效。** 事件监听器应复制稳定 ID，在后续 tick 重新获取对象，不要继续把旧 party 或总督引用当作未改变。
- **事件时机不是最终状态时机。** `BeforeHeroesMarried` 在 spouse/关系写入后、Clan 协调和最终 romance 状态之前发出。不要从监听器对同一配对递归调用 `MarriageAction.Apply`。
- **存档边界:** 持久化稳定 Hero ID 和自己的已接受 decision 状态，不要序列化临时配对引用，也不要假设保存事件监听器会由 `SyncData` 恢复。

## 导航

- **父级:** [Campaign extension API](../) · [Campaign system](../../campaign/)
- **同级:** [ChangeRelationAction](../ChangeRelationAction) · [ChangeRomanticStateAction](../ChangeRomanticStateAction) · [ChangeKingdomAction](../ChangeKingdomAction)
- **相关实体:** [Hero](../../campaign/Hero) · [Clan](../../campaign/Clan) · [MobileParty](../../campaign/MobileParty) · [MarriageModel](../../campaign/MarriageModel)
- **事件与清理:** [CampaignEvents](../../campaign/CampaignEvents) · [ChangeGovernorAction](../ChangeGovernorAction) · [DisbandArmyAction](../DisbandArmyAction) · [MakeHeroFugitiveAction](../MakeHeroFugitiveAction)
