---
title: "Agent"
description: "任务里的一个可交互单位：sealed，484 个 public/protected 成员里大部分是一行转发到 native 的属性。Health 的 setter 向上取整到整数并带 1e-5 阈值，Formation 的 setter 会自动 Remove/Add 并处理脱离队与网络广播，ClothingColor 读的是可空字段。"
---

# Agent

**Namespace:** `TaleWorlds.MountAndBlade`
**Module:** `TaleWorlds.MountAndBlade`
**Type:** `public sealed class Agent : DotNetObject, IAgent, IFocusable, IUsable, IFormationUnit, ITrackableBase`
**Base:** `DotNetObject`（native 包装基类）；同时实现 6 个接口，其中 `IFormationUnit` 的部分成员是显式实现
**File:** `TaleWorlds.MountAndBlade/Agent.cs`（6932 行 / 237 KB；类型本体 6255 行，其余是 20 个嵌套枚举、3 个委托与 4 个嵌套类型）

## 概述

`Agent` 是任务里的一匹马、一个人、一具尸体。它是 **sealed** 的——不能继承，扩展只能靠 [AgentComponent](../../mission-ext/AgentComponent)（`Components` 属性 + `AddComponent` / `RemoveComponent` / `GetComponent<T>`）或者 [MissionBehavior](../MissionBehavior)。

这个类最容易骗人的地方是它的属性「看起来像字段」。`Position` 的 getter 是 `AgentHelper.GetAgentPosition(this.PositionPointer)`，`MovementVelocity` / `VisualPosition` / `AverageVelocity` / `GetMissileRange()` / `IsEnemyOf` / `IsFriendOf` 则是直接 `MBAPI.IMBAgent.XXX(this.GetPtr())`——**每次读都是一次跨语言边界调用**，不是字段读。484 个 public/protected 成员里，这类「一行转发」占了大头。

真正带逻辑、值得单独理解的成员只有几个。`Health` 的 setter 会把新值**向上取整到整数**、用 `1E-05f` 的阈值判等、在服务器上同步给客户端、再依次触发 `OnAgentHealthChanged` 与骑乘者的 `OnMountHealthChanged`。`Formation` 的 setter 更重：它会广播网络消息 `AgentSetFormation`、调 `SetNativeFormationNo`、从旧编队 `RemoveUnit`、在新编队没定位过时先 `SetPositioning`、再 `AddUnit`、最后尝试把脱离队身份接回去并对每个组件调 `OnFormationSet()`。`ClothingColor1` 读的是可空字段 `_clothingColor1`，没设过就回落到 `Team.Color`，再没有就 `Debug.FailedAssert` 并返回 `uint.MaxValue`。

## 心智模型

把它当成**「native 对象的托管句柄 + 少量托管侧权威状态」**。这个二分法决定了你该怎么写代码。

**第一类：native 权威、托管零成本（属性形状）。** `Position`、`VisualPosition`、`MovementVelocity`、`AverageVelocity`、`LookDirection`、`HealthLimit` 的原生部分、`CurrentGuardMode`、`ImmediateEnemy`、`MaximumMissileRange`、`IsRangedCached` 之类，全部是 getter 里一次 P/Invoke 或指针读。它们随时反映引擎的真实状态，也意味着**在每帧循环里批量读会累积可观的边界开销**。`IsHuman` / `IsMount` 是这类里的异类：它们不调 native，而是 `return (this.GetAgentFlags() & AgentFlag.IsHumanoid) > AgentFlag.None;`——**位与**比较，一次 native 取标志位再在托管侧掩码。

**第二类：托管权威、跨边界要小心（状态形状）。** `Health`（托管 float 字段 `_health`）、`Equipment`（`MissionEquipment`）、`CharacterPowerCached`、`IsFemale`、`Formation`、`Team`、`Mission`。其中 `Team`、`Equipment`、`Mission`、`HealthLimit` 的 setter 全是 `private`，只能由引擎或 `Agent` 自己的方法改；`Formation`、`IsFemale`、`Health`、`KillCount` 的 setter 是 public。

