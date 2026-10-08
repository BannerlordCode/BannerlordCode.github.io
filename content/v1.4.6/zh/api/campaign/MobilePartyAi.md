---
title: "MobilePartyAi"
description: "单支地图部队的战役 AI 控制器：每个决策周期读取部队当前的长期意图与全局 MobilePartyAIModel 参数，算出短期行为与目标点，再写回 MobileParty 的 ShortTermBehavior 与导航模式。"
---
# MobilePartyAi

**Namespace:** `TaleWorlds.CampaignSystem.Party`
**Type:** `public class MobilePartyAi`
**Source:** `TaleWorlds.CampaignSystem/Party/MobilePartyAi.cs`

> 节 schema：本页采用 7 节（按出现顺序）：概述 / 心智模型 / 怎么用 / 关键成员 / 真实示例 / 参见 / 导航

## 概述

`MobilePartyAi` 是挂在每支 `MobileParty` 身上的战役地图大脑。它只有 1,894 行，却决定了整张战役地图上「非玩家部队下一秒往哪走、追谁、躲谁、围哪座城」——领主军团、商队、村民、匪徒、巡逻队走的每一步都经过它。它不是一个数据类，也不是一个可以被继承的「AI 策略对象」：它是一个**被动的控制器**，由引擎按周期推进，每次推进重算一遍「这支部队现在该干什么」。

它的关键特征在于**行为状态并不存在它自己身上**。真正被读的行为是 `MobileParty.DefaultBehavior`（长期意图，由 `SetMove*` 系列或任务系统写入）和 `MobileParty.ShortTermBehavior`（短期行为）。`MobilePartyAi` 每次决策的产物，就是「把 `ShortTermBehavior` 和目标点重写一遍」，然后把结果翻译成导航模式交给 `MobileParty` 去执行。因此想影响部队 AI，必须先想清楚自己要改的是「长期意图」「短期行为」「全局评分」还是「决策频率」，四者位于完全不同的层。

## 心智模型

**一句话：它是「重算器」，不是「行为仓库」。** 行为的真相在 `MobileParty.DefaultBehavior` / `ShortTermBehavior` 上；`MobilePartyAi` 每个周期把它们重新推导一次，并负责把推导结果翻译成导航指令。它的绝大多数字段是存档状态与调参旋钮，而不是决策逻辑。

按主线拆成四段看：

**① 谁喂给它什么。** 1.4.6 里没有 `PartyThinkParams` 这类显式决策输入对象，输入是直接读的：

- `MobileParty.DefaultBehavior` 与 `TargetSettlement` / `TargetParty` / `TargetPosition` / `MoveTargetPoint` —— 部队的长期意图与既定目标。
- `Campaign.Current.Models.MobilePartyAIModel` —— 全局参数与两个「要不要动手」判定：`ShouldConsiderAttacking` / `ShouldConsiderAvoiding`，以及主动行为评分 `GetBestInitiativeBehavior`，还有决策周期 `AiCheckInterval` 和各段检查半径。
- `Campaign.Current.Models.EncounterModel`（遭遇距离）、`MapDistanceModel`（两点间是否通路）、`PartyNavigationModel`（地形是否允许该导航类型）。
- 静态共享缓存 `DangerousPartiesAndTheirVecs`（危险来源与方向）。

**② 决策怎么产生。** `GetBehaviors` 是唯一总闸，顺序是固定的：

1. 先把 `DefaultBehavior` 当基线，并记下基线目标点。
2. 若 `MobilePartyAIModel.ShouldPartyCheckInitiativeBehavior` 为真，就调 `GetBestInitiativeBehavior` 拿「主动行为 + 目标 + 分数 + 平均敌人向量」。**分数必须大于 1 才允许覆盖基线**；而且如果当前已经在逃跑，还要检查「是否已经跑出危险圈」才肯切换，否则会保持原逃跑行为，避免刚起步就被重新评分打断。
3. 再按基线行为走分支：`GetInSettlementBehavior`、`GetBesiegeBehavior`、`GetFleeBehavior`、`GetFollowBehavior`、`GetDefendSettlementBehavior`、`GetLandPatrolBehavior` / `GetNavalPatrolBehavior`、`GetBestMoveToNearestLandBehavior`，产出最终的 `bestAiBehavior` 与 `bestTargetPoint`。
4. 最后把行为映射成 `IInteractablePoint`：涉及聚落的行为指向 `Settlement.Party`，涉及部队的指向 `MobileParty.Party`，`Hold` / `None` 指向 `null`。

