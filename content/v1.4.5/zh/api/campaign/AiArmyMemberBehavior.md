---
title: "AiArmyMemberBehavior"
description: "军团成员聚合行为：在每次 AI 小时 tick 中为非领袖的军团成员计算“追赶/跟随军团领袖”的意愿得分（EscortParty 候选），并在围城开始时让被围定居点内的领主方原地待命，维持军团不散。"
---

# AiArmyMemberBehavior

**命名空间：** TaleWorlds.CampaignSystem.CampaignBehaviors.AiBehaviors
**模块：** TaleWorlds.CampaignSystem
**类型：** public class AiArmyMemberBehavior : CampaignBehaviorBase
**源文件：** Bannerlord.Source/bin/TaleWorlds.CampaignSystem/TaleWorlds.CampaignSystem.CampaignBehaviors.AiBehaviors/AiArmyMemberBehavior.cs

## 概述

`AiArmyMemberBehavior` 保证一支 [Army](../Army) 的“非领袖成员”会聚拢到领袖身旁。它在每次 `AiHourlyTick` 中，对非领袖的军团成员计算一个 `EscortParty`（跟随领袖）候选得分——得分高低取决于该成员离领袖的距离、食物是否充足、规模是否达到“征召入军”的阈值；若领袖当前被围且不可达，则给一个极低的“领袖不可达”保底分。最终是否真的去跟随，由 [AiPartyThinkBehavior](../AiPartyThinkBehavior) 汇总裁决。此外它监听 `OnSiegeEventStartedEvent`，让被围定居点里的领主方原地待命（避免它们冲出围城）。

## 心智模型

它是 `CampaignBehaviorBase`，由引擎在战役初始化时 `AddBehavior` 注册。与 [AiMilitaryBehavior](../AiMilitaryBehavior)、[AiEngagePartyBehavior](../AiEngagePartyBehavior) 一样只监听 `CampaignEvents.AiHourlyTickEvent` 贡献候选，该事件由 [AiPartyThinkBehavior](../AiPartyThinkBehavior) 派发；它不移动任何方、无状态、不序列化（`SyncData` 空）。其评分依赖 `Campaign.Current.Models.ArmyManagementCalculationModel`（入军规模比、最低食物天数阈值）与距离工具，因此仅在战役运行期有效。它的存在意义是“粘合剂”——没有它，军团成员会各自按军事/交战逻辑散开，军团无法集结。

## 何时使用 / 何时不要使用

- **使用**：要理解“军团为何能聚到一起”时读其 `AiHourlyTick`；若要调整成员追随力度，可仿照它监听 `AiHourlyTickEvent` 并修改 `EscortParty` 候选得分。
- **不要使用**：不要在本行为里直接调 `SetMoveXxx` 去把成员拽到领袖身边——候选会被 [AiPartyThinkBehavior](../AiPartyThinkBehavior) 覆盖；应走 `PartyThinkParams.AddBehaviorScore`。不要假设 `Campaign.Current.Models.ArmyManagementCalculationModel` 或 `mobileParty.Army` 非空——见风险。也不要把“`EscortParty` 候选存在”等同于“成员一定跟随领袖”，最终由汇总裁决，且领袖方自身的意图可能压过。

## 依赖图

上游类型与系统：

- [Campaign](../Campaign) —— 提供 `Campaign.Current.Models.ArmyManagementCalculationModel`、`GetAverageDistanceBetweenClosestTwoTownsWithNavigationType`。
- [CampaignEvents](../CampaignEvents) —— 订阅 `AiHourlyTickEvent`（核心）、`OnSiegeEventStartedEvent`。
- [CampaignEventDispatcher](../CampaignEventDispatcher) —— `AiHourlyTick` 事件派发者（[AiPartyThinkBehavior](../AiPartyThinkBehavior)）。
- [ArmyManagementCalculationModel](../ArmyManagementCalculationModel) —— 取 `PlayerMobilePartySizeRatioToCallToArmy` / `AIMobilePartySizeRatioToCallToArmy` / `MinimumNeededFoodInDaysToCallToArmy`。

下游与协同系统（被调用 / 写入）：

- [AiPartyThinkBehavior](../AiPartyThinkBehavior) —— 派发事件并消费候选（落地为 `EscortParty` 跟随领袖）。
- [AiMilitaryBehavior](../AiMilitaryBehavior) / [AiEngagePartyBehavior](../AiEngagePartyBehavior) —— 同类候选贡献者，共享 `PartyThinkParams`。
- [PartyThinkParams](../PartyThinkParams) —— 通过 `AddBehaviorScore` 累加候选。
- [AIBehaviorData](../AIBehaviorData) —— 候选载体，固定为 `AiBehavior.EscortParty`、目标为 `mobileParty.Army.LeaderParty`。
- [MobileParty](../MobileParty) / [MobilePartyAI](../MobilePartyAi) —— 读 `Army`、`LeaderParty`、`CurrentSettlement`、`HasNavalNavigationCapability`、食物天数、规模比。
- [Army](../Army) —— 读 `LeaderParty`、被围状态。
- [SiegeEvent](../SiegeEvent) —— `OnSiegeEventStarted` 时让被围定居点内领主方 `SetMoveModeHold`。
- [AiHelper](../../campaign-ext/AiHelper) —— 计算到领袖/定居点的最佳导航类型与距离。

