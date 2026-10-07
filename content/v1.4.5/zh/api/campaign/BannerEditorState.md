---
title: "BannerEditorState"
description: "旗帜编辑器界面的 GameState：Handler 槽位 + 结束回调 + 两个取当前玩家家族 / 角色的便利方法。1.4.5 全树没有任何内部构造方或 Handler 实现，属于 UI 层扩展点。"
---

# BannerEditorState

**Namespace:** `TaleWorlds.CampaignSystem.GameState`
**Module:** `TaleWorlds.CampaignSystem`
**Type:** `public class BannerEditorState : TaleWorlds.Core.GameState`
**Base:** `TaleWorlds.Core.GameState`
**Source:** `bin/TaleWorlds.CampaignSystem/TaleWorlds.CampaignSystem.GameState/BannerEditorState.cs`

## 概述

`BannerEditorState` 是**旗帜编辑器界面的 GameState 载荷**，50 行源码里全部有效内容只有四件事：一个 `IBannerEditorStateHandler` 槽位、一个出栈回调 `Action`、两个便利 getter（取玩家家族、取玩家角色）、以及覆写的 `IsMenuState => true`。

```csharp
protected override void OnFinalize()
{
    base.OnFinalize();
    _onEndAction?.Invoke();
}
```

它继承 [GameState](../../core-extra/GameState)，通过静态 [GameStateManager](../../core-extra/GameStateManager) 管理生命周期。与同族的 [BarberState](../BarberState)、[CraftingState](../CraftingState)、[InventoryState](../InventoryState)、[PartyState](../PartyState)、[MapState](../MapState) 相比，它**多了唯一一件别的东西**：出栈时的回调。这让它可以做成「开界面 → 用户操作 → 关界面 → 通知我」的一次性往返，这是写 mod 时非常常用的形状。

在体系里它承担的是**「一次性往返界面 + 关闭通知」**这一环。

必须说清楚的事实：**1.4.5 的 CampaignSystem 源码树里没有任何地方 `new BannerEditorState(...)`，也没有 `CreateState<BannerEditorState>()`**。而且 `IBannerEditorStateHandler` **是一个空接口**——全树除了本类持有它之外，没有任何实现类。也就是说这个类型是纯粹为 UI 层预留的扩展点。

## 心智模型

把它当成**「一次性往返界面的信封」**就对了。

- **典型调用顺序：构造 → 设 Handler → Push → 用户操作 → Pop → OnFinalize 触发回调。** `_onEndAction` 是在 `OnFinalize` 里用 `?.Invoke()` 调用的，所以它**只会触发一次，而且是在 state 已经死掉之后**。想在回调里访问这个 state 的成员是危险的——`HandleFinalize()`（`TaleWorlds.Core/GameState.cs:89-98`）已经把 `_listeners` 和 `GameStateManager` 置 null 了。
- **两个构造器，走哪个决定了回调存不存在。** `public BannerEditorState()` 不写 `_onEndAction`，于是它是 null，`OnFinalize` 里 `?.` 短路。`public BannerEditorState(Action endAction)` 才把它存下来。**走无参构造就永远拿不到结束回调。**
- **`Handler` 是唯一可写可读的属性。** 公开的 get + set，推栈之后也能改。它的类型 `IBannerEditorStateHandler` 是个**空接口**，所以它现在纯粹是一个「让外部对象挂进来」的句柄——想真正通信，你得在 mod 侧定义自己的接口并让 `Handler` 指向它（或者直接用泛型之外的对象字段）。
- **`GetClan()` 与 `GetCharacter()` 是硬编码的便利方法。** 它们分别返回 `Clan.PlayerClan` 和 `CharacterObject.PlayerCharacter`，**不接受参数**。也就是说这个 state 只能编辑玩家自己的家族旗与玩家角色，**不能用来编辑某个 NPC 的旗帜**。这不是缺陷，是这个界面的定位。
- **`Level` 字段来自基类。** [GameState](../../core-extra/GameState) 有 `public int Level`，`PushState(gameState, level)` 用它控制栈层级。横幅编辑器通常应该用较高的 level（比如 50），避免被地图界面弹出时一起被清掉。
- **`IsMenuState => true`** 让菜单音乐继续播，和 [BarberState](../BarberState) 一样。

