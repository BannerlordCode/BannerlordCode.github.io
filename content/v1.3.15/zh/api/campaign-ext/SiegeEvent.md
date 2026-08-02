---
title: "SiegeEvent"
description: "战役地图上一次围城（攻城/守城）的完整运行时状态机：它持有被围据点、攻城营与攻守双方的攻城器械建造/轰击进度，并在战役每日 tick 中推进战略、建造与炮击，直到围城被撤走或分出胜负。"
---

# SiegeEvent

**Namespace:** TaleWorlds.CampaignSystem.Siege  
**Module:** TaleWorlds.CampaignSystem  
**Type:** `public class SiegeEvent`  
**Base:** 无（不继承任何类，也不是 `MBObjectBase`，因此不能通过 `MBObjectManager` 取得）  
**File:** `TaleWorlds.CampaignSystem/Siege/SiegeEvent.cs`

## 概述

`SiegeEvent` 表示战役地图上**正在进行的一次围城**：某支部队正在围攻某个据点。它把这次围城的"真相"集中在一个对象里——被围的据点、攻城营、攻守双方的攻城器械（建造进度 / 血量 / 重新部署进度）、海上封锁状态，以及每帧如何推进建造与炮击。它是战役**战略层**的对象，与真正开打时的战斗（`MapEvent` + 任务场景）相互独立：围城在战斗之外照常运转，战斗只是围城过程中的一个插曲。

> 注意：`SiegeEvent` 不是 `MBObjectBase` 的子类，所以**没有** `MBObjectManager.Instance.GetObject<SiegeEvent>` 这种取法。拿到它的唯一现实入口是 `Settlement.SiegeEvent`、玩家参与的 `PlayerSiege.PlayerSiegeEvent`，或 `Campaign.Current.SiegeEventManager.SiegeEvents`。详见下文「如何获取 SiegeEvent」。

## 心智模型

把 `SiegeEvent` 想成**"一个据点头顶上挂着的围城记事板"**：

- **它是什么**：围城期间，被围据点 `Settlement.SiegeEvent` 指向同一个 `SiegeEvent` 实例；攻城方 `MobileParty.BesiegerCamp` 也反向挂在这个对象上。它不负责打战斗，只负责"围"——布器械、造器械、轰城墙、算伤亡、最终由撤离或战斗结果收尾。
- **谁创建 / 持有**：由 `Campaign.Current.SiegeEventManager` 通过 `StartSiegeEvent(settlement, attackerParty)` 创建，并被放进 `SiegeEventManager` 内部的 `MBList<SiegeEvent>`。引擎在战役每日 tick 里遍历这个列表对每个围城调用 `Tick`。**mod 不应自己 `new SiegeEvent(...)`**——围城由遭遇流程（玩家选择围城菜单或 AI 抵达据点）触发创建。
- **生命周期**：`StartSiegeEvent` → 构造函数写入 `settlement.SiegeEvent`、建 `BesiegerCamp`、给攻城主将与据点所属家族首领之间施加 -5 关系、记录 `SiegeStartTime`、有港口且带船时自动开封锁、广播 `OnSiegeEventStarted` → 之后每日 `Tick` 推进建造/炮击/战略 → 攻城方撤离或突击/出城战分出胜负 → `OnBeforeSiegeEventEnd` 记录胜负 → `FinalizeSiegeEvent` 收尾并把 `Settlement.SiegeEvent` 清空（`ReadyToBeRemoved` 变 true）→ `SiegeEventManager` 在下一次 tick 把它从列表移除。
- **所在层**：战役（Campaign）战略层，非任务（Mission）层。真正开打时，`PlayerSiege.StartSiegeMission` 会调用 `GetPreparedAndActiveSiegeEngines` 把本对象的器械"投影"成任务场景里的 `MissionSiegeWeapon`。
- **与 `MapEvent` 的关系**：围城中的突击（Assault）、出城（SallyOut）等战斗各自是一次 `MapEvent`；`SiegeEvent.Tick` 在任意一方的 `MapEvent` 仍活跃时会**跳过**引擎推进，避免与战斗逻辑冲突。战斗结算后通过 `OnBeforeSiegeEventEnd` 把胜负写回围城。
- **何时用**：读取/判断当前围城状态（被围据点、攻城方、器械进度、是否玩家围城）、在菜单/任务里决定 AI 战术、查询参战方、编程式摧毁某台器械、或让攻城方合法撤离（`LiftSiegeAction`）。
- **何时不要用**：不要自己 `new SiegeEvent`、不要直接把 `Settlement.SiegeEvent = null`、不要在战斗/任务期间手动调 `Tick`/`ConstructionTick`/`BombardTick`/`AdvanceStrategy`（见风险段）；结束围城请用 `LiftSiegeAction` 而非手动 `FinalizeSiegeEvent`。
- **依赖**：创建/持有依赖 `SiegeEventManager`、`Settlement`、`MobileParty`；推进依赖 `SiegeEventModel`（建造速度/伤害/命中率）与 `SiegeStrategyActionModel`（每帧决定造什么）；攻守两侧统一表现为 `ISiegeEventSide`（`BesiegerCamp` 为攻方，`Settlement` 本身即守方）。
- **失败模式**：见下方「风险段」。

