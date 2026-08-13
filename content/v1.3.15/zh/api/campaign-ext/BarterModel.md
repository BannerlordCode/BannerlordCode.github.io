---
title: "BarterModel"
description: "议价（Barter）系统的规则模型：定义玩家与 NPC 议价时的冷却天数、NPC 可动用资金的百分比上限，以及物品议价的罚分系数；mod 通过继承并注册自定义实现来改写议价规则。"
---

# BarterModel

**Namespace:** `TaleWorlds.CampaignSystem.ComponentInterfaces`  
**Module:** `TaleWorlds.CampaignSystem`  
**Type:** `public abstract class BarterModel : MBGameModel<BarterModel>`  
**Base:** `MBGameModel<BarterModel>`  
**源文件路径:** `TaleWorlds.CampaignSystem/ComponentInterfaces/BarterModel.cs`

## 一句话职责

它规定「玩家和一名领主/家族议价时，多久能再议一次、NPC 最多肯掏出自己多少钱、某件物品在对方眼里值多少」这三件事，是整个议价面板背后的数值规则来源。

## 概述

`BarterModel` 是战役层（Campaign）的一个**规则模型（Model）**，不是一个会自己跑的逻辑系统。它只回答几个纯数值问题：`BarterManager` 在真正开启、结算、计算好感时来调用它，把算出来的数字拿去决定能不能议价、NPC 愿意出多少、以及超额付款能换来多少关系。

基类 `MBGameModel<BarterModel>` 让 mod 可以通过 `Campaign.Current.Models` 拿到当前生效的实例，也支持用「上一次的实现」做链式继承（见下文「如何替换」）。游戏默认实现是 `DefaultBarterModel`，写在 `TaleWorlds.CampaignSystem.GameComponents` 下。

这个类型只有 4 个成员：2 个只读属性、2 个抽象方法。它不持有任何状态、不监听事件、也不读写存档，因此本身不会直接导致坏档；真正的崩溃风险来自「替换得不干净」或「在错误阶段读取」。

## 心智模型

把 `BarterModel` 理解为**议价系统的一张数值配置表**，由引擎在开局时固定下来，运行期只读：

- **它在哪一层**：纯 Campaign 层规则。它不认识 `Mission`、不碰原生场景，也不参与战斗。
- **谁创建 / 谁持有**：开局时由 `CampaignGameStarter` 收集所有 `GameModel`，通过 `Game.Current.AddGameModelsManager<GameModels>(...)` 装进 `Campaign.Current.Models`，由 `GameModels.BarterModel` 属性对外暴露。你通常**不要** `new` 它，而是从 `Campaign.Current.Models.BarterModel` 读取。
- **谁调用它**：`BarterManager` 在玩家发起议价（`StartBarterOffer` → `CanPlayerBarterWithHero`）时读 `BarterCooldownWithHeroInDays`；在 `ApplyAndFinalizePlayerBarter` 写入冷却时再次读取；玩家超额付款换关系时调用 `CalculateOverpayRelationIncreaseCosts`；`ItemBarterable.GetUnitValueForFaction` 在给物品估值时调用 `GetBarterPenalty`。
- **mod 怎么改写规则**：继承 `BarterModel`（或 `DefaultBarterModel`）覆盖相应成员，然后在 `MBSubModuleBase.OnGameStart` 中用 `CampaignGameStarter.AddModel<BarterModel>(new MyBarterModel())` 注册。引擎会把你注册的实现注入 `Campaign.Current.Models.BarterModel`，后续所有调用方自动拿到你的版本。
- **扩展契约（链式）**：`AddModel<T>(MBGameModel<T>)` 会先取出当前 `T` 实例，调用你的 `Initialize(previousModel)` 把旧实现传给你。如果你只想在默认行为上做微调，就在 `Initialize` 里保存旧实例，在覆盖的方法里先调旧实现再改结果——而不是把 `DefaultBarterModel` 整个复制一遍。

## 何时用 / 何时不要用

**用 `BarterModel` 的场景**

- 想调整议价冷却、NPC 出价上限、物品罚分等数值规则时，读取或替换这个模型。
- 在自家逻辑的某个环节需要「现在 NPC 最多肯出自己多少比例的钱」时，读 `MaximumPercentageOfNpcGoldToSpendAtBarter`。

