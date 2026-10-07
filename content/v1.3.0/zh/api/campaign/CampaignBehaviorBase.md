---
title: "CampaignBehaviorBase"
description: "战役行为的抽象基类：6 个成员，两个构造器决定存档键，RegisterEvents 与 SyncData 是唯一必须实现的两个方法，GetCampaignBehavior<T> 只是 Campaign.GetCampaignBehavior<T> 的静态转发。"
---

# CampaignBehaviorBase

**Namespace:** `TaleWorlds.CampaignSystem`
**Module:** `TaleWorlds.CampaignSystem`
**Type:** `public abstract class CampaignBehaviorBase : ICampaignBehavior`
**Base:** 实现标记接口 [ICampaignBehavior](../ICampaignBehavior)（该接口只有 `RegisterEvents()` 一个成员）；不继承 `MBObjectBase`
**File:** `TaleWorlds.CampaignSystem/CampaignBehaviorBase.cs`（全文 27 行）

## 概述

`CampaignBehaviorBase` 是 mod 往战役里插逻辑的那张门票。它本身**没有任何行为、没有字段存储、没有生命周期管理**，只有 6 个 public/protected 成员：两个构造器、两个抽象方法、一个静态转发方法、一个 `readonly string StringId`。

你必须实现的只有两个：`RegisterEvents()` 和 `SyncData(IDataStore)`。前者由 `CampaignBehaviorManager.RegisterEvents()` 在战役初始化时对每个行为各调一次，是挂 `CampaignEvents` 订阅的地方；后者由存档系统在存/读档时调用，是你的私有字段进存档的唯一通道。除此之外基类不提供任何默认行为——没有 `Dispose`，没有 `OnEndCampaign`，想清理只能自己在 `SyncData` 的读档分支或订阅的事件里做。

**`StringId` 是这个类里唯一有持久化后果的成员，而它的值由你选的构造器决定。** `CampaignBehaviorBase(string stringId)` 直接用你传的字符串；无参构造器用 `base.GetType().Name`，也就是**运行时类名**。这个 id 是存档里 `[SaveableField(1)] Dictionary<string, BehaviorSaveData> _behaviorDict` 的主键，`CampaignBehaviorDataStore.SaveBehaviorData` 遇到重复 id 会打 `Debug.FailedAssert("trying to save multiple behaviors with the same stringid: ...")`，`LoadBehaviorData` 找不到精确匹配时会退化成「用类名去 `Contains` 旧 key」的模糊匹配。**改类名会改变默认 id，进而影响旧存档的读取**——这就是为什么派生类通常显式传一个稳定字符串。

**注意一个容易踩的不对称**：`CampaignGameStarter.AddBehavior(CampaignBehaviorBase)` 只做 `_campaignBehaviors.Add(campaignBehavior)`，**不调 `RegisterEvents()`**；而运行期的 `CampaignBehaviorManager.AddBehavior` 是 `_campaignBehaviors.Add(campaignBehavior); campaignBehavior.RegisterEvents();`，**会立即注册**。同一个方法名在两个类上语义不同：`AddBehavior` 走启动器是「排队等统一注册」，走管理器是「插进去并马上生效」。

## 心智模型

把它当成**「战役生命周期里的一段常驻插件」**，然后按三个问题定位：**我什么时候被调用？我怎么拿到别人的引用？我怎么活过存档？**

**问题一：我什么时候被调用？** 三条时机，形状完全不同：

`RegisterEvents()` 由 [CampaignBehaviorManager](../CampaignBehaviorManager) 的同名方法驱动，实现是 `foreach (CampaignBehaviorBase b in this._campaignBehaviors) { b.RegisterEvents(); }` —— **一次性、全量、正序**。这意味着你在 `RegisterEvents` 里遍历 `Campaign.Current.GetCampaignBehaviors<T>()` 会看到全部行为（含自己），而如果 A 的 `RegisterEvents` 里假设 B 已经订阅完毕，那个假设只在 B 排在 A 前面时成立。

其余时间你都不被直接调用。你挂到 `CampaignEvents` 上的那些委托才是真正的常驻入口——`CampaignEvents.DailyTickHeroEvent`、`OnClanInfluenceChanged`、`PerkOpenedEvent` 这些由引擎在各自的时机打进来。

**问题二：我怎么拿到别人的引用？** 两条路，行为不同。