### 两个便利方法的实际边界

| 方法 | 返回 | 边界 |
| --- | --- | --- |
| `GetClan()` | `Clan.PlayerClan` | **玩家必须有家族。** 处于雇佣兵状态 / 无家族时返回的对象语义不同，不要假设它一定是「玩家统治的家族」。 |
| `GetCharacter()` | `CharacterObject.PlayerCharacter` | 永远是当前玩家角色。传不了参。 |

## 关键成员

| 成员 | 签名 | 这个成员是做什么用的 |
| --- | --- | --- |
| `Handler` | `public IBannerEditorStateHandler Handler { get; set; }` | 外部对象挂载槽位。**公开 get + set，推栈之后也能改**，这是它和 `Filter`（[BarberState](../BarberState) 的 `private set`）的关键差别。类型 `IBannerEditorStateHandler` 在 1.4.5 里是**空接口**（`IBannerEditorStateHandler.cs` 只有三行：一个命名空间、一个接口声明、花括号），所以现在它只是一个句柄，没有可调用的成员。 |
| `IsMenuState` | `public override bool IsMenuState => true` | 覆写自 [GameState](../../core-extra/GameState)。为 true 表示菜单型 state，菜单音乐继续播。**无副作用代码，但改它会改变界面音频。** |
| `BannerEditorState()` | `public BannerEditorState()` | 空构造器。`_onEndAction` 与 `Handler` 都留 null，`OnFinalize` 里的 `?.` 会短路。`CreateState<BannerEditorState>()` 无参重载走这条路。 |
| `BannerEditorState(Action endAction)` | `public BannerEditorState(Action endAction)` | 带结束回调的构造器，把 `endAction` 存进 `_onEndAction`。**通过 `CreateState<T>(params object[])` 传一个 `Action` 参数即可命中它**（内部 `Activator.CreateInstance`）。 |
| `GetClan()` | `public Clan GetClan()` | 便利方法，硬编码返回 `Clan.PlayerClan`。**不判空**，`Clan.PlayerClan` 为 null 时返回 null。 |
| `GetCharacter()` | `public CharacterObject GetCharacter()` | 便利方法，硬编码返回 `CharacterObject.PlayerCharacter`。同样不判空。 |
| `OnFinalize()` | `protected override void OnFinalize()` | **唯一的生命周期覆写**。先 `base.OnFinalize()`，再 `_onEndAction?.Invoke()`。由基类的 `HandleFinalize()` 调用，**在 `_listeners` 与 `GameStateManager` 被置 null 之后执行**，所以回调里访问基类成员是危险的。 |

## 怎么用

这是一个 GameState（游戏状态机的一屏），不是一个模型也不是一个行为。它的职责只有三件：告诉状态机「我是菜单态」、把一个处理器的引用挂在上面、以及在退出时回调一个动作。

**怎么拿到它**：声明在 `bannerlord-1.4.5/Bannerlord.Source/bin/TaleWorlds.CampaignSystem/TaleWorlds.CampaignSystem.GameState/BannerEditorState.cs:6`，继承自 `TaleWorlds.Core.GameState`。它没有构造点——整个 1.4.5 C# 源树里没有任何一处 `new BannerEditorState`，同目录 26 个 GameState 走的都是 `Game.Current.GameStateManager.CreateState<T>()` 这条路，例如 `CraftingHelper.cs:38`、`InventoryScreenHelper.cs:190`、`PartyScreenHelper.cs:79`。

它有两个构造器：无参的 `BannerEditorState()`（`:26`）和带回调的 `BannerEditorState(Action endAction)`（`:30`）。带回调那个把 `endAction` 存进 `_onEndAction`（`:10`），并在 `OnFinalize`（`:45`）里用 `?.Invoke()` 触发。`IsMenuState`（`:12`）硬编码返回 true，意味着这一屏永远带着菜单栏。