**不要用它的场景（给出正确替代）**

- 想**发起一次议价**：不要碰模型，用 `BarterManager.StartBarterOffer(...)`（通过 `BarterManager.Instance` 或 `Campaign.Current.BarterManager` 拿到）。
- 想**转账 / 改关系**：用对应的 `*Action`（如 `GiveGoldAction`、`ChangeRelationAction`），不要借 `CalculateOverpayRelationIncreaseCosts` 的返回值自己去改 `Hero.Gold` 或关系字段——那会绕过事件与关联对象更新。
- 想**改某个具体交易项的估值**：那是 `Barterable`/`ItemBarterable` 的职责，模型只提供罚分系数。
- 想**热替换运行中的规则**：不要直接给 `Campaign.Current.Models.BarterModel` 赋值或在存档中途换模型；通过 `AddModel` 在 `OnGameStart` 注册，否则会造成活动议价窗口读到一个不一致的实例。

## 如何获取 BarterModel 实例

```csharp
using TaleWorlds.CampaignSystem;
using TaleWorlds.CampaignSystem.ComponentInterfaces;

// 战役运行时，从 Models 集合拿当前生效的实例（不要自己 new）
BarterModel barter = Campaign.Current.Models.BarterModel;
if (barter != null)
{
    int cooldownDays = barter.BarterCooldownWithHeroInDays;
    float npcSpendCap = barter.MaximumPercentageOfNpcGoldToSpendAtBarter;
}
```

## 主要成员

下面 4 个成员是 mod 最可能需要读取或覆盖的全部公开/受保护成员。

### `BarterCooldownWithHeroInDays`

玩家与同一名英雄完成一次议价后，必须等待多少天才能再次与之议价。

- **作用**：返回整数天数；`BarterManager` 用它设置该英雄的议价冷却，`HandleHeroCooldown` 会写入 `CampaignTime.Now + CampaignTime.Days(该值)`。
- **副作用**：无（只读属性）。
- **何时覆盖**：想让议价更频繁或更稀有时覆盖它，返回你想要的冷却天数。默认 `DefaultBarterModel` 返回 `3`。

```csharp
int daysUntilNextBarter = Campaign.Current.Models.BarterModel.BarterCooldownWithHeroInDays;
```

### `MaximumPercentageOfNpcGoldToSpendAtBarter`

NPC 在单次议价中最多愿意动用自己持有资金的百分比上限（0–1 之间的浮点）。

- **作用**：返回 0–1 的系数，用于限制 AI 在议价里肯出的金额规模。
- **副作用**：无（只读属性）。
- **何时覆盖**：想让 NPC 在议价中更大方或更吝啬时覆盖它。默认 `DefaultBarterModel` 返回 `0.25f`（即最多掏出 25% 的家底）。

```csharp
float npcSpendFraction = Campaign.Current.Models.BarterModel.MaximumPercentageOfNpcGoldToSpendAtBarter;
```

### `CalculateOverpayRelationIncreaseCosts(Hero hero, float overpayAmount)`

计算玩家向对方**超额付款**（overpay，即出价比对方要价更高）时，能换取多少点关系提升。

- **作用**：输入交易对方 `Hero` 和超额金额，返回可加的关系点数（整数，已向上取整）。内部逻辑从当前关系起步，按阶梯成本累计能买到的提升，并受 `DefaultPerks.Charm.Tribute` 等特性影响。
- **副作用**：无（纯计算），但返回值会由调用方 `BarterManager.ApplyOverpayBonus` 通过 `ChangeRelationAction.ApplyRelationChangeBetweenHeroes` 真正落地到关系上。
- **何时调用 / 何时覆盖**：`BarterManager` 在玩家议价被接受且存在超额付款时调用；想改写「花钱买好感」的曲线就覆盖它。注意它只处理**非交战**阵营（`ApplyOverpayBonus` 会先检查 `!IsAtWarWith`）。

```csharp
// 在玩家发起的议价被接受、且存在 overpay 时由 BarterManager 调用：
int relationBonus = Campaign.Current.Models.BarterModel
    .CalculateOverpayRelationIncreaseCosts(otherHero, overpayAmount);
```

### `GetBarterPenalty(IFaction faction, ItemBarterable itemBarterable, Hero otherHero, PartyBase otherParty)`

