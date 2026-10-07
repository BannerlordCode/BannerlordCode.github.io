---
title: "AcceptCallToWarAgreementDecision"
description: "「是否响应盟友的参战号召」这个王国决议：14 个 override 成员，IsAllowed 判三段外交状态，ApplyChosenOutcome 只在赞成时调 IAllianceCampaignBehavior.StartCallToWarAgreement。"
---

# AcceptCallToWarAgreementDecision

**Namespace:** `TaleWorlds.CampaignSystem.Election`
**Module:** `TaleWorlds.CampaignSystem`
**Type:** `public class AcceptCallToWarAgreementDecision : KingdomDecision`
**Base:** [KingdomDecision](../KingdomDecision)（决议基类，提供 `ProposerClan` / `Kingdom` / `SupportStatus` 等）
**File:** `TaleWorlds.CampaignSystem/Election/AcceptCallToWarAgreementDecision.cs`（全文 352 行，嵌套类 `AcceptCallToWarAgreementDecisionOutcome` 在 `:319` 起）

## 概述

`AcceptCallToWarAgreementDecision` 是**「你的王国要不要响应盟友的参战号召」**这个决议的具体实现。它继承 [KingdomDecision](../KingdomDecision)，自己覆写 14 个成员，核心是两段判定加一个动作。

**三段准入状态。** `IsAllowed()` 决定这个决议能不能被提出：

```csharp
return this.CallingKingdom.IsAllyWith(base.Kingdom)
    && !base.Kingdom.IsAtWarWith(this.KingdomToCallToWarAgainst)
    && this.CallingKingdom.IsAtWarWith(this.KingdomToCallToWarAgainst);
```

即：号召方与被号召方是盟友 ✓、我方尚未与目标交战 ✓、号召方确实在交战 ✓。**三条全部成立才能提这个决议**——这就是「参战号召」这个机制的定义。

**四个决定性字段都是 `readonly` 且 `[SaveableField]` 的**：`[SaveableField(101)] public readonly Kingdom CallingKingdom;` / `[SaveableField(102)] public readonly Kingdom KingdomToCallToWarAgainst;` / `[SaveableField(103)] public readonly int CallToWarCost;`。第三个由构造器算出：

```csharp
this.CallToWarCost = Campaign.Current.Models.AllianceModel.GetCallToWarCost(callingKingdom, proposerClan.Kingdom, kingdomToCallToWarAgainst);
```

**它在构造那一刻就把费用定死了。** 外交关系后来怎么变，这个数都不再重算——除非重开决议（那会 new 一个新实例）。

**唯一的实际动作。** `ApplyChosenOutcome(DecisionOutcome chosenOutcome)` 的全部内容是：若 `chosenOutcome` 的 `ShouldAcceptCallToWar` 为 true，就 `this.AllianceCampaignBehavior.StartCallToWarAgreement(this.CallingKingdom, base.Kingdom, this.KingdomToCallToWarAgainst, this.CallToWarCost, false);`。**否决时什么都不做**——不开战、不罚金、不扣影响力。

`AllianceCampaignBehavior` 是个**懒加载属性**：getter 里 `if (this._allianceCampaignBehavior == null) { this._allianceCampaignBehavior = Campaign.Current.GetCampaignBehavior<IAllianceCampaignBehavior>(); }`。所以它在 `ApplyChosenOutcome` 那一刻才第一次解析。

## 心智模型

把它当成**「一个二选一的王国投票」**，五段定位：

**第一段：谁拍板。** `DetermineChooser()` 返回 `base.Kingdom.RulingClan` —— **决定权在执政氏族**，不是提案者。

**第二段：两个候选结果。** `DetermineInitialCandidates()` 用 `yield return` 产出恰好两个 `AcceptCallToWarAgreementDecisionOutcome`：`new ...(true, base.Kingdom, this.CallingKingdom, this.KingdomToCallToWarAgainst)` 与 `(false, ...)`。**注意四个参数把 `Kingdom`、`CallingKingdom`、`KingdomToCallToWarAgainst` 全部复制进了每个 outcome**——所以每个 outcome 自己是自洽的，UI 渲染单个 outcome 时不需要回头查决议。

