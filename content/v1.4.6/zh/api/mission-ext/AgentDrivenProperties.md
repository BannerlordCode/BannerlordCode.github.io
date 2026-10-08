---
title: "AgentDrivenProperties"
description: "每个 Agent 携带的数值容器：98 个 float 属性覆盖武器、护甲、属性与 AI 行为，是 mod 调整单位战斗数值的统一入口。"
---
# AgentDrivenProperties

**Namespace:** `TaleWorlds.MountAndBlade`
**Module:** `TaleWorlds.MountAndBlade`
**Type:** `public class AgentDrivenProperties`
**Source:** `TaleWorlds.MountAndBlade/AgentDrivenProperties.cs`

> 节 schema：本页采用 7 节（按出现顺序）：概述 / 心智模型 / 怎么用 / 关键成员 / 真实示例 / 参见 / 导航

## 概述

`AgentDrivenProperties` 是挂在每个 `Agent` 身上的**数值容器**：一个 98 槽的 `float` 数组，外加 98 个按语义命名的 C# 属性（`SwingSpeedMultiplier`、`ArmorHead`、`AiShootFreq`……）。它把"这个单位挥剑多快、甲多厚、马多快、AI 多准"全部收拢到一个对象里，供战斗计算、AI 决策、装备/技能加成系统读写。

类本身极简：`GetStat(DrivenProperty)`（`AgentDrivenProperties.cs:27`）与 `SetStat(DrivenProperty, float)`（`AgentDrivenProperties.cs:33`）是唯一的读写原语，每个命名属性都只是这对方法的薄包装。真正的复杂度不在这个类里，而在**谁写、什么时候写、写了会不会被覆写**——这正是 mod 开发者必须理解的部分。

## 心智模型

把它想成一块**共享白板**，上面贴着 98 张编号便签（编号就是 `DrivenProperty` 枚举值）：

- **底层是数组，不是字段**。所有属性最终都落到同一个 `float[98]`。这意味着可以批量读写（`Values` 属性直接暴露数组）、可以整体保存/恢复、也可以遍历——但代价是编译期类型安全只剩 `float`，写错枚举只会在运行时体现。
- **命名属性是分组视图**。98 个属性按语义分四组：武器手感（挥速、精度、装填、移速惩罚）、防护（头/躯干/腿/臂甲、各类伤害加成、护甲穿透）、属性与坐骑（骑术、盾、勇气、马速、冲锋伤害）、AI 行为（射击频率、格挡/招架倾向、决策间隔、误差参数）。改之前先想清楚你要改的是哪一组的哪一项。
- **引擎自己也在写**。Agent 出生时引擎调用 `InitializeDrivenProperties` 根据装备与兵种数据填满白板，之后周期性调用 `UpdateDrivenProperties` 重算（装备变化、技能 buff、疲劳等都会触发）。**你的 `SetStat` 如果和引擎的刷新周期冲突，会被覆写**——这是本类最重要的心智模型：它不是"改一次永久生效"的静态配置，而是"每帧/每次刷新都会被引擎重算"的动态状态。
- **读是即时的，写是脆弱的**。`GetStat` 永远返回当前数组值；`SetStat` 立刻写入，但下一次 `UpdateDrivenProperties` 可能把它冲掉。想持久改，要么 hook 引擎的刷新流程，要么在每次刷新后重新施加。

## 怎么用

### 怎么拿到

每个 `Agent` 实例上直接取：`agent.AgentDrivenProperties`。对象在 Agent 构造时创建，整个生命周期内非空。不需要自己 new——自己 new 出来的实例没有引擎初始化，98 个槽全是 0，且不会被任何计算读取。

### 典型用法

```csharp
Agent agent = Mission.Current.MainAgent;
AgentDrivenProperties props = agent.AgentDrivenProperties;

// 读：命名属性或 GetStat 等价
float swing = props.SwingSpeedMultiplier;
float armor = props.GetStat(DrivenProperty.ArmorHead);

// 写：立刻生效于后续读取，但可能被引擎的 UpdateDrivenProperties 覆写
props.MeleeWeaponDamageMultiplierBonus = 1.5f;
props.SetStat(DrivenProperty.AiShootFreq, 0.5f);

// 批量：直接操作底层数组（谨慎，长度固定 98）
float[] all = props.Values;
```

