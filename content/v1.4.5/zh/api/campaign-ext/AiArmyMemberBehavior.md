---
title: "AiArmyMemberBehavior"
description: "军团成员 AI 行为：让非领袖的军团成员在每小时思考时为「护送军团领袖」打分，并让被围城的领主部队原地驻守。"
---
# AiArmyMemberBehavior

**命名空间：** `TaleWorlds.CampaignSystem.CampaignBehaviors.AiBehaviors`
**模块：** `TaleWorlds.CampaignSystem`
**类型：** `public class AiArmyMemberBehavior : CampaignBehaviorBase`
**源文件：** `bin/TaleWorlds.CampaignSystem/TaleWorlds.CampaignSystem.CampaignBehaviors.AiBehaviors/AiArmyMemberBehavior.cs`（97 行）

## 概述

`AiArmyMemberBehavior` 是军团（Army）系统的「跟随者」AI：当一支部队隶属于某个军团但不是领袖时，它负责在 AI 思考阶段给「护送军团领袖」这个行为打分，让成员跟上领袖而不是各自乱跑。它只做打分与少量状态约束（围城开始时让领主部队驻守），真正的「选最高分行为并执行」由 `AiPartyThinkBehavior` 完成。它属于 `CampaignBehaviorBase` 家族，由引擎在战役初始化时自动注册，mod 通常通过 `CampaignEvents.AiHourlyTickEvent` 与同一套打分机制交互，而不是直接调用它。

## 心智模型

把 AI 决策想成一场**招标**：每个 AI 行为都是投标人，在思考阶段往一个「标书袋」里塞进「我建议做什么 + 我给这个方案打多少分」，最后由裁判挑出最高分执行。`AiArmyMemberBehavior` 就是其中一个投标人，而 `PartyThinkParams` 就是那个标书袋。

- **`PartyThinkParams`（标书袋 / 输入输出袋）**——`AiPartyThinkBehavior.PartyHourlyAiTick` 在每次思考时先 `Reset` 它，然后把它作为参数广播给所有订阅者；每个订阅者调用 `p.AddBehaviorScore((AIBehaviorData, float))` 塞入自己的方案与分数；广播结束后裁判遍历 `p.AIBehaviorScores` 取最高分。它同时携带上下文（`MobilePartyOf`、`CurrentObjectiveValue`、`StrengthOfLordsWithArmy` 等），所以它既是输入（告诉你为谁思考、周边兵力如何）也是输出（你往里写分数）。
- **`AIBehaviorData`（方案描述）**——一个 `struct`，描述「去哪个 `IMapPoint`、执行哪个 `AiBehavior`、走 `NavigationType` 哪种路线、是否集结军团、是否从港口出发、是否以港口为目标」。它实现了 `IEquatable`，所以同一方案可以在袋子里被去重与改分。
- **`AiBehavior`（动作枚举）**——`Hold` / `EscortParty` / `GoToSettlement` / `BesiegeSettlement` 等。本行为只产出 `AiBehavior.EscortParty`。
- **「每小时」的含义**——`AiHourlyTickEvent` 是**部分小时 tick**（`TickPartialHourlyAiEvent`）驱动的：`AiPartyThinkBehavior` 默认每 6 小时才真正思考一次（`DefaultThinkingPeriodInHours = 6`），在领袖/过渡/需要重想等情况下缩短到 1 或 3 小时。所以「hourly」指的是它挂在小时级时钟上，而不是每支部队每个小时都必然重算。

`AiArmyMemberBehavior` 的打分规则很直接：先判断自己该不该跟（不是领袖、不是独立军团领袖、领袖不在围城中导致自己无法靠岸等，否则直接返回）；然后用 `AiHelper` 求出到领袖的最优导航类型与距离；有可行导航时，基础分是 `FollowingArmyLeaderMaxScore`（20），如果部队粮食或规模比例偏低就降到 `FollowingArmyLeaderMinScore`（10），再按距离比例乘一个 1~2 的系数并夹在 [10, 20]；没有可行导航时，塞一个极低的 `ArmyLeaderIsUnreachableScore`（0.02475）来「占位」——分数低到基本不会被选中，但仍表达「我想去领袖那里」的意图。

