---
title: "SandBoxSaveHelper"
description: "v1.4.5 SandBox 负责模块兼容性、版本检查、禁用原因和 LoadResult 启动的存档准入 helper。"
---
# SandBoxSaveHelper

**命名空间:** `SandBox`  
**模块:** `SandBox`  
**类型:** `public static class SandBoxSaveHelper`  
**源码:** `Modules.SandBox/SandBox/Sandbox/SandBoxSaveHelper.cs`

## 职责

`SandBoxSaveHelper` 是保存战役真正变成运行中游戏之前的 UI 准入层。它比较存档 metadata 与当前安装的模块和版本，判断是否必须禁用存档，在允许继续时显示模块不一致询问，并把成功的 `MBSaveLoad.LoadSaveGameData` 结果交给 [SandBoxGameManager](../SandBoxGameManager)。

它不自行反序列化战役对象，也不修复不兼容存档。底层读取仍由 `MBSaveLoad` 完成；本 helper 控制是否以及何时启动读取。

## 心智模型：检查、询问、加载

```text
SavedGameVM
  -> CheckMetaDataCompatibilityErrors
  -> GetIsDisabledWithReason
  -> TryLoadSave
       -> 模块不一致询问，或直接加载
       -> MBSaveLoad.LoadSaveGameData
       -> Action<LoadResult>
       -> SandBoxGameManager(LoadResult)
```

helper 还通过状态事件让存档界面区分 `Start`、`Inquiry` 和 `LoadGame`。

## 依赖与边界

- [存档文件](../../save-system/SaveGameFileInfo) 提供选中的存档名、metadata 和损坏标志。
- [LoadResult](../../save-system/LoadResult) 是 [SandBoxGameManager](../SandBoxGameManager) 消费的回调结果。
- [SandBoxSubModule](../SandBoxSubModule) 负责模块加载边界，`SavedGameVM` 负责 UI 询问回调。

## 公开类型与事件

```csharp
public enum SaveHelperState
{
    Start,
    Inquiry,
    LoadGame
}

public readonly struct ModuleCheckResult
{
    public readonly string ModuleId;
    public readonly ModuleCheckResultType Type;
}

public static event Action<SaveHelperState> OnStateChange;
```

源码中的 `ModuleCheckResult` 主构造函数接收模块 ID 和 `ModuleCheckResultType`。结果类型区分 `ModuleRemovedFromGame`、`ModuleAddedToGame` 和 `VersionMismatch`。事件只是通知，不会改变准入判断。

## 兼容性方法

### `CheckMetaDataCompatibilityErrors`

```csharp
public static MBReadOnlyList<ModuleCheckResult>
    CheckMetaDataCompatibilityErrors(MetaData fileMetaData)
```

方法读取 `fileMetaData` 中的模块，与 `ModuleHelper.GetModules(null)` 比较。找不到的存档模块报告为 removed；当前安装但不在存档中的模块报告为 added；匹配模块版本不同时报告为 version mismatch。对于早于 `v1.3.0` 的存档，源码还会比较旧模块名称。

这是报告，不是最终的禁用决定。`SavedGameVM` 使用它标记模块差异并显示存档中的模块信息。

### `GetIsDisabledWithReason`

```csharp
public static bool GetIsDisabledWithReason(
    SaveGameFileInfo saveGameFileInfo,
    out TextObject reason)
```

当以下源码检查之一阻止加载时返回 `true` 并填入本地化原因：

1. `saveGameFileInfo.IsCorrupted` 为 true。
2. removed 模块属于 `ModuleHelper.ModulesDisablingLoadingAfterBeingRemoved`。
3. added 模块属于 `ModuleHelper.ModulesDisablingLoadingAfterBeingAdded`。
4. 存档应用版本早于 helper 的 `SaveResetVersion`，该值是 `e1.7.0`。
5. 存档版本高于 `Utilities.GetApplicationVersionWithBuildNumber()`。

