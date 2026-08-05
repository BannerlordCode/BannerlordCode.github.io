---
title: "ICampaignBehavior"
description: "战役行为的最小契约：只负责注册事件，实际 mod 接入通过 CampaignBehaviorBase 与战役 starter/manager 生命周期完成。"
---
# ICampaignBehavior

**Namespace:** `TaleWorlds.CampaignSystem`
**Module:** `TaleWorlds.CampaignSystem`
**Type:** `public interface ICampaignBehavior`
**Base:** 无
**File:** `bin/TaleWorlds.CampaignSystem/TaleWorlds.CampaignSystem/ICampaignBehavior.cs`

## 一句话职责

`ICampaignBehavior` 定义战役行为的最小契约：对象必须能通过 `RegisterEvents()` 注册自己的 Campaign 事件监听器。

它只规定事件注册入口，不负责保存字段、持有行为实例或决定行为何时创建；这些职责由 `CampaignBehaviorBase`、`CampaignGameStarter` 和 `CampaignBehaviorManager` 在战役生命周期中共同完成。

## 概述

它只描述“怎样接入 Campaign 事件”，不负责保存字段、管理行为实例或决定行为何时创建。实际 mod 行为通常继承 `CampaignBehaviorBase`，由 `CampaignGameStarter` 收集，再由 `CampaignBehaviorManager` 在读档后先恢复数据、再注册监听器；因此这个接口应被看作行为生命周期中的事件入口，而不是可直接替代 starter 或 manager 的服务对象。

换句话说，接口解决的是“在正确的战役生命周期里挂上回调”，而不是“让任意对象自动成为战役行为”。要让一个行为可被查找、移除并参与稳定的存档契约，还必须走 `CampaignBehaviorBase`、`Campaign.Current.CampaignBehaviorManager` 和 `SyncData` 这条完整链路。

## 心智模型

这是**事件注册边界**，不是行为容器，也不是存档契约。接口本身只有 `RegisterEvents()`；正常战役路径由 [`CampaignBehaviorBase`](../CampaignBehaviorBase) 实现它，并额外提供稳定的 `StringId` 和存档系统所需的 `SyncData(IDataStore)`。

新战役中，[`CampaignGameStarter`](../CampaignGameStarter) 通过 `AddBehavior` 收集 `CampaignBehaviorBase`。随后 [`Campaign`](../Campaign) 把这组行为交给 `CampaignBehaviorManager`，在战役初始化时调用 `RegisterEvents()`。读档时，manager 先替换行为列表、加载行为数据，再注册监听器。接口本身不会创建、持有、查找或保存行为。

## 何时用，何时不用

**适合使用：**

- 理解所有战役行为共用的事件注册入口。
- 通过 `CampaignBehaviorBase` 实现行为，让 manager 可以注册它，让存档系统可以调用 `SyncData`。
- 让消费者或测试依赖最小的注册契约，而不是依赖具体行为类。

**不适合使用：**

- 要把普通 mod 行为加入战役时。应继承 [`CampaignBehaviorBase`](../CampaignBehaviorBase)，再加入 [`CampaignGameStarter`](../CampaignGameStarter)；`ICampaignBehaviorManager.AddBehavior` 接受的是 `CampaignBehaviorBase`，不是任意接口实现。
- 要保存持久字段时。实现 `CampaignBehaviorBase.SyncData(IDataStore)` 并保持稳定键名；`RegisterEvents()` 不是存档回调。
- 要运行时查找或移除行为时。通过 `Campaign.Current.CampaignBehaviorManager` 获取 [`ICampaignBehaviorManager`](../ICampaignBehaviorManager)，使用其类型化查找和移除方法。

## 契约与生命周期

### `RegisterEvents()`

接口唯一成员。实现类应把自己作为 owner，注册需要的 `CampaignEvents` 监听器。manager 在战役初始化时为每个行为调用它；运行时新增行为时也会立即调用。因此它是激活入口，不是可以反复调用的刷新方法。

