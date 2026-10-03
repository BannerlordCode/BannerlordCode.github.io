---
title: "AgentDrivenProperties"
description: "Agent 的 98 项运行时数值表：每个属性都是 float[] 下标的一层转发，由 AgentStatCalculateModel 填、native 按下标读，是战斗手感参数的唯一通道。"
---

# AgentDrivenProperties

**Namespace:** `TaleWorlds.MountAndBlade`
**Module:** `TaleWorlds.MountAndBlade`
**Type:** `public class AgentDrivenProperties`
**Base:** 无
**File:** `TaleWorlds.MountAndBlade/AgentDrivenProperties.cs`

## 概述

`AgentDrivenProperties` 是每个 [Agent](../../mission/Agent/) 随身携带的一张 **98 项的 float 数值表**。1203 行里真正的存储只有一个字段：`private readonly float[] _statValues`，构造器里 `new float[98]`。其余全是薄属性——`SwingSpeedMultiplier` / `ArmorEncumbrance` / `WeaponInaccuracy` / `AIDecideOnAttackChance` / `MountChargeDamage` / `AiSpeciesIndex` 等等，每个 getter 是 `GetStat(DrivenProperty.X)`、每个 setter 是 `SetStat(DrivenProperty.X, value)`。

这张表是**引擎与托管代码之间唯一的数值通道**：填表的是 [AgentStatCalculateModel](../AgentStatCalculateModel/)，读表并写进 native 的是 `Agent.UpdateDrivenProperties(float[])` → `MBAPI.IMBAgent.UpdateDrivenProperties(GetPtr(), values)`（`Agent.cs:5341`）。

## 心智模型

把它当成**「Agent 的 SIMD 寄存器组」**，四个推论：

第一，**下标就是契约，改枚举顺序等于改所有数值。** [DrivenProperty](../../core-extra/DrivenProperty) 枚举从 `AiRangedHorsebackMissileRange = 0` 排到 `OffhandWeaponDefendSpeedMultiplier = 97`，末尾还有 `Count = 98`——**数组长度 98 与枚举的 `Count` 严格对应**。往枚举中间插一个新值会让后面所有槽位错位一格，症状是「某个 AI 参数莫名变成了另一个参数的值」而不是异常。

第二，**写属性不等于生效。** `SetStat` 只是改数组，native 侧要等 `Agent.UpdateDrivenProperties(float[] values)` 才被拉过去。官方路径是 `AgentDrivenProperties.UpdateDrivenProperties(agent)`（`internal`）或 `Agent.UpdateCustomDrivenProperties()`（`public`）——**后者是 mod 唯一能用的入口**，它内部判 `AgentDrivenProperties != null` 后调 `UpdateDrivenProperties(AgentDrivenProperties.Values)`。

第三，**创建期与运行期是两个不同的填充点**。`internal float[] InitializeDrivenProperties(Agent, Equipment, AgentBuildData)` 会先调 `InitializeAgentStats` 再调 `UpdateAgentStats`，一次性填满 98 项；`internal float[] UpdateDrivenProperties(Agent)` 只调后者。**两个方法都是 `internal`，modder 调不到**——外部只能读和写，写完自己调 `Agent.UpdateCustomDrivenProperties()`。

第四，**有一个 `int` 属性混在里面。** `AiSpeciesIndex` 是 `public int`（不是 float），它存的是 `spawnEquipment[EquipmentIndex.ArmorItemEndSlot].Item.Id.InternalValue`——用来告诉 native「这是哪个物种的 AI 参数集」。它照样走 `GetStat` / `SetStat`，只是读回来时转换。

## 关键成员