而 `base.Kingdom` 本身是个**回退属性**：`public Kingdom Kingdom { get { return this._kingdom ?? this.ProposerClan.Kingdom; } }`——内部 `_kingdom` 为 null 时回落到提案者的王国。所以「这个决议属于哪个王国」在提案者无王国时也有定义。

**第三段：谁天然支持谁。** `DetermineSponsors(MBReadOnlyList<DecisionOutcome> possibleOutcomes)` 对每个 outcome：赞成的一律 `decisionOutcome.SetSponsor(base.ProposerClan)`；**反对的走 `base.AssignDefaultSponsor(decisionOutcome)`**——也就是说**「提案者反对」是合法的**，提案者可能自己都不想打这场仗。反对派的支持者由基类按常规规则分配。

**第四段：票怎么算。** `DetermineSupport(Clan clan, DecisionOutcome possibleOutcome)` 的核心是两行：

```csharp
float scoreOfJoiningWar = Campaign.Current.Models.AllianceModel.GetScoreOfJoiningWar(this.CallingKingdom, base.Kingdom, this.KingdomToCallToWarAgainst, clan, out textObject);
```

然后**同一个 `scoreOfJoiningWar` 在两个分支里被一正一负地使用**，再加上领袖特质修正：赞成 `num = scoreOfJoiningWar; int num2 = clan.Leader.GetTraitLevel(DefaultTraits.Valor) * 20 + clan.Leader.GetTraitLevel(DefaultTraits.Calculating) * 20; return num + num2;`；反对 `num3 = -scoreOfJoiningWar; int num4 = -(clan.Leader.GetTraitLevel(DefaultTraits.Valor) * 20) - clan.Leader.GetTraitLevel(DefaultTraits.Calculating) * 10; return num3 + num4;`

**注意两个分支的系数不同**：勇武在两边都是 ×20，而算计在赞成侧 ×20、反对侧 ×10。**这意味着「算计型领袖」在支持与反对两个方向上的影响不对称。**

**第五段：什么时候作废。** `ShouldBeCancelledInternal()` 被覆写为 `return !this.CanMakeDecision(out textObject);`——**决议的有效性完全等同于「此刻还能不能做这个决定」**。`CanMakeDecision` 有四个 false 分支，任何一个成立即取消：任一方被消灭 / 我方已与目标交战 / 目标已不再与号召方交战 / 我方已不再与号召方结盟。**通过时 `reason = TextObject.GetEmpty()`。**

## 关键成员

