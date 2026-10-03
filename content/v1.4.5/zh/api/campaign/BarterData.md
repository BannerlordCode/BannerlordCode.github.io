---
title: "BarterData"
description: "一笔以物易物会话的上下文容器：双方英雄与队伍、分组清单、barterable 清单、说服力减免、是否 AI 交易。由 BarterManager.StartBarterOffer 构造，是 barter 行为注册交易条目的唯一入口。"
---

# BarterData

**Namespace:** `TaleWorlds.CampaignSystem.BarterSystem`
**Module:** `TaleWorlds.CampaignSystem`
**Type:** `public class BarterData`
**Base:** 无（直接继承 object）
**Source:** `bin/TaleWorlds.CampaignSystem/TaleWorlds.CampaignSystem.BarterSystem/BarterData.cs`

## 概述

`BarterData` 是**一次 barter 会话的上下文对象**。它本身不执行任何交易逻辑，只回答四类问题：**谁和谁在谈**（`OffererHero` / `OtherHero` / `OffererParty` / `OtherParty`）、**有哪些分组**（`_barterGroups`）、**有哪些条目**（`_barterables`）、**这笔交易有什么特殊参数**（`ContextInitializer` / `PersuasionCostReduction` / `IsAiBarter`）。

在体系里它承担的是**「barter 行为与交易 UI 之间的共享信封」**这一环。所有 barter 行为（`GoldBarterBehavior`、`ItemBarterBehavior`、`FiefBarterBehavior`、`SetPrisonerFreeBarterBehavior`、`TransferPrisonerBarterBehavior`）都通过监听 `CampaignEventDispatcher.Instance.OnBarterablesRequested(args)` 拿到同一个 `BarterData` 实例，然后往里 `AddBarterable<XxxBarterGroup>(...)`。玩家在屏幕上看到的每一行，就是这些行为往这个信封里塞进去的东西。

它的生命周期极短：**`BarterManager.StartBarterOffer` 构造一个，广播一次事件，玩家确认或取消，然后丢弃**。它**不进存档**——`BarterData` 上没有任何 `SaveableField` / `SaveableProperty`。

最重要的一个实现细节在 `AddBarterable<T>`（`BarterData.cs:46`）：

```csharp
foreach (BarterGroup barterGroup in _barterGroups)
{
    if (barterGroup is T)
    {
        barterable.Initialize(barterGroup, isContextDependent);
        _barterables.Add(barterable);
        break;
    }
}
```

**匹配不到就静默丢弃**，没有 `else`、没有日志、没有异常。第二个重要细节在构造函数（`BarterData.cs:42`）：`_barterGroups` 来自 `Campaign.Current.Models.DiplomacyModel.GetBarterGroups().ToList()`，是**副本**且**依赖 `Campaign.Current` 存在**。

## 心智模型

把它当成**「一次交易的一页草稿」**就对了。

- **典型调用顺序：管理器构造 → 事件广播 → 行为注册 → UI 展示 → `Apply()`。** 你几乎不会自己 `new BarterData`——只有两个地方会：`BarterManager.StartBarterOffer`（`BarterManager.cs:81`）和 `BarterManager.ExecuteAiBarter`（`BarterManager.cs:98`，那一处 `offererParty` / `otherParty` 都是 null 且 `isAiBarter: true`）。作为 mod 你要做的是**监听 `OnBarterablesRequested` 并往里加条目**。
- **`AddBarterable<T>` 的泛型参数是「所属分组类型」，不是「条目类型」。** 写 `args.AddBarterable<GoldBarterGroup>(myBarterable)` 而不是 `AddBarterable<MyBarterableType>`。这是最常见的写错点。
- **只有第一个匹配生效。** 官方六个分组互不继承所以现在无歧义；如果你派生一个 `MyGroup : GoldBarterGroup`，`AddBarterable<GoldBarterGroup>` 命中的是 `_barterGroups` 里排在前面的那个。
- **`AddBarterGroup` 是给管理器用的后门。** `BarterManager.AddBaseBarterables` 会 `args.AddBarterGroup(new DefaultsBarterGroup())` 追加一次，`ExecuteAiBarter` 也会追加一次。作为外部行为你一般用它插入自定义分组，但它**没有去重**——加两次就会出现两个同名分组。
- **`GetBarterables()` 返回内部列表本身，不是副本。** 官方代码拿它做 LINQ 查询（`GetOfferedBarterables` 就是 `from ... in GetBarterables()`），但你在外部直接改它会绕过 `Initialize`，让条目 `Group` 为 null。
- **`OffererMapFaction` 有 null 兜底，`OtherMapFaction` 也有。** 两者都是 `Hero?.MapFaction ?? Party.MapFaction`。但如果 hero 和 party 同时为 null（AI 交易那条路径就传了 `null, null`），这里会 NRE。