`CampaignBehaviorBase.GetCampaignBehavior<T>()` 是 **static**，实现只有一行 `return Campaign.Current.GetCampaignBehavior<T>();`，而 `Campaign.GetCampaignBehavior<T>()` 又只是 `_campaignBehaviorManager.GetBehavior<T>()`。真正干活的是 `CampaignBehaviorManager.GetBehavior<T>()`：`return this._campaignBehaviors.OfType<T>().FirstOrDefault<T>();`

**`FirstOrDefault` 意味着「注册顺序里第一个匹配的」。** 这跟 [GameModel](../../core-extra/GameModel) 那套覆盖链的 `Count - 1` 倒序查找是**反方向**的：一个模型是「后注册者赢」，一个行为是「先注册者赢」。同时 `OfType<T>()` 不要求 `T` 是 `CampaignBehaviorBase`，所以 `GetCampaignBehavior<IAllianceCampaignBehavior>()` 这种按接口取官方行为的写法完全合法——`AcceptCallToWarAgreementDecision.AllianceCampaignBehavior` 属性的实现正是 `Campaign.Current.GetCampaignBehavior<IAllianceCampaignBehavior>()`。

**取不到就返回 null，不抛异常。** `FirstOrDefault` 在空序列上返回 `default(T)`。官方代码靠「沙盒保证注册了那个行为」来免掉判空，你若取自己没注册的行为必须自己判。

**问题三：我怎么活过存档？** 只有 `SyncData`。机制细节全在 [IDataStore](../IDataStore) 那一页：同一个 key 同时当存和读、`ref` 只能传字段、读档 key miss 静默返回 false。这里补一条只有在这一层才看得见的规则：**`SyncData` 搬运的是裸字段，不会重建由字段推导出来的结构**。`AgingCampaignBehavior.SyncData` 存了两个 `Dictionary<Hero, int>` 就结束了，它派生的「当前未成年英雄」判断逻辑靠的是 `DailyTickHero` 里每次现算，不依赖任何读档后重建的索引。

**最后一条纪律：`RegisterEvents` 只调一次，`RemoveBehaviors` 不会替你退订。** `CampaignBehaviorManager.RemoveBehavior<T>()` 在移除后调了 `CampaignEventDispatcher.Instance.RemoveListeners(t)`，能清掉以该行为为 owner 注册的监听；但 `ClearBehaviors()` 只做 `_campaignBehaviors.Clear()`，**不清监听**。启动阶段 `CampaignGameStarter.RemoveBehaviors<T>()` 更彻底——它连 `CampaignEventDispatcher` 都不碰，只是把列表项删掉。

## 关键成员

| 成员 | 签名 | 这个成员是做什么用的 |
| --- | --- | --- |
| `.ctor(string)` | `public CampaignBehaviorBase(string stringId)` | 方法体只有 `this.StringId = stringId;`。传稳定字面量（官方沙盒行为里大量使用这种固定 id）可以把存档键与类名解耦，改名重构不影响老存档。传 null 不会崩，但存档字典的 key 变 null，后续 `Contains` 模糊匹配与去重行为都不可预期。 |
| `.ctor()` | `public CampaignBehaviorBase()` | 方法体只有 `this.StringId = base.GetType().Name;`。省事但把存档键绑死在运行时类名上：给类改名、或在不同 mod 里出现同名类，都会撞上 `SaveBehaviorData` 的重复 id 断言或触发 `LoadBehaviorData` 的模糊匹配。派生类若不显式指定 id，多数落进这一条。 |
| `RegisterEvents` | `public abstract void RegisterEvents()` | **必须实现**。战役初始化时对每个行为各调一次，是挂 `CampaignEvents` 订阅的唯一时机。它**不是**「每次读档都调」——读档走的是 `SyncData` 分支。所以不要把「需要重建的状态」放在这里。 |
| `SyncData` | `public abstract void SyncData(IDataStore dataStore)` | **必须实现**。存档时对每个行为调一次（`IsSaving` 为 true），读档时再调一次（`IsLoading` 为 true）。签名里的 `IDataStore` 实参由引擎构造并传入，mod 拿不到那个类型的其他实例。语义细节见 [IDataStore](../IDataStore)。 |
| `GetCampaignBehavior<T>` | `public static T GetCampaignBehavior<T>()` | 一行转发：`return Campaign.Current.GetCampaignBehavior<T>();`。因为是 static，它在实例方法里可以直接调而无需 `this.`。返回注册顺序里第一个匹配的行为，**取不到是 null 而不是异常**；`T` 无约束，可以是接口（如 `IAllianceCampaignBehavior`）或类。 |
| `StringId` | `public readonly string StringId` | 存档键。两个构造器各给它一个值。`readonly` 意味着派生类**不能改它**——想在构造后调整 id 只能改构造器参数。同时它也是行为在调试输出和存档诊断里的名字。 |

