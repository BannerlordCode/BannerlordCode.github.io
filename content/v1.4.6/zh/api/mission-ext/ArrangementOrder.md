---
title: "ArrangementOrder"
description: "阵型排列的值类型定义：把 Line/Column/ShieldWall 等八种阵型枚举映射到具体队形对象，并预算移动速度限制与单位间距。"
---
# ArrangementOrder

**Namespace:** `TaleWorlds.MountAndBlade`
**Module:** `TaleWorlds.MountAndBlade`
**Type:** `public struct ArrangementOrder`
**Source:** `TaleWorlds.MountAndBlade/ArrangementOrder.cs`

> 节 schema：本页采用 7 节（按出现顺序）：概述 / 心智模型 / 怎么用 / 关键成员 / 真实示例 / 参见 / 导航

## 概述

`ArrangementOrder` 是**阵型排列的定义**。它是一个轻量 struct，内部只有一个 `OrderEnum` 字段（`ArrangementOrder.cs:563`）加三个预算好的字段（跑步/步行速度限制、单位间距）。它回答两个问题："这个 Formation 现在站成什么形状"（Line、Column、Loose、Scatter、ShieldWall、Skein、Square、Circle 八种）以及"这个形状有什么参数"（间距多少、跑多快、盾朝哪边）。

它挂在 `Formation.ArrangementOrder` 上，由 `OrderController.SetOrder` 在收到 `ArrangementLine` 等 OrderType 时写入；`Formation` 每帧读取它来决定单位落位。八个静态只读实例（`ArrangementOrderLine` 等，`ArrangementOrder.cs:566` 起）是官方预设，避免到处 new。

## 心智模型

把它想成一张**阵型配方卡**：

- **枚举是配方，队形对象是成品**。`OrderEnum` 只是名字；真正干活的是 `GetArrangement(Formation)`（`ArrangementOrder.cs:69`）返回的 `IFormationArrangement`——Circle 映射到 `CircularFormation`，Column 映射到 `ColumnFormation`，Skein 映射到 `SkeinFormation`，Square 映射到 `RectilinearSchiltronFormation`，其余一律 `LineFormation`。改配方（换枚举）就换了成品。
- **构造时预算参数**。构造函数按枚举一次性算好 `_runRestriction`（Circle 0.5、Line 0.8、Loose/Scatter/Skein 0.9、ShieldWall/Square 0.3、其余 1.0）与 `_unitSpacing`（Loose 6、ShieldWall/Square 0、其余 2）。这些值之后只读——阵型一旦确定，参数就固定，直到换阵型重新构造。
- **OnApply 是"落阵"入口**。`OnApply(Formation)`（`ArrangementOrder.cs:98`）做四件事：设单位间距、`Rearrange` 重排、Scatter 特殊处理、给 AI 单位强制盾朝向并刷新行为值。换阵型不是改个字段就完事，必须走 OnApply。
- **Scatter 是异类**。它不靠固定队形，而是通过 `StrategicArea`  detachment 让单位分散到战略点上——`TickOccasionally`（`ArrangementOrder.cs:390`）周期性检查 Formation 与战略点的距离，自动加入/离开 detachment。
- **值类型语义**。struct 意味着赋值是拷贝；`==` 比较的是 `OrderEnum`（`ArrangementOrder.cs:488`），`GetHashCode` 也基于它。把它当引用类型用（期待改一个影响另一个）会踩坑。

## 怎么用

### 怎么拿到

从 Formation 上读：`formation.ArrangementOrder`，返回当前阵型。想换阵型，走 `OrderController.SetOrder(OrderType.ArrangementLine)` 等命令——控制器会构造新的 `ArrangementOrder` 并调 `OnApply`。直接 `formation.ArrangementOrder = ArrangementOrder.ArrangementOrderShieldWall` 而不调 OnApply 会导致阵型字段与实际落位不一致。

### 典型用法

```csharp
Formation formation = Mission.Current.MainAgent.Formation;
ArrangementOrder order = formation.ArrangementOrder;

// 读当前阵型对应的 OrderType（注意映射不是同名：ShieldWall→ArrangementCloseOrder）
OrderType t = order.OrderType;

// 读队形对象（真正决定单位落位的对象）
IFormationArrangement arrangement = order.GetArrangement(formation);

// 读参数
int spacing = order.GetUnitSpacing();
order.GetMovementSpeedRestriction(out float? run, out float? walk);

// 判断防御性阵型（Circle/ShieldWall/Square 返回 1）
int defensiveness = ArrangementOrder.GetArrangementOrderDefensiveness(order.GetNativeEnum());
```

### 坑

