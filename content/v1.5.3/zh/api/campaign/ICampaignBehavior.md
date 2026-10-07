---
title: "ICampaignBehavior"
description: "战役行为的最小契约：一个 RegisterEvents() 方法。实现它就能被 CampaignEventDispatcher 生命周期化地回调，不必继承 CampaignBehaviorBase。"
---

# ICampaignBehavior

**Namespace:** TaleWorlds.CampaignSystem
**Module:** TaleWorlds.CampaignSystem
**Type:** `public interface ICampaignBehavior`
**Base:** 无（接口，单方法）
**Source:** `bannerlord-1.5.3/TaleWorlds.CampaignSystem/ICampaignBehavior.cs`

## 概述

`ICampaignBehavior` 在 1.5.3 里只有一个方法：`void RegisterEvents()`。它是 [CampaignBehaviorManager](../../campaign-ext/CampaignBehaviorManager) 与「需要被回调的行为对象」之间的类型约束，也是 `ICampaignBehaviorManager` 相关 API 的参数类型。单独实现这个接口而不继承 `CampaignBehaviorBase` 是可行的——代价是没有 `SyncData` 存档通道、没有 `StringId`、也没有静态 `GetCampaignBehavior<T>()`。

## 心智模型

它在战役启动期被使用：管理器拿到一组 behavior（或一组实现了本接口的对象），逐个调 `RegisterEvents()`，让它们去订阅 [CampaignEvents](../CampaignEvents) 上的事件。**接口本身不做任何生命周期管理**——不负责存档、不负责查询、不保证只被调一次。

判断一个对象该实现它还是该继承 `CampaignBehaviorBase`：

| 需求 | 选择 |
|---|---|
| 只想订阅几个事件，不要状态 | `ICampaignBehavior` 足够 |
| 需要跨存档保留状态 | 用 `CampaignBehaviorBase` 的 `SyncData` |
| 需要被别的 mod `GetCampaignBehavior<T>()` 找到 | `CampaignBehaviorBase`（管理器按 `CampaignBehaviorBase` 列表查询） |

**常见误用与坑**

1. **以为实现接口就自动被管理**。管理器按 `CampaignBehaviorBase` 列表工作；纯 `ICampaignBehavior` 实例不会被 `GetBehavior<T>()` 查到，除非管理器那条路径接受它。
2. **`RegisterEvents()` 里做重初始化**（new 一堆子对象）。这个方法在每次读档都会跑，重初始化会丢掉你刚恢复的状态。
3. **同名不同源**：`CampaignBehaviorBase` 有一个 `static T GetCampaignBehavior<T>()`，接口没有。写工具类时别混用。

## 怎么用

### 怎么拿到它

它不能 `new`，也没有任何静态入口——整个接口只有一个成员 `void RegisterEvents()`（`ICampaignBehavior.cs:9`）。你拿到它只有两种方式：

- 实现它：`CampaignBehaviorBase : ICampaignBehavior`（`CampaignBehaviorBase.cs:6`），所有原生 behavior 都是这么写的，例如 `AlleyCampaignBehavior : CampaignBehaviorBase, IAlleyCampaignBehavior, ICampaignBehavior`（`AlleyCampaignBehavior.cs:31`）—— 基类已经实现了接口，重复列出只是作者的习惯。
- 作为窄化类型查询：用 `Campaign.Current.GetCampaignBehavior<T>()`（`Campaign.cs:1317`），把 `T` 写成你自己声明的窄接口（`IAlleyCampaignBehavior : ICampaignBehavior` 这类），而不是 `ICampaignBehavior` 本身。`GetBehavior<T>` 用 `is T` 匹配（`CampaignBehaviorManager.cs:69`），写成 `ICampaignBehavior` 会拿到列表里第一个实例，类型不对。

注意引擎**从不**通过 `ICampaignBehavior` 调用：`CampaignBehaviorManager.RegisterEvents` 遍历时把元素当作 `CampaignBehaviorBase` 引用（`CampaignBehaviorManager.cs:35`）。也就是说，单独实现 `ICampaignBehavior` 而不继承 `CampaignBehaviorBase` 的类，进不了 manager，也不会被存档。

### 典型用法