## 风险

- **null 守卫不足**：`AiHourlyTick` 开头用 `mobileParty.Army == null` 早退，但后续大量读取 `mobileParty.Army.LeaderParty`、`LeaderParty.CurrentSettlement.SiegeEvent` 等；自定义扩展若去掉早退或改动条件，会触发空引用。
- **假设 `Campaign.Current.Models.ArmyManagementCalculationModel` 非空**：在战役未启动/读档前调用会崩溃；且模型阈值由模组可替换，依赖其返回合理值。
- **在 tick 内直接改方状态**：`OnSiegeEventStarted` 直接对 `Parties[i].SetMoveModeHold()` 改移动；若与同一 tick 的 [AiPartyThinkBehavior](../AiPartyThinkBehavior) 落地竞争会抖动。
- **估值常量写死**：`FollowingArmyLeaderMaxScore=20`、`FollowingArmyLeaderMinScore=10`、`ArmyLeaderIsUnreachableScore≈0.02475` 是私有常量；改动会整体改变成员追随强度，需同步考虑军团集结/解散节奏。

## 成员说明

### 事件注册与生命周期

- **`RegisterEvents()`**
  - 用途：订阅 `AiHourlyTickEvent`（核心评分）与 `OnSiegeEventStartedEvent`（让被围方待命）。
  - 副作用：仅注册监听。调用时机：注册时一次。

- **`SyncData(IDataStore dataStore)`**
  - 用途：无状态，空实现。
  - 副作用：无。调用时机：存档/读档。

- **`OnSiegeEventStarted(SiegeEvent siegeEvent)`**
  - 用途：围城开始时，遍历被围定居点内的所有领主方，调用 `SetMoveModeHold()` 让它们原地待命（防止冲出围城）。
  - 副作用：直接改相关方移动。调用时机：`OnSiegeEventStartedEvent`。

### 核心评估：成员追随领袖

- **`AiHourlyTick(MobileParty mobileParty, PartyThinkParams p)`**
  - 用途：核心评分。早退条件：本方非军团成员、是领袖方、或（未附庸且领袖正被围且本方便捷/本方便被围）——这些情况下无需贡献跟随候选。否则计算到领袖的最佳导航类型与距离；若方食物天数不足阈值或规模比低于“征召入军”比例，则把得分降到 `MinScore` 并按距离额外衰减；最终以 `AiBehavior.EscortParty`、目标为 `LeaderParty` 把候选 `AddBehaviorScore` 进 `p`。若到领袖的导航类型为 `None`（不可达），则给一个极低的 `ArmyLeaderIsUnreachableScore` 保底候选。
  - 副作用：仅向 `p` 累加候选；不改移动。调用时机：`AiHourlyTickEvent` 派发时（由 [AiPartyThinkBehavior](../AiPartyThinkBehavior) 驱动）。

### 内部常量（私有，理解用）

- **`FollowingArmyLeaderMaxScore` (20) / `FollowingArmyLeaderMinScore` (10)**
  - 用途：成员追随领袖的得分上/下限；食物或规模不达标时落到下限并按距离衰减。
- **`ArmyLeaderIsUnreachableScore` (≈0.02475)**
  - 用途：领袖完全不可达时的保底分，确保仍有一个微弱“跟随”意图而非彻底失联。

## 示例

读取一个军团成员是否被本行为驱动去跟随领袖（结果体现在默认/短行为上，只读）：

```csharp
MobileParty member = someArmyMember;
if (member.Army != null && member.Army.LeaderParty != member)
{
    // 该成员由 AiArmyMemberBehavior 贡献 EscortParty 候选，最终由汇总裁决是否跟随
    MobileParty leader = member.Army.LeaderParty;
}
```

理解“成员为何暂时不积极跟随”：食物或规模不足会显著降低追随分（对应源码中的 MinScore 路径）：

```csharp
MobileParty member = someArmyMember;
if (member.Army != null && member.Army.LeaderParty != member)
{
    float minFood = Campaign.Current.Models.ArmyManagementCalculationModel.MinimumNeededFoodInDaysToCallToArmy;
    int daysOfFood = member.GetNumDaysForFoodToLast();
    bool weakFollow = daysOfFood < minFood; // 食物不足 → 追随得分被压低
}
```

## 怎么用

### 怎么拿到它

**源文件：** `bannerlord-1.4.5/Bannerlord.Source/bin/TaleWorlds.CampaignSystem/TaleWorlds.CampaignSystem.CampaignBehaviors.AiBehaviors/AiArmyMemberBehavior.cs`（全文 97 行）。
**入口：** `CampaignGameStarter.RegisterCampaignBehaviors()` → `CampaignBehaviors.AddBehavior(new AiArmyMemberBehavior())`；生效后由 `CampaignEvents.AiHourlyTickEvent` 自动驱动。

