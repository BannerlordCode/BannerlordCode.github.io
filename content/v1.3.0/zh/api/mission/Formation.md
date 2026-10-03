---
title: "Formation"
description: "编队：队伍下面的一格兵。CountOfUnits 是「阵型内 + 脱离」的加法而非列表长度，Interval/Distance 由 unitSpacing 与骑兵占比现算，ApplyActionOnEachUnit 会遍历脱离单位，TransferUnits/Split 都要经过 MasterOrderController。"
---

# Formation

**Namespace:** `TaleWorlds.MountAndBlade`
**Module:** `TaleWorlds.MountAndBlade`
**Type:** `public sealed class Formation : IFormation`
**Base:** 无（仅隐式 `System.Object`；实现 `IFormation`，另有若干显式接口实现 `IFormation.GetIsLocalPositionAvailable` / `GetClosestUnitTo` / `SetUnitToFollow` / `BatchUnitPositions`）
**File:** `TaleWorlds.MountAndBlade/Formation.cs`（3812 行 / 133 KB；类型本体 2890 行，其余是嵌套类型与静态几何工具）

## 概述

`Formation` 是「一支队伍里的一格兵」——步兵、弓兵、骑兵、弓骑各自是一个 `Formation`，它们挂在 [Team](../../mission-ext/Team) 上，而不是挂在任务上。一个编队同时持有多份名单：阵型里的单位（在 `Arrangement` 里排阵）、脱离的单位（`_detachedUnits`）、松散脱离的单位（`_looseDetachedUnits`，是前者的**子集**），以及攻击实体脱离队（`AttackEntityOrderDetachment`）。绝大多数看起来像「队伍人数」的属性，其实是这几份名单的加减。

最能代表这种结构的是 `public int CountOfUnits`，实现只有一行：`return this.Arrangement.UnitCount + this._detachedUnits.Count;`。它不是某个内部列表的 `Count`，是**两个来源的求和**。同族的还有 `CountOfUnitsWithoutDetachedOnes`（`Arrangement.UnitCount + _looseDetachedUnits.Count`）、`CountOfUnitsWithoutLooseDetachedOnes`（等于 `Arrangement.UnitCount`，因为 getter 直接返回 `this.Arrangement.GetAllUnits()`）、`CountOfDetachedUnits`、`CountOfDetachableNonPlayerUnits`、`CountOfUndetachableNonPlayerUnits`（后者是一个纯计数器字段 `_undetachableNonPlayerUnitCount`，不是实时统计）。

编队的另一个身份是**空间锚点**：`OrderPosition`（2D 阵型原点）、`Direction`（朝向单位向量）、`OrderGroundPosition`、`OrderPositionIsValid`，以及由此派生出来的 `Depth` / `Width` / `MinimumWidth` / `MaximumWidth`（全部直接转发 `Arrangement` 的同名成员）。`SetPositioning(WorldPosition? position = null, Vec2? direction = null, int? unitSpacing = null)` 是唯一的正规改法——它三个参数全可选，且内部做了边界吸附、间距变化时触发 `OnUnitSpacingChanged` 事件、必要时 `Arrangement.TurnBackwards()`。

## 心智模型

把 `Formation` 想成**「一个带缓存的位置 + 一组兵 + 一堆延迟求值的空间常量」**。三条线决定你该怎么用它。

**第一条线：单位遍历的顺序与范围。** `ApplyActionOnEachUnit(Action<Agent> action, Agent ignoreAgent = null)` 的实现是**先遍历 `Arrangement.GetAllUnits()`，再 for 循环遍历 `_detachedUnits`**——松散脱离单位属于 `_detachedUnits` 的子集，所以它们在这一步会被访问一次而不是两次。想要「只看阵型内的」用 `ApplyActionOnEachAttachedUnit`，想要「只看脱离的」用 `ApplyActionOnEachDetachedUnit`。`GetUnitWithIndex(int unitIndex)` 同样是两段式：先在阵型名单里按索引取，取不到就把索引减去阵型人数再去 `_detachedUnits` 里取，仍取不到返回 `null`。`GetFirstUnit()` 就是 `GetUnitWithIndex(0)`——**编队空时返回 null**，不抛异常。