```csharp
// 1) 声明你自己的窄接口，这样外部拿到的静态类型是有用的
public interface IMySupplyCampaignBehavior : ICampaignBehavior
{
    int PendingShipments { get; }
}

// 2) 实现它，同时继承基类（基类已实现 ICampaignBehavior，不要漏掉 SyncData）
public class MySupplyBehavior : CampaignBehaviorBase, IMySupplyCampaignBehavior
{
    public int PendingShipments { get; private set; }

    public override void RegisterEvents() { /* 挂 CampaignEvents / MBCampaignEvent */ }

    public override void SyncData(IDataStore dataStore) { }
}

// 3) 消费方按窄接口查询，命中的是列表里第一个实现了该接口的 behavior
IMySupplyCampaignBehavior supply = Campaign.Current.GetCampaignBehavior<IMySupplyCampaignBehavior>();
Debug.Print("pending = " + supply.PendingShipments);
```

### 最容易踩的坑

把 `ICampaignBehavior` 当成 `CampaignBehaviorBase` 的替代品来写，只实现接口、不继承基类。后果是这个类不会被 `CampaignGameStarter.AddBehavior` 的类型体系接住（该方法签名要求 `CampaignBehaviorBase`，`CampaignGameStarter.cs:48`），`CampaignBehaviorManager.RegisterEvents` 也永远不会调到它（`CampaignBehaviorManager.cs:35` 的循环变量是 `CampaignBehaviorBase`）——表现就是代码编译通过、behavior 被注册进去，但 `RegisterEvents` 一次都不执行，所有事件静默不生效，且没有报错。

## 成员与调用时机

- `void RegisterEvents()`：唯一的成员。语义是「订阅你需要的战役事件」。由 [CampaignBehaviorManager](../../campaign-ext/CampaignBehaviorManager) 的 `RegisterEvents()` 遍历调用，或由 `CampaignGameStarter.AddBehavior` 间接调用（后者要求参数是 `CampaignBehaviorBase`）。**在这里订阅时务必以宿主对象 `this` 作为 `AddNonSerializedListener` 的第一个参数**，保证读档后能整体解绑。

## 真实示例

```csharp
// 轻量监听器：不需要存档状态，只要一个通知
public class MyPingBehavior : ICampaignBehavior
{
    public void RegisterEvents()
    {
        CampaignEvents.OnHeroKilled.AddNonSerializedListener(this, OnHeroKilled);
    }

    private void OnHeroKilled(Hero victim, Hero killer, KillCharacterAction.KillCharacterActionDetail detail, bool showNotification = true)
    {
        if (killer == Hero.MainHero)
            Debug.Print("main hero killed: " + victim.Name);
    }
}

// 注册：把它交给战役启动流程
protected override void OnGameStart(Game game, IGameStarter gameStarterObject)
{
    base.OnGameStart(game, gameStarterObject);
    // 需要被 GetBehavior<T>() 查到，就用 CampaignBehaviorBase 版本；
    // 纯监听器可以直接自己持有并在合适时机 RegisterEvents()
    var listener = new MyPingBehavior();
    listener.RegisterEvents();
}
```

## 风险与边界

- **无存档契约**：实现本接口不会自动获得任何存档能力。需要持久化就必须另找通道（例如自己写进 `Campaign` 的自定义管理器，或退回到 `CampaignBehaviorBase`）。
- **无生命周期保证**：接口不约束「谁在什么时候调用 `RegisterEvents`」。如果调用方在错误的时机（战役未加载、主菜单）调用，订阅内部的 `Campaign.Current` 会 NRE。调用方负责时机。
- **接口稳定性**：`ICampaignBehavior` 属于内部契约，1.5.3 只有 1 个方法，但游戏更新完全可能加方法——用显式实现或抽象基类隔离，能降低升级成本。
- **重复订阅**：`RegisterEvents` 被调两次就订阅两次。因为没有内置去重，订阅侧的幂等性由你负责。

## 依赖关系

- [CampaignBehaviorBase](../CampaignBehaviorBase) — 提供了本接口的默认实现路线，附带 `SyncData` 与 `StringId`
- [CampaignBehaviorManager](../../campaign-ext/CampaignBehaviorManager) — 调用 `RegisterEvents()` 的管理者
- [CampaignEvents](../CampaignEvents) — 订阅目标，`RegisterEvents()` 的实际工作内容