---
title: "CampaignBehaviorManager"
description: "behavior 的注册表与存档同步器：持有全部 CampaignBehaviorBase 实例，提供 GetBehavior<T>() 查询，并在 OnBeforeSaveEvent 时把每个 behavior 的数据收进存档。"
---

# CampaignBehaviorManager

**Namespace:** TaleWorlds.CampaignSystem.CampaignBehaviors
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class CampaignBehaviorManager : ICampaignBehaviorManager`
**Base:** 实现 `ICampaignBehaviorManager`
**Source:** `bannerlord-1.5.3/TaleWorlds.CampaignSystem/CampaignBehaviors/CampaignBehaviorManager.cs`

## 概述

`CampaignBehaviorManager` 是战役内所有 [CampaignBehaviorBase](../../campaign/CampaignBehaviorBase) 实例的**唯一持有者**，同时充当它们的存档收集器。它做四件机械的事：保存列表、提供按类型查询、在 `RegisterEvents()` 时逐个通知、在存档前把各 behavior 的 `SyncData` 数据抓进一个 `CampaignBehaviorDataStore`。它**不做**业务判断，也**不注册**原生事件——订阅发生在各 behavior 自己的 `RegisterEvents()` 里。

## 心智模型

- **列表来源**：构造函数与 `InitializeCampaignBehaviors(IEnumerable<CampaignBehaviorBase>)` 都走 `SetBehaviors`，把传入集合 `ToList()` 后**替换**整个列表。换句话说，重复调用 `InitializeCampaignBehaviors` 会丢掉之前 `AddBehavior` 加进去的 behavior。
- **存档数据流**：`CampaignEvents.OnBeforeSaveEvent` → `OnBeforeSave()` → 先 `_campaignBehaviorDataStore.ClearBehaviorData()` 再对每个 behavior 调 `SaveBehaviorData`。读档后 `LoadBehaviorData()` → 逐个 `LoadBehaviorData(behavior)` → 立刻 `ClearBehaviorData()`。**datastore 是一次性的中转站**，不是长期缓存。
- **注册时机**：`RegisterEvents()` 只调 behavior 的 `RegisterEvents()`，不会替你订阅任何事件。
- **查询**：`GetBehavior<T>()` 从列表头线性扫描，返回**第一个**匹配；`GetBehaviors<T>()` 返回全部匹配（`OfType<T>()`）。

**常见误用与坑**

1. **`ClearBehaviors()` 只清列表，不解事件**。behavior 曾订阅的 `CampaignEvents.XxxEvent` 监听依然存在，回调继续跑但 `GetBehavior<T>()` 已经取不到它。这是「逻辑还在跑但查不到实例」的典型症状。
2. **`AddBehavior` 会立刻调用 `RegisterEvents()`**：如果被添加的 behavior 自己又去订阅事件，你必须保证它没有在别处重复订阅过。
3. **`RemoveBehavior<T>()` 只移除第一个匹配**，并调用 `CampaignEventDispatcher.Instance.RemoveListeners(t)`。如果 behavior 的事件是用静态 lambda 订阅的，`RemoveListeners` 摘不干净。
4. **`GetBehavior<T>()` 返回 `default(T)`**（不是抛异常），调用方必须判空。

## 怎么用

### 怎么拿到它

mod 不需要、也不应该自己 `new` 它。全代码库唯一的构造点是 `Campaign.Initialize` 里的 `new CampaignBehaviorManager(campaignGameStarter.CampaignBehaviors)`（`Campaign.cs:1991`），而且只在 `_gameLoadingType != SavedCampaign` 的分支里执行。读档走的是另一条路：manager 本身作为 `Campaign` 的被收集对象写进存档（`Campaign.cs:2514`），反序列化出一个**旧实例**，再用本局 starter 的行为列表重新灌一次（`InitializeCampaignBehaviors`，`Campaign.cs:1997`），随后才 `LoadBehaviorData()`（`Campaign.cs:1998`）和 `RegisterEvents()`（`Campaign.cs:1999`）。

对外的入口是 `Campaign.CampaignBehaviorManager`（`Campaign.cs:202`，类型是 `ICampaignBehaviorManager`）以及两个泛型便捷方法 `Campaign.Current.GetCampaignBehavior<T>()`（`Campaign.cs:1317`）/ `GetCampaignBehaviors<T>()`（`Campaign.cs:1323`），后两者只是转发到 `_campaignBehaviorManager.GetBehavior<T>()`（`CampaignBehaviorManager.cs:62`）。

`RegisterEvents()` 的调用时机在新战役与读档两条路上不同：新战役是在 `OnNewCampaignStart` 尾部调一次（`Campaign.cs:2210`），读档是在 `Campaign.cs:1999` 调。都发生在 behavior 的存档数据同步之外。

### 典型用法

```csharp
// 1) 注册：在 OnGameStart 里把 behavior 交给 starter，事件由引擎在稍后统一注册
protected override void OnGameStart(Game game, IGameStarter gameStarterObject)
{
    base.OnGameStart(game, gameStarterObject);
    ((CampaignGameStarter)gameStarterObject).AddBehavior(new MySupplyBehavior());
}

// 2) 取用：behavior 跑起来之后按类型查它
MySupplyBehavior mine = Campaign.Current.GetCampaignBehavior<MySupplyBehavior>();
Debug.Print("[supply] pending = " + mine.PendingShipments);   // 后半句是你自己 behavior 上的成员

// 3) 基类上的静态快捷方式，语义与上面完全等价（内部就是 Campaign.Current.GetCampaignBehavior<T>()）
MySupplyBehavior same = CampaignBehaviorBase.GetCampaignBehavior<MySupplyBehavior>();