## 如何获取 SiegeEvent

```csharp
// 1) 从据点拿到它正在进行的围城（最常用）
Settlement besieged = MobileParty.MainParty.BesiegedSettlement;
SiegeEvent siegeEvent = besieged?.SiegeEvent;   // 不在被围时为 null

// 2) 玩家当前正在参与的围城（无论攻方还是守方）
SiegeEvent playerSiege = PlayerSiege.PlayerSiegeEvent;

// 3) 遍历世界上所有进行中的围城
foreach (SiegeEvent evt in Campaign.Current.SiegeEventManager.SiegeEvents)
{
    if (evt.ReadyToBeRemoved)
        continue;
    // evt.BesiegedSettlement / evt.BesiegerCamp ...
}
```

## 依赖图

### 上游（创建 / 持有）
- [SiegeEventManager](../SiegeEventManager/) — 唯一创建入口 `StartSiegeEvent`，持有 `MBList<SiegeEvent>`，驱动每日 `Tick`，读档时 `OnAfterLoad`。
- [Settlement](../../campaign/Settlement/) — `BesiegedSettlement`；据点把自身 `.SiegeEvent` 指向本对象，是"这个据点是否被围"的真相源。
- [MobileParty](../../campaign/MobileParty/) — 攻城方领袖 `BesiegerCamp.LeaderParty`，以及 `MobileParty.BesiegedSettlement` / `.BesiegerCamp` 反向关联。
- [EncounterManager](../EncounterManager/) — 在部队抵达据点时触发 `StartSiegeEvent`。

### 下游 / 消费方
- [SiegeEventCampaignBehavior](../SiegeEventCampaignBehavior/) — 订阅围城相关事件、提供 `menu_siege_strategies` 等围城菜单、设置默认战术。
- [PlayerSiege](../PlayerSiege/) — 玩家围城的静态入口；`PlayerSiegeEvent` 即"玩家当前参与的 SiegeEvent"。
- [SiegeAftermathCampaignBehavior](../SiegeAftermathCampaignBehavior/) / [SiegeAftermathAction](../SiegeAftermathAction/) — 围城分出胜负后处理占领/附庸等后果。
- [LiftSiegeAction](../LiftSiegeAction/) — 结束/撤离围城的**正确**入口（清掉攻城方，使 `Settlement.SiegeEvent` 置空）。