否则返回 `false`，并保留空的 `TextObject reason`。报告中的 version mismatch 不自动等同于禁用；最终边界还取决于模块策略和版本检查。

### `GetModuleNameFromModuleId`

```csharp
public static string GetModuleNameFromModuleId(string id)
```

v1.4.5 源码把 `NavalDLC` 映射为显示名 `War Sails`，其他 ID 原样返回。`SavedGameVM` 填充存档模块列表和禁用原因文本时都会使用它。

## 加载流程

### `TryLoadSave`

```csharp
public static void TryLoadSave(
    SaveGameFileInfo saveInfo,
    Action<LoadResult> onStartGame,
    Action onCancel = null)
```

方法先发出 `Start`，从兼容性报告中过滤官方模块，再按错误类型分组生成询问文本。如果存在差异，就显示 `Module Mismatch` 询问；确认后进入私有 load action，取消则调用 `onCancel`。没有差异时直接进入同一个 load action。

load action 发出 `LoadGame`，调用 `MBSaveLoad.LoadSaveGameData(saveInfo.Name)`，只有返回非 null 的 `LoadResult` 时才调用 `onStartGame`。返回 null 会弹出错误询问，用户关闭后调用 `onCancel`。

## `SavedGameVM` 的真实调用点

存档界面 view model 在构造时先评估 helper，然后在真正加载时再次使用它：

```csharp
_moduleCheckResults = SandBoxSaveHelper.CheckMetaDataCompatibilityErrors(save.MetaData);
IsDisabled = SandBoxSaveHelper.GetIsDisabledWithReason(save, out var reason);

if (!IsCorrupted && !IsDisabled)
{
    SandBoxSaveHelper.TryLoadSave(Save, StartGame, _onCancelLoadSave);
}
```

它的 `StartGame(LoadResult)` 回调会调用 `MBSaveLoad.OnStartGame(loadResult)`，再启动 `new SandBoxGameManager(loadResult)`。这就是从选中的存档行到游戏加载器的完整边界；mod 不应直接调用 `MBSaveLoad.LoadSaveGameData` 来跳过兼容性询问。

## 风险与存档边界

- 模块比较只检查 metadata，对象恢复发生在后面。通过询问不代表每个 mod 定义的存档类型或 behavior key 都能加载。
- 不要因为 `CheckMetaDataCompatibilityErrors` 返回的列表看起来可接受就忽略 `GetIsDisabledWithReason`。配置的 added/removed 模块策略仍可能让存档不可加载。
- 早于 `e1.7.0` 的存档被明确要求经过中间版本：先在 `e1.7.0` 加载并重新保存，再使用更新版本。本 helper 不替你完成迁移。
- 新于当前版本的存档会被拒绝并显示本地化原因；绕过 helper 可能让旧运行时读取未来 schema。
- `LoadResult` 只对消费它的启动转换有效。不要把它放进战役状态，也不要交给第二个 game manager。
- `OnStateChange` 可能报告询问但最终没有成功加载。`LoadGame` 只表示开始读取，不表示战役已经恢复。

## 版本说明

模块策略列表、版本阈值和 `NavalDLC` 显示名映射均来自 v1.4.5 源码。游戏更新后若模块 ID、存档重置策略或 metadata schema 变化，必须重新核对。

## 导航

- 父级：[Campaign extension API](../)
- 兄弟页：[SandBoxSaveManager](../SandBoxSaveManager) · [SandBoxGameManager](../SandBoxGameManager) · [SaveableSandBoxTypeDefiner](../SaveableSandBoxTypeDefiner)
- 相关：[存档文件](../../save-system/SaveGameFileInfo) · [LoadResult](../../save-system/LoadResult) · [SaveManager](../../save-system/SaveManager) · [SandBoxSubModule](../SandBoxSubModule)
- English: [SandBoxSaveHelper](../../../../en/api/campaign-ext/SandBoxSaveHelper)
