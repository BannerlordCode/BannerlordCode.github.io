---
title: "ChangeKingdomAction"
description: "用带有明确原因的 Action 安全处理 Clan 加入、脱离、叛乱、佣兵服务和王国创建关联，同时同步战争、领地与战役事件。"
---
# ChangeKingdomAction

**Namespace:** `TaleWorlds.CampaignSystem.Actions`  
**Module:** `TaleWorlds.CampaignSystem`  
**Type:** `public static class ChangeKingdomAction`  
**Base:** none (static class)  
**Source:** `bin/TaleWorlds.CampaignSystem/TaleWorlds.CampaignSystem.Actions/ChangeKingdomAction.cs`

## 一句话职责

把一个 `Clan` 从当前王国关系切换到目标王国、独立状态或佣兵服务，并按切换原因同步派系关系、领地归属、佣兵合同、部队状态、地图视觉和 Campaign 事件，使读档后仍能沿同一套世界状态链继续运行。

## 心智模型

这是 Campaign 层的**世界状态 Action**，不是只给 `clan.Kingdom` 赋值的 setter。它读取调用前的 `clan.Kingdom` 作为旧王国，在一次调用中清零 `DebtToKingdom`，设置或清除 `ShouldStayInKingdomUntil`，再按 `ChangeKingdomActionDetail` 选择加入、离开、叛乱或佣兵分支。分支可能继续调用 `StartMercenaryServiceAction`、`EndMercenaryServiceAction`、`MakePeaceAction`、`DeclareWarAction`、`ChangeOwnerOfSettlementAction` 和 `ChangeRulingClanAction`，最后由 `CampaignEventDispatcher` 派发 `OnClanChangedKingdom`；叛变加入还会随后派发 `OnClanDefected`。

调用者应在战役已经初始化、相关 `Clan` 和 `Kingdom` 已由当前 Campaign 持有时使用它。不要在读档中途、Campaign 事件分发器尚未建立时，或为了临时预览规则时调用。预览加入资格、佣兵奖励或外交结果应读取 [GameModelsManager](../../core-extra/GameModelsManager/)、[DiplomacyModel](../../campaign/DiplomacyModel) 或对应 Barterable；真正改变世界关系才调用本 Action。

## 依赖与事件级联

```text
Campaign.Current
  -> Clan / Kingdom
  -> ChangeKingdomAction.ApplyBy*
      -> FactionHelper / StartMercenaryServiceAction / EndMercenaryServiceAction
      -> MakePeaceAction / DeclareWarAction / ChangeOwnerOfSettlementAction
      -> CampaignEventDispatcher
          -> CampaignEvents.OnClanChangedKingdomEvent
          -> CampaignEvents.OnClanDefectedEvent (only after defection)
```

- **上游状态：** [Campaign](../../campaign/Campaign) 持有当前战役；[Clan](../../campaign/Clan) 提供 `Kingdom`、佣兵状态、领地和战团；[Kingdom](../../campaign/Kingdom) 提供统治家族、敌对派系和领地集合。
- **直接下游：** [CampaignEvents](../../campaign/CampaignEvents) 发布两个事件；[CampaignEventReceiver](../../campaign/CampaignEventReceiver) 和 [CampaignEventDispatcher](../../campaign/CampaignEventDispatcher) 负责把回调送到已注册的接收者。
- **联动 Action：** 佣兵分支依赖 [StartMercenaryServiceAction](../StartMercenaryServiceAction) / [EndMercenaryServiceAction](../EndMercenaryServiceAction)；离开时可能调用 [MakePeaceAction](../MakePeaceAction)、[DeclareWarAction](../DeclareWarAction) 和 [ChangeOwnerOfSettlementAction](../ChangeOwnerOfSettlementAction)；创建王国时使用 [ChangeRulingClanAction](../ChangeRulingClanAction)。
- **规则边界：** `Campaign.Current.Models.DiplomacyModel.IsAtConstantWar` 只用于决定离开后的和平处理；它不是本 Action 的“是否允许加入”验证器。[FactionHelper](../../system/FactionHelper) 负责部分派系关系调整，Model 只提供规则或计算，不替代 Action 的状态写入。

## 内部契约与公开入口

源码中的 `ApplyInternal` 是私有实现，mod 不能直接调用。它接收旧状态隐含在 `clan.Kingdom` 中，接收目标王国、原因枚举、留在王国的截止时间、佣兵奖励倍率和通知开关；所有公开入口只是把正确的 `ChangeKingdomActionDetail` 传进去。

#### 加入、创建与叛变