```csharp
BannerEditorState state = Game.Current.GameStateManager.CreateState<BannerEditorState>();
state.Handler = myHandler;                                  // 可空，置 null 不影响进出
Clan shownClan = state.GetClan();                           // 固定返回 Clan.PlayerClan
CharacterObject shownChar = state.GetCharacter();            // 固定返回 CharacterObject.PlayerCharacter
Debug.Print("进入旗帜编辑器: 氏族=" + shownClan.Name + " 角色=" + shownChar.Name, 0);
state.Handler = null;
Game.Current.GameStateManager.PopState();
```

它的两个便捷方法没有参数也没有分支：`GetClan()`（`:35`）直接返回 `Clan.PlayerClan`，`GetCharacter()`（`:40`）直接返回 `CharacterObject.PlayerCharacter`。

**最常见的坑**：处理器接口 `IBannerEditorStateHandler`（`bannerlord-1.4.5/Bannerlord.Source/bin/TaleWorlds.CampaignSystem/TaleWorlds.CampaignSystem.GameState/IBannerEditorStateHandler.cs:3`）是一个**空标记接口**，一个成员都没有。所以它挂了 `Handler` 也不会收到任何回调，想在这一屏拦截操作，只能自己在进出场时挂事件。

## 真实示例

开一次往返界面并在关闭时拿到通知（形状对照 `InventoryScreenHelper.cs:190` 的 state 创建方式）：

```csharp
using System;
using TaleWorlds.CampaignSystem;
using TaleWorlds.CampaignSystem.GameState;
using TaleWorlds.Core;

public static void OpenBannerEditor(Action onClosed)
{
    if (Game.Current == null || Campaign.Current == null)
    {
        return;
    }

    BannerEditorState state = Game.Current.GameStateManager.CreateState<BannerEditorState>(onClosed);
    state.Handler = new MyBannerEditorHandler();
    Game.Current.GameStateManager.PushState(state, 50);
}
```

自定义 handler 并在界面活跃期间回读当前编辑目标（`GetClan` / `GetCharacter` 都是读点）：

```csharp
using TaleWorlds.CampaignSystem;
using TaleWorlds.CampaignSystem.GameState;
using TaleWorlds.Core;

public class MyBannerEditorHandler : IBannerEditorStateHandler
{
    public string LastSeenClanName { get; private set; }

    public void OnEditorOpened(BannerEditorState state)
    {
        Clan playerClan = state.GetClan();
        if (playerClan != null)
        {
            LastSeenClanName = playerClan.Name.ToString();
        }

        CharacterObject playerCharacter = state.GetCharacter();
        Debug.Print("editing clan=" + LastSeenClanName + " char=" + playerCharacter.Name, 0);
    }
}
```

检查会话是否还活着（`GameStateManager.LastOrDefault<T>()` 找栈里最近的那个）：

```csharp
using TaleWorlds.CampaignSystem;
using TaleWorlds.CampaignSystem.GameState;
using TaleWorlds.Core;

public static bool IsBannerEditorOpen()
{
    if (Game.Current == null)
    {
        return false;
    }

    BannerEditorState active = Game.Current.GameStateManager.LastOrDefault<BannerEditorState>();
    if (active == null)
    {
        return false;
    }

    Debug.Print("handler attached = " + (active.Handler != null), 0);
    return active.Handler != null;
}
```

主动关闭编辑器（`PopState` 会触发 `OnFinalize`，从而回调 `_onEndAction`）：

```csharp
using TaleWorlds.CampaignSystem;
using TaleWorlds.CampaignSystem.GameState;
using TaleWorlds.Core;

public static void CloseBannerEditor()
{
    if (Game.Current == null)
    {
        return;
    }

    if (Game.Current.GameStateManager.LastOrDefault<BannerEditorState>() != null)
    {
        Game.Current.GameStateManager.PopState(50);
    }
}
```

## 风险与边界