| 成员 | 签名 | 这个成员是做什么用的 |
| --- | --- | --- |
| `_statValues` | `private readonly float[] _statValues`（字段） | 真正的存储，构造器里 `new float[98]`。`readonly` 意味着数组本身不能换，但**内容完全可改**。 |
| `Values` | `internal float[] Values => _statValues`（属性） | 直接暴露底层数组（**不是副本**）。`internal`，所以只有 `AgentDrivenProperties` 自己的两个 `internal` 方法与 `Agent` 侧在用——modder 拿不到，**想批量写只能一个个属性赋值**。 |
| `AgentDrivenProperties()` | 构造器 | 只做一件事：`new float[98]`。**没有默认值表**——新建出来的对象每一项都是 `0f`，要等 `InitializeAgentStats` 填满才有意义。 |
| `GetStat` | `public float GetStat(DrivenProperty propertyEnum)` | 按枚举下标读。**没有范围检查**——传一个 `>= 98` 的值就是 `IndexOutOfRangeException`。 |
| `SetStat` | `public void SetStat(DrivenProperty propertyEnum, float value)` | 按枚举下标写。同样无范围检查。`Agent` 侧也有同名的包装（`Agent.cs:3311` 附近的 `AgentDrivenProperties.SetStat(type, val)`）。 |
| `InitializeDrivenProperties` | `internal float[] InitializeDrivenProperties(Agent agent, Equipment spawnEquipment, AgentBuildData agentBuildData)` | 创建期填充。内部顺序固定：`MissionGameModels.Current.AgentStatCalculateModel.InitializeAgentStats(agent, spawnEquipment, this, agentBuildData)` 然后 `...UpdateAgentStats(agent, this)`，最后返回 `_statValues`。**modder 调不到。** |
| `UpdateDrivenProperties` | `internal float[] UpdateDrivenProperties(Agent agent)` | 运行期重算。只调 `UpdateAgentStats`。**modder 调不到**；走 `Agent.UpdateCustomDrivenProperties()`。 |
| `SwingSpeedMultiplier` / `HandlingMultiplier` | 对应属性 | 挥击与操控速度倍率。这两项是玩家能直接感知的手感核心，改它们是最常见的战斗调参入口。 |
| `ArmorEncumbrance` / `WeaponsEncumbrance` | 对应属性 | 护甲与武器负重。两者相加就是 `Agent` 侧的总负重（`Agent.cs:2941`：`AgentDrivenProperties.ArmorEncumbrance + AgentDrivenProperties.WeaponsEncumbrance`）。 |
| `ArmorHead` / `ArmorTorso` / `ArmorLegs` / `ArmorArms` | 四个对应属性 | 四个身体部位的护甲值。`ArmorComponent` 的数值最终写进这里。 |
| `WeaponInaccuracy` | 对应属性 | 当前武器的散布角。由 `SetAllWeaponInaccuracy` / `GetWeaponInaccuracy` 维护。 |
| `AiSpeciesIndex` | `public int AiSpeciesIndex` | **全表唯一的 `int` 属性**。存生物的 `Item.Id.InternalValue`，native 侧用它选 AI 参数集。 |
| `AIDecideOnAttackChance` / `AIAttackOnParryChance` / `AIParryOnAttackAbility` / `AiTryChamberAttackOnDecide` | 四个对应属性 | AI 近战决策概率类参数。分布在不同下标上，**改一个不会连带影响其它决策**，这是本表按能力拆槽而不是按「AI 状态」合并的原因。 |
| `AiRangerLeadErrorMin` / `AiRangerLeadErrorMax` / `AiRangerVerticalErrorMultiplier` / `AiRangerHorizontalErrorMultiplier` | 四个对应属性 | 远程 AI 的提前量与散布误差。这四项一起调出「远程 AI 打不准」的观感。 |
| `MountChargeDamage` / `MountSpeed` / `MountManeuver` / `MountDifficulty` | 四个对应属性 | 坐骑的冲锋伤害、速度、机动与难度（AI 侧用它决定骑手有多激进）。 |
| `UseRealisticBlocking` | 由 `SetAiRelatedProperties` 写入 | `AgentStatCalculateModel.SetAiRelatedProperties` 末尾一句固定写：`agentDrivenProperties.SetStat(DrivenProperty.UseRealisticBlocking, (agent.Controller != AgentControllerType.Player) ? 1f : 0f);`——**玩家控制的 Agent 永远拿到 0**。 |
| `MountHealthChange` 类 | — | 注意：这一段不是 `AgentDrivenProperties` 的成员，而是 `MPPerkCondition.PerkEventFlags` 枚举里的项，别在本表里找。 |

