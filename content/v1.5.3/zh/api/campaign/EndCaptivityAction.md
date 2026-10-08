---
title: "EndCaptivityAction"
description: "战役层的静态 Action：用 8 个语义化入口让一名被囚禁的 Hero 结束囚禁——赎金、和平、逃跑、死亡、主动释放或补偿释放。"
---

# EndCaptivityAction

**命名空间：** `TaleWorlds.CampaignSystem.Actions`
**Type:** `public static class EndCaptivityAction`
**Source:** `TaleWorlds.CampaignSystem/Actions/EndCaptivityAction.cs`

## 概述

EndCaptivityAction 是 `TaleWorlds.CampaignSystem.Actions` 命名空间下的静态 Action 类，负责把一名处于被囚禁状态的 `Hero` 从囚禁里带出来。它的公开面由 8 个语义化入口组成，分别对应战后释放、赎金、和平、逃跑、死亡、按名册批量主动释放、单个主动释放、补偿释放；每个入口只是把对应的 `EndCaptivityDetail` 枚举值，连同可选的 facilitator，一起交给 `ApplyInternal`。

真正的世界状态变更集中在 private 的 `ApplyInternal`：它先读取 `prisoner.PartyBelongedToAsPrisoner` 以及该 party 的 `MapFaction`。当被囚禁者是 `Hero.MainHero` 时走 `PlayerCaptivity.EndCaptivity()` 分支，并按关押方类型处理主队的登船或离船位置；其余英雄则从关押方的 `PrisonRoster` 里移除，再按传入的 `detail` 决定是否把 `Hero.CharacterStates` 切到 `Released`、是否调用 `MakeHeroFugitiveAction`，最后派发 `OnHeroPrisonerReleased`。

因此「结束囚禁」不是一次字段赋值，而是一条包含多个分支的状态机：谁被关着、关押方是聚落还是移动队伍、detail 是哪一个、是否主角，都会影响最终走到哪条路径。这个类把这些分支全部收进一个内部方法，对外只暴露按原因命名的入口。

## 心智模型

Action 模式的统一形态在这里体现得最完整：八个语义化入口 → 一个 `ApplyInternal`。每个公开方法的名字就是它的语义，方法体几乎只有一行，把 `EndCaptivityDetail` 与 facilitator 传给内部实现；内部实现才是唯一改状态、唯一派发事件的地方。所以读这个类的正确顺序是：先列出 8 个入口，再从 `ApplyInternal` 的分支结构反推每个 `detail` 会走到哪条路径，最后看 `OnHeroPrisonerReleased` 带出去的是哪个 detail。

入口与 detail 的对应关系是这张表的核心：`ApplyByReleasedAfterBattle` 写 `ReleasedAfterBattle`，`ApplyByRansom` 写 `Ransom`，`ApplyByPeace` 写 `ReleasedAfterPeace`，`ApplyByEscape` 写 `ReleasedAfterEscape`，`ApplyByDeath` 写 `Death`，两个 `ApplyByReleasedByChoice` 重载都写 `ReleasedByChoice`，`ApplyByReleasedByCompensation` 写 `ReleasedByCompensation`。选错入口，写入的 detail 就错，`OnHeroPrisonerReleased` 的订阅方会拿到错误的原因。这也是 mod 应该用语义化入口、而不是自己去拼 detail 的原因。

两个 `ApplyByReleasedByChoice` 重载的差别值得单独记：收 `FlattenedTroopRoster` 的重载会遍历名册，只对其中 `Troop.IsHero` 为真的元素逐个调用 `ApplyInternal(..., ReleasedByChoice, null, true)`，然后额外派发 `OnPrisonerReleased(troopRoster)`；收单个 `Hero` 的重载只处理这一个英雄，不派发名册级事件。也就是说，只有批量重载会带上名册级事件。

还有三处细节需要照抄源码：`ApplyInternal` 的第三个参数在源码里拼作 `facilitatior`，照抄不要「修正」；`ApplyByEscape` 是本类唯一把 `showNotification` 透传到公开签名的入口，其余入口内部固定传 `true`；非主角英雄在 `Death` 分支里不会走到 `OnHeroPrisonerReleased` 的派发，而主角分支在派发之后直接返回。

## 怎么用

### 怎么拿到它
静态类，没有实例也没有单例字段。直接按原因调用对应的入口，例如 `EndCaptivityAction.ApplyByRansom(character, facilitator)`。

### 典型用法
- 会战结束后释放被俘英雄：`ApplyByReleasedAfterBattle(character)`。
- 家族或领主支付赎金换人：`ApplyByRansom(character, facilitator)`。
- 两国议和时归还俘虏：`ApplyByPeace(character, facilitator)`。
- 玩家成功越狱，并希望关掉通知：`ApplyByEscape(character, facilitator, false)`。
- 处决、病死或战死导致囚禁终止：`ApplyByDeath(character)`。
- 玩家在对话里主动放人：单个用 `ApplyByReleasedByChoice(character, facilitator)`，一整份名册用 `ApplyByReleasedByChoice(troopRoster)`。
- 以补偿方式放人：`ApplyByReleasedByCompensation(character)`。