它还有一条不通过打分实现的约束：`OnSiegeEventStarted` 在围城开始时，把被围定居点里所有领主部队的移动模式设为 `Hold`，防止它们在自己被围时还往外跑。

## 怎么用

### 怎么拿到

- **源树路径：** `bin/TaleWorlds.CampaignSystem/TaleWorlds.CampaignSystem.CampaignBehaviors.AiBehaviors/AiArmyMemberBehavior.cs`（97 行）
- **声明处：** `AiArmyMemberBehavior.cs:8`（类声明）、`AiArmyMemberBehavior.cs:16`（`RegisterEvents`）、`AiArmyMemberBehavior.cs:37`（`AiHourlyTick`）
- **运行时入口：** 引擎自动创建并注册；mod 侧取实例用 `Campaign.Current.GetCampaignBehavior<AiArmyMemberBehavior>()`，但真正可用的是它订阅的同一个事件 `CampaignEvents.AiHourlyTickEvent`。

```csharp
AiArmyMemberBehavior armyMemberAi = Campaign.Current.GetCampaignBehavior<AiArmyMemberBehavior>();
// 更常见的做法是订阅同一个事件，加入自己的打分：
CampaignEvents.AiHourlyTickEvent.AddNonSerializedListener(this, OnAiHourlyTick);
```

### 典型用法

- **给 AI 增加一种行为：** 订阅 `CampaignEvents.AiHourlyTickEvent`，在回调里检查 `mobileParty` 是否符合你的条件，然后用 `new AIBehaviorData(...)` + `p.AddBehaviorScore((data, score))` 投标。分数是相对的——参照本行为的 10~20 区间来决定你的量级。
- **覆盖/修正军团跟随：** 若你只想调整跟随强度，可以在自己的回调里用 `p.SetBehaviorScore(in data, score)` 改写已存在的同一方案分数（注意：方案未存在时 `SetBehaviorScore` 会 `Debug.FailedAssert`，所以先 `TryGetBehaviorScore`）。
- **读取当前思考上下文：** `p.MobilePartyOf`、`p.StrengthOfLordsWithArmy`、`p.StrengthOfLordsWithoutArmy`、`p.CurrentObjectiveValue` 都是只读信息，可用于让打分依赖周边兵力对比。
- **监听围城开始：** 需要让部队在围城时改变移动方式，可订阅 `CampaignEvents.OnSiegeEventStartedEvent`，做法参照 `OnSiegeEventStarted`（`:26`）。
- **复用导航计算：** `AiHelper.GetBestNavigationTypeAndAdjustedDistanceOfSettlementForMobileParty` 与 `AiHelper.GetBestNavigationTypeAndDistanceOfMobilePartyForMobileParty` 是求「到目标最优路径」的现成工具，本行为正是用它们算距离。

### 坑

- **`RegisterEvents` 用 `AddNonSerializedListener`。** 监听器不写入存档，读档时引擎会重新调用 `RegisterEvents`；不要把注册放进构造函数。
- **`SyncData` 是空实现。** 本行为不保存任何状态，所有信息都在每次 tick 时重算。如果你在自己的行为里引入了需要跨存档的状态，必须在 `SyncData` 里同步。
- **返回条件很多，别以为它总会打分。** `AiHourlyTick`（`:37`）在 `mobileParty.Army == null`、自己是领袖、或领袖正处于无法靠岸的围城状态时直接返回；军团成员 AI 只在「确实有一个需要跟的领袖」时才投标。
- **分数不是概率，是相对值。** `AddBehaviorScore` 只是把 `(AIBehaviorData, float)` 追加进袋子，最终由 `AiPartyThinkBehavior` 取最大值；给 5 分在别人给 20 分时几乎等于放弃。
- **`AIBehaviorData` 相等性参与去重。** `TryGetBehaviorScore` / `SetBehaviorScore` 用 `Equals` 匹配方案（`AIBehaviorData.cs:56`），所以「同一个目标 + 同一个 `AiBehavior` + 同样的导航/港口标志」才算同一方案；只改一个标志就会变成另一个方案。
- **不要每 tick 塞重复方案。** 同一个方案重复 `AddBehaviorScore` 会让袋子里出现多条同方案记录，裁判取最大值时行为等价但袋子会膨胀；需要覆盖分数时用 `SetBehaviorScore`。

