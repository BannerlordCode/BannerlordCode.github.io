---
title: "StandingPointWithWeaponRequirement"
description: "按指定物品、给定物品或武器类别限制使用资格的 StandingPoint 派生点。"
---
# StandingPointWithWeaponRequirement

**命名空间：** `TaleWorlds.MountAndBlade`  
**模块：** `TaleWorlds.MountAndBlade`  
**类型：** `public class StandingPointWithWeaponRequirement : StandingPoint`  
**基类：** [`StandingPoint`](../StandingPoint)  
**源码：** `bin/TaleWorlds.MountAndBlade/TaleWorlds.MountAndBlade/StandingPointWithWeaponRequirement.cs`

## 这类点做什么

只有 Agent 的装备满足一个指定物品、一个发放物品或若干武器类别规则时，该点才允许使用。

## 概述

这是拾取、装填、加载和武器专用机器点的共同门槛。构造函数关闭自动收武器，因为持有的物品本身就是选择契约的一部分。所属机器取得场景点，选择一种初始化路径，然后让 [`UsableMachine`](../UsableMachine) 在筛选时调用 `IsDisabledForAgent`。

## 心智模型

源码中的三种配置模式按以下顺序判断：

1. `InitRequiredWeapon(ItemObject weapon)` 保存一个必须位于 Agent 主手槽位的精确物品。
2. 如果没有配置精确要求物品，`InitGivenWeapon(ItemObject weapon)` 要求 Agent 主手槽位正好持有该物品。
3. 如果两种物品字段都为空，`InitRequiredWeaponClasses(WeaponClass[] requiredWeaponClasses)` 扫描所有武器槽位寻找匹配类别。消耗品类别还必须有剩余数量，额外武器槽是例外。

这些 setter 只赋值自己的字段，不会清除其他模式。若多次调用，优先使用第一个非空物品分支，其次才是类别分支。`SetHasAlternative` 改变宿主是否搜索替代点，`SetUsingBattleSide` 则写入通常由场景标签建立的阵营门槛。

## 依赖关系

- [`StandingPoint`](../StandingPoint) 提供场景注册、使用生命周期、路径评分以及基础控制器/阵营检查。
- [`UsableMachine`](../UsableMachine) 在 AI 和分遣选择时过滤站位点，其弹药逻辑也依赖本类进行拾取点判断。
- [`ItemObject`](../../core-extra/ItemObject) 与 [`WeaponClass`](../../core-extra/WeaponClass) 提供精确物品和类别值。
- [`RangedSiegeWeapon`](../RangedSiegeWeapon)、[`SiegeLadder`](../SiegeLadder)、[`StonePile`](../StonePile) 是源码确认的真实消费者。

## 何时使用，何时不用

**适合使用：**

- 场景槽位只接受某个机器物品、某个给定物品或允许的武器类别。
- 所属机器能在选择开始前解析已注册的 `ItemObject`。

**不适合使用：**

- 资格基于 Team 或手工维护的角色名单；应使用 [`StandingPointWithTeamLimit`](../StandingPointWithTeamLimit) 或 [`StandingPointWithAgentLimit`](../StandingPointWithAgentLimit)。
- 点应无条件接受空手状态。本类在所有已配置模式下都会拒绝不匹配状态。
- 需要执行库存交易。本类只负责站位门槛，拾取、消耗和装填改变必须由所属机器完成。

## 关键成员与调用时机

- `InitRequiredWeaponClasses(WeaponClass[] requiredWeaponClasses)` 替换允许类别数组。v1.4.5 的参数是数组，不是单个 `WeaponClass`。
- `InitRequiredWeapon(ItemObject weapon)` 要求主手槽位中的精确物品。
- `InitGivenWeapon(ItemObject weapon)` 要求主手槽位中的精确给定物品，主手为空也会被拒绝。
- `IsDisabledForAgent` 先检查第一优先级配置，装备匹配后才调用基类。
- `SetHasAlternative(bool hasAlternative)` 与 `HasAlternative()` 控制宿主是否搜索替代点。
- `SetUsingBattleSide(BattleSideEnum side)` 写入阵营门槛；[`SiegeLadder`](../SiegeLadder) 用它配置防守方拾取点。

应在所属机器设置其收集到的点时初始化要求，不要等 Agent 已经在移动后才修改，因为机器可能已经缓存该点可用。

## 真实获取示例

游戏源码通过 `Game.Current.ObjectManager` 解析真实物品，再把它应用到攻城机器已收集的站位点。模组可以在拥有实时场景机器和模块配置物品 ID 时沿用这个形状：

```csharp
using System.Linq;
using TaleWorlds.Core;
using TaleWorlds.MountAndBlade;

static void ConfigureWeaponPoints(RangedSiegeWeapon siegeWeapon, string itemId)
{
    ItemObject weapon = Game.Current.ObjectManager.GetObject<ItemObject>(itemId);
    if (weapon == null || siegeWeapon == null)
    {
        return;
    }

    foreach (StandingPointWithWeaponRequirement point in
             siegeWeapon.StandingPoints.OfType<StandingPointWithWeaponRequirement>())
    {
        point.InitRequiredWeapon(weapon);
        point.SetHasAlternative(true);
    }
}
```

如果要使用类别规则，源码确认的写法是 `point.InitRequiredWeaponClasses(new WeaponClass[1] { weapon.PrimaryWeapon.WeaponClass })`。这表示接受选定类别的任意物品，而不是只接受该精确物品。

## 风险与崩溃边界

- 多次初始化不会清除旧字段。必须明确选择一种模式，防止后续配置意外取得优先级。
- 精确物品模式只检查 Agent 主手槽位，其他槽位中的等价物品不能满足它。
- 类别模式会检查消耗品的 `Amount` 与 `ModifiedMaxAmount`，额外武器槽有特殊处理。物品看似存在，也可能已经耗尽。
- `ItemObject` 应从当前 `Game.Current.ObjectManager` 获取，不要伪造未注册对象，也不要跨游戏生命周期保存旧引用。
- `SetUsingBattleSide` 会改变阵营资格，但不会更新场景标签或同步已经移动的 Agent。应在机器选择开始前配置。

## 参见与双向导航

- ↑ 父级：[Mission-ext 模块索引](../)
- ↔ 同级：[StandingPoint](../StandingPoint) · [StandingPointWithVolumeBox](../StandingPointWithVolumeBox) · [StandingPointForRangedArea](../StandingPointForRangedArea)
- 其他门槛：[StandingPointWithAgentLimit](../StandingPointWithAgentLimit) · [StandingPointWithTeamLimit](../StandingPointWithTeamLimit)
- 消费者与类型：[RangedSiegeWeapon](../RangedSiegeWeapon) · [SiegeLadder](../SiegeLadder) · [ItemObject](../../core-extra/ItemObject) · [WeaponClass](../../core-extra/WeaponClass)
- 中文/English：[StandingPointWithWeaponRequirement](../../../../en/api/mission-ext/StandingPointWithWeaponRequirement)
