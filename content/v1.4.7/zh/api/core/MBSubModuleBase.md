---
title: "MBSubModuleBase"
description: "所有模组 SubModule 的基类：31 个生命周期钩子覆盖模块加载、类型注册、游戏启动、战役启动、每帧 tick、任务初始化与卸载。几乎每个 mod 都需要覆写其中三到五个。"
---
# MBSubModuleBase

**命名空间：** `TaleWorlds.MountAndBlade`
**模块：** `TaleWorlds.MountAndBlade`
**类型：** `public abstract class MBSubModuleBase`
**基类：** 无
**源文件：** `bannerlord-1.4.7/TaleWorlds.MountAndBlade/MBSubModuleBase.cs`（声明见第 8 行）

## 概述

`MBSubModuleBase` 是每个 mod 在 `SubModule.xml` 里声明的那个类的基类。它没有状态、没有字段，**只有 31 个虚拟方法**——每个对应游戏生命周期里的一个时刻。mod 的入口就是覆写其中几个：类型注册（`RegisterSubModuleTypes`）、游戏对象创建（`InitializeSubModuleGameObjects`）、游戏启动（`OnGameStart`，拿到 `IGameStarter` 注册战役扩展）、战役启动（`OnCampaignStart`）、每帧 tick（`OnApplicationTick`）。

它在栈中的位置最靠外——`Module` 收集所有已加载模块的 SubModule 实例，按固定顺序调用它们的钩子。任何 mod 想接入游戏，都必须经过这里，没有第二条路。理解这 31 个方法的**调用时机**比记住它们的签名更重要：绝大多数 mod 错误都是「在错误的时机里读 `Campaign.Current`」。

注意访问修饰符的差异：一部分钩子是 `public virtual`（外部也能调，如 `OnGameLoaded`、`DoLoading`、`OnMissionBehaviorInitialize`），另一部分是 `protected internal virtual`（只能在派生类或同程序集内覆写，外部调用受限）。覆写时用 `protected override` 对两者都成立，但签名必须完全一致。

## 心智模型

把 31 个钩子按「游戏在做什么」重排，就能得到一张时间线。modder 的心智模型应该是这条时间线，而不是一串方法名：

1. **模块加载期**：`OnSubModuleLoad` → `RegisterSubModuleTypes` → `InitializeSubModuleGameObjects`。此刻没有 `Game`，没有 `Campaign`。适合注册自定义类型、创建静态单例。
2. **启动装配期**：`OnBeforeGameStart` → `OnGameStart(game, gameStarterObject)`。**这是注册 Behavior / 模型 / 菜单的唯一窗口**，此时 `gameStarterObject` 才是有用的。
3. **游戏对象创建**：`OnNewGameCreated` / `OnGameLoaded` / `OnAfterGameLoaded` / `DoLoading`。读档与新游戏在这里分流。
4. **初始化完成**：`OnGameInitializationFinished` / `OnAfterGameInitializationFinished` / `OnCampaignStart` / `BeginGameStart`。**想读 `Campaign.Current` 就选这里或更晚**。
5. **运行期**：`OnApplicationTick(dt)`（每帧）、`AfterAsyncTickTick(dt)`、`OnNetworkTick(dt)`（联机）。三个 tick **互斥**：联机时 `OnApplicationTick` 仍会跑，但逻辑不能直接改世界。
6. **任务进出**：`OnBeforeMissionBehaviorInitialize` → `OnMissionBehaviorInitialize` →（战斗结束）→ `OnSubModuleUnloaded`。
7. **配置与激活**：`OnConfigChanged`、`OnSubModuleActivated` / `OnSubModuleDeactivated`（编辑器里切换模块）。

四个具体错误最常见：**在 `OnGameStart` 之前读 `Game.Current`**（还是 null）；**在 `OnApplicationTick` 里做重活**（每帧调用，直接拖帧）；**覆写钩子但不调 `base`**（破坏引擎内部状态，症状往往出现在很远的地方）；**在 `OnCampaignStart` 里访问任务层对象**（任务还没建立）。

## 何时使用 / 何时不要使用

