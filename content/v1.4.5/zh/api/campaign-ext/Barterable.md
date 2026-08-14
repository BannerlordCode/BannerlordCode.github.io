---
title: "Barterable"
description: "以物易物提案中单个可谈判项的抽象基类：子类描述一项交易（金币、物品、封地、俘虏等），框架在谈判成立时统一调用 Apply 落地。"
---
# Barterable

**Namespace:** `TaleWorlds.CampaignSystem.BarterSystem.Barterables`  
**Module:** `TaleWorlds.CampaignSystem`  
**Type:** `public abstract class Barterable`  
**Base:** 无（直接继承 `System.Object`）  
**File:** `TaleWorlds.CampaignSystem/BarterSystem/Barterables/Barterable.cs`

## 一句话职责

它是一次以物易物（barter）提案里“一个可谈判筹码”的抽象：金币、物品、封地、俘虏、和平条件等都各自是一个 `Barterable` 子类实例，框架在对方接受时逐个调用 `Apply()` 把效果落到战役世界上。

## 心智模型

把 `Barterable` 想成**谈判桌上的一个筹码**，它本身不持有谈判逻辑，只负责描述“我是什么、值多少、被接受时做什么”。

- 它属于 **Campaign 层**的谈判子系统，不是 Mission，也不是 UI 控件。一次完整的谈判由一个 [BarterData](../../campaign-ext/BarterData/) 对象承载，由 [BarterManager](../../campaign-ext/BarterManager/)（`Campaign.Current.BarterManager`）驱动。
- `Barterable` 是抽象类，**永远不要 `new Barterable()`**；要用的都是具体子类：[GoldBarterable](../GoldBarterable/)、[ItemBarterable](../ItemBarterable/)、[FiefBarterable](../FiefBarterable/)、[TransferPrisonerBarterable](../TransferPrisonerBarterable/)、[PeaceBarterable](../PeaceBarterable/) 等，或你自己继承它。
- 生命周期（由框架控制，不要你自己调）：
  1. 谈判开始时，[BarterManager](../../campaign-ext/BarterManager/) 创建 `BarterData`，并广播 `CampaignEvents.BarterablesRequested`；各 behavior 把自己的筹码通过 `BarterData.AddBarterable<T>(...)` 加入。
  2. `AddBarterable<T>` 内部会调用本类的 `Initialize(BarterGroup, isContextDependent)`，把所属分组与“是否上下文相关”写进筹码——**你不需要、也不应该手动调 `Initialize`**。
  3. 玩家或 AI 勾选了某些筹码后，框架收集 `IsOffered == true` 的筹码，在对方接受时逐个调用 `Apply()`。
- 子类在 `Apply()` 里通过对应的 `*Action.Apply`（如 `GiveGoldAction`、`GiveItemAction`、`ChangeOwnerOfSettlementAction`、`TransferPrisonerAction`）真正改世界；这正是它和“直接改字段”的区别。

## 它从哪来 / 如何创建

`Barterable` 的构造函数是受保护的：

```csharp
protected Barterable(Hero originalOwner, PartyBase originalParty)
```

子类必须在自己的构造函数里调用它，传入这笔筹码的**原始归属者**与**原始归属部队**：

```csharp
public GoldBarterable(Hero owner, Hero other, PartyBase ownerParty, PartyBase otherParty, int val)
    : base(owner, ownerParty)   // 设置 OriginalOwner / OriginalParty，CurrentAmount 默认 1
{
    // ...
}
```

- `OriginalOwner`（`Hero`）与 `OriginalParty`（`PartyBase`）在构造后**只读**，分别代表“谁拿出这个筹码”。
- `Side` 在基类构造里固定为 `BarterSide.Left`，表示它属于发起方一侧；框架用 `Side` 区分左右方筹码。

## 主要属性