**第三类：控制权判定，两个都不看 native。** 这是 mod 里最常被误解的一组：

```csharp
public bool IsPlayerControlled { get { return this.IsMine || this.MissionPeer != null; } }
public bool IsMine { get { return this.Controller == AgentControllerType.Player; } }
public bool IsAIControlled { get { return this.Controller == AgentControllerType.AI && !GameNetwork.IsClientOrReplay; } }
public bool IsMainAgent { get { return this == Agent.Main; } }
```

`IsPlayerControlled` 是个**或**：本地玩家控制的单位为真，但**任何联网 peer 控制的单位也为真**——它不等于「本地可操作」。`IsAIControlled` 里那个 `&& !GameNetwork.IsClientOrReplay` 意味着在客户端/回放上，AI 控制的单位**不算** AI 控制。

**第四类：数值有精度处理的。** `Health` 的 setter 是唯一一处显式的浮点处理：

```csharp
float num = (float)(value.ApproximatelyEqualsTo(0f, 1E-05f) ? 0 : MathF.Ceiling(value));
if (!this._health.ApproximatelyEqualsTo(num, 1E-05f))
{
    float health = this._health;
    this._health = num;
    if (GameNetwork.IsServerOrRecorder) { this.SyncHealthToClients(); }
    // 之后才发 OnAgentHealthChanged / OnMountHealthChanged
}
```

三件事同时成立：**小数被向上取整**（设 3.2 得到 4）、**约等于 0 归零**（设 0.00001 得到 0）、**变化小于 1e-5 视为没变**（连事件都不发）。所以「扣 0.5 点血」这种操作会被静默吞掉。

**第五类：取值路径比看起来长。** `WieldedWeapon` 只有三行，但每一行都要注意：

```csharp
EquipmentIndex primaryWieldedItemIndex = this.GetPrimaryWieldedItemIndex();
if (primaryWieldedItemIndex < EquipmentIndex.WeaponItemBeginSlot) { return MissionWeapon.Invalid; }
return this.Equipment[primaryWieldedItemIndex];
```

`EquipmentIndex.WeaponItemBeginSlot == 0`、`None == -1`，所以赤手空拳会拿到 `MissionWeapon.Invalid` 而不是异常。而最后那行命中的是 [MissionEquipment](../../mission-ext/MissionEquipment) 的 `this[EquipmentIndex]` 重载——**同类型上还有一个 `this[int]` 重载**，传 `int` 和传 `EquipmentIndex` 是两次不同的编译期选择。

## 关键成员