- **使用**：注册自定义 MBObject 类型（`RegisterSubModuleTypes`）。
- **使用**：把战役扩展（Behavior / 模型 / 菜单 / 对话）注入游戏（`OnGameStart`）。
- **使用**：在战役建立后做初始化（`OnCampaignStart` / `OnAfterGameLoaded`）。
- **使用**：注入 UI 层的 ViewModel / 屏幕（`InitializeSubModuleGameObjects` 之后，或在 `OnGameStart` 里用 `gameStarterObject`）。
- **不要**：在 `OnApplicationTick` 里做非平凡计算或写文件——它每帧调用。
- **不要**：覆写 `DoLoading(Game game)` 返回 `true` 却不做实际加载。它表示「本模块接管了加载流程」，返回 true 会让引擎跳过默认加载。

## 成员说明

### 一、模块加载与类型注册

| 成员 | 用途、副作用与时机 |
| --- | --- |
| `protected internal virtual void OnSubModuleLoad()` | 模块 DLL 刚被加载。此刻只有类型系统可用，**没有 `Game` 实例**。适合建静态单例。 |
| `protected internal virtual void OnSubModuleUnloaded()` | 模块卸载。与上面成对，清理静态状态。 |
| `protected internal virtual void OnNewModuleLoad()` | 新一轮模块加载流程开始（热重载 / 编辑器场景）。 |
| `protected internal virtual void OnBeforeInitialModuleScreenSetAsRoot()` | 初始屏幕被设为根屏幕**之前**。改初始界面的钩子。 |
| `protected internal virtual void RegisterSubModuleTypes()` | **注册自定义 MBObject 类型的时机**。管理器的取法是 `MBObjectManager.Instance`（或 `Game` 已就绪时用 `Game.Current.ObjectManager`）。 |
| `public virtual void InitializeSubModuleGameObjects(Game game)` | 创建本模块的游戏对象（UI 层依赖、ViewModel 工厂等）。 |
| `public virtual void OnGameInitializationFinished(Game game)` | 初始化完成。此刻 `Game` 及其子对象基本就绪。 |
| `public virtual void OnAfterGameInitializationFinished(Game game, object starterObject)` | 初始化完成之后。做「补最后一步注册」的钩子。 |
| `public virtual void OnInitialState()` | 初始状态机（编辑器 / 主菜单阶段）。 |
| `public virtual void RegisterSubModuleObjects(bool isSavedCampaign)` | 注册游戏对象。`isSavedCampaign` 区分新战役与读档——**很多 mod 在这里犯「读档时重复注册」的错**。 |
| `public virtual void AfterRegisterSubModuleObjects(bool isSavedCampaign)` | 注册完成之后。 |

### 二、启动与装配

| 成员 | 用途、副作用与时机 |
| --- | --- |
| `protected internal virtual void OnBeforeGameStart(MBGameManager mbGameManager, List<string> disabledModules)` | 装配前。`disabledModules` 告诉你哪些模块被禁用了，可以据此跳过昂贵初始化。 |
| `protected internal virtual void OnGameStart(Game game, IGameStarter gameStarterObject)` | **最核心的钩子**。`gameStarterObject` 在战役模式下是 `CampaignGameStarter`，在这里注册 Behavior / 模型 / 菜单 / 对话。此刻 `Campaign.Current` 尚不可靠。 |
| `public virtual bool DoLoading(Game game)` | 返回 `true` 表示本模块接管加载流程。**除非真的接管，否则返回 `false` 或不覆写**。 |
| `public virtual void BeginGameStart(Game game)` | 开始游戏启动流程。 |
| `public virtual void OnGameInitializationFinished(Game game)` | 初始化完成。此刻 `Game` 及其子对象基本就绪。 |
| `public virtual void OnAfterGameInitializationFinished(Game game, object starterObject)` | 初始化完成之后。做「补最后一步注册」的钩子。 |
| `public virtual void OnInitialState()` | 初始状态机（编辑器 / 主菜单阶段）。 |

### 三、新游戏与读档

| 成员 | 用途、副作用与时机 |
| --- | --- |
| `public virtual void OnNewGameCreated(Game game, object initializerObject)` | 新战役刚创建。世界数据尚未装配。 |
| `public virtual void OnGameLoaded(Game game, object initializerObject)` | 存档加载后。世界数据已就绪。**替换玩家主角的 mod 常用此钩子**。 |
| `public virtual void OnAfterGameLoaded(Game game)` | 加载完成之后。做「读档后补状态」的正确位置。 |
| `public virtual void OnGameEnd(Game game)` | 游戏结束。清理非存档状态。 |

