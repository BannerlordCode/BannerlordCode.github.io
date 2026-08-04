---
title: "QuestHelper"
description: "QuestHelper 是战役任务和 Issue 替代方案共用的静态工具集，负责队伍/金币门槛、技能候选、地图箭头、村庄胁迫后果、物价平均值和宣战后的任务结算。"
---
# QuestHelper

**命名空间：** `Helpers`  
**模块：** `TaleWorlds.CampaignSystem`  
**类型：** `public static class QuestHelper`  
**基类：** 无（静态类）  
**源文件：** `bin/TaleWorlds.CampaignSystem/Helpers/QuestHelper.cs`

## 一句话职责

它把多个任务系统共用的判定和副作用集中在一起：读取主角金币、筛选可派遣的健康部队、返回替代方案技能集合、向地图轨迹系统添加箭头，并在村庄胁迫或宣战后按 `QuestBase` 合同结束任务。

## 心智模型

`QuestHelper` 不是 Quest 实例、Quest 注册表或可继承的任务基类。它没有自己的状态，但并不等于“纯函数”：部分入口直接读取 `Hero.MainHero`、`PartyBase.MainParty`、`Campaign.Current`、`Settlement.All` 和 `QuestBase.QuestGiver`，另外两个入口会完成任务并修改关系、权力和 Honor。

按用途把它分成五组：

1. 地图指引：计算两个 `CampaignVec2` 的方向，向 `IMapTracksCampaignBehavior` 注册一条带随机误差的箭头。
2. 替代方案前置条件：检查主角金币，按非英雄、可转移、健康人数、最低 Tier 和是否骑乘筛选 `TroopRoster`，并返回近战/远程技能候选。
3. 村庄胁迫：识别主队强征物资或志愿兵是否命中某个任务，再应用任务失败、关系、权力和 Honor 的连锁后果。
4. 经济估算：遍历所有聚落，只用 Town 和 Village 的物品价格计算未加权整数平均值。
5. 宣战收尾：观察任务给予者与主角阵营是否已经交战，再按战争是否由玩家造成选择 Fail 或 Cancel；它不负责宣战本身。

因此调用前必须先取得真实的 Campaign、Quest、MapEvent、Party 或 `ItemObject` 上下文。不要因为类是静态的，就在加载阶段、没有主角或没有聚落数据时把它当成无状态通用库。

## 何时使用，何时不要用

- **使用：** 在自定义 Issue 或 Quest 的替代方案判定中复用原版的金币、部队人数和技能候选规则，并把失败原因通过 `out TextObject` 交给 UI。
- **使用：** 在任务接受后已有两个真实聚落位置时添加方向箭头，或在 `MapEventStarted`/宣战事件中复用原版的 Quest 终结规则。
- **使用：** 需要用当前世界 Town/Village 价格估算任务奖励时调用 `GetAveragePriceOfItemInTheWorld`，并把结果当作未加权估算。
- **不要用：** 把 `CheckGoldForAlternativeSolution` 当作扣钱操作；它只检查 `Hero.MainHero.Gold`，成功时不扣除金币。
- **不要用：** 把 `CheckRosterForAlternativeSolution` 当作转移部队或保存 roster 的 API；它只读取列表，且只计算健康、非英雄、可转移并满足 Tier/骑乘条件的单位。
- **不要用：** 用 `ApplyGenericMinorMajorCoercionConsequences` 替代自定义任务结算。它会直接 Fail Quest、降低任务给予者关系和权力，并降低主角 Honor。
- **不要用：** 用 `CheckWarDeclarationAndFailOrCancelTheQuest` 发起战争，或绕开 `DeclareWarAction` 自己伪造 `DeclareWarDetail`；该入口只观察已经发生的阵营关系并终结 Quest。

## 依赖关系

```text
Issue/Quest callback
  -> QuestHelper check
  -> QuestBase / QuestManager / MapEvent / Campaign.Current
  -> explanation, map arrow, quest completion, relation/power/Honor changes
```

| 依赖 | 作用与边界 |
| --- | --- |
| [QuestBase](../../campaign/QuestBase) | 提供 `QuestGiver` 和 `CompleteQuestWithFail`/`CompleteQuestWithCancel`；后果入口会改变 Quest 状态并触发任务生命周期。 |
| [QuestManager](../../campaign/QuestManager) | `CheckMinorMajorCoercion` 委托它判断任务是否存在于 Owner Clan 或村庄名人；helper 不自己维护任务索引。 |
| [MobileParty](../../campaign/MobileParty) 与 [TroopRoster](../../campaign/TroopRoster) | 原版 Issue 从 `MobileParty.MainParty.MemberRoster` 取得当前队伍；helper 读取 roster，不拥有或转移成员。 |
| [MapEvent](../../campaign/MapEvent) 与 [PartyBase](../../campaign/PartyBase) | 胁迫判定读取 map event 的强征类型、村庄和攻击方，且要求攻击方是 `PartyBase.MainParty`。 |
| `IMapTracksCampaignBehavior` | 地图箭头的实际持有者；`AddMapArrowFromPointToTarget` 只通过 `Campaign.Current.GetCampaignBehavior` 获取它。 |
| [ChangeRelationAction](../../campaign-ext/ChangeRelationAction) 与 `TraitLevelingHelper` | 通用胁迫后果通过 Action 降低关系，并通过 Trait helper 记录 Honor 变化。 |
| [DeclareWarAction](../../campaign-ext/DeclareWarAction) 与 [DiplomacyHelper](../DiplomacyHelper) | 宣战事件提供 `DeclareWarDetail`；helper 只调用 `DiplomacyHelper.IsWarCausedByPlayer` 决定 Fail 或 Cancel。 |
| [Settlement](../../campaign/Settlement) 与 [ItemObject](../../core-extra/ItemObject) | 世界平均价遍历 `Settlement.All`，对 Town/Village 调用各自 `GetItemPrice(item)`；这是当前世界快照，不是市场模型预测。 |