| 成员 | 签名 | 这个成员是做什么用的 |
| --- | --- | --- |
| `Main` | `public static Agent Main` | 当前主控 Agent 的静态引用。`IsMainAgent` 就是 `this == Agent.Main`。多任务/观战切换时它会被重设。 |
| `Index` | `public int Index { get; }` | 该 Agent 在本任务中的编号，生成时定死。网络消息（`AgentSetFormation` 等）一律用它而非对象引用。 |
| `Mission` | `public Mission Mission { get; private set; }` | 所属任务。setter private，只能由任务写入。 |
| `Team` | `public Team Team { get; private set; }` | 所属队伍。**可为空**（生成中途、脱离任务流程时）。 |
| `Formation` | `public Formation Formation { get; set; }` | 编队归属。setter 是最重的成员：网络广播 `AgentSetFormation`、`SetNativeFormationNo`、旧编队 `RemoveUnit`、必要时先给新编队 `SetPositioning`、新编队 `AddUnit`、尝试接回脱离队、对所有 `Components` 调 `OnFormationSet()`、最后 `ForceUpdateCachedAndFormationValues`。 |
| `Health` | `public float Health { get; set; }` | 当前血量。setter **向上取整到整数**、1e-5 归零、1e-5 判等、服务器同步、依次发 `OnAgentHealthChanged` 与骑乘者的 `OnMountHealthChanged`。 |
| `HealthLimit` / `BaseHealthLimit` | `public float HealthLimit { get; set; }` / `BaseHealthLimit { get; set; }` | 血量上限。`BaseHealthLimit` 是未加成前的基准。 |
| `Equipment` | `public MissionEquipment Equipment { get; private set; }` | 任务内装备容器。**同时有 `this[int]` 与 `this[EquipmentIndex]` 两个索引器**，重载选择取决于静态类型。 |
| `WieldedWeapon` | `public MissionWeapon WieldedWeapon` | 主手武器。`GetPrimaryWieldedItemIndex()` 小于 `EquipmentIndex.WeaponItemBeginSlot`（即 0）时返回 `MissionWeapon.Invalid`，否则返回 `this.Equipment[primaryWieldedItemIndex]`。 |
| `WieldedOffhandWeapon` | `public MissionWeapon WieldedOffhandWeapon` | 副手武器，同一套逻辑。 |
| `Position` | `public Vec3 Position` | `AgentHelper.GetAgentPosition(this.PositionPointer)`，**每次读都是指针解引用**。 |
| `VisualPosition` | `public Vec3 VisualPosition` | `MBAPI.IMBAgent.GetVisualPosition(...)`。骨骼动画位置，与 `Position` 不同。 |
| `MovementVelocity` / `AverageVelocity` | `public Vec2 MovementVelocity` / `public Vec3 AverageVelocity` | 当前速度 / 平滑平均速度，分别对应 2D 与 3D。 |
| `IsPlayerControlled` | `public bool IsPlayerControlled` | `IsMine || MissionPeer != null`。**联网时对方玩家控制的单位也为 true**，不等于「本地可操作」。 |
| `IsMine` | `public bool IsMine` | `Controller == AgentControllerType.Player`。纯托管判定。 |
| `IsAIControlled` | `public bool IsAIControlled` | `Controller == AgentControllerType.AI && !GameNetwork.IsClientOrReplay`。**在客户端与回放上恒为 false**。 |
| `IsMainAgent` | `public bool IsMainAgent` | `this == Agent.Main`，引用比较。 |
| `IsHuman` / `IsMount` | `public bool IsHuman` / `public bool IsMount` | 都是位运算：`(GetAgentFlags() & AgentFlag.IsHumanoid) > AgentFlag.None` / `(… & AgentFlag.Mountable) > AgentFlag.None`。 |
| `State` | `public AgentState State` | `AgentHelper.GetAgentState(this._statePointer)`；setter 是 `if (this.State != value) MBAPI.IMBAgent.SetStateFlags(...)`。`IsActive()` 就是 `State == AgentState.Active`。 |
| `ClothingColor1` | `public uint ClothingColor1` | `_clothingColor1` 有值就用；否则 `Team.Color`；再否则 `Debug.FailedAssert("Clothing color is not set.")` 并返回 `uint.MaxValue`（= 不透明白）。 |
| `ClothingColor2` | `public uint ClothingColor2` | `_clothingColor2` 为 null 时**回落到 `ClothingColor1`**，不是回落到 `Team.Color2`。 |
| `SetClothingColor1` / `SetClothingColor2` | `public void SetClothingColor1(uint color)` | 方法体只有 `this._clothingColor1 = new uint?(color);`——**只改托管字段，不推给渲染**。要看到颜色变化得在合适时机重建/刷新外观。 |
| `IsEnemyOf` / `IsFriendOf` | `public bool IsEnemyOf(Agent otherAgent)` | `MBAPI.IMBAgent.IsEnemy(this.GetPtr(), otherAgent.GetPtr())`——**判定权在 native**，不是比 `Team`。 |
| `CanReachAgent` | `public bool CanReachAgent(Agent otherAgent)` | `float d = this.GetInteractionDistanceToUsable(otherAgent); return this.Position.DistanceSquared(otherAgent.Position) < d * d;` ——**平方距离比较，没有开方**。 |
| `CanInteractWithAgent` | `public bool CanInteractWithAgent(Agent otherAgent, float userAgentCameraElevation)` | 先遍历 `Mission.Current.MissionBehaviors` 问 `IsThereAgentAction`，全 false 直接返回 false；再按对方是不是马、骑乘关系、当前动作类型、`GetLookDownLimit() + 0.4f`、`GetCurrentVelocity().LengthSquared < 0.25f` 逐条筛。 |
| `GetMissileRange` / `MaximumMissileRange` | `public float GetMissileRange()` / `public float MaximumMissileRange` | 前者是 `MBAPI.IMBAgent.GetMissileRange(this.GetPtr())`，后者是前者的转发。`MissileRangeAdjusted` 走的是另一条 `GetMissileRangeWithHeightDifference()`。 |
| `Components` / `GetComponent<T>` | `public MBReadOnlyList<AgentComponent> Components` / `public T GetComponent<T>() where T : AgentComponent` | 线性扫描 `_components` 找第一个 `is T` 的，找不到返回 `default(T)`（引用类型即 null），**不抛异常**。 |
| `HitterList` | `public MBReadOnlyList<Agent.Hitter> HitterList` | 该单位受到的伤害来源记账。嵌套类 `Agent.Hitter` 有 `Damage`、`HitterPeer`、`IsFriendlyHit`、`IncreaseDamage(float)`，常量 `AssistMinDamage = 35f`（助攻判定阈值）。 |
| `SetActionChannel` | `public bool SetActionChannel(int channelNo, in ActionIndexCache actionIndexCache, bool ignorePriority = false, AnimFlags additionalFlags = (AnimFlags)0UL, float blendWithNextActionFactor = 0f, float actionSpeed = 1f, float blendInPeriod = -0.2f, float blendOutPeriodToNoAnim = 0.4f, float startProgress = 0f, bool useLinearSmoothing = false, float blendOutPeriod = -0.2f, int actionShift = 0, bool forceFaceMorphRestart = true)` | 切动作。方法体两行：`int index = actionIndexCache.Index;` 然后送进 native 时用 `index + actionShift`——**最终索引可能被平移**。 |
| `GetCurrentAction` | `public ActionIndexCache GetCurrentAction(int channelNo)` | 走 `internal ActionIndexCache(int)` 构造器，channel 0 读 `_channel0CurrentActionPointer`，否则 `_channel1CurrentActionPointer`。**只有两个通道**，传 2 会被当成 1。 |
| `Die` | `public void Die(Blow b, Agent.KillInfo overrideKillInfo = Agent.KillInfo.Invalid)` | 先给编队 `QuerySystem.RegisterDeath()`（`b.IsMissile` 时再 `RegisterDeathByRanged()`），再 `this.Health = 0f`，然后在 `overrideKillInfo != TeamSwitch && (b.OwnerId == -1 || b.OwnerId == this.Index) && IsHuman && _lastHitInfo.CanOverrideBlow` 时用 `_lastHitInfo` 回填 `b.OwnerId` / `b.AttackType`，最后才调 native。 |
| `TeleportToPosition` | `public void TeleportToPosition(Vec3 position)` | 一次性搬三个对象：先坐骑、再自己、再骑手。**没有边界检查、没有 navmesh 校验**。 |
| `SetInitialFrame` | `public void SetInitialFrame(in Vec3 initialPosition, in Vec2 initialDirection, bool canSpawnOutsideOfMissionBoundary = false)` | 生成阶段的初始摆放。 |
| `MissionPeer` | `public MissionPeer MissionPeer` | 联网时的 peer 引用，setter 会做双向绑定并在服务器上同步血量、主动触发一次 `OnAgentHealthChanged`。单机为 null。 |
| `CharacterPowerCached` | `public float CharacterPowerCached { get; private set; }` | **缓存值**，不是现算。[Formation](../Formation).`GetFormationPower()` 就是把它逐个相加。 |
| `Health` 阈值常量 | `public const float HealthDyingThreshold = 1f;` | 与 `BecomeTeenagerAge = 14f`、`MaxMountInteractionDistance = 1.75f`、`DismountVelocityLimit = 0.5f`、`CachedAndFormationValuesUpdateTime = 0.5f`、`MaxInteractionDistance = 3f`、`MaxFocusDistance = 10f` 一同定义在类尾部。 |
| `DefaultTauntActions` | `public static readonly ActionIndexCache[] DefaultTauntActions` | 4 个元素的数组（`act_taunt_cheer_1` 到 `_4`），供嘲讽/喝彩行为取用。**数组本身可写**，别原地改。 |
| `MoveVisualOrder` / `FiringOrder` 等 | `public FiringOrder FiringOrder { get; }`（继承自编队同步） | 这些顺序属性由 [Formation](../Formation) 在 `AddUnit` 时同步下发，`SetFiringOrder` / `SetRidingOrder` 是显式入口。 |