### 四、战役与任务

| 成员 | 用途、副作用与时机 |
| --- | --- |
| `public virtual void OnCampaignStart(Game game, object starterObject)` | 战役开始。**`Campaign.Current` 可安全使用的最早钩子之一**。 |
| `public virtual void OnMissionBehaviorInitialize(Mission mission)` | 任务内的 Behavior 初始化完成。给任务层扩展点的时机。 |
| `public virtual void OnBeforeMissionBehaviorInitialize(Mission mission)` | 任务内 Behavior 初始化**之前**。注册任务行为用后一个钩子。 |
| `public virtual void OnMultiplayerGameStart(Game game, object starterObject)` | 联机开始。 |

### 五、Tick 与帧循环

| 成员 | 用途、副作用与时机 |
| --- | --- |
| `protected internal virtual void OnApplicationTick(float dt)` | 每帧。**性能敏感**：只做极轻量工作；任何 O(n) 遍历都会拖帧。 |
| `protected internal virtual void AfterAsyncTickTick(float dt)` | 异步 tick 之后。主线程此处可做稍重的工作。 |
| `protected internal virtual void OnNetworkTick(float dt)` | 联机网络 tick。只在联机模式下调用。 |

### 六、配置、激活与调试

| 成员 | 用途、副作用与时机 |
| --- | --- |
| `public virtual void OnConfigChanged()` | 配置（分辨率、语言等）变更。重建 UI 依赖的资源用。 |
| `public virtual void OnSubModuleActivated()` / `OnSubModuleDeactivated()` | 编辑器里模块被激活 / 停用。 |
| `public virtual void OnMultiplayerGameStart(Game game, object starterObject)` | 联机开始。联机专有逻辑放这里，不要放进战役钩子。 |

## 示例

### 示例 1：标准 SubModule 骨架

只有四个钩子真正被用到——这四个的时机分别是「类型注册」「注入战役扩展」「战役就绪后初始化」「模块卸载」。

```csharp
using TaleWorlds.CampaignSystem;
using TaleWorlds.Core;
using TaleWorlds.MountAndBlade;

// 下面这个 Behavior 是「读者自己写的」，不是游戏 API
public class VisitCounterBehavior : CampaignBehaviorBase
{
    public VisitCounterBehavior() : base("MyMod.VisitCounter") { }
    public override void RegisterEvents() { }
    public override void SyncData(IDataStore dataStore) { }
}

public class MyModSubModule : MBSubModuleBase
{
    protected override void OnSubModuleLoad()
    {
        base.OnSubModuleLoad();
        // 这里没有 Game，也没有 Campaign
    }

    protected override void RegisterSubModuleTypes()
    {
        base.RegisterSubModuleTypes();
        // MyItemDef 也是读者自己的类型
        MBObjectManager.Instance.RegisterType<MyItemDef>("MyItemDef", "MyItemDefs", 9101u, true);
    }

    protected override void OnGameStart(Game game, IGameStarter gameStarterObject)
    {
        base.OnGameStart(game, gameStarterObject);

        // 唯一正确的战役扩展注册窗口
        if (gameStarterObject is CampaignGameStarter starter)
        {
            starter.AddBehavior(new VisitCounterBehavior());
        }
    }

    protected override void OnCampaignStart(Game game, object starterObject)
    {
        base.OnCampaignStart(game, starterObject);

        // 此刻 Campaign.Current 可用
        if (Campaign.Current != null)
        {
            Campaign.Current.GetCampaignBehavior<VisitCounterBehavior>();
        }
    }

    protected override void OnSubModuleUnloaded()
    {
        base.OnSubModuleUnloaded();
    }
}
```

### 示例 2：读档后补状态

读档路径与新游戏路径不同，`OnGameLoaded` / `OnAfterGameLoaded` 才能拿到完整世界。

```csharp
using TaleWorlds.Core;

protected override void OnGameLoaded(Game game, object initializerObject)
{
    base.OnGameLoaded(game, initializerObject);
    RestoreModState();
}

protected override void OnAfterGameLoaded(Game game)
{
    base.OnAfterGameLoaded(game);
    // 做「读档后补最后一步」的事：这里世界数据已完全就绪
}

private void RestoreModState()
{
    if (game == null) return;
}
```