| 成员 | 签名 | 这个成员是做什么用的 |
| --- | --- | --- |
| `.ctor` | `public AcceptCallToWarAgreementDecision(Clan proposerClan, Kingdom callingKingdom, Kingdom kingdomToCallToWarAgainst) : base(proposerClan)` | 三个参数是「谁提的、谁在号召、要打谁」。方法体三行：存 `CallingKingdom` 与 `KingdomToCallToWarAgainst`，然后 `this.CallToWarCost = Campaign.Current.Models.AllianceModel.GetCallToWarCost(callingKingdom, proposerClan.Kingdom, kingdomToCallToWarAgainst);` **在构造瞬间定死费用。** |
| `AllianceCampaignBehavior` | `public IAllianceCampaignBehavior AllianceCampaignBehavior { get; }` | **懒加载属性**，getter 里 `if (this._allianceCampaignBehavior == null) { this._allianceCampaignBehavior = Campaign.Current.GetCampaignBehavior<IAllianceCampaignBehavior>(); }`。`ApplyChosenOutcome` 唯一用到它的地方。**注意 `Campaign.Current.GetCampaignBehavior<T>` 返回「注册顺序里第一个匹配的」，且扫不到时返回 null 而不抛异常。** |
| `CallingKingdom` | `[SaveableField(101)] public readonly Kingdom CallingKingdom` | 发起号召的王国。参与 `IsAllowed` 的三段判定、`CanMakeDecision` 的两个分支、以及全部四个文案变量的填充。`readonly` ⇒ **外部改不了**。 |
| `KingdomToCallToWarAgainst` | `[SaveableField(102)] public readonly Kingdom KingdomToCallToWarAgainst` | 要打的敌方王国。同样 `readonly`，参与 `IsAllowed` / `CanMakeDecision` / `DetermineSupport`。 |
| `CallToWarCost` | `[SaveableField(103)] public readonly int CallToWarCost` | 响应号召的报酬。**由构造器算出后不再重算。** 出现在 `GetSupportTitle` / `GetChooseTitle` / `GetSupportDescription` / `GetChooseDescription` 四个文案里，文本变量名 `{CALL_TO_WAR_PAYMENT}`，配一个 `{GOLD_ICON}` 图标变量。 |
| `IsAllowed` | `public override bool IsAllowed()` | 三段外交状态联判，见「第一段」。**这是「能不能提出这个决议」的判据**，与 `CanMakeDecision`（「现在还能不能做这个决定」）是两回事。 |
| `GetProposalInfluenceCost` | `public override int GetProposalInfluenceCost()` | `return Campaign.Current.Models.AllianceModel.GetInfluenceCostOfCallingToWar(base.ProposerClan);` —— 提出这个决议要花提案者的影响力。 |
| `DetermineInitialCandidates` | `public override IEnumerable<DecisionOutcome> DetermineInitialCandidates()` | `yield return` 两个 outcome 后 `yield break;`。**恰好两个、不可扩展**。 |
| `DetermineChooser` | `public override Clan DetermineChooser()` | `return base.Kingdom.RulingClan;`。**执政氏族拍板。** `GetSupportDescription` 的 `{KINGDOM_LEADER}` 变量由 `this.DetermineChooser().Leader.Name` 填充。 |
| `ShouldBeCancelledInternal` | `protected override bool ShouldBeCancelledInternal()` | `return !this.CanMakeDecision(out textObject);`。**决议有效性 = 当前能否决定。** `protected`，外部调不到。 |
| `DetermineSponsors` | `public override void DetermineSponsors(MBReadOnlyList<DecisionOutcome> possibleOutcomes)` | 赞成一律 `SetSponsor(base.ProposerClan)`；**反对走 `base.AssignDefaultSponsor(decisionOutcome)`**——所以提案者可以合法地站在反对阵营这边。 |
| `ApplyChosenOutcome` | `public override void ApplyChosenOutcome(DecisionOutcome chosenOutcome)` | **唯一的动作点。** 赞成才调 `this.AllianceCampaignBehavior.StartCallToWarAgreement(this.CallingKingdom, base.Kingdom, this.KingdomToCallToWarAgainst, this.CallToWarCost, false);` 最后一个 `false` 是 `isPlayerPaying`。**否决时是彻底的空操作。** |
| `ApplySecondaryEffects` | `public override void ApplySecondaryEffects(MBReadOnlyList<DecisionOutcome> possibleOutcomes, DecisionOutcome chosenOutcome)` | **空实现 `{ }`。** 覆写它只是为了表示「本决议没有后续效果」——否则走基类的默认行为。 |
| `IsSingleClanDecision()`（基类，`public bool` 非虚） | `return this.Kingdom.Clans.Count == 1;` | 单一氏族王国（早期游戏）跳过投票，直接拍板。`GetChosenOutcomeText` 的第一个分支就判它。
| `CalculateSupport` | `public float CalculateSupport(Clan clan)` | **没有 `override`。** 它是本类自己加的一个便捷方法：`return this.DetermineSupport(clan, new AcceptCallToWarAgreementDecisionOutcome(true, base.Kingdom, this.CallingKingdom, this.KingdomToCallToWarAgainst));` ——**永远问「赞成的支持度是多少」**，因为 UI 要显示「如果赞成，能拿到多少票」。它与 `DetermineSupport` 并存，别当成重复实现。 |
| `DetermineSupport` | `public override float DetermineSupport(Clan clan, DecisionOutcome possibleOutcome)` | 见「第四段」。**返回值是相对分，不是绝对票数**——赞成分与反对分互为相反数加上各自的领袖修正。 |
| `CanMakeDecision` | `public override bool CanMakeDecision(out TextObject reason)` | 四个 false 分支，见「第五段」。通过时 `reason = TextObject.GetEmpty();` —— **成功路径返回的是空文本而不是 null**，调用方必须判 `IsEmpty()` 而不是判 null。 |
| `GetSecondaryEffects` | `public override TextObject GetSecondaryEffects()` | 返回 `new TextObject("{=!}All supporters gains some relation with each other.", null)`。**注意这是一句英文硬编码文案**（`{=!}` 表示不加本地化），而且语法有误（`gains` 应为 `gain`）。它描述的是基类在决议结束后给支持者加关系的效果。 |
| `GetChosenOutcomeText` | `public override TextObject GetChosenOutcomeText(DecisionOutcome chosenOutcome, KingdomDecision.SupportStatus supportStatus, bool isShortVersion = false)` | **八个分支**：`ShouldAcceptCallToWar` × (`IsSingleClanDecision()` | `Majority` | `Minority` | 其他)。最后统一 `StringHelpers.SetCharacterProperties("RULER", base.Kingdom.Leader.CharacterObject, textObject, false);`。**`isShortVersion` 参数声明了但完全没用。** |
| `GetQueriedDecisionOutcome` | `public override DecisionOutcome GetQueriedDecisionOutcome(MBReadOnlyList<DecisionOutcome> possibleOutcomes)` | `possibleOutcomes.FirstOrDefault((DecisionOutcome t) => ((AcceptCallToWarAgreementDecisionOutcome)t).ShouldAcceptCallToWar)` ——**永远返回赞成的那个**，或 null。 |
| `GetGeneralTitle` / `GetSupportTitle` / `GetChooseTitle` / `GetSupportDescription` / `GetChooseDescription` | 五个 `public override TextObject` | 五个文案生成器，全部用 `{CALLING_KINGDOM}` / `{KINGDOM_TO_CALL_TO_WAR_AGAINST}` / `{CALL_TO_WAR_PAYMENT}` / `{GOLD_ICON}` 变量填充。`GetChooseDescription` 额外用 `textObject.SetCharacterProperties("RULER", base.Kingdom.Leader.CharacterObject, false)` 与 `GameTexts.FindText("str_faction_ruler_name_with_title", base.Kingdom.Culture.StringId)`。 |
| `AutoGeneratedInstanceCollectObjects` | `protected override void AutoGeneratedInstanceCollectObjects(List<object> collectedObjects)` | 存档引用收集：`base.AutoGeneratedInstanceCollectObjects(collectedObjects); collectedObjects.Add(this.CallingKingdom); collectedObjects.Add(this.KingdomToCallToWarAgainst);` ——**只加了两个 Kingdom，`CallToWarCost` 是 int 不需要引用收集。** |