- **换阵型必须走 OnApply**。直接赋值只改字段，单位不会重排；`OnCancel`（`ArrangementOrder.cs:229`）负责清理旧阵型的副作用（Scatter 的 detachment、盾朝向、Column 的 tick 钩子），绕过它会让残留状态泄漏。
- **OrderType 与枚举不同名**。`OrderType` 属性（`ArrangementOrder.cs:435`）里 ShieldWall 映射到 `ArrangementCloseOrder`、Skein 映射到 `ArrangementVee`、Square 映射到 `ArrangementSchiltron`——用名字对不上号时先查这张映射表。
- **Column 有转置线特殊路径**。`Rearrange`（`ArrangementOrder.cs:195`）对 Column 走 `RearrangeAux(formation, false)`，先 `TransposeLineFormation`（`ArrangementOrder.cs:220`）把线阵转置再挂 tick 钩子；`OnOrderPositionChanged`（`ArrangementOrder.cs:494`）在转向过大时重置参考位置。自定义 Column 行为时这两处都要顾。
- **Scatter 依赖 TeamAI**。`TickOccasionally` 只在 `formation.Team.TeamAI` 非空时工作；没有 TeamAI 的场景（如自定义战斗）Scatter 不会分散。
- **struct 拷贝语义**。`ArrangementOrder a = formation.ArrangementOrder; a.OrderEnum` 读的是快照；要观察当前阵型必须重新从 Formation 读。

## 关键成员

| 成员 | 签名 | 作用 | 行号 |
| --- | --- | --- | --- |
| `GetUnitSpacingOf` | `public static int GetUnitSpacingOf(ArrangementOrderEnum a)` | 静态查表：Loose=6，ShieldWall/Square=0，其余=2 | `ArrangementOrder.cs:14` |
| `GetUnitLooseness` | `public static bool GetUnitLooseness(ArrangementOrderEnum a)` | 是否松散阵型；只有 ShieldWall 返回 false | `ArrangementOrder.cs:28` |
| `GetMovementSpeedRestriction` | `public void GetMovementSpeedRestriction(out float? runRestriction, out float? walkRestriction)` | 读构造时预算的速度限制；walk 恒为 null（未使用） | `ArrangementOrder.cs:62` |
| `GetArrangement` | `public IFormationArrangement GetArrangement(Formation formation)` | 把枚举映射到具体队形对象（Circular/Column/Skein/RectilinearSchiltron/LineFormation） | `ArrangementOrder.cs:69` |
| `OnApply` | `public unsafe void OnApply(Formation formation)` | 落阵入口：设间距、重排、Scatter 处理、强制盾朝向、刷新行为值 | `ArrangementOrder.cs:98` |
| `SoftUpdate` | `public void SoftUpdate(Formation formation)` | 轻量更新：仅对 Scatter 触发周期性重排，不重设间距 | `ArrangementOrder.cs:127` |
| `GetShieldDirectionOfUnit` | `public static Agent.UsageDirection GetShieldDirectionOfUnit(Formation formation, Agent unit, ArrangementOrderEnum orderEnum)` | 算每个 AI 单位的盾朝向：盾墙前排 DefendDown、两翼 DefendLeft/Right、其余 AttackEnd | `ArrangementOrder.cs:137` |
| `GetUnitSpacing` | `public int GetUnitSpacing()` | 读构造时预算的单位间距 | `ArrangementOrder.cs:189` |
| `Rearrange` | `public void Rearrange(Formation formation)` | 按当前阵型重排 Formation；Column 走转置线路径，其余直接 `formation.Rearrange` | `ArrangementOrder.cs:195` |
| `RearrangeAux` | `public void RearrangeAux(Formation formation, bool isDirectly)` | Column 专用：间接调用先转置线阵并挂 tick 钩子，直接调用则摘钩子后重排 | `ArrangementOrder.cs:206` |
| `TransposeLineFormation` | `public unsafe static void TransposeLineFormation(Formation formation)` | 把线阵转置为纵阵并重置参考位置，Column 的前置步骤 | `ArrangementOrder.cs:220` |
| `OnCancel` | `public void OnCancel(Formation formation)` | 旧阵型清理：Scatter 退出战略点 detachment、释放盾朝向、摘 Column tick 钩子 | `ArrangementOrder.cs:229` |
| `TickOccasionally` | `public void TickOccasionally(Formation formation)` | Scatter 专用：周期性检查与战略点距离，自动加入/离开 detachment | `ArrangementOrder.cs:390` |
| `OrderType` | `public OrderType OrderType` | 枚举→OrderType 映射（ShieldWall→CloseOrder、Skein→Vee、Square→Schiltron） | `ArrangementOrder.cs:435` |
| `GetNativeEnum` | `public ArrangementOrderEnum GetNativeEnum()` | 取原始枚举值，用于查表类静态方法 | `ArrangementOrder.cs:464` |
| `Equals` | `public override bool Equals(object obj)` | 值相等比较，基于 OrderEnum | `ArrangementOrder.cs:470` |
| `GetHashCode` | `public override int GetHashCode()` | 哈希基于 OrderEnum，可安全用于字典键 | `ArrangementOrder.cs:476` |
| `operator ==` | `public static bool operator ==(ArrangementOrder a1, ArrangementOrder a2)` | 相等运算符，比较 OrderEnum | `ArrangementOrder.cs:488` |
| `OnOrderPositionChanged` | `public void OnOrderPositionChanged(Formation formation, Vec2 previousOrderPosition)` | Column 转向过大且未远离时重置参考位置，防止转置线阵抖动 | `ArrangementOrder.cs:494` |
| `GetArrangementOrderDefensiveness` | `public static int GetArrangementOrderDefensiveness(ArrangementOrderEnum orderEnum)` | 防御性阵型判定：Circle/ShieldWall/Square 返回 1，其余 0 | `ArrangementOrder.cs:509` |
| `GetArrangementOrderDefensivenessChange` | `public static int GetArrangementOrderDefensivenessChange(ArrangementOrderEnum previousOrderEnum, ArrangementOrderEnum nextOrderEnum)` | 换阵型时的防御性变化（-1/0/+1），供 AI 决策参考 | `ArrangementOrder.cs:519` |
| `CalculateFormationDirectionEnforcingFactorForRank` | `public float CalculateFormationDirectionEnforcingFactorForRank(int formationRankIndex, int rankCount)` | 按排索引算方向强制因子：防御阵型外松内紧，Column 恒 0 | `ArrangementOrder.cs:540` |
| `OrderEnum` | `public readonly ArrangementOrderEnum OrderEnum` | 唯一数据字段，阵型的一切都由它推导 | `ArrangementOrder.cs:563` |
| `ArrangementOrderCircle` | `public static readonly ArrangementOrder ArrangementOrderCircle` | 圆形阵预设实例 | `ArrangementOrder.cs:566` |
| `ArrangementOrderLine` | `public static readonly ArrangementOrder ArrangementOrderLine` | 线阵预设实例（最常用） | `ArrangementOrder.cs:572` |
| `ArrangementOrderShieldWall` | `public static readonly ArrangementOrder ArrangementOrderShieldWall` | 盾墙预设实例 | `ArrangementOrder.cs:581` |
| `ArrangementOrderEnum` | `public enum ArrangementOrderEnum` | 八种阵型枚举：Circle/Column/Line/Loose/Scatter/ShieldWall/Skein/Square | `ArrangementOrder.cs:590` |

