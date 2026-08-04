---
title: "DeclareWarAction"
description: "把两个真实 Campaign 派系的外交关系切换为战争，记录宣战原因并同步王国政治停滞、地图可见性和 WarDeclared 事件。"
---
# DeclareWarAction

**Namespace:** `TaleWorlds.CampaignSystem.Actions`  
**Module:** `TaleWorlds.CampaignSystem`  
**Type:** `public static class DeclareWarAction`  
**Base:** none (static class)  
**Source:** `bin/TaleWorlds.CampaignSystem/TaleWorlds.CampaignSystem.Actions/DeclareWarAction.cs`

## 一句话职责

用一个明确的 `DeclareWarDetail` 原因，把两个当前 Campaign 持有的 `IFaction` 外交状态改为战争，同时更新王国政治停滞和玩家地图视觉缓存，并让依赖 `WarDeclared` 的战役系统看到带有正确来源的一次变更。

## 心智模型

这是 Campaign 层的**外交状态 Action**。公开的 `ApplyBy*` 方法把原因映射到私有 `ApplyInternal`；内部先调用 `FactionManager.DeclareWar(faction1, faction2)`，再按双方领地数量调整王国的 `PoliticalStagnation`，在战争涉及玩家派系时刷新敌方可见 Settlement 和 MobileParty 的视觉缓存，最后通过 `CampaignEventDispatcher` 派发 `CampaignEvents.WarDeclared`。

它不负责判断“是否应该开战”、计算政治代价、给出战争评分或通过王国决议。那些属于 [DiplomacyModel](../../campaign/DiplomacyModel)、[GameModelsManager](../../core-extra/GameModelsManager/)、[DeclareWarDecision](../../campaign/DeclareWarDecision) 或 Barterable 的上游职责。只有在上游已做出决定、两个派系都属于当前 Campaign 且关系应立即改变时，才调用本 Action。

## 依赖与事件级联

```text
Campaign.Current
  -> IFaction / Kingdom / Clan
  -> DeclareWarAction.ApplyBy*
      -> FactionManager.DeclareWar
      -> Kingdom.PoliticalStagnation / visible Settlement + MobileParty visuals
      -> CampaignEventDispatcher.OnWarDeclared
          -> CampaignEvents.WarDeclared
          -> KingdomManager / quest and diplomacy listeners
```

- **上游状态：** [Campaign](../../campaign/Campaign) 必须已经建立外交管理器和事件分发器；[Kingdom](../../campaign/Kingdom) 与 [Clan](../../campaign/Clan) 都实现 `IFaction` 的战役派系语义。
- **状态写入：** [FactionManager](../../campaign/FactionManager) 更新派系战争关系；王国的 `PoliticalStagnation` 和玩家战争双方的地图视觉缓存由本 Action 直接更新。
- **下游事件：** [CampaignEvents](../../campaign/CampaignEvents) 的 `WarDeclared` 是 `IMbEvent<IFaction, IFaction, DeclareWarAction.DeclareWarDetail>`；[CampaignEventReceiver](../../campaign/CampaignEventReceiver) 和 [CampaignEventDispatcher](../../campaign/CampaignEventDispatcher) 负责接收和传播它。
- **相邻状态 Action：** [ChangeKingdomAction](../ChangeKingdomAction) 在叛乱或王国消亡清理时会调用本 Action；离开或战争收束时可能反向调用 [MakePeaceAction](../MakePeaceAction)。
- **规则计算：** [FactionHelper](../../system/FactionHelper) 提供可宣战派系筛选等帮助；`Campaign.Current.Models.DiplomacyModel` 提供宣战评分和恒定战争判断。它们不替代 `FactionManager.DeclareWar` 的实际关系写入。

## 内部契约与原因枚举

`ApplyInternal` 是私有实现，没有公共无原因 `Apply`。所有入口都立即执行同一状态变更流程，只是给事件监听器不同的 `DeclareWarDetail`：

