---
title: "CombatXpModel"
description: "把单次战斗命中转换为英雄/兵种应得经验的可替换战役策略，连接 MilitaryPowerModel、Perk 与 CharacterDevelopmentModel。"
---
# CombatXpModel

**Namespace:** `TaleWorlds.CampaignSystem.ComponentInterfaces`  
**Module:** `TaleWorlds.CampaignSystem`  
**Type:** `public abstract class CombatXpModel : MBGameModel<CombatXpModel>`  
**Base:** `MBGameModel<CombatXpModel>`  
**Source:** `TaleWorlds.CampaignSystem/ComponentInterfaces/CombatXpModel.cs`  
**Default:** `TaleWorlds.CampaignSystem.GameComponents/DefaultCombatXpModel.cs`

## 一句话职责

`CombatXpModel` 决定战场上每一次命中给攻击方兵种与英雄带来多少经验、经验落到哪个技能，以及远程射击难度如何放大经验——它本身不给任何人写经验，只产出可解释的数值。

## 心智模型

这是战役层（Campaign）的“战斗经验规则”插槽，由 `Campaign.Current.Models.CombatXpModel` 持有，战役启动时通过 `GetGameModel<CombatXpModel>()` 解析并注册，替换实现必须在战役建立前装好。它不是 Action、不修改世界状态，而是在命中结算时被反复调用的纯计算：输入攻击方兵种、队长、受击方、队伍、伤害、是否致命与场景类型，输出一个 `ExplainedNumber`。真正的“把经验写进英雄”发生在下游的 `CharacterDevelopmentModel` / `HeroDeveloper` 与 `DefaultSkillLevelingManager`，它们消费本模型产出的数值后再生效。

```text
单次命中（伤害、致命、武器、队伍、场景）
        -> Campaign.Current.Models.CombatXpModel
             GetSkillForWeapon   决定经验落到哪个技能
             GetXpFromHit        计算基础经验（含 MilitaryPowerModel 战力与 Perk 加成）
             GetXpMultiplierFromShotDifficulty  远程难度倍率
        -> ExplainedNumber（可解释的 XP）
        -> DefaultSkillLevelingManager / CharacterDevelopmentModel
        -> HeroDeveloper / TroopRoster 经验 -> 技能成长 -> 存档
```

需要“改变经验规则”时替换这个 Model；需要“给某个人加经验”时走 `HeroDeveloper` / `DefaultSkillLevelingManager` 等官方成长入口，不要在本模型的回调里直接写英雄经验，也不要在预览/查询时触发世界变更。

### 注册与调用者

实例由 `Campaign.Current.Models` 提供，默认类型是 `DefaultCombatXpModel`。核心调用方有三个，全部来自真实源码：`SimpleAgentOrigin`（任务内逐次命中给部队/英雄结算）、`MapEventParty`（地图遭遇的模拟战斗结算）、`TaleWorlds.CampaignSystem.CharacterDevelopment.DefaultSkillLevelingManager`（把命中 XP 应用到英雄技能）。`GetXpFromHit` 内部还会读取 `Campaign.Current.Models.MilitaryPowerModel.GetTroopPower` 来估计敌我战力，因此它是经验计算与战力模型之间的桥梁。

## 何时用 / 何时不要用

**用**：你想调整整场战斗的经验产出曲线、按兵种/队伍/Perk 改写经验规则，或想为某种自定义场景（例如训练场、特殊演习）自定义经验倍率——此时子类化 `CombatXpModel` 并注册为当前战役的模型即可，所有调用方无需改动。

**不要用**：
- 不要在本模型的任何方法里直接给 `Hero` 或 `HeroDeveloper` 写经验——那会绕过 `CharacterDevelopmentModel` 的阈值与上限，造成重复升级或坏档。本模型只应“算”不应“写”。
- 不要在查询/预览（如显示预计经验）时修改世界状态或队伍编制。
- 不要为了给单个人加经验而替换整个模型；那种需求用 `HeroDeveloper.AddSkillXp` 之类的成长 API。
- 装饰（只微调部分规则）时务必把未改动的方法委托给 `MBGameModel<CombatXpModel>.BaseModel`，否则会丢失默认 Perk 加成与战力计算。

## 依赖图

上游提供输入与计算依赖，下游消费经验数值。

### 上游

