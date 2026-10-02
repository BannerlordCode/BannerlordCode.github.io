---
title: "StoryModeCombatXpModel"
description: "战斗经验结算模型：命中一次给多少经验、武器对应哪个技能、队长光环半径，训练场里全部归零。"
---
# StoryModeCombatXpModel

**Namespace:** StoryMode.GameComponents
**Module:** StoryMode
**Type:** `public class StoryModeCombatXpModel : CombatXpModel`
**Base:** `CombatXpModel`（继承自 `MBGameModel<CombatXpModel>`）
**Source:** `bannerlord-1.5.3/StoryMode/GameComponents/StoryModeCombatXpModel.cs`

## 概述

玩家在战斗中的技能经验主要来源就是这一组方法：每次有效命中调一次 `GetXpFromHit`，按攻击者武器类型决定加哪个技能，再乘一个按命中难度的倍率。StoryMode 的实现只改一件事——如果玩家当前所在的聚落是一个训练场（`Settlement.CurrentSettlement.IsTrainingField()`），经验直接返回 0。因为教学关的战场就设在训练场里，玩家在这里练级会跳过正常的技能曲线成长。

## 心智模型

注册方式是 `campaignGameStarter.AddModel<CombatXpModel>(new StoryModeCombatXpModel())`。调用方是任务（Misson）内的命中处理器：每次 `Agent` 造成有效伤害 → 询问本模型 → 拿到 `ExplainedNumber` → 加到攻击者（或队长）的技能上。**模型本身不持有技能、不写技能值，只算一个数**。

判定顺序值得注意：归零判断发生在**第一行**，先于任何基类调用。所以训练场里连「武器对应哪个技能」的解析都不做，直接给 `new ExplainedNumber(0f, false, null)`——三个参数分别是数值、不带说明项、空描述源。

另外三个成员 `CaptainRadius`（队长技能光环半径）、`GetSkillForWeapon(WeaponComponentData weapon, bool isSiegeEngineHit)`（武器→技能映射）、`GetXpMultiplierFromShotDifficulty(float shotDifficulty)`（远程命中难度倍率）全部透传。想改技能成长速度应该动这三个，而不是硬改 `GetXpFromHit` 的返回值。

**常见误用与坑**

- **`Settlement.CurrentSettlement` 是任务外的静态当前聚落。** 只在玩家身处聚落的上下文里可靠。在世界地图上周期性调用 `GetXpFromHit` 时它是 null，训练场判断自然不成立——这是正确行为，不是 bug。
- **`IsTrainingField()` 认的是 `SettlementComponent` 类型，不是聚落名。** mod 换掉训练场聚落、或给别的聚落装上 `TrainingField` 组件，判定结果就变。
- **别在训练场用 `GetXpFromHit` 做其它用途。** 返回的是全零 `ExplainedNumber`，基于经验值的解锁/成就触发会全部失灵。
- **`MissionTypeEnum missionType` 参数在 StoryMode 层不被使用。** 它只在透传基类时起作用。

## 主要成员

- `GetXpFromHit(CharacterObject attackerTroop, CharacterObject captain, CharacterObject attackedTroop, PartyBase attackerParty, int damage, bool isFatal, CombatXpModel.MissionTypeEnum missionType)`
  核心：单次命中的经验值。训练场返回 `new ExplainedNumber(0f, false, null)`，否则透传。**由任务层在命中时调用**，mod 里不需要主动调。
- `CaptainRadius`（`float` 属性）
  队长技能光环的作用半径，透传。技能升级触发时查询。
- `GetSkillForWeapon(WeaponComponentData weapon, bool isSiegeEngineHit)`
  把武器类型映射到技能。透传。`isSiegeEngineHit` 为 true 时走攻城武器分支。
- `GetXpMultiplierFromShotDifficulty(float shotDifficulty)`
  远程命中难度的经验倍率。透传。箭矢类攻击结算时查询。

## 使用示例

```csharp
// 场景：训练场想给一半经验（而不是完全不给），做成可调
public class MyCombatXpModel : CombatXpModel
{
    public override ExplainedNumber GetXpFromHit(
        CharacterObject attackerTroop, CharacterObject captain,
        CharacterObject attackedTroop, PartyBase attackerParty,
        int damage, bool isFatal, CombatXpModel.MissionTypeEnum missionType)
    {
        if (Settlement.CurrentSettlement != null && Settlement.CurrentSettlement.IsTrainingField())
        {
            // 训练场给 25% 经验；第三个参数是说明文本来源，null 表示无说明
            return new ExplainedNumber(damage * 0.25f, false, null);
        }
        return base.BaseModel.GetXpFromHit(
            attackerTroop, captain, attackedTroop,
            attackerParty, damage, isFatal, missionType);
    }
}

protected override void InitializeGameStarter(Game game, IGameStarter gameStarterObject)
{
    base.InitializeGameStarter(game, gameStarterObject);
    var starter = (CampaignGameStarter)gameStarterObject;
    starter.AddModel<CombatXpModel>(new MyCombatXpModel());
}
```

## 风险与边界

- **无存档序列化风险**：模型无字段，不进存档。
- **与 `StoryModeGenericXpModel` 的分工别搞混**：本模型管**战斗命中**经验；世界地图上活动产生的经验由 `GenericXpModel` 决定，训练场同样在那边被归零。想统一处理训练场禁经验，需要同时覆写两个模型。
- **`CaptainRadius` 属于共享数值**：改它会影响所有队伍队长的光环范围，包括玩家自己带队的收益，是全局平衡改动。
- **多层覆写叠加**：多个 mod 各自覆写 `GetSkillForWeapon` 时，后注册者的返回值覆盖前一层，后一层若返回 null/错误技能会静默破坏经验归属。

## 依赖关系

- [CampaignGameStarter](../../campaign/CampaignGameStarter) — 模型注册入口
- [MBGameModel](../../core-extra/MBGameModel) — `BaseModel` 透传目标
- [StoryModeGenericXpModel](../StoryModeGenericXpModel) — 同属「训练场不产生经验」的另一半，实现在另一条经验路径上
- [TrainingFieldCampaignBehavior](../TrainingFieldCampaignBehavior) — 训练场聚落与任务场景的组织者
- [module-map](../../../architecture/module-map) — StoryMode 模块在整体模块结构中的位置