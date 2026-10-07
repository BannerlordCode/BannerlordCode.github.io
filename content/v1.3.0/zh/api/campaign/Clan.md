---
title: "Clan"
description: "战役地图上的氏族与阵营聚合体：领主、封地、影响力、金币、战争、王国归属与雇佣兵服役状态。"
---

# Clan

**Namespace:** TaleWorlds.CampaignSystem
**Module:** TaleWorlds.CampaignSystem
**Type:** `public sealed class Clan : MBObjectBase, IFaction`
**Base:** `MBObjectBase`
**File:** `TaleWorlds.CampaignSystem/Clan.cs`

## 概述

`Clan` 是战役层的政治聚合体。一个氏族既是一条家族血脉，也连带着它的封地、名士、战争状态、金库与社会资本；同时它还是 `IFaction` 的两个实现之一（另一个是 [Kingdom](../Kingdom)）。

一个氏族同时拥有三类互不相同的东西：

- **人。** `Heroes`、`AliveLords`、`DeadLords`、`Companions`、`SupporterNotables` 都是 `Hero` 对象，它们的 `Clan` 字段反向指回氏族。
- **地。** `Fiefs`（城镇与城堡）、`Villages` 以及拍平后的 `Settlements`。所有权实际存放在 [Settlement](../Settlement) / [Town](../Town) 侧，氏族列表只是缓存索引。
- **政治。** `Influence`、`Renown`、`Tier`、`Aggressiveness`、`IsAtWarWith` / `FactionsAtWarWith`、`Kingdom` 归属以及雇佣兵服役状态。

有一部分氏族仅仅作为“小型派系”存在——强盗、雇佣兵、叛军、黑帮、教派模板——既无成员也无封地。这也是 `Clan.All` 远大于受王国庇护的贵族数量的原因。

## 心智模型

`Clan` 位于 `Campaign` 之下、`Hero` 这一层，与 `Settlement` 同级。`Hero` 与 `Settlement` 都持有指向所属 `Clan` 的反向引用，因此所有权在数据上是双向的，但在实践中不对称：**变更所有权要走聚落的易主动作，氏族列表随后才更新。**

```
Clan
 ├─ Heroes / AliveLords / Companions      (Hero.Clan → 反向引用)
 ├─ Fiefs (Town) / Villages (Village)     (Settlement.Owner → 反向引用)
 ├─ Influence / Renown / Gold / Banner
 ├─ Kingdom（独立或小型派系时为 null）
 └─ IFaction: FactionsAtWarWith、IsAtWarWith、GetStanceWith
```

典型调用顺序：

```
MBSubModuleBase.OnCampaignStart
    Clan.PlayerClan 已可用
CampaignBehaviorBase.RegisterEvents -> CampaignEvents.ClanTierIncrease
DailyTick
    读取 clan.Influence / clan.Renown
    通过 clan.ChangeClanName(...) 或 clan.AddRenown(...) 修改
    只有当 Tier 真正变化时才会触发 CampaignEvents.ClanTierIncrease
```

实际开发中最容易踩的坑：

- **`Gold` 是只读的，且由领袖代理。** getter 转发到 `Leader.Gold`，`Leader` 为 null 时返回 `0`。要给氏族付款必须改领袖的金币（`Hero.ChangeHeroGold`），而不是改氏族。
- **`Influence` 的 setter 有副作用。** 赋值更小的值会调用 `SkillLevelingManager.OnInfluenceSpent(this.Leader, delta)`。在 `Leader` 为 null 的行为里写影响力，会跳过技能路径却仍写入字段，导致技能成长与花费永久不同步。
- **`Fiefs`/`Villages`/`Settlements` 是缓存视图。** 它们在对象管理器通知时刷新，而不是在你赋值 `Settlement.OwnerClan` 的瞬间。永远不要把它们当权威来源。
- **`Tier` 是推导值。** `Tier` 与 `RenownRequirementForNextTier` 来自战役配置。不要缓存，它们会随进度规则变化。
- **`FindFirst` / `FindAll` 会扫描全部氏族。** 两者对完整氏族列表都是 `O(n)`，而官方代码在紧循环里反复调用。如果你逐 tick 扫描，请自己缓存列表。