| Type | Relation |
| --- | --- |
| [`Campaign`](../../campaign/Campaign) | 提供活动战役与 `Models` 注册表；`Campaign.Current` 为空时模型不可用。 |
| [`MilitaryPowerModel`](../MilitaryPowerModel) | `GetXpFromHit` 借其 `GetTroopPower` 估计敌我战力，是经验公式的核心输入。 |
| [`CharacterObject`](../../campaign/CharacterObject) | 攻击方/受击方兵种，决定战力、技能相关性与 Perk 上下文。 |
| [`PartyBase`](../../campaign/PartyBase) | 攻击方队伍，提供 `MapEvent`、`MobileParty`、`IsGarrison` 等 Perk 上下文。 |
| [`MapEvent`](../../campaign/MapEvent) | 提供 `MapEventSide.LeaderSimulationModifier`、`Side`、`SimulationContext` 修正战斗经验。 |

### 下游

| Type | Relation |
| --- | --- |
| [`CharacterDevelopmentModel`](../CharacterDevelopmentModel) | 消费本模型产出的 XP，换算技能等级、专注与阈值。 |
| [`Hero`](../../campaign/Hero) / `HeroDeveloper` | 通过 `DefaultSkillLevelingManager` 把命中 XP 写入英雄成长状态。 |
| [`MobileParty`](../../campaign/MobileParty) | 提供队伍 Perk（Trainer、LeadByExample 等）与 `IsCurrentlyAtSea` 上下文。 |
| [`GameModels`](../GameModels) | 持有 `CombatXpModel` 属性并负责注册/解析当前战役模型。 |

## 风险

1. **标题界面与战役早期 `Campaign.Current` 为空**：调用前必须判空，否则 `Campaign.Current.Models.CombatXpModel` 会抛空引用；模型自身的 `GetXpFromHit` 也会读取 `Campaign.Current.Models.MilitaryPowerModel`。
2. **模型空替换 / 注册时机错误**：`GameModels.CombatXpModel` 是 `private set`，若在战役建立之后才替换，部分已缓存的调用方可能仍指向旧模型；装饰子类若忘记委托 `BaseModel`，会静默丢失全部默认 Perk 加成。
3. **在纯计算里改状态**：`GetXpFromHit` 会被逐次命中反复调用（任务内、模拟战斗都会调用）。若在其中给英雄/队伍写经验或修改世界，会造成经验被多次累计（双重奖励）。
4. **NaN / 负值**：默认实现用 `MathF.Min(damage, MaxHitPoints)` 与 `0.4f * ...` 夹取，但自定义实现若返回负值或 NaN，会污染 `ExplainedNumber`，进而使技能经验异常甚至损坏存档。
5. **双重发奖**：本模型只产出数值，真正的写入由 `DefaultSkillLevelingManager` 等下游完成。若模组再手动调一次成长 API，英雄会被重复加经验。
6. **坏档数据**：经验最终写入 `HeroDeveloper` 并被序列化；负的或被 NaN 污染的累计 XP 会在读档时触发重复升级或成长异常。

## 成员按主题

### 武器 → 技能映射

| Member | Purpose | Timing |
| --- | --- | --- |
| `GetSkillForWeapon(WeaponComponentData, bool isSiegeEngineHit)` | 返回本次命中应成长的 `SkillObject`：默认 `Athletics`；攻城器械命中返回 `Engineering`；否则取 `weapon.RelevantSkill`。无副作用。 | 命中结算后、给技能加经验前调用，决定经验落到哪个技能。 |
| `MissionTypeEnum` | 场景枚举：`Battle`(×1)、`PracticeFight`(×0.0625)、`Tournament`(×0.33)、`SimulationBattle`(×0.9)、`NoXp`(×0)。 | 调用方按当前场景传入，控制经验倍率。 |

### 单次命中经验

| Member | Purpose | Timing |
| --- | --- | --- |
| `GetXpFromHit(CharacterObject attackerTroop, CharacterObject captain, CharacterObject attackedTroop, PartyBase attackerParty, int damage, bool isFatal, MissionTypeEnum missionType)` | 核心经验公式：用 `MilitaryPowerModel.GetTroopPower` 估算敌我战力，结合伤害、是否致命与场景倍率算出基础经验，再叠加 Perk（Trainer、LeadByExample、BullsEye、Inspiring Leader 等）与队长加成，返回 `ExplainedNumber`。纯计算，不改状态。 | 命中结算时由 `SimpleAgentOrigin`、`MapEventParty`、`DefaultSkillLevelingManager` 调用。 |
| `CaptainRadius` | 队长影响半径（默认 `10f`）。决定队长在多大范围内对附近士兵共享/加成经验。只读属性，无副作用。 | 经验分配阶段用于判定队长 proximity 加成。 |

