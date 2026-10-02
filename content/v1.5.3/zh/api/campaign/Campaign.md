---
title: "Campaign"
description: "单局战役的战略层总控：持有 CampaignObjectManager 里的全部世界状态，驱动 RealTick/Tick 两段主循环、周期事件与 CampaignEvents 派发，并把平衡规则通过 GameModels 开放给 mod。"
---

# Campaign

**Namespace:** TaleWorlds.CampaignSystem
**Module:** TaleWorlds.CampaignSystem（位于 Core 之上的游戏逻辑层）
**Type:** `public class Campaign : GameType`
**Base:** `GameType`（TaleWorlds.Core）
**Source:** `bannerlord-1.5.3/TaleWorlds.CampaignSystem/Campaign.cs`

## 概述

`Campaign` 是一次战役（一份存档、一个世界）的战略层容器与主循环。它不是「地图界面」，也不是某个可以随时 new 出来的对象：引擎在加载游戏类型时构造唯一一个实例，`SetLoadingParameters` 里把自己写进静态 `Campaign.Current`，此后所有世界状态（英雄、聚落、队伍、家族、王国）都由它持有的 `CampaignObjectManager` 管理。它也不是 Mission 的替代品——进入战斗时场景控制权交给 [Mission](../../mission/Mission)，战斗结算后再回到这里。

## 心智模型

把它看成三段叠加：

- **世界容器**：`CampaignObjectManager` 持有实体，`AliveHeroes` / `Settlements` / `MobileParties` / `Clans` / `Kingdoms` 等属性是它的只读视图（`MBReadOnlyList`），不是可写集合。想加一个队伍必须走 `MobileParty.CreateMobileParty` 之类的工厂，而不是往列表里塞。
- **时间机器**：`RealTick(realDt)` 先算 `TickMapTime` 得到 `_dt`（基础 `0.25f * realDt`，快进乘 `SpeedUpMultiplier`，停顿时为 0），再跑各 `CampaignEntityComponent.OnTick`；`Tick()` 里依次 `CampaignEventDispatcher.Instance.Tick(_dt)` → `_campaignPeriodicEventManager.OnTick(_dt)`（触发 DailyTick/HourlyTick/QuarterHourlyTick）→ `MapEventManager.Tick` → `EncounterManager.Tick`。**周期事件的源头是 `MBCampaignEvent`，不是 Tick 直接调用**，所以 DailyTick 只在游戏时间真正推进时触发。
- **扩展总线**：behavior 走 `GetCampaignBehavior<T>()`，模型走 `GameModels`，事件走 `CampaignEvents`，自定义子系统走 `AddCustomManager<T>()`。

典型顺序：新游戏/读档 → `SetLoadingParameters` → `BeforeRegisterTypes`/`OnRegisterTypes`（实体注册）→ `InitializeSinglePlayerReferences` → behavior 的 `RegisterEvents()` → `CampaignGameStarter` 增补 → 每帧 `RealTick`+`Tick` → `OnDestroy`。

**常见误用与坑**

1. 在主菜单或读档动画期间访问 `Campaign.Current`——它是 `null`，任何 `Campaign.Current.MainParty` 都会 NRE。判断用 `Campaign.Current != null` 或挂在 `MBSubModuleBase.OnGameStart` 之后。
2. 缓存 `Campaign.Current` 的局部引用跨读档。读档会重建整个 `Campaign` 实例，旧引用里的实体全部失效。行为组件应该在回调里现取。
3. 直接给 `Hero.Gold` 赋值绕过 `GiveGoldAction`。字段直写不会触发 `CampaignEvents`，AI 和 UI 都拿不到通知。
4. 在 `_dt == 0`（游戏暂停、菜单打开）时假设 DailyTick 也会跑——`Tick()` 里 `TickPeriodicEvents` 被 `_dt > 0f` 包住，不会触发。

## 成员与调用时机

**静态与全局**

- `static Campaign Current`：全局唯一战役实例。未加载战役时为 `null`。所有 mod 逻辑的根。
- `static float CurrentTime`：当前战役小时数（`CampaignTime.Now.ToHours`），调试/时间条件判断用。
- `static float MapDiagonal / MapMaximumHeight / MapMinimumPosition / MapMaximumPosition`：地图边界常量，1.5.3 里是 `private set`，只能在初始化后读。
- `const float ConfigTimeMultiplier = 0.25f`：真实时间到游戏时间的换算系数，速度类参数都以此为基准。

**世界集合（只读视图）**

`AliveHeroes`、`DeadOrDisabledHeroes`、`Settlements`、`MobileParties`、`LordParties`、`BanditParties`、`CaravanParties`、`GarrisonParties`、`MilitiaParties`、`VillagerParties`、`PatrolParties`、`CustomParties`、`PartiesWithoutPartyComponent`、`Kingdoms`、`Clans`、`Characters`、`Workshops`、`ItemModifiers`、`ItemModifierGroups`、`Concepts`、`Wreckages`、`Factions`。只在遍历查询时用；**不要缓存**这些列表的元素引用到 behavior 字段里过夜。

**子管理器（需要用时才碰）**

`QuestManager`、`IssueManager`、`IncidentManager`、`FactionManager`、`CharacterRelationManager`、`Romance`、`PlayerCaptivity`、`BarterManager`、`SiegeEventManager`、`MapEventManager`、`MapTrackerManager`、`GameMenuManager`、`ConversationManager`、`EncyclopediaManager`、`LogEntryHistory`、`KingdomManager`、`MapStateData`、`CampaignInformationManager`、`SaveHandler`。

**Behavior 与扩展**