## 依赖关系

| 方向 | 类型 | 关系 |
|-----------|------|--------------|
| 存储 | `MBObjectBase` | 由 `Id` / `StringId` 标识，可存档 |
| 阵营契约 | `IFaction` | 与 [Kingdom](../Kingdom) 共享的外交接口 |
| 人 | [Hero](../Hero) | `Heroes`、`AliveLords`、`Companions`；`Hero.Clan` |
| 地 | [Town](../Town)、[Village](../Village)、[Settlement](../Settlement) | `Fiefs`、`Villages`、`Settlements` |
| 王国 | [Kingdom](../Kingdom) | `Kingdom` 属性、`ClanLeaveKingdom` |
| 管理器 | [FactionManager](../FactionManager) | `IFaction` 的战争与立场解析 |
| 事件 | [CampaignEvents](../CampaignEvents) | `ClanTierIncrease`、`OnClanCreatedEvent`、`OnClanChangedKingdomEvent` |

## 主要成员

### 身份与分类

#### `public static MBReadOnlyList<Clan> All`

全部氏族，包含小型派系模板与玩家氏族。数量很大——数百条。

#### `public static Clan PlayerClan`

玩家自己的氏族。在玩家尚未被安置的战役里（编辑器、部分剧情模式状态）为 `null`。

#### `public static Clan CreateClan(string stringID)`

引擎工厂。返回一个已注册的氏族，也是唯一受支持的添加方式；手动 `new Clan()` 永远不会出现在 `All` 中，也不会被存档。

#### `public bool IsNoble { get; set; }` / `public bool IsMinorFaction` / `public bool IsOutlaw` / `public bool IsBanditFaction` / `public bool IsRebelClan` / `public bool IsClan`

分类标志。`IsMinorFaction` 是私有 setter；`IsNoble`、`IsRebelClan`、`IsOutlaw` 可存档且可写。

#### `public bool IsMapFaction`

当这个氏族作为独立政治实体出现在战役地图上时为 `true`（玩家可以拥有它，它可以宣战）。强盗与小型派系返回 `false`。

### 人

#### `public MBReadOnlyList<Hero> Heroes` / `AliveLords` / `DeadLords` / `Companions`

成员缓存视图。`Heroes` 包含存活与已死者；`AliveLords` 过滤出在场、存活且非同伴的成员。

#### `public Hero Leader`

氏族领袖。小型派系没有玩家时为 `null`，这正是 `Clan.Gold` 在那里返回 `0` 的原因。

#### `public void SetLeader(Hero leader)`

写入领袖。官方通过“更换氏族领袖”动作完成这件事，同时还会转移影响力、写日志并更新王国。

#### `public static Clan FindFirst(Predicate<Clan> predicate)` / `public static IEnumerable<Clan> FindAll(Predicate<Clan> predicate)`

对 `Clan.All` 的线性扫描。`FindFirst` 会短路返回；`FindAll` 总是走完全部。

### 土地与价值

#### `public MBReadOnlyList<Town> Fiefs` / `public MBReadOnlyList<Village> Villages` / `public MBReadOnlyList<Settlement> Settlements`

索引化的所有权视图。`Settlements` 是 `Fiefs` 与 `Villages` 的并集。

#### `public float CalculateTotalSettlementValueForFaction(Kingdom kingdom)`

**以该王国的视角**评估氏族领地价值，包含王国自身的聚落价值模型。需要一致数字时，请传实际拥有方王国而不是 `null`。

#### `public float CalculateTotalSettlementBaseValue()`

不做派系视角修正的原始总和。更廉价，只比较相对权重时应当用它。