所以这里的「优先级」不是枚举大小，而是**基线行为决定走哪条分支，主动行为只有分数够高时才插队**。权重来自 `AttackInitiative` / `AvoidInitiative`（常态恒为 1，可被 `SetInitiative` 临时改变）以及模型里的两个 `ShouldConsider*`。

**③ 结果写回哪里。** `SetAiBehavior` 做三件事：`MobileParty.SetShortTermBehavior(behavior, interactable)`、写 `BehaviorTarget`、调 `UpdateBehavior()`。`UpdateBehavior` 再翻译成导航模式：`GoToPoint` / `Flee*` / `MoveToNearestLandOrPort` → `SetNavigationModePoint(BehaviorTarget)`；`Hold` → `SetNavigationModeHold()`；`EngageParty` → `SetNavigationModeParty(AiBehaviorPartyBase.MobileParty)`；`DefendSettlement` 一类交给其它系统。**`MobilePartyAi` 从不自己移动部队**，它只写「短期行为 + 目标点」。所有会影响读档结果的字段都带存档标记：`BehaviorTarget`、`AiBehaviorInteractable`、`_fleeingData`、`_attackInitiative` / `_avoidInitiative` / `_initiativeRestoreTime`、`_nextAiCheckTime`、`_isDisabled` / `_enableAgainAtHour`、`DoNotAttackMainPartyUntil`。

**④ 什么时候重新决策。** 常态是周期性的：`Tick(dt)` 只有 `_nextAiCheckTime` 到期才真正 `TickInternal`，随后按 `AiCheckInterval * (0.6 + 0.1 * RandomFloat)` 排下一次——这个间隔本身是模型可调的，追击玩家主队会乘 0.5，逃跑时乘 0.75，匪徒逃跑再乘 5~10，若顺时针与逆时针都被堵死则乘 15（先安静一段时间再重新找路）。事件触发有三条：`DefaultBehaviorNeedsUpdate`（`SetMove*` 会置位，`Tick` 见到就把检查时间直接设成「现在」）、`ForceDefaultBehaviorUpdate()`（它的 internal 入口）、`CheckPartyNeedsUpdate()`（供遭遇管理器立即推进）。每小时还有 `RethinkAtNextHourlyTick`。会被直接跳过的情况：正在打 `MapEvent`、`!IsActive`、作为军队随从被领袖带着走、以及 `IsDisabled` 且未到期。

**想改队伍 AI 行为时该改哪一层**，这是本页最该记住的部分：

- 想让**所有**部队整体更保守或更好战 → 覆写 `MobilePartyAIModel`（`ShouldConsiderAttacking` / `ShouldConsiderAvoiding` / `GetBestInitiativeBehavior` / `AiCheckInterval`）。这是唯一能同时影响全部部队的层，也是最干净的层。
- 想让**某一支**部队暂时收敛 → 用 `party.Ai.SetInitiative(...)`、`SetDoNotAttackMainParty(hours)`、`SetDoNotMakeNewDecisions(true)` 或 `DisableForHours(hours)`。
- 想换掉**某支部队的长期意图** → 调 `MobileParty` 的 `SetMove*` 系列（它们写的是 `DefaultBehavior`），不要去碰 `MobilePartyAi`。
- 想改**逃跑几何**（往哪跑、绕哪一侧） → 只能调模型里的半径参数，或自己读 `CalculateFleePosition` 的产物做后处理；它依赖内部的 `_fleeingData` 做跨帧记忆，不要在外部分步驱动它。
- 想**完全接管**某支部队 → 先 `DisableAi()`，然后自己用 `SetMove*` 驱动。不要试图 `new MobilePartyAi(...)`，构造函数是 `internal`；也不要试图调 `SetShortTermBehavior`，它在 `MobileParty` 上是 `internal`。

## 怎么用

### 怎么拿到

```csharp
// 从部队上取：MobileParty.Ai 是 public 的只读属性
MobileParty party = MobileParty.MainParty;
MobilePartyAi ai = party.Ai;

// 遍历时顺手过滤掉没有 AI 的场合（Ai 由构造流程赋值，正常部队都有）
foreach (MobileParty p in MobileParty.AllLordParties)
{
    if (p.Ai == null) continue;
    if (p.Ai.IsDisabled) continue;
    float aggression = p.Ai.AttackInitiative;
}
```

