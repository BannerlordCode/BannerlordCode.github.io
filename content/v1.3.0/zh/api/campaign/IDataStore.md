---
title: "IDataStore"
description: "战役行为存档的唯一契约：3 个成员，SyncData<T> 双向读写、IsSaving/IsLoading 报方向；1.3.0 树里唯一的实现是 internal 的 CampaignBehaviorDataStore.BehaviorSaveData。"
---

# IDataStore

**Namespace:** `TaleWorlds.CampaignSystem`
**Module:** `TaleWorlds.CampaignSystem`
**Type:** `public interface IDataStore`
**Base:** 无（纯接口，不继承任何类型）
**File:** `TaleWorlds.CampaignSystem/IDataStore.cs`（全文 16 行）

## 概述

`IDataStore` 是 [CampaignBehaviorBase](../CampaignBehaviorBase) 那个 `SyncData(IDataStore)` 参数的类型契约。它只有三个成员，职责单一到可以一句话说完：**告诉一个行为「现在是存还是读」，然后按 key 双向搬运你的私有字段**。

它没有任何基类、没有属性、没有生命周期方法——`RemoveListeners`、各种 `OnXxx` 都不在这个接口上。它不是 `ISaveManager`、不是 `MBObjectManager`、也不继承 `MBObjectBase`。它只回答两个问题：方向是什么（`IsSaving` / `IsLoading`），以及「把这个字段按这个 key 存进去 / 读出来」（`SyncData<T>`）。

**1.3.0 源码树里只有一个实现，而且它是 `internal`。** `grep -rln 'IDataStore' --include=*.cs .` 命中 190 多个文件，但其中绝大多数是**消费方**（`public override void SyncData(IDataStore dataStore)`），实现方只有一个：`TaleWorlds.CampaignSystem/CampaignBehaviorDataStore.cs` 里的嵌套类 `internal class BehaviorSaveData : IDataStore`。这个类同时是 `internal`，所以**你在 mod 代码里 `new` 不出来、也继承不了**——它没有公开构造函数，`BehaviorSaveData(bool isSaving)` 是 public 但类本身 internal。

因此 `IDataStore` 的真实使用姿势只有一种：**你是接收方，不是提供方**。你只实现 `SyncData` 的调用方，实例由引擎在存/读档时构造好传给你。这也意味着 `IDataStore` 的三个成员你只会**读**（`IsSaving` 决定分支、`SyncData` 做搬运），永远不会**实现**——除非你写自己的测试替身。

## 心智模型

把它当成**行为与存档之间的双向管道**，整条链路是四段：

**第一段，你声明要存什么。** 在你的行为的 `SyncData` 里，对每个需要持久化的字段调一次 `dataStore.SyncData<T>("_myKey", ref this._myField)`。`T` 由编译器从 `ref` 参数推出，所以你写不写类型参数都行。key 用下划线开头的字符串（`"_extraLivesContainer"` 这种），这是全树的惯例，不是硬性要求——但**同一个行为里 key 必须唯一**，原因见第三段。

**第二段，方向决定行为。** `BehaviorSaveData` 只有一个字段 `private readonly bool _isSaving`。`IsSaving => _isSaving`，`IsLoading => !_isSaving`。而 `SyncData<T>` 的实现体是这个分支：

```csharp
public bool SyncData<T>(string key, ref T data)
{
    if (this.IsSaving)
    {
        this._records.Add(key, data);
        return true;
    }
    object obj;
    if (this._records.TryGetValue(key, out obj))
    {
        data = (T)((object)obj);
        return true;
    }
    return false;
}
```

保存分支**无条件返回 true 并且用 `Dictionary.Add`**；读取分支命中就写回 `ref` 目标并返回 true，miss 就返回 false **且不动你的字段**。

