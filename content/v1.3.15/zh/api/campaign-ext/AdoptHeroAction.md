---
title: "AdoptHeroAction"
description: "执行玩家收养英雄的窄范围状态变更，并明确说明它没有战役事件或内置调用流程。"
---
# AdoptHeroAction

**命名空间：** `TaleWorlds.CampaignSystem.Actions`  
**模块：** `TaleWorlds.CampaignSystem`  
**类型：** `public static class AdoptHeroAction`  
**基类：** `System.Object`  
**源文件：** `TaleWorlds.CampaignSystem/Actions/AdoptHeroAction.cs`

## 一句话职责

按主角性别把主角写成目标英雄的母亲或父亲，再把目标英雄的氏族设为 `Clan.PlayerClan`；它不是完整的家族、伙伴、队伍或事件工作流，调用者必须自己补齐验证与同步。

## 心智模型

这个 Action 与大多数战役 Action 不同：1.4.5 源码没有公开 `CampaignEvents` 通知，也没有除自身声明之外的内置调用点。方法直接写入父级字段和氏族字段，因此不会有下游监听器替 mod 修复关联状态。

应把它看作受控收养功能的低层兼容入口，而不是“英雄已完整加入玩家氏族”的证明。调用者要负责资格、家族规则、队伍、职位、UI、mod 自有事件和存档迁移。

## 何时使用

只有在战役已启动、`Hero.MainHero` 有效、mod 已选出符合规则的目标英雄，并且周边收养规则已经确定时才使用。下面的示例从真实的单对单对话英雄槽位取得目标，展示一个受限功能。

不要用它招募伙伴、在氏族之间转移英雄，或替代继承和婚姻系统。不要从 `SyncData`、加载回调或等待不存在的收养事件中调用它。

## 入口与时机

| 入口 | 行为 |
| --- | --- |
| `Apply(Hero adoptedHero)` | `Hero.MainHero.IsFemale` 为真时写入 `adoptedHero.Mother`，否则写入 `adoptedHero.Father`；随后设置 `adoptedHero.Clan = Clan.PlayerClan`。 |

私有 `ApplyInternal` 不做验证、空值保护、队伍迁移或事件派发；调用者必须在入口前完成检查。

## 依赖与事件边界

- **父级：** [`Hero.MainHero`](../../campaign/Hero) 提供父级对象，并且必须来自活动战役。
- **目标：** [`Hero`](../../campaign/Hero) 被直接修改；Action 不会把目标加入队伍或伙伴名册。
- **氏族：** [`Clan.PlayerClan`](../../campaign/Clan) 成为目标的氏族。
- **没有事件：** 与许多状态 Action 不同，它不会调用 [`CampaignEvents`](../CampaignEvents) 或 `CampaignEventDispatcher`。
- **存档：** 父级和氏族字段属于战役状态；mod 的收养 UI/缓存要单独保存并重建。

## 风险与生命周期

- 传入空目标时 Action 没有验证，调用会在形成有效收养状态前失败。
- 它只按主角性别写入一个父级字段，不会规范另一位父母、配偶、子女、年龄、文化、职业或氏族关系。
- 通过 Action 设置 `Clan.PlayerClan` 可能与伙伴、领主、队伍、工坊、王国或任务状态冲突；氏族归属不等于伙伴或封臣资格。
- 因为没有事件，其他 Behavior 和 UI 可能保留旧缓存；应在状态验证完成后定义并派发 mod 自有事件。
- 在存档加载或其他生命周期敏感回调中调用，可能写入原生战役从未预期的可持久化关系。

## 真实使用示例

下面从真实的单对单对话英雄槽位获取目标，并在主角与目标不同后执行窄范围变更。没有事件是有意的：

```csharp
using TaleWorlds.CampaignSystem;
using TaleWorlds.CampaignSystem.Actions;

public static class ControlledAdoption
{
    public static void TryAdoptConversationHero()
    {
        Hero parent = Hero.MainHero;
        Hero adoptedHero = Hero.OneToOneConversationHero;
        if (parent != null && adoptedHero != null && adoptedHero != parent)
        {
            AdoptHeroAction.Apply(adoptedHero);
            RefreshAdoptionUi(adoptedHero);
        }
    }
}
```

`Hero.OneToOneConversationHero` 只是这个示例的真实获取路径；生产功能仍需自己的资格检查与存档策略。不存在可以替代 `RefreshAdoptionUi` 的 `CampaignEvents` 订阅。

## 版本注记

1.3.15 与 1.4.5 都只公开 `Apply(Hero)`，并执行相同的父级/氏族直接写入。没有内置事件或 1.4.5 调用点是契约的一部分，不是示例遗漏。

## 导航

- **父级：** [campaign-ext API](../)
- **同级：** [AddCompanionAction](../AddCompanionAction) · [ChangeOwnerOfWorkshopAction](../ChangeOwnerOfWorkshopAction)
- **相关：** [Hero](../../campaign/Hero) · [Clan](../../campaign/Clan) · [CampaignEvents](../CampaignEvents)