## 真实示例

让一个 Formation 从线阵切换成盾墙，并观察参数变化：

```csharp
Formation formation = Mission.Current.MainAgent.Formation;

// 切换前：线阵，间距 2，跑步限制 0.8
ArrangementOrder before = formation.ArrangementOrder;
int spacingBefore = before.GetUnitSpacing();

// 通过命令通道换阵型（控制器会构造新 ArrangementOrder 并调 OnApply）
Mission.Current.Teams.Attacker.PlayerOrderController.SetOrder(OrderType.ArrangementCloseOrder);

// 切换后：盾墙，间距 0，跑步限制 0.3，OrderType 映射为 ArrangementCloseOrder
ArrangementOrder after = formation.ArrangementOrder;
OrderType t = after.OrderType; // OrderType.ArrangementCloseOrder
```

mod 想自定义一种"外松内紧"的阵型，可以复制 Circle 的配方思路：构造时给 `_runRestriction` 一个中间值，`GetArrangement` 返回自定义的 `IFormationArrangement` 子类，`CalculateFormationDirectionEnforcingFactorForRank` 控制每排的方向强制力度。

## 参见

- [`../../mission/Formation`](../../mission/Formation) —— 阵型宿主；`formation.ArrangementOrder` 是读取入口，`Rearrange` 的作用对象。
- [`../OrderController`](../OrderController) —— 命令通道；`SetOrder(OrderType.ArrangementLine)` 等命令的写入方。
- [`../../mission/Agent`](../../mission/Agent) —— 阵型中的单位；`GetShieldDirectionOfUnit` 为 AI 单位算盾朝向。
- [`../MissionObject`](../MissionObject) —— 战场对象基类，Formation 与本 struct 共同服务于 Mission 对象体系。
- [`../_index`](../_index) —— `mission-ext` 桶全类型索引。

## 导航

- 同桶：[`../Team`](../Team) · [`../MissionLogic`](../MissionLogic) · [`../MissionObject`](../MissionObject)
- 父索引：[`../_index`](../_index)