#### `public Settlement HomeSettlement` / `public void ConsiderAndUpdateHomeSettlement()` / `public void SetInitialHomeSettlement(Settlement initialHomeSettlement)`

氏族驻地。改变它会影响领袖住在哪里、部队开往何处，以及地图政治。

### 金币、影响力与声望

#### `public float Influence { get; set; }`

社会资本。赋值更小的值会为领袖触发 `SkillLevelingManager.OnInfluenceSpent`——见上面的坑。

#### `public void AddRenown(float value, bool shouldNotify = true)`

增加声望，默认会通知玩家。做批量或静默修改时传 `false`。

#### `public int RenownRequirementForNextTier`

配置推导值。读它而不是把阶级门槛写死。

#### `public int Tier`

当前等级，由声望与阶级规则推导。它本身不存档。

#### `public int Gold`

只读，转发到 `Leader.Gold`。无领袖的氏族返回 `0`。

#### `public int TributeWallet` / `public int DebtToKingdom`

作为附庸时挂在氏族上的王国账目。

### 外交

#### `public bool IsAtWarWith(IFaction other)`

`FactionManager.IsAtWarAgainstFaction` 的便捷包装。

#### `public MBReadOnlyList<IFaction> FactionsAtWarWith`

缓存的战争集合。由 `UpdateFactionsAtWarWith()` 刷新。

#### `public StanceLink GetStanceWith(IFaction other)`

底层立场值（敌对、戒备、中立、友好）。各 `Is*` 便捷方法都是它的阈值化封装。

#### `public void UpdateFactionsAtWarWith()` / `public void UpdateCurrentStrength()`

重算缓存的战争集合与缓存的 `CurrentTotalStrength`。官方在所有权或名册变化后会调用它们。

### 王国归属

#### `public Kingdom Kingdom`

所属王国，独立或小型派系时为 `null`。

#### `public void ClanLeaveKingdom(bool giveBackFiefs = false)`

切断王国归属。传 `giveBackFiefs: true` 会释放所有封地——从氏族一侧看这是不可逆的。

#### `public void StartMercenaryService()` / `public void EndMercenaryService(bool isByLeavingKingdom)`

切换雇佣兵状态。“通过脱离王国结束”与普通结束走的是不同代码路径，后果也不同。

#### `public void ResetPlayerHomeAndFactionMidSettlement()`

剧情模式初始化之后针对玩家氏族的特例处理。

### 生命周期

#### `protected override void AfterLoad()` / `protected override void PreAfterLoad()`

存档修复钩子。它们在反序列化后修复断裂的交叉引用，这也是手改氏族序列化字段只会在“重新读档之后”才暴露问题的原因。

## 使用示例

### 示例 1：每日影响力与声望账本行为

```csharp
using TaleWorlds.CampaignSystem;

public sealed class ClanLedgerBehavior : CampaignBehaviorBase
{
    public override void RegisterEvents()
    {
        CampaignEvents.DailyTickClanEvent.AddNonSerializedListener(this, OnDailyTickClan);
    }

    public override void SyncData(IDataStore dataStore)
    {
    }

    private void OnDailyTickClan(Clan clan)
    {
        Campaign campaign = Campaign.Current;
        if (campaign == null || !clan.IsNoble)
        {
            return;
        }

        // 金币由领袖持有且只读；影响力才是可写分数。
        int clanGold = clan.Gold;
        float influence = clan.Influence;
        _ = clanGold;
        _ = influence;
    }
}
```

### 示例 2：给玩家氏族付款（金币挂在领袖身上）

```csharp
using TaleWorlds.CampaignSystem;

public static void PayPlayerClan(int amount)
{
    Clan clan = Clan.PlayerClan;
    if (clan == null || amount <= 0)
    {
        return;
    }

    Hero leader = clan.Leader;
    if (leader == null)
    {
        return;
    }

    leader.ChangeHeroGold(amount);
    InformationManager.DisplayMessage(
        new InformationMessage($"{clan.Name.Name} 现有金币 {leader.Gold}"));
}
```