| 入口 | `DeclareWarDetail` | 真实来源或语义 |
|---|---|---|
| `ApplyByDefault(IFaction, IFaction)` | `Default` | 没有更具体来源的系统级宣战；离开王国后的补充宣战、Barterable 和作弊入口使用它。 |
| `ApplyByPlayerHostility(IFaction, IFaction)` | `CausedByPlayerHostility` | 玩家敌意导致的战争；`BeHostileAction`、对话和 Issue 行为使用它。 |
| `ApplyByKingdomDecision(IFaction, IFaction)` | `CausedByKingdomDecision` | [DeclareWarDecision](../../campaign/DeclareWarDecision) 的决议结果为宣战时使用。 |
| `ApplyByRebellion(IFaction, IFaction)` | `CausedByRebellion` | 叛乱行为和 [ChangeKingdomAction](../ChangeKingdomAction) 的叛乱离开分支使用。 |
| `ApplyByCrimeRatingChange(IFaction, IFaction)` | `CausedByCrimeRatingChange` | [ChangeCrimeRatingAction](../ChangeCrimeRatingAction) 使犯罪评级达到宣战条件时使用。 |
| `ApplyByKingdomCreation(IFaction, IFaction)` | `CausedByKingdomCreation` | [KingdomManager](../../campaign/KingdomManager) 创建新王国后，对其原有敌对派系补发宣战。 |
| `ApplyByClaimOnThrone(IFaction, IFaction)` | `CausedByClaimOnThrone` | 王位主张导致的宣战来源标记；监听器可据此区别普通宣战。 |
| `ApplyByCallToWarAgreement(IFaction, IFaction)` | `CausedByCallToWarAgreement` | [AllianceCampaignBehavior](../../campaign/AllianceCampaignBehavior) 履行 Call To War agreement 时使用。 |

`faction1` 是宣战方，`faction2` 是被宣战方；这个方向会原样进入 `FactionManager.DeclareWar` 和 `WarDeclared` 事件。Action 没有返回成功/失败，也没有回滚或通知开关。

## 状态变更顺序

源码顺序决定了监听器能观察到什么：

1. `FactionManager.DeclareWar(faction1, faction2)` 先建立战争关系。
2. 如果某一方是王国，且另一方的 Fiefs 数量超过源码阈值，相关王国的 `PoliticalStagnation` 会按 `0.85 * current - 3` 调整并钳制到零以上。
3. 如果任一方是 `Hero.MainHero.MapFaction`，对手的可见 Settlement 和 MobileParty 会调用 `SetVisualAsDirty()`。
4. `CampaignEventDispatcher.Instance.OnWarDeclared` 派发 `WarDeclared`，参数包含两方和原因枚举。

因此，`WarDeclared` 监听器运行时已经可以读取新的战争关系和更新后的王国停滞值。比如 [KingdomManager](../../campaign/KingdomManager) 的监听器会提高宣战方的 `Aggressiveness`，Issue 和 Quest 行为会依据 `DeclareWarDetail` 取消或失败相关任务。

## Model 与 Action 的边界

当需求是“判断能否宣战”或“比较哪一场战争更合理”时，先使用 Model 或 Helper：

- `Campaign.Current.Models.DiplomacyModel.GetScoreOfDeclaringWar` 计算宣战评分和解释；`DeclareWarBarterable` 的真实 `GetUnitValueForFaction` 实现就是这样取得分数的。
- `FactionHelper.GetPossibleKingdomsToDeclareWar(kingdom)` 取得候选王国；其结果仍需结合当前外交状态和游戏流程判断。
- `DeclareWarDecision.ApplyChosenOutcome` 在决议结果确认为宣战后才调用 `ApplyByKingdomDecision`。

当需求是“现在把这两个派系变成敌对关系”时，才调用本 Action。不要为了改变评分去调用 Action，也不要直接改 `StanceLink`、战争列表或 `Kingdom.PoliticalStagnation`；直接写字段会绕过事件、地图视觉刷新和下游 Behavior。

## 真实获取路径

### 通过当前 Campaign 的派系宣战

`Clan.PlayerClan.MapFaction`、`Kingdom.All` 和 `IsAtWarWith` 是真实的战役获取路径。调用前先排除无效目标和已有战争，再使用与原因相符的入口：