### 相关事件 / 模型 / 数据
- 事件：[CampaignEvents](../CampaignEvents/) 与 [CampaignEventDispatcher](../CampaignEventDispatcher/) 中的 `OnSiegeEventStarted` / `OnSiegeEventEnded` / `OnSiegeEngineBuilt` / `OnSiegeBombardmentHit` / `OnSiegeEngineDestroyed` / `OnBlockadeActivated` / `OnBlockadeDeactivated`。
- 模型：[SiegeEventModel](../SiegeEventModel/)（建造速度、伤害、命中率）、[SiegeStrategyActionModel](../SiegeStrategyActionModel/)（每帧决定造什么/部署什么）、[SiegeStrategy](../SiegeStrategy/)（战术）、[SiegeBombardTargets](../SiegeBombardTargets/)（炮击目标类型）。
- 类型：[BesiegerCamp](../BesiegerCamp/)（攻方 `ISiegeEventSide`）、[ISiegeEventSide](../ISiegeEventSide/)（攻守双方统一接口）、[BattleSideEnum](../../core-extra/BattleSideEnum/)、[DefaultSiegeEngineTypes](../../core-extra/DefaultSiegeEngineTypes/)、[MapEvent](../../campaign/MapEvent/)（围城中的突击/出城战是对应的 `MapEvent`）、[Town](../../campaign/Town/)（守方城墙/总督）。

### 存档点
- `SiegeEvent` 通过 `[SaveableField]` / `[SaveableProperty]` 序列化，作为 `SiegeEventManager` 的一部分随战役存档持久化；`OnAfterLoad` 负责跨版本修复（旧档补激活封锁等）。

## 风险段

- **坏档 / 悬空引用**：`SiegeEvent` 持有 `BesiegedSettlement` 与 `BesiegerCamp`。若 mod 在据点仍被围时把它**摧毁/移除/改所属**，而未先通过 `LiftSiegeAction` 撤走攻城方，则 `Settlement.SiegeEvent` 仍指向一个失效对象，`SiegeEventManager` 后续 `Tick` 可能崩溃或产生坏档。正确顺序：先 `LiftSiegeAction.GetGameAction(party)` 或直接清掉 `BesiegerCamp`，让 `Settlement.SiegeEvent` 自然清空，再处理据点。
- **错误的阶段里手动驱动 tick**：`Tick` / `ConstructionTick` / `BombardTick` / `AdvanceStrategy` 由战役每日 tick 调用，内部用 `CampaignTime.DeltaTime == CampaignTime.Zero` 保护。在任务/战斗期间（DeltaTime 为 0）或任何一方 `MapEvent` 仍活跃时手动调用会提前返回、无效；在战斗外手动调用又可能与正常 tick 重叠，导致建造进度/血量被**重复计算**、器械状态不一致。
- **不要直接 `FinalizeSiegeEvent`**：它负责解引用 `Settlement.SiegeEvent`、结束挂着的 `MapEvent`、切换玩家菜单。若不清掉攻城方就直接调用，会留下悬空的 `SiegeEvent` 且 `ReadyToBeRemoved` 逻辑错乱。结束围城请走 `LiftSiegeAction`。
- **`GetPreparedAndActiveSiegeEngines` 的状态前提**：`PlayerSiege.StartSiegeMission` 只在 `BesiegedSettlement.CurrentSiegeState == Settlement.SiegeState.OnTheWalls` 时调用它来生成攻城战器械；若在其他围城状态下调用同名链路会触发 `Debug.FailedAssert`。
- **`IsPlayerSiegeEvent` 的瞬时性**：它依赖 `PlayerSiege.PlayerSiegeEvent` 与 `BesiegerCamp.LeaderParty.IsMainParty`；在围城正在收尾（`FinalizeSiegeEvent`）的过程中读取可能得到不一致结果，用它做关键分支时先判空 `PlayerSiege.PlayerSiegeEvent`。
- **封锁与主角锚点**：`ActivateBlockade` / `DeactivateBlockade` 会切换 `MobileParty.MainParty.Anchor.IsDisabled`（仅当主角是攻城方一员时）。对**非玩家**围城调用也会遍历参战方刷新海军视觉，但这对主角锚点无影响；不要把它当作"冻结某部队"的通用开关。

## 成员说明

### 核心运行时状态

#### `public readonly Settlement BesiegedSettlement`
被围的据点（城镇/城堡）。构造时 `settlement.SiegeEvent = this`，所以它是"这个据点是否被围"的直接来源。攻城相关的城墙血量、总督、人口都通过它访问（见 [Town](../../campaign/Town/)）。