### 典型用法

```csharp
// 让一支敌军在未来 6 小时内更愿意主动进攻、更不愿意回避
party.Ai.SetInitiative(1.6f, 0.7f, 6f);

// 刚和玩家交过手的部队，先别来找主队
party.Ai.SetDoNotAttackMainParty(12);

// 冻结这支部队的决策，但保留它继续走当前的路
party.Ai.SetDoNotMakeNewDecisions(true);

// 彻底接管：先停 AI，再用 SetMove* 自己驱动
party.Ai.DisableForHours(4);
party.SetMoveGoToSettlement(targetSettlement, MobileParty.NavigationType.Default, false);

// 想让它在下一个周期立刻重算，而不是等间隔到点
party.Ai.ForceDefaultBehaviorUpdate();
party.Ai.CheckPartyNeedsUpdate();
```

### 坑

```csharp
// 坑 1：Initiative 是「带过期的读」，不是普通字段。
// SetInitiative 设的值在 _initiativeRestoreTime 过后会被读成 1，
// 想读原始值没有公开入口 —— 别把它当持久状态用。
party.Ai.SetInitiative(0.5f, 1.5f, 1f);
float raw = party.Ai.AttackInitiative;   // 一小时后就恒为 1f

// 坑 2：SetInitiative 对玩家主队是空操作（源码里显式跳过 MainParty）。
MobileParty.MainParty.Ai.SetInitiative(0f, 2f, 3f);   // 什么都不会发生

// 坑 3：读档不走属性 setter，AiBehaviorPartyBase 可能仍是 null。
// 引擎在 PreAfterLoad 里显式调 CacheAiBehaviorPartyBase() 来修；
// 自己搬运 AiBehaviorInteractable 时记得补这一步。
party.Ai.CacheAiBehaviorPartyBase();

// 坑 4：DangerousPartiesAndTheirVecs 是 static readonly 的可变 List，
// 所有部队共享，别在遍历它的同时往里塞。
```

## 关键成员

### 决策入口与状态

| 成员 | 签名 | 作用 | 行号 |
| --- | --- | --- | --- |
| `Tick` | `internal void Tick(float dt)` | 引擎的周期推进点。只有 `_nextAiCheckTime` 到期才真正决策，之后按 `MobilePartyAIModel.AiCheckInterval` 加抖动排下一次；逃跑、追击主队、围城会乘不同系数 | `MobilePartyAi.cs:281` |
| `TickInternal` | `private void TickInternal()` | 决策的真正主体：先挡掉战斗中 / 未激活 / 军队随从 / 已禁用未到期四种情况，再 `GetBehaviors` → `SetAiBehavior` | `MobilePartyAi.cs:401` |
| `GetBehaviors` | `internal void GetBehaviors(out AiBehavior bestAiBehavior, out IInteractablePoint behaviorObject, out CampaignVec2 bestTargetPoint)` | 唯一决策总闸：先问模型要主动行为，再按 `DefaultBehavior` 分支细化，最后把行为映射成 `IInteractablePoint` | `MobilePartyAi.cs:461` |
| `SetAiBehavior` | `private void SetAiBehavior(AiBehavior newAiBehavior, IInteractablePoint interactablePoint, CampaignVec2 bestTargetPoint)` | 结果写回点：`MobileParty.SetShortTermBehavior` + `BehaviorTarget` + `UpdateBehavior` | `MobilePartyAi.cs:1512` |
| `UpdateBehavior` | `private void UpdateBehavior()` | 把短期行为翻译成导航模式（点 / 部队 / 原地）；遇到未覆盖的行为会 `FailedAssert` | `MobilePartyAi.cs:1520` |
| `CheckPartyNeedsUpdate` | `public void CheckPartyNeedsUpdate()` | 供遭遇管理器在需要立刻重算时调用，只处理 `DefaultBehaviorNeedsUpdate` 标记 | `MobilePartyAi.cs:451` |
| `ForceDefaultBehaviorUpdate` | `internal void ForceDefaultBehaviorUpdate()` | 置位 `DefaultBehaviorNeedsUpdate`，让下一次 `Tick` 立刻重算而非等间隔到点 | `MobilePartyAi.cs:1711` |

