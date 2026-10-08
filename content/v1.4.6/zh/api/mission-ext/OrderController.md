---
title: "OrderController"
description: "战斗中的命令通道：把 OrderType 意图翻译成对选中 Formation 的具体移动/朝向/开火/阵型命令，并管理选中列表、命令后处理与队形模拟预览。"
---
# OrderController

**Namespace:** `TaleWorlds.MountAndBlade`
**Module:** `TaleWorlds.MountAndBlade`
**Type:** `public class OrderController`
**Source:** `TaleWorlds.MountAndBlade/OrderController.cs`

> 节 schema：本页采用 7 节（按出现顺序）：概述 / 心智模型 / 怎么用 / 关键成员 / 真实示例 / 参见 / 导航

## 概述

`OrderController` 是战场上的**命令通道**。玩家按冲锋键、AI 决定追击、mod 想编程式调兵，最终都要经过它：它持有一个选中 Formation 列表（`SelectedFormations`，`OrderController.cs:23`），把一个 `OrderType` 意图（Charge、Move、ArrangementLine、HoldFire……）翻译成对每个选中 Formation 的具体执行对象——`MovementOrder`、`FacingOrder`、`FiringOrder`、`FormOrder`、`ArrangementOrder`、`RidingOrder`。

每个 `Team` 持有两个实例：`MasterOrderController`（AI/主逻辑用）与 `PlayerOrderController`（玩家输入用），构造时注入 `Mission`、`Team` 与 `Owner`（`OrderController.cs:2151`、`OrderController.cs:2154`）。它还内嵌一个 `SiegeWeaponController`（`OrderController.cs:19`）专门驱动攻城器械，并维护一套 `simulationFormations` 字典用于在不真正下命令的前提下预览队形落点。

## 心智模型

把它想成一条**命令流水线**，任何一次调兵都要走完五站：

1. **选谁**——`SelectFormation` / `SelectAllFormations` / `ClearSelectedFormations` 维护选中列表。列表就是命令的作用域，没选中的 Formation 不会收到任何命令。
2. **下什么**——`SetOrder(OrderType)`（`OrderController.cs:259`）是总入口，一个巨大的 switch 把三十余种 `OrderType` 分发到各 Formation 的 `SetMovementOrder` / `SetFacingOrder` / `SetFiringOrder` / `SetFormOrder` 等调用。带参数的重载（`SetOrderWithPosition`、`SetOrderWithFormation`、`SetOrderWithOrderableObject`）在意图之外附带目标点、目标 Formation 或可交互对象。
3. **前置清理**——`BeforeSetOrder`（`OrderController.cs:941`）在分发前把已不可选的 Formation 踢出列表，并在非客户端/回放环境下释放被 AI 控制的 Formation 的 AI 控制权（`AIControlOn`/`AIControlOff` 除外）。
4. **命令后处理**——`AfterSetOrder` 强制刷新每个单位的缓存与阵型值、重排随机 decide 时间、播放指挥官手势。是否立即刷新由 `FormationUpdateEnabledAfterSetOrder`（`OrderController.cs:33`）控制。
5. **事件与模拟**——`FireOnOrderIssued`（`OrderController.cs:2069`）触发 `OnOrderIssued` 事件；`Simulate*` 系列（`OrderController.cs:1487` 起）用 `simulationFormations` 字典把"如果下这条命令，每个单位会站哪"算出来，供 UI 画预览线，不改动真实阵型。

两个关键区分：**`OrderType` 是意图枚举，`MovementOrder` 等是执行对象**——OrderController 是两者之间的翻译层；**客户端与服务器行为不同**——客户端只发网络消息（`ApplyOrder` 等），真正执行在服务器/单机端，回放同理。

## 怎么用

### 怎么拿到

`OrderController` 不直接 new——它从 `Team` 上取：`team.MasterOrderController` 给 AI/系统逻辑用，`team.PlayerOrderController` 给玩家输入用。构造函数签名是 `OrderController(Mission mission, Team team, Agent owner)`，`Owner` 决定"谁在下令"，进而影响 `IsFormationSelectable` 的判定（只有 `formation.PlayerOwner == selectorAgent` 的 Formation 才能被该控制器选中）。`Team.SetCustomOrderController` 可以整体替换这两个实例（用于自定义战斗等场景），替换时通过 `AssignDelegatesToController` 把事件委托搬过去。

### 典型用法