## 真实示例

手动提出一个决议并查询当前号召状态（全部用 `IAllianceCampaignBehavior` 上真实存在的成员）：

```csharp
IAllianceCampaignBehavior alliances = CampaignBehaviorBase.GetCampaignBehavior<IAllianceCampaignBehavior>();
if (alliances == null)
{
    Debug.Print("no alliance behavior registered", 0);
    return;
}

Kingdom caller = Campaign.Current.Kingdoms.First(k => k.IsAtWarWith(anotherKingdom));
Kingdom target = anotherKingdom;
Clan proposer = Hero.MainHero.Clan;

if (alliances.HasCalledToWar(caller, proposer.Kingdom))
{
    Debug.Print("already called to war, skipping", 0);
    return;
}

List<Kingdom> enemies = alliances.GetKingdomsToCallToWarAgainst(caller, proposer.Kingdom);

AcceptCallToWarAgreementDecision decision =
    new AcceptCallToWarAgreementDecision(proposer, caller, target);

if (decision.IsAllowed())
{
    TextObject reason;
    bool decidable = decision.CanMakeDecision(out reason);

    Debug.Print("cost = " + decision.CallToWarCost, 0);
    Debug.Print("chooser = " + decision.DetermineChooser().Name, 0);
    Debug.Print("decidable = " + decidable, 0);
    Debug.Print("open call-to-war lines = " + enemies.Count, 0);
}
```