### 行为分支

| 成员 | 签名 | 作用 | 行号 |
| --- | --- | --- | --- |
| `GetInSettlementBehavior` | `private void GetInSettlementBehavior(ref AiBehavior shortTermBehavior, ref MobileParty shortTermTargetParty)` | 已抵达目标聚落时的补丁：若聚落里正在打遭遇战且对方敌对，就把行为改成 `EngageParty` | `MobilePartyAi.cs:659` |
| `GetFollowBehavior` | `private void GetFollowBehavior(ref AiBehavior shortTermBehavior, ref Settlement shortTermTargetSettlement, MobileParty followedParty, out CampaignVec2 shortTermTargetPoint)` | `EscortParty` 的实现：被跟随方进聚落就 `GoToSettlement`；它下海而自己不能下海且距离过远就原地 `Hold`；否则 `GoToPoint` | `MobilePartyAi.cs:674` |
| `GetBesiegeBehavior` | `private void GetBesiegeBehavior(out AiBehavior shortTermBehavior, out CampaignVec2 shortTermTargetPoint, out Settlement shortTermTargetSettlement)` | `BesiegeSettlement` 的三态：营地就绪→`AssaultSettlement`，已在围攻该地→`Hold`，否则→`GoToSettlement` | `MobilePartyAi.cs:718` |
| `GetFleeBehavior` | `private void GetFleeBehavior(out AiBehavior fleeBehaviorInternal, out CampaignVec2 fleeTargetPoint, ref Settlement fleeTargetSettlement, MobileParty partyToFleeFrom, Vec2 avarageEnemyVec)` | 逃跑决策：优先回当前聚落，其次投奔附近友军（`FleeToParty`）、再退入附近要塞（`FleeToGate`），兜底才用 `CalculateFleePosition` | `MobilePartyAi.cs:747` |
| `CalculateFleePosition` | `public void CalculateFleePosition(out CampaignVec2 fleeTargetPoint, MobileParty partyToFleeFrom, Vec2 averageEnemyVec)` | 纯几何的逃跑点求解：沿远离威胁的方向找可达点，用 `FleeingData` 记住顺/逆时针哪侧被堵，避免在两堵墙之间来回抖 | `MobilePartyAi.cs:815` |
| `GetDefendSettlementBehavior` | `private void GetDefendSettlementBehavior(Settlement targetSettlement, out AiBehavior shortTermBehavior, out CampaignVec2 shortTermTargetPoint, out MobileParty goAroundPartyTargetParty)` | `DefendSettlement` 的主分支：分「聚落正在被打」与「只是受威胁」两类，决定去港口、去大门、绕后还是直接 `EngageParty` | `MobilePartyAi.cs:999` |
| `GetNearbyPartyDataWhileDefendingSettlement` | `public bool GetNearbyPartyDataWhileDefendingSettlement(Settlement targetSettlement, out bool shouldConsiderJoiningNearbyAllyParties, out bool shouldJoinLandSide, out bool shouldEngage, out MobileParty mostPowerfulLandAlly, out MobileParty mostPowerfulNavalAlly)` | 数附近援军战力：把陆侧/海侧友军强度与攻方强度对比，回答「值不值得一起上」「走陆路还是走海路」 | `MobilePartyAi.cs:1182` |
| `GetGoAroundPartyBehavior` | `private void GetGoAroundPartyBehavior(MobileParty targetParty, out AiBehavior goAroundPartyBehavior, out CampaignVec2 goAroundPartyTargetPoint)` | 「绕到敌人侧面」：找一个离目标约一个遭遇半径的卡位点；找不到就退化成 `EngageParty` | `MobilePartyAi.cs:1338` |
| `GetDefendingPosition` | `private bool GetDefendingPosition(CampaignVec2 targetPosition, MobileParty.NavigationType navigationType, float defendRadius, out CampaignVec2 possibleTargetPoint)` | 在半径环上随机试探可用站位，供防守与绕后复用；返回是否找到 | `MobilePartyAi.cs:1363` |
| `GetNavalPatrolBehavior` | `private void GetNavalPatrolBehavior(out AiBehavior patrolBehavior, out CampaignVec2 patrolTargetPoint, CampaignVec2 patrollingCenterPoint, bool forceUpdate)` | 海上巡逻点生成：围绕巡逻中心按可达性取点 | `MobilePartyAi.cs:1412` |
| `GetLandPatrolBehavior` | `private void GetLandPatrolBehavior(out AiBehavior patrolBehavior, out CampaignVec2 patrolTargetPoint, CampaignVec2 patrollingCenterPoint, bool forceUpdate)` | 陆上巡逻点生成：在巡逻中心附近叠加威胁强度与朝向偏置 | `MobilePartyAi.cs:1468` |
| `GetBestMoveToNearestLandBehavior` | `private void GetBestMoveToNearestLandBehavior(out AiBehavior shortTermBehavior, out CampaignVec2 shortTermTargetPoint, out Settlement shortTermTargetSettlement)` | `MoveToNearestLandOrPort` 的实现：能上岸就找最近陆面，纯海军则开回目标聚落港口 | `MobilePartyAi.cs:435` |