### 示例 3：按王国视角统计小型派系领地总价值

```csharp
using TaleWorlds.CampaignSystem;

public static string RichestVassalReport(Kingdom kingdom)
{
    Clan best = null;
    float bestValue = -1f;

    foreach (Clan clan in kingdom.Clans)
    {
        float value = clan.CalculateTotalSettlementValueForFaction(kingdom);
        if (value > bestValue)
        {
            bestValue = value;
            best = clan;
        }
    }

    return best == null
        ? "无附庸"
        : $"{best.Name.Name}：{bestValue:0}";
}
```

### 示例 4：脱离王国并交出封地

```csharp
using TaleWorlds.CampaignSystem;

public static void GrantIndependence(Clan clan)
{
    if (clan == null || clan.Kingdom == null)
    {
        return;
    }

    // giveBackFiefs: true 会释放所有封地 —— 之后只能靠易主动作改回来。
    clan.ClanLeaveKingdom(true);
    clan.UpdateFactionsAtWarWith();
    InformationManager.DisplayMessage(
        new InformationMessage($"{clan.Name.Name} 重获独立"));
}
```

## 风险与崩溃边界

1. **`Gold` 不可写。** `Clan.Gold` 转发到 `Leader.Gold`；想写 `clan.Gold = n` 根本无法编译，而绕过它去改名册又会破坏薪饷系统。请用 `Hero.ChangeHeroGold`。
2. **`Leader` 可能为 null。** 所有解引用 `Leader` 的成员（`Gold`、影响力花费的技能路径、氏族旗帜）都必须判空。小型派系氏族的领袖恒为 null。
3. **`CreateClan` 是唯一安全的构造方式。** `new Clan()` 产出的对象没有注册、不出现在 `All` 中、也永远不会被序列化。
4. **写影响力会带出技能副作用。** 在无领袖语境下调低 `Influence` 会跳过 `OnInfluenceSpent`，使领袖技能与影响力花费在存档之间长期不一致。
5. **存档稳定性。** `Name`、`Culture`、由 `Renown` 驱动的 `Tier`、`IsNoble`、`IsOutlaw`、`Color` 与 `InitialHomeSettlement` 都是 `[SaveableProperty]`。重新编号会破坏已有存档，参见 [存档系统](../../../architecture/save-system)。
6. **对聚落的跨域依赖。** `Fiefs` 由聚落易主路径维护。直接写 `Settlement.OwnerClan` 会让氏族索引在下一次易主事件之前一直不同步。
7. **易主不是对称操作。** `Clan.CalculateTotalSettlementValueForFaction` 读取聚落实时状态，在转移过程中调用可能观察到只更新了一半的所有权集合。
8. **热循环开销。** 在 `DailyTickEvent` 上对 `Clan.All` 做 `FindAll`，在多个行为叠加时是实打实的帧成本。改用 `CampaignEvents.DailyTickClanEvent`，或缓存需要过滤的列表。

## 怎么用

### 怎么拿到它

现成的氏族：`Clan.All`（`TaleWorlds.CampaignSystem/Clan.cs:1457`）、`Clan.FindFirst(Predicate<Clan> predicate)`（`:1436`）。玩家氏族是 `public static Clan PlayerClan`（`:694`）。

**注意 `PlayerClan` 的真实形状**：

```csharp
Clan.cs:694    public static Clan PlayerClan
Clan.cs:698        return Campaign.Current.PlayerDefaultFaction;
```

**它不是 `Campaign.Current.PlayerClan`**，而是**穿透一层**去读 `Campaign.Current.PlayerDefaultFaction`。所以在战役建立之前（模块加载、静态初始化、主菜单）调用它，崩的是 `Campaign.Current` 为 null，而不是你以为的那一层。

新建走 `CreateClan`（页面风险第 3 条已说明不要直接 `new Clan()`）。

### 典型用法

遍历氏族并安全地读它的归属：