## 真实示例

第一种：每帧筛人。这是官方逻辑里最常见的形状——注意判空链和「读属性有 native 开销」这两点：

```csharp
using TaleWorlds.Core;
using TaleWorlds.Library;
using TaleWorlds.MountAndBlade;

public class MyThreatScanner : MissionLogic
{
    private readonly MBList<Agent> _scratch = new MBList<Agent>();

    public override void OnMissionTick(float dt)
    {
        Mission mission = Mission.Current;
        Agent player = mission.MainAgent;
        if (player == null || player.Team == null)
        {
            return;
        }

        // GetNearbyEnemyAgents 会先 Clear 传入的列表再填充，所以缓存一份复用、避免每帧分配
        mission.GetNearbyEnemyAgents(player.Position.AsVec2, 25f, player.Team, this._scratch);
        for (int i = 0; i < this._scratch.Count; i++)
        {
            Agent enemy = this._scratch[i];
            if (!enemy.IsActive() || enemy.IsMount)
            {
                continue;
            }
            float distanceSquared = player.Position.DistanceSquared(enemy.Position);
            if (distanceSquared > 625f)
            {
                continue;
            }
            if (player.IsEnemyOf(enemy))
            {
                Debug.Print("threat: " + enemy.Name + " hp=" + enemy.Health, 0);
            }
        }
    }
}
```

