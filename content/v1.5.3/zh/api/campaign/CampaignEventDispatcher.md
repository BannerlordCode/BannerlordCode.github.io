---
title: "CampaignEventDispatcher"
description: "战役事件的广播中转站：把 CampaignEvents 上的每一次 Invoke 再分发给全部 CampaignEventReceiver，是 override 路线与静态事件路线汇合的唯一位置。"
---

# CampaignEventDispatcher

**Namespace:** TaleWorlds.CampaignSystem
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class CampaignEventDispatcher : CampaignEventReceiver`
**Base:** `CampaignEventReceiver`
**Source:** `bannerlord-1.5.3/TaleWorlds.CampaignSystem/CampaignEventDispatcher.cs`

## 概述

`CampaignEventDispatcher` 是一个**一对多的广播器**，本身不持有世界状态，也不做业务判断。它持有一个 `CampaignEventReceiver[]` 数组，把每一次原生回调（`Tick`、`DailyTick`、`OnHeroKilled`、`OnSettlementEntered`……约 280 个）无差别地转发给数组里的每一个接收者。它自己继承 `CampaignEventReceiver`，所以它**同时也是别人的一个接收者**——`CampaignEventDispatcher.Instance.OnHeroKilled(...)` 这样的调用出现在大量原生代码里，那些调用正是通过它分发出去的。

## 心智模型

三个关键点：

1. **获取方式**：`static CampaignEventDispatcher Instance => Campaign.Current.CampaignEventDispatcher`（`Campaign.Current == null` 时返回 `null`）。**不要缓存**这个引用——读档会重建战役。
2. **接收者数组**：`internal CampaignEventDispatcher(IEnumerable<CampaignEventReceiver> eventReceivers)` 在构造时 `ToArray()` 固化。`Campaign.AddCampaignEventReceiver(receiver)` 会追加一个新数组（不是原地 add，注意它会重建数组）。
3. **广播语义**：每个转发方法都是同一个形状——`foreach (var r in this._eventReceivers) r.OnXxx(args);` 没有 try/catch、没有优先级、没有「已处理则停止」。

时间上它由 [Campaign](../Campaign) 的 `Tick()` 每帧调用一次 `Tick(float dt)`，每日/每小时的回调则由 `Campaign.DailyTick` / `HourlyTick` 触发。

**常见误用与坑**

1. **把 `Instance` 缓存进静态字段**：读档后指向旧战役，调用时报「对象不属于当前战役」或静默无响应。
2. **在广播链里改接收者数组**：`AddCampaignEventReceiver` 会替换数组，若在某个接收者的回调里调用，后续遍历用的是新数组（当前方法的局部变量仍指向旧数组），行为不确定。注册要在战役启动期完成。
3. **异常穿透**：接收者抛异常会中断本轮广播，后面的接收者收不到回调。生产环境必须自己 try/catch。
4. **误以为分发器是「事件源」**：它不产生事件，`CampaignEvents.XxxEvent.Invoke()` 才产生。你调用 `Instance.OnHeroKilled(...)` 是**手动广播**，会重复触发所有接收者。

## 成员与调用时机

**静态入口**

- `static CampaignEventDispatcher Instance`：当前战役的广播器。未加载战役为 `null`。
- `void RemoveListeners(object o)`：把宿主对象 `o` 从所有接收者里摘掉。给需要精确解绑的模块用；由 [CampaignBehaviorManager](../../campaign-ext/CampaignBehaviorManager) 的 `RemoveBehavior<T>()` 调用。

**继承自 `CampaignEventReceiver` 的转发方法（约 280 个）**

覆盖全部语义回调，典型分组：

- 周期：`Tick(float dt)`、`MissionTick(float dt)`、`HourlyTick()`、`QuarterHourlyTick()`、`DailyTick()`、`WeeklyTick()`、`HourlyTickParty/Settlement/Clan`、`TickPartialHourlyAi(MobileParty)`。
- 英雄：`OnHeroCreated`、`OnHeroLevelledUp`、`OnHeroGainedSkill`、`OnHeroWounded`、`OnHeroRelationChanged`、`OnHeroKilled`、`OnBeforeHeroKilled`、`OnHeroPrisonerTaken/Released`、`OnHeroComesOfAge`。
- 队伍与军队：`OnArmyCreated/Gathered/Dispersed`、`OnMobilePartyCreated/Destroyed`、`OnBanditPartyRecruited`、`OnHeroJoinedParty`、`OnItemsLooted`、`OnLootDistributedToParty`。
- 聚落：`OnBeforeSettlementEntered`、`OnSettlementEntered`、`OnAfterSettlementEntered`、`OnVillageStateChanged`、`OnMercenaryNumberChangedInTown`、`OnAlleyOwnerChanged`。
- 家族与王国：`OnClanTierChanged`、`OnClanDefected`、`OnClanChangedKingdom`、`OnKingdomDecisionConcluded`、`OnWarDeclared`。
- 会话与存档：`OnSessionStart(CampaignGameStarter)`、`OnAfterSessionStart`、`OnNewGameCreated`、`OnGameEarlyLoaded`、`OnGameLoaded`、`OnBeforeSave`。

**内部维护**

- `internal CampaignEventDispatcher(IEnumerable<CampaignEventReceiver> eventReceivers)`：构造时固化数组。
- `internal void AddCampaignEventReceiver(CampaignEventReceiver receiver)`：新增一个接收者（`Campaign.AddCampaignEventReceiver` 转发到它）。

## 真实示例

```csharp
// 手动广播一个自定义语义的等价写法：包一层异常保护，避免一个 mod 崩掉整条链
private static void SafeBroadcast(Action<CampaignEventReceiver> broadcast)
{
    Campaign campaign = Campaign.Current;
    if (campaign == null) return;

    CampaignEventDispatcher dispatcher = CampaignEventDispatcher.Instance;
    if (dispatcher == null) return;

    try
    {
        broadcast(dispatcher);
    }
    catch (Exception ex)
    {
        Debug.Print("event broadcast failed: " + ex.Message);
    }
}