### 六个字段域各自回答什么

| 域 | 字段 | 回答的问题 |
| --- | --- | --- |
| 双方身份 | `OffererHero` / `OtherHero` | 谁在谈 |
| 双方队伍 | `OffererParty` / `OtherParty` | 货物从哪个 roster 来 |
| 双方派系 | `OffererMapFaction` / `OtherMapFaction` | 单价按哪个派系算 |
| 分组清单 | `GetBarterGroups` / `GetBarterGroup<T>` | 条目归到哪一类，AI 权重多少 |
| 条目清单 | `GetBarterables` / `GetOfferedBarterables` | 屏幕上有哪些行，哪些被摆上台 |
| 会话参数 | `ContextInitializer` / `PersuasionCostReduction` / `IsAiBarter` | 行为要不要回调上下文、说服判定减免多少、这是不是 AI 自动交易 |

## 关键成员

| 成员 | 签名 | 这个成员是做什么用的 |
| --- | --- | --- |
| `OffererHero` | `public readonly Hero OffererHero` | 发起方英雄。由 `StartBarterOffer` 的 `offerer` 参数写入（`BarterData.cs:81`），**readonly，无 setter**。AI 交易路径传的是 `faction1.Leader`，可能为 null。 |
| `OtherHero` | `public readonly Hero OtherHero` | 对面英雄。注意 `StartBarterOffer` 传的是 `beneficiaryOfOtherHero ?? other`——**带「受益人」概念**，实际收东西的人可能不是谈判对象。 |
| `OffererParty` | `public readonly PartyBase OffererParty` | 发起方队伍。`ExecuteAiBarter` 里显式传 `null`（`BarterManager.cs:98`），所以**读它之前必须判空**。 |
| `OtherParty` | `public readonly PartyBase OtherParty` | 对面队伍，同样可能为 null。 |
| `ContextInitializer` | `public readonly BarterManager.BarterContextInitializer ContextInitializer` | 会话上下文初始化委托，签名 `bool BarterContextInitializer(Barterable, BarterData, object = null)`（`BarterManager.cs:15`）。行为在构造条目后回调它，返回 false 表示这个条目不该出现。**玩家对 `Hero.MainHero` 发起且传了 null 时，管理器会走 `CanPlayerBarterWithHero` 冷却检查并在失败时直接 return**（`BarterManager.cs:74-78`）。 |
| `PersuasionCostReduction` | `public readonly int PersuasionCostReduction` | 说服判定的减免量，来自 `StartBarterOffer` 的同名参数。默认 0。影响的是 UI 上的说服难度，不是交易结果。 |
| `OffererMapFaction` | `public IFaction OffererMapFaction => OffererHero?.MapFaction ?? OffererParty.MapFaction` | 发起方派系，供 `GetUnitValueForFaction` 选分支。**hero 为 null 时落到 party，party 为 null 时 NRE。** |
| `OtherMapFaction` | `public IFaction OtherMapFaction => OtherHero?.MapFaction ?? OtherParty.MapFaction` | 对面派系，同上形状与同一边界。 |
| `IsAiBarter` | `public bool IsAiBarter { get; }` | 区分玩家手动交易与 AI 自动交易。`ExecuteAiBarter` 传 `true`（`BarterManager.cs:98`），`StartBarterOffer` 传 `isAIBarter`。**在行为里据此决定要不要弹 UI 或发事件。** |
| `AddBarterable<T>` | `public void AddBarterable<T>(Barterable barterable, bool isContextDependent = false)` | 注册一条交易行。泛型参数是**分组类型**。内部遍历 `_barterGroups` 取第一个 `is T` 的匹配，调 `barterable.Initialize(...)` 后加入 `_barterables` 并 `break`。**匹配不到静默丢弃**，`barterable` 参数也不判 null。 |
| `AddBarterGroup` | `public void AddBarterGroup(BarterGroup barterGroup)` | 往 `_barterGroups` 末尾追加一个分组。**不去重**，重复追加会产生重复分组。`BarterManager` 自己用它塞 `DefaultsBarterGroup`。 |
| `GetBarterGroups` | `public List<BarterGroup> GetBarterGroups()` | 返回 `_barterGroups` **本身**（不是副本），可枚举当前所有分组及权重。 |
| `GetBarterables` | `public List<Barterable> GetBarterables()` | 返回 `_barterables` **本身**（不是副本）。`GetOfferedBarterables` 内部就是对它做 LINQ 过滤。外部直接改会绕过 `Initialize`。 |
| `GetBarterGroup<T>` | `public BarterGroup GetBarterGroup<T>()` | 按类型取第一个分组，`_barterGroups.OfType<T>()` 为空时返回 null。**不抛异常**，找不到就是 null。 |
| `GetOfferedBarterables` | `public List<Barterable> GetOfferedBarterables()` | 过滤出 `IsOffered == true` 的条目并返回**新列表**。这是 UI 与管理器判断「哪些行真的上了台」的标准读点。 |

