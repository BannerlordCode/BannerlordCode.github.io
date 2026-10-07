---
title: "IDataStore"
description: "Behavior 私有状态的存/读档通道：SyncData<T> 用 key 对齐存档字段，IsSaving/IsLoading 告诉你当前方向。"
---
# IDataStore

**Namespace:** `TaleWorlds.CampaignSystem`
**Module:** `TaleWorlds.CampaignSystem`
**Type:** `public interface IDataStore`
**Source:** `TaleWorlds.CampaignSystem/IDataStore.cs`

## 概述

`IDataStore` 是一个只有三个成员的接口，它是 Campaign Behavior 把私有字段写进存档的唯一正规通道。游戏在存档时创建一份「保存态」的 `IDataStore` 实现并调用每个 Behavior 的 `SyncData`，读档时再创建一份「加载态」的实现调同一次 `SyncData`。Behavior 自己不需要（也不应该）判断方向：`dataStore.SyncData("key", ref myField)` 这一行在保存时把值写出去，在加载时把值读回来，方向由 `IsSaving` 告诉实现层。

这个接口**不**负责给字段挑默认值。读档时若存档里没有你新加的 key，实现要么保持你给 `ref` 参数的那个初始值，要么置零，取决于游戏版本的具体实现——所以新增字段时一定要在声明处给出合理的初值，不要依赖「读档系统会帮我填默认值」。

## 心智模型

调用链是：存档 UI → 游戏的存档上下文遍历 Behavior 列表 → 对每个 Behavior 调 `SyncData(dataStore)` → Behavior 内部对自己**所有**需要持久化的字段各调一次 `SyncData<T>(key, ref field)`。

典型写法是同一行代码同时服务两个方向：

```csharp
public override void SyncData(IDataStore dataStore)
{
    dataStore.SyncData("myCounter", ref _counter);
    dataStore.SyncData("myFlag", ref _flag);
    if (dataStore.IsLoading)
    {
        RebuildLookupTable();  // 只在加载后重建一次，不要每次 tick 都重建
    }
}
```

常见误用：一是把 `IsLoading` 当成「游戏刚读档完」的钩子全局挂逻辑——它只在 `SyncData` 执行期间为 true；二是拿 `IDataStore` 保存游戏本来就会存的实体状态（比如 `Hero.HomeSettlement`），那是重复保存且可能与官方字段冲突；三是把复杂运行时缓存也塞进存档，缓存应该能在 `IsLoading` 分支里从权威数据重建。

## 关键成员

| 成员 | 签名 | 作用 |
| --- | --- | --- |
| `SyncData<T>` | `bool SyncData<T>(string key, ref T data)` | 双向读写一个字段。`IsSaving` 为 true 时把 `data` 的值写入 `key`；`IsLoading` 为 true 时把 `key` 的值写回 `data`。返回值用来表示该字段在这一方向上是否真的被处理（加载时 key 不存在通常返回 false），但多数官方 Behavior 会忽略它 |
| `IsSaving` | `bool IsSaving { get; }` | 当前 `SyncData` 是否处于保存方向。为 true 时不要修改 `data`，也不要在这里触发游戏逻辑 |
| `IsLoading` | `bool IsLoading { get; }` | 当前 `SyncData` 是否处于加载方向。为 true 时 `data` 已经带着存档里的值，可用来做后处理（重建索引、校验一致性） |

## 怎么用

### 怎么拿到它

`IDataStore` 是 `TaleWorlds.CampaignSystem` 里的纯接口（`IDataStore.cs:6`），**只有三个成员**（全文 20 行）：

```
bool SyncData<T>(string key, ref T data);   // IDataStore.cs:10
bool IsSaving { get; }                     // :12
bool IsLoading { get; }                    // :14
```

**mod 不需要也不能自己实现它**。它是你 `CampaignBehaviorBase.SyncData(IDataStore dataStore)`（`CampaignBehaviorBase.cs:30`）收到的那个参数，实现类是 internal 的 `CampaignBehaviorDataStore.BehaviorSaveData`（`CampaignBehaviorDataStore.cs` 内部类声明处）。它由引擎在两个时机 new 出来：存盘时 `new BehaviorSaveData(true)`，读档时 `new BehaviorSaveData(false)`——构造函数就一个 `bool isSaving` 字段。

实际语义看 `public bool SyncData<T>(string key, ref T data)` 的实现（`CampaignBehaviorDataStore.cs` 内）：`IsSaving` 为真就 `_records.Add(key, data)` 并返回 true；否则 `_records.TryGetValue(key, out obj)`，命中就 `data = (T)obj; return true;`，**miss 就返回 false 并且完全不碰 `data`**。

### 典型用法

这就是标准存档字段写法——一个 behavior 的全部持久化状态写在一次 `SyncData` 里：