// 订阅侧：自己的接收者要在战役启动期注册一次
public override void OnGameStart(Game game, IGameStarter gameStarterObject)
{
    base.OnGameStart(game, gameStarterObject);
    Campaign.Current.AddCampaignEventReceiver(new MyCampaignEventReceiver());
}
```

## 风险与边界

- **单例随战役重建**：`Instance` 依赖 `Campaign.Current`。缓存它 = 缓存一个跨读档失效的对象。所有取用都写成 `CampaignEventDispatcher.Instance.OnXxx(...)` 的即时表达式。
- **广播顺序 = 注册顺序**：数组顺序取决于原生管理器与各 submodule 的注册先后，跨 mod 没有保证。若两个 mod 都改了同一状态，把顺序依赖消除掉（幂等写入），而不是指望顺序。
- **无异常隔离**：生产环境每个接收者自己 try/catch。这一条在原生代码里也没做。
- **手动广播会重复触发**：`Instance.OnXxx(...)` 是主动广播，不是查询。原生系统已经广播过一次，你再广播一次就是双触发。
- **频率与帧绑定**：`Tick` 每帧调用；`MissionTick` 在战斗场景调用而战役 tick 暂停。若你的逻辑在两者里都写，战斗结束后可能出现一次额外结算。

## 依赖关系

- [CampaignEventReceiver](../CampaignEventReceiver) — 被广播的目标契约，280 个虚回调的来源
- [Campaign](../Campaign) — 提供 `Instance` 与接收者注册入口，并在 `Tick()` 里驱动广播
- [CampaignEvents](../CampaignEvents) — 与分发器并列的静态事件形态，语义一一对应
- [CampaignBehaviorManager](../../campaign-ext/CampaignBehaviorManager) — 移除 behavior 时会调用 `RemoveListeners` 清理广播订阅