---
title: "CampaignBehaviorBase"
description: "战役行为组件的抽象基类：只需实现 RegisterEvents 与 SyncData，就能订阅世界事件、持有可存档状态，并被 GetCampaignBehavior<T>() 查到。"
---

# CampaignBehaviorBase

**Namespace:** TaleWorlds.CampaignSystem
**Module:** TaleWorlds.CampaignSystem
**Type:** `public abstract class CampaignBehaviorBase : ICampaignBehavior`
**Base:** 实现 `ICampaignBehavior`
**Source:** `bannerlord-1.5.3/TaleWorlds.CampaignSystem/CampaignBehaviorBase.cs`

## 概述

`CampaignBehaviorBase` 是 mod 写战役逻辑的**标准容器**。它本身只有两个抽象方法（`RegisterEvents`、`SyncData`）、一个 `StringId` 和一个静态查询辅助 `GetCampaignBehavior<T>()`，几乎不做任何事——它的价值在于：行为实例会被 [CampaignBehaviorManager](../../campaign-ext/CampaignBehaviorManager) 持有、被存档系统同步数据、被 `GetCampaignBehavior<T>()` 查到。它不是接口也不是纯虚类基类，而是一个**有存档契约的基类**。

## 心智模型

一个 behavior 的生命周期：

1. **构造**：你在 [CampaignGameStarter](../CampaignGameStarter) 里 `AddBehavior(new MyBehavior())`，或 `AddBehavior(new MyBehavior("my_behavior"))` 带一个字符串 id。
2. **注册**：管理器调 `RegisterEvents()`。这里订阅 `CampaignEvents` 上的 `IMbEvent`，**每次战役启动和读档都会重跑**，是唯一安全的订阅点。
3. **运行**：事件回调 / 每帧组件 tick 里干活。数据来自 `Campaign.Current`。
4. **存档**：`CampaignEvents.OnBeforeSaveEvent` 触发时，管理器经 `CampaignBehaviorDataStore` 调你的 `SyncData`。**读取分支用 `IsLoading == true`，写入分支用 `IsLoading == false`。**
5. **读档**：引擎用新的实例重新执行第 2 步，再调 `SyncData` 的读取分支。

`StringId` 出现在两个构造函数里：无参构造时为 `null`；带 id 构造时固定。它用于日志与调试追踪，**不是存档键**。

**常见误用与坑**

1. **在构造函数里订阅事件**：`RegisterEvents` 之后还会再跑一遍，等于订阅两次，所有回调执行双倍。
2. **用 `SyncData` 存 `Campaign` 世界对象的引用**：`IDataStore` 存的是值与 `SaveableTypeDefiner` 认识的对象，存 `Hero` / `Settlement` 引用要么存不下、要么存成已失效的引用。存 id，自己在读取时解析。
3. **字段加了 `[SaveableField]` 就以为自动同步**：`CampaignBehaviorBase` 的字段**不会**被反射自动存档，必须在 `SyncData` 里显式调 `dataStore.SyncData<T>(string key, ref T data)`。
4. **在 `SyncData` 里访问 `Campaign.Current` 做复杂计算**：存档时它会跑，读档时也会跑，读档阶段世界对象可能还没全部恢复。
5. **用 `GetCampaignBehavior<T>()` 而不判空**：兄弟 mod 没装时返回 `default(T)`。

## 怎么用

### 怎么拿到它

它不是单例：每次新游戏或每次读档，`CampaignGameStarter.AddBehavior`（`CampaignGameStarter.cs:48`）收集的每一个实例都会被原样交给 `new CampaignBehaviorManager(...)`（`Campaign.cs:1991`）或 `InitializeCampaignBehaviors`（`Campaign.cs:1997`）。也就是说**你 new 出来的对象就是引擎用的那个对象**，中间没有克隆。要拿到别人已经注册好的实例，走基类上的静态方法 `CampaignBehaviorBase.GetCampaignBehavior<T>()`（`CampaignBehaviorBase.cs:24`），它内部转给 `Campaign.Current.GetCampaignBehavior<T>()`（`CampaignBehaviorBase.cs:26`）。

两个构造函数选哪个有实际后果：`CampaignBehaviorBase(string stringId)`（`:9`）让你显式给存档标识；无参的那个（`:15`）把 `GetType().Name` 塞进 `StringId`。

### 典型用法

```csharp
public class MySupplyBehavior : CampaignBehaviorBase
{
    // 无参基类构造函数会把 nameof(MySupplyBehavior) 当作 StringId；想自定义就改用 : base("mymod_supply")
    private MBCampaignEvent _dailyEvent;

    public override void RegisterEvents()
    {
        _dailyEvent = CampaignPeriodicEventManager.CreatePeriodicEvent(CampaignTime.Days(1f), CampaignTime.Hours(6f));
        _dailyEvent.AddHandler(OnDailySupplyTick);
    }

    private void OnDailySupplyTick(MBCampaignEvent campaignEvent, params object[] delegateParams) { }

    public override void SyncData(IDataStore dataStore)
    {
        // key 用字符串常量；写侧与读侧必须完全一致，否则读档后字段静默停在默认值
        bool isLoading = dataStore.IsLoading;
        int pending;
        dataStore.SyncData("mymod_supply_pending", ref pending);
        if (isLoading)
            PendingShipments = pending;
    }

    public int PendingShipments { get; private set; }
}

// 别的类里按类型要它
MySupplyBehavior behavior = CampaignBehaviorBase.GetCampaignBehavior<MySupplyBehavior>();
Debug.Print("pending = " + behavior.PendingShipments);
```