继承自 [ICampaignBehavior](../ICampaignBehavior) 的只有 `RegisterEvents()`，而基类把它提升成 `abstract`——所以实现这个接口和继承这个类是同一条路。

## 真实示例

最小可编译行为，显式传存档键，并订阅一个真实的战役事件：

```csharp
using System.Collections.Generic;
using TaleWorlds.CampaignSystem;

public class DebtLedgerBehavior : CampaignBehaviorBase
{
    private Dictionary<Clan, int> _debts = new Dictionary<Clan, int>();

    public DebtLedgerBehavior() : base("DebtLedger")
    {
    }

    public override void RegisterEvents()
    {
        CampaignEvents.OnClanInfluenceChanged.AddNonSerializedListener(this, this.OnClanInfluenceChanged);
    }

    public override void SyncData(IDataStore dataStore)
    {
        dataStore.SyncData<Dictionary<Clan, int>>("_debts", ref this._debts);
    }

    private void OnClanInfluenceChanged(Clan clan, float change)
    {
        int current;
        this._debts.TryGetValue(clan, out current);
        this._debts[clan] = current - (int)change;
    }

    public int GetDebt(Clan clan)
    {
        int value;
        this._debts.TryGetValue(clan, out value);
        return value;
    }
}
```

在 `MBSubModuleBase.InitializeGameStarter` 里挂上去。注意这里走的是 `CampaignGameStarter.AddBehavior`，**它不调 `RegisterEvents`**——注册推迟到战役初始化，由 `CampaignBehaviorManager.RegisterEvents()` 统一进行：

```csharp
protected override void InitializeGameStarter(Game game, IGameStarter gameStarterObject)
{
    base.InitializeGameStarter(game, gameStarterObject);
    CampaignGameStarter starter = (CampaignGameStarter)gameStarterObject;
    starter.AddBehavior(new DebtLedgerBehavior());
}
```

运行期取回官方行为（按接口取，这是官方自己的用法）：

```csharp
IAllianceCampaignBehavior alliances = CampaignBehaviorBase.GetCampaignBehavior<IAllianceCampaignBehavior>();
if (alliances != null)
{
    alliances.StartCallToWarAgreement(kingdomA, kingdomB, kingdomC, 500, false);
}
```

`GetCampaignBehavior<T>` 返回 null 时不抛异常，所以 `if` 判空是必需的，不是防御性冗余。上面那个 `StartCallToWarAgreement(Kingdom callingKingdom, Kingdom calledKingdom, Kingdom kingdomToCallToWarAgainst, int callToWarCost, bool isPlayerPaying = false)` 就是 `IAllianceCampaignBehavior` 上的真实签名。

## 风险与边界