| 入口 | 原因与典型时机 | 关键副作用 |
|---|---|---|
| `ApplyByJoinToKingdom(Clan, Kingdom, CampaignTime, bool)` | 普通家族加入王国；源码中的 `JoinKingdomAsClanBarterable` 和对话行为在确认加入后使用它。 | 结束已有佣兵服务；离开旧王国；调整加入后的派系立场；写入 `clan.Kingdom` 和 `ShouldStayInKingdomUntil`；最后派发家族变更事件。 |
| `ApplyByJoinToKingdomByDefection(Clan, Kingdom, Kingdom, CampaignTime, bool)` | 家族从一个王国倒戈到另一个王国。 | 状态处理与普通加入相同；`OnClanChangedKingdom` 之后额外派发 `OnClanDefected`。传入的 `oldKingdom` 主要用于这个额外事件，必须与调用前的 `clan.Kingdom` 一致。 |
| `ApplyByCreateKingdom(Clan, Kingdom, bool)` | [KingdomManager](../../campaign/KingdomManager) 已初始化新王国后，把创始家族接入它。 | 结束佣兵服务、离开旧王国；调用 `ChangeRulingClanAction.Apply` 设定统治家族；把 `clan.Kingdom` 指向新王国。它不会替代 `Kingdom.InitializeKingdom`，也不会单独完成 `KingdomCreatedEvent`。 |
| `ApplyByJoinFactionAsMercenary(Clan, Kingdom, CampaignTime, int, bool)` | 家族接受王国的佣兵服务；奖励倍率通常来自 [MinorFactionsModel](../../campaign/MinorFactionsModel) 的计算调用点。 | 通过 `StartMercenaryServiceAction.ApplyByDefault` 建立服务关系，而不是直接把家族当作贵族加入王国；截止时间和奖励倍率都会传递给佣兵服务动作。 |

加入类入口会先把 `clan.DebtToKingdom` 清零。只有加入分支会保留传入的 `shouldStayInKingdomUntil`；离开分支把它重置为 `CampaignTime.Zero`。

#### 离开、佣兵结束与王国消亡

| 入口 | 原因与典型时机 | 关键副作用 |
|---|---|---|
| `ApplyByLeaveKingdom(Clan, bool)` | 家族正常退出王国；离开王国 Barterable、废黜家族和退位路径都会使用它。 | 清除 `clan.Kingdom`；把家族领地交给旧王国领袖；把留在这些领地中的本家族英雄和其 Party 移回家族领袖的 HomeSettlement；与非恒定战争对手议和并结束双方针对该家族的敌对行动。 |
| `ApplyByLeaveWithRebellionAgainstKingdom(Clan, bool)` | 家族以叛乱方式脱离。 | 清除王国关系；对旧王国调用 `DeclareWarAction.ApplyByRebellion`，并对旧王国的敌对派系补发普通宣战；不会执行正常离开时的领地转交。 |
| `ApplyByLeaveKingdomAsMercenary(Clan, bool)` | 佣兵合同结束或佣兵主动离开。 | 清除王国关系；通过 `EndMercenaryServiceAction.EndByLeavingKingdom` 结束服务；与非恒定战争对手议和、结束相关敌对行动并刷新 Party 图标。 |
| `ApplyByLeaveByKingdomDestruction(Clan, bool)` | [FactionDiscontinuationCampaignBehavior](../../campaign/FactionDiscontinuationCampaignBehavior) 在王国被销毁前清理其家族。 | 清除王国关系并结束佣兵服务；佣兵家族与旧王国敌人议和，非佣兵家族则对仍未交战的旧敌人宣战。它本身不销毁 `Kingdom`。 |
| `ApplyByLeaveKingdomByClanDestruction(Clan, bool)` | [DestroyClanAction](../DestroyClanAction) 已决定销毁家族时清理王国关系。 | 执行离开分支并派发事件；调用者必须让家族销毁流程负责后续对象移除，不应单独把仍在 Campaign 集合中的对象伪装成已销毁。 |

所有分支完成后，若家族的 `WarPartyComponent` 不在 MapEvent 中，源码会让对应 MobileParty 进入 Hold；随后才调用 `OnClanChangedKingdom`。`showNotification` 只作为事件参数传递，不会跳过状态写入、外交动作或事件本身。

## 公开入口的调用契约

每个 `ApplyBy*` 都是立即写入世界状态的 `void` 操作，没有成功返回值、回滚对象或预览模式。调用前应保证：

1. `clan` 是当前 Campaign 中仍有效的家族。
2. 加入或创建入口的 `newKingdom` 已初始化且不是无意的 `null`；离开入口的 `clan.Kingdom` 与预期旧王国一致。
3. 倒戈入口的 `oldKingdom` 是调用前真实的旧王国，否则监听 `OnClanDefected` 的系统会收到错误的历史参数。
4. 正在发生的 MapEvent、领地转移和外交关系已处于可变更阶段；不要在保存或加载回调的中间插入同一类变更。

这组入口不负责替你计算政治代价、佣兵报价、Barterable 是否可接受或王国决策是否通过。先由 [GameModelsManager](../../core-extra/GameModelsManager/)、[DiplomacyModel](../../campaign/DiplomacyModel) 或决策/Barterable 流程完成判断，再在确认结果后调用对应的 `ApplyBy*`。

## 事件监听

动作末尾会发布：