- `T GetCampaignBehavior<T>()`：拿已注册的 behavior，拿不到返回 `default(T)`。这是 mod 之间互相取值的标准通道，务必判空。
- `IEnumerable<T> GetCampaignBehaviors<T>()`：同类型可能有多个（原生一个 + 你加一个），要遍历。
- `void AddCampaignBehaviorManager(ICampaignBehaviorManager)`：替换行为管理器，通常只在自定义整套行为体系时用。
- `TComponent GetEntityComponent<TComponent>()` / `AddEntityComponent<TComponent>()` / `RemoveEntityComponent<TComponent>()`（重载：带实例）：把自定义数据挂到世界的组件树上，`Add` 要求 `new()` 约束。组件的 `OnTick(realDt, dt)` 每帧被调用，是「每帧逻辑」的落点。
- `void AddCustomManager<T>()` / `T GetCustomManager<T>()`（`T : ICustomSystemManager, new()`）：挂一个跨战役存活的子系统。注意 `AddCustomManager` 只是 `new T()` 加进列表，**不做初始化**，你得在自己的构造函数里准备好。

**生命周期方法**

- `SetLoadingParameters(GameLoadingType)`：`Campaign.Current = this` 就是在这里发生的。读档时 `GameStarted` 直接置 `true`，所以行为组件不能用它判断「是否新游戏」。
- `InitializeSinglePlayerReferences()` / `InitializeGamePlayReferences()` / `InitializeMainParty()`：分别建立单机引用、玩法引用、主角队伍。`InitializeMainParty` 会在第一个城镇门口附近找一个可达点放队伍并转成领主队伍。
- `void OnPlayerCharacterChanged(out bool isMainPartyChanged)`：主角换人后由引擎调用，`MainParty` 指向会变，`isMainPartyChanged` 告诉你队伍是否换了。事件订阅方要在这里重建缓存。
- `OnMissionIsStarting(string, MissionInitializerRecord)` / `OnStateChanged(GameState)`：进出战斗/切状态时的钩子，用来暂停自有逻辑。
- `void WaitAsyncTasks()`：等待 `CampaignLateAITickTask`。自定义异步逻辑里如果起过任务，读状态前要等它。
- `void SetTimeSpeed(int)` / `SetTimeControlModeLock(bool)` / `GetSimplifiedTimeControlMode()`：调试加速与暂停控制。
- `OnDestroy()`：战役结束。静态字段、订阅的事件都在这里解。

## 真实示例

```csharp
// 在自己的 CampaignBehavior 里取人、取模型、订阅事件
public class MySupplyBehavior : CampaignBehaviorBase
{
    public override void RegisterEvents()
    {
        CampaignEvents.DailyTickEvent.AddNonSerializedListener(this, DailyTick);
        CampaignEvents.HourlyTickEvent.AddNonSerializedListener(this, HourlyTick);
    }

    public override void SyncData(IDataStore dataStore) { }

    private void DailyTick()
    {
        Campaign campaign = Campaign.Current;
        if (campaign == null) return;
        foreach (Settlement settlement in campaign.Settlements)
        {
            Hero governor = settlement.SettlementHolders?.FirstOrDefault();
            if (governor == null) continue;
            Debug.Print("Daily: " + settlement.Name + " / " + governor.Name);
        }
    }

    private void HourlyTick()
    {
        // 玩家队伍有 3 名以上存活同伴时才推进自己的补给逻辑
        MobileParty mainParty = Campaign.Current.MainParty;
        if (mainParty != null && mainParty.GetNumberOfAliveHeroes() >= 3)
            Campaign.Current.GetEntityComponent<MySupplyComponent>().Refill(mainParty);
    }
}
```

## 风险与边界

- **读档重建**：读档会创建新的 `Campaign` 实例。所有静态缓存的 `Hero` / `Settlement` / `MobileParty` 引用在读档后全部悬空。解法：不要静态缓存，或在 `MBSubModuleBase.OnGameLoaded` 里清空重建。
- **不要 new**：构造函数 `Campaign(CampaignGameMode, AdvancedStartOptionsData)` 是给引擎加载流程用的，手工 new 出来的实例没有 `CampaignObjectManager`，访问任何集合都会炸。
- **time==0 不推进**：菜单打开、`TimeControlMode == Stop`、或 `MapState.AtMenu` 时 `_dt` 被清零，所有基于周期事件的逻辑都不会跑。写「每天结算」时如果用 `Tick()` 计数会算错。
- **事件顺序**：`CampaignEvents.DailyTickEvent` 由 `Campaign.DailyTick` 触发，而 `Campaign.DailyTick` 由 `_dailyTickEvent` 这个 `MBCampaignEvent` 驱动，也就是说「DailyTick 回调里再改世界状态」会影响同一轮后续监听者的输入顺序（`MbEvent` 是同步调用链）。
- **跨域引用方向**：`Campaign` 属于 CampaignSystem 层，它引用 Core 的 `GameType`/`GameModels`，但**不能**引用 ScreenSystem 或 Engine.GauntletUI 的类型。mod 里如果需要在 Campaign 回调里弹界面，只能通过 `CampaignEvents` 让 ScreenSystem 侧的模块监听。

## 依赖关系

- [CampaignBehaviorManager](../../campaign-ext/CampaignBehaviorManager) — behavior 的持有者，`GetCampaignBehavior<T>()` 实际转发到这里
- [CampaignEvents](../CampaignEvents) — 对外的事件总线入口，DailyTick/HourlyTick 都从这里订阅
- [CampaignEventDispatcher](../CampaignEventDispatcher) — 把 `CampaignEvents` 的调用广播给所有 `CampaignEventReceiver`
- [GameModels](../GameModels) — `Campaign.Models` 的类型，平衡规则从这里读
- [MBCampaignEvent](../MBCampaignEvent) — 周期事件的时间载体，DailyTick 间隔由它决定