---
title: "ChangeRelationDetail"
description: "区分普通关系变化与使节关系变化，并说明 ChangeRelationAction 如何把原因传给关系事件。"
---
# ChangeRelationDetail

**命名空间：** `TaleWorlds.CampaignSystem.Actions`  
**模块：** `TaleWorlds.CampaignSystem`  
**类型：** `public enum ChangeRelationAction.ChangeRelationDetail`  
**基类：** `System.Enum`  
**源文件：** `TaleWorlds.CampaignSystem/Actions/ChangeRelationAction.cs`

## 一句话职责

标记英雄关系变更是普通关系操作还是使节操作，让关系 Behavior、通知和任务同时看到有效英雄与原始英雄，并提醒监听器在事件完成后重新读取双方当前关系而不是缓存旧值。

## 心智模型

这个枚举只在 [`ChangeRelationAction`](../ChangeRelationAction) 的公开入口中产生。Action 会先通过 `DiplomacyModel.GetHeroesForEffectiveRelation` 找到真正存储关系的英雄，再把变化限制在 `-100` 到 `100` 并写入 `CharacterRelationManager`，最后通过 `CampaignEvents.HeroRelationChanged` 发送 `ChangeRelationDetail`。

因此它描述“这次关系变化的来源”，不等于关系值，也不应被模组直接写进英雄。普通玩家关系和使节关系应该分别调用 `ApplyPlayerRelation`、`ApplyRelationChangeBetweenHeroes` 或 `ApplyEmissaryRelation`，不要手动改关系缓存或重复发通知。

## 枚举值与典型时机

| 值 | 对应入口 | 含义 |
|---|---|---|
| `Default` | `ApplyPlayerRelation`、`ApplyRelationChangeBetweenHeroes` | 对话、任务、奖励或战后等普通关系变化。 |
| `Emissary` | `ApplyEmissaryRelation` | 使节代表一方进行的关系变化；下游可以据此区别普通玩家互动。 |

关系变化可能经过模型缩放和随机取整；`detail` 只说明来源，不保证最终 `relationChange` 等于调用方传入的整数。

## 依赖与事件下游

- **上游：** [`ChangeRelationAction`](../ChangeRelationAction)、[`Hero`](../../campaign/Hero) 和 `Campaign.Current.Models.DiplomacyModel`。
- **核心状态：** `CharacterRelationManager` 写入有效英雄之间的个人关系；原始英雄参数仍会随事件传递。
- **事件：** [`CampaignEvents`](../CampaignEvents) 的 `HeroRelationChanged` 类型为 `IMbEvent<Hero, Hero, int, bool, ChangeRelationAction.ChangeRelationDetail, Hero, Hero>`。
- **下游：** [`CampaignEventReceiver`](../CampaignEventReceiver)、关系 Behavior、通知和任务会消费 `detail`、有效英雄和原始英雄。
- **存档：** 关系值会被战役状态保存，事件本身不会在读档时重播。

## 风险与生命周期

- 直接设置关系或绕过 Action 会跳过模型的有效英雄映射、`-100..100` 限制和 `OnHeroRelationChanged`，造成 UI、任务与真实关系值不一致。
- `ApplyInternal` 只有在关系变化非零时才写入并派发事件；不要把“调用 Action”当作“事件必然触发”。
- `showQuickNotification` 只控制通知路径，不改变关系事务。事件监听器应使用事件传入的有效变化，不要重新计算原始 delta。
- 关系事件是同步回调。不要在回调中对同一对英雄反复加减关系，避免递归通知和任务副作用。

## 真实使用示例

`DefaultNotificationsCampaignBehavior` 按下面的真实事件签名注册关系通知：

```csharp
using TaleWorlds.CampaignSystem;
using TaleWorlds.CampaignSystem.Actions;

public sealed class RelationReasonBehavior : CampaignBehaviorBase
{
    public override void RegisterEvents()
    {
        CampaignEvents.HeroRelationChanged.AddNonSerializedListener(this, OnRelationChanged);
    }

    private void OnRelationChanged(
        Hero effectiveHero,
        Hero effectiveHeroGainedRelationWith,
        int relationChange,
        bool showNotification,
        ChangeRelationAction.ChangeRelationDetail detail,
        Hero originalHero,
        Hero originalGainedRelationWith)
    {
        if (detail == ChangeRelationAction.ChangeRelationDetail.Emissary && relationChange != 0)
        {
            RecordEmissaryChange(effectiveHero, effectiveHeroGainedRelationWith, originalHero, originalGainedRelationWith);
        }
    }

    private void RecordEmissaryChange(Hero effectiveHero, Hero effectiveGained, Hero originalHero, Hero originalGained)
    {
        // 将事件写入模组自己的运行时状态，而不是重新改关系。
    }

    public override void SyncData(IDataStore dataStore)
    {
        // 这个示例没有需要保存的自有字段。
    }
}
```

若模组要改变关系，应使用例如 `ChangeRelationAction.ApplyEmissaryRelation(emissary, target, 5)` 的公开入口，并让 Action 负责模型缩放、边界和事件。

## 版本注记

1.3.15 与 1.4.5 都只有 `Default` 和 `Emissary`，事件参数顺序一致。1.4.5 的关系模型与有效英雄映射是当前语义参考。

## 导航

- ↑ 父级：[Campaign-Ext API](../)
- ↔ 同级：[ChangeRelationAction](../ChangeRelationAction) · [ChangeKingdomActionDetail](../ChangeKingdomActionDetail)
- ↓ 所属：[CampaignEvents](../CampaignEvents) · [CampaignEventReceiver](../CampaignEventReceiver)
- 相关：[Hero](../../campaign/Hero) · [DiplomacyModel](../DiplomacyModel)