```csharp
// 玩家选中两个步兵 Formation 后下令冲锋
Team team = Mission.Current.Teams.Attacker;
OrderController orders = team.PlayerOrderController;

orders.SelectAllFormations();
orders.SetOrder(OrderType.Charge);

// 或者：让选中部队移动到指定世界坐标
orders.SetOrderWithPosition(OrderType.Move, targetPosition);

// 或者：让选中部队追击某个敌方 Formation
orders.SetOrderWithFormation(OrderType.Charge, enemyFormation);

// 或者：对战场器械（投石车、城门）下达使用/攻击命令
orders.SetOrderWithOrderableObject(OrderType.Use, siegeEngine);
```

mod 想查询某 Formation 当前生效的命令，用静态系列：`GetActiveMovementOrderOf`（`OrderController.cs:1392`）把 `MovementOrder` 的内部状态映射回 `OrderType`，`GetActiveFacingOrderOf` / `GetActiveArrangementOrderOf` / `GetActiveFiringOrderOf` / `GetActiveAIControlOrderType` 各查一面。

### 坑

- **必须先选中再下令**。`SetOrder` 只遍历 `SelectedFormations`，空列表等于空操作；`SelectFormation` 对已选中或不可选的 Formation 会触发 `FailedAssert`。
- **AI 控制的 Formation 会被"夺权"**。`BeforeSetOrder` 在非客户端环境下会把 `IsAIControlled` 的 Formation 切回玩家控制（`AIControlOn`/`AIControlOff` 除外）——想让 AI 继续指挥就别用普通 `SetOrder`。
- **命令可以被劫持**。`AddOrderOverride`（`OrderController.cs:2084`）注册 `Func<Formation, MovementOrder, MovementOrder>` 改写最终命令；`GetOverridenOrderType`（`OrderController.cs:2095`）查询某 Formation 当前被改写成什么。构造函数里就注册了一个默认 override：CloseOrder 阵型下收到 StandYourGround 时会改成跟随阵型中位线的 Move。
- **Stop 命令会"卡住"**。`TryCancelStopOrder`（`OrderController.cs:2132`）在 Advance/FallBack 等命令前先把 Stop 状态顶掉，否则单位拒绝移动——新命令组合时记得先调它。
- **模拟与真实是两套**。`SimulateNewOrderWithPositionAndDirection`（`OrderController.cs:1487`）只写 `simulationFormations` 字典，不碰真实 Formation；拿模拟结果去推断真实位置会出错。

## 关键成员

