---
title: "CampaignBehaviorBase"
description: "战役层扩展的标准基类：让一个 Behavior 在战役创建时订阅事件、在存档与读档时同步自己的字段。几乎所有战役级 mod 逻辑都从这里派生。"
---
# CampaignBehaviorBase

**命名空间：** `TaleWorlds.CampaignSystem`
**模块：** `TaleWorlds.CampaignSystem`
**类型：** `public abstract class CampaignBehaviorBase : ICampaignBehavior`
**基类：** 实现 `TaleWorlds.CampaignSystem.ICampaignBehavior`（无基类）
**源文件：** `TaleWorlds.CampaignSystem/CampaignBehaviorBase.cs`（声明见第 6 行）

## 概述

`CampaignBehaviorBase` 是战役层**唯一官方推荐的扩展载体**。它只做两件事，但这两件事覆盖了 mod 逻辑的两个硬需求：第一，在战役对象建立后订阅 [CampaignEvents](../CampaignEvents) 的事件；第二，在存档与读档时把自己的字段写进 / 读出存档。游戏本体里的联盟、领主 AI、围城、任务系统全都以它为基类，模组只要和它们遵循同一套生命周期，就不会在读档时炸掉。

它的接口面极小——两个构造函数、两个抽象方法、一个静态查询入口、一个 `StringId` 字段——这正是它的价值：约束明确。派生类必须实现 `RegisterEvents()` 与 `SyncData(IDataStore)`，前者不能漏（否则事件永不触发），后者不能偷懒（否则字段不落盘，读档后状态归零）。`StringId` 用来在 `CampaignBehaviorManager` 中标识这个 Behavior，两个字符串 ID 相同的 Behavior 会在管理器里互相干扰。

它在栈中的位置：[MBSubModuleBase](../../core/MBSubModuleBase) 拿到 `IGameStarter` 后把它转成 [CampaignGameStarter](../CampaignGameStarter)，后者调用 `AddBehavior` 把 Behavior 实例挂进 [Campaign](../Campaign)；战役初始化完成后引擎调用 `RegisterEvents`；存档时调用 `SyncData`。Behavior **不是**全局单例——`Campaign.Current.GetCampaignBehavior<T>()` 按类型取，取不到就是 `null`。

## 心智模型

派生一个 Behavior 的正确顺序是四步，缺一步就会在某个特定时机炸掉：

1. **声明 ID 并派生**。构造函数优先写 `public MyBehavior() : base("MyModId.MyBehavior") {}`，显式字符串 ID 便于排查；用无参基构造函数时 `StringId` 会退化成类名，改类名就等于改了 ID。
2. **`RegisterEvents()` 里只订阅，不做重活**。这个回调发生在战役对象已创建、但很多 Manager 还没完成装配的阶段。在这里遍历 `FactionManager` 并缓存结果，会拿到不完整的数据。正确做法是订阅 `OnAfterSessionLaunchedEvent` / `DailyTickEvent` 这类「战役已就绪」事件再做事。
3. **`SyncData(IDataStore)` 必须把所有持久字段都写出去**。`IDataStore` 有两种身份：`IsLoading() == true` 时读，否则写。漏写某个字段 → 读档后该字段为默认值；漏读 → 读档后保留上一次会话的残留值，同时会累积脏数据。绝大多数「读档后 mod 行为错乱」的根因就在这里。
4. **订阅的事件要有对称解除**。游戏会在战役结束时销毁 Campaign，`CampaignEvents.RemoveListeners(owner)` 会按 owner 清掉所有 `AddNonSerializedListener` 注册的监听器——**前提是你传的 owner 对象与注册时一致**。在 Behavior 里传 `this` 最简单也最安全。

常见错误：把 `RegisterEvents` 当初始化钩子用；在 `SyncData` 里调用 `Campaign.Current.GetCampaignBehavior<Other>()`（此时 Behavior 注册顺序不保证，会拿到 null）；在 `SyncData` 里直接读写业务对象而不是先反序列化到本地字段再应用；以及在 Behavior 里缓存任务层的引用越过战役生命周期。