## 真实示例

在 barter 行为里往一笔交易里加自己的条目（形状照官方 `GoldBarterBehavior`）：

```csharp
using TaleWorlds.CampaignSystem;
using TaleWorlds.CampaignSystem.BarterSystem;
using TaleWorlds.CampaignSystem.BarterSystem.Barterables;

public class MyRenownBarterBehavior : CampaignBehaviorBase
{
    public override void RegisterEvents()
    {
        CampaignEventDispatcher.Instance.OnBarterablesRequested += OnBarterablesRequested;
    }

    private void OnBarterablesRequested(BarterData args)
    {
        if (args == null || args.IsAiBarter || args.OffererHero == null || args.OtherHero == null)
        {
            return;
        }

        GoldBarterable gold = new GoldBarterable(
            args.OffererHero, args.OtherHero, args.OffererParty, args.OtherParty, 200);
        args.AddBarterable<GoldBarterGroup>(gold, isContextDependent: true);
    }

    public override void SyncData(IDataStore dataStore)
    {
    }
}
```

读一笔交易当前的状态（分组、条目、被摆上台的行）：

```csharp
using TaleWorlds.CampaignSystem;
using TaleWorlds.CampaignSystem.BarterSystem;

public static void DumpBarter(BarterData data)
{
    if (data == null)
    {
        return;
    }

    Debug.Print("offerer faction = " + data.OffererMapFaction.Name.ToString(), 0);
    Debug.Print("groups = " + data.GetBarterGroups().Count, 0);
    Debug.Print("lines = " + data.GetBarterables().Count, 0);

    foreach (Barterable line in data.GetOfferedBarterables())
    {
        Debug.Print("offered: " + line.StringID + " x" + line.CurrentAmount, 0);
    }
}
```

把一个真实物品挂进交易，并确认条目落到了正确的组里（形状照 `ItemBarterBehavior.cs:104`）：

```csharp
using TaleWorlds.CampaignSystem;
using TaleWorlds.CampaignSystem.BarterSystem;
using TaleWorlds.CampaignSystem.BarterSystem.Barterables;
using TaleWorlds.CampaignSystem.Roster;

public static bool RegisterGoodsLine(BarterData data, Hero offerer, Hero other)
{
    if (data == null || offerer == null || other == null)
    {
        return false;
    }

    if (offerer.PartyBelongedTo == null || other.PartyBelongedTo == null)
    {
        return false;
    }

    // 真实存在的 barterable：ItemBarterable，构造签名照 ItemBarterBehavior 第 104 行
    ItemRosterElement goods = offerer.PartyBelongedTo.ItemRoster.GetElementCopyAtIndex(0);
    ItemBarterable line = new ItemBarterable(offerer, other, offerer.PartyBelongedTo, other.PartyBelongedTo, goods, goods.EquipmentElement.GetBaseValue());
    data.AddBarterable<ItemBarterGroup>(line);
    if (line.Group == null)
    {
        Debug.Print("ItemBarterGroup missing, the line was dropped silently", 0);
        return false;
    }

    line.SetIsOffered(true);
    return data.GetOfferedBarterables().Contains(line);
}
```

