---
title: "SandBoxSaveManager"
description: "v1.4.5 SandBox 对战役自动存档策略和成功存档配置回调的实现。"
---
# SandBoxSaveManager

**命名空间:** `SandBox`  
**模块:** `SandBox`  
**类型:** `public class SandBoxSaveManager : ISaveManager`  
**源码:** `Modules.SandBox/SandBox/Sandbox/SandBoxSaveManager.cs`

## 职责

`SandBoxSaveManager` 是战役存档调度与 `BannerlordConfig` 之间的三方法桥接器。它报告自动存档间隔，把 `-1` 定义为禁用，并且只在存档成功后更新 `BannerlordConfig.LatestSaveGameName`。它不序列化战役对象，也不发起物理存档。

## 心智模型：策略与回调，不是存储层

```text
Campaign.SaveHandler
  -> SandBoxManager.SandBoxSaveManager.GetAutoSaveInterval()
  -> 决定是否排队自动存档
  -> MBSaveLoad 执行 SaveAs/QuickSave/AutoSave
  -> SaveHandler.OnSaveEnded
  -> SandBoxSaveManager.OnSaveOver(success, name)
```

安装属性是接口类型。`SaveHandler.AutoSaveInterval` 从它读取间隔；manager 缺失时回退到 `15`。`SaveHandler` 在 `ForceAutoSave` 前也会检查 `IsAutoSaveDisabled`。因此本类属于战役运行时 wiring，不是 [SaveManager](../../save-system/SaveManager) 的替代品。

## 成员

### `GetAutoSaveInterval`

```csharp
public int GetAutoSaveInterval()
{
    return BannerlordConfig.AutoSaveInterval;
}
```

返回值的单位就是 `SaveHandler` 使用的战役自动存档间隔。本实现不在这里做范围裁剪。

### `IsAutoSaveDisabled`

```csharp
public bool IsAutoSaveDisabled()
{
    return BannerlordConfig.AutoSaveInterval == -1;
}
```

只有 `-1` 被本实现视为禁用。`0` 不会在这里转换成 `-1`；调用方不要自行添加未经源码确认的策略。

### `OnSaveOver`

```csharp
public void OnSaveOver(bool isSuccessful, string newSaveGameName)
```

当 `isSuccessful` 为 `true` 时，方法把 `newSaveGameName` 赋给 `BannerlordConfig.LatestSaveGameName`，然后调用 `BannerlordConfig.Save()`。失败时不更新配置。`SaveHandler` 在分发战役 `OnSaveOver` 事件之前调用此方法。

## 真实获取与使用

宿主在 `SandBoxSubModule.OnCampaignStart` 和 `OnGameLoaded` 中安装具体对象。只读消费者可以从战役所有者读取接口：

```csharp
Campaign campaign = Campaign.Current;
ISaveManager saveManager = campaign?.SandBoxManager?.SandBoxSaveManager;

if (saveManager != null)
{
    int interval = saveManager.GetAutoSaveInterval();
    bool disabled = saveManager.IsAutoSaveDisabled();
}
```

真正的存档请求仍应通过 `Campaign.Current.SaveHandler.SaveAs(name)`、`QuickSaveCurrentGame()` 或宿主的自动存档 tick。不要手动调用 `OnSaveOver` 来伪造成功；它是 `MBSaveLoad` 返回结果后的完成回调。

## 依赖与不负责的事情

- [ISaveManager](../../campaign/ISaveManager) 定义这三个成员的契约。
- [SandBoxSubModule](../SandBoxSubModule) 在新战役和读档后安装实例。
- `SaveHandler` 消费间隔并调用完成回调；它也会在实现报告禁用时阻止强制自动存档。
- [SaveManager](../../save-system/SaveManager) 和 campaign behavior 的 `SyncData` 负责对象持久化。本类没有存档字段，也没有 `SyncData`。

## 风险与存档边界

- manager 缺失时 `SaveHandler.AutoSaveInterval` 会使用回退间隔，但这不代表 SandBox 存档流程已正确初始化。应修复生命周期，而不是随意构造第二个 manager。
- 只有成功才更新最近存档名。请求中的名字存在，不等于文件已经写入。
- 自动存档调度与地图状态安全是两件事：`SaveHandler` 只在活动状态是没有地图对话的 `MapState` 时排队自动存档。
- 本类不迁移不兼容存档、不定义存档类型，也不加载 `LoadResult`。读档准入使用 [SandBoxSaveHelper](../SandBoxSaveHelper)，模块类型定义使用 [SaveableSandBoxTypeDefiner](../SaveableSandBoxTypeDefiner)。

## 版本说明

本文依据 v1.4.5 的 `ISaveManager`、`SaveHandler` 和 `SandBoxSaveManager` 源码。面向其他版本时应重新核对配置语义和默认间隔。

## 导航

- 父级：[Campaign extension API](../)
- 兄弟页：[SandBoxSubModule](../SandBoxSubModule) · [SandBoxGameManager](../SandBoxGameManager) · [SandBoxSaveHelper](../SandBoxSaveHelper)
- 相关：[ISaveManager](../../campaign/ISaveManager) · [SaveManager](../../save-system/SaveManager) · [SaveableSandBoxTypeDefiner](../SaveableSandBoxTypeDefiner) · [Campaign](../../campaign/Campaign)
- English: [SandBoxSaveManager](../../../../en/api/campaign-ext/SandBoxSaveManager)