**第二条线：所有几何量都是现算的，不是缓存的。** `Interval` 的 getter 是 `if (CalculateHasSignificantNumberOfMounted && !(RidingOrder == RidingOrder.Dismount)) return CavalryInterval(UnitSpacing) * Arrangement.IntervalMultiplier; return InfantryInterval(UnitSpacing) * Arrangement.IntervalMultiplier;`，而静态常量是：

```csharp
public static float InfantryInterval(int unitSpacing) { return 0.38f * (float)unitSpacing; }
public static float CavalryInterval(int unitSpacing) { return 0.18f + 0.32f * (float)unitSpacing; }
public static float InfantryDistance(int unitSpacing) { return 0.4f * (float)unitSpacing; }
public static float CavalryDistance(int unitSpacing) { return 1.7f + 0.3f * (float)unitSpacing; }
```

注意 `UnitSpacing` 的常量 `MinimumUnitSpacing = 0`，于是**默认（spacing = 0）时步兵的 `Interval` 和 `Distance` 都是 0**——0.38 × 0 和 0.4 × 0。骑兵则因为有常数项，spacing = 0 时分别是 0.18 和 1.7。想给步兵调队列间距，必须显式 `SetPositioning(unitSpacing: n)` 或设 `ArrangementOrder`。

**第三条线：缓存只在三处，而且带覆盖开关。** 成员名带 `Cached` 的都真的缓：`CachedAveragePosition` / `CachedMedianPosition` / `CachedCurrentVelocity` / `CachedMovementSpeed` / `CachedClosestEnemyFormation`，它们由 `Tick(float dt)` 里的五个独立 `Timer` 驱动——`_cachedPositionAndVelocityUpdateTimer`、`_cachedClosestEnemyFormationUpdateTimer`、`_cachedFormationIntegrityDataUpdateTimer`、`_cachedMovementSpeedUpdateTimer`，其中最近敌人那一项还额外带了 `|| this._cachedClosestEnemyFormation == null || this._cachedClosestEnemyFormation.CountOfUnits == 0` 的兜底（敌编队被打空时立刻重算）。真正需要警惕的是 `CalculateHasSignificantNumberOfMounted`：它的 getter 是 `if (this._overridenHasAnyMountedUnit != null) return this._overridenHasAnyMountedUnit.Value; return this.QuerySystem.CavalryUnitRatio + this.QuerySystem.RangedCavalryUnitRatio >= 0.1f;`——**有一个可被覆盖的缓存字段，一旦被设过就再也不看真实比例**。`Interval`、`Distance`、`UnitDiameter` 三者全都依赖它，所以覆盖它的副作用会一路传到间距计算。

## 关键成员

