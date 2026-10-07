---
title: "MBSubModuleBase"
description: "所有 mod 的模块基类：30 个生命周期钩子覆盖模块加载、注册、战役启动、读档、任务初始化与应用 tick。mod 世界的起点，也是挂 UI 监听与全局缓存的地方。"
---

# MBSubModuleBase

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade（MISSION 层，但被所有模块继承）
**Type:** `public abstract class MBSubModuleBase`
**Base:** 无（抽象基类）
**Source:** `bannerlord-1.5.3/TaleWorlds.MountAndBlade/MBSubModuleBase.cs`

## 概述

`MBSubModuleBase` 是每个 Bannerlord 模块（官方或 mod）的基类：把一个 DLL 挂进游戏加载流程的唯一入口。你继承它、实现需要的那几个钩子，引擎按固定顺序回调——从模块加载（`OnSubModuleLoad`）到注册（`RegisterSubModuleTypes` / `RegisterSubModuleObjects`）、到战役启动（`OnGameStart`）、到读档（`OnGameLoaded`）、到每帧（`OnApplicationTick`）。它**只管回调**，不提供任何服务；所有实际功能都在你传的 `Game`、`IGameStarter`、`Mission` 参数上。

## 心智模型

时间线（从早到晚，只列最常用的）：

1. **`OnSubModuleLoad()`**：程序集加载完成。此时**没有战役**，不能碰 `Campaign.Current`。适合初始化静态配置、注册自定义类型。
2. **`RegisterSubModuleTypes()`**：注册自定义类型（给反射 / 存档系统用）。
3. **`OnBeforeGameStart(MBGameManager, List<string> disabledModules)`**：开新游戏前的准备。
4. **`OnGameStart(Game game, IGameStarter gameStarterObject)`：**战役启动，拿到 [CampaignGameStarter](../../campaign/CampaignGameStarter)。**所有 behavior / model 注册必须在这里。**
5. **`OnNewGameCreated(Game, object)` / `OnGameLoaded(Game, object)` / `OnAfterGameLoaded(Game)`**：新游戏建成后 / 读档时 / 读档完成后。清缓存、重建引用的时机。
6. **`OnCampaignStart(Game, object starterObject)`**：战役正式开始。
7. **`RegisterSubModuleObjects(bool isSavedCampaign)` / `AfterRegisterSubModuleObjects(bool isSavedCampaign)`**：XML 对象注册（读档时 `isSavedCampaign` 为 true）。
8. **`OnMissionBehaviorInitialize(Mission)` / `OnBeforeMissionBehaviorInitialize(Mission)`**：进入任务时。
9. **`OnApplicationTick(float dt)` / `AfterAsyncTickTick(float dt)`**：每帧。`AfterAsyncTickTick` 在异步工作之后。
10. **`OnGameEnd(Game)`**：退出战役。

**常见误用与坑**

1. **在 `OnSubModuleLoad` 里访问 `Campaign.Current`** —— 必然 null。要等 `OnGameStart`。
2. **在 `OnApplicationTick` 里 `PushScreen`** —— 界面切换频繁导致栈爆掉，且 tick 不是处理 UI 请求的地方。缓存意图，用事件或专门的 UI 层模块处理。
3. **缓存 `IGameStarter` 或 `Game`**：它们在战役结束时失效。缓存 `Campaign.Current` 更糟（读档重建）。
4. **`OnGameLoaded` vs `OnAfterGameLoaded` 用错**：前者在行为数据填充前后，行为对象可能还没恢复；后者在加载流程末尾。想安全地读世界状态用后者。
5. **把重活放 `OnApplicationTick`**：每帧调用，没有帧预算意识。转投战役 tick 或自己的定时器。

## 怎么用

### 怎么拿到它

**你不需要拿到它——它就是你 mod 的入口类。** 实例由 `Module` 反射创建并缓存进 `_subModuleBases`（按 `SubModuleInfo` 做键，`Module.cs:236-244` 读、`:106` 取）。你的 `SubModuleBase` 子类名必须与 `Module.xml` 里 `<SubModules>` 声明的类型名一致，否则 `GetSubModuleBase` 返回 `null`，你的回调一次都不会被调。

调用顺序由 `Module` 与 `MBGameManager` 固定：

