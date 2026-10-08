---
title: "DisableHeroAction"
description: "把英雄从游戏世界中停用：清理部队、停留、定居点与囚禁状态，最后置为 Disabled。mod 应通过 Apply 入口调用而非直接改字段。"
---

# DisableHeroAction

**命名空间：** `TaleWorlds.CampaignSystem.Actions`
**Type:** `public static class DisableHeroAction`
**Source:** `TaleWorlds.CampaignSystem/Actions/DisableHeroAction.cs`

## 概述

DisableHeroAction 负责把一个英雄从游戏世界中"停用"——注意不是杀死，而是让其退出当前所有活动状态。它处理四件事：如果英雄带领部队，则销毁该部队（若只是普通成员则从名册移除）；如果英雄停留在某定居点，则清空停留记录；如果英雄正在某定居点内，则让其离开；如果英雄是囚犯，则按逃脱路径结束囚禁；最后把英雄状态改为 Disabled。为什么必须走它而不是直接改字段：直接设 `hero.ChangeState(Hero.CharacterStates.Disabled)` 会留下悬空引用——部队名册里还有这个英雄、定居点停留记录没清、囚禁状态没解，后续 AI 与事件系统会读到不一致的世界状态。这个 Action 把这些清理步骤收敛成一次原子操作，mod 只需调一个方法。

## 心智模型

入口是 `Apply(Hero hero)`，它不做任何额外判断，直接转发给私有的 `ApplyInternal(Hero hero)`。ApplyInternal 的结构是一串并列的守卫式清理：首先检查 `hero.IsAlive`，只有活着才继续往下走；然后按"部队 → 停留 → 定居点 → 囚禁"的顺序逐一退出，每条分支都先判空再动作——部队分支里还区分了"英雄是领袖"（销毁整支部队）和"英雄只是成员"（从名册移除）两种情况；最后统一 `ChangeState(Hero.CharacterStates.Disabled)`。整个方法没有事务性回滚：各分支独立执行，中途不会撤销已做的清理。mod 应该用语义化入口 `Apply(hero)`，而不是自己拼这些清理步骤——清理顺序和判空条件是世界状态一致性的组成部分，自己拼容易漏掉某个分支（比如忘了处理囚禁状态，或者忘了区分领袖与成员）。也不要在调用前后手动改 `StayingInSettlement` 或 `CurrentSettlement`，ApplyInternal 自己会处理这两处。

## 怎么用

### 怎么拿到它

直接 `DisableHeroAction.Apply(hero)` 调用。这是静态类，所有成员都是 static，不能也不需要实例化。

### 典型用法

1. 剧情事件后让某个领主退场——作为"死亡"剧情的替代方案，保留英雄数据但让其退出世界
2. 英雄被俘虏剧情中，先停用再转入囚禁状态（Apply 内部会处理囚禁分支）
3. 自定义"英雄退休"机制——老年英雄不再活跃时调用
4. 把英雄从部队中移除前，先销毁其带领的部队

### 最容易踩的坑

1. 对已死亡的英雄调用 Apply 不会有任何效果——`hero.IsAlive` 守卫会直接跳过所有清理
2. 英雄是部队领袖时，Apply 会销毁整支部队——包括部队里的其他英雄和全部部队成员
3. 英雄是囚犯时，Apply 走的是 `EndCaptivityAction.ApplyByEscape` 路径，会触发逃脱相关事件与结算
4. 直接改 `CharacterStates` 而不走 Action，会留下悬空引用（部队名册、停留记录、囚禁状态）

## 关键成员

- **DisableHeroAction**（`DisableHeroAction.cs:7`）— 静态类声明；所有成员都是 static，mod 直接调用 Apply 即可，不能 new 实例
- **ApplyInternal**（`DisableHeroAction.cs:10`）— 私有实现；按"部队→停留→定居点→囚禁"顺序清理英雄的所有活动状态，最后 ChangeState(Disabled)；mod 不应直接调用（private）
- **Apply**（`DisableHeroAction.cs:43`）— 公开入口；转发给 ApplyInternal；mod 唯一应该调用的方法

## 真实示例

```csharp
// 场景：剧情事件后，让某家族的所有存活领主从世界中退场
Clan clan = Hero.MainHero.Clan;
foreach (Hero hero in clan.Heroes)
{
    if (!hero.IsAlive)
    {
        continue;
    }
    if (hero.PartyBelongedTo != null)
    {
        DisableHeroAction.Apply(hero);
    }
}
```

## 参见

- [ChangeRulingClanAction](../ChangeRulingClanAction) —— 本批兄弟页：更换王国统治家族的 Action
- [Campaign](../Campaign) —— Campaign 层入口：事件、行为与状态系统的总览
- [HeroHelper](../../core-extra/HeroHelper) —— Hero 状态的辅助操作与常用属性速查

## 导航

- ↑ [API 参考](../../) —— 本版本 API 层入口：按任务找页的路径表
- ↑ [v1.5.3 首页](../../../) —— 19 个桶的完整缺口表与覆盖现状
- ↔ [模块地图](../../../architecture/module-map) —— 确认某个类型属于哪一桶