```csharp
using TaleWorlds.CampaignSystem;

public class TavernDebt : CampaignBehaviorBase
{
    private int _debtGold;                       // 必须是可序列化的类型
    private string _lastTavernName;

    public TavernDebt() : base() { }             // StringId = 类型名

    public override void RegisterEvents()
    {
        CampaignEvents.HeroLevelledUp.AddNonSerializedListener(this, hero => _debtGold -= hero.Level);
    }

    public override void SyncData(IDataStore dataStore)
    {
        dataStore.SyncData("tavern_debt_gold", ref _debtGold);
        dataStore.SyncData("last_tavern_name", ref _lastTavernName);
    }
}

// 引擎在存盘时把 IsSaving=true 的 store 传进来，读档时传 IsLoading=true 的
// 想判断方向就读属性，不要自己缓存：
public override void SyncData(IDataStore dataStore)
{
    if (dataStore.IsLoading)
    {
        dataStore.SyncData("tavern_debt_gold", ref _debtGold);
        if (_debtGold < 0)
        {
            _debtGold = 0;                      // miss 时 _debtGold 保持原值，自己兜底
        }
    }
    else
    {
        dataStore.SyncData("tavern_debt_gold", ref _debtGold);
    }
}
```

### 最容易踩的坑

**把 `SyncData` 的返回值当作「读取成功」，然后在 miss 时直接用 `data`。** miss 时实现走的是 `return false;` 而**没有给 `data` 赋任何值**（`CampaignBehaviorDataStore.cs` 内 `SyncData<T>` 的 else 分支），所以 `ref` 指向的字段保持调用前的原值——如果你在读档前把它初始化成了 42，读档后一个不存在的 key 会安静地留下 42，看起来像「存档读回来了」，实则这个字段从来没被存档覆盖过。正确写法是每个 key 都检查返回值，miss 就显式给默认值：

```csharp
if (!dataStore.SyncData("tavern_debt_gold", ref _debtGold))
{
    _debtGold = 0;
}
```

第二个坑是 key 与类型的匹配：`SyncData<T>` 存进去时 `data` 被装箱成 `object` 放进 `Dictionary<string, object>`，读出来时是硬转型 `(T)obj`。**改字段类型就等于换了一个 key**，旧存档里存的是 `int`，新版按 `long` 读会在 `(T)obj` 处抛 `InvalidCastException`——而且只在读**旧存档**时炸，新开局完全正常，所以本地测不出来。同理 `_records.Add(key, data)` 用的是 `Dictionary.Add`，同一个 key 在一次存盘里写两遍（比如两个分支都调了 `SyncData("x", ...)`）会抛重复键异常。

## 真实示例

```csharp
public class MercenaryRoster : CampaignBehaviorBase
{
    private int _contractCount;
    private bool _disbandPrompted;

    private List<Hero> _roster = new List<Hero>();

    public override void RegisterEvents()
    {
        CampaignEvents.DailyTickEvent += OnDailyTick;
    }

    public override void SyncData(IDataStore dataStore)
    {
        dataStore.SyncData("contractCount", ref _contractCount);
        dataStore.SyncData("disbandPrompted", ref _disbandPrompted);
        dataStore.SyncData("roster", ref _roster);

        if (dataStore.IsLoading)
        {
            // roster 是引用列表，读回来后必须重建反向索引，否则查找会失配
            _roster.RemoveAll(hero => hero == null);
        }
    }

    private void OnDailyTick()
    {
        _roster.RemoveAll(hero => hero.IsDead);
    }
}
```

要点：三个字段一次 `SyncData` 全部处理完再读 `IsLoading` 做后处理；`_roster` 这种 `List<Hero>` 容器也能直接 `ref` 传进去，因为保存系统按容器元素逐个走对象引用。字段顺序在保存方向上无所谓（每个 key 独立写），但读档方向必须保证 key 与类型与存档一致。

## 风险与边界

- **接口不保证默认值**：读档时缺失的 key 是「保留 `ref` 传入的初值」还是「置零」由游戏实现决定，别把关键字段初值写成 `null` 引用后再指望它自动可用。
- **key 即存档契约**：`SyncData("myCounter", ...)` 里的字符串会原样进存档。改 key、改字段类型都会静默丢数据，游戏不会弹迁移提示。
- **返回值常被忽略**：`SyncData<T>` 的 `bool` 只反映这一次字段操作，不代表整体存档成功；不要用它做存档成功的判据。
- **只覆盖 Behavior 私有状态**：挂在 `Hero`、`Clan` 这类 `MBObjectBase` 派生类上的属性各有自己的保存系统，与 `IDataStore` 无关，两套机制混用会出现「Behavior 认为已保存、实体字段没保存」的偏差。
- **不要在 `SyncData` 里改游戏状态**：加载方向下 `SyncData` 可能被调用多次（每次读档），在里面发通知、改地图、改队伍会产生重复副作用；把后果放到后续 tick。

## 跨版本提示

`IDataStore` 在 1.3.0、1.3.15、1.4.5、1.4.6 四个版本的声明都是 `public interface IDataStore`，没有任何成员增删。`SyncData<T>` 的 `key` + `ref T` 形状、`IsSaving`/`IsLoading` 两个只读属性跨版本一致，这是 mod 存档兼容性的最稳定基线之一。

## 依赖关系

- 使用方：[CampaignBehaviorBase](../CampaignBehaviorBase) — `SyncData(IDataStore)` 的抽象声明在这里。
- 注册入口：[CampaignGameStarter](../CampaignGameStarter) — Behavior 必须先被注册才会收到 `SyncData` 调用。
- 存档执行方：[SaveManager](../../save-system/SaveManager) — 实际创建并驱动 `IDataStore` 实现的流程总管。
- 对象层：[MBObjectBase](../../campaign-ext/MBObjectBase) — 与 `IDataStore` 并列的另一套保存机制。
- 父级：[campaign API 目录导览](../)