1. `Module.InitializeSubModuleBases` 逐个调 `OnSubModuleLoad()`（`Module.cs:194`），全程包在 try/catch 里；
2. 紧接着 `OnNewModuleLoaded` 逐个调 `OnNewModuleLoad()`（`Module.cs:231`）；
3. 游戏层由 `MBGameManager` 广播：`OnGameStart` 先遍历所有 submodule 调一遍（`MBGameManager.cs:183-186`），**之后**才 `Game.Current.AddGameModelsManager<MissionGameModels>(gameStarter.Models)`（`MBGameManager.cs:187`）——模型快照在你的 `OnGameStart` 返回之后才取；
4. 战役侧 `MBGameManager.OnNewCampaignStart` 调 `OnCampaignStart`（`MBGameManager.cs:74-77`）；
5. 卸载时 `FinalizeSubModulesBases` 调 `OnSubModuleUnloaded()`（`Module.cs:251`）；运行期开关模块则调 `OnSubModuleActivated`（`Module.cs:1868`）/ `OnSubModuleDeactivated`。

要注意修饰符不统一：`OnSubModuleLoad`、`OnGameStart`、`InitializeGameStarter`、`OnNetworkTick` 是 `protected internal virtual`（`MBSubModuleBase.cs:11`/`:46`/`:61`/`:142`），而 `OnGameLoaded`、`OnCampaignStart`、`OnGameEnd`、`DoLoading` 是 `public virtual`（`:66`/`:86`/`:122`/`:116`）——override 关键字要跟着变。

### 典型用法

```csharp
public class MyModSubModule : MBSubModuleBase
{
    // protected internal -> 必须写 protected override
    protected override void OnSubModuleLoad()
    {
        base.OnSubModuleLoad();
        Debug.Print("[mymod] loaded");
    }

    // 注册战役扩展的唯一正确时机
    protected override void OnGameStart(Game game, IGameStarter gameStarterObject)
    {
        base.OnGameStart(game, gameStarterObject);
        ((CampaignGameStarter)gameStarterObject).AddBehavior(new MySupplyBehavior());
    }

    // public virtual -> 必须写 public override
    public override void OnCampaignStart(Game game, object starterObject)
    {
        base.OnCampaignStart(game, starterObject);
        MySupplyBehavior b = Campaign.Current.GetCampaignBehavior<MySupplyBehavior>();
        if (b != null) b.MarkReady();
    }

    protected override void OnNetworkTick(float dt) { }
}
```

### 最容易踩的坑

在 `OnSubModuleLoad` 里抛异常。`InitializeSubModuleBases` 的 catch 块会拼出一段可读的字符串（`Module.cs:198-207`，含模块名、DLL 名、异常类型与消息，并写进崩溃报告的 custom string，`:220`），然后执行 `throw new Exception()`（`Module.cs:221`）——**重新抛出的是一个没有任何 message、没有 inner exception 的空异常**，原始堆栈被彻底丢弃。后果是：崩溃对话框里只有引擎拼的那段文字，实际抛出的东西是个空壳；如果异常来自深层调用，你连是哪一行炸的都无从下手，而你明明在 `OnSubModuleLoad` 里写了对的代码。规矩是：`OnSubModuleLoad` 里只做不依赖游戏态的注册，绝不抛；真要报告问题就 `MBDebug.Print` 出来。

## 成员与调用时机

**模块生命周期**

- `protected internal virtual void OnSubModuleLoad()`：程序集加载。**没有战役**。
- `protected internal virtual void OnSubModuleUnloaded()`：模块卸载（很少发生）。
- `protected internal virtual void OnNewModuleLoad()`：有「新模块」被加载到本模块之后时。
- `protected internal virtual void OnBeforeInitialModuleScreenSetAsRoot()`：初始界面设为根之前。
- `public virtual void OnConfigChanged()`：配置文件变更。
- `public virtual void OnSubModuleActivated()` / `OnSubModuleDeactivated()`：模块启用/停用。

**类型与对象注册**

- `protected internal virtual void RegisterSubModuleTypes()`：注册自定义类型（序列化 / 反射可见性）。
- `public virtual void RegisterSubModuleObjects(bool isSavedCampaign)`：注册 XML 对象。读档时 `isSavedCampaign == true`。
- `public virtual void AfterRegisterSubModuleObjects(bool isSavedCampaign)`：注册完成后的钩子。
- `public virtual void InitializeSubModuleGameObjects(Game game)`：游戏对象初始化。

**游戏启动**

- `protected internal virtual void OnBeforeGameStart(MBGameManager mbGameManager, List<string> disabledModules)`：**唯一能修改启用模块列表的位置**。
- `protected internal virtual void OnGameStart(Game game, IGameStarter gameStarterObject)`：注册 behavior 与 model。
- `protected internal virtual void InitializeGameStarter(Game game, IGameStarter starterObject)`：改启动对象本身（比 `OnGameStart` 更底层）。
- `public virtual void BeginGameStart(Game game)` / `OnGameInitializationFinished(Game)` / `OnAfterGameInitializationFinished(Game, object)` / `OnCampaignStart(Game, object starterObject)`：启动过程的细分节点。

