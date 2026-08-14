---
title: "BarterData"
description: "一次议价（Barter）谈判的快照：记录提议方与接收方双边（Hero / PartyBase）以及各自摆在台面上的 Barterable 筹码，供 BarterManager 估值与成交。"
---
# BarterData

**Namespace:** TaleWorlds.CampaignSystem.BarterSystem  
**Module:** TaleWorlds.CampaignSystem  
**Type:** `public class BarterData`  
**Base:** 无（直接继承 `System.Object`）  
**Source:** `TaleWorlds.CampaignSystem/BarterSystem/BarterData.cs`

## 一句话职责

它描述「玩家或 AI 与某个领主 / 家族正在谈的一桩交易」：谁向谁提议、双方各自拿出哪些东西（`Barterable`），以及这次谈判是不是 AI 主导的。它本身不定价、不成交，只是把谈判的双边身份与筹码打包成一个交给 [BarterManager](../BarterManager/) 使用的快照。

## 心智模型

把 `BarterData` 当成**一次谈判的票据**，而不是长期存在的世界对象：

- 它由 [BarterManager](../BarterManager/) 在一次谈判开始时 `new` 出来（见 `StartBarterOffer` / `ExecuteAiBarter`），谈判结束（接受或拒绝）后就被丢弃，不进存档。
- 构造时它会向 `Campaign.Current.Models.DiplomacyModel.GetBarterGroups()` 预填一组默认 `BarterGroup`，随后 [BarterManager](../BarterManager/) 广播 `CampaignEvents.BarterablesRequested`，让各 `CampaignBehavior` 往里塞具体的 `Barterable`（金币、领地、部队、人质等）。
- 四个只读字段 `OffererHero` / `OtherHero` / `OffererParty` / `OtherParty` 是谈判的双边身份；任一边可以是「只有 Hero」或「只有 Party」——例如商队、敌对家族部队可能没有 `Hero`，因此访问前要先判空。
- **不要**自己 `new BarterData(...)` 再手动摆弄它来模拟交易：正式开价请走 `BarterManager.Instance.StartBarterOffer(...)`，让冷却、对话上下文、UI 流程一起就位；想在谈判里加自己的筹码，请订阅 `CampaignEvents.BarterablesRequested` 拿到的 `BarterData` 实例并调用 `AddBarterable<T>`，这正是各内置 `BarterBehavior` 的做法。
- 定价与成交都不在 `BarterData` 里：[BarterManager](../BarterManager/) 用 `GetOfferValue` / `IsOfferAcceptable` / `GetOfferValueForFaction` 估值，成交时遍历 `GetOfferedBarterables()` 逐个调用 `Barterable.Apply()`。

## 如何参与一次谈判（获取路径）

模组通常有两种正确的接触方式：

```csharp
using TaleWorlds.CampaignSystem;
using TaleWorlds.CampaignSystem.BarterSystem;
using TaleWorlds.CampaignSystem.BarterSystem.Barterables;
using TaleWorlds.CampaignSystem.Party;

// 方式一：从一个 CampaignBehavior 里监听谈判请求，向现有 BarterData 贡献筹码。
// 这正是 TaleWorlds 内置 GoldBarterBehavior / FiefBarterBehavior 的实现方式。
public class MyBarterBehavior : CampaignBehaviorBase
{
    public override void RegisterEvents()
    {
        CampaignEvents.BarterablesRequested.AddNonSerializedListener(this, OnBarterablesRequested);
    }

    public override void SyncData(IDataStore dataStore) { }

    private void OnBarterablesRequested(BarterData args)
    {
        // 只有当双方都有 Hero，且不属于同一家族，金币议价才有意义
        if (args.OffererHero == null || args.OtherHero == null ||
            args.OffererHero.Clan == args.OtherHero.Clan)
        {
            return;
        }

        int availableGold = args.OffererHero.Gold;
        var gift = new GoldBarterable(args.OffererHero, args.OtherHero, args.OffererParty, args.OtherParty, availableGold);
        args.AddBarterable<GoldBarterGroup>(gift);
    }
}
```