| 成员 | 签名 | 作用 | 行号 |
| --- | --- | --- | --- |
| `SiegeWeaponController` | `public SiegeWeaponController SiegeWeaponController { get; private set; }` | 内嵌的攻城器械控制器，构造时创建；器械相关命令走它而不是普通 Formation 通道 | `OrderController.cs:19` |
| `SelectedFormations` | `public MBReadOnlyList<Formation> SelectedFormations` | 当前选中列表，所有 SetOrder* 的作用域；只读视图，内部是 `_selectedFormations` | `OrderController.cs:23` |
| `FormationUpdateEnabledAfterSetOrder` | `public bool FormationUpdateEnabledAfterSetOrder` | 下命令后是否立即强制刷新单位缓存与阵型值；关掉可批量下令后统一刷新 | `OrderController.cs:33` |
| `SelectFormation` | `public void SelectFormation(Formation formation)` | 选中单个 Formation；客户端会发 `SelectFormation` 网络消息，可选时播放选中手势 | `OrderController.cs:142` |
| `DeselectFormation` | `public void DeselectFormation(Formation formation)` | 取消选中；对未选中的 Formation 调用会 FailedAssert | `OrderController.cs:148` |
| `IsFormationListening` | `public bool IsFormationListening(Formation formation)` | 查询某 Formation 是否在选中列表里 | `OrderController.cs:167` |
| `IsFormationSelectable` | `public bool IsFormationSelectable(Formation formation)` | 该 Formation 能否被本控制器选中（有存活单位且 PlayerOwner 匹配） | `OrderController.cs:173` |
| `SelectAllFormations` | `public void SelectAllFormations(bool uiFeedback = false)` | 清空后选中 Team 全部有兵且可选的 Formation；`uiFeedback` 为 true 时播放"全体"语音 | `OrderController.cs:239` |
| `ClearSelectedFormations` | `public void ClearSelectedFormations()` | 清空选中列表；客户端发 `ClearSelectedFormations` 消息 | `OrderController.cs:245` |
| `SetOrder` | `public unsafe virtual void SetOrder(OrderType orderType)` | 总入口：把 OrderType 分发给所有选中 Formation 的 Movement/Facing/Firing/Form/Arrangement/Riding 命令 | `OrderController.cs:259` |
| `BeforeSetOrder` | `protected void BeforeSetOrder(OrderType orderType)` | 前置清理：踢出不可选 Formation、释放 AI 控制（AIControlOn/Off 除外） | `OrderController.cs:941` |
| `SetOrderWithAgent` | `public virtual void SetOrderWithAgent(OrderType orderType, Agent agent)` | 目前只支持 `FollowMe`——让选中部队跟随指定 Agent；其他 OrderType 直接 FailedAssert | `OrderController.cs:960` |
| `SetOrderWithPosition` | `public virtual void SetOrderWithPosition(OrderType orderType, WorldPosition orderPosition)` | 支持 `Move`（移动到点）、`LookAtDirection`（朝向目标方向）、`FormCustom`（按自定义宽度列阵） | `OrderController.cs:989` |
| `SetOrderWithFormation` | `public virtual void SetOrderWithFormation(OrderType orderType, Formation orderFormation)` | 支持 `Charge` 与 `Advance`，并给每个选中 Formation 设目标 Formation | `OrderController.cs:1051` |
| `SetOrderWithFormationAndPercentage` | `public void SetOrderWithFormationAndPercentage(OrderType orderType, Formation orderFormation, float percentage)` | 按百分比抽兵追击目标 Formation；百分比会被 clamp 到 0–100 | `OrderController.cs:1099` |
| `SetOrderWithFormationAndNumber` | `public void SetOrderWithFormationAndNumber(OrderType orderType, Formation orderFormation, int number)` | 按固定人数抽兵追击目标 Formation | `OrderController.cs:1184` |
| `SetOrderWithTwoPositions` | `public virtual void SetOrderWithTwoPositions(OrderType orderType, WorldPosition position1, WorldPosition position2)` | 让部队在两个位置之间展开（线段布阵） | `OrderController.cs:1251` |
| `SetOrderWithOrderableObject` | `public virtual void SetOrderWithOrderableObject(IOrderable target)` | 对可交互目标下命令：Move / MoveToLineSegment / FollowEntity / Use / AttackEntity / PointDefence 六条路径 | `OrderController.cs:1279` |
| `GetActiveMovementOrderOf` | `public unsafe static OrderType GetActiveMovementOrderOf(Formation formation)` | 把 Formation 的 MovementOrder 内部状态（Charge/Hold/Retreat/StandGround）映射回 OrderType | `OrderController.cs:1392` |
| `GetActiveFacingOrderOf` | `public static OrderType GetActiveFacingOrderOf(Formation formation)` | 查询当前朝向命令是 LookAtDirection 还是 LookAtEnemy | `OrderController.cs:1438` |
| `GetActiveArrangementOrderOf` | `public static OrderType GetActiveArrangementOrderOf(Formation formation)` | 查询当前阵型排列命令（Line/Column/ShieldWall 等） | `OrderController.cs:1459` |
| `GetActiveFiringOrderOf` | `public static OrderType GetActiveFiringOrderOf(Formation formation)` | 查询当前开火命令（HoldFire / FireAtWill 等） | `OrderController.cs:1471` |
| `GetActiveAIControlOrderOf` | `public static OrderType GetActiveAIControlOrderOf(Formation formation)` | 查询该 Formation 是否处于 AI 控制（返回 AIControlOn/AIControlOff） | `OrderController.cs:1477` |
| `SimulateNewOrderWithPositionAndDirection` | `public void SimulateNewOrderWithPositionAndDirection(WorldPosition begin, WorldPosition end, out List<WorldPosition> frames, bool isVertical)` | 实例版模拟：算出选中部队按线段布阵时每个单位的落点，写入 `simulationFormations`，不改真实阵型 | `OrderController.cs:1487` |
| `SimulateDestinationFrames` | `public void SimulateDestinationFrames(out List<WorldPosition> frames, float minDistance = 3f)` | 模拟每个单位当前命令的目的地帧；部署阶段会投影到部署边界内，距离不足 `minDistance` 的单位被剔除 | `OrderController.cs:1818` |
| `SortFormationsForHorizontalLayout` | `public static IEnumerable<Formation> SortFormationsForHorizontalLayout(IEnumerable<Formation> formations)` | 横向布阵时按兵种优先级排序（重步→步→重骑→骑→轻骑→弓→骑弓） | `OrderController.cs:1907` |
| `TransferUnits` | `public void TransferUnits(Formation source, Formation target, int count)` | 把 count 个单位从 source 编入 target，并触发 Transfer 事件 | `OrderController.cs:2028` |
| `SplitFormation` | `public IEnumerable<Formation> SplitFormation(Formation formation, int count = 2)` | 把一个 Formation 拆成 count 份，依次填入 Team 的空 Formation；不可拆分时返回原列表 | `OrderController.cs:2035` |
| `AddOrderOverride` | `public void AddOrderOverride(Func<Formation, MovementOrder, MovementOrder> orderOverride)` | 注册命令改写器，在命令真正下发前劫持并改写 MovementOrder | `OrderController.cs:2084` |
| `GetOverridenOrderType` | `public OrderType GetOverridenOrderType(Formation formation)` | 查询某 Formation 当前被 override 改写成什么 OrderType；无则返回 None | `OrderController.cs:2095` |
| `TryCancelStopOrder` | `public static void TryCancelStopOrder(Formation formation)` | 若 Formation 处于 Stop 状态则顶掉它（客户端/回放不做）；Advance/FallBack 前必调 | `OrderController.cs:2132` |
| `FormationGapInLine` | `public const float FormationGapInLine = 1.5f` | 线阵中相邻 Formation 之间的默认间距常量 | `OrderController.cs:2145` |
| `Team` | `public readonly Team Team` | 本控制器所属的 Team；构造时注入，选中与命令都围绕它的 Formation 列表 | `OrderController.cs:2151` |
| `Owner` | `public Agent Owner` | 下令者 Agent；决定 Formation 的 PlayerOwner 归属与可选性判定 | `OrderController.cs:2154` |

