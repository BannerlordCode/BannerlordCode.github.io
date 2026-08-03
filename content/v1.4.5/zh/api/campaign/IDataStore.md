---
title: "IDataStore"
description: "CampaignBehaviorBase 在保存和加载阶段使用的双向键值契约；它把行为字段交给当前 Save/Load 适配器，而不是一个供 mod 任意创建的数据库。"
---
# IDataStore

**命名空间:** `TaleWorlds.CampaignSystem`
**模块:** `TaleWorlds.CampaignSystem`
**类型:** `public interface IDataStore`
**基类:** 无
**文件:** `bin/TaleWorlds.CampaignSystem/TaleWorlds.CampaignSystem/IDataStore.cs`

## 概述

`IDataStore` 是 Campaign 行为的保存/加载适配器接口，公开成员只有 `IsSaving`、`IsLoading` 和 `SyncData<T>(string key, ref T data)`。它的调用方向取决于阶段：保存时把 `data` 写入当前行为的记录，加载时用同一个 `key` 把记录写回 `ref data`。接口本身不负责序列化格式、文件名或存档槽位。

## 心智模型

把 `IDataStore` 看成 `CampaignBehaviorBase.SyncData` 的“当前通道”，而不是可以持有全局状态的服务。Campaign 行为被 `CampaignBehaviorDataStore` 逐个调用；行为只声明自己要同步哪些字段，框架决定此时是写入还是读取。mod 应实现稳定的行为类和稳定的 key，而不是实现一个假数据存储或在 `IsSaving` 分支里改变业务状态。需要新字段时应考虑旧存档不存在该 key 的情况。

## ↑ 父级导航

- [Campaign API 索引](../)
- [存档系统架构](../../../architecture/crash-boundary)

## ↔ 同级导航

- [CampaignBehaviorBase](../CampaignBehaviorBase)：定义 `SyncData(IDataStore)` 的行为入口。
- [CampaignBehaviorDataStore](../CampaignBehaviorDataStore)：为每个行为建立保存记录并在加载时回放。
- [CampaignBehaviorManager](../CampaignBehaviorManager)：按行为生命周期调用数据存取。

## Children / 相关入口

- [Campaign](../Campaign) - 拥有 Campaign 行为和加载顺序。
- [SaveManager](../../save-system/SaveManager) - 更上层的存档协调器。
- [CampaignTime](../CampaignTime) - 常被行为作为稳定的战役时间字段保存。
- [CampaignEvents](../CampaignEvents) - 行为通常在注册事件后用 `SyncData` 保存事件驱动状态。

## 依赖关系

上游是 [CampaignBehaviorManager](../CampaignBehaviorManager) 和内部 [CampaignBehaviorDataStore](../CampaignBehaviorDataStore)：保存时创建 `BehaviorSaveData(isSaving: true)`，加载时提供 `BehaviorSaveData(isSaving: false)`。下游是每个 [CampaignBehaviorBase](../CampaignBehaviorBase) 的字段，例如 `TournamentCampaignBehavior` 保存城镇到 `CampaignTime` 的字典，`AgingCampaignBehavior` 保存 Hero 字典。最终 `_behaviorDict` 会随 Campaign 存档保存；因此行为的 `StringId`、key 和字段类型共同构成存档 schema。

## 保存/加载边界与坏档风险

- `IsSaving` 与 `IsLoading` 在框架实现中互斥；推荐在 `SyncData` 里无条件调用 `SyncData(key, ref field)`，只有确实需要版本兼容时才读取阶段标志。
- 保存分支使用字典 `Add`。同一个行为重复同步同一个 key 会抛出重复键错误；加载分支找不到 key 返回 `false` 并保留默认值。新增字段必须允许旧存档缺字段。
- 加载分支把记录强制转换为 `T`。改名、改类型或让同一个 key 在不同版本表示不同对象会导致转换失败或坏存档；key 应稳定且全行为唯一。
- `CampaignBehaviorDataStore` 按行为 `StringId` 找记录；两个行为使用相同 StringId 会触发断言并覆盖记录。自定义行为应显式使用稳定的唯一字符串构造器，而不是依赖会变的类名。
- `IDataStore` 的实现是框架内部适配器，mod 不应保存接口实例、手动调用一个伪造的 `BehaviorSaveData`，也不能把 `SyncData` 当作实时数据库读写。

## 公共成员说明

### `IsSaving` 与 `IsLoading`

两个只读属性告诉行为当前回调方向。`BehaviorSaveData` 在保存期间为 `IsSaving == true`、`IsLoading == false`；加载期间相反。它们描述的是当前 `SyncData` 调用，而不是整个游戏是否正在后台排队保存。

### `SyncData<T>`

`SyncData` 接受稳定的字符串 key 和 `ref T`。保存时写入引用指向的当前值，加载时替换引用指向的字段并返回是否找到记录。集合、`CampaignTime`、Hero 等复杂值必须使用游戏 SaveSystem 支持的类型和对象身份；不要为了绕开 schema 把它们转成随意的字符串。

## 真实示例

### 用 TournamentCampaignBehavior 同步一个字典

下面是源码中的真实调用形态。行为字段先在构造时获得默认值，框架在保存或加载阶段把同一个 key 交给 `IDataStore`；行为不自行判断文件位置。

```csharp
public class TournamentCampaignBehavior : CampaignBehaviorBase
{
    private Dictionary<Town, CampaignTime> _lastCreatedTournamentDatesInTowns = new Dictionary<Town, CampaignTime>();

    public override void SyncData(IDataStore dataStore)
    {
        dataStore.SyncData("_lastCreatedTournamentTimesInTowns", ref _lastCreatedTournamentDatesInTowns);
    }

    private void CreateTournament(Town town)
    {
        _lastCreatedTournamentDatesInTowns[town] = CampaignTime.Now;
        Campaign.Current.TournamentManager.GetTournamentGame(town);
    }
}
```

### 对缺失字段保持兼容

加载旧存档时 `SyncData` 可能找不到新 key。框架实现会返回 `false` 并保留字段初始化值；不要把“找不到”当作加载失败，也不要在这里执行会重复加入实体的 Action。

```csharp
private Dictionary<Hero, int> _extraLivesContainer = new Dictionary<Hero, int>();

public override void SyncData(IDataStore dataStore)
{
    bool loaded = dataStore.SyncData("_extraLivesContainer", ref _extraLivesContainer);
    if (dataStore.IsLoading && !loaded)
    {
        _extraLivesContainer.Clear();
    }
}
```

同步缺省值后，让后续 `OnGameLoaded` 或事件处理完成派生状态初始化；不要为了同步在 `SyncData` 中写回无关的 Campaign 业务状态。

## 参见

- [Campaign API 索引](../)
- [CampaignBehaviorBase](../CampaignBehaviorBase)
- [CampaignBehaviorDataStore](../CampaignBehaviorDataStore)
- [CampaignBehaviorManager](../CampaignBehaviorManager)
- [SaveManager](../../save-system/SaveManager)
