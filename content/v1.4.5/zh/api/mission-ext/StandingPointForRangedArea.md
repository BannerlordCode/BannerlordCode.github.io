---
title: "StandingPointForRangedArea"
description: "面向远程或投掷武器持有者的 StandingPoint 派生点，负责射击区域内的资格、评分与停止。"
---
# StandingPointForRangedArea

**命名空间：** `TaleWorlds.MountAndBlade`  
**模块：** `TaleWorlds.MountAndBlade`  
**类型：** `public class StandingPointForRangedArea : StandingPoint`  
**基类：** [`StandingPoint`](../StandingPoint)  
**源码：** `bin/TaleWorlds.MountAndBlade/TaleWorlds.MountAndBlade/StandingPointForRangedArea.cs`

## 这类点做什么

这个点只接纳主手持有远程武器的 Agent，并按当前武器是投掷物还是其他远程武器给出位置偏好评分。

## 概述

这是场景中的射击区域槽位，不负责提供库存物品。它仍由 [`UsableMachine`](../UsableMachine) 像普通 [`StandingPoint`](../StandingPoint) 一样发现和占用，只增加武器资格与评分倍率。`NoAttack` 和 `ConsiderRotation` 脚本帧标志会告诉 AI 移动层如何接近该区域。

## 心智模型

初始化时它保持手中武器（`AutoSheathWeapons = false`），不锁定完整帧而只锁定位置，并重新设置 tick。`IsDisabledForAgent` 只接受非空主手槽位且 `CurrentUsageItem.IsRangedWeapon` 为真的 Agent。额外武器槽使用 `ThrowingValueMultiplier`，其他远程主手使用 `RangedWeaponValueMultiplier`；对应倍率小于等于零时，该类别被禁用。

占用期间，并行 tick 会再次检查当前武器。如果 Agent 换成不符合条件的武器，就通过 `StopUsingGameObjectMT` 停止使用。`HasAlternative` 永远返回 `true`，允许宿主继续搜索其他射击位置。

## 依赖关系

- [`StandingPoint`](../StandingPoint) 提供 Mission 注册、占用、目标位置和基类阵营/控制器检查。
- [`UsableMachine`](../UsableMachine) 过滤该点，并在 AI 分遣选择时使用其评分。
- [`Agent`](../../mission/Agent) 提供包含主手槽位和 `CurrentUsageItem` 在内的实时装备状态。
- [`RangedSiegeWeapon`](../RangedSiegeWeapon) 是源码中真实使用远程站位点的攻城机器消费者。

## 何时使用，何时不用

**适合使用：**

- 场景武器需要 Agent 在射击位置停留，同时保持手中的远程物品。
- 机器需要分别偏好投掷武器和其他远程武器。

**不适合使用：**

- 点要发放物品或检查某个指定物品；使用 [`StandingPointWithWeaponRequirement`](../StandingPointWithWeaponRequirement)。
- 点应允许近战或空手状态；本类会主动拒绝这些状态。
- 只需要普通交互位置而没有远程语义时；使用 [`StandingPoint`](../StandingPoint)。

## 关键成员与调用时机

- `ThrowingValueMultiplier` 默认 `5f`，对额外武器槽的基于路径评分增加该值。
- `RangedWeaponValueMultiplier` 默认 `2f`，对其他远程主手增加该值。
- `DisableScriptedFrameFlags` 返回 `NoAttack | ConsiderRotation`，分配到该点的 Agent 不会从脚本帧执行普通攻击。
- `OnInit` 关闭自动收武器、关闭完整帧锁定、开启位置锁定，然后按新配置请求 tick。
- `GetUsageScoreForAgent` 在基类计算路径距离后加上相应倍率；不可达路径仍保持 `float.MinValue`。
- 有使用者时 `GetTickRequirement` 请求 `TickParallel2`；`OnTickParallel2` 会停止当前已不合格的使用者。
- `HasAlternative` 始终为 `true`，机器可以安全地搜索其他点。

## 真实获取与配置示例

机器拥有站位点。Mission 运行期间可以取得已注册的点，并在下一轮选择前调整两个偏好倍率：

```csharp
using TaleWorlds.MountAndBlade;

static void PreferThrowingAreas()
{
    Mission mission = Mission.Current;
    if (mission == null)
    {
        return;
    }

    foreach (StandingPointForRangedArea point in
             mission.ActiveMissionObjects.FindAllWithType<StandingPointForRangedArea>())
    {
        point.ThrowingValueMultiplier = 6f;
        point.RangedWeaponValueMultiplier = 2f;
    }
}
```

场景仍必须包含这个组件及其所属 [`UsableMachine`](../UsableMachine)；修改一个无宿主的对象不会产生射击位置。

## 风险与崩溃边界

- 资格判断会读取 Agent 当前装备。Agent 已从 Mission 移除后，不要继续配置或评分该点。
- 本类有意关闭自动收武器；如果机器要求 Agent 交出武器，必须由机器明确停止使用并管理装备变化。
- 并行 tick 调用 `StopUsingGameObjectMT`；自定义覆盖不能在该路径加入未同步的场景或库存修改。
- 倍率只是偏好，不会修复导航网格或替代不可达检查。不要用极大倍率掩盖错误场景配置。

## 参见与双向导航

- ↑ 父级：[Mission-ext 模块索引](../)
- ↔ 同级：[StandingPoint](../StandingPoint) · [StandingPointWithWeaponRequirement](../StandingPointWithWeaponRequirement)
- 相关限制：[StandingPointWithTeamLimit](../StandingPointWithTeamLimit) · [StandingPointWithVolumeBox](../StandingPointWithVolumeBox)
- 宿主：[UsableMachine](../UsableMachine) · [Mission](../../mission/Mission) · [Agent](../../mission/Agent)
- 中文/English：[StandingPointForRangedArea](../../../../en/api/mission-ext/StandingPointForRangedArea)