- **抽象类，两个抽象方法都躲不掉。** 少实现 `RegisterEvents` 或 `SyncData` 就编译不过。`ICampaignBehavior` 只有 `RegisterEvents`，所以你可以选择「实现接口但不继承这个类」——但那样就没有 `StringId`、没有 `SyncData`、没有静态 `GetCampaignBehavior<T>` 的便利，而 `CampaignBehaviorManager.SetBehaviors` 收的是 `IEnumerable<CampaignBehaviorBase>`，实际**根本装不进去**。所以继承是唯一可行路径。
- **`GetCampaignBehavior<T>` 是「先注册者赢」，不是「后注册者赢」。** `OfType<T>().FirstOrDefault<T>()` 按列表顺序取第一个。这跟模型覆盖链的倒序扫描方向相反，是两个子系统最本质的差别之一。多个 mod 都实现 `IAllianceCampaignBehavior` 时，先注册的那个拿到，你无法用注册顺序把自己顶上去——只能换一种取得方式。
- **取不到返回 null，不抛异常。** `FirstOrDefault` 的空序列行为。官方代码普遍直接解引用（例如 `AcceptCallToWarAgreementDecision.ApplyChosenOutcome` 直接 `this.AllianceCampaignBehavior.StartCallToWarAgreement(...)`），那是因为沙盒保证注册了它。你的 mod 若可能在一个精简战役里运行，判空是必需的。
- **`StringId` 是 `readonly`。** 构造之后无法改。想换键只能在构造器里传对。派生类里写 `this.StringId = ...` 编译失败。
- **无参构造器把存档键绑在类名上。** 改类名 → 旧存档精确查找 miss → 落到 `LoadBehaviorData` 的 `keyValuePair.Key.Contains(name)` 模糊匹配。如果连名字里的关键词都变了，就彻底读不回来，字段回到默认值，且**没有任何报错**。
- **两个 `AddBehavior` 语义不同。** `CampaignGameStarter.AddBehavior` 只入队不注册；`CampaignBehaviorManager.AddBehavior` 入队后**立即调 `RegisterEvents()`**。运行期热插行为用后者，重复调用会让订阅挂两次。
- **`RemoveBehaviors<T>()` 与 `ClearBehaviors()` 都不退订。** 前者在启动器上只删列表项，后者只 `_campaignBehaviors.Clear()`。想真正退订必须走 `CampaignBehaviorManager.RemoveBehavior<T>()`，它会调 `CampaignEventDispatcher.Instance.RemoveListeners(t)`——而且它**只删一个**就 `return`。要删多个得反复调。
- **`RegisterEvents` 只跑一次。** 它不是「每次进入战役」都调。读档后想重建内存态，用 `SyncData` 的 `IsLoading` 分支，或者订阅 `CampaignEvents.OnGameLoadedEvent`（`AgingCampaignBehavior` 就是这么做的）。
- **没有 `Dispose` / 没有反注册方法。** 静态单例式行为在整个进程生命周期里活着，跨战役不重置。想在战役结束时清理，唯一的位置是你自己在 `OnGameLoadedEvent` 之类的钩子里写。

## 怎么用

### 怎么拿到它

你**不 new 它给游戏用，而是把它注册进去**。注册容器是 `CampaignGameStarter` 上的 `CampaignBehaviors`（`TaleWorlds.CampaignSystem/CampaignGameStarter.cs:15`，一个 `ICollection<CampaignBehaviorBase>`）。注意 1.3.0 的 `IGameStarter` 接口（`TaleWorlds.Core/IGameStarter.cs:7`）**只暴露 `AddModel` 两个重载和 `Models`**——注册行为的方法都不在接口上，所以要先转型，再调 `AddBehavior(CampaignBehaviorBase campaignBehavior)`（`CampaignGameStarter.cs:48`）。它内部就是 `this._campaignBehaviors.Add(...)`，且 `:50` 判过 null，传 null 会被静默丢弃。

注册之后由 `TaleWorlds.CampaignSystem/Campaign.cs:1935` 包进 `CampaignBehaviorManager`，`Campaign.cs:1941` 调 `InitializeCampaignBehaviors`。取回用 `CampaignBehaviorBase.GetCampaignBehavior<T>()`（`TaleWorlds.CampaignSystem/CampaignBehaviorBase.cs:24`），它转到 `Campaign.Current.GetCampaignBehavior<T>()`（`Campaign.cs:1257`），底层是 `OfType<T>().FirstOrDefault()`——**扫不到就返回 null**。

### 典型用法

写一个带存档的行为，并注册：

```csharp
using TaleWorlds.CampaignSystem;
using TaleWorlds.Core;
using TaleWorlds.MountAndBlade;

public class MyTollBehavior : CampaignBehaviorBase
{
    private int _tollsPaid;

    // 显式传 StringId。它同时是存档键，不要用类名。
    public MyTollBehavior() : base("my_toll_behavior")
    {
    }

    public override void RegisterEvents()
    {
        // 这里挂 CampaignEvents 的监听。此刻 Campaign.Current 已可用。
    }

    public override void SyncData(IDataStore dataStore)
    {
        // 一个 key 对应一个 T，存取用同一个 key、同一个 T。
        dataStore.SyncData("tolls_paid", ref this._tollsPaid);
    }
}

public class MyModule : MBSubModuleBase
{
    protected override void InitializeGameStarter(Game game, IGameStarter gameStarterObject)
    {
        if (game.GameType is Campaign)
        {
            // 1.3.0 必须转型后才能拿到注册方法（IGameStarter 上没有）。
            var starter = (CampaignGameStarter)gameStarterObject;
            starter.AddBehavior(new MyTollBehavior());
        }
    }
}
```