## 何时使用 / 何时不要使用

- **使用**：任何需要「战役存在期间一直生效」的逻辑——外交规则修正、每日经济结算、事件响应、自定义 UI 状态。
- **使用**：需要跨存档持久化的任何战役级状态（自定义计数、开关、玩家标记）。
- **使用**：作为静态工具方法的宿主（`public static T GetCampaignBehavior<T>()` 的便利封装）。
- **不要**：为任务（mission）内逻辑派生它。战斗层有 [MissionBehavior](../../mission/MissionBehavior)，生命周期完全不同，且不参与存档。
- **不要**：为一个只跑一次的初始化逻辑建 Behavior——用 [MBSubModuleBase](../../core/MBSubModuleBase) 的生命周期回调（`OnCampaignStart` / `OnGameStart`）就够了。
- **不要**：在 `SyncData` 里做重量级重建（重新生成地图对象、批量 `AddGameMenu`）。读档正处于半初始化状态，这类操作极易触发 NRE。

## 成员说明

| 成员 | 用途、副作用与时机 |
| --- | --- |
| `CampaignBehaviorBase(string stringId)` | 指定 `StringId` 的构造函数。**推荐**用这个：ID 稳定、可读、跨重构不变。 |
| `CampaignBehaviorBase()` | 无参构造函数，把 `StringId` 设为 `GetType().Name`。类重命名会连带改 ID，进而影响管理器内的查找与调试日志。 |
| `readonly string StringId` | 本 Behavior 的字符串标识，只读。对外暴露以便在 `CampaignBehaviorManager` 与调试输出中识别。 |
| `abstract void RegisterEvents()` | 战役对象创建完成后调用一次，**只做事件订阅**。在这里做重初始化是最常见的时序错误。 |
| `abstract void SyncData(IDataStore dataStore)` | 存档时（`IsLoading() == false`）写出字段，读档时（`IsLoading() == true`）读回字段。**必须成对实现**：写出去的每个字段都要读回来。 |
| `static T GetCampaignBehavior<T>()` | 静态便利方法，转发到 `Campaign.Current.GetCampaignBehavior<T>()`。**Campaign 不存在或 Behavior 未注册时返回 `null`**，而且没有 null 检查。 |

实现 `ICampaignBehavior` 让引擎能按统一接口管理 Behavior 实例，但 mod 通常不直接使用其成员；需要逐 tick 逻辑时，通常通过订阅 [CampaignEvents](../CampaignEvents) 的 tick 事件（`HourlyTickEvent`、`DailyTickEvent` 等）来实现，而不是覆写接口方法。

## 示例

### 示例 1：一个完整的 Behavior——订阅、存档、解除

这是模组里最标准的骨架。注意 `SyncData` 的读写两个分支都覆盖了同一个字段。

```csharp
using TaleWorlds.CampaignSystem;
using TaleWorlds.CampaignSystem.GameMenus;
using TaleWorlds.SaveSystem;

public class VisitCounterBehavior : CampaignBehaviorBase
{
    private int _settlementVisits;

    public VisitCounterBehavior() : base("MyMod.VisitCounter")
    {
    }

    public override void RegisterEvents()
    {
        // 只订阅，不做重活：此刻很多 Manager 尚未装配完成
        CampaignEvents.SettlementEntered.AddNonSerializedListener(this, OnSettlementEntered);
    }

    public override void SyncData(IDataStore dataStore)
    {
        // IDataStore 只有 SyncData<T>(string, ref T)、IsSaving、IsLoading 三个成员：
        // 读与写用的是同一个方法，区别只在调用时的存档方向
        dataStore.SyncData("VisitCounter.Visits", ref _settlementVisits);
    }

    private void OnSettlementEntered(MobileParty party, Settlement settlement, Hero hero)
    {
        _settlementVisits++;
    }
}
```

### 示例 2：注册 Behavior，并安全地取回

Behavior 必须通过 [CampaignGameStarter](../CampaignGameStarter) 在战役创建阶段注册；运行期取回时务必判空。