### 最容易踩的坑

`StringId` 是整个存档里 behavior 的主键：用无参构造函数时它是类型名（`CampaignBehaviorBase.cs:17`），而 `CampaignBehaviorDataStore.SaveBehaviorData` 直接拿它当字典键（`CampaignBehaviorDataStore.cs:21`），撞键时会 `Debug.FailedAssert("trying to save multiple behaviors with the same stringid: ...")` 并**用后来的覆盖先来的**（`:24-28`）。后果是：两个同名（或你没改 `StringId` 的重复）behavior 存完档，读回来时先注册的那个 `SyncData` 拿到的是空数据，内部状态归零，而且正式构建里那句 assert 只打日志不抛异常，你完全看不出哪里错了。永远显式传一个带 mod 前缀的 string。

## 成员与调用时机

- `protected CampaignBehaviorBase()`：无参构造，`StringId` 为 `null`。简单的行为用它。
- `protected CampaignBehaviorBase(string stringId)`：带 id 构造。多实例行为（例如每个城镇一个实例）用它区分。
- `public readonly string StringId`：构造时固定的标识，仅用于调试输出与多实例区分。
- `public abstract void RegisterEvents()`：**必须实现**。在这里订阅 `CampaignEvents` 的事件。每次战役启动/读档都调用，必须可重复执行而不产生重复订阅。
- `public abstract void SyncData(IDataStore dataStore)`：**必须实现**。`IDataStore` 只有三个成员：`SyncData<T>(string key, ref T data)`、`IsSaving`、`IsLoading`——key 是字符串，值通过 `ref` 进出。
- `public static T GetCampaignBehavior<T>()`：静态查询，转发到 `Campaign.Current.GetCampaignBehavior<T>()`。取不到返回 `default(T)`。优先用 `Campaign.Current` 上的实例方法，语义一样但更明确。

## 真实示例

```csharp
public class MyCaravanBehavior : CampaignBehaviorBase
{
    private int _scoutedVillages;

    public MyCaravanBehavior() : base("my_caravan") { }

    public override void RegisterEvents()
    {
        // RegisterEvents 每次战役启动都会重跑：订阅前先确保没有旧订阅
        CampaignEvents.OnBeforeSaveEvent.AddNonSerializedListener(this, OnBeforeSave);
        CampaignEvents.DailyTickEvent.AddNonSerializedListener(this, DailyTick);
    }

    public override void SyncData(IDataStore dataStore)
    {
        // IDataStore 只有三个成员：SyncData<T>(string key, ref T data)、IsSaving、IsLoading
        if (dataStore.IsLoading)
            dataStore.SyncData("scouted_villages", ref _scoutedVillages);
    }

    private void DailyTick()
    {
        MobileParty main = Campaign.Current.MainParty;
        // PartyBase.NumberOfAllMembers / NumberOfHealthyMembers 是真实成员计数 API
        if (main != null && main.Party.NumberOfHealthyMembers > 0)
            Debug.Print("scouted=" + _scoutedVillages + " members=" + main.Party.NumberOfAllMembers);

        // 跨 behavior 取值：取不到就是 null
        var other = GetCampaignBehavior<MyCaravanBehavior>();
        if (other != null) Debug.Print("same behavior exists");
    }

    private void OnBeforeSave()
    {
        if (Campaign.Current.MainParty != null)
            Debug.Print("scouted=" + _scoutedVillages);
    }
}
```

## 风险与边界

- **key 是你的私域**：上面示例用的 `"scouted_villages"` 是字符串 key。同一 behavior 里必须唯一且**不要在版本间改动**，否则老存档读出的是别的字段的值。1.5.3 的 `IDataStore` 按 key 匹配，改 key 等于数据错位。
- **读档后实例是新的**：旧 behavior 实例的引用（尤其被别的 mod 缓存的）在读档后全部悬空。跨 mod 通信请每次现取。
- **`RegisterEvents` 必须幂等**：如果在里面做了「先 RemoveListener 再 AddNonSerializedListener」的双保险，读档路径下不会重复订阅；如果只 Add，就依赖宿主对象 `this` 的匹配语义。
- **性能**：`SyncData` 在每次存档（含快速存档）都会跑，别在里面做全量遍历。
- **不能跨层依赖**：behavior 在 CampaignSystem 层，要弹界面得让 ScreenSystem 侧的 [ScreenManager](../../gui/ScreenManager) 模块监听事件，不要在 behavior 里直接 `PushScreen`（会引入界面层依赖并在读档期出问题）。

## 依赖关系

- [ICampaignBehavior](../ICampaignBehavior) — 最小的行为契约，`RegisterEvents()` 来自这里
- [CampaignBehaviorManager](../../campaign-ext/CampaignBehaviorManager) — 持有实例、分发 `SyncData` 数据、提供查询
- [CampaignEvents](../CampaignEvents) — `RegisterEvents()` 里订阅的事件源
- [SaveManager](../../save-system/SaveManager) — `IDataStore` 数据最终由存档系统写入/读出