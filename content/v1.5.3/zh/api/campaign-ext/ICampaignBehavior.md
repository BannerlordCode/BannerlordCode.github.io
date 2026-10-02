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

`ICampaignBehavior` 在 1.5.3 里只有一个方法：`void RegisterEvents()`。它是 [CampaignBehaviorManager](../CampaignBehaviorManager) 与「需要被回调的行为对象」之间的类型约束，也是 `ICampaignBehaviorManager` 相关 API 的参数类型。单独实现这个接口而不继承 `CampaignBehaviorBase` 是可行的——代价是没有 `SyncData` 存档通道、没有 `StringId`、也没有静态 `GetCampaignBehavior<T>()`。

## 心智模型

它在战役启动期被使用：管理器拿到一组 behavior（或一组实现了本接口的对象），逐个调 `RegisterEvents()`，让它们去订阅 [CampaignEvents](../../campaign/CampaignEvents) 上的事件。**接口本身不做任何生命周期管理**——不负责存档、不负责查询、不保证只被调一次。

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

## 成员与调用时机

- `void RegisterEvents()`：唯一的成员。语义是「订阅你需要的战役事件」。由 [CampaignBehaviorManager](../CampaignBehaviorManager) 的 `RegisterEvents()` 遍历调用，或由 `CampaignGameStarter.AddBehavior` 间接调用（后者要求参数是 `CampaignBehaviorBase`）。**在这里订阅时务必以宿主对象 `this` 作为 `AddNonSerializedListener` 的第一个参数**，保证读档后能整体解绑。

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

- [CampaignBehaviorBase](../../campaign/CampaignBehaviorBase) — 提供了本接口的默认实现路线，附带 `SyncData` 与 `StringId`
- [CampaignBehaviorManager](../CampaignBehaviorManager) — 调用 `RegisterEvents()` 的管理者
- [CampaignEvents](../../campaign/CampaignEvents) — 订阅目标，`RegisterEvents()` 的实际工作内容