## 公开入口

| 入口 | 源码行为 | 重要边界 |
| --- | --- | --- |
| `AddMapArrowFromPointToTarget(TextObject, CampaignVec2, CampaignVec2, float, float)` | 规范化目标方向，按 `MBRandom.RandomFloat` 注入误差，把起点向前偏移 4 个单位，再调用地图轨迹行为的 `AddMapArrow`。 | `Campaign.Current` 和两个不同位置必须有效；它不保存箭头名称或轨迹对象。 |
| `CheckGoldForAlternativeSolution(int, out TextObject)` | 比较 `Hero.MainHero.Gold` 与要求值；不足时设置带 `GOLD_AMOUNT` 的本地化说明，足够时把 explanation 设为 `null`。 | 只读检查，不扣金币；依赖已初始化的 `Hero.MainHero`。 |
| `GetAlternativeSolutionMeleeSkills()` | 每次返回新列表：`OneHanded`、`TwoHanded`、`Polearm`。 | 返回列表可被调用方追加；不会修改全局 `DefaultSkills`。 |
| `CheckRosterForAlternativeSolution(TroopRoster, int, out TextObject, int, bool)` | 逐项计算 `Number - WoundedNumber`，排除英雄和不可转移角色，再应用最低 Tier 与骑乘筛选。 | `troopRoster` 必须是可读取的真实 roster；它不检查或扣除伤兵之外的库存。 |
| `GetAlternativeSolutionRangedSkills()` | 每次返回新列表：`Bow`、`Crossbow`、`Throwing`。 | 这是原版替代方案候选，不代表当前角色已经拥有这些技能。 |
| `CheckMinorMajorCoercion(QuestBase, MapEvent, PartyBase)` | 只在主队强征物资或志愿兵、事件发生在 Village 时成立；若任务不在 Owner Clan，则继续询问 `QuestManager.QuestExistInSettlementNotables`。 | 只返回判定，不执行后果；参数和 map event 的 Settlement 必须处于有效战役状态。 |
| `ApplyGenericMinorMajorCoercionConsequences(QuestBase, MapEvent)` | 用村庄链接生成失败日志，Fail Quest，任务给予者关系 `-5`、权力 `-10f`，并给主角应用 Honor `-50`。 | 这是有副作用的终结操作；调用前必须已经确认胁迫条件，且 QuestGiver 与 MapEventSettlement 有效。 |
| `GetAveragePriceOfItemInTheWorld(ItemObject)` | 遍历 `Settlement.All`，累加 Town/Village 价格并以聚落数量做整数除法。 | 不按人口、库存或交易量加权；没有可用 Town/Village 时不能当作有效价格调用。 |
| `CheckWarDeclarationAndFailOrCancelTheQuest(QuestBase, IFaction, IFaction, DeclareWarAction.DeclareWarDetail, TextObject, TextObject, bool)` | 若 QuestGiver 阵营已与主角阵营交战，玩家造成战争且未强制取消时 Fail，否则 Cancel；未交战时不做任何事。 | 观察并终结 Quest，不发起战争；fail/cancel 日志和 Quest 状态必须由调用方提供。 |

## 真实示例：检查原版替代方案的队伍与金币

`VillageNeedsToolsIssueBehavior`、`LordNeedsHorsesIssueBehavior` 等原版 Issue 都从 `MobileParty.MainParty.MemberRoster` 传入 roster，并在部队检查通过后再检查金币。下面保留同样的调用顺序；`out` 说明只在失败时有内容。

```csharp
using TaleWorlds.CampaignSystem;
using TaleWorlds.CampaignSystem.Party;
using TaleWorlds.Localization;
using Helpers;

TroopRoster roster = MobileParty.MainParty.MemberRoster;
TextObject explanation;

bool hasTroops = QuestHelper.CheckRosterForAlternativeSolution(
    roster, 10, out explanation, minimumTier: 2);

bool hasGold = hasTroops && QuestHelper.CheckGoldForAlternativeSolution(
    500, out explanation);

if (!hasGold)
{
    // 将 explanation 交给 Issue 的替代方案 UI，不在这里扣钱。
}
```

## 真实示例：添加任务方向箭头