- `CampaignEvents.OnClanChangedKingdomEvent`：参数为 `Clan clan, Kingdom oldKingdom, Kingdom newKingdom, ChangeKingdomAction.ChangeKingdomActionDetail detail, bool showNotification`。
- `CampaignEvents.OnClanDefectedEvent`：仅由 `ApplyByJoinToKingdomByDefection` 在前一个事件之后发布，参数为 `Clan clan, Kingdom oldKingdom, Kingdom newKingdom`。

mod 应让自己的 [CampaignBehaviorBase](../../campaign/CampaignBehaviorBase) 在 `RegisterEvents()` 里订阅，而不是继承 [CampaignEventReceiver](../../campaign/CampaignEventReceiver) 后自行实例化。监听器运行时看到的 `clan.Kingdom` 已经是 `newKingdom`；如果需要旧值，应使用事件参数保存它。

## 真实获取路径

### 让玩家家族加入第一个可用王国

`Clan.PlayerClan`、`Kingdom.All` 和 `CampaignTime.Zero` 都是 1.4.5 源码中的真实入口。这个例子只展示在已有 Campaign 中完成状态变更，不伪造 `Clan` 或 `Kingdom` 实例：

```csharp
using System.Linq;
using TaleWorlds.CampaignSystem;
using TaleWorlds.CampaignSystem.Actions;

public void JoinFirstAvailableKingdom()
{
    if (Campaign.Current == null)
    {
        return;
    }

    Clan clan = Clan.PlayerClan;
    Kingdom targetKingdom = Kingdom.All.FirstOrDefault(kingdom =>
        kingdom != clan.Kingdom && !kingdom.IsEliminated);

    if (targetKingdom != null)
    {
        ChangeKingdomAction.ApplyByJoinToKingdom(
            clan, targetKingdom, CampaignTime.Zero, showNotification: false);
    }
}
```

### 在 Behavior 中观察结果

这是实际的 Campaign 事件订阅路径；回调只读取事件参数，不再次直接改写 `clan.Kingdom`：

```csharp
using TaleWorlds.Library;

public override void RegisterEvents()
{
    CampaignEvents.OnClanChangedKingdomEvent.AddNonSerializedListener(
        this, OnClanChangedKingdom);
}

private void OnClanChangedKingdom(
    Clan clan,
    Kingdom oldKingdom,
    Kingdom newKingdom,
    ChangeKingdomAction.ChangeKingdomActionDetail detail,
    bool showNotification)
{
    if (clan == Clan.PlayerClan && detail == ChangeKingdomAction.ChangeKingdomActionDetail.JoinKingdom)
    {
        InformationManager.DisplayMessage(
            new InformationMessage("Player clan joined a kingdom."));
    }
}
```

监听器的 owner 必须是已加入战役生命周期的 Behavior；仅创建一个 listener 对象不会让它收到事件。

## 风险与一致性边界

- **不要直接赋值：** 手写 `clan.Kingdom = targetKingdom` 会跳过派系立场调整、佣兵结束、领地迁移、和平/宣战、Party 图标刷新、WarParty 停驻和事件级联，容易留下内存中的互相矛盾状态。
- **旧王国不能猜：** 离开分支会读取旧王国的领袖、领地和战争列表；把尚未加入王国的家族传给离开入口，或在事件回调中重复离开，可能触发空引用或对错误派系执行外交动作。
- **叛变参数必须一致：** `ApplyByJoinToKingdomByDefection` 的 `oldKingdom` 不参与内部字段切换，却会进入 `OnClanDefected`；错误参数会让任务、外交和 UI 把事件归因到错误王国。
- **动作会级联：** 正常离开和叛乱会触发多个 `MakePeace` / `DeclareWar`；不要在同一监听器中无条件再次调用相同 Action，否则会重入事件链或把战争关系来回改写。
- **时机决定存档安全：** 这些对象和关系都会被 Campaign 存档引用。不要在读档尚未完成、对象即将被 `DestroyClanAction` 移除、或保存数据正在写入时发起变更；应让原有 Behavior、Barterable 或 KingdomManager 的生命周期调用它。
- **地图事件中的家族变更：** 源码只对不在 MapEvent 的 WarParty 设置 Hold；调用者仍应确认相关 MapEvent、Party 和 Settlement 操作不会与正在进行的战斗或转移交错。

## 导航

- **↑ Parent:** [Campaign extension API index](../) · [Campaign system](../../campaign/)
- **↔ Siblings:** [DeclareWarAction](../DeclareWarAction) · [MakePeaceAction](../MakePeaceAction) · [ChangeOwnerOfSettlementAction](../ChangeOwnerOfSettlementAction)
- **Related leaves:** [Kingdom](../../campaign/Kingdom) · [Clan](../../campaign/Clan) · [CampaignEvents](../../campaign/CampaignEvents) · [CampaignBehaviorBase](../../campaign/CampaignBehaviorBase) · [StartMercenaryServiceAction](../StartMercenaryServiceAction) · [EndMercenaryServiceAction](../EndMercenaryServiceAction) · [DestroyClanAction](../DestroyClanAction)