监听器应使用行为实例作为 owner；若某个类可能被重复初始化，注册逻辑还必须具备幂等性。[`CampaignBehaviorManager.RemoveBehavior<T>()`](../CampaignBehaviorManager) 会移除行为，并让 `CampaignEventDispatcher` 解除该行为的监听；手动重复调用 `RegisterEvents()` 则可能让每日 tick 或世界变更回调执行多次。

## 真实实现与注册

正常 mod 形态是 `CampaignBehaviorBase`，而不是裸实现 `ICampaignBehavior`。下面使用真实的 `CampaignEvents.OnGameLoadFinishedEvent`、`IDataStore.SyncData` 和 `CampaignGameStarter.AddBehavior` 路径：

```csharp
using TaleWorlds.CampaignSystem;
using TaleWorlds.Core;

public sealed class ModCampaignBehavior : CampaignBehaviorBase
{
    private int _observationCount;

    public override void RegisterEvents()
    {
        CampaignEvents.OnGameLoadFinishedEvent.AddNonSerializedListener(this, OnGameLoadFinished);
    }

    private void OnGameLoadFinished()
    {
        _observationCount++;
    }

    public override void SyncData(IDataStore dataStore)
    {
        dataStore.SyncData("_observationCount", ref _observationCount);
    }
}

public sealed class ModSubModule : MBSubModuleBase
{
    protected override void OnGameStart(Game game, IGameStarter gameStarter)
    {
        base.OnGameStart(game, gameStarter);
        if (gameStarter is CampaignGameStarter campaignStarter)
        {
            campaignStarter.AddBehavior(new ModCampaignBehavior());
        }
    }
}
```

`CampaignGameStarter.AddBehavior` 只把非 null 行为放入启动集合。战役 manager 负责事件注册和后续存档/读档编排，所以这个入口应放在战役启动阶段，而不是菜单回调或任意构造函数中。

## 依赖关系与边界

- **上游：** [`CampaignGameStarter`](../CampaignGameStarter) 收集具体的 `CampaignBehaviorBase`；[`Campaign`](../Campaign) 创建或重新初始化运行时 manager。
- **事件下游：** [`CampaignEvents`](../CampaignEvents) 通过 [`CampaignEventDispatcher`](../CampaignEventDispatcher) 分发 `RegisterEvents()` 注册的回调。
- **存档下游：** [`CampaignBehaviorBase`](../CampaignBehaviorBase) 提供 `SyncData(IDataStore)`；[`CampaignBehaviorDataStore`](../CampaignBehaviorDataStore) 与 [`SaveManager`](../../save-system/SaveManager) 在 manager 的存档边界中处理持久化。
- **运行时查找：** [`ICampaignBehaviorManager`](../ICampaignBehaviorManager) 从 `Campaign.Current` 暴露活动行为集合。

## 风险与崩溃/坏档边界

- 模块加载、菜单或状态切换时 `Campaign.Current` 可能为 `null`。不要在构造函数或无条件的 SubModule tick 中访问 manager。
- 同一监听器注册多次会使回调重复执行；重复的世界变更监听器可能把金钱、关系或编制改动执行两遍。
- `ICampaignBehavior` 自身没有 `SyncData` 和稳定行为 ID。裸接口实现不能替代正常 manager 路径中的 `CampaignBehaviorBase`，也不能建立兼容的存档契约。
- `SyncData` 只应保存稳定标量、ID 和受支持的引用；不要保存 `Agent`、`Mission`、UI 控件、delegate 或其他运行时引擎句柄。
- 事件回调有明确的战役时机。世界变更应使用对应的 [`Action`](../../campaign-ext/ChangeRelationAction) 或领域 API，不要在注册回调中绕过所有权和生命周期规则。

## 导航

- ↑ 父级：[Campaign API](./)
- ↔ 同级：[CampaignBehaviorBase](../CampaignBehaviorBase) · [CampaignBehaviorManager](../CampaignBehaviorManager) · [CampaignGameStarter](../CampaignGameStarter)
- 相关：[Campaign](../Campaign) · [ICampaignBehaviorManager](../ICampaignBehaviorManager) · [CampaignEvents](../CampaignEvents) · [SaveManager](../../save-system/SaveManager)
- 中文/English：[ICampaignBehavior](../../../../en/api/campaign/ICampaignBehavior)