#### `public readonly BesiegerCamp BesiegerCamp`
攻城营，实现 `ISiegeEventSide`，代表攻方。持有攻城方参战部队列表、攻方器械容器、领袖 `LeaderParty`。

#### `public CampaignTime SiegeStartTime`
围城开始的时刻（`CampaignTime.Now`）。用于计算上面的随机种子，也常在 UI 显示"已围 X 天"。

#### `public bool IsPlayerSiegeEvent`
是否为玩家参与的围城。实现：若攻城营领袖是主部队则返回 true，否则比较 `PlayerSiege.PlayerSiegeEvent == this`。只读查询，无副作用。

#### `public bool ReadyToBeRemoved`
`=> BesiegedSettlement.Party.SiegeEvent == null`。当据点的围城引用已被清空（攻城方撤走/收尾完毕），`SiegeEventManager` 下一次 tick 会据此把它从列表移除。只读。

#### `public int SiegeWallSeed` / `public int SiegePeopleSeed`
基于 `SiegeStartTime`、`BesiegedSettlement.StringId`、城墙总血量、双方伤亡数算出的确定性随机种子，保证同一围城的城墙破损分布/人群分布在不同会话中一致。只读。

#### `public bool BlockadeShouldBeActivated` / `public bool IsBlockadeActive`
有港口据点的海上封锁状态。`BlockadeShouldBeActivated` 标记"应该开但还没开"（读档旧版本时由 `OnAfterLoad` 据此补激活）；`IsBlockadeActive` 是当前是否已在封锁中。只读。

### 参战方与阵营

#### `public ISiegeEventSide GetSiegeEventSide(BattleSideEnum side)`
把阵营映射到实际的攻/守方对象：**攻方 → `BesiegerCamp`，守方 → `BesiegedSettlement`**（据点自身实现了 `ISiegeEventSide`）。几乎所有需要"某一侧的器械/参战方/战略"的方法（`AdvanceStrategy`、`ConstructionTick`、`BreakSiegeEngine`、`GetPreparedAndActiveSiegeEngines` 等）都先用它拿到对应 `ISiegeEventSide`。纯查询，无副作用。

```csharp
ISiegeEventSide attacker = siegeEvent.GetSiegeEventSide(BattleSideEnum.Attacker);
ISiegeEventSide defender = siegeEvent.GetSiegeEventSide(BattleSideEnum.Defender);
```

#### `public bool CanPartyJoinSide(PartyBase party, BattleSideEnum side)`
判断某部队能否加入指定一侧：它所在阵营必须与目标侧所有参战方**不交战**，且与另一侧所有参战方**交战**。纯查询。

#### `public List<PartyBase> GetInvolvedPartiesForEventType(MapEvent.BattleTypes battleType)`
合并 `BesiegerCamp` 与 `BesiegedSettlement` 在该战斗类型下的参战方，返回 `List<PartyBase>`。需要枚举围城涉及哪些部队（发战利品、算伤亡、判可加入性）时调用。

#### `public MapEvent.BattleTypes GetCurrentBattleType()`
当前进行的战斗类型：攻城方领袖的 `MapEvent` 存在则取其 `EventType`，否则默认 `MapEvent.BattleTypes.Siege`。常与 `IsPartyInvolved` 配合判定某部队是否卷入当前围城战斗。

#### `public bool IsPartyInvolved(PartyBase party)`
`=> GetInvolvedPartiesForEventType(GetCurrentBattleType()).Contains(party)`，判断某部队是否卷入"当前战斗类型"的围城。纯查询。

### 生命周期：推进与结束

#### 构造函数 `public SiegeEvent(Settlement settlement, MobileParty besiegerParty)`
建立一次围城。**副作用很大**：写入 `settlement.SiegeEvent`、新建 `BesiegerCamp` 并把 `besiegerParty.BesiegerCamp` 指向它、给攻城主将与据点所属家族首领间施加 -5 关系（玩家家族据点除外）、初始化攻守双方攻城侧、记录 `SiegeStartTime`、有港口且攻城方带船时自动 `ActivateBlockade`、广播 `OnSiegeEventStarted`。**不要**从 mod 里手动 `new`；创建入口是 `SiegeEventManager.StartSiegeEvent`，由遭遇流程触发。