## 真实示例

读一张表的当前值——这是最基础也最常做的操作：

```csharp
using TaleWorlds.Core;
using TaleWorlds.MountAndBlade;

Agent agent = target;
AgentDrivenProperties props = agent.AgentDrivenProperties;
if (props == null)
{
    return;
}
Debug.Print("swing=" + props.SwingSpeedMultiplier + " handling=" + props.HandlingMultiplier, 0);
Debug.Print("armorEnc=" + props.ArmorEncumbrance + " weaponsEnc=" + props.WeaponsEncumbrance, 0);
Debug.Print("totalEnc=" + (props.ArmorEncumbrance + props.WeaponsEncumbrance), 0);
Debug.Print("speciesIndex=" + props.AiSpeciesIndex, 0);
```

按枚举下标读写（而不是逐个属性）——`DrivenProperty` 是 public enum，直接传：

```csharp
using TaleWorlds.Core;
using TaleWorlds.MountAndBlade;

AgentDrivenProperties props = agent.AgentDrivenProperties;
float before = props.GetStat(DrivenProperty.MountSpeed);
props.SetStat(DrivenProperty.MountSpeed, before * 1.5f);
Debug.Print("mountSpeed " + before + " -> " + props.GetStat(DrivenProperty.MountSpeed), 0);
```

写完必须让 native 重新读取——`UpdateDrivenProperties` 是 internal，公开入口是 `Agent.UpdateCustomDrivenProperties()`：

```csharp
using TaleWorlds.Core;
using TaleWorlds.MountAndBlade;

// 顺序不能反：先写表，再让 Agent 把整张表推给 native
AgentDrivenProperties props = agent.AgentDrivenProperties;
props.SetStat(DrivenProperty.SwingSpeedMultiplier, props.GetStat(DrivenProperty.SwingSpeedMultiplier) * 1.2f);
props.SetStat(DrivenProperty.WeaponInaccuracy, 0.01f);
agent.UpdateCustomDrivenProperties();
Debug.Print("pushed " + DrivenProperty.Count + " values to native", 0);
```

只改「远程 AI 打不准」这一组参数，其余全部按 `CalculateAILevel` 重算的结果保留：

```csharp
using TaleWorlds.Core;
using TaleWorlds.MountAndBlade;

AgentDrivenProperties props = target.AgentDrivenProperties;
props.SetStat(DrivenProperty.AiRangerLeadErrorMin, 30f);
props.SetStat(DrivenProperty.AiRangerLeadErrorMax, 90f);
props.SetStat(DrivenProperty.AiRangerVerticalErrorMultiplier, 2.5f);
props.SetStat(DrivenProperty.AiRangerHorizontalErrorMultiplier, 2.5f);
target.UpdateCustomDrivenProperties();
Debug.Print("ranged ai lead error widened to 30..90", 0);
```

检查一张表是否被正确填过——新建的对象全 0，而 `WeaponInaccuracy` 为 0 且 `HandlingMultiplier` 也为 0 基本可以断定没跑过 `InitializeAgentStats`：

```csharp
using TaleWorlds.Core;
using TaleWorlds.MountAndBlade;

AgentDrivenProperties props = target.AgentDrivenProperties;
bool looksUninitialized = props.GetStat(DrivenProperty.HandlingMultiplier) == 0f
    && props.GetStat(DrivenProperty.ArmorEncumbrance) == 0f;
Debug.Print("looks uninitialized = " + looksUninitialized, 0);
Debug.Print("realistic blocking (0 for player controlled) = " + props.GetStat(DrivenProperty.UseRealisticBlocking), 0);
```