| 成员 | 签名 | 这个成员是做什么用的 |
| --- | --- | --- |
| `CountOfUnits` | `public int CountOfUnits` | `Arrangement.UnitCount + _detachedUnits.Count`。**编队的真实人数**，含全部脱离单位。 |
| `CountOfUnitsWithoutDetachedOnes` | `public int CountOfUnitsWithoutDetachedOnes` | `Arrangement.UnitCount + _looseDetachedUnits.Count`。把「非松散脱离」也算进来，用于阵型占位判断。 |
| `CountOfUnitsWithoutLooseDetachedOnes` | `public int CountOfUnitsWithoutLooseDetachedOnes` | getter 直接 `return this.Arrangement.UnitCount;`，只看阵型。 |
| `UnitsWithoutLooseDetachedOnes` | `public MBReadOnlyList<IFormationUnit> UnitsWithoutLooseDetachedOnes` | `return this.Arrangement.GetAllUnits();`——阵型单位名单，不是 Agent 列表，取用要转型。 |
| `LooseDetachedUnits` / `DetachedUnits` | `public MBReadOnlyList<Agent> LooseDetachedUnits` / `DetachedUnits` | 直接暴露内部 `MBList<Agent>`。`LooseDetachedUnits` 是 `DetachedUnits` 的子集。 |
| `ApplyActionOnEachUnit` | `public void ApplyActionOnEachUnit(Action<Agent> action, Agent ignoreAgent = null)` | **先阵型名单、后脱离名单**两次遍历；`ignoreAgent` 非 null 时两段都过滤同一个对象。要在遍历中改名单请改用 `ApplyActionOnEachUnitViaBackupList`。 |
| `ApplyActionOnEachAttachedUnit` | `public void ApplyActionOnEachAttachedUnit(Action<Agent> action)` | 只遍历 `Arrangement.GetAllUnits()`，不碰脱离单位。 |
| `ApplyActionOnEachDetachedUnit` | `public void ApplyActionOnEachDetachedUnit(Action<Agent> action)` | 只遍历脱离名单。 |
| `GetUnitWithIndex` | `public Agent GetUnitWithIndex(int unitIndex)` | 两段式取人：先阵型，再「索引减去阵型人数」后查脱离名单，都落空返回 `null`。 |
| `GetFirstUnit` | `public Agent GetFirstUnit()` | `GetUnitWithIndex(0)`。**空编队返回 null。** |
| `AddUnit` | `public void AddUnit(Agent unit)` | 加入阵型。会顺带处理：弹药补给逻辑（`AmmoSupplyLogic` 命中就置 `IgnoreAmmoLimitForRangeCalculation`）、设置 `HasPlayerControlledTroop` / `IsPlayerTroopInFormation`、累加 `_logicalClassCounts` 并可能触发 `CalculateLogicalClass()`、把编队的 FiringOrder / RidingOrder / TargetFormationIndex 同步给该单位，最后发 `OnUnitAdded`。 |
| `RemoveUnit` | `public void RemoveUnit(Agent unit)` | 移除。脱离单位走 `unit.Detachment.RemoveAgent(unit)` 并把 `DetachmentWeight` 设为 -1；阵型单位走 `Arrangement.RemoveUnit(unit)`。最后发 `OnUnitRemoved`。 |
| `DetachUnit` | `public void DetachUnit(Agent unit, bool isLoose)` | 把单位移出阵型放进 `_detachedUnits`，`isLoose` 时**额外**加进 `_looseDetachedUnits`，并把 AI 行为值集设为 `HumanAIComponent.BehaviorValueSet.DefaultDetached`。 |
| `AttachUnit` | `public void AttachUnit(Agent unit)` | 反向：从两份脱离名单移除、放回 `Arrangement`、`Detachment = null`、`DetachmentWeight = -1`，发 `OnUnitAttached`。 |
| `TransferUnits` | `public void TransferUnits(Formation target, int unitCount)` | 转移单位。**实际工作委派给 `Team.MasterOrderController.TransferUnits(this, target, unitCount)`**；前后把双方的 `PostponeCostlyOperations` 置 true 再复位，中途强制 `CalculateLogicalClass()`，最后 `Expire()` 两边的 `QuerySystem` 并调 `Team.QuerySystem.ExpireAfterUnitAddRemove()`。 |
| `Split` | `public IEnumerable<Formation> Split(int count = 2)` | 拆分编队。同样委派 `Team.MasterOrderController.SplitFormation(this, count)`；会给全队所有编队（含空的 `FormationsIncludingEmpty`）打上/摘掉 `PostponeCostlyOperations`，并对结果逐个 `QuerySystem.Expire()`。 |
| `Tick` | `public void Tick(float dt)` | 每帧入口。跑四类缓存刷新、队伍 AI（`AI.Tick()`）、最多 10 次的 `MovementOrder` 替换重试、`ArrangementOrder.TickOccasionally`、`MovementOrder.Tick`、`SetPositioning(...)` 重定位、脱离队 tick、`SmoothAverageUnitPosition`。 |
| `Interval` | `public float Interval` | 队列内相邻单位的横向间距。骑兵分支用 `CavalryInterval`、否则 `InfantryInterval`，最后乘 `Arrangement.IntervalMultiplier`。**spacing = 0 时步兵为 0。** |
| `Distance` | `public float Distance` | 队列之间的纵深间距。形状同 `Interval`，常量是 `0.4f * spacing`（步兵）/ `1.7f + 0.3f * spacing`（骑兵）。 |
| `CalculateHasSignificantNumberOfMounted` | `public bool CalculateHasSignificantNumberOfMounted` | 判据是 `QuerySystem.CavalryUnitRatio + QuerySystem.RangedCavalryUnitRatio >= 0.1f`，**但 `_overridenHasAnyMountedUnit` 一旦被赋值就短路**。`Interval`/`Distance`/`UnitDiameter` 都吃它的结果。 |
| `Width` | `public float Width { get; private set; }` | setter 是 `private`，内容只有 `this.Arrangement.Width = value;`。要对齐宽度请改 `Arrangement`，不要指望 `Formation.Width`。 |
| `Depth` / `MinimumWidth` / `MaximumWidth` / `UnitDiameter` | `public float Depth` 等 | 全部转发 `Arrangement`；`UnitDiameter` 是 `GetDefaultUnitDiameter(CalculateHasSignificantNumberOfMounted && RidingOrder != Dismount)`。 |
| `SetPositioning` | `public void SetPositioning(WorldPosition? position = null, Vec2? direction = null, int? unitSpacing = null)` | 唯一的正规改位入口。三参数全可选，内部做边界吸附（`Mission.Current.GetClosestBoundaryPosition`）、间距变化时发 `OnUnitSpacingChanged` 并置 `Arrangement.AreLocalPositionsDirty = true`、必要时 `TurnBackwards()`。 |
| `CurrentPosition` | `public Vec2 CurrentPosition` | 若阵型是 `ColumnFormation` 就返回**前锋 Agent 的位置**（`agent.Position.AsVec2`），否则用 `CachedAveragePosition + CurrentDirection.TransformToParentUnitF(-OrderLocalAveragePosition)` 算。 |
| `CurrentDirection` | `public Vec2 CurrentDirection` | `(QuerySystem.EstimatedDirection * 0.8f + Direction * 0.2f).Normalized()`——八二混合后归一化。 |
| `LogicalClass` / `PhysicalClass` | `public FormationClass LogicalClass` / `PhysicalClass` | 逻辑类是「重新计算出来的多数派」，物理类是编队身份。`SecondaryLogicalClasses` / `SecondaryPhysicalClasses` 是次要分类。 |
| `GetCountOfUnitsBelongingToPhysicalClass` | `public int GetCountOfUnitsBelongingToPhysicalClass(FormationClass physicalClass, bool excludeBannerBearers)` | 遍历阵型名单**和**脱离名单，按 `QueryLibrary.IsInfantry/IsRanged/IsCavalry/IsRangedCavalry` 计数；`excludeBannerBearers` 决定用带不带 `WithoutBanner` 的那套判定。 |
| `GetFormationPower` | `public float GetFormationPower()` | `ApplyActionOnEachUnit` 把每个单位的 `Agent.CharacterPowerCached` 求和——**是缓存值不是现算属性**。 |
| `GetFormationMeleeFightingPower` | `public float GetFormationMeleeFightingPower()` | 同上，但弓兵/弓骑编队（`FormationIndex` 为 `Ranged` 或 `HorseArcher`）每单位乘 `0.4f`。 |
| `Team` / `Index` / `FormationIndex` / `Banner` | `public readonly Team Team` / `public readonly int Index` / `public readonly FormationClass FormationIndex` / `public Banner Banner` | 身份三元组。注意构造器里 `this.FormationIndex = (FormationClass)index;` 是**直接把 int 位转成枚举**——传非法 index 会得到一个未定义的 `FormationClass` 值。 |
| `OnUnitAdded` / `OnUnitAttached` / `OnUnitSpacingChanged` / `OnWidthChanged` / `OnAfterArrangementOrderApplied` | `public event ...` | 五个公开事件。`OnUnitAdded` 是 `Action<Formation, Agent>`，在 `AddUnit` 的**最后一步**触发（此时逻辑类已更新）；`OnAfterArrangementOrderApplied` 是 `Action<Formation, ArrangementOrder.ArrangementOrderEnum>`。 |
| `InfantryInterval` / `CavalryInterval` / `InfantryDistance` / `CavalryDistance` | `public static float InfantryInterval(int unitSpacing)` 等 | 四个纯函数：`0.38f * spacing` / `0.18f + 0.32f * spacing` / `0.4f * spacing` / `1.7f + 0.3f * spacing`。 |
| `GetDefaultUnitDiameter` | `public static float GetDefaultUnitDiameter(bool isMounted)` | 骑马取 `ManagedParameters.Instance.GetManagedParameter(ManagedParametersEnum.QuadrupedalRadius) * 2f`，步行取 `BipedalRadius * 2f`。 |
| `GetDefaultFileWidth` / `GetDefaultRankDepth` | `public static float GetDefaultFileWidth(int fileUnitCount, int unitSpacing, bool isMounted)` | `(count - 1) * (interval + diameter)`——**减 1**，因为 N 个人只有 N-1 个间隔。`fileUnitCount <= 1` 时返回 0 或负数。 |
| `AveragePositionCalculatePeriod` | `public const float AveragePositionCalculatePeriod = 0.1f` | 平均位置缓存的目标刷新周期（秒）。 |
| `MinimumUnitSpacing` | `public const int MinimumUnitSpacing = 0` | 间距下界；也是 `GetDefaultMinimumUnitInterval` 等函数传入的默认值。 |