第二种：改血量并观察事件。**注意向上取整**这条规则——想扣 0.5 点会被静默吞掉：

```csharp
Agent unit = Mission.Current.MainAgent;

// 整数：正常走事件
unit.Health = 40f;          // _health = 40，发 OnAgentHealthChanged(old, 40)

// 小数：向上取整！40.1 -> 41，39.9 -> 40
unit.Health = 40.1f;

// 约等于 0：归零
unit.Health = 0.000001f;

// 变化 < 1e-5：整体跳过，连事件都不发
unit.Health = 40f;

// 挂事件看变化（委托签名 (Agent, float oldHealth, float newHealth)）
unit.OnAgentHealthChanged += (agent, oldHealth, newHealth) =>
{
    Debug.Print(agent.Name + ": " + oldHealth + " -> " + newHealth, 0);
};
```

第三种：调整编队归属。`Formation` 的 setter 会自动处理网络广播与脱离队，所以**不要**先 `RemoveUnit` 再 `AddUnit`：

```csharp
Agent unit = Mission.Current.Agents[0];
Formation archers = unit.Team.GetFormation(FormationClass.Ranged);

// 一行搞定：内部会 RemoveUnit(旧编队) + AddUnit(新编队) + 广播 AgentSetFormation
unit.Formation = archers;

// 读编队当前人数（注意是「阵型 + 脱离」的加法）
int total = archers.CountOfUnits;

// 读编队现役单位（两段式：先阵型名单，再脱离名单）
Agent first = archers.GetFirstUnit();
if (first != null)
{
    Debug.Print("interval=" + archers.Interval + " width=" + archers.Width, 0);
}
```