## 真实示例

一次完整的"玩家下令冲锋"流水线，按执行顺序：

```csharp
// 1) 拿到玩家方的命令通道
OrderController orders = Mission.Current.Teams.Attacker.PlayerOrderController;

// 2) 选中全部有兵的 Formation（会播放"全体"手势）
orders.SelectAllFormations(uiFeedback: true);

// 3) 下冲锋命令：BeforeSetOrder 清理 → 每个 Formation SetMovementOrder(Charge)
//    → AfterSetOrder 刷新缓存 + 随机 decide time + 播指挥官手势 → 触发 OnOrderIssued
orders.SetOrder(OrderType.Charge);

// 4) 冲锋途中想改成追击某个敌方 Formation
orders.SetOrderWithFormation(OrderType.Charge, enemyFormation);

// 5) 想预览"如果移动到这条线，队伍会怎么站"而不真正下令
List<WorldPosition> frames;
orders.SimulateNewOrderWithPositionAndDirection(lineBegin, lineEnd, out frames, true);
// frames 里就是每个单位的预测落点，可以拿去画 UI 预览线
```

mod 想实现"冲锋后自动跟进"的定制行为，可以挂事件而不是轮询：

```csharp
team.PlayerOrderController.OnOrderIssued += (orderType, formations, controller, args) =>
{
    if (orderType == OrderType.Charge)
    {
        foreach (Formation f in formations)
        {
            // 冲锋启动后给每个 Formation 追加自定义逻辑
        }
    }
};
```

## 参见

- [`../MissionObject`](../MissionObject) —— 战场对象基类，`SetOrderWithOrderableObject` 的目标类型之一。
- [`../../mission/Agent`](../../mission/Agent) —— 命令的最终执行者；`SetOrderWithAgent` 的跟随目标与 `Owner` 字段类型。
- [`../../mission/Formation`](../../mission/Formation) —— 命令的作用对象，接收 MovementOrder/FacingOrder 等执行对象。
- [`../Team`](../Team) —— 持有 MasterOrderController 与 PlayerOrderController 两个实例。
- [`../ArrangementOrder`](../ArrangementOrder) —— SetOrder 分发的阵型排列命令（ArrangementLine 等）的执行对象。
- [`../_index`](../_index) —— `mission-ext` 桶全类型索引。

## 导航

- 同桶：[`../Team`](../Team) · [`../MissionLogic`](../MissionLogic) · [`../MissionObject`](../MissionObject)
- 父索引：[`../_index`](../_index)