- **`_onEndAction` 在 state 已经半死的时候触发。** `GameState.HandleFinalize()`（`GameState.cs:89-98`）先把 `_listeners = null`、`GameStateManager = null`，然后才调 `OnFinalize()`。**在回调里访问 `Predecessor` / `IsActive` / `Listeners` 会 NRE。**
- **走无参构造就没有结束回调。** `_onEndAction` 是 null，`?.Invoke()` 短路。想拿回调就必须走 `BannerEditorState(Action)`。
- **`Handler` 的类型是空接口。** 1.4.5 里 `IBannerEditorStateHandler` 没有任何成员，也没有任何实现类。想用它通信，得自己定义带成员的实现；把一个没有 `Handler` 消费方的 state 推上去不会报错，但也不会有任何交互。
- **`GetClan` / `GetCharacter` 不判空也不接受参数。** `Clan.PlayerClan` 或 `CharacterObject.PlayerCharacter` 为 null 时返回 null；且**这个 state 只能服务于玩家**，编辑 NPC 旗帜要另建 state。
- **`PushState` 的 level 要选对。** 地图态界面弹出低 level 的横幅编辑器，可能被地图相关清理连带弹出。`InventoryScreenHelper` 那一族都用了较高的 level，这里建议同样处理。
- **`CreateState<T>(params object[])` 靠构造函数签名匹配。** 传两个参数（比如 `state` 加一个别的）会找不到匹配的构造器并抛异常，而不是「忽略多余的」。
- **全树无内部构造方。** 1.4.5 的 CampaignSystem 里没有 `new BannerEditorState(...)`，也没有 `CreateState<BannerEditorState>()`。**触发时机要 mod 自己提供。**
- **`Handler` 推栈后仍可写。** 这是它区别于 [BarberState](../BarberState) 的 `Filter`（`private set`）的地方，但也意味着外部可以在会话中途把 handler 换掉。
- **不缓存这个 state。** 出栈后 `GameStateManager` 为 null，对象成为垃圾。

## 跨版本提示

`bannerlord-1.4.5/Bannerlord.Source/bin/TaleWorlds.CampaignSystem/TaleWorlds.CampaignSystem.GameState/BannerEditorState.cs` 是 50 行原始源码。跨版本比对时盯四点：两个构造器是否都还在（无参那个是 `CreateState<T>()` 的硬要求）、`Handler` 是否仍是公开 get + set、`_onEndAction` 是否仍在 `OnFinalize` 里通过 `?.Invoke()` 触发、以及 `GetClan` / `GetCharacter` 是否仍硬编码返回玩家对象。另外注意 `IBannerEditorStateHandler` 是个空接口——如果某个版本给它加了成员，那些成员就是本类型版本敏感的真正契约。

## 依赖关系

- 基类：[GameState](../../core-extra/GameState) 提供 `Level` / `IsActive` / `Predecessor` / `RegisterListener` 与 `HandleInitialize` / `HandleFinalize` / `HandleActivate` 生命周期，以及本类覆写的 `OnFinalize()` 入口
- 栈管理器：[GameStateManager](../../core-extra/GameStateManager) 的 `CreateState<T>(params object[])` / `PushState(gameState, level)` / `PopState(level)` / `LastOrDefault<T>` 是本类型唯一的落地路径
- Handler 契约：`IBannerEditorStateHandler`（同目录 `IBannerEditorStateHandler.cs`），1.4.5 里为空接口、无任何实现类
- 编辑目标来源：`GetClan()` 返回 [Clan](../Clan) 的 `PlayerClan`，`GetCharacter()` 返回 [CharacterObject](../CharacterObject) 的 `PlayerCharacter`
- 回调委托：`System.Action`，由 `OnFinalize()` 触发
- 同族 GameState：[BarberState](../BarberState)、[CraftingState](../CraftingState)、[InventoryState](../InventoryState)、[PartyState](../PartyState)、[MapState](../MapState) 是同一模式的其它实例
- 桶首页：[campaign API 分区](../)