#### `public void Tick(float dt)`
由 `SiegeEventManager` 在战役每日 tick 调用，推进整个围城：先 `CheckBesiegerPartiesAndMakeThemLeave`，若 `!ReadyToBeRemoved` 则对攻方与守方依次执行 `AdvanceStrategy` → `ConstructionTick` → `BombardTick`。**副作用**：可能创建/销毁器械、推进建造与重新部署进度、生成 `SiegeEngineMissile`、触发 `OnSiegeEngineBuilt` / `OnSiegeBombardmentHit` 等事件，并可能造成守军伤亡。**不要从 mod 手动调用**——它在 `CampaignTime.DeltaTime == CampaignTime.Zero` 或任一方 `MapEvent` 活跃时会提前返回。

#### `public void OnBeforeSiegeEventEnd(BattleState winnerSide, MapEvent.BattleTypes battleType)`
战斗结束时记录胜负：对 `SallyOut`、以及 `Siege`/`SiegeOutside` 分别设置内部 `_isBesiegerDefeated` 标志。这是战役层把"战斗结果"写回围城状态的关键钩子。由战斗结算流程调用，mod 通常不直接调。

#### `public void OnAfterLoad()`
读档后回调：`BesiegerCamp.OnAfterLoad()` 重建内部计数；对小于 `v1.3.13.105378` 的旧档补激活封锁（`BlockadeShouldBeActivated` 为真时调 `ActivateBlockade`）。由 `SiegeEventManager.OnAfterLoad` 遍历调用，mod 不直调。

#### `public void SetPositionAfterMapChange(CampaignVec2 newPosition)`
地图变更后把攻城营位置同步过去，并对仍在进行中的围城突击 `MapEvent` 同步位置。由系统处理地图变更时调用。

#### `public void FinalizeSiegeEvent()`
正式结束围城：广播 `OnSiegeEventEnded`、收尾 `BesiegerCamp` 与 `BesiegedSettlement`、结束仍挂着的 `MapEvent`、把玩家相关界面切到 `siege_attacker_defeated`/`siege_attacker_left`，并在适当时调 `PlayerSiege.FinalizePlayerSiege()`。**副作用**：解引用 `Settlement.SiegeEvent`（使 `ReadyToBeRemoved` 为 true）、可能切换游戏菜单。**不要直接调用**——让围城随战斗/撤离自然结束，或用 `LiftSiegeAction` 使攻城方撤走。

### 攻城策略与器械推进

#### `public void AdvanceStrategy(ISiegeEventSide siegeEventSide)`
推进某一侧的攻城策略：向 `SiegeStrategyActionModel.GetLogicalActionForStrategy` 询问该侧此刻应做的动作（造新器械 / 从预备队部署 / 移回预备队 / 拆除 / 待命），再转交 `DoSiegeAction` 执行。由 `Tick` → `TickSiegeEventSide` 调用；mod 一般不直接调。

#### `public void DoSiegeAction(ISiegeEventSide siegeEventSide, SiegeStrategyActionModel.SiegeAction siegeAction, SiegeEngineType siegeEngineType, int deploymentIndex, int reserveIndex)`
实际执行一个攻城动作：新建并部署器械、从预备队部署、移到预备队、拆除部署的器械，或待命。会按情况刷新 `BesiegedSettlement.Party.SetVisualAsDirty()`。动作决策来自 `AdvanceStrategy`，mod 想编程式改变某侧布局时也可直接调（需同时给出正确的 `deploymentIndex` / `reserveIndex`）。

#### `public void ConstructionTick(ISiegeEventSide siegeEventSide)`
推进某一侧器械的**建造与重新部署**：对未完成且不在重新部署的器械按 `SiegeEventModel.GetConstructionProgressPerHour` 累加 `Progress`（0→1）；建成的调用 `CreateSiegeObject` 生成 `RangedSiegeEngine`；正在重新部署的按比例推进 `RedeploymentProgress`。会清理过期的已移除器械。由 `Tick` 调用，mod 不直调。

