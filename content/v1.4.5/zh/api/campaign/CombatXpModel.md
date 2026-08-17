---
title: "CombatXpModel"
description: "战斗经验计算模型：决定部队与英雄在每次命中、射击难度和队长奖励下获得多少经验值，是调整战斗练级快慢的核心扩展点。"
---

# CombatXpModel

**命名空间：** `TaleWorlds.CampaignSystem.ComponentInterfaces`
**模块：** `TaleWorlds.CampaignSystem`
**类型：** `public abstract class CombatXpModel : MBGameModel<CombatXpModel>`
**源文件：** `bin/TaleWorlds.CampaignSystem/TaleWorlds.CampaignSystem.ComponentInterfaces/CombatXpModel.cs`

## 概述

该模型定义了战斗经验值的计算规则：给定一次命中的攻击者、受击者、所属队伍与伤害，返回部队或英雄应当获得的经验量，并额外处理远程射击难度加成与队长光环。它是纯函数式规则层，不保存任何角色状态，只在战斗命中结算与地图战斗模拟时被调用。

## 心智模型

`CombatXpModel` 是 `Campaign` 里一组「规则模型」中的一个，实例由 `GameModels` 在战役启动时通过 `GetGameModel<CombatXpModel>()` 从已注册的组件里取出，并挂到 `Campaign.Current.Models.CombatXpModel` 上长期持有，整局战役只有一个实例。运行期任何系统都通过该静态属性读取它，而不是直接 `new`——默认实现是 `DefaultCombatXpModel`，mod 可以在 `CampaignGameStarter` 里用自定义子类把它替换掉以改写练级曲线。它处在 Campaign 模型层，属于只读计算服务：被 `SkillLevelingManager`（英雄战斗经验）、`BattleAgentLogic`（队长半径判定）和 `MapEventParty`（地图战斗模拟经验分配）调用，自身不持有可变的战役状态，也不向存档写入字段。

## 何时使用 / 何时不要使用

- **使用**：想要查询或改写「一次战斗命中折算多少经验」「远程命中按难度给多少加成」「队长半径多大」这类规则时，读取或替换该模型即可。
- **不要使用**：不要通过该模型去增减角色的实际经验或改动名册数据，那属于世界状态变更，应调用 `Hero.AddSkillXp`、名册的升级/经验接口或相关 `*Action`；也不要缓存它的引用跨战役复用——战役重载后 `Campaign.Current.Models` 会被重建，旧引用会指向已被丢弃的实例。

## 依赖图

- **上游 / 持有者**：[`GameModels`](../GameModels) 在启动时装配实例，并通过 [`Campaign`](../Campaign) 暴露；替换入口经由 [`CampaignGameStarter`](../CampaignGameStarter) 与 [`CampaignBehaviorBase`](../CampaignBehaviorBase)。
- **下游 / 调用者**：[`CharacterDevelopmentModel`](../CharacterDevelopmentModel) 与 `SkillLevelingManager` 在英雄命中结算时调用 `GetXpFromHit` / `GetSkillForWeapon` / `GetXpMultiplierFromShotDifficulty`；地图战斗模拟由 [`MapEventParty`](../TroopRoster) 触发；队长半径在战斗逻辑中使用。
- **相关模型 / 类型**：经验相关还涉及 [`PartyTrainingModel`](../PartyTrainingModel)；计算输入依赖 [`CharacterObject`](../CharacterObject)、[`Hero`](../Hero)、[`MobileParty`](../MobileParty)、`PartyBase` 与 [`Equipment`](../../core-extra/Equipment)（武器数据）。

## 风险

- **缓存实例跨战役**：把 `Campaign.Current.Models.CombatXpModel` 存进静态字段或字段后，载入旧存档会重建 `Models`，旧引用悬空，调用它可能拿到已卸载模型或 `NullReferenceException`。每次需要时现取现用。
- **战役开始前访问**：在 `Campaign` 尚未初始化完成时就读取 `CombatXpModel` 会得到空引用；确保只在战役运行期（如 `CampaignBehavior` 生命周期内）访问。
- **直接改模型字段**：本模型无公开可变状态，但任何试图通过它改动经验分配的写法都错——它只算数值，真正的经验写入由调用方完成，绕开调用方会破坏经验与技能等级的一致性。
- **错误替换实现**：自定义子类若忽略 `MissionTypeEnum.NoXp` 的 0 倍率或漏掉队长光环，会导致练习战/ tournament 经验异常膨胀。
- **层访问错误**：它是 Campaign 模型层对象，不应在纯表现层（Mission 之外无 Campaign 上下文时）用来当数据源。