```csharp
using System.Linq;
using TaleWorlds.CampaignSystem;
using TaleWorlds.CampaignSystem.Actions;

public void DeclareWarForPlayerHostility()
{
    if (Campaign.Current == null)
    {
        return;
    }

    IFaction declaringFaction = Clan.PlayerClan.MapFaction;
    IFaction targetFaction = Kingdom.All.FirstOrDefault(kingdom =>
        kingdom != declaringFaction && !kingdom.IsEliminated);

    if (targetFaction != null && !declaringFaction.IsAtWarWith(targetFaction))
    {
        DeclareWarAction.ApplyByPlayerHostility(
            declaringFaction, targetFaction);
    }
}
```

这个调用不会替代玩家敌意、王国决议或外交评分流程；示例假设调用者已经完成了这些上游判断，并只展示如何从当前 Campaign 获得真实派系。

### 在 Behavior 中接收战争原因

mod 的长期逻辑应订阅静态 `CampaignEvents`，而不是直接构造 `CampaignEventReceiver`：

```csharp
using TaleWorlds.Library;

public override void RegisterEvents()
{
    CampaignEvents.WarDeclared.AddNonSerializedListener(
        this, OnWarDeclared);
}

private void OnWarDeclared(
    IFaction faction1,
    IFaction faction2,
    DeclareWarAction.DeclareWarDetail detail)
{
    if (detail == DeclareWarAction.DeclareWarDetail.CausedByKingdomDecision)
    {
        InformationManager.DisplayMessage(
            new InformationMessage("A kingdom decision started a war."));
    }
}
```

`RegisterEvents()` 必须由处于战役生命周期中的 [CampaignBehaviorBase](../../campaign/CampaignBehaviorBase) 调用；事件订阅关系不是存档字段，Behavior 移除时也应沿其 owner 生命周期清理。

## 风险与一致性边界

- **不要直接改战争关系：** `FactionManager.DeclareWar` 之外的手写 stance 或列表修改会漏掉 PoliticalStagnation、玩家对手的视觉缓存和 `WarDeclared` 事件，导致 Campaign、地图和 UI 看到不同状态。
- **关系前置条件：** 源码 Action 不返回结果，也不提供“已经在战争中”的保护层。调用者应确保两方是当前 Campaign 的有效 `IFaction`、不是同一派系，并避免重复宣战；否则可能产生重复事件或下游逻辑无法处理的关系。
- **事件会级联：** `WarDeclared` 会触发 [KingdomManager](../../campaign/KingdomManager)、Quest、Issue 和其他 Behavior。不要在监听器中无条件再次宣战或同步触发相反外交动作，避免重入和关系振荡。
- **原因不是装饰：** `DeclareWarDetail` 会被任务、日志、外交行为用来判断战争来源。选错 `ApplyBy*` 不一定阻止战争，却会让后续行为把玩家敌意误判为决议、叛乱误判为默认战争等。
- **Model 不是事务：** Model 返回评分或规则解释，不会替你写关系；反过来也不要用 Action 试探评分。先完成决策，再一次性调用 Action。
- **时机与存档：** `FactionManager`、`CampaignEventDispatcher` 和派系对象必须已初始化。不要在读档尚未完成、保存正在写入，或王国/家族正在被销毁的中间阶段调用；战争关系、停滞值和事件结果都可能被存入或影响后续存档。
- **地图事件与视觉：** 本 Action 只刷新可见敌方 Settlement 和 MobileParty 的视觉 dirty 标记，不会替你结束正在进行的 MapEvent。不要把它当作战斗结算或和平流程的替代品；结束战争应使用 [MakePeaceAction](../MakePeaceAction)。

## 导航

- **↑ Parent:** [Campaign extension API index](../) · [Campaign system](../../campaign/)
- **↔ Siblings:** [ChangeKingdomAction](../ChangeKingdomAction) · [MakePeaceAction](../MakePeaceAction) · [ChangeCrimeRatingAction](../ChangeCrimeRatingAction)
- **Related leaves:** [Campaign](../../campaign/Campaign) · [FactionManager](../../campaign/FactionManager) · [Kingdom](../../campaign/Kingdom) · [Clan](../../campaign/Clan) · [CampaignEvents](../../campaign/CampaignEvents) · [DiplomacyModel](../../campaign/DiplomacyModel) · [DeclareWarDecision](../../campaign/DeclareWarDecision) · [MakePeaceAction](../MakePeaceAction)