```csharp
using TaleWorlds.CampaignSystem;

public static class ClanTools
{
    public static float TotalInfluenceOfKingdom(Kingdom kingdom)
    {
        float total = 0f;

        foreach (Clan clan in Clan.All)
        {
            // Leader 可能为 null —— 无领袖氏族在游戏里是存在的。
            if (clan.Leader == null)
            {
                continue;
            }

            if (clan.Kingdom == kingdom)
            {
                total += clan.Leader.Influence;
            }
        }

        return total;
    }

    public static bool IsPlayerClan(Clan clan)
    {
        // PlayerClan 自己没有判空，战役外会 NPE。
        return Campaign.Current != null && clan == Clan.PlayerClan;
    }
}
```

### 最容易踩的坑

**用 `clan.Kingdom = 同一个王国` 来"刷新"王国的氏族索引。它是一个彻底的空操作。**

`Clan.Kingdom` 的 setter（`Clan.cs:401`）第一句就是这个：

```csharp
Clan.cs:407    set
Clan.cs:409    {
Clan.cs:409        if (this._kingdom != value)
Clan.cs:411            this.SetKingdomInternal(value);
Clan.cs:412        }
```

也就是说，赋一个**相同**的 `Kingdom` 时，`SetKingdomInternal` 根本不会被调用。而 `SetKingdomInternal`（`:1324`）才是真正做事的那个方法：

```csharp
Clan.cs:1326    if (this.Kingdom != null)  -> :1328  this.LeaveKingdomInternal();
Clan.cs:1330    this._kingdom = value;
Clan.cs:1331    if (this.Kingdom != null)  -> :1333  this.EnterKingdomInternal();
Clan.cs:1335    this.UpdateBannerColorsAccordingToKingdom();
Clan.cs:1336    this.LastFactionChangeTime  = CampaignTime.Now;
```

而 `EnterKingdomInternal`（`:1340`）里 `:1342` 是 `this._kingdom.AddClanInternal(this);`，紧接着 `:1345` 对每个 `Hero` 调 `this._kingdom.OnHeroAdded(hero);`——**王国的 `Clans` / `Heroes` / `AliveLords` 全靠这条路径重建**（它们是 `Kingdom.InitializeCachedLists` 建出来的缓存 `MBList`）。

后果：你想通过"重新赋一次 Kingdom"来让王国重新索引这个氏族，结果**什么都没发生**——没有异常、没有日志，`SetKingdomInternal` 一次都没跑。于是 `Kingdom.Clans` 里可能仍然缺这个氏族，`Kingdom.Heroes` 里缺它的成员，而你的 mod 读到的就是不完整的数据。这种不一致**不会自己恢复**，也不会在下一次读档时被修好。

要真正触发，只能让值真的发生变化（先置 `null` 再赋回去），或者直接调用正规的改归属 API —— 不要指望同值赋值能"重播"一遍流程。

## 跨版本提示

- 上面列出的 1.3.0 接口面与 1.3.x 一致。后续构建保持 `Influence`、`Renown`、`Tier`、`CalculateTotalSettlementValueForFaction` 与 `ClanLeaveKingdom` 稳定。
- 这里的 `IsBanditFaction` 是可存档的私有 setter 标志；部分 1.4.x 构建新增了更多小型派系标志（如 `IsCult`），但没有改动 mod 使用的 setter。

## 参见

- [Kingdom](../Kingdom) — 氏族之上的王国
- [Hero](../Hero) — 氏族里的人
- [FactionManager](../FactionManager) — 战争与立场解析
- [Settlement](../Settlement) — 氏族拥有的土地
- [Town](../Town) — 贵族氏族可以持有的封地
- [Campaign](../Campaign) — 暴露 `Clan.All` 的地方
- [存档系统](../../../architecture/save-system) — Saveable 属性纪律
- [SDK 总览](../../../architecture/sdk-overview) — 模块生命周期顺序
- [战役基础](../../../guide/campaign-basics) — 以任务为导向的上手指南