## 风险与边界

- **`Agent` 是 sealed，不能继承。** 扩展只能走 [AgentComponent](../../mission-ext/AgentComponent)（`AddComponent` / `RemoveComponent` / `GetComponent<T>`）。
- **`IsPlayerControlled` 不是「本地可操作」。** 它是 `IsMine || MissionPeer != null`，联网时对方玩家控制的单位同样为 true。
- **`IsAIControlled` 在客户端和回放上恒为 false**（`&& !GameNetwork.IsClientOrReplay`）。写「是否 AI 控制」的逻辑时要注意客户端/服务器结论不同。
- **`Health` 的 setter 向上取整到整数。** 3.2 → 4，39.9 → 40。小数血量在这套系统里不存在。同理 1e-5 内的变化被忽略、约等于 0 的值被归零。
- **`SetClothingColor1` / `SetClothingColor2` 只写托管字段。** 方法体各一行 `this._clothingColor1 = new uint?(color);`，**不推给渲染、不发网络消息**。想看到外观变化得自己刷新/重建外观。
- **`ClothingColor2` 为 null 时回落到 `ClothingColor1`**，不是回落到 `Team.Color2`。
- **`ClothingColor1` 在既没有字段值又没有 Team 时返回 `uint.MaxValue`**（不透明白），并打一条 `Debug.FailedAssert`。发布构建里 assert 可能被去掉，你会拿到白色而不是错误。
- **`GetComponent<T>()` 找不到返回 `default(T)`。** 引用类型即 null，不抛异常。解引用前必须判空。
- **`Equipment` 有 `int` 与 `EquipmentIndex` 两个索引器。** 传哪个类型决定了编译期选哪个重载。`EquipmentIndex` 的值域是 `-1..13`（`None = -1`、`Weapon0 = 0`、`ArmorItemBeginSlot = 5`、`Horse = 10`、`NumEquipmentSetSlots = 13`），强转 int 是安全的，但**写 `agent.Equipment[(int)slot]` 和 `agent.Equipment[slot]` 是两条不同的重载路径**。
- **`WieldedWeapon` 的守卫只挡负值。** `primaryWieldedItemIndex < EquipmentIndex.WeaponItemBeginSlot`（即 `< 0`）拦得住 `None = -1`，但拦不住越界的正数——理论上返回 5 会取到 `Head` 护甲槽。实践中 native 只会给合法值或 -1，但自己构造 `MissionEquipment` 时要注意。
- **`GetCurrentAction(int channelNo)` 只有两个通道。** 实现是 `channelNo == 0 ? channel0 : channel1`，传 2、3 都会静默落到 channel 1。
- **`SetActionChannel` 的 `actionShift` 会平移最终索引。** 送进 native 的是 `actionIndexCache.Index + actionShift`，所以「设完读回来应该相等」不成立。
- **`IsEnemyOf` / `IsFriendOf` 判定权在 native。** 不要用 `a.Team != b.Team` 替代——同盟关系、观战、投射物归属等情况会不同。
- **`Team` 可能为 null。** 生成中途与任务收尾阶段都会出现，任何 `agent.Team.GetFormation(...)` 都要先判空。
- **`CharacterPowerCached` 是缓存。** 装备/属性变了但没刷新时，[Formation](../Formation).`GetFormationPower()` 拿到的是旧值。
- **`TeleportToPosition` 不做校验。** 一次搬坐骑、自己、骑手三个 native 对象，越界/无 navmesh 时不会报错，只会把单位扔到非法位置。
- **`Die` 会先清血再改击杀归属。** `this.Health = 0f` 发生在回填 `b.OwnerId` **之前**，所以你的 `OnAgentHealthChanged` 处理器里读到的击杀者信息可能还没修正。
- **`Hitter.AssistMinDamage = 35f` 是硬编码常量。** 助攻归属阈值，平衡改动会动它。
- **`DefaultTauntActions` 是可写数组。** 原地修改会影响全进程。