## 真实示例

第一种：遍历一个编队的所有人并判断编制。官方逻辑里大量出现这个形状，注意 `GetFirstUnit()` 可能返回 null：

```csharp
using TaleWorlds.Core;
using TaleWorlds.MountAndBlade;

public class MyFormationReporter : MissionLogic
{
    public override void OnMissionTick(float dt)
    {
        Team team = Mission.Current.PlayerTeam;
        if (team == null)
        {
            return;
        }
        Formation infantry = team.GetFormation(FormationClass.Infantry);
        if (infantry.CountOfUnits == 0)
        {
            return;
        }

        int ranged = infantry.GetCountOfUnitsBelongingToPhysicalClass(FormationClass.Ranged, true);
        int total = 0;
        float power = 0f;

        infantry.ApplyActionOnEachUnit(agent =>
        {
            total++;
            power += agent.CharacterPowerCached;
            if (agent.IsPlayerControlled)
            {
                Debug.Print("player unit in infantry, hp=" + agent.Health, 0);
            }
        });

        Agent first = infantry.GetFirstUnit();
        if (first != null)
        {
            Debug.Print("interval=" + infantry.Interval + " distance=" + infantry.Distance
                + " width=" + infantry.Width + " power=" + power, 0);
        }
        Debug.Print("ranged(without banner)=" + ranged + "/" + total, 0);
    }
}
```