**读档与新游戏**

- `public virtual void OnNewGameCreated(Game game, object initializerObject)`：新世界生成完毕。
- `public virtual bool DoLoading(Game game)`：返回 `true` 表示本模块要参与加载流程。
- `public virtual void OnGameLoaded(Game game, object initializerObject)`：读档中（行为数据填充阶段）。
- `public virtual void OnAfterGameLoaded(Game game)`：读档完成。**清缓存安全点。**

**任务**

- `public virtual void OnBeforeMissionBehaviorInitialize(Mission mission)`：任务行为初始化之前。
- `public virtual void OnMissionBehaviorInitialize(Mission mission)`：任务行为初始化。注册任务相关缓存与事件的时机。
- `public virtual void OnMultiplayerGameStart(Game game, object starterObject)`：联机启动。
- `public virtual void OnInitialState()`：初始状态设置。

**每帧与结束**

- `protected internal virtual void OnApplicationTick(float dt)`：每帧主线程。
- `protected internal virtual void AfterAsyncTickTick(float dt)`：异步工作完成后的 tick。
- `protected internal virtual void OnNetworkTick(float dt)`：联机网络 tick。
- `public virtual void OnGameEnd(Game game)`：战役结束。**解静态缓存的地方**。

## 真实示例

```csharp
public class MyModSubModule : MBSubModuleBase
{
    private static MyModSubModule _instance;

    protected internal override void OnSubModuleLoad()
    {
        base.OnSubModuleLoad();
        _instance = this;                 // 无战役，只有静态可用
    }

    protected internal override void OnGameStart(Game game, IGameStarter gameStarterObject)
    {
        base.OnGameStart(game, gameStarterObject);
        var starter = (CampaignGameStarter)gameStarterObject;
        starter.AddBehavior(new MyCaravanBehavior());     // 注册只发生在这里
    }

    public override void OnAfterGameLoaded(Game game)
    {
        base.OnAfterGameLoaded(game);
        MyStaticCache.Clear();            // 读档后清缓存
        Debug.Print("loaded, campaign = " + (Campaign.Current != null));
    }

    protected internal override void OnMissionBehaviorInitialize(Mission mission)
    {
        base.OnMissionBehaviorInitialize(mission);
        if (mission != null && mission.IsFieldBattle)
            Debug.Print("field battle started: " + mission.SceneName);
    }

    protected internal override void OnApplicationTick(float dt)
    {
        base.OnApplicationTick(dt);
        MobileParty main = Campaign.Current?.MainParty;
        if (main != null)
            Debug.Print("party members = " + main.Party.NumberOfAllMembers);
    }

    public override void OnGameEnd(Game game)
    {
        base.OnGameEnd(game);
        _instance = null;
    }
}
```

## 风险与边界

- **`protected internal` 的可见性**：`OnSubModuleLoad` / `OnGameStart` / `OnApplicationTick` 等是 `protected internal virtual`。派生类可 override，但**不能**在 `internal` 的程序集外直接调用——只能通过覆写。每个 mod 都是独立程序集，所以这些回调只能在覆写里用。
- **顺序依赖是真实约束**：`OnGameStart` 的调用顺序由模块加载序决定，它直接决定模型覆盖能否生效（见 [GameModels](../../campaign/GameModels)）。写覆盖时用 `SubModuleLoadOrder` 明确排序，并在末尾自查。
- **静态单例跨战役**：`_instance` 这类静态引用在 `OnGameEnd` 不清就会指向已销毁战役的上下文。养成在 `OnGameEnd` 清空的习惯。
- **无跨域限制但有实际约束**：这个类在 MountAndBlade 层，你可以引用 Core / CampaignSystem / ScreenSystem。真正的风险是**在 CampaignSystem 层的行为里反向调用 ScreenSystem**（跨域），那才是会出问题的地方。
- **多模块共存**：多个 mod 都 override 同一钩子时，调用顺序 = 模块加载序。写模块级逻辑时假设别人会先/后跑，避免依赖。

## 依赖关系

- [CampaignGameStarter](../../campaign/CampaignGameStarter) — `OnGameStart` 的第二个参数，注册 behavior 与 model 的唯一入口
- [Campaign](../../campaign/Campaign) — 战役上下文，从 `OnGameStart` 之后的钩子里访问
- [MissionState](../../mission/MissionState) — 任务生命周期，与 `OnMissionBehaviorInitialize` 时机对应
- [GameModels](../../campaign/GameModels) — 覆盖模型是否生效取决于 `OnGameStart` 的模块加载顺序