#### `public void BombardTick(ISiegeEventSide siegeEventSide)`
推进某一侧的**炮击**：处理已命中的 `SiegeEngineMissile`（砸墙或砸对方远程器械），并对所有已就绪（`IsReadyToFire`）的远程器械决定目标、记录 `OnFireDecisionTaken`、按 `SiegeEventModel.GetSiegeEngineHitChance` 掷骰生成新的 `SiegeEngineMissile`。由 `Tick` 调用，mod 不直调。

#### `public void BreakSiegeEngine(ISiegeEventSide siegeEventSide, SiegeEngineType siegeEngineType)`
摧毁指定一侧、指定类型的一台**已激活**器械（从部署位移除，不进预备队）。`Preparations` 类型会把进度清零；远程/近战类型则按 `DeployedRangedSiegeEngines` / `DeployedMeleeSiegeEngines` 找到后 `RemoveDeployedSiegeEngine`，并刷新地图视觉。**调用时机**：需要编程式摧毁某台器械时（任务奖励、特殊事件），最好在事件回调里、与 `Tick` 不冲突的时机调用。

```csharp
// 把攻城方正在使用的一台攻城塔拆掉
ISiegeEventSide attacker = siegeEvent.GetSiegeEventSide(BattleSideEnum.Attacker);
siegeEvent.BreakSiegeEngine(attacker, DefaultSiegeEngineTypes.SiegeTower);
```

### 读取与布置攻城器械

#### `public Dictionary<SiegeEngineType, int> GetPreparedSiegeEnginesAsDictionary(ISiegeEventSide siegeEventSide)`
返回该侧"已建成且存活（Hitpoints > 0、非 `Preparations`）"的器械按类型聚合的数量 `Dictionary<SiegeEngineType, int>`。只读。

#### `public List<MissionSiegeWeapon> GetPreparedAndActiveSiegeEngines(ISiegeEventSide siegeEventSide)`
返回该侧可投入战斗的器械列表（元素 `MissionSiegeWeapon`），用于把战役层器械投影到任务场景。只读。被 `PlayerSiege.StartSiegeMission` 在 `CurrentSiegeState == OnTheWalls` 时调用以生成可操控攻城武器。**注意**：不在 `OnTheWalls` 状态下进入此链路会触发 `Debug.FailedAssert`。

```csharp
if (PlayerSiege.PlayerSiegeEvent != null && MobileParty.MainParty.BesiegerCamp != null
    && MobileParty.MainParty.BesiegedSettlement.CurrentSiegeState == Settlement.SiegeState.OnTheWalls)
{
    SiegeEvent playerSiege = PlayerSiege.PlayerSiegeEvent;
    List<MissionSiegeWeapon> attackerWeapons =
        playerSiege.GetPreparedAndActiveSiegeEngines(playerSiege.GetSiegeEventSide(BattleSideEnum.Attacker));
    List<MissionSiegeWeapon> defenderWeapons =
        playerSiege.GetPreparedAndActiveSiegeEngines(playerSiege.GetSiegeEventSide(BattleSideEnum.Defender));
}
```

#### `public void CreateSiegeObject(SiegeEngineConstructionProgress siegeEngineConstructionProgress, ISiegeEventSide siegeSide)`
当一台器械建造完成时，为远程器械生成 `RangedSiegeEngine` 子对象并广播 `OnSiegeEngineBuilt`、刷新地图视觉。由 `ConstructionTick` 在 `IsActive` 达成时调用。

#### `public void SetSiegeEngineStatesAfterSiegeMission(IEnumerable<IMissionSiegeWeapon> attackerMissionSiegeEngineData, IEnumerable<IMissionSiegeWeapon> defenderMissionSiegeEngineData)`
战斗结束后，把任务场景里各器械的剩余血量/存活状态写回战役层：存活的回写 `Hitpoints`，被摧毁的调用 `BreakSiegeEngine`。在攻城战结算后由系统调用。