| 属性 | 类型 | 说明 |
|------|------|------|
| `StringID` | `string`（抽象只读） | 该筹码类型的唯一字符串标识，如 `"gold_barterable"`、`"fief_barterable"`。 |
| `Name` | `TextObject`（抽象只读） | 谈判界面上显示的筹码名称（通常是 `ItemRosterElement`/`Settlement` 的名字或 `GameTexts.FindText(...)`）。 |
| `OriginalOwner` | `Hero`（只读） | 拿出这个筹码的英雄；常量，不会被框架改写。 |
| `OriginalParty` | `PartyBase`（只读） | 拿出这个筹码的部队；金币/物品类筹码常据此直接改 `ItemRoster`。 |
| `Side` | `BarterSide`（只读） | `Left` 或 `Right`，标明筹码属于发起方还是对方。 |
| `Group` | `BarterGroup`（受保护 set） | 所属分组（`GoldBarterGroup`/`ItemBarterGroup`/`FiefBarterGroup`/`PrisonerBarterGroup` 等），由 `Initialize` 写入。 |
| `MaxAmount` | `int`（虚只读） | 该筹码可被勾选的最大数量；基类默认返回 `1`，子类按持有量或金额覆盖（如 `GoldBarterable` 返回 `_maxGold`）。 |
| `CurrentAmount` | `int`（可读写） | 当前勾选的数量；写入时若超过 `MaxAmount` 会被**自动截断到 MaxAmount**，不会报错。 |
| `IsOffered` | `bool`（受保护 set） | 当前是否已被勾选进提案；只有它为 `true` 的筹码才会在接受时被 `Apply`。 |
| `IsContextDependent` | `bool`（受保护 set） | 是否为“仅在当前对话上下文才有意义”的筹码，由 `Initialize` 写入。 |
| `LinkedBarterables` | `MBReadOnlyList<Barterable>`（只读） | 与本筹码联动的其他筹码；调用 `SetIsOffered` 时会把相同值传播到它们。 |

`BarterSide` 是一个嵌套枚举：

```csharp
public enum BarterSide
{
    Left,
    Right
}
```

## 主要方法

### 价值评估

#### `public abstract int GetUnitValueForFaction(IFaction faction)`
返回“对某个阵营而言，单位数量（1 个）这个筹码值多少”。返回负数表示对该阵营不利、正数表示有利、0 表示无关。`BarterManager` 的 `IsOfferAcceptable`/`GetOfferValue` 就靠它判断对方会不会接受。

- `GoldBarterable`：对 `OriginalOwner`/`OriginalParty` 所属阵营返回 `-1`，对 `_otherHero`/`_otherParty` 所属阵营返回 `+1`。
- `FiefBarterable`：结合 `SettlementValueModel.CalculateSettlementValueForFaction` 计算封地价值的正负向。
- 子类**必须**实现它，否则框架无法评估平衡。

#### `public int GetValueForFaction(IFaction faction)`
非虚，等于 `GetUnitValueForFaction(faction) * CurrentAmount`。你通常不需要重写它，直接用它得到“勾选了 N 个”后的总价值。

```csharp
// 估算玩家当前勾选的金币筹码对“对方家族”的总价值
int total = goldBarterable.GetValueForFaction(otherHero.Clan);
```

#### `public virtual void CheckBarterLink(Barterable linkedBarterable)`
当另一个筹码与本筹码建立联动时调用，供子类校验联动是否成立。基类是空实现，`ItemBarterable` 等会覆盖它。

#### `public virtual bool IsCompatible(Barterable barterable)`
判断本筹码能否与另一个筹码共存于同一提案；基类总返回 `true`。当两个筹码互斥（如同一领地不能同时给两方）时子类可返回 `false`。

### 注册与呈现

#### `public void Initialize(BarterGroup barterGroup, bool isContextDependent)`
把筹码挂到某个分组并标记是否上下文相关。**只由 `BarterData.AddBarterable<T>` 在注册时调用，模组不要手动调用。**

#### `public void AddBarterLink(Barterable barterable)`
把一个筹码登记为本筹码的联动项；之后本筹码的勾选状态变化会同步过去。

#### `public void SetIsOffered(bool value)`
设置 `IsOffered`，并把相同值**传播给 `LinkedBarterables` 中每个联动筹码**。谈判 UI 勾选/取消勾选走的就是它。

```csharp
// 手动让一个本就被联动的筹码也进入提案
linkedGoldBarterable.SetIsOffered(true);
```

#### `public abstract ImageIdentifier GetVisualIdentifier()`
返回谈判界面上该筹码的图标标识（如 `ItemImageIdentifier`）；无图标时（金币、封地）返回 `null`。

#### `public virtual string GetEncyclopediaLink()`
返回相关百科页链接；基类返回空字符串，`FiefBarterable` 会返回 `TargetSettlement.EncyclopediaLink`。

### 落地

#### `public abstract void Apply()`
**谈判被接受时由 `BarterManager.ApplyBarterOffer` 统一调用**，是真正改变战役世界的地方。子类必须实现：把效果通过对应的 `*Action.Apply` 落地。

```csharp
// GoldBarterable.Apply 节选：根据双方是英雄还是部队，走不同的 GiveGoldAction
public override void Apply()
{
    if (_ownerHero != null && _otherHero != null)
        GiveGoldAction.ApplyBetweenCharacters(_ownerHero, _otherHero, base.CurrentAmount);
    else if (base.OriginalParty != PartyBase.MainParty)
        GiveGoldAction.ApplyForPartyToParty(base.OriginalParty, _otherParty, base.CurrentAmount);
    // ...
}
```