计算某件物品（`ItemBarterable`）对某个阵营而言的**议价罚分系数**，结果乘到物品价值上决定对方愿意出多少。

- **作用**：返回 `ExplainedNumber`。当 `faction` 与对方同阵营/家族时给正系数（对方更愿意收），当 `faction` 与物品原主同阵营/家族时给负系数（对方不愿接手，动物/坐骑/食物有不同档位），其它情况为 `0`。`ItemBarterable.GetUnitValueForFaction` 用它的 `ResultNumber` 乘物品均价得出最终估值。
- **副作用**：无（纯计算），但系数会显著影响 `ItemBarterable` 的估值，进而改变议价能否达成。
- **何时调用 / 何时覆盖**：通过 `ItemBarterable` 间接调用；想改写「哪些物品在谁眼里值钱」的规则时覆盖它，注意 `ExplainedNumber` 要用 `new ExplainedNumber(value)` 构造并可用 `AddFactor` 追加解释项。

```csharp
// 通常由 ItemBarterable.GetUnitValueForFaction 内部调用；手动查询写法：
ExplainedNumber penalty = Campaign.Current.Models.BarterModel
    .GetBarterPenalty(faction, itemBarterable, otherHero, otherParty);
float factor = penalty.ResultNumber;
```

## 最小真实示例

### 示例 1：在行为里读取 NPC 出价上限并据此调整你的议价项

```csharp
using TaleWorlds.CampaignSystem;
using TaleWorlds.CampaignSystem.ComponentInterfaces;
using TaleWorlds.CampaignSystem.Party;

public static float NpcBarterBudget(Hero npc, PartyBase npcParty)
{
    BarterModel barter = Campaign.Current.Models.BarterModel;
    if (barter == null || npc == null) return 0f;

    // NPC 最多肯拿出自己资金的这个百分比
    float cap = barter.MaximumPercentageOfNpcGoldToSpendAtBarter;
    int gold = npc.Gold;
    if (npcParty != null && npcParty.MobileParty != null)
    {
        gold += npcParty.MobileParty.PartyTradeGold;
    }
    return gold * cap;
}
```

### 示例 2：注册一个自定义 BarterModel（链式继承默认实现）

```csharp
using TaleWorlds.CampaignSystem;
using TaleWorlds.CampaignSystem.ComponentInterfaces;
using TaleWorlds.CampaignSystem.GameComponents;
using TaleWorlds.Core;
using TaleWorlds.MountAndBlade;

public class MyBarterModel : BarterModel
{
    private BarterModel _previous;

    // AddModel<T> 会把当前生效的 BarterModel 作为 previousModel 传进来
    public override void Initialize(BarterModel previousModel)
    {
        _previous = previousModel;
        base.Initialize(previousModel);
    }

    public override int BarterCooldownWithHeroInDays => 1; // 让议价更频繁

    public override float MaximumPercentageOfNpcGoldToSpendAtBarter => 0.4f; // NPC 更大方

    public override int CalculateOverpayRelationIncreaseCosts(Hero hero, float overpayAmount)
    {
        // 在默认逻辑基础上再放大 20%
        int baseValue = _previous.CalculateOverpayRelationIncreaseCosts(hero, overpayAmount);
        return (int)(baseValue * 1.2f);
    }

    public override ExplainedNumber GetBarterPenalty(
        IFaction faction, ItemBarterable itemBarterable, Hero otherHero, PartyBase otherParty)
    {
        // 直接复用默认罚分，不改动物品估值
        return _previous.GetBarterPenalty(faction, itemBarterable, otherHero, otherParty);
    }
}

public class MySubModule : MBSubModuleBase
{
    protected override void OnGameStart(Game game, IGameStarter gameStarter)
    {
        base.OnGameStart(game, gameStarter);
        // 战役模式下 gameStarter 实际是 CampaignGameStarter
        if (gameStarter is CampaignGameStarter campaignStarter)
        {
            campaignStarter.AddModel<BarterModel>(new MyBarterModel());
        }
    }
}
```

## 依赖图

`BarterModel` 自己不持有状态，它是被下面这些类型读取的纯规则来源：