#### `public void FindAttackableRangedEngineWithHighestPriority(ISiegeEventSide siegeEventSide, int attackerSlotIndex, out int targetIndex, out float targetPriority)`
为某台攻击方远程器械在对方部署的远程器械中挑选优先级最高（距离最近）的目标，通过 `out` 参数返回 `targetIndex` 与 `targetPriority`。由 `BombardTick` 内部调用，mod 一般不直接调。

#### 嵌套数据：`SiegeEnginesContainer` / `SiegeEngineConstructionProgress` / `RangedSiegeEngine` / `SiegeEngineMissile`
- `SiegeEnginesContainer`（经 `ISiegeEventSide.SiegeEngines` 访问）：某一侧的器械容器。容量常量——攻方最多 **3** 近战 + **4** 远程，守方 **0** 近战 + **4** 远程。暴露 `DeployedSiegeEngines` / `ReservedSiegeEngines` / `RemovedSiegeEngines`（均为 `MBReadOnlyList<SiegeEngineConstructionProgress>`）、`AllSiegeEngines()`，以及 `AddPrebuiltEngineToReserve` / `DeploySiegeEngineAtIndex` / `RemoveDeployedSiegeEngine` / `RemovedSiegeEngineFromReservedSiegeEngines` / `FindDeploymentIndexOfDeployedEngine` / `ClearRemovedEnginesIfNecessary`。
- `SiegeEngineConstructionProgress`：单台器械的进度记录。`IsConstructed => Progress >= 1f`，`IsActive => IsConstructed && !IsBeingRedeployed`；含 `Hitpoints` / `MaxHitPoints` / `RedeploymentProgress` 及（远程器械的）`RangedSiegeEngine`。提供 `SetProgress` / `SetHitpoints` / `SetRedeploymentProgress` / `SetRangedSiegeEngine`。
- `RangedSiegeEngine`：远程器械的炮击子状态——`EngineType`、`IsReadyToFire`（`NextTimeEngineCanBombard.IsPast`）、当前/上次目标、命中时间；方法 `Hold` / `Reload` / `OnFireDecisionTaken`。
- `SiegeEngineMissile`：已发射炮弹的快照（射手类型/槽位、目标类型/槽位、是否命中、碰撞与决策时间），由 `BombardTick` 消费。

### 海上封锁

#### `public void ActivateBlockade()` / `public void DeactivateBlockade()`
对有港口的据点开启/关闭海上封锁。会切换 `MobileParty.MainParty.Anchor.IsDisabled`（仅当主角是攻城方一员时）、广播 `OnBlockadeActivated` / `OnBlockadeDeactivated`、刷新涉及的海战视觉。`ActivateBlockade` 还会把 `BlockadeShouldBeActivated` 置 false。一般由构造函数在"有港口且攻城方带船"时自动开启，或旧档由 `OnAfterLoad` 补激活；mod 通常不需手动调。

### `public override string ToString()`
返回 `"Siege of " + BesiegedSettlement.Name`，便于日志/调试。

## 典型用法示例

### 示例 1：扫描所有进行中的围城，识别玩家正在参与的那个

```csharp
using TaleWorlds.CampaignSystem;
using TaleWorlds.CampaignSystem.Siege;
using TaleWorlds.CampaignSystem.Party;
using TaleWorlds.Core;

foreach (SiegeEvent siegeEvent in Campaign.Current.SiegeEventManager.SiegeEvents)
{
    if (siegeEvent.ReadyToBeRemoved)
        continue;

    Settlement besieged = siegeEvent.BesiegedSettlement;
    MobileParty besieger = siegeEvent.BesiegerCamp.LeaderParty;

    if (siegeEvent.IsPlayerSiegeEvent)
    {
        InformationManager.DisplayMessage(new InformationMessage(
            $"玩家正在围攻 {besieged.Name}（攻城方领袖：{besieger.Name}）"));
    }
}
```

### 示例 2：从据点拿到围城，并摧毁攻城方一台已建成的器械