第二种：改阵型位置与间距。`SetPositioning` 三参数全可选，所以「只转朝向」和「只挪位置」都是合法的：

```csharp
Formation target = team.GetFormation(FormationClass.Cavalry);

// 只转朝向：单位给一个方向向量，长度会被归一化语义接管
Vec2 facing = new Vec2(1f, 0f);
target.SetPositioning(null, facing, null);

// 只挪位置：越界时引擎会自动吸附回合法边界，并置 HasBeenPositioned
WorldPosition spot = new WorldPosition(Mission.Current.Scene, new Vec3(120f, 80f, 0f));
target.SetPositioning(spot, null, null);

// 三个一起改：spacing 变化会触发 OnUnitSpacingChanged 事件并把
// Arrangement.AreLocalPositionsDirty 置 true
target.SetPositioning(spot, facing, 1);
```

第三种：在编队之间搬运单位。注意 `TransferUnits` 的真实路径是 `MasterOrderController`，不是本类内部改名单：

```csharp
Formation infantry = team.GetFormation(FormationClass.Infantry);
Formation archer = team.GetFormation(FormationClass.Ranged);

if (infantry.CountOfUnits > 10)
{
    // 引擎内部：先让两边 PostponeCostlyOperations = true，
    // 走 MasterOrderController.TransferUnits，再 CalculateLogicalClass，最后 Expire 查询缓存
    infantry.TransferUnits(archer, 4);

    // 挂事件观察单位进出（OnUnitAdded 在 AddUnit 的最后一步触发）
    archer.OnUnitAdded += (formation, unit) =>
    {
        Debug.Print("archer now " + formation.CountOfUnits + " / " + unit.Name, 0);
    };
}
```