- 上游持有者：[Campaign](../../campaign/Campaign/) 在开局时通过 `GameModels` 收集模型，对外暴露 `Campaign.Current.Models.BarterModel`。
- 直接调用方：[BarterManager](../BarterManager/) 在发起/结算议价、写入冷却、计算超额好感时调用本模型；[Barterable](../Barterable/)（具体为 `ItemBarterable`）在 `GetUnitValueForFaction` 中调用 `GetBarterPenalty`。
- 数据对象：[Hero](../../campaign/Hero/)（交易对方与关系）、[Clan](../../campaign/Clan/) / [Settlement](../../campaign/Settlement/)（阵营归属，决定罚分正负）、`PartyBase`（对方部队）。
- 默认实现：[DefaultBarterModel](../DefaultBarterModel/) 是游戏内置的具体规则；其它规则模型如 [SettlementLoyaltyModel](../SettlementLoyaltyModel/) 同样走 `GameModels` 扩展点。
- 关联行为/事件：[CampaignBehaviorBase](../CampaignBehaviorBase/) 承载每日 tick；真正改变金币与关系的是 [GiveGoldAction](../GiveGoldAction/) 等 Action，而非本模型。
- 存档：本模型无 `[SaveableField]`，但 `BarterManager` 的 `_barteredHeroes` 冷却字典会被存档；替换模型不会破坏该字典，但会让已存档的冷却按新规则继续计时。

## 风险

1. **替换得不干净**：如果你用 `new MyBarterModel()` 覆盖全部逻辑却忘了在 `Initialize` 里保存 `_previous`，原本依赖默认实现（如 `DefaultPerks` 加成的罚分）的地方会丢失行为。需要微调时优先链式调用 `_previous`。
2. **错误阶段读取**：`Campaign.Current.Models` 只在战役已加载后可用。在 `MBSubModuleBase.OnSubModuleLoad`、主菜单、或加载界面读取会得到 `null` 或旧战役实例，应先判空并确认 `Campaign.Current != null`。
3. **运行期热替换**：`Campaign.Current.Models.BarterModel` 是 `private set` 的属性，不能运行时直接赋值；只能通过 `AddModel` 在 `OnGameStart` 注册。在已有议价窗口或已存档的战役中途换模型，会让进行中的议价读到不一致的规则。
4. **返回错误量级**：`GetBarterPenalty` 返回的是乘到物品价值上的系数（默认量级在 `-12.6` 到 `0.4` 附近），不是绝对值。如果你返回了一个远大于此区间的数，会让物品估值异常膨胀或归零，导致议价永远达成或永远失败。务必用 `new ExplainedNumber(value)` 构造并理解 `ResultNumber` 的语义。
5. **覆盖后未覆盖全部抽象成员**：`BarterModel` 的 2 个属性和 2 个方法都是抽象的，子类必须全部实现，否则编译不过；若只实现了部分并依赖基类，基类是抽象类本身没有实现，会直接编译失败。
6. **关系落地依赖调用方**：`CalculateOverpayRelationIncreaseCosts` 只是算数值，真正加分由 `BarterManager.ApplyOverpayBonus` 通过 `ChangeRelationAction` 完成。不要在你的覆盖里顺手改 `Hero` 关系字段，那会绕过事件和上限。

## 跨版本提示

- v1.3.15 与 v1.4.5 的 `BarterModel` 抽象成员完全一致（2 属性 + 2 方法），`DefaultBarterModel` 的具体数值与特性判定也基本一致；跨版本 mod 可共用同一份自定义实现。
- 模型扩展入口 `CampaignGameStarter.AddModel<T>` 在 1.3.15 即存在，注册写法与 1.4.5 通用。
- 业务代码应依赖公开的 `BarterModel` / `Campaign.Current.Models` API，不要依赖反编译文件中的私有字段或 `_previousModel` 内部存储名。

## 导航

- ↑ [战役扩展 API 索引](../)
- ↔ [BarterManager](../BarterManager/) · [Barterable](../Barterable/) · [DefaultBarterModel](../DefaultBarterModel/) · [SettlementLoyaltyModel](../SettlementLoyaltyModel/)
- 相关类：[Hero](../../campaign/Hero/) · [Clan](../../campaign/Clan/) · [Settlement](../../campaign/Settlement/) · [Campaign](../../campaign/Campaign/) · [GiveGoldAction](../GiveGoldAction/) · [CampaignBehaviorBase](../CampaignBehaviorBase/)
- 架构：[崩溃与存档边界](../../../architecture/crash-boundaries/)