### 最容易踩的坑
- 8 个入口写入的 `EndCaptivityDetail` 各不相同，`OnHeroPrisonerReleased` 的订阅方按这个值区分原因，入口选错就等于原因报错。
- `ApplyByReleasedByChoice` 有两个重载，参数类型不同；批量重载会额外派发 `OnPrisonerReleased(troopRoster)`，单个重载不会。
- `ApplyInternal` 的 facilitator 参数在源码里拼作 `facilitatior`，照抄这个名字，不要按常见拼写改写。
- `showNotification` 只在 `ApplyByEscape` 的公开签名里暴露，其余入口内部固定传 `true`。
- `ApplyByDeath` 走的是 `Death` 分支；非主角英雄不会走到 `OnHeroPrisonerReleased` 的派发。
- 主角被囚禁时 `ApplyInternal` 走的是 `PlayerCaptivity.EndCaptivity()` 分支，与其它英雄的名册移除路径不是同一段代码。

## 关键成员

- **EndCaptivityAction**（`EndCaptivityAction.cs:12`）— 静态类本体，命名空间 `TaleWorlds.CampaignSystem.Actions`；公开面是 8 个语义化入口，没有构造函数或字段。
- **ApplyInternal**（`EndCaptivityAction.cs:15`）— private；本类唯一改状态与派发事件的地方，签名 `(Hero prisoner, EndCaptivityDetail detail, Hero facilitatior = null, bool showNotification = true)`；主角走 `PlayerCaptivity.EndCaptivity()` 分支并处理主队位置，其余英雄走 `PrisonRoster` 移除、可选 `MakeHeroFugitiveAction` 与 `OnHeroPrisonerReleased` 派发。
- **ApplyByReleasedAfterBattle**（`EndCaptivityAction.cs:70`）— 战后释放入口，写入 `EndCaptivityDetail.ReleasedAfterBattle`，facilitator 传 null，showNotification 传 true。
- **ApplyByRansom**（`EndCaptivityAction.cs:76`）— 赎金释放入口，写入 `Ransom`，并把调用方给出的 facilitator 传下去。
- **ApplyByPeace**（`EndCaptivityAction.cs:82`）— 和平释放入口，写入 `ReleasedAfterPeace`，facilitator 有默认值 null。
- **ApplyByEscape**（`EndCaptivityAction.cs:88`）— 逃跑入口，写入 `ReleasedAfterEscape`，并把调用方的 `showNotification` 透传下去。
- **ApplyByDeath**（`EndCaptivityAction.cs:94`）— 死亡入口，写入 `Death`，facilitator 传 null，showNotification 传 true。
- **ApplyByReleasedByChoice**（`EndCaptivityAction.cs:100`）— 收 `FlattenedTroopRoster` 的批量重载：遍历名册，对其中 `Troop.IsHero` 为真的元素逐个调用 `ApplyInternal(..., ReleasedByChoice, null, true)`，遍历结束后派发 `OnPrisonerReleased(troopRoster)`。
- **ApplyByReleasedByChoice**（`EndCaptivityAction.cs:113`）— 收单个 `Hero` 的重载，写入 `ReleasedByChoice` 并接受 facilitator；不派发名册级事件。
- **ApplyByReleasedByCompensation**（`EndCaptivityAction.cs:119`）— 补偿释放入口，写入 `ReleasedByCompensation`，facilitator 传 null，showNotification 传 true。

## 真实示例

```csharp
// 战役进行中，按场景把一名被囚禁的英雄放出来。
// 两个分支都只走语义化入口，detail 由入口自己写入。
public static void EndCaptivityFor(Hero character, bool byRansom)
{
    if (Campaign.Current == null)
    {
        return;
    }

    if (byRansom)
    {
        EndCaptivityAction.ApplyByRansom(character, Hero.MainHero);
        return;
    }

    EndCaptivityAction.ApplyByReleasedByChoice(character, Hero.MainHero);
}
```

```csharp
// 越狱时不弹通知
EndCaptivityAction.ApplyByEscape(Hero.MainHero, null, false);
```

## 参见

- ↔ [TransferPrisonerAction](../TransferPrisonerAction) — 把被俘兵种在关押方之间转移的入口，本页负责的是「结束囚禁」。
- ↔ [TakePrisonerAction](../TakePrisonerAction) — 把 `Hero` 变成俘虏的入口，与本页方向相反。
- ↔ [Campaign](../Campaign) — 战役单例，示例里的启动检查用到 `Campaign.Current`。
- ↔ [CampaignEventDispatcher](../CampaignEventDispatcher) — `ApplyInternal` 通过它派发 `OnHeroPrisonerReleased` 与 `OnPrisonerReleased`。

## 导航

- ↑ [API 参考](../../) —— 本版本 API 层入口：按任务找页的路径表
- ↑ [v1.5.3 首页](../../../) —— 19 个桶的完整缺口表与覆盖现状
- ↔ [模块地图](../../../architecture/module-map) —— 确认某个类型属于哪一桶