// 4) 要一批同类型实例时用另一个重载（内部是 OfType<T>()，返回惰性序列，别在遍历中增删）
foreach (MySupplyBehavior b in Campaign.Current.GetCampaignBehaviors<MySupplyBehavior>())
    Debug.Print("[supply] " + b.StringId);
```

### 最容易踩的坑

在 `CampaignGameStarter.AddBehavior`（`CampaignGameStarter.cs:48`）和 `CampaignBehaviorManager.AddBehavior`（`CampaignBehaviorManager.cs:85`）之间搞混两者的注册语义。后者**在加入的当场**就调 `campaignBehavior.RegisterEvents()`（`CampaignBehaviorManager.cs:88`），前者只是把对象塞进 list，事件要等到 `Campaign.cs:2210` 或 `Campaign.cs:1999` 才统一注册。如果你在 `OnGameStart` 里先走 starter、又在战役运行期再走一次 manager，behavior 的 `RegisterEvents` 就被执行了两遍——而 `MBCampaignEvent.AddHandler` 只是 `List.Add`、不去重（`MBCampaignEvent.cs:41`），于是同一个 handler 每个 tick 都会跑两遍，表现是数值翻倍或事件日志出现两次。

## 成员与调用时机

- `CampaignBehaviorManager(IEnumerable<CampaignBehaviorBase> inputComponents)`：战役启动时由引擎构造。会顺带订阅 `OnBeforeSaveEvent`。
- `void InitializeCampaignBehaviors(IEnumerable<CampaignBehaviorBase> inputComponents)`：**替换**整个行为列表。读档或自定义战役重建行为体系时用。
- `void RegisterEvents()`：遍历列表逐个调 `RegisterEvents()`。在所有 behavior 都已就位后调用一次。
- `void LoadBehaviorData()`：读档后把存档数据分发回各 behavior，然后清空中转站。**只在读档流程里调**。
- `T GetBehavior<T>()`：取第一个匹配实例，取不到返回 `default(T)`。跨 mod 取行为的标准方式。
- `IEnumerable<T> GetBehaviors<T>()`：取全部匹配实例。原生一个 + mod 一个时用它。
- `void AddBehavior(CampaignBehaviorBase campaignBehavior)`：追加并立即调它的 `RegisterEvents()`。
- `void RemoveBehavior<T>() where T : CampaignBehaviorBase`：移除第一个匹配，同时走一遍 `RemoveListeners`。
- `void ClearBehaviors()`：清空列表。**不会**解开事件订阅。
- `protected virtual void AutoGeneratedInstanceCollectObjects(List<object> collectedObjects)`：存档收集钩子，把 `_campaignBehaviorDataStore` 登记为可序列化成员。

## 真实示例

```csharp
// 查询：从自己的 behavior 里拿别人的 behavior
public class MyQuestBehavior : CampaignBehaviorBase
{
    public override void RegisterEvents()
    {
        CampaignEvents.HourlyTickEvent.AddNonSerializedListener(this, HourlyTick);
    }

    public override void SyncData(IDataStore dataStore) { }

    private void HourlyTick()
    {
        // 取单个，取不到就是 null
        SettlementProsperityModel model = Campaign.Current.GetCampaignBehavior<MyProsperityBehavior>() != null
            ? Campaign.Current.Models.SettlementProsperityModel
            : null;
        // 取全部（原生 + mod 可能都有）
        foreach (CampaignBehaviorBase behavior in Campaign.Current.GetCampaignBehaviors<CampaignBehaviorBase>())
            Debug.Print("behavior: " + behavior.StringId);
    }
}
```

## 风险与边界

- **存档只覆盖 `SyncData` 写出的内容**。behavior 的私有字段如果没有通过 `dataStore` 的 `IsLoading == false` 分支写入（或没有 `[SaveableField]`），读档后就是默认值。管理器不会替你做字段扫描。
- **`_campaignBehaviorDataStore` 是 `[SaveableField(1)]`**：它是管理器**唯一**被序列化进存档的字段。behavior 列表本身不存档——读档时列表由引擎根据你 `OnGameStart` 里注册的内容重新构建。**这意味着读档后 behavior 实例是新的，旧实例的引用全废。**
- **替换语义**：`InitializeCampaignBehaviors` 会清掉运行期加的 behavior。动态添加请用 `AddBehavior`。
- **类型歧义**：`GetBehavior<T>()` 返回第一个匹配。原生 `SettlementProsperityModel` 这类 model 不是 behavior，别在这里找 model，要去 `Campaign.Current.Models`。
- **命名空间决定目录**：类在 `TaleWorlds.CampaignSystem.CampaignBehaviors` 命名空间，按 canonical 规则（`tools/_dir-map-canonical.json`）就属 `campaign-ext`，本页也在 `api/campaign-ext/`。别按类型名里的 "Behavior" 去 `campaign/` 找它。

## 依赖关系

- [CampaignBehaviorBase](../../campaign/CampaignBehaviorBase) — 被管理的元素类型，提供 `SyncData` 与 `StringId`
- [ICampaignBehavior](../../campaign/ICampaignBehavior) — 行为侧的最小契约，只要求 `RegisterEvents()`
- [CampaignEventDispatcher](../../campaign/CampaignEventDispatcher) — `RemoveBehavior<T>()` 借它清理事件订阅
- [Campaign](../../campaign/Campaign) — 通过 `CampaignBehaviorManager` 属性暴露管理器，`GetCampaignBehavior<T>()` 转发到它