`NearbyBanditBaseIssueBehavior` 和 `NotableWantsDaughterFoundIssueBehavior` 都在任务已经取得起点与目标聚落位置后调用该入口。位置相同会使方向无法成立，因此调用方应先确认它们来自不同的有效目标。

```csharp
using Helpers;
using TaleWorlds.CampaignSystem;
using TaleWorlds.CampaignSystem.Settlements;
using TaleWorlds.Localization;

public static void MarkQuestDirection(Settlement questSettlement, Settlement targetSettlement)
{
    if (Campaign.Current == null || questSettlement == null || targetSettlement == null)
    {
        return;
    }

    QuestHelper.AddMapArrowFromPointToTarget(
        new TextObject("{=xpsQyPaV}Direction to Bandits"),
        questSettlement.Position,
        targetSettlement.Position,
        5f,
        0.1f);
}
```

这个调用只向当前 `IMapTracksCampaignBehavior` 注册箭头；它不会自动把目标加入 Quest 的 tracked objects，也不会替代 [CampaignEvents](../../campaign/CampaignEvents) 的任务生命周期。

## 真实示例：处理村庄胁迫与宣战

原版 Issue 在 `MapEventStarted` 和 `OnWarDeclared` 回调中先做判断，再调用可能改变 Quest 状态的入口。不要在普通 UI 点击或尚未完成事件参数组装时调用后果方法。

```csharp
using Helpers;
using TaleWorlds.CampaignSystem;
using TaleWorlds.CampaignSystem.Actions;
using TaleWorlds.CampaignSystem.MapEvents;
using TaleWorlds.CampaignSystem.Party;
using TaleWorlds.Localization;

public static void HandleQuestMapEvent(
    QuestBase quest,
    MapEvent mapEvent,
    PartyBase attackerParty,
    IFaction faction1,
    IFaction faction2,
    DeclareWarAction.DeclareWarDetail detail,
    TextObject failLog,
    TextObject cancelLog)
{
    if (QuestHelper.CheckMinorMajorCoercion(quest, mapEvent, attackerParty))
    {
        QuestHelper.ApplyGenericMinorMajorCoercionConsequences(quest, mapEvent);
        return;
    }

    QuestHelper.CheckWarDeclarationAndFailOrCancelTheQuest(
        quest, faction1, faction2, detail, failLog, cancelLog);
}
```

这段代码展示了两个不同的事件边界：胁迫后果会立即 Fail Quest，而宣战检查只有在任务给予者与主角已经交战时才会终结 Quest。

## 风险与存档边界

- **Campaign 上下文：** 地图箭头直接读取 `Campaign.Current`，金币和宣战入口直接读取 `Hero.MainHero`；在战役建立前调用会得到空引用或无效结果。
- **roster 语义：** 计数是健康人数，不是 `Number` 总和；英雄、不可转移单位、低 Tier 和不满足骑乘条件的单位都会被排除。调用方仍负责让 roster 属于正确的 party。
- **解释文本：** 检查成功时会把 `explanation` 清为 `null`；失败文本含有 `GOLD_AMOUNT`、`NUMBER`、`TIER` 和 `MOUNTED` 变量，不能在失败时丢弃它。
- **地图向量：** 源码没有对零长度向量做业务保护；相同起点和目标可能在规范化阶段产生无效方向。`error` 也只是方向扰动，不是距离误差。
- **任务副作用：** 通用胁迫入口会触发 `QuestBase.CompleteQuestWithFail`，随后还会改变关系、权力和 Honor。不要把它当作只生成一条日志的 helper。
- **宣战副作用：** `CheckWarDeclarationAndFailOrCancelTheQuest` 只在实际交战时完成任务；`forceCancel` 会跳过“战争由玩家造成才 Fail”的分支并走 Cancel。它不替代 `DeclareWarAction.Apply...`。
- **平均价格：** 这是所有 Town/Village 的当前价格整数平均值，未处理空聚落集合、异常市场状态或库存权重；任务奖励计算应在战役经济已经初始化时执行。
- **存档边界：** helper 本身不保存任何结果。若自定义 Quest 需要保存状态，应由 [QuestBase](../../campaign/QuestBase) 或 Campaign Behavior 的稳定字段承担，不要保存临时 `TextObject`、MapEvent、roster 引用或地图箭头对象。

## 版本注记

本页按 v1.4.5 `Helpers/QuestHelper.cs` 及其 Issue 调用点撰写。跨版本使用时应重新核对替代方案筛选条件、`QuestManager` 的任务索引、MapEvent 强征标志、价格来源以及宣战后 Fail/Cancel 的判定顺序。

## 导航

- ↑ 父级：[System API](../)
- ↔ 同级：[MiscHelper](../MiscHelper) · [DiplomacyHelper](../DiplomacyHelper) · [MapEventHelper](../MapEventHelper)
- 相关：[QuestBase](../../campaign/QuestBase) · [QuestManager](../../campaign/QuestManager) · [MapEvent](../../campaign/MapEvent) · [CampaignEvents](../../campaign/CampaignEvents)