```csharp
using TaleWorlds.CampaignSystem;
using TaleWorlds.CampaignSystem.BarterSystem;
using TaleWorlds.CampaignSystem.Party;

// 方式二：主动发起一次与某个领主的议价（例如从对话选项 / 任务里调用）。
// BarterManager 会内部 new 出 BarterData 并把控制权交给谈判 UI。
Hero main = Hero.MainHero;
Hero target = Hero.OneToOneConversationHero;
if (main != null && target != null)
{
    BarterManager.Instance.StartBarterOffer(
        main,
        target,
        main.PartyBelongedTo?.Party,
        target.PartyBelongedTo?.Party);
}
```

## 主要成员

### 双边身份（只读字段）

| 成员 | 类型 | 说明 |
|------|------|------|
| `OffererHero` | `Hero` | 提议方英雄；在纯部队 / 商队谈判里可能为 `null`。 |
| `OtherHero` | `Hero` | 接收方英雄；同上可能为 `null`。 |
| `OffererParty` | `PartyBase` | 提议方的部队 / 据点；`OffererHero` 为 `null` 时这是主要身份来源。 |
| `OtherParty` | `PartyBase` | 接收方的部队 / 据点。 |
| `ContextInitializer` | `BarterManager.BarterContextInitializer` | 上下文校验委托，决定某个 `Barterable` 是否属于本次谈判（如婚姻、加入王国、和平、安全通行各自的专属校验）。未传则为 `null`。 |
| `PersuasionCostReduction` | `int` | 说服过程里降低的消耗，由发起方传入。 |

### 派生属性

| 成员 | 类型 | 说明 |
|------|------|------|
| `OffererMapFaction` | `IFaction` | `OffererHero?.MapFaction ?? OffererParty.MapFaction`——优先取英雄阵营，英雄为空时退回部队阵营。 |
| `OtherMapFaction` | `IFaction` | 同上，接收方阵营。 |
| `IsAiBarter` | `bool` | 本次谈判是否由 AI 发起（影响是否进入玩家谈判 UI）。 |

### 构造与填充方法

#### `public BarterData(Hero offerer, Hero other, PartyBase offererParty, PartyBase otherParty, BarterManager.BarterContextInitializer contextInitializer = null, int persuasionCostReduction = 0, bool isAiBarter = false)`

创建一次谈判的数据快照。**模组一般不应直接调用**——交给 `BarterManager.StartBarterOffer` / `ExecuteAiBarter` 即可。构造时会向 `DiplomacyModel.GetBarterGroups()` 预填默认分组，并把 `IsAiBarter` 等字段定下。

#### `public void AddBarterable<T>(Barterable barterable, bool isContextDependent = false)`

把一条 `Barterable` 挂到类型形参 `T` 指定的 `BarterGroup` 下，并调用 `barterable.Initialize(group, isContextDependent)`。`T` 必须是某个 `BarterGroup` 子类的类型（如 `GoldBarterGroup`、`FiefBarterGroup`、`PrisonerBarterGroup`）；若现有分组里没有匹配项，这条 barterable 不会被加入。回调时机：在 `BarterablesRequested` 监听里、UI 弹出谈判界面前被各 behavior 调用。

```csharp
// 在 BarterablesRequested 监听内（参见上文 MyBarterBehavior）
var gold = new GoldBarterable(args.OffererHero, args.OtherHero, args.OffererParty, args.OtherParty, args.OffererHero.Gold);
args.AddBarterable<GoldBarterGroup>(gold);
```

#### `public void AddBarterGroup(BarterGroup barterGroup)`

向分组列表追加一个自定义 `BarterGroup`。`BarterManager.AddBaseBarterables` 内部会先 `AddBarterGroup(new DefaultsBarterGroup())` 再放入默认筹码。

#### `public List<BarterGroup> GetBarterGroups()`

返回当前所有分组（含构造时预填的默认分组与后续追加的）。

#### `public List<Barterable> GetBarterables()`

返回全部 `Barterable`（无论是否标记为已提出）。`BarterManager.MakeBalanced` 用它来寻找可自动补齐差额的筹码。