### 示例 3：每帧 tick 的正确用法

`OnApplicationTick` 每帧调用。只做 O(1) 的状态推进，重活放 `AfterAsyncTickTick`。

```csharp
using TaleWorlds.Core;
using TaleWorlds.CampaignSystem;

private float _accumulator;

protected override void OnApplicationTick(float dt)
{
    base.OnApplicationTick(dt);

    // 累加而不做工作：把重活摊到每 0.5 秒一次
    _accumulator += dt;
    if (_accumulator < 0.5f) return;

    _accumulator = 0f;
    if (Campaign.Current == null) return;
    if (Campaign.Current.MainParty == null) return;

    // 每 0.5 秒做一次实际工作
}
```

## 风险与边界

- **`OnApplicationTick` 的性能**。每帧调用，O(n) 遍历直接掉帧。积累时间间隔再处理是标准做法。
- **过早访问 `Game.Current` / `Campaign.Current`**。`OnSubModuleLoad`、`RegisterSubModuleTypes`、`OnBeforeGameStart` 这几个钩子里 `Game` 都不存在或未完成装配。要读世界数据就等 `OnCampaignStart` 或更晚。
- **覆写不调 `base`**。引擎自身的 SubModule 也依赖这些默认实现（例如 `DoLoading` 的返回值链）。跳过 `base` 的症状通常表现在完全无关的地方。
- **`DoLoading` 返回 true 的代价**：它意味着引擎把加载流程交给本模块。不接管就返回 false。
- **`isSavedCampaign` 分支**。在 `RegisterSubModuleObjects` 里忽略这个参数，会导致读档时重复注册对象——表现为第二局游戏里菜单 / UI 出现两份。
- **联机下的 tick 差异**：`OnNetworkTick` 只在联机存在；单人和联机的 tick 时序不同，把逻辑放进 `OnNetworkTick` 会让它在单人中完全不跑。
- **模块顺序**。引擎按固定顺序调用所有 SubModule 的钩子，不受加载顺序影响。依赖别的 mod 的 `Game.Current` 子对象等于依赖它的实现细节。
- **静态状态残留**。`OnSubModuleLoad` 建的静态单例不会自动清理；模块卸载后它们仍被持有，指向已销毁的 `Game`。卸载钩子里显式清空。
- **线程**。所有钩子都在主线程。异步加载回调里调这些方法会破坏加载流程的顺序假设。

## 依赖关系

- 上游 / 提供者：
  - [Module](../Module) 收集所有已加载的 SubModule 实例并按序调用它们的钩子，`Module.CurrentModule` 是全局访问点。
  - [Game](../../core-extra/Game) 驱动 `OnGameStart` / `OnGameLoaded` / `OnAfterGameLoaded` / `OnGameEnd` 等钩子。
- 相互 / 下游：
  - [MBObjectManager](../../campaign-ext/MBObjectManager) 是 `RegisterSubModuleTypes` 注册类型的落点；[MBObjectBase](../../campaign-ext/MBObjectBase) 是被注册类型的基类。
  - [CampaignGameStarter](../../campaign/CampaignGameStarter) 经 `OnGameStart` 的 `IGameStarter` 参数交到 mod 手上，是战役扩展的注册台。
  - [MissionState](../../mission/MissionState) 与 [Mission](../../mission/Mission) 由 `OnBeforeMissionBehaviorInitialize` / `OnMissionBehaviorInitialize` 连接。
  - [ViewModel](../../core-extra/ViewModel) 是 UI 层数据绑定的基类，常在 `InitializeSubModuleGameObjects` 之后配合使用。
  - [ScreenManager](../../gui/ScreenManager) 与 [ScreenBase](../../gui/ScreenBase) 是 UI 钩子要协作的对象。

## 参见

- ↑ 父级：[core 索引](../)
- ↔ 相关：[Module](../Module) · [Game](../../core-extra/Game) · [MBObjectManager](../../campaign-ext/MBObjectManager) · [CampaignGameStarter](../../campaign/CampaignGameStarter) · [MissionState](../../mission/MissionState) · [ScreenManager](../../gui/ScreenManager)