⚠️ 事件是在 `TransferUnits` **之后**才挂上就收不到这次转移的通知——`TransferUnits` 内部走 `MasterOrderController`，事件在那之前就发完了。想全程观察就要在转移前挂。

## 风险与边界

- **`CountOfUnits` 不是某个列表的长度。** 它是 `Arrangement.UnitCount + _detachedUnits.Count`。任何「按 CountOfUnits 索引取人」的想法都是错的，要取人用 `GetUnitWithIndex`（它也是两段式）。
- **`GetFirstUnit()` 在空编队返回 null。** 没有异常、没有断言。
- **`Width` 的 setter 是 private。** 它只写 `Arrangement.Width`。从外部改宽度请改 `Arrangement`。
- **`FormationIndex` 是 `(FormationClass)index` 的位转。** 构造器不做校验，传错 index 得到未定义枚举值，后面所有 `FormationIndex == FormationClass.Ranged` 之类的比较都会静默失效。
- **`CalculateHasSignificantNumberOfMounted` 有覆盖开关。** `_overridenHasAnyMountedUnit` 被设过就永久短路真实比例，`Interval` / `Distance` / `UnitDiameter` 随之全部失真。要改就必须同时改回 `null`。
- **默认 `UnitSpacing = 0` 时步兵 `Interval` 与 `Distance` 都是 0。** 0.38 × 0、0.4 × 0。骑兵有常数项所以不为 0。步兵想要非零间距必须显式设置。
- **间距公式是硬编码常量，不是配置。** `0.38f` / `0.18f + 0.32f` / `0.4f` / `1.7f + 0.3f` 全是 `Formation` 上的静态方法字面量。想改编队密度只能自己算或改 `Arrangement`。
- **`ApplyActionOnEachUnit` 会遍历脱离单位。** 在回调里增删单位会破坏正在进行的遍历。需要改动名单时用 `ApplyActionOnEachUnitViaBackupList`。
- **`GetDefaultFileWidth` / `GetDefaultRankDepth` 会减 1。** `count = 0` 时返回 `-1 * (interval + diameter)`，是负数。判断前先确认 count ≥ 1。
- **构造器要求 `Team` 非 null。** 静态工具 `GetFormationFramesForBeforeFormationCreation` 里就 `new Formation(null, -1)` 当临时阵型用；你自己 new 出来的编队**不是**任务里的编队，`Mission.Current` 相关调用会出问题。
- **有终结器 `~Formation()`，且它会改静态状态。** `if (!this.IsSimulationFormation) { Formation._simulationFormationTemp = null; }`——任何一个真实编队被 GC 回收都会把静态临时槽清空。依赖 `_simulationFormationTemp` 的代码对 GC 时序敏感。
- **`QuerySystem` 有过期机制。** `TransferUnits` / `Split` 结束时才 `Expire()`。在这两个调用之前读 `QuerySystem` 的统计量可能拿到旧值。
- **`GetFormationPower` 读的是 `Agent.CharacterPowerCached`。** 属性/武器变了但缓存没刷时，编队战力是旧数。