mod 想做"全场单位伤害翻倍"这类全局调整，遍历 `Mission.Current.Agents` 逐个 `SetStat` 即可；想做"某兵种永久强化"，则要在装备/兵种数据层改，而不是运行时改这个容器。

### 坑

- **会被引擎覆写**。`UpdateDrivenProperties` 会按装备与兵种重算全部数值，运行时 `SetStat` 的改动在下次刷新后丢失。要持久效果就 hook 刷新流程或改数据源。
- **数组长度固定 98**。`DrivenProperty` 枚举的项数与数组长度硬编码对应；枚举新增项而数组没跟上会越界。别用 `(int)someEnum` 做边界假设之外的运算。
- **`AiSpeciesIndex` 是唯一的 int 属性**（`AgentDrivenProperties.cs:1286`）。它内部仍存 float，读取时 `MathF.Round` 取整——写 2.4 会变成 2。
- **没有事件通知**。值变了不会广播，依赖方（AI 决策、战斗计算）按自己的节奏读取；你无法通过订阅本类事件感知变化。
- **网络同步由 Agent 层负责**。本类不处理同步；多人模式下要在服务器端改并通过 Agent 的同步机制下发，客户端直接改只影响本地表现。

## 关键成员

| 成员 | 签名 | 作用 | 行号 |
| --- | --- | --- | --- |
| `GetStat` | `public float GetStat(DrivenProperty propertyEnum)` | 唯一读原语：按枚举取数组值；所有命名属性的 getter 都走它 | `AgentDrivenProperties.cs:27` |
| `SetStat` | `public void SetStat(DrivenProperty propertyEnum, float value)` | 唯一写原语：按枚举写数组值；所有命名属性的 setter 都走它 | `AgentDrivenProperties.cs:33` |
| `SwingSpeedMultiplier` | `public float SwingSpeedMultiplier` | 武器挥速倍率，影响出手间隔；AI 与玩家攻击节奏都读它 | `AgentDrivenProperties.cs:41` |
| `ThrustOrRangedReadySpeedMultiplier` | `public float ThrustOrRangedReadySpeedMultiplier` | 刺击/拉弓的举械速度倍率 | `AgentDrivenProperties.cs:56` |
| `HandlingMultiplier` | `public float HandlingMultiplier` | 武器操控性，影响转向跟手速度 | `AgentDrivenProperties.cs:71` |
| `ReloadSpeed` | `public float ReloadSpeed` | 装填速度，直接决定弓弩二次射击间隔 | `AgentDrivenProperties.cs:86` |
| `MissileSpeedMultiplier` | `public float MissileSpeedMultiplier` | 箭矢/投掷物初速倍率，影响命中率与射程 | `AgentDrivenProperties.cs:101` |
| `WeaponInaccuracy` | `public float WeaponInaccuracy` | 武器基础散布，AI 与玩家远程命中都加它 | `AgentDrivenProperties.cs:116` |
| `WeaponMaxMovementAccuracyPenalty` | `public float WeaponMaxMovementAccuracyPenalty` | 移动中射击的最大精度惩罚上限 | `AgentDrivenProperties.cs:131` |
| `ArmorEncumbrance` | `public float ArmorEncumbrance` | 护甲负重，与武器负重一起决定移动惩罚 | `AgentDrivenProperties.cs:236` |
| `DamageMultiplierBonus` | `public float DamageMultiplierBonus` | 通用伤害加成，技能/buff 通常写这一项 | `AgentDrivenProperties.cs:251` |
| `MeleeWeaponDamageMultiplierBonus` | `public float MeleeWeaponDamageMultiplierBonus` | 近战武器专属伤害加成，与通用加成叠乘 | `AgentDrivenProperties.cs:281` |
| `ArmorPenetrationMultiplierBow` | `public float ArmorPenetrationMultiplierBow` | 弓的穿甲倍率，决定重甲目标上的实际伤害 | `AgentDrivenProperties.cs:311` |
| `ArmorHead` | `public float ArmorHead` | 头部护甲值，爆头伤害结算用它 | `AgentDrivenProperties.cs:341` |
| `ArmorTorso` | `public float ArmorTorso` | 躯干护甲值，最常被命中部位 | `AgentDrivenProperties.cs:356` |
| `AttributeRiding` | `public float AttributeRiding` | 骑术属性，影响坐骑操控与骑射 | `AgentDrivenProperties.cs:401` |
| `AttributeShield` | `public float AttributeShield` | 盾属性，影响格挡效率 | `AgentDrivenProperties.cs:416` |
| `MaxSpeedMultiplier` | `public float MaxSpeedMultiplier` | 移动速度总倍率，装备/buff 最终都汇到这里 | `AgentDrivenProperties.cs:506` |
| `CombatMaxSpeedMultiplier` | `public float CombatMaxSpeedMultiplier` | 战斗状态下的速度上限倍率 | `AgentDrivenProperties.cs:521` |
| `MountSpeed` | `public float MountSpeed` | 坐骑速度，骑兵冲锋与机动都依赖 | `AgentDrivenProperties.cs:611` |
| `MountChargeDamage` | `public float MountChargeDamage` | 坐骑冲锋伤害，骑兵冲击力的来源 | `AgentDrivenProperties.cs:641` |
| `AiShootFreq` | `public float AiShootFreq` | AI 射击频率，值越小开火越犹豫 | `AgentDrivenProperties.cs:746` |
| `AiWaitBeforeShootFactor` | `public float AiWaitBeforeShootFactor` | AI 开火前犹豫时间系数 | `AgentDrivenProperties.cs:761` |
| `AIBlockOnDecideAbility` | `public float AIBlockOnDecideAbility` | AI 决策时倾向格挡的概率权重 | `AgentDrivenProperties.cs:776` |
| `AIParryOnDecideAbility` | `public float AIParryOnDecideAbility` | AI 决策时倾向招架的概率权重 | `AgentDrivenProperties.cs:791` |
| `AiShooterError` | `public float AiShooterError` | AI 射手的基础瞄准误差 | `AgentDrivenProperties.cs:1316` |
| `AiSpeciesIndex` | `public int AiSpeciesIndex` | AI 物种索引（唯一 int 属性），区分人/马等 AI 行为模板 | `AgentDrivenProperties.cs:1286` |
| `AiWeaponFavorMultiplierMelee` | `public float AiWeaponFavorMultiplierMelee` | AI 选择近战武器的偏好倍率 | `AgentDrivenProperties.cs:1331` |
| `AIHoldingReadyMaxDuration` | `public float AIHoldingReadyMaxDuration` | AI 举械待机的最大时长，超时强制行动 | `AgentDrivenProperties.cs:1451` |
| `OffhandWeaponDefendSpeedMultiplier` | `public float OffhandWeaponDefendSpeedMultiplier` | 副手武器（盾/副手刃）的防御速度倍率 | `AgentDrivenProperties.cs:1481` |

