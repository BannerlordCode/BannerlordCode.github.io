---
title: "SandBoxSubModule"
description: "v1.4.5 SandBox 的模块生命周期入口，负责安装战役任务、存档、Model 和对象系统服务。"
---
# SandBoxSubModule

**命名空间:** `SandBox`  
**模块:** `SandBox`  
**类型:** `public class SandBoxSubModule : MBSubModuleBase`  
**源码:** `Modules.SandBox/SandBox/Sandbox/SandBoxSubModule.cs`

## 职责

`SandBoxSubModule` 是单机 SandBox 层的模块引导器。引擎调用它的生命周期 hook；这些 hook 安装 SandBox 任务和存档 manager，注册战役 Model 与 behavior，初始化 XML 对象，并为新游戏或读档启动正确的 [SandBoxGameManager](../SandBoxGameManager)。它不是服务定位器，生命周期回调也不是应该由业务代码随意调用的普通方法。

## 心智模型：有顺序的引导过程

需要区分“安装依赖的 hook”和“消费依赖的代码”：

```text
OnCampaignStart
  -> SandBoxManager.SandBoxMissionManager
  -> SandBoxManager.AgentBehaviorManager
  -> SandBoxManager.SandBoxSaveManager

OnGameInitializationFinished
  -> Campaign.CampaignMissionManager
  -> Campaign.MapSceneCreator
  -> Encyclopedia 与 SandBox 对象注册

RegisterSubModuleObjects / AfterRegisterSubModuleObjects
  -> XML 数据，然后角色加载后处理
```

`OnGameLoaded` 会为已经生成的战役再次安装 SandBox manager。因此跨读档缓存 manager 引用是有风险的。

## 关键生命周期 hook

### `OnSubModuleLoad`

该 hook 安装 editor mission tester 并初始化 `TauntUsageManager`。此时战役还不存在，所以不能在这里读取 `Campaign.Current` 或打开任务。

### `InitializeGameStarter`

当 `game.GameType is Campaign` 时，模块加入 SandBox 的任务和战斗 Model，并注册 hideout 对话、巷战、越狱、竞技场和退休等战役 behavior。`CampaignGameStarter` 由引擎提供；此处是模块组合战役的地方，不是 mod 重放整套注册列表的地方。

### `OnCampaignStart`

源码对战役所有者执行以下安装：

```csharp
campaign.SandBoxManager.SandBoxMissionManager = new SandBoxMissionManager();
campaign.SandBoxManager.AgentBehaviorManager = new AgentBehaviorManager();
campaign.SandBoxManager.SandBoxSaveManager = new SandBoxSaveManager();
```

前后两个属性都是接口类型。功能代码需要检查已安装路由时，应从所属战役读取这些属性；启动过程中如果属性暂时为 `null`，不要直接换成一个未注册的实例。

### `OnGameInitializationFinished`

游戏初始化完成后，模块分配新的 `CampaignMissionManager` 和 `MapSceneCreator`，创建百科页面，并注册 SandBox 音乐对象类型和 XML 数据。在这个时点以前调用 `CampaignMission` 入口，没有得到有效转发 manager 的保证。

### `RegisterSubModuleObjects` 与 `AfterRegisterSubModuleObjects`

前者调用 `Campaign.Current.SandBoxManager.InitializeSandboxXMLs(isSavedCampaign)`，后者调用 `InitializeCharactersAfterLoad(isSavedCampaign)`。这个布尔值标记加载边界，不是授权 mod 回调重新构造对象。

### `OnGameLoaded`

存档生成战役后，hook 再次安装新的 `SandBoxMissionManager`、`AgentBehaviorManager` 和 `SandBoxSaveManager`。这是运行时契约的一部分；读档完成后，消费者应重新从 `Campaign.Current.SandBoxManager` 获取接口。

### 其他 hook

- `StartGame(LoadResult)` 启动 `new SandBoxGameManager(loadResult)` 并隐藏鼠标。
- `OnBeforeInitialModuleScreenSetAsRoot` 通过模块的全局文本管理器只初始化一次 `MBSaveLoad`。
- `OnConfigChanged` 在战役存在时把配置变化转发给战役事件接收器。
- `OnNewModuleLoad` 调用 `SaveManager.InitializeGlobalDefinitionContext()`，让存档定义从已加载程序集重新建立。

## 依赖与边界

- [MBSubModuleBase](../../core/MBSubModuleBase) 提供引擎生命周期回调并调用本模块。
- [SandBoxManager](../../campaign/SandBoxManager) 持有已经安装的任务、Agent behavior 和存档接口。
- [SandBoxGameManager](../SandBoxGameManager) 消费本模块启动的加载结果。
- [SaveManager](../../save-system/SaveManager) 消费 `OnNewModuleLoad` 初始化的全局定义。

## 真实获取路径

消费已安装服务时，应读取所有者并保留接口边界：

```csharp
using TaleWorlds.CampaignSystem;

Campaign campaign = Campaign.Current;
if (campaign != null && campaign.SandBoxManager != null)
{
    ISandBoxMissionManager missionManager =
        campaign.SandBoxManager.SandBoxMissionManager;
    ISaveManager saveManager = campaign.SandBoxManager.SandBoxSaveManager;

    bool ready = missionManager != null && saveManager != null;
}
```

标准锦标赛入口使用 [SandBoxMission](../../campaign/SandBoxMission)，战役任务入口使用 [CampaignMission](../../campaign/CampaignMission)。SubModule 的职责是提供这些路由，而不是成为它们的公开门面。

## 风险与存档边界

- 不要手动调用生命周期 hook 来强制初始化。引擎负责顺序，重放 hook 可能重复注册 behavior 或替换仍在使用的 manager。
- `OnCampaignStart` 与 `OnGameLoaded` 安装的是不同生命周期的实例。新游戏或读档后要重新读取 `Campaign.Current.SandBoxManager`。
- `RegisterSubModuleObjects` 和 `AfterRegisterSubModuleObjects` 假定战役与 SandBox manager 已存在。把工作提前到模块加载 hook 可能导致空引用。
- `OnNewModuleLoad` 初始化全局存档定义。自定义存档类型必须在遍历对象图前完成注册；不能假设晚些时候修改 `SaveableSandBoxTypeDefiner` 可以修复已经写出的存档协议。
- 模块负责初始化，不会让任务作用域对象变成可存档对象。不要把 `Agent`、`Mission` 或 manager 实例放进战役存档数据。

## 版本说明

本文依据 v1.4.5 `SandBoxSubModule` 源码。hook 顺序和安装的 manager 集合都可能随版本变化，移植时必须重新核对。

## 导航

- 父级：[Campaign extension API](../)
- 兄弟页：[SandBoxGameManager](../SandBoxGameManager) · [SandBoxSaveManager](../SandBoxSaveManager) · [SaveableSandBoxTypeDefiner](../SaveableSandBoxTypeDefiner)
- 任务路由：[SandBoxMissionManager](../SandBoxMissionManager) · [SandBoxMissions](../SandBoxMissions) · [CampaignMission](../../campaign/CampaignMission)
- 存档路由：[SandBoxSaveHelper](../SandBoxSaveHelper) · [SaveableTypeDefiner](../../save-system/SaveableTypeDefiner) · [SaveManager](../../save-system/SaveManager)
- English: [SandBoxSubModule](../../../../en/api/campaign-ext/SandBoxSubModule)