### 远程难度倍率

| Member | Purpose | Timing |
| --- | --- | --- |
| `GetXpMultiplierFromShotDifficulty(float shotDifficulty)` | 把远程射击难度（1–14.4，超出夹到 14.4）线性映射为 0–2 的倍率：越难命中经验越高。无副作用。 | 远程命中结算时由 `DefaultSkillLevelingManager` 调用，乘到命中经验上。 |

## 示例

### 示例 1：在战斗场景中读取单次命中经验（真实调用方式）

下面节选自 `SimpleAgentOrigin` / `DefaultSkillLevelingManager` 的真实调用顺序——通过 `Campaign.Current.Models.CombatXpModel` 拿到可解释的经验数值，再由下游成长系统写入英雄。注意要先判空 `Campaign.Current`。

```csharp
// 在战斗任务或模拟战斗中，按单次命中计算攻击方应得经验
if (Campaign.Current == null)
{
    return;
}

ExplainedNumber xpFromHit = Campaign.Current.Models.CombatXpModel.GetXpFromHit(
    troop,                          // 攻击方兵种（CharacterObject）
    (CharacterObject)formationCaptain, // 队长（可为 null）
    (CharacterObject)victim,        // 受击方兵种（CharacterObject）
    Party,                          // 攻击方队伍（PartyBase）
    damage,                         // 本次造成的伤害（int）
    isFatal,                        // 本次命中是否致命
    CombatXpModel.MissionTypeEnum.Battle);

// 经验应交给 CharacterDevelopmentModel / HeroDeveloper 去写入，不要在这里直接改英雄
float xpForThisHit = xpFromHit.ResultNumber;
```

### 示例 2：子类化以微调经验规则（与 StoryModeCombatXpModel 同构）

只调整部分规则时，把未改动的方法委托给 `MBGameModel<CombatXpModel>.BaseModel`，避免丢失默认的战力计算与 Perk 加成。`BaseModel` 即引擎解析到的原版模型。

```csharp
using TaleWorlds.CampaignSystem.ComponentInterfaces;
using TaleWorlds.CampaignSystem.Party;
using TaleWorlds.Core;

public class MyCombatXpModel : CombatXpModel
{
    // 便捷访问被装饰的原版模型（StoryModeCombatXpModel 采用同一写法）
    private CombatXpModel Base => ((MBGameModel<CombatXpModel>)this).BaseModel;

    public override float CaptainRadius => Base.CaptainRadius;

    public override SkillObject GetSkillForWeapon(WeaponComponentData weapon, bool isSiegeEngineHit)
        => Base.GetSkillForWeapon(weapon, isSiegeEngineHit);

    public override ExplainedNumber GetXpFromHit(
        CharacterObject attackerTroop, CharacterObject captain, CharacterObject attackedTroop,
        PartyBase attackerParty, int damage, bool isFatal, MissionTypeEnum missionType)
    {
        ExplainedNumber xp = Base.GetXpFromHit(
            attackerTroop, captain, attackedTroop, attackerParty, damage, isFatal, missionType);
        // 例：把所有正式战斗经验整体下调 20%
        if (missionType == MissionTypeEnum.Battle)
        {
            xp.AddFactor(-0.2f, new TextObject("我的战斗经验修正"));
        }
        return xp;
    }

    public override float GetXpMultiplierFromShotDifficulty(float shotDifficulty)
        => Base.GetXpMultiplierFromShotDifficulty(shotDifficulty);
}
```

把 `MyCombatXpModel` 注册为当前战役的 CombatXpModel（引擎经 `GetGameModel<CombatXpModel>()` 解析），上述三个真实调用方都会自动走你的实现，无需逐一修改。

## 导航

- ↑ 父级：[Campaign-ext 模型索引](../)
- ↔ 同级：[CharacterDevelopmentModel](../CharacterDevelopmentModel) · [PartySpeedModel](../PartySpeedModel) · [MilitaryPowerModel](../MilitaryPowerModel) · [GameModels](../GameModels) · [CombatSimulationModel](../CombatSimulationModel) · [PartyHealingModel](../PartyHealingModel)
- 相关类型：[Campaign](../../campaign/Campaign) · [Hero](../../campaign/Hero) · [MobileParty](../../campaign/MobileParty) · [CharacterObject](../../campaign/CharacterObject) · [MapEvent](../../campaign/MapEvent) · [PartyBase](../../campaign/PartyBase)
- 指南：[战役系统总览](../../../guide/campaign-system)