### 逃跑辅助

| 成员 | 签名 | 作用 | 行号 |
| --- | --- | --- | --- |
| `GetNearbyPartyToFlee` | `private MobileParty GetNearbyPartyToFlee(MobileParty partyToFleeFrom, Vec2 fleeDirection)` | 在 `FleeToNearbyPartyRadius` 内挑一支比追兵更强、且大致位于逃跑方向上的友军作为投奔目标 | `MobilePartyAi.cs:1549` |
| `GetBehaviorForNearbySettlementToFlee` | `private void GetBehaviorForNearbySettlementToFlee(MobileParty partyToFleeFrom, Vec2 fleeDirection, out Settlement fleeSettlement, out CampaignVec2 targetPoint, out AiBehavior aiBehavior)` | 挑一个不在交战、方向合适的要塞或本村作为逃入点：远则 `FleeToGate`，近则 `GoToSettlement` | `MobilePartyAi.cs:1604` |
| `GetAccessibleTargetPointInDirection` | `private bool GetAccessibleTargetPointInDirection(out CampaignVec2 targetPoint, Vec2 direction, float targetDistance, bool randomizeTheDirection)` | 沿指定方向做最多 15 次递减距离的试探，检查路径存在、地形合法且中间没有大障碍 | `MobilePartyAi.cs:1644` |
| `CheckIfThereIsAnyHugeObstacleBetweenPartyAndTarget` | `internal static bool CheckIfThereIsAnyHugeObstacleBetweenPartyAndTarget(MobileParty party, Vec2 newTargetPosition)` | 在连线上取 3/4、1/2、1/4 三个采样点做通路检查，用来挡掉「直线可达但隔着海或山」的目标点 | `MobilePartyAi.cs:1745` |
| `DangerousPartiesAndTheirVecs` | `public static readonly List<ValueTuple<float, Vec2>> DangerousPartiesAndTheirVecs` | 静态共享的「危险来源 + 方向」缓存，供逃跑方向计算使用；字段不可换，但内容全局可写 | `MobilePartyAi.cs:1784` |

### 开关与调参