```csharp
using TaleWorlds.CampaignSystem;
using TaleWorlds.CampaignSystem.Siege;
using TaleWorlds.CampaignSystem.Party;
using TaleWorlds.Core;

Settlement besieged = MobileParty.MainParty.BesiegedSettlement;
SiegeEvent siegeEvent = besieged?.SiegeEvent;
if (siegeEvent != null && !siegeEvent.ReadyToBeRemoved)
{
    ISiegeEventSide attacker = siegeEvent.GetSiegeEventSide(BattleSideEnum.Attacker);
    siegeEvent.BreakSiegeEngine(attacker, DefaultSiegeEngineTypes.SiegeTower);
}
```

### 示例 3：玩家围城开战前，取出双方可用器械（投影到任务场景的来源）

```csharp
using TaleWorlds.CampaignSystem;
using TaleWorlds.CampaignSystem.Siege;
using TaleWorlds.CampaignSystem.Party;
using System.Collections.Generic;

if (PlayerSiege.PlayerSiegeEvent != null
    && MobileParty.MainParty.BesiegerCamp != null
    && MobileParty.MainParty.BesiegedSettlement.CurrentSiegeState == Settlement.SiegeState.OnTheWalls)
{
    SiegeEvent playerSiege = PlayerSiege.PlayerSiegeEvent;
    List<MissionSiegeWeapon> attackerWeapons =
        playerSiege.GetPreparedAndActiveSiegeEngines(playerSiege.GetSiegeEventSide(BattleSideEnum.Attacker));
    List<MissionSiegeWeapon> defenderWeapons =
        playerSiege.GetPreparedAndActiveSiegeEngines(playerSiege.GetSiegeEventSide(BattleSideEnum.Defender));
    // 交给场景/UI 使用；不要在 OnTheWalls 之外的状态下走这条链路
}
```

## 跨版本提示

- **API 稳定性**：`SiegeEvent` 的公开成员在 v1.3.0 / v1.3.15 / v1.4.5 之间基本一致（构造、`BesiegedSettlement`/`BesiegerCamp`、`IsPlayerSiegeEvent`、`ReadyToBeRemoved`、各 `Tick`/`ConstructionTick`/`BombardTick`、`GetPreparedAndActiveSiegeEngines`、`BreakSiegeEngine` 等均在）。
- **唯一差异**在内部存档迁移逻辑：`OnAfterLoad` 会对 `< v1.3.13.105378` 的旧档补激活封锁；`SetPositionAfterMapChange` 对 `< v1.3.0` 的旧档做 `BesiegerCamp.OnAfterLoad` 兼容。这些不影响 mod 对公开 API 的使用。
- 本页以 v1.4.5 权威源码为准；v1.3.15 文档沿用同一套 API。

## 导航块

- ↑ 父级：[战役扩展模块 (campaign-ext)](../) · [战役模块 (campaign)](../../campaign/)
- ↔ 同级（同桶）：[SiegeEventManager](../SiegeEventManager/) · [BesiegerCamp](../BesiegerCamp/) · [PlayerSiege](../PlayerSiege/) · [SiegeStrategy](../SiegeStrategy/) · [SiegeAftermathAction](../SiegeAftermathAction/) · [LiftSiegeAction](../LiftSiegeAction/) · [CampaignEvents](../CampaignEvents/) · [CampaignEventDispatcher](../CampaignEventDispatcher/) · [SiegeEventCampaignBehavior](../SiegeEventCampaignBehavior/) · [SiegeEventModel](../SiegeEventModel/) · [SiegeStrategyActionModel](../SiegeStrategyActionModel/) · [ISiegeEventSide](../ISiegeEventSide/)
- 相关类型（其他桶）：[Settlement](../../campaign/Settlement/) · [MobileParty](../../campaign/MobileParty/) · [MapEvent](../../campaign/MapEvent/) · [Campaign](../../campaign/Campaign/) · [Hero](../../campaign/Hero/) · [PartyBase](../../campaign/PartyBase/) · [Town](../../campaign/Town/) · [Clan](../../campaign/Clan/) · [BattleSideEnum](../../core-extra/BattleSideEnum/) · [DefaultSiegeEngineTypes](../../core-extra/DefaultSiegeEngineTypes/) · [SiegeBombardTargets](../SiegeBombardTargets/)