签名核对：`RegisterEvents()` 与 `SyncData(IDataStore dataStore)` 都是无参/单参的 `abstract void`（`CampaignBehaviorBase.cs:21` 与 `:30`）；`StringId` 是 `public readonly string` 字段（`CampaignBehaviorBase.cs:33`），不是属性，**没有 setter**。

### 最容易踩的坑

**用无参构造函数，让 `StringId` 变成类名。这个字段同时是存档主键。**

`TaleWorlds.CampaignSystem/CampaignBehaviorBase.cs:15` 那个无参构造函数只做了一件事：`this.StringId = base.GetType().Name;`。

于是它同时带来两个方向的故障：

**其一，改类名 = 丢存档。** 存档按 `StringId` 索引。`TaleWorlds.CampaignSystem/CampaignBehaviorDataStore.cs:19` 的 `SaveBehaviorData` 先取 `campaignBehavior.StringId`（`:21`），再在 `:30` 写进 `_behaviorDict`。你把 `MyTollBehavior` 改名成 `TollBehavior`，旧存档里那条 `"MyTollBehavior"` 就再也匹配不上——加载时 `LoadBehaviorData` 在 `:44` 的 `TryGetValue` 返回 false，**存档静默被跳过**，你的 `_tollsPaid` 回到 0，没有报错。

**其二，两个同名类会互相覆盖存档。** `:24` 判重命中时走的是 `Debug.FailedAssert(...)`（`:26`）然后 `:27` 直接 `this._behaviorDict[stringId] = behaviorSaveData`。而 `Debug.FailedAssert` 在 1.3.0 里是**空方法**（`TaleWorlds.Engine/MBDebug.cs:108`，方法体是 `{}`，而且带 `[Conditional("_RGL_KEEP_ASSERTS")]`，未定义该符号时整个调用在编译期就被剥掉）。**所以两个同名行为共存时，后保存的那个直接把前一个的存档顶掉，没有任何提示。**

`MyTollBehavior` 这类描述性类名在 mod 之间撞名的概率并不低。要么像上面那样显式传一个带前缀的 id，要么至少确认自己的类名在整棵行为列表里唯一。

## 跨版本提示

`CampaignBehaviorBase` 在 `bannerlord-1.3.0/`、`bannerlord-1.3.15/`、`bannerlord-1.4.6/`、`bannerlord-1.4.7/`、`bannerlord-1.5.3/` 五棵树的 public/protected 表面**完全一致**：都是 6 个成员（两个构造器、`RegisterEvents`、`SyncData`、static `GetCampaignBehavior<T>`、`readonly StringId`），0 新增 / 0 移除 / 0 签名变化。跨三个大版本零变化。

真正在变的是**派生态**。1.3.0 里实现它的类就有 190 多个文件（`CampaignBehaviors/` 上百个、`Issues/` 四十多个，加上沙盒与故事模式的六十多个），后续版本随新系统继续增加。所以升级时你的行为最可能遇到的不是「基类变了」，而是「你订阅的 `CampaignEvents` 事件签名变了」或「你依赖的官方行为的接口成员变了」。

一条实践建议：因为 `RegisterEvents` / `SyncData` 两个方法的签名永远稳定、而 `StringId` 的语义也稳定，**跨版本迁移时只需要重新核对事件委托的签名和 `SyncData` 里的 key 命名**。

## 依赖关系

- 唯一签名方：[ICampaignBehavior](../ICampaignBehavior) 声明 `RegisterEvents()`，基类把它提升为抽象成员
- 存档契约：[IDataStore](../IDataStore) 是 `SyncData` 参数的类型，三个成员的语义与那个「`_isSaving` 不持久化」的机制全在那一页
- 调度方：[CampaignBehaviorManager](../CampaignBehaviorManager) 决定 `RegisterEvents` 的调用时机（一次性全量正序）、`GetBehavior<T>` 的「第一个匹配」语义，以及 `RemoveBehavior<T>` 的退订行为
- 静态转发终点：[Campaign](../Campaign) 的 `GetCampaignBehavior<T>` / `GetCampaignBehaviors<T>` 只是管理器的一层包装
- 注册入口：[CampaignGameStarter](../CampaignGameStarter) 的 `AddBehavior` / `RemoveBehaviors<T>` 是启动阶段唯一的两个挂载点
- 典型范本：[AgingCampaignBehavior](../AgingCampaignBehavior) 是一个完整实现了两个抽象方法、并额外订阅 `OnGameLoadedEvent` 的官方行为
- 桶首页：[campaign API 分区](../)