`HasCalledToWar(Kingdom callingKingdom, Kingdom calledKingdom)` 与 `GetKingdomsToCallToWarAgainst(Kingdom callingKingdom, Kingdom calledKingdom)` 是 [IAllianceCampaignBehavior](../IAllianceCampaignBehavior) 上真实存在的成员；后者返回 `List<Kingdom>`。`IsAllowed()` 的三段判定是能否提出的唯一门槛，`CallToWarCost` 与 `DetermineChooser()` 是构造完就能读的两个关键值。

**决定自己这一氏族怎么投票**（走 `DetermineSupport`，注意两个方向的领袖系数不对称）：

```csharp
Clan myClan = Hero.MainHero.Clan;

AcceptCallToWarAgreementDecisionOutcome yes =
    new AcceptCallToWarAgreementDecisionOutcome(true, myClan.Kingdom, caller, target);
AcceptCallToWarAgreementDecisionOutcome no =
    new AcceptCallToWarAgreementDecisionOutcome(false, myClan.Kingdom, caller, target);

float yesScore = decision.DetermineSupport(myClan, yes);
float noScore = decision.DetermineSupport(myClan, no);

Debug.Print("valor = " + myClan.Leader.GetTraitLevel(DefaultTraits.Valor), 0);
Debug.Print("calculating = " + myClan.Leader.GetTraitLevel(DefaultTraits.Calculating), 0);
Debug.Print("yes = " + yesScore + " / no = " + noScore, 0);
```

`yesScore` 与 `noScore` **不必互为相反数**——领袖修正的两侧系数不同（算计 ×20 vs ×10），所以一个高算计的领袖会同时抬高两边、且抬高得不对称。

**在决议被作废前拦截**（这是最实用的监听点）：

```csharp
public override void RegisterEvents()
{
    CampaignEvents.KingdomDecisionAdded.AddNonSerializedListener(this, this.OnDecisionAdded);
    CampaignEvents.KingdomDecisionCancelled.AddNonSerializedListener(this, this.OnDecisionCancelled);
}

private void OnDecisionAdded(KingdomDecision decision, bool isPlayerInvolved)
{
    AcceptCallToWarAgreementDecision callToWar = decision as AcceptCallToWarAgreementDecision;
    if (callToWar == null)
    {
        return;
    }

    TextObject reason;
    if (!callToWar.CanMakeDecision(out reason) && !reason.IsEmpty())
    {
        Debug.Print("call to war no longer decidable: " + reason.ToString(), 0);
    }
}
```

`as AcceptCallToWarAgreementDecision` 是安全的——`AcceptCallToWarAgreementDecision` 不是 sealed，但你只会收到基类派发过来的实例。`CanMakeDecision` 的 `out TextObject` 在成功时是 `TextObject.GetEmpty()` 而非 null，**所以必须用 `!reason.IsEmpty()` 而不是 `reason == null`**。

## 风险与边界