| 成员 | 签名 | 作用 | 行号 |
| --- | --- | --- | --- |
| `IsDisabled` | `public bool IsDisabled` | 只读判断 AI 是否被暂停；置位只能走 `DisableAi` / `DisableForHours` | `MobilePartyAi.cs:139` |
| `DisableForHours` | `public void DisableForHours(int hours)` | 暂停 AI 指定小时数，到期后由 `Tick` 自动 `EnableAi` | `MobilePartyAi.cs:1675` |
| `DisableAi` | `public void DisableAi()` | 无限期暂停，把恢复时间设为 `CampaignTime.Never` | `MobilePartyAi.cs:1682` |
| `EnableAi` | `public void EnableAi()` | 恢复 AI 并清掉暂停时间 | `MobilePartyAi.cs:1689` |
| `EnableAgainAtHourIsPast` | `public bool EnableAgainAtHourIsPast()` | 暂停是否已到期；`DisableAi` 之后永远返回 false | `MobilePartyAi.cs:1696` |
| `SetDoNotAttackMainParty` | `public void SetDoNotAttackMainParty(int hours)` | 让这支部队一段时间内不主动打玩家主队；只会延长不会缩短 | `MobilePartyAi.cs:1702` |
| `DoNotAttackMainPartyUntil` | `public CampaignTime DoNotAttackMainPartyUntil { get; internal set; }` | 上述禁令的到期时间，外部只读 | `MobilePartyAi.cs:179` |
| `SetInitiative` | `public void SetInitiative(float attackInitiative, float avoidInitiative, float hoursUntilReset)` | 调整进攻/回避权重，到期自动回到 1；对 `MobileParty.MainParty` 是空操作 | `MobilePartyAi.cs:1717` |
| `AttackInitiative` | `public float AttackInitiative` | 当前进攻权重；`_initiativeRestoreTime` 已过则恒为 1 | `MobilePartyAi.cs:197` |
| `AvoidInitiative` | `public float AvoidInitiative` | 当前回避权重，同样会过期归 1 | `MobilePartyAi.cs:183` |
| `SetDoNotMakeNewDecisions` | `public void SetDoNotMakeNewDecisions(bool doNotMakeNewDecisions)` | 冻结决策：`GetBehaviors` 仍会计算，但主动行为不再覆盖基线 | `MobilePartyAi.cs:1728` |
| `DoNotMakeNewDecisions` | `public bool DoNotMakeNewDecisions { get; private set; }` | 冻结标记，外部只读 | `MobilePartyAi.cs:167` |
| `RethinkAtNextHourlyTick` | `public bool RethinkAtNextHourlyTick { get; set; }` | 每小时 tick 时强制重算一次，给「当前目标可能失效」的场合用 | `MobilePartyAi.cs:161` |
| `IsAlerted` | `public bool IsAlerted { get; private set; }` | 本次决策是否落进逃跑/警戒分支；`GetBehaviors` 开头会先清零 | `MobilePartyAi.cs:173` |
| `HourCounter` | `public int HourCounter` | 构造时随机初始化的相位计数器，用来把各部队的每小时工作错开 | `MobilePartyAi.cs:1800` |

### 目标与缓存

| 成员 | 签名 | 作用 | 行号 |
| --- | --- | --- | --- |
| `AiBehaviorInteractable` | `public IInteractablePoint AiBehaviorInteractable` | 当前短期行为的作用对象（聚落或部队）；写入时会顺带刷新 `AiBehaviorPartyBase` | `MobilePartyAi.cs:217` |
| `AiBehaviorPartyBase` | `public PartyBase AiBehaviorPartyBase { get; private set; }` | 上面那个对象的 `PartyBase` 视图，读导航时不必再强转 | `MobilePartyAi.cs:212` |
| `CacheAiBehaviorPartyBase` | `public void CacheAiBehaviorPartyBase()` | 读档后重建 `AiBehaviorPartyBase`；反序列化不走属性 setter，所以必须显式调用 | `MobilePartyAi.cs:271` |
| `PreAfterLoad` | `internal void PreAfterLoad()` | 存档加载后修正：老存档的 `FleeToGate` 行为会被重映射到新语义 | `MobilePartyAi.cs:256` |
| `InitializeForOldSaves` | `internal void InitializeForOldSaves(float attackInitiative, float avoidInitiative, CampaignTime initiativeRestoreTime, int numberOfRecentFleeingFromAParty, AiBehavior aiBehavior, Vec2 oldAiBehaviorTarget, bool oldAiPathMode, bool oldAiPathNeeded, MoveModeType oldPartyMoveMode, MobileParty oldMoveTargetParty, Vec2 oldNextTargetPosition, Vec2 oldMoveTargetPoint, Vec2 oldAiPathLastPosition, Vec2 oldFormationPosition, IInteractablePoint oldAiBehaviorMapEntity, CampaignTime oldDoNotAttackMainPartyUntil)` | 1.3.0 之前存档的字段搬运工，把旧字段摊进新结构 | `MobilePartyAi.cs:1734` |
| `FleeingData` | `public class FleeingData` | 逃跑过程的状态包（方向是否被堵、是否已到过终点），随存档保存 | `MobilePartyAi.cs:1831` |
| `Clear` | `public void Clear()` | 清空 `FleeingData` 的四个标记；从逃跑行为切换到非逃跑行为时调用 | `MobilePartyAi.cs:1869` |
| `AlreadyReachedTheDestinationWhileFleeing` | `public bool AlreadyReachedTheDestinationWhileFleeing` | 已逃到过终点，避免反复重算长路径 | `MobilePartyAi.cs:1879` |
| `ShouldFleeClockWise` | `public bool ShouldFleeClockWise` | 上次选定的绕行方向，用于保持逃跑路线稳定 | `MobilePartyAi.cs:1883` |
| `CwFleeDirectionIsBlocked` | `public bool CwFleeDirectionIsBlocked` | 顺时针方向被地形或海陆边界堵死 | `MobilePartyAi.cs:1887` |
| `CcwFleeDirectionIsBlocked` | `public bool CcwFleeDirectionIsBlocked` | 逆时针方向被堵死；两侧都堵会清空状态重新找路 | `MobilePartyAi.cs:1891` |

