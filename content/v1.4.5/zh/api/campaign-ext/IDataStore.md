---
title: "IDataStore"
description: "CampaignBehaviorBase 在一次存档或读档期间收到的临时键值托盘：用 SyncData 持久化 Behavior 私有状态。"
---
# IDataStore

**Namespace:** `TaleWorlds.CampaignSystem`  
**Module:** `TaleWorlds.CampaignSystem`  
**Type:** `public interface IDataStore`  
**Base:** 无  
**Source:** `TaleWorlds.CampaignSystem/IDataStore.cs`

## 概述

`IDataStore` 是战役 Behavior 的最小存档契约，只有 `IsSaving`、`IsLoading` 和 `SyncData<T>(string, ref T)`。引擎在保存或加载某个 [CampaignBehaviorBase](../CampaignBehaviorBase/) 时创建内部实现，并把它传入 `SyncData(IDataStore)`。

它不是运行时数据库，也不是可从 `Campaign.Current` 取出的全局容器。Behavior 自己的字段保存什么、用什么 key 保存，必须在自己的 `SyncData` 重写中明确列出。

## 心智模型

把 `IDataStore` 当作“引擎在一次存/读档回调里递给一个 Behavior 的临时托盘”：

- 保存阶段，`SyncData` 把 `ref` 当前值按字符串 key 放入本 Behavior 的 `BehaviorSaveData`。
- 加载阶段，命中 key 时，`SyncData` 通过 `ref` 把值写回字段；没有 key 时返回 `false`，字段保留当前默认值。
- `CampaignBehaviorDataStore` 按 Behavior 的 `StringId` 保存每个 Behavior 的托盘。单个托盘内部使用 `Dictionary<string, object>`，所以同一 Behavior 内的 key 必须唯一。
- 回调结束后不要保留 `IDataStore` 引用。要在 tick 或事件中使用数据，应读取 Behavior 自己的字段。

## 何时使用 / 何时不要使用

**使用：**在 `CampaignBehaviorBase.SyncData` 中登记跨存档状态，如计数器、`MBObjectBase` 引用、可序列化集合和版本化配置。`IsLoading` 可用于读档后初始化缺失字段或重建派生缓存。

**不要使用：**自己实现或 `new` 一个 `IDataStore`；把参数存成字段；在每日 tick 中把它当共享总线；用它替代 `[SaveableField]`/`[SaveableProperty]` 定义一个普通可存档对象。后者应转到 [SaveableTypeDefiner](../../save-system/SaveableTypeDefiner/)。

## 成员

| 成员 | 语义 |
| --- | --- |
| `bool IsSaving { get; }` | 当前回调正在向存档写入 |
| `bool IsLoading { get; }` | 当前回调正在从存档回填；官方实现中与 `IsSaving` 互斥 |
| `bool SyncData<T>(string key, ref T data)` | 保存时写入；加载时按 key 回填并返回是否命中 |

```csharp
public override void SyncData(IDataStore dataStore)
{
    dataStore.SyncData("_raidCount", ref _raidCount);
    dataStore.SyncData("_trackedVillages", ref _trackedVillages);

    if (dataStore.IsLoading && _trackedVillages == null)
    {
        _trackedVillages = new List<string>();
    }
}
```

## 真实示例：为 Behavior 保存并加载状态

源码中的 `AllianceCampaignBehavior`、`IncidentsCampaignBehavior` 等都在 `SyncData` 中逐项调用 `dataStore.SyncData`。下面是同一契约的 mod 侧写法：

```csharp
public sealed class RelicTrackerBehavior : CampaignBehaviorBase
{
    private int _discoveredCount;
    private List<string> _discoveredRelicIds = new List<string>();

    public override void RegisterEvents()
    {
        CampaignEvents.DailyTickEvent.AddNonSerializedListener(this, OnDailyTick);
    }

    public override void SyncData(IDataStore dataStore)
    {
        bool hadCount = dataStore.SyncData("_myMod_discoveredCount_v1", ref _discoveredCount);
        dataStore.SyncData("_myMod_discoveredRelicIds_v1", ref _discoveredRelicIds);

        if (dataStore.IsLoading && !hadCount)
        {
            _discoveredCount = 0;
        }

        _discoveredRelicIds ??= new List<string>();
    }

    private void OnDailyTick()
    {
        Hero hero = MBObjectManager.Instance.GetObject<Hero>("main_hero");
        if (hero != null && _discoveredRelicIds.Count > 0)
        {
            _discoveredCount = Math.Max(_discoveredCount, _discoveredRelicIds.Count);
        }
    }
}
```

`SyncData` 在保存时读取字段当前值，在加载时修改 `ref` 字段。`List<string>`、基础值和已被保存系统定义的对象引用必须可进入存档对象图；如果只存 `StringId`，加载后还要按 ID 重新查询对象。

## 风险与坏档边界

- **同一 Behavior 重复 key 会中止保存。** 官方 `BehaviorSaveData` 保存路径调用字典的 `Add`，重复 key 会抛异常；给 key 加模组前缀，且不要在同一次回调中注册两次。
- **Behavior 的 `StringId` 必须稳定且唯一。** 行为数据外层按 `StringId` 分桶；重复的 Behavior ID 会触发断言，改名还会让旧档找不到原桶。不要让两个 Behavior 使用相同或容易互相包含的类型名。
- **缺失 key 不是错误。** 新档和旧档可能没有新字段；检查 `SyncData` 的返回值或在 `IsLoading` 时补默认值，不要把 null 当成已加载成功。
- **值必须可保存。** 将临时 UI 对象、引擎句柄或不可定义的第三方对象放进 `SyncData` 会使收集/反序列化失败；只同步存档系统支持的值。
- **改变字段类型要版本化。** 把 `int` 原地改成 `List<int>` 会让旧档按旧类型读取失败。使用新 key（例如 `_v2`）并保留旧 key 的兼容策略。
- **不要用阶段标志改变游戏逻辑。** `IsSaving`/`IsLoading` 只描述当前回调阶段，不是“暂停扣钱”或“暂停事件”的开关。

## 跨版本提示

1.3.15 与 1.4.5 的接口面一致：两个阶段属性和泛型 `SyncData` 都保留。官方 Behavior 仍通过 `CampaignBehaviorBase.SyncData` 持久化私有状态；跨版本时最需要维护的是 key、值类型和缺失字段的默认值，而不是接口调用形式。

## 依赖关系

- 调用者：[CampaignBehaviorBase](../CampaignBehaviorBase/) 提供唯一正常的 `SyncData` 重写点。
- 外层宿主：[Campaign](../../campaign/Campaign/) 持有战役行为和行为数据存储。
- 另一条路线：[SaveableFieldAttribute](../../save-system/SaveableFieldAttribute/) / [SaveablePropertyAttribute](../../save-system/SaveablePropertyAttribute/) + [SaveableTypeDefiner](../../save-system/SaveableTypeDefiner/) 用于对象成员定义。
- 底层总管：[SaveManager](../../save-system/SaveManager/) 最终构建定义上下文并读写存档。

## 导航

- 父级：[campaign-ext API](./)
- 同级：[MBObjectBase](../MBObjectBase/) · [MBObjectManager](../MBObjectManager/)
- 相关：[SaveManager](../../save-system/SaveManager/) · [SaveableTypeDefiner](../../save-system/SaveableTypeDefiner/)