## 成员说明

### 枚举 MissionTypeEnum
标记一次经验计算的来源场景：`Battle`、`PracticeFight`、`Tournament`、`SimulationBattle`、`NoXp`。`GetXpFromHit` 用它决定整体倍率（练习战 0.0625、tournament 0.33、模拟战 0.9、普通战斗 1、NoXp 为 0）。调用时按真实场景传入，否则经验倍率失真。

### CaptainRadius（属性）
队长可给周围部队提供经验光环的半径（默认实现为 `10f`）。`BattleAgentLogic` 用它判定命中者是否处于队长的半径内，从而把队长作为 `captain` 参数传入 `GetXpFromHit`。只读；改写练级节奏时可调大或调小。

### GetSkillForWeapon(WeaponComponentData weapon, bool isSiegeEngineHit)
根据武器返回本次命中应提升的技能：普通武器返回 `weapon.RelevantSkill`，攻城器械命中返回 `Engineering`，其余返回 `Athletics`。在 `SkillLevelingManager.OnCombatHit` 里被调用以决定英雄经验落到哪个技能。纯计算，无副作用。

### GetXpFromHit(CharacterObject attackerTroop, CharacterObject captain, CharacterObject attackedTroop, PartyBase attackerParty, int damage, bool isFatal, MissionTypeEnum missionType)
核心方法：根据攻防双方战力、伤害量与是否致命，结合 `MilitaryPowerModel` 算出基础经验，再叠加队伍 perk 加成与队长 `Inspiring Leader` 光环，返回 `ExplainedNumber`。被英雄命中结算与地图战斗模拟（`MapEventParty`）调用，是实际发放经验前的最后一步公式。无世界状态副作用，只产出数值。

### GetXpMultiplierFromShotDifficulty(float shotDifficulty)
把远程射击难度（命中难度系数）映射到 0–2 的倍率：`shotDifficulty` 高于 14.4 时封顶，线性插值得到加成，用于奖励高难度射击。在 `OnCombatHit` 中对弓/弩类武器乘到此倍率上。纯函数。

## 示例

查询单次战斗命中折算的经验（运行期读取）：

```csharp
CombatXpModel combatXp = Campaign.Current.Models.CombatXpModel;
ExplainedNumber xp = combatXp.GetXpFromHit(
    attackerTroop, captain, attackedTroop,
    attackerParty, damage, isFatal,
    CombatXpModel.MissionTypeEnum.Battle);
float gainedXp = xp.RoundedResultNumber;
```

通过继承替换默认实现来加倍战斗经验（mod 改写规则）：

```csharp
public class DoubleCombatXpModel : DefaultCombatXpModel
{
    public override ExplainedNumber GetXpFromHit(
        CharacterObject attackerTroop, CharacterObject captain,
        CharacterObject attackedTroop, PartyBase attackerParty,
        int damage, bool isFatal, MissionTypeEnum missionType)
    {
        ExplainedNumber baseXp = base.GetXpFromHit(
            attackerTroop, captain, attackedTroop,
            attackerParty, damage, isFatal, missionType);
        baseXp.AddFactor(0.5f, "双倍战斗经验");
        return baseXp;
    }
}
```

## 参见

- `↑ 父级`：[战役 API 索引](../)
- `↔ 相关`：[`GameModels`](../GameModels) · [`Campaign`](../Campaign) · [`CharacterDevelopmentModel`](../CharacterDevelopmentModel) · [`PartyTrainingModel`](../PartyTrainingModel) · [`CharacterObject`](../CharacterObject) · [`Hero`](../Hero) · [`MobileParty`](../MobileParty) · [`Equipment`](../../core-extra/Equipment) · [`CampaignGameStarter`](../CampaignGameStarter) · [`CampaignBehaviorBase`](../CampaignBehaviorBase)