**第三段，两条硬约束直接从上面这段代码读出来。** 其一，**存的时候一个 key 只能出现一次**——`_records.Add` 遇到重复 key 会抛 `ArgumentException`，没有覆盖逻辑。其二，**读的时候 key miss 是静默失败**——返回值 false 被官方调用点一律忽略（`AgingCampaignBehavior.SyncData` 直接写 `dataStore.SyncData<...>("_x", ref this._x);`，连返回值都不接）。所以你永远不要写「读不到就清空字段」这种依赖返回值的逻辑。

**第四段，方向是靠存档系统给的不是靠构造函数给的。** `BehaviorSaveData` 的 `_isSaving` **没有 `[SaveableField]`**（`CampaignBehaviorDataStore.cs` 里只有 `_records` 带 `[SaveableField(0)]`）。存档时它是 `true`，存档文件里根本没有这个字段；读档反序列化时 `readonly bool` 回到默认值 `false`，于是 `IsLoading` 自动成立。这个「靠不持久化的字段在反序列化时归零」的手法是 1.3.0 里的既有实现细节，`SaveableCampaignTypeDefiner.cs:182` 确实注册了 `typeof(CampaignBehaviorDataStore.BehaviorSaveData), 184`。

**第五段，key 找不到时的模糊匹配救场。** `CampaignBehaviorDataStore.LoadBehaviorData` 先按 `campaignBehavior.StringId` 精确查 `_behaviorDict`；查不到就把整个字典快照出来，用 `campaignBehavior.GetType().Name`（**类名**，不是 StringId）去 `keyValuePair.Key.Contains(name)`。命中就删掉旧 key、登记新 key、然后把那份旧的 `BehaviorSaveData` 交给行为。所以你**改类的命名空间或类名**会让旧存档的 key 对不上——但因为这个 Contains 兜底，只要 `StringId` 里还带着类名，读档仍能救回来。这也是为什么默认构造函数把 `StringId` 设成 `GetType().Name`。

## 关键成员

| 成员 | 签名 | 这个成员是做什么用的 |
| --- | --- | --- |
| `SyncData<T>` | `bool SyncData<T>(string key, ref T data)` | 双向搬运一个字段。**返回值的真实语义**：存的时候恒为 `true`（成功 `Add`）；读的时候命中为 `true`、miss 为 `false` 且 `data` 完全不变。官方行为实现**从不检查这个返回值**，所以它只能当「存档里有没有这条」的诊断信号，不能当控制流依据。`ref` 意味着你必须传字段本身（`ref this._x`），不能传属性，也不能传表达式。`T` 由 `ref` 推断。 |
| `IsSaving` | `bool IsSaving { get; }` | 当前方向是「写入」。实现是 `get { return this._isSaving; }`，只有 getter。官方行为里典型用法是**在同一个 `SyncData` 里用它决定是否初始化临时结构**，或者干脆完全不看（大多数实现两条分支都不判，直接把同一个 key 同时当存和读用——因为实现体自己会分支）。 |
| `IsLoading` | `bool IsLoading { get; }` | 实现是 `get { return !this._isSaving; }`，与 `IsSaving` 严格互补。它存在的价值是让读档代码写得可读：`if (dataStore.IsLoading) { ...重建索引... }`。同一时刻它与 `IsSaving` 必有一个为 true、另一个为 false，不存在两者都 false 的第三态。 |

三个成员的**可访问性都是 `public` 且接口成员无修饰符的隐式 public**；你实现时必须全部三个都实现——`SyncData<T>`、`IsSaving`、`IsLoading`，少一个就编译不过。

## 真实示例

官方最典型的一行式写法，从 `TaleWorlds.CampaignSystem/CampaignBehaviors/AgingCampaignBehavior.cs` 逐字照抄：

```csharp
public override void SyncData(IDataStore dataStore)
{
    dataStore.SyncData<Dictionary<Hero, int>>("_extraLivesContainer", ref this._extraLivesContainer);
    dataStore.SyncData<Dictionary<Hero, int>>("_heroesYoungerThanHeroComesOfAge", ref this._heroesYoungerThanHeroComesOfAge);
}
```