```csharp
using TaleWorlds.CampaignSystem;
using TaleWorlds.Core;
using TaleWorlds.MountAndBlade;

public class MySubModule : MBSubModuleBase
{
    protected override void OnGameStart(Game game, IGameStarter gameStarterObject)
    {
        base.OnGameStart(game, gameStarterObject);

        if (gameStarterObject is CampaignGameStarter campaignStarter)
        {
            campaignStarter.AddBehavior(new VisitCounterBehavior());
        }
    }

    protected override void OnCampaignStart(Game game, object starterObject)
    {
        base.OnCampaignStart(game, starterObject);

        // 取回：未注册就是 null，不要直接解引用
        VisitCounterBehavior behavior = Campaign.Current.GetCampaignBehavior<VisitCounterBehavior>();
        if (behavior != null)
        {
            // 静态便利入口等价，但同样不判空
            VisitCounterBehavior viaStatic = VisitCounterBehavior.GetCampaignBehavior<VisitCounterBehavior>();
        }
    }
}
```

## 风险与边界

- **`SyncData` 漏字段是读档崩溃与状态错乱的头号来源**。写出 `ref` 字段却不读回，读档后会保留上一局的值并在多次读档后不断累积。
- **`RegisterEvents` 的时序窗口**。它在战役对象创建后立刻调用，但此时 `Campaign.Current` 内部很多 Manager 尚未完成装配。要做初始化就订阅 `OnAfterSessionLaunchedEvent`，不要在 `RegisterEvents` 里展开工作。
- **`GetCampaignBehavior<T>()` 返回 null 的三种情况**：`Campaign.Current` 为 null、Behavior 未注册、被 `RemoveBehaviors<T>()` 移除。静态方法同样不判空。
- **`StringId` 冲突**。两个 Behavior 用相同 `StringId` 会让 `CampaignBehaviorManager` 的登记混乱，调试时极难定位。显式命名并加模块前缀。
- **不要跨战役缓存静态引用**。Behavior 实例随战役创建销毁；把它存进静态字段会在第二次开局时指向已死对象。
- **不要在 Behavior 里持有任务层对象**。`Agent`、`MissionWeapon`、`MissionAgentHandler` 在任务结束后即失效，而 Behavior 的生命周期跨越多个任务。任务内逻辑应放进 [MissionBehavior](../../mission/MissionBehavior)。
- **单线程**。`RegisterEvents` / `SyncData` / 事件回调全部在主游戏线程。联机同步回调里触发 Behavior 逻辑必须先转投主线程。
- **重复开局**。同一进程内先后加载两个战役时，`RegisterEvents` 会再次执行。如果你在里面做了「一次性」初始化（比如 `AddGameMenu`），重复执行会产生重复菜单项。

## 依赖关系

- 上游 / 提供者：
  - [CampaignGameStarter](../CampaignGameStarter) 的 `AddBehavior` 是官方注册入口，把 Behavior 实例挂进 [Campaign](../Campaign)。
  - [Campaign](../Campaign) 的 `GetCampaignBehavior<T>()` / `GetCampaignBehaviors<T>()` 是取回入口，并持有所有实例。
- 相互 / 下游：
  - [CampaignEvents](../CampaignEvents) 是 `RegisterEvents` 里订阅的主要目标。
  - [MBSubModuleBase](../../core/MBSubModuleBase) 的 `OnGameStart` 提供 `IGameStarter`，是注册时机。
  - [SaveManager](../../save-system/SaveManager) → [SaveContext](../../save-system/SaveContext) / [LoadContext](../../save-system/LoadContext) 会带着 `IDataStore` 触发 `SyncData`。
  - 战斗层的对应物是 [MissionBehavior](../../mission/MissionBehavior)，两者不要混用。

## 参见

- ↑ 父级：[战役 API 索引](../)
- ↔ 相关：[Campaign](../Campaign) · [CampaignEvents](../CampaignEvents) · [CampaignGameStarter](../CampaignGameStarter) · [MBSubModuleBase](../../core/MBSubModuleBase) · [SaveManager](../../save-system/SaveManager) · [MissionBehavior](../../mission/MissionBehavior)