## 真实示例

第一段：一个不覆写模型、只在事件里对个别部队做微调的 `CampaignBehavior`。这类改动最安全，因为它不改变任何全局评分。

```csharp
public class PartyAiTuningBehavior : CampaignBehaviorBase
{
    public override void RegisterEvents()
    {
        CampaignEvents.DailyTickPartyEvent.AddNonSerializedListener(this, OnDailyTickParty);
    }

    public override void SyncData(IDataStore dataStore) { }

    private void OnDailyTickParty(MobileParty party)
    {
        if (party.Ai == null || !party.IsLordParty) return;
        if (party.MapFaction == null || party.MapFaction.IsAtWarWith(Hero.MainHero.MapFaction)) return;

        // 友军领主：未来 6 小时更愿意主动接战
        party.Ai.SetInitiative(1.5f, 0.8f, 6f);

        // 刚被玩家打过、还在警戒状态：让它 12 小时内别主动找主队
        if (party.Ai.IsAlerted && party.Ai.AttackInitiative < 1f)
        {
            party.Ai.SetDoNotAttackMainParty(12);
        }
    }
}
```

第二段：要影响**所有**部队时，正确的层是 `MobilePartyAIModel`。下面这个模型把决策周期拉长、把进攻门槛抬高，并整体压低主动行为的分数——它不需要碰任何 `MobilePartyAi` 的实例。

```csharp
public class CautiousPartyAiModel : MobilePartyAIModel
{
    // 决策周期越长，部队反应越迟钝、性能开销越小
    public override float AiCheckInterval => 0.75f;

    public override bool ShouldConsiderAttacking(MobileParty party, MobileParty targetParty)
    {
        // 只有明显优势才考虑进攻
        return party.Party.EstimatedStrength > targetParty.Party.EstimatedStrength * 1.4f;
    }

    public override bool ShouldConsiderAvoiding(MobileParty party, MobileParty targetParty)
    {
        // 稍微劣势就开始回避
        return party.Party.EstimatedStrength < targetParty.Party.EstimatedStrength * 1.1f;
    }

    public override void GetBestInitiativeBehavior(MobileParty mobileParty, out AiBehavior bestInitiativeBehavior, out MobileParty bestInitiativeTargetParty, out float bestInitiativeBehaviorScore, out Vec2 averageEnemyVec)
    {
        base.GetBestInitiativeBehavior(mobileParty, out bestInitiativeBehavior, out bestInitiativeTargetParty, out bestInitiativeBehaviorScore, out averageEnemyVec);
        bestInitiativeBehaviorScore *= 0.8f;
    }
}
```

注意 `GetBestInitiativeBehavior` 的分数阈值是硬编码在 `GetBehaviors` 里的「必须大于 1」。所以把分数整体乘以 0.8，等价于要求原始分数高于 1.25 才允许插队——这是不写 Harmony、只靠模型覆写就能改变行为优先级的常用手法。

## 参见

- [`../MobileParty`](../MobileParty) —— 行为的真正持有者：`DefaultBehavior` / `ShortTermBehavior` / `SetMove*` 系列都在这里，`MobilePartyAi` 只是它的重算器。
- [`../../core-extra/GameModelsManager`](../../core-extra/GameModelsManager) —— `Campaign.Current.Models.MobilePartyAIModel` 的装配点，覆写模型后在这里注册。
- [`../_index`](../_index) —— `campaign` 桶全类型索引。

## 导航

- 同桶：[`../MobileParty`](../MobileParty) · [`../PartyBase`](../PartyBase)
- 父索引：[`../_index`](../_index)