同一个 key 同时承担存和读，因为 `SyncData<T>` 实现体自己按 `IsSaving` 分支——**你不需要写两份**。

需要知道「有没有读到」的写法（官方行为里见不到，因为没人检查返回值，但这是唯一合法的用法）：

```csharp
public override void SyncData(IDataStore dataStore)
{
    if (!dataStore.SyncData<int>("_myCounter", ref this._counter))
    {
        // false 只在读档且 key 不存在时出现。存档路径永远返回 true。
        this._counter = 0;
    }

    if (dataStore.IsLoading)
    {
        // 存档里存的可能是 Dictionary<Hero, int>，读回来后索引需要重建。
        this._byHero = new Dictionary<Hero, int>();
        foreach (KeyValuePair<Hero, int> pair in this._byHeroCache)
        {
            this._byHero[pair.Key] = pair.Value;
        }
    }
}
```

`IsLoading` 分支里重建派生结构是这段代码唯一能自洽的解释：**`SyncData` 只搬字段，不重建由字段推导出来的索引**。你要是在读档时不重建，就等于让存档里的对象带着一个指向已销毁世界的数据结构跑起来。

一个完整可编译的行为骨架：

```csharp
using System.Collections.Generic;
using TaleWorlds.CampaignSystem;

public class LoyaltyLedgerBehavior : CampaignBehaviorBase
{
    private Dictionary<Clan, int> _debts = new Dictionary<Clan, int>();

    public LoyaltyLedgerBehavior() : base("LoyaltyLedger")
    {
    }

    public override void RegisterEvents()
    {
        CampaignEvents.OnClanInfluenceChanged.AddNonSerializedListener(this, this.OnClanInfluenceChanged);
    }

    private void OnClanInfluenceChanged(Clan clan, float change)
    {
        int current;
        this._debts.TryGetValue(clan, out current);
        this._debts[clan] = current - (int)change;
    }

    public override void SyncData(IDataStore dataStore)
    {
        dataStore.SyncData<Dictionary<Clan, int>>("_debts", ref this._debts);
    }
}
```

`RegisterEvents` 里注册的 `CampaignEvents.OnClanInfluenceChanged` 委托签名是 `(Clan clan, float change)`——这是 `CampaignEventReceiver.OnClanInfluenceChanged` 的参数列表，`IMbEvent<Clan, float>` 的类型参数顺序和它逐字一致。方法名写成 `OnClanInfluenceChanged` 是因为 C# 方法组到 `Action<Clan, float>` 的隐式转换只看签名，不看名字。

## 风险与边界