- **`ApplySecondaryEffects` 是空实现。** 本决议没有自己的后续效果；`GetSecondaryEffects` 返回的那句文案描述的是**基类**在决议结束后给支持者互相加关系的行为。**不要以为被选中结果本身带来额外奖励。**
- **`CalculateSupport` 没有 `override`。** 它是本类新增的便捷方法，只问「赞成方向」。**它不是基类接口的一部分**，而 `DetermineSupport(Clan, DecisionOutcome)` 才是。用 `CalculateSupport` 拿不到「反对方向」的分数。
- **`CallToWarCost` 在构造时定死。** 外交关系变化后重算需要 new 一个新决议实例。**不要缓存旧实例的 `CallToWarCost` 反复使用。**
- **`GetChosenOutcomeText` 忽略 `isShortVersion`。** 参数声明了但方法体八个分支全都没用它。**指望它返回短版本不会成功。**
- **`GetSecondaryEffects` 的文案是硬编码英文** `{=!}All supporters gains some relation with each other.`，`{=!}` 前缀表示不加本地化处理，且语法有误。**这是原文，不要当范例。**
- **`ShouldBeCancelledInternal` 与 `IsAllowed` 判的是不同东西。** 前者是「现在还能不能做这个决定」（会随外交变化而取消），后者是「一开始能不能提这个决议」。**混淆两者会导致你在已经作废的决议上做判断。**
- **`CanMakeDecision` 成功时返回空文本而非 null。** `reason = TextObject.GetEmpty();` ——**判 null 会走进「被拒绝」的分支**，那你就把四条都通过的合法决议当成非法处理了。用 `IsEmpty()`。
- **`AllianceCampaignBehavior` 是懒加载且可能为 null。** `Campaign.Current.GetCampaignBehavior<T>()` 返回「注册顺序里第一个匹配的」，扫不到返回 null。`ApplyChosenOutcome` 直接解引用它——**在一个精简战役里这会 NRE。**
- **四个决定性成员全是 `readonly`。** `CallingKingdom` / `KingdomToCallToWarAgainst` / `CallToWarCost` 外部都改不了。**想改条件只能 new 一个新决议。**
- **`DetermineSponsors` 允许提案者反对。** 反对侧走 `base.AssignDefaultSponsor(decisionOutcome)`，不是「无人支持」。**不要假设提案者一定在赞成阵营。**
- **两个领袖系数不对称。** `Valor` 两侧都是 ×20；`Calculating` 赞成侧 ×20、反对侧 ×10。**算票时别假设两边对称。**
- **`GetQueriedDecisionOutcome` 只找赞成方。** `FirstOrDefault(...)` 找不到就返回 null ——**在 `DetermineInitialCandidates` 之外（比如读旧存档时）可能返回 null。**
- **嵌套类在同一个文件里。** `AcceptCallToWarAgreementDecisionOutcome` 声明在 `AcceptCallToWarAgreementDecision.cs:319`，完整名是 `AcceptCallToWarAgreementDecision.AcceptCallToWarAgreementDecisionOutcome`，它的独立页面是 [AcceptCallToWarAgreementDecisionOutcome](../AcceptCallToWarAgreementDecisionOutcome)。

## 怎么用

### 怎么拿到它

它没有工厂，**只能 `new`**——构造函数是 `AcceptCallToWarAgreementDecision(Clan proposerClan, Kingdom callingKingdom, Kingdom kingdomToCallToWarAgainst)`，声明在 `TaleWorlds.CampaignSystem/Election/AcceptCallToWarAgreementDecision.cs:66`。参数顺序有严格含义：第一个是提案家族，第二个是**发起号召的盟友**，第三个是**要向之宣战的敌人**。注意构造函数体（`:70`）里已经算过一次代价：`this.CallToWarCost = Campaign.Current.Models.AllianceModel.GetCallToWarCost(callingKingdom, proposerClan.Kingdom, kingdomToCallToWarAgainst);`——**实例一诞生，代价就定死了**。

官方的生产者是外交行为。`TaleWorlds.CampaignSystem/CampaignBehaviors/AllianceCampaignBehavior.cs:140` 直接 `new` 之后在 `:141` 注册；地图通知确认路径走 `ConfirmCallToWarAgreementOffer`（`AllianceCampaignBehavior.cs:472`），同样在 `:474` `new`。注册动作是 `Kingdom.AddDecision(KingdomDecision kingdomDecision, bool ignoreInfluenceCost = false)`（`TaleWorlds.CampaignSystem/Kingdom.cs:1001`）。