## 风险与边界

- **`AddBarterable<T>` 匹配不到就静默丢弃。** 没有 `else`、没有日志、没有异常（`BarterData.cs:46-57`）。自定义分组忘了接进 `DiplomacyModel.GetBarterGroups()`，你的条目就凭空消失。
- **泛型参数是分组类型，不是条目类型。** `AddBarterable<GoldBarterGroup>(myBarterable)` 才是对的。写成条目类型会编译报错，但写成某个**基类**分组类型会静默命中列表里第一个匹配的实例。
- **构造函数依赖 `Campaign.Current`。** `_barterGroups` 来自 `Campaign.Current.Models.DiplomacyModel.GetBarterGroups()`（`BarterData.cs:42`）。主菜单或 Campaign 未创建时 `new BarterData(...)` 直接 NRE。
- **`OffererParty` / `OtherParty` 可能是 null。** `ExecuteAiBarter` 显式传 `null, null`（`BarterManager.cs:98`）。此时 `OffererMapFaction` 在 hero 也为 null 的情况下会 NRE——`?.` 只保护了 hero 一侧。
- **两个 getter 返回内部列表本身。** `GetBarterGroups()` / `GetBarterables()` 都不是副本。外部直接增删会绕过 `Initialize`，让条目 `Group` 为 null 或引入未分组的条目。
- **`AddBarterGroup` 不去重。** 管理器内部会追加 `DefaultsBarterGroup`，你再追加一次就有两个。
- **只有第一个匹配生效。** 继承链上的歧义靠列表顺序解决，而那个顺序来自 `DiplomacyModel` 实现，mod 覆写模型时可能改变它。
- **不进存档。** 没有任何 `SaveableField` / `SaveableProperty`；交易会话是一次性的，读档后不会恢复。
- **生命周期极短。** 从 `StartBarterOffer` 构造到玩家关闭交易屏幕为止。**不要把 `BarterData` 缓存成字段**——会话结束后它就是垃圾，而且里面的 `Barterable` 会一直持有 `Hero` 引用。

## 跨版本提示

`bannerlord-1.4.5/Bannerlord.Source/bin/TaleWorlds.CampaignSystem/TaleWorlds.CampaignSystem.BarterSystem/BarterData.cs` 是 90 行原始源码，零个存档属性。跨版本要盯四点：构造函数是否仍从 `DiplomacyModel` 拉分组、`AddBarterable<T>` 是否仍是 first-match + 静默丢弃语义、`GetBarterables` 是否仍返回内部列表本身、以及 `BarterManager.BarterContextInitializer` 委托签名是否变过（它是 `BarterData` 的字段类型，改签名会连带改所有 barter 行为）。

## 依赖关系

- 唯一构造方：[BarterManager](../BarterManager) 的 `StartBarterOffer`（`BarterManager.cs:81`）与 `ExecuteAiBarter`（`BarterManager.cs:98`），随后 `CampaignEventDispatcher.Instance.OnBarterablesRequested(args)` 把实例广播出去
- 分组来源：[DiplomacyModel](../DiplomacyModel) 的 `GetBarterGroups()`，在构造函数里 `ToList()` 成副本
- 条目类型：[Barterable](../Barterable) 是 `_barterables` 的元素类型，`AddBarterable<T>` 调它的 `Initialize`
- 分组类型：[BarterGroup](../BarterGroup) 是 `_barterGroups` 的元素类型，`GetBarterGroup<T>` 按它做 `OfType` 过滤
- 双方数据：[Hero](../Hero) 与 [PartyBase](../PartyBase)（或 [MobileParty](../MobileParty)），派系侧是 `IFaction`
- 行为侧消费者：`GoldBarterBehavior` / `ItemBarterBehavior` / `FiefBarterBehavior` / `SetPrisonerFreeBarterBehavior` / `TransferPrisonerBarterBehavior` 都通过 `AddBarterable<XxxBarterGroup>` 往里塞条目
- 桶首页：[campaign API 分区](../)