**它不是你调用的东西，是它挂在 `AiHourlyTickEvent` 上自己跑的。** `RegisterEvents`（`AiArmyMemberBehavior.cs:16`）只注册两件事：`CampaignEvents.AiHourlyTickEvent` → `AiHourlyTick`（`AiArmyMemberBehavior.cs:18`）与 `CampaignEvents.OnSiegeEventStartedEvent` → `OnSiegeEventStarted`（`AiArmyMemberBehavior.cs:19`），两者都是 `AddNonSerializedListener`（**读档后不重放**）。`SyncData` 是空的（`AiArmyMemberBehavior.cs:22`），**它不持有任何存档状态**。

要让它生效，走 Campaign Game Starter 的标准 behavior 注册，而不是手工 `new`：

```csharp
public class MyArmyMemberBehaviors : CampaignGameStarter
{
    public override void RegisterCampaignBehaviors()
    {
        CampaignBehaviors.AddBehavior(new AiArmyMemberBehavior());
        base.RegisterCampaignBehaviors();
    }
}
```

**注意它注册的是 `OnSiegeEventStartedEvent` 而不是围城结束事件。** `OnSiegeEventStarted`（`:26`）只做一件事：遍历 `siegeEvent.BesiegedSettlement.Parties`（`:28`），对每个 `IsLordParty` 的队伍调 `SetMoveModeHold()`（`:32`）。**它不解除这个 hold**，解除要靠围城结束时的行为层。

### 典型用法

它的核心是 `AiHourlyTick(MobileParty mobileParty, PartyThinkParams p)`（`:37`）——**签名不是无参事件处理，而是往 `p` 里塞候选**。`p.AddBehaviorScore((item, item2))`（`:88`）是它唯一的输出通道。

评分有三档。满分档 `FollowingArmyLeaderMaxScore = 20f`（`:10`），保底档 `FollowingArmyLeaderMinScore = 20f * 0.5f`（`:12`）。当队伍食物不足或规模不够时（`:77`）降到保底档，并按 `GetAverageDistanceBetweenClosestTwoTownsWithNavigationType` 的一半再乘一个钳制系数（`:80`-`:83`）。**领袖完全不可达时给的是第三档 `0.02475f`（`:14`）——比保底低两个数量级，是「几乎不参与竞争」而不是「不参与」。**

三个估值常量全是私有属性，**没有 Model 接口可以替换**，所以 mod 想改追随强度只有两条路：换掉 `Campaign.Current.Models.ArmyManagementCalculationModel` 的阈值（`:76`-`:77`），或整个换掉本 behavior：

```csharp
public static class ArmyMemberFollowProbe
{
    public static void Report(MobileParty member)
    {
        if (member.Army == null || member.Army.LeaderParty == member)
        {
            Debug.Print(member.Name + " is not a followable member", 0);
            return;
        }
        float ratio = member.PartySizeRatio;
        float need = member.Army.LeaderParty.IsMainParty
            ? Campaign.Current.Models.ArmyManagementCalculationModel.PlayerMobilePartySizeRatioToCallToArmy
            : Campaign.Current.Models.ArmyManagementCalculationModel.AIMobilePartySizeRatioToCallToArmy;
        Debug.Print(member.Name + " ratio=" + ratio + " need=" + need, 0);
        Debug.Print("foodDays=" + member.GetNumDaysForFoodToLast() + " willFollowHard=" + (ratio >= need), 0);
    }
}
```

`:77` 的判断把两个条件写在一起：`GetNumDaysForFoodToLast() < MinimumNeededFoodInDaysToCallToArmy || PartySizeRatio < num4`。**两个条件是「或」，任一不满足就掉到保底档。** 而 `num4` 本身是分岔的：领袖是主队时用 `PlayerMobilePartySizeRatioToCallToArmy`，否则用 `AIMobilePartySizeRatioToCallToArmy`（`:76`）。

`:86` 与 `:92` 构造的两条 `AIBehaviorData` 都传 `willGatherArmy: false`——**这个行为从不贡献集结候选，只贡献跟随。**

### 最容易踩的坑

**null 守卫不足**：`AiHourlyTick` 开头用 `mobileParty.Army == null` 早退，但后续大量读取 `mobileParty.Army.LeaderParty`、`LeaderParty.CurrentSettlement.SiegeEvent` 等；自定义扩展若去掉早退或改动条件，会触发空引用。

## 参见

- ↑ 父级：[战役 API 索引](../)
- ↔ 相关：[AiBehavior](../AiBehavior) · [AiMilitaryBehavior](../AiMilitaryBehavior) · [AiPartyThinkBehavior](../AiPartyThinkBehavior) · [AiEngagePartyBehavior](../AiEngagePartyBehavior) · [AIBehaviorData](../AIBehaviorData) · [MobileParty](../MobileParty) · [MobilePartyAI](../MobilePartyAi) · [Army](../Army) · [CampaignEvents](../CampaignEvents) · [PartyThinkParams](../PartyThinkParams) · [ArmyManagementCalculationModel](../ArmyManagementCalculationModel) · [SiegeEvent](../SiegeEvent) · [MobilePartyAIModel](../MobilePartyAIModel) · [AiHelper](../../campaign-ext/AiHelper)