不要在外面单独调用 `Apply()` 来“模拟接受”——那样会跳过价值校验、关系变化（如 `ApplyOverpayBonus` 的 `ChangeRelationAction`）和 `OnBarterAccepted` 事件，还会留下冷却状态不一致。

## 何时用 / 何时不要用

- **用 `Barterable` 子类**：当你要让某个可谈判项出现在以物易物界面里（给领主加一笔钱、献上一件物品、让出一座封地、移交俘虏、提出和平等）。
- **用 `BarterManager.StartBarterOffer(...)` 或 `ExecuteAiBarter(...)`** 来开启一次谈判，并用 `defaultBarterables:` 注入你的筹码，或订阅 `CampaignEvents.BarterablesRequested` 在谈判建立时加入。
- **不要用它做一次性状态修改**：直接转账用 [GiveGoldAction](../GiveGoldAction/)，直接移交物品用 `GiveItemAction.ApplyForHeroes`，直接换封地用 `ChangeOwnerOfSettlementAction.ApplyByBarter`——这些 Action 才会正确发布事件、更新关联对象。
- **不要自己 `new Barterable` 或手动调 `Initialize`/`Apply`**：创建与落地都是谈判框架负责的环节。

## 真实示例

### 示例 1：定义并注册一个自定义筹码

继承 `Barterable` 实现抽象成员；注意 `Apply` 走真实的 `GiveItemAction`，与游戏内置 `ItemBarterable` 同一条落地路径。

```csharp
using TaleWorlds.CampaignSystem;
using TaleWorlds.CampaignSystem.Actions;
using TaleWorlds.CampaignSystem.BarterSystem;
using TaleWorlds.CampaignSystem.BarterSystem.Barterables;
using TaleWorlds.CampaignSystem.Party;
using TaleWorlds.Core.ImageIdentifiers;
using TaleWorlds.Library;
using TaleWorlds.Localization;

public class WarHorseBarterable : Barterable
{
    private readonly ItemObject _horse;
    private readonly Hero _otherHero;

    public override string StringID => "war_horse_barterable";
    public override TextObject Name => _horse.Name;
    public override int MaxAmount => 1;

    public WarHorseBarterable(Hero originalOwner, PartyBase originalParty, Hero otherHero, ItemObject horse)
        : base(originalOwner, originalParty)
    {
        _horse = horse;
        _otherHero = otherHero;
    }

    // 对发起方阵营为负，对对方阵营为正
    public override int GetUnitValueForFaction(IFaction faction)
    {
        if (faction == OriginalOwner?.MapFaction || faction == OriginalParty?.MapFaction)
            return -1;
        return 1;
    }

    public override ImageIdentifier GetVisualIdentifier() => new ItemImageIdentifier(_horse);
    public override string GetEncyclopediaLink() => "";
    public override void Apply()
    {
        if (OriginalOwner != null && _otherHero != null)
        {
            ItemRosterElement element = new ItemRosterElement(_horse, 1);
            GiveItemAction.ApplyForHeroes(OriginalOwner, _otherHero, in element);
        }
    }
}
```

在 behavior 里订阅 `BarterablesRequested`，把自己的筹码加进 `BarterData`：

```csharp
using TaleWorlds.CampaignSystem;
using TaleWorlds.CampaignSystem.BarterSystem;
using TaleWorlds.CampaignSystem.BarterSystem.Barterables;
using TaleWorlds.CampaignSystem.Party;

public class WarHorseBarterBehavior : CampaignBehaviorBase
{
    public override void RegisterEvents()
    {
        CampaignEvents.BarterablesRequested.AddNonSerializedListener(this, OnBarterablesRequested);
    }

    private void OnBarterablesRequested(BarterData args)
    {
        // 只在玩家发起、且对方是领主时，提供一匹战马作为筹码
        if (args.OffererHero != Hero.MainHero || args.OtherHero == null)
            return;

        ItemObject horse = ItemObject.All.GetMiscellaneousItem("war_horse");
        if (horse == null)
            return;

        var offer = new WarHorseBarterable(Hero.MainHero, PartyBase.MainParty, args.OtherHero, horse);
        args.AddBarterable<GoldBarterGroup>(offer, isContextDependent: false);
    }

    public override void SyncData(IDataStore dataStore) { }
}
```

注意 `AddBarterable<T>` 的 `T` 必须是 `BarterData` 已有分组类型之一（这里用 `GoldBarterGroup`）；传入后框架会自动调用 `Initialize` 写入 `Group` 与 `IsContextDependent`。

### 示例 2：读取一次谈判里被勾选筹码的总价值

在需要判断/调试谈判平衡时，遍历 `BarterData` 中 `IsOffered` 的筹码：