## 关键成员

### RegisterEvents
`public override void RegisterEvents()`（`AiArmyMemberBehavior.cs:16`）

生命周期契约点：把 `AiHourlyTick` 挂到 `CampaignEvents.AiHourlyTickEvent`、把 `OnSiegeEventStarted` 挂到 `CampaignEvents.OnSiegeEventStartedEvent`，都用 `AddNonSerializedListener`。

### SyncData
`public override void SyncData(IDataStore dataStore)`（`AiArmyMemberBehavior.cs:22`）

生命周期契约点：空实现——本行为不持有需要存档的状态，不读也不写 `IDataStore`。

### AiHourlyTick
`public void AiHourlyTick(MobileParty mobileParty, PartyThinkParams p)`（`AiArmyMemberBehavior.cs:37`）

本行为的核心：为「护送军团领袖」投标。先做资格与围城例外判断，再用 `AiHelper` 求到领袖的最优导航与距离，最后按距离/补给/规模给 `AiBehavior.EscortParty` 打分并 `p.AddBehaviorScore(...)`；无可行导航时给 `ArmyLeaderIsUnreachableScore` 占位。

### OnSiegeEventStarted
`private void OnSiegeEventStarted(SiegeEvent siegeEvent)`（`AiArmyMemberBehavior.cs:26`）

围城开始回调：遍历 `siegeEvent.BesiegedSettlement.Parties`，对其中所有 `IsLordParty` 的部队调用 `SetMoveModeHold()`，让它们在被围期间原地驻守。

### FollowingArmyLeaderMaxScore
`private float FollowingArmyLeaderMaxScore => 20f`（`AiArmyMemberBehavior.cs:10`）

跟随军团领袖的上限分（20），作为基础分与夹取上界。

### FollowingArmyLeaderMinScore
`private float FollowingArmyLeaderMinScore => FollowingArmyLeaderMaxScore * 0.5f`（`AiArmyMemberBehavior.cs:12`）

跟随军团领袖的下限分（10）；补给不足或部队规模比例偏低时用它替换基础分，也作为最终夹取下界。

### ArmyLeaderIsUnreachableScore
`private float ArmyLeaderIsUnreachableScore => 0.02475f`（`AiArmyMemberBehavior.cs:14`）

无法到达领袖时的占位分（约 0.02475），低到基本不会被裁判选中，只表达意图。

## 真实示例

```csharp
// 订阅与 AiArmyMemberBehavior 相同的事件，为「跟随某支友军」投标。
public class MyEscortAllyBehavior : CampaignBehaviorBase
{
    public override void RegisterEvents()
    {
        CampaignEvents.AiHourlyTickEvent.AddNonSerializedListener(this, OnAiHourlyTick);
    }

    public override void SyncData(IDataStore dataStore) { }

    private void OnAiHourlyTick(MobileParty mobileParty, PartyThinkParams p)
    {
        if (mobileParty.Army == null || mobileParty.AttachedTo == null)
        {
            return;
        }

        MobileParty leader = mobileParty.Army.LeaderParty;
        var plan = new AIBehaviorData(
            leader,
            AiBehavior.EscortParty,
            mobileParty.NavigationCapability,
            willGatherArmy: false,
            isFromPort: false,
            isTargetingPort: false);

        // 先查再改，避免 SetBehaviorScore 在方案不存在时断言失败。
        if (p.TryGetBehaviorScore(in plan, out float existing))
        {
            p.SetBehaviorScore(in plan, existing + 5f);
        }
        else
        {
            p.AddBehaviorScore((plan, 5f));
        }
    }
}
```

## 参见

- [CampaignBehaviorBase](../CampaignBehaviorBase)
- [AiBehavior](../AiBehavior)
- [PartyThinkParams](../PartyThinkParams)
- [CampaignEvents](../CampaignEvents)
- [AgingCampaignBehavior](../AgingCampaignBehavior)

## 导航

- [本区域目录](../)