#### `public BarterGroup GetBarterGroup<T>()`

返回第一个类型为 `T` 的分组；没有匹配时返回 `null`。适合按分组读取或判断某类谈判是否已存在。

#### `public List<Barterable> GetOfferedBarterables()`

返回 `IsOffered == true` 的 `Barterable` 列表——即台面上真正被提出的筹码。`BarterManager.IsOfferAcceptable` / `ApplyBarterOffer` / `GetOfferValueForFaction` 都只在这个子集上估值与成交，是衔接定价与落地的最关键查询。

```csharp
// BarterManager 成交时的真实调用链（节选自源码）：
// foreach (Barterable barter in barterData.GetOfferedBarterables()) barter.Apply();
```

## 依赖图

- [BarterManager](../BarterManager/) 创建并持有每一次谈判的 `BarterData`，负责估值（`GetOfferValue`、`IsOfferAcceptable`）与成交（`ApplyBarterOffer` → `Barterable.Apply()`）。
- [Barterable](../Barterable/) 是摆在台面上的具体筹码；`GetOfferedBarterables()` 是它的提出态视图。
- [BarterGroup](../BarterGroup/) 是筹码的逻辑分组（金币、领地、人质……），`AddBarterable<T>` 按分组挂接。
- [BarterHelper](../BarterHelper/) 在 `MakeBalanced` 流程里用 `GetOfferedBarterables()` / `GetBarterables()` 自动补齐双方差额。
- [BarterModel](../BarterModel/) 提供议价冷却、超额补偿关系等数值；[Hero](../../campaign/Hero/) 与 [PartyBase](../../campaign/PartyBase/) 提供双边身份；[Campaign](../../campaign/Campaign/) 持有 `BarterManager` 与 `DiplomacyModel`。
- 架构边界见 [崩溃与存档边界](../../../architecture/crash-boundaries/)。

## 风险与注意

1. **双边身份可能为空：** `OffererHero` / `OtherHero` 在没有英雄的部队 / 商队谈判里为 `null`。访问其 `.Gold`、`.Clan` 前务必像 `GoldBarterBehavior` 那样先判空，并区分走 `OffererParty.MobileParty.PartyTradeGold`，否则空引用崩溃。
2. **只取已提出的筹码：** 估值与成交只看 `GetOfferedBarterables()`。你 `AddBarterable` 后若没有 `SetIsOffered(true)`，它虽在 `GetBarterables()` 里却不会参与定价（引擎内置路径会先 `SetIsOffered(true)` 再 `AddBarterable`）。
3. **不要长期持有引用：** `BarterData` 是一次谈判的短寿命快照，谈判结束后即被丢弃、不进存档；把它存为字段跨谈判使用会得到过期数据或空引用。
4. **分组类型必须匹配：** `AddBarterable<T>` 的 `T` 要对应一个真实存在的 `BarterGroup` 子类，否则该筹码被静默丢弃。
5. **自定义 `ContextInitializer`：** 若传入自定义校验委托，需保证它只针对属于本谈判上下文的 `Barterable` 返回 `true`，否则会污染其它谈判。

## 跨版本提示

- v1.3.15 与 v1.4.5 的 `BarterData` 公共形态一致：六个只读字段、三个派生属性、构造器与六个方法均相同。
- v1.4.5 在 `BarterManager` 层强化了 AI 议价与超额补偿逻辑，但 `BarterData` 作为数据载体本身没有改动；跨版本 mod 都按「短寿命快照、由 BarterManager 创建」处理即可。

## 导航

- [↑ 议价系统模块](../)
- [↔ BarterManager](../BarterManager/) · [Barterable](../Barterable/) · [BarterGroup](../BarterGroup/) · [BarterHelper](../BarterHelper/) · [BarterModel](../BarterModel/)
- [↔ Hero](../../campaign/Hero/) · [PartyBase](../../campaign/PartyBase/) · [Campaign](../../campaign/Campaign/)
- [架构：崩溃与存档边界](../../../architecture/crash-boundaries/)