## 跨版本提示

`Formation` 的公开面在 1.3.0 是 185 个 public/protected 成员（含嵌套类型与静态工具），跨版本最可能变的是三处：

一是**编队类集合**。`FormationClass` 在后续版本继续细分，`Formation.FormationIndex` 的取值域跟着变；`GetCountOfUnitsBelongingToPhysicalClass` 内部那个 `switch (physicalClass)` 只列了 `Infantry` / `Ranged` / `Cavalry` / `HorseArcher` 四支——**新类默认落到 `flag = false`，即不计数且不报错**。这是最容易在升级后静默出错的地方。

二是**间距常量**。`0.38f` / `0.18f + 0.32f` 这些字面量属于平衡数值，官方随时可能调；硬编码期望值的 mod 升级后要重测。

三是**缓存刷新周期**。`AveragePositionCalculatePeriod = 0.1f` 与 `ResetArrangementOrderTickTimer` 里的 `0.5f` 是公开常量；一旦改动，读 `CachedAveragePosition` 的代码会看到不同的滞后量。

方法签名层面最稳的是 `ApplyActionOnEachUnit` / `GetUnitWithIndex` / `SetPositioning` / `TransferUnits` 这几族——它们被大量官方与 mod 代码依赖，改动成本很高。

## 依赖关系

- 容器：[Team](../../mission-ext/Team) 持有全部编队，`GetFormation(FormationClass)` 是取编队的标准入口，`TransferUnits` / `Split` 都经 `Team.MasterOrderController`
- 成员单位：[Agent](../Agent) 既是编队的成员（`Agent.Formation` 指回编队），也是 `ApplyActionOnEachUnit` 的回调参数
- 空间后端：[IFormationArrangement](../../mission-ext/IFormationArrangement) 决定阵型形状，`Width` / `Depth` / `IntervalMultiplier` / `DistanceMultiplier` / `TurnBackwards()` 全在它身上；[LineFormation](../../mission-ext/LineFormation) 与 [ColumnFormation](../../mission-ext/ColumnFormation) 是两种常见实现
- 统计：[FormationQuerySystem](../../mission-ext/FormationQuerySystem) 提供 `EstimatedDirection` / `CavalryUnitRatio` / `RangedCavalryUnitRatio`，有独立的过期语义
- 脱离队：[IDetachment](../../mission-ext/IDetachment) / [AttackEntityOrderDetachment](../../mission-ext/AttackEntityOrderDetachment) 与 [Agent](../Agent) 的 `Detachment` / `DetachmentWeight` 对接
- 顺序：[MovementOrder](../../mission-ext/MovementOrder) / [FacingOrder](../../mission-ext/FacingOrder) / [FormOrder](../../mission-ext/FormOrder) / [ArrangementOrder](../../mission-ext/ArrangementOrder) / [FiringOrder](../../mission-ext/FiringOrder) / [RidingOrder](../../mission-ext/RidingOrder) 六个 setter 都收在编队上
- 枚举：[FormationClass](../../core-extra/FormationClass)、[TeamSideEnum](../../core-extra/TeamSideEnum)、[BattleSideEnum](../../core-extra/BattleSideEnum) 的定义都在 `TaleWorlds.Core`
- 几何常量：[ManagedParameters](../../core-extra/ManagedParameters) / [ManagedParametersEnum](../../core-extra/ManagedParametersEnum) 提供 `BipedalRadius` / `QuadrupedalRadius`
- 挂载点：[MissionBehavior](../MissionBehavior) / [MissionLogic](../../mission-ext/MissionLogic) 是示例里驱动这些遍历的回调
- 桶首页：[mission API 分区](../)