### 典型用法

自己提一个决议：先问 `IsAllowed()`，再注册，然后读代价和票数。

```csharp
using TaleWorlds.CampaignSystem;
using TaleWorlds.CampaignSystem.Election;

public static class ForcedCallToWar
{
    public static void Propose(Kingdom callingKingdom, Kingdom targetKingdom)
    {
        Kingdom playerKingdom = Clan.PlayerClan.Kingdom;

        // 参数顺序：提案家族 / 发起号召的盟友 / 要打的敌人。
        var decision = new AcceptCallToWarAgreementDecision(
            Clan.PlayerClan, callingKingdom, targetKingdom);

        // IsAllowed 判的是"能不能提"，不是"现在还能不能做"。三个条件全是外交状态。
        if (!decision.IsAllowed())
        {
            return;
        }

        // 第二个参数 true = 免掉提案影响力花费。官方两处都传 true。
        playerKingdom.AddDecision(decision, true);

        // CallToWarCost 在构造时就已定，不要指望它随外交关系变化。
        int cost = decision.CallToWarCost;

        // CalculateSupport 只给"赞成方向"打分；反对方向要用 DetermineSupport(clan, outcome)。
        DecisionOutcome accept = decision.DetermineInitialCandidates().First();
        float support = decision.DetermineSupport(Clan.PlayerClan, accept);
    }
}
```

签名核对：`CanMakeDecision` 成功时 `reason` 是 `TextObject.GetEmpty()` 而不是 `null`，要用 `IsEmpty()` 判；`Kingdom.RemoveDecision(KingdomDecision kingdomDecision)` 在 `TaleWorlds.CampaignSystem/Kingdom.cs:1029`，可以先把同类型旧决议删掉。

### 最容易踩的坑

**注册时忘了第二个参数，影响力会被真扣。**

`AddDecision` 的第二个参数默认值是 `false`。`TaleWorlds.CampaignSystem/Kingdom.cs:1003` 的分支是 `if (!ignoreInfluenceCost)`，进去以后 `Kingdom.cs:1006` 取 `kingdomDecision.GetInfluenceCost(proposerClan)`，`Kingdom.cs:1007` 直接 `ChangeClanInfluenceAction.Apply(proposerClan, -(float)influenceCost)`。而 `GetInfluenceCost`（`TaleWorlds.CampaignSystem/Election/KingdomDecision.cs:151`）两个分支都返回 `GetProposalInfluenceCost()`——在本决议里就是 `Campaign.Current.Models.AllianceModel.GetInfluenceCostOfCallingToWar(base.ProposerClan)`（`AcceptCallToWarAgreementDecision.cs:82`）。

官方两处注册都显式传 `true`：`AllianceCampaignBehavior.cs:141` 和同文件的 `:468`。这不是疏忽，是因为这两条决议是**由盟友的号召或玩家的地图通知触发的**，提案方不是玩家意愿的产物。

后果写得很具体：你写 `kingdom.AddDecision(decision);`（等价于传 `false`），玩家的家族影响力会当场被扣掉一大截，而玩家根本没有主动提议过；影响力不够时这笔扣除照样发生，`AddDecision` 不检查余额，只在 `Kingdom.cs:1003` 之外做派发，于是玩家看到一个自己没提议、还倒扣了影响力的决议。反过来，若你的 mod 就是想模拟"玩家主动提议"，那才应该传 `false`，并提前用 `decision.GetProposalInfluenceCost()` 检查 `Clan.PlayerClan.Influence`。

## 跨版本提示

`AcceptCallToWarAgreementDecision` 的 public 表面在 `bannerlord-1.3.0/`、`bannerlord-1.3.15/`、`bannerlord-1.4.6/`、`bannerlord-1.4.7/`、`bannerlord-1.5.3/` 五棵树里**高度稳定**：同样 14 个 `public override` 成员、同样三个 `readonly Kingdom`/`int` 字段、同一个懒加载的 `AllianceCampaignBehavior` 属性。跨三个大版本没有签名级变化。

