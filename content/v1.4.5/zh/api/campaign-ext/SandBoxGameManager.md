---
title: "SandBoxGameManager"
description: "v1.4.5 SandBox 的游戏加载器，区分新战役创建与存档恢复。"
---
# SandBoxGameManager

**命名空间:** `SandBox`  
**模块:** `SandBox`  
**类型:** `public class SandBoxGameManager : MBGameManager`  
**源码:** `Modules.SandBox/SandBox/Sandbox/SandBoxGameManager.cs`

## 职责

`SandBoxGameManager` 是驱动 SandBox 启动流程的 `MBGameManager` 实现。它的两个构造函数代表两个不同根路径：`CampaignCreatorDelegate` 创建新战役，`LoadResult` 恢复存档战役。随后 manager 推进模块加载，创建或加载 `Game`，等待各个 SubModule，并进入角色创建或恢复后的地图状态。

## 心智模型：一个加载器，两种根

```text
新战役: CampaignCreatorDelegate -> new Campaign -> Game.CreateGame
读档:   LoadResult -> Game.LoadSaveGame -> 已存在的 Campaign
                           \-> 共同的 Game.DoLoading 和模块 hook
```

`LoadingSavedGame` 告诉后续 hook 当前使用哪条根路径。只有 manager 仍然持有待处理的 `LoadResult` 时，`MetaData` 才可从中读取；新游戏构造函数会让它为 `null`。本类协调游戏状态机，不负责构造战役存档、安装任务或保存 mod 的持久状态。

## 公开表面

### `CampaignCreatorDelegate`

```csharp
public delegate Campaign CampaignCreatorDelegate();
```

这个 delegate 只用于新战役构造函数。它必须返回宿主当前要启动的战役游戏类型；manager 会在加载第 3 阶段调用它。

### 构造函数

```csharp
public SandBoxGameManager(CampaignCreatorDelegate campaignCreator);
public SandBoxGameManager(LoadResult loadedGameResult);
```

第一个构造函数将 `LoadingSavedGame` 设为 `false` 并保存 creator；第二个将其设为 `true` 并保存加载结果。不要把 `LoadResult` 传给新游戏路径，也不要用不是由 `MBSaveLoad.LoadSaveGameData` 产生的 metadata 调用读档构造函数。

### `LoadingSavedGame` 与 `MetaData`

`LoadingSavedGame` 在构造后是公开只读属性。`MetaData` 在仍有待读取的 `LoadResult` 时返回其 metadata，其他时候返回 `null`。恢复的 `Game` 创建完成后，加载结果会被清除，所以 metadata 不是永久的存档描述对象。

## 加载顺序

`DoLoadingForGameManager` 按源码推进以下阶段：

1. 从初始阶段进入模块数据加载。
2. 调用 `MBGameManager.LoadModuleData(LoadingSavedGame)`。
3. 新游戏调用 `MBGameManager.StartNewGame`；读档则进入恢复游戏路径。
4. 初始化 native 引用。新游戏调用 campaign creator 和 `Game.CreateGame`；读档调用 `Game.LoadSaveGame`。随后调用 `Game.Current.DoLoading()`。
5. 对每个已收集的 SubModule 调用 `DoLoading(Game.Current)`，直到全部返回 `true`。
6. 持续调用 `Game.Current.DoLoading()`，直到游戏报告加载完成。

`OnLoadFinished` 仍会分支。新游戏在非开发模式播放 campaign intro，然后启动 `CharacterCreationState`；开发模式直接进入角色创建。读档则调用 `OnSavedGameLoadFinished`、推入 `MapState`，恢复仍存在的游戏菜单，或在菜单不存在时结束遭遇，然后刷新队伍视觉和聚落 mask，调用战役信息与事件加载回调，最后标记 manager 已加载。

## 真实创建路径

StoryMode 使用真实的战役 creator 创建新 SandBox manager：

```csharp
MBGameManager.StartNewGame(
    new SandBoxGameManager(
        () => new CampaignStoryMode((CampaignGameMode)1)));
```

反编译的 StoryMode 源码使用等价的缓存 `CampaignCreatorDelegate`。存档路径来自 `SavedGameVM.StartGame`：`SandBoxSaveHelper` 产生 `LoadResult` 后，代码执行：

```csharp
MBSaveLoad.OnStartGame(loadResult);
MBGameManager.StartNewGame(new SandBoxGameManager(loadResult));
```

`SandBoxSubModule.StartGame(LoadResult)` 使用同一读档构造路径。这些是宿主的启动路径；普通战役代码不应在已有 `Game` 或 `Mission` 存活时再启动一个 manager。

## 依赖与边界

- [MBGameManager](../../mission-ext/MBGameManager) 提供引擎加载契约和 `Current` manager 表面。
- [SandBoxSubModule](../SandBoxSubModule) 在读档流程中安装本 manager，并负责周围的模块 hook。
- [SandBoxSaveHelper](../SandBoxSaveHelper) 校验 metadata 并提供读档构造函数所需的 `LoadResult`。
- [SandBoxManager](../../campaign/SandBoxManager) 与战役 hook 在 `Game` 创建后安装；最早的加载阶段不能使用它们。

## 风险与存档边界

- `LoadingSavedGame` 只是分支标志，不代表战役对象已经完全恢复。读取世界状态前必须等待宿主的加载完成回调。
- 新游戏时以及读档结果被消费后，`MetaData == null` 都是正常状态。不要无条件解引用。
- manager 会在完成阶段推入或清理游戏状态。战役 behavior 中启动第二个 manager 可能弹出界面、重复模块 hook，或使 `GameManagerBase.Current` 处于不一致状态。
- 本源码中的 `OnAfterCampaignStart` 是空 override。不要把它臆测成隐藏的战役初始化入口。
- 本加载器不保存 mod 字段。持久状态应使用 campaign behavior 的 `SyncData` 和稳定的存档类型定义。

## 版本说明

本文的加载顺序和 StoryMode 构造路径来自 v1.4.5 源码。面向其他版本时要重新核对 loading step 枚举和值，以及加载完成后的菜单处理。

## 导航

- 父级：[Campaign extension API](../)
- 兄弟页：[SandBoxSubModule](../SandBoxSubModule) · [SandBoxSaveManager](../SandBoxSaveManager) · [SandBoxSaveHelper](../SandBoxSaveHelper)
- 相关：[MBGameManager](../../mission-ext/MBGameManager) · [Campaign](../../campaign/Campaign) · [SandBoxManager](../../campaign/SandBoxManager) · [LoadResult](../../save-system/LoadResult)
- English: [SandBoxGameManager](../../../../en/api/campaign-ext/SandBoxGameManager)
