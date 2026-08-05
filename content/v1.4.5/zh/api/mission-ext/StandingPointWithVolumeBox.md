---
title: "StandingPointWithVolumeBox"
description: "带武器限制和有限空间范围的站位点，用于场景 VolumeBox 交互机制。"
---
# StandingPointWithVolumeBox

**命名空间：** `TaleWorlds.MountAndBlade`  
**模块：** `TaleWorlds.MountAndBlade`  
**类型：** `public class StandingPointWithVolumeBox : StandingPointWithWeaponRequirement`  
**基类：** [`StandingPointWithWeaponRequirement`](../StandingPointWithWeaponRequirement)  
**源码：** `bin/TaleWorlds.MountAndBlade/TaleWorlds.MountAndBlade/StandingPointWithVolumeBox.cs`

## 这类点做什么

该点把武器资格与空间距离结合起来：Agent 必须符合武器条件，且处于水平空间 10 米、垂直高度 2 米的交互范围内。

## 概述

`StandingPointWithVolumeBox` 用于需要武器并且靠近场景体积的交互。`IsDisabledForAgent` 先执行继承的武器和普通站位点检查，再拒绝高低差超过 2 米或与点的三维距离超过 10 米的 Agent。分配使用时，它还通过 `NoAttack` 禁止普通攻击脚本帧。

## 心智模型

本类不会查找 Volume，也不会执行具体游戏效果。它仍由 [`UsableMachine`](../UsableMachine) 从场景实体收集；[`StonePile`](../StonePile) 这样的体积拥有者读取公开的 `VolumeBoxTag`，把点和带对应标签的 `VolumeBox` 实体配对，并负责计时器及效果。站位点只回答装备正确且距离足够近的 Agent 是否可以使用。

继承的武器规则必须在场景点投入选择前完成初始化。距离以点的 `GameEntity.GlobalPosition` 为中心，使用 `100f` 的平方距离阈值；高度差则单独用 `MathF.Abs` 检查。

## 依赖关系

- [`StandingPointWithWeaponRequirement`](../StandingPointWithWeaponRequirement) 提供指定物品、给定物品和武器类别匹配。
- [`StandingPoint`](../StandingPoint) 与 [`UsableMachine`](../UsableMachine) 提供 Mission 注册、占用和候选选择。
- [`StonePile`](../StonePile) 是源码确认的消费者，会读取 `VolumeBoxTag` 来配对 `VolumeBox` 实体。
- [`Mission`](../../mission/Mission)、[`Agent`](../../mission/Agent) 和点的 `GameEntity` 提供距离检查所需的实时位置。

## 何时使用，何时不用

**适合使用：**

- 交互既要求武器，又必须发生在受限场景体积中，例如投掷或拾取流程。
- 所属机器能够提供带标签的 Volume 实体和有效 Mission 点。

**不适合使用：**

- 只关心武器身份或类别；应使用 [`StandingPointWithWeaponRequirement`](../StandingPointWithWeaponRequirement)。
- 交互允许任意距离或高度；应使用 [`StandingPoint`](../StandingPoint) 并实现领域自己的范围规则。
- 需要创建 Volume 本身。`VolumeBoxTag` 是匹配约定，不是工厂或物理查询 API。

## 关键成员与调用时机

- `VolumeBoxTag` 默认值为 `"volumebox"`，由需要把点与带标签 `VolumeBox` 配对的消费者读取。
- `DisableScriptedFrameFlags` 返回 `NoAttack`。
- `IsDisabledForAgent` 先委托继承的武器规则，再应用 2 米高度和 10 米平方距离限制。
- `OnEditorTick` 调用基类编辑器 tick，并检查点的实体是否被选中；这是编辑器行为，不是运行时交互回调。

应在取得场景点后、宿主开始筛选候选前配置继承的武器要求。距离规则由类型固定，不会随 `VolumeBoxTag` 改变。

## 真实获取与配置示例

站位点从当前 Mission 的活动对象获得，所需物品则像攻城机器源码获取叉子物品那样从已注册对象管理器读取：

```csharp
using TaleWorlds.Core;
using TaleWorlds.MountAndBlade;

static void ConfigureVolumePoints(string weaponId)
{
    Mission mission = Mission.Current;
    ItemObject weapon = Game.Current.ObjectManager.GetObject<ItemObject>(weaponId);
    if (mission == null || weapon == null)
    {
        return;
    }

    foreach (StandingPointWithVolumeBox point in
             mission.ActiveMissionObjects.FindAllWithType<StandingPointWithVolumeBox>())
    {
        point.InitRequiredWeapon(weapon);
    }
}
```

`weaponId` 必须指向已由当前游戏模块注册的物品。代码只配置站位点；所属 [`StonePile`](../StonePile) 或其他机器仍负责体积效果和使用生命周期。

## 风险与崩溃边界

- `Game.Current.ObjectManager` 与 `Mission.Current.Scene` 受阶段约束。应在 Mission 设置期间解析物品和点，而不是结束后使用。
- Volume 缺失或标签错误不能只靠改 `VolumeBoxTag` 修复；消费者的实体层级必须真的包含对应标签。
- 10 米检查使用完整三维 `DistanceSquared`，2 米高度差是另一个独立条件，不要把它当成纯水平范围。
- 本类继承武器要求。Agent 即使地理位置足够近，也可能因主手物品错误或消耗品耗尽而不可用。

## 参见与双向导航

- ↑ 父级：[Mission-ext 模块索引](../)
- ↔ 同级：[StandingPoint](../StandingPoint) · [StandingPointWithWeaponRequirement](../StandingPointWithWeaponRequirement)
- 相关机器：[StonePile](../StonePile) · [UsableMachine](../UsableMachine)
- 运行时类型：[Mission](../../mission/Mission) · [Agent](../../mission/Agent) · [ItemObject](../../core-extra/ItemObject)
- 中文/English：[StandingPointWithVolumeBox](../../../../en/api/mission-ext/StandingPointWithVolumeBox)