- **1.3.0 里没有 public 实现。** 唯一的实现 `CampaignBehaviorDataStore.BehaviorSaveData` 是 `internal class`，在 `TaleWorlds.CampaignSystem` 程序集内可见。mod 拿不到它，**不要写 `new BehaviorSaveData(...)`**——编译不过。也不要试图用 Castle DynamicProxy 之类去实现它做单元测试：`SyncData<T>` 的泛型方法无法被非泛型代理拦截，你会得到一个什么都没做的替身。
- **`IDataStore` 与 `ISaveManager` 完全无关。** 名字里都有 Save，但 `ISaveManager` 管的是整个存档文件，`IDataStore` 只管一个行为的那几个字段。别把 `ISaveManager` 的用法搬过来。
- **存的时候重复 key 会抛异常，不是覆盖。** `_records.Add(key, data)` 在 key 已存在时抛 `ArgumentException`。同一个行为里两次用同一个 key 存就崩。不过 `CampaignBehaviorDataStore.OnBeforeSave` 每次存档前先 `ClearBehaviorData()` 再为每个行为 `new BehaviorSaveData(true)`，所以正常路径下不会撞——**手动在同一个 `SyncData` 里写两个同 key 的调用才是真实风险**。
- **读的时候 miss 静默。** 返回 false，字段不变，没有异常、没有断言。这就是为什么加新字段后读旧档不会崩，但也意味着**新字段在旧档里保持 C# 的默认值**（引用类型是 null）。凡是新增的集合字段，都要在读档后自己补初始化。
- **`ref` 参数禁止传属性。** `dataStore.SyncData("k", ref this.SomeProperty)` 编译失败。字段必须先初始化，不能是 `null` 引用字段在读档分支里被直接 `ref` 之前就崩——实际上 `ref this._x` 传的是引用地址，即使字段是 null 也不崩，但存的时候会把 null 存进去。
- **存进去的是引用本身，不是深拷贝。** 保存分支 `_records.Add(key, data)` 存的是那个对象引用。存档流程紧接着会把 `_records` 交给存档系统序列化，所以最终是序列化语义而不是引用语义；但如果你在同一次存档过程中修改了那个集合，存档看到的是修改后的状态。
- **接口成员全部必须实现。** 三个成员少任何一个，派生类就是抽象的。想写测试替身也要老老实实实现全部三个 + `SyncData<T>`。
- **`IsSaving` 与 `IsLoading` 不构成第三态。** 没有「两者都 false」的合法时刻（`IsLoading` 是 `!IsSaving`）。不要写 `if (!IsSaving && !IsLoading)` 这种分支。
- **别在 `SyncData` 里做重活。** 它在存档时对每个行为各调一次、读档时再调一次，一次都在加载/保存的关键路径上。`AgingCampaignBehavior` 的两行字典搬运就是本类型的性能标尺。

## 跨版本提示

`IDataStore` 在 `bannerlord-1.3.0/`、`bannerlord-1.3.15/`、`bannerlord-1.4.6/`、`bannerlord-1.4.7/`、`bannerlord-1.5.3/` 五棵源码树里**逐字节一致**：都是 16 行、都只声明 `SyncData<T>` / `IsSaving` / `IsLoading` 三个成员。跨 1.3 → 1.5 三个大版本零变化，这是 mod 存档代码里最不需要担心的契约。

变的是**消费方的数量**：实现 `SyncData(IDataStore)` 的行为类在 1.3.0 就有 190 多个文件命中（`TaleWorlds.CampaignSystem/CampaignBehaviors/` 下上百个 + `Issues/` 下四十多个 + 沙盒与故事模式的六十多个），后续版本持续新增。它们用的 key 命名、泛型选择（`Dictionary<Hero, int>`、`int`、`bool`、`string` 都有）都属于各自的实现细节，不影响接口。

`BehaviorSaveData` 的「`_isSaving` 不持久化所以读档时自动变 false」这个手法同样稳定，因为它依赖的是存档系统的字段反射规则，不是游戏逻辑。**换句话说：你的 `SyncData` 实现从 1.3.0 抄到 1.5.3 一行都不用改。**

## 依赖关系

- 唯一签名方：[CampaignBehaviorBase](../CampaignBehaviorBase) 的 `public abstract void SyncData(IDataStore dataStore)` 是这个接口唯一被要求实现的地方，两个构造器与 `StringId` 字段都在那一页
- 唯一实现方：[CampaignBehaviorDataStore](../CampaignBehaviorDataStore) 里的 `internal class BehaviorSaveData : IDataStore`，`_records` 字典 + `readonly bool _isSaving` 就是本接口的落地形态
- 调度方：[CampaignBehaviorManager](../CampaignBehaviorManager) 在 `OnBeforeSave` 里逐个 `SaveBehaviorData`、在 `LoadBehaviorData` 里逐个反查，是存/读两条时序的真正编排者
- 存档类型注册：`SaveableCampaignTypeDefiner` 里 `AddClassDefinition(typeof(CampaignBehaviorDataStore.BehaviorSaveData), 184, null)` 决定了它能被反序列化，配套见 [save-system 架构页](../../../architecture/save-system)
- 标记接口：[ICampaignBehavior](../ICampaignBehavior) 只声明 `RegisterEvents()`，与本接口是并列关系而非继承关系
- 桶首页：[campaign API 分区](../)