## 风险与边界

- **98 项固定长度，下标即契约。** `DrivenProperty` 枚举里 `Count = 98` 与 `new float[98]` 严格对应。往枚举中间插值会让后面全部错位，**症状是数值串位而不是异常**。
- **`GetStat` / `SetStat` 没有范围检查。** 传 `>= 98` 的枚举值直接 `IndexOutOfRangeException`。
- **写属性不等于生效。** 数组改了但 native 没读，必须调 `Agent.UpdateCustomDrivenProperties()`。
- **两个填充方法是 `internal`。** `InitializeDrivenProperties` / `UpdateDrivenProperties` / `Values` 外部都调不到——**这是刻意的，它挡住了「整表替换」这种危险操作**，代价是批量写只能逐属性赋值。
- **构造器不给默认值。** `new AgentDrivenProperties()` 得到的是全 0 的表，没跑过填充流程前它没有物理意义。
- **`UpdateCustomDrivenProperties` 内部判 `AgentDrivenProperties != null`。** 但 `Agent` 的 `AgentDrivenProperties` 属性在 `Agent.cs:3804` 有一处被置 null 的路径——Agent 未初始化时调用是安全的（内部会跳过）。
- **`UseRealisticBlocking` 对玩家恒为 0。** 玩家控制的 Agent 拿不到真实格挡，这是 `SetAiRelatedProperties` 写死的，与难度无关。
- **`AiSpeciesIndex` 是 int 混在 float 表里。** 它走 `GetStat` / `SetStat`（float 通道）却在读出时转 int——**精度上没有问题，但赋值时别传浮点**。
- **每 Agent 一份。** `Agent.AgentDrivenProperties` 是 `public get / private set`，构造于 `Agent.cs:3636`（`new AgentDrivenProperties()`），随 Agent 销毁。不共享、不存档。
- **不存档。** 全类无 `[Serializable]`、无 `SyncData`；读档后由 `InitializeAgentStats` 重新填。
- **与创建时参数是两回事。** [AgentSpawnData](../AgentSpawnData/) 是创建瞬间的身体/碰撞参数，本类是运行期的可调数值表，两者互不覆盖。

## 依赖关系

- 填充方：[AgentStatCalculateModel](../AgentStatCalculateModel/) 的 `InitializeAgentStats` 与 `UpdateAgentStats` 是全树唯一往这张表里写业务数值的地方；它通过本类的 `protected` 辅助 `SetAiRelatedProperties` / `SetAllWeaponInaccuracy` 批量写 AI 相关槽位
- 下标契约：[DrivenProperty](../../core-extra/DrivenProperty)（`TaleWorlds.Core` 枚举，`None = -1`、`Count = 98`）
- 宿主：[Agent](../../mission/Agent/) 的 `AgentDrivenProperties` 属性（`Agent.cs:879`，`private set`）、`UpdateCustomDrivenProperties()`（`:3667`）与内部 `UpdateDrivenProperties(float[])`（`:5341`）
- native 边界：`MBAPI.IMBAgent.UpdateDrivenProperties(IntPtr, float[])` 是这张表流向引擎的唯一出口
- 参数来源：装备侧经 [Equipment](../../core-extra/Equipment/) 的 `GetTotalWeightOfArmor` / `GetHeadArmorSum` 等进入 `ArmorEncumbrance` / `ArmorHead` 等槽位；生物侧经 [Monster](../../core-extra/Monster/) 与 `AiSpeciesIndex`
- 容器：[MissionGameModels](../MissionGameModels/) 通过 `MissionGameModels.Current.AgentStatCalculateModel` 拿到填充方
- 相关但不同的表：[AgentSpawnData](../AgentSpawnData/) / [AgentCapsuleData](../AgentCapsuleData/) 是创建时的 native 参数包，本类是运行期的托管数值表
- 桶首页：[mission-ext API 分区](../)