**变的是它读的那些模型。** `AllianceModel.GetCallToWarCost` / `GetInfluenceCostOfCallingToWar` / `GetScoreOfJoiningWar` / `DurationForOffers` 这几个方法的签名在后续版本有过调整；`DefaultTraits` 的 `Valor` / `Calculating` 特质在 1.5 引入的蒸汽机产业系统里与产业等级产生了联动。

对 mod 作者的实际含义：**如果你订阅 `CampaignEvents.OnCallToWarAgreementStartedEvent` / `OnCallToWarAgreementEndedEvent`（都是 `IMbEvent<Kingdom, Kingdom, Kingdom>`），那才是跨版本最可能变动的地方**；而这个决议类本身的 `IsAllowed()` / `ApplyChosenOutcome()` 形状基本不会变。

另外 `IAllianceCampaignBehavior` 是个接口，**模数可以提供自己的实现并通过 `GetCampaignBehavior<IAllianceCampaignBehavior>()` 抢在官方之前注册**——由于 `CampaignBehaviorManager.GetBehavior<T>()` 是 `FirstOrDefault`（先注册者赢），**这是少数几个 mod 能「先到先得」的控制点之一**。

## 依赖关系

- 基类：[KingdomDecision](../KingdomDecision) 提供 `ProposerClan`（`[SaveableProperty(4)]`）/ `Kingdom` / `SupportStatus`（`Equal` / `Majority` / `Minority` 三个值）/ `AssignDefaultSponsor` / `IsSingleClanDecision` / `ShouldBeCancelledInternal` 的默认实现。**注意 `Kingdom` 是一个回退属性：`return this._kingdom ?? this.ProposerClan.Kingdom;`** ——内部 `_kingdom` 为 null 时回落到提案者的王国。`SetSponsor` 不在基类上，它属于 [DecisionOutcome](../DecisionOutcome)（`DecisionOutcome.cs:134`）。
- 嵌套结果类：[AcceptCallToWarAgreementDecisionOutcome](../AcceptCallToWarAgreementDecisionOutcome) 定义于同一文件 `:319`，`DetermineInitialCandidates` / `DetermineSupport` / `ApplyChosenOutcome` / `GetQueriedDecisionOutcome` 都对它做硬转型
- 结果基类：[DecisionOutcome](../DecisionOutcome) 提供 `SponsorClan` 与四个文案成员
- 执行方：[IAllianceCampaignBehavior](../IAllianceCampaignBehavior) 的 `StartCallToWarAgreement(Kingdom, Kingdom, Kingdom, int, bool)` 是本决议唯一真正改变游戏状态的调用；[AllianceCampaignBehavior](../AllianceCampaignBehavior) 是它的官方实现
- 规则来源：[AllianceModel](../AllianceModel) 提供 `GetCallToWarCost` / `GetInfluenceCostOfCallingToWar` / `GetScoreOfJoiningWar`；槽位在 [GameModels](../GameModels) 的 `AllianceModel` 属性
- 事件：[CampaignEvents](../CampaignEvents) 的 `KingdomDecisionAdded` / `KingdomDecisionCancelled` / `KingdomDecisionConcluded` 与 `OnCallToWarAgreementStartedEvent` / `OnCallToWarAgreementEndedEvent`
- 派发端：[CampaignEventDispatcher](../CampaignEventDispatcher) 的单例方法；兄弟决议如 [ProposeCallToWarAgreementDecision](../ProposeCallToWarAgreementDecision) 与 [StartAllianceDecision](../StartAllianceDecision)
- 文本：[TextObject](../../localization/TextObject) 的 `SetTextVariable` / `SetCharacterProperties` / `GetEmpty` / `IsEmpty`，[GameTexts](../../core-extra/GameTexts) 的 `FindText("str_faction_ruler_name_with_title", ...)`
- 桶首页：[campaign API 分区](../)