## 真实示例

mod 想让"所有弓箭手射得更准、更持久"：

```csharp
foreach (Agent agent in Mission.Current.Agents)
{
    if (agent.Formation == null) continue;
    if (agent.Formation.FormationIndex != FormationClass.Ranged) continue;

    AgentDrivenProperties props = agent.AgentDrivenProperties;
    // 降低基础散布 → 更准
    props.WeaponInaccuracy = MathF.Max(0f, props.WeaponInaccuracy * 0.7f);
    // 降低 AI 开火犹豫 → 更持久输出
    props.AiWaitBeforeShootFactor = props.AiWaitBeforeShootFactor * 0.8f;
}
```

注意这两个改动在引擎下次 `UpdateDrivenProperties` 时会被重算覆盖——要真正持久，需要 hook 装备/兵种数据层，或在每次刷新后重新施加。

只读不写的典型场景（战斗结算、AI 决策查询）：

```csharp
// 判断一个单位是否"重甲"，用于自定义命中逻辑
bool IsHeavyArmor(Agent agent)
{
    var props = agent.AgentDrivenProperties;
    return props.ArmorTorso + props.ArmorHead > 60f;
}
```

## 参见

- [`../../mission/Agent`](../../mission/Agent) —— 本容器的宿主；`agent.AgentDrivenProperties` 是获取入口。
- [`../MissionObject`](../MissionObject) —— 战场对象基类，与 Agent 同属 Mission 对象体系。
- [`../ItemType`](../ItemType) —— 物品类型定义，装备数据是引擎初始化本容器数值的来源之一。
- [`../OrderController`](../OrderController) —— 命令通道；命令改变后 AI 会重新读取这些数值做决策。
- [`../_index`](../_index) —— `mission-ext` 桶全类型索引。

## 导航

- 同桶：[`../Team`](../Team) · [`../MissionLogic`](../MissionLogic) · [`../MissionObject`](../MissionObject)
- 父索引：[`../_index`](../_index)
