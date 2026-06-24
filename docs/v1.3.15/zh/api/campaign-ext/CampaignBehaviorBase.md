
<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `CampaignBehaviorBase`
- [← 本领域 / 返回 campaign-ext](./)
- [↑ API 目录](../)
- [🏠 首页 v1.3.15](../../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
- [🔀 跨版本对比 /versions/CampaignBehaviorBase](/versions/CampaignBehaviorBase)
<!-- END BREADCRUMB -->
# CampaignBehaviorBase

**命名空间:** TaleWorlds.CampaignSystem  
**模块:** TaleWorlds.CampaignSystem  
**类型:** abstract class（抽象类，实?

`ICampaignBehavior

`?
所有战役行为（campaign behavior）的抽象基类，是 Mod 注入战役逻辑的主要入口点。Mod 通过派生此类、重?

`RegisterEvents

` 订阅战役事件、重?

`SyncData

` 持久化存档数据，从而扩展战役玩法?
## 概述

`CampaignBehaviorBase

` 实现?

`ICampaignBehavior

` 接口，是 Bannerlord 战役系统中“行为”组件的标准基类。一个行为是一段随战役一起加载、随存档一起保存的逻辑单元：你?

`RegisterEvents

` 中把私有方法挂载?

`CampaignEvents

` 上的各类事件（每?Tick、新游戏创建、存档加载等），?

`SyncData

` 中用 

`IDataStore.SyncData&lt;T&gt;

` 读写需要存档的字段?
基类本身只暴露一个只读字?

`StringId

`、两个构造函数、两个必须重写的抽象方法（`RegisterEvents

`、`SyncData

`）以及一个静态查询辅助方?

`GetCampaignBehavior&lt;T&gt;

`。行为实例通过 

`CampaignGameStarter.AddBehavior

` / 

`CampaignBehaviorManager.AddBehavior

` 注册进战役，并通过 

`Campaign.Current.GetCampaignBehavior&lt;T&gt;()

` 取回?
&gt; 注意：`OnNewGameCreated

` ?

`OnGameLoaded

` **不是**基类上的虚方法重写点。它们是 Mod 自行定义的事件处理方法，?

`RegisterEvents

` 中通过 

`CampaignEvents.OnNewGameCreatedEvent

` / 

`CampaignEvents.OnGameLoadedEvent

` 订阅。基类上唯一需要重写的抽象成员?

`RegisterEvents

` ?

`SyncData

`?
## 心智模型

先把 `CampaignBehaviorBase` 当作这个子系统的入口或数据节点来理解：先看属性代表什么状态，再看方法允许你做什么。

## 字段

\| 名称 \| 类型 \| 描述 \|
\|------\|------\|------\|
\| 

`StringId

` \| 

`string

`（只读） \| 行为的字符串标识符，由构造函数设定，用于在行为管理器中标识此行为 \|

## 构造函?
### CampaignBehaviorBase(string stringId)

`

`

`csharp
public CampaignBehaviorBase(string stringId)
`

`

`

用指定的 

`stringId

` 初始化行为，并将其赋给只读字?

`StringId

`。当你需要为行为指定一个与类名不同的稳定标识时使用?
### CampaignBehaviorBase()

`

`

`csharp
public CampaignBehaviorBase()
`

`

`

无参构造函数，?

`StringId

` 设为 

`this.GetType().Name

`（即派生类的类名）。大多数 Mod 行为直接使用此构造函数即可?
## 主要方法

### RegisterEvents

`

`

`csharp
public abstract void RegisterEvents();
`

`

`

?

`ICampaignBehavior

` 声明的唯一抽象方法?*必须重写**。在此方法中把行为的事件处理方法挂载?

`CampaignEvents

` 上的各类事件。挂载使?

`AddNonSerializedListener(this, ...)

`，确保行为实例本身作为监听者被登记?
典型订阅的事件（均来?

`CampaignEvents

`，参数为 

`CampaignGameStarter

`）：

- 

`OnNewGameCreatedEvent

` —?新游戏创建时触发，用于初始化行为状态?- 

`OnGameLoadedEvent

` —?读取存档后触发，用于在反序列化后重建运行时引用?- 

`DailyTickEvent

` / 

`DailyTickHeroEvent

` / 

`DailyTickSettlementEvent

` / 

`DailyTickPartyEvent

` —?各类每日 Tick 事件?
### SyncData

`

`

`csharp
public abstract void SyncData(IDataStore dataStore);
`

`

`

**必须重写**。在此方法中通过 

`dataStore.SyncData&lt;T&gt;(string key, ref T data)

` 序列?反序列化需要随存档保存的字段。`SyncData&lt;T&gt;

` 返回 

`bool

`，读取存档时?

`true

`，写入存档时?

`false

`，可用于在加载后对反序列化结果做空值校正?
仅可保存可被存档系统处理的类型（基本类型、`CampaignTime

`、以?

`MBObjectBase

` 派生对象等）；行为自身作为其宿主被存档系统自动跟踪，无需也无法把整个行为对象当作根对象保存?
### GetCampaignBehavior&lt;T&gt;

`

`

`csharp
public static T GetCampaignBehavior&lt;T&gt;()
`

`

`

便捷查询方法，等价于 

`Campaign.Current.GetCampaignBehavior&lt;T&gt;()

`，返回当前战役中已注册的、指定类?

`T

` 的行为实例。用于在其它代码中取回你的行为以读写其状态?
## 生命周期说明

一?Mod 行为的典型生命周期如下：

1. **注册**：在游戏初始化阶段（新游戏创?/ 存档加载）通过 

`CampaignGameStarter.AddBehavior(new MyBehavior())

` 把行为加入战役?2. **挂事?*：`RegisterEvents

` 被调用，行为把处理方法挂?

`CampaignEvents

` 上?3. **存档**：写入存档时 

`SyncData

` 被调用，行为把字段写?

`dataStore

`?4. **读档**：读取存档时 

`SyncData

` 被调用重建字段，随后 

`OnGameLoadedEvent

` 处理方法触发以重建运行时引用?
## 使用示例

`

`

`csharp
using System;
using System.Collections.Generic;
using TaleWorlds.CampaignSystem;

// 一个最简战役行为：每?Tick 累加计数器，并把计数器随存档保存?public class MyTickCounterBehavior : CampaignBehaviorBase
{
    private int _tickCount;
    private Dictionary&lt;Settlement, int&gt; _visitsPerSettlement;

    public MyTickCounterBehavior() : base()
    {
        _tickCount = 0;
        _visitsPerSettlement = new Dictionary&lt;Settlement, int&gt;();
    }

    // 必须重写：在此挂载战役事件?    public override void RegisterEvents()
    {
        CampaignEvents.DailyTickEvent.AddNonSerializedListener(this, new Action(OnDailyTick));
        CampaignEvents.OnNewGameCreatedEvent.AddNonSerializedListener(
            this, new Action&lt;CampaignGameStarter&gt;(OnNewGameCreated));
        CampaignEvents.OnGameLoadedEvent.AddNonSerializedListener(
            this, new Action&lt;CampaignGameStarter&gt;(OnGameLoaded));
    }

    // 必须重写：在此读写需要存档的字段?    public override void SyncData(IDataStore dataStore)
    {
        dataStore.SyncData&lt;int&gt;("_tickCount", ref _tickCount);

        // SyncData 在读取存档时返回 true，借此对反序列化结果做空值校正?        if (dataStore.SyncData&lt;Dictionary&lt;Settlement, int&gt;&gt;(
                "_visitsPerSettlement", ref _visitsPerSettlement)
            && _visitsPerSettlement == null)
        {
            _visitsPerSettlement = new Dictionary&lt;Settlement, int&gt;();
        }
    }

    private void OnDailyTick()
    {
        _tickCount++;
    }

    private void OnNewGameCreated(CampaignGameStarter starter)
    {
        _tickCount = 0;
        _visitsPerSettlement = new Dictionary&lt;Settlement, int&gt;();
    }

    private void OnGameLoaded(CampaignGameStarter starter)
    {
        // 读档后若需要重建运行时引用，在此处理?    }

    public int CurrentTickCount =&gt; _tickCount;
}
`

`

`

注册行为（在游戏初始化阶段，例如 Mod 的模块回调中拿到 

`CampaignGameStarter

` 时）?
`

`

`csharp
// gameStarter 是初始化阶段获得?CampaignGameStarter 实例?gameStarter.AddBehavior(new MyTickCounterBehavior());
`

`

`

在其它代码中取回该行为：

`

`

`csharp
var behavior = CampaignBehaviorBase.GetCampaignBehavior&lt;MyTickCounterBehavior&gt;();
// 或等价写法：
// var behavior = Campaign.Current.GetCampaignBehavior&lt;MyTickCounterBehavior&gt;();
if (behavior != null)
{
    int ticks = behavior.CurrentTickCount;
}
`

`

`

## 参见

- [Campaign](./Campaign.md)
- [Settlement](./Settlement.md)
- [PartyTemplate](./PartyTemplate.md)