```csharp
using TaleWorlds.CampaignSystem.BarterSystem;
using TaleWorlds.CampaignSystem.BarterSystem.Barterables;

// 在行为里拿到当前 BarterData（例如通过 OnBarterablesRequested 的参数 args）
int playerGain = 0;
foreach (Barterable b in args.GetBarterables())
{
    if (!b.IsOffered)
        continue;
    // GetValueForFaction 已含 CurrentAmount；对“对方阵营”为负即玩家所得
    playerGain += b.GetValueForFaction(args.OtherHero.Clan);
}
```

## 依赖图

- 上游：[BarterManager](../../campaign-ext/BarterManager/) 创建并驱动 `BarterData`，在 `StartBarterOffer`/`ExecuteAiBarter` 时广播 `CampaignEvents.BarterablesRequested`，由各 [CampaignBehaviorBase](../../campaign-ext/CampaignBehaviorBase/) 把筹码加进提案。
- 同组：[BarterData](../../campaign-ext/BarterData/) 持有 `List<Barterable>` 并调用 `Initialize`；[BarterGroup](../../campaign-ext/BarterGroup/) 决定筹码分类；[BarterModel](../../campaign-ext/BarterModel/)（`Campaign.Current.Models.BarterModel`）计算平衡与冷却。
- 下游落地：子类 `Apply()` 依赖 [GiveGoldAction](../GiveGoldAction/)、`GiveItemAction`、`ChangeOwnerOfSettlementAction`、`TransferPrisonerAction` 等 Action，并涉及 [Hero](../../campaign/Hero/)、[MobileParty](../../campaign/MobileParty/)、[Settlement](../../campaign/Settlement/)、[Clan](../../campaign/Clan/)、[PartyBase](../../campaign/PartyBase/)。
- 存档点：`Barterable` 子类用 `[SaveableField]` 记录 `Hero`/`PartyBase`/`Settlement` 引用，随 `BarterManager` 存档；见 [架构：崩溃与存档边界](../../../architecture/crash-boundaries/)。

## 风险与坏档

1. **手动 `Apply` 风险**：在框架之外单独调用 `Apply()` 会跳过价值校验、`ApplyOverpayBonus` 的关系变化和 `OnBarterAccepted` 事件，并导致 `BarterManager` 冷却（`_barteredHeroes`）状态与实际不一致。
2. **`CurrentAmount` 静默截断**：写入超过 `MaxAmount` 的值不会抛异常，而是被裁到 `MaxAmount`。子类若覆盖 `MaxAmount`（如 `GoldBarterable` 返回金币上限），勾选数量会受它约束。
3. **`Initialize` 时机**：`Group`/`IsContextDependent` 只在被 `AddBarterable<T>` 注册后才有值；在注册前读取 `Group` 会得到 `null`。
4. **`IsOffered` 决定落地**：只有 `IsOffered == true` 的筹码才进入 `GetOfferedBarterables()` 并被 `Apply`；若你希望某筹码一定生效，要么确保它被勾选，要么直接用对应 Action 而非塞进谈判。
5. **基类构造固定 `Side = Left`**：自定义筹码默认属于发起方；涉及“对方拿出”的语义时，需像 `GoldBarterable` 那样同时构造一对左右筹码（`owner`/`other` 互换）。

## 跨版本提示

- v1.3.15 与 v1.4.5 的 `Barterable` 抽象契约一致：`StringID`/`Name`/`OriginalOwner`/`OriginalParty`/`Apply`/`GetUnitValueForFaction`/`Initialize`/`SetIsOffered` 等签名与语义相同。
- v1.3.15 的 `MaxAmount` 基类实现为 `public virtual int MaxAmount => 1;`（只读 getter），子类按上限覆盖；不要把它当可读写属性。
- 子类名单（`GoldBarterable`/`ItemBarterable`/`FiefBarterable`/`TransferPrisonerBarterable`/`PeaceBarterable` 等）在两版本基本一致；写跨版本 mod 时优先使用公开的 `Barterable`/`BarterData`/`BarterManager` API，不要依赖反编译文件中的私有字段或 `AutoGenerated*CollectObjects`。

## 导航

- [↑ 返回 campaign-ext 模块](../)
- [↔ GoldBarterable](../GoldBarterable/) · [ItemBarterable](../ItemBarterable/) · [FiefBarterable](../FiefBarterable/) · [TransferPrisonerBarterable](../TransferPrisonerBarterable/) · [PeaceBarterable](../PeaceBarterable/)
- [↔ BarterManager](../BarterManager/) · [BarterData](../BarterData/) · [BarterGroup](../BarterGroup/) · [BarterModel](../BarterModel/)
- [↓ GiveGoldAction](../GiveGoldAction/)
- [架构：崩溃与存档边界](../../../architecture/crash-boundaries/)