## 跨版本提示

`Agent` 是整个 API 里最大、改动最频繁的类型之一，1.3.0 已有 484 个 public/protected 成员。跨版本最需要盯的四类：

一是**新增 native 转发属性**。几乎每个版本都会加新的 `GetXxx()` 单行方法，它们在跨语言边界上有真实开销；如果你在每帧循环里遍历上百个 Agent 读十几个这样的属性，值得实测一次开销。

二是**`Health` 的取整规则**。向上取整 + 1e-5 阈值是当前实现的性质。若某版本改成保留小数，你所有「小数血量无效」的假设都会失效，反之亦然。写血量相关逻辑时不要依赖小数。

三是**嵌套枚举的成员增减**。`ActionStage`、`AIScriptedFrameFlags`、`AISpecialCombatModeFlags`、`AIStateFlag`、`WatchState`、`MortalityState`、`CreationType`、`EventControlFlag`、`FacialAnimChannel`、`ActionCodeType`、`GuardMode`、`HandIndex`、`KillInfo`、`MovementBehaviorType`、`MovementControlFlag`、`UnderAttackType`、`UsageDirection`、`WeaponWieldActionType`、`StopUsingGameObjectFlags` 共 19 个。其中带 `: uint` 后缀的 `AIStateFlag`、`EventControlFlag`、`MovementControlFlag` 适合位组合——**用位运算判断时永远不要写死数值**，改用枚举名。

四是**`Formation` setter 的副作用范围**。它现在会广播网络消息、同步脱离队、通知所有组件。后续版本如果在这条路径上插入更多联动（比如新的同步层），你的「直接赋值 Formation」的代码会跟着承受。

## 依赖关系

- 宿主任务：[Mission](../Mission) 持有 `AllAgents` / `Agents`，并通过 `Mission.Current` 提供全局上下文；`Mission.GetNearbyEnemyAgents` 等邻近查询是取人入口
- 编队：[Formation](../Formation) 是 `Agent.Formation` 的另一端，`AddUnit` / `RemoveUnit` 与 `Formation` setter 双向配对
- 队伍：[Team](../../mission-ext/Team) 的 `GetFormation(FormationClass)` 是取编队的标准入口
- 扩展点：[AgentComponent](../../mission-ext/AgentComponent) 是唯一可继承的方向（`Agent` 自身 sealed）；[HumanAIComponent](../../mission-ext/HumanAIComponent) / [CommonAIComponent](../../mission-ext/CommonAIComponent) 是内置的两块
- 装备：[MissionEquipment](../../mission-ext/MissionEquipment) 装在 `Agent.Equipment` 上，索引器有两个重载；`Equipment` / `EquipmentIndex` / `EquipmentElement` 在 `TaleWorlds.Core`
- 动作：[ActionIndexCache](../ActionIndexCache) 是动画通道协议；[MBActionSet](../../mission-ext/MBActionSet) 通过 `Agent.ActionSet` 拿别名表
- 行为回调：[MissionBehavior](../MissionBehavior) 的 `IsThereAgentAction` 被 `CanInteractWithAgent` 遍历调用
- 核心枚举：[AgentFlag](../../core-extra/AgentFlag)（`IsHumanoid` / `Mountable` 位）、[AgentControllerType](../../core-extra/AgentControllerType)、[AgentState](../../core-extra/AgentState)、[DrivenProperty](../../core-extra/DrivenProperty)、[ItemObject](../../core-extra/ItemObject)、[Monster](../../core-extra/Monster)
- 伤害：[Blow](../../mission-ext/Blow)、[AttackCollisionData](../../mission-ext/AttackCollisionData)、[MissionWeapon](../../mission-ext/MissionWeapon)、[KillingBlow](../../mission-ext/KillingBlow) 是 `Die` / `RegisterBlow` 的参数类型
- 桶首页：[mission API 分区](../)