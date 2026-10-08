---
title: "MakePregnantAction"
description: "战役层静态动作类，把英雄标记为怀孕状态并广播受孕事件，供剧情与家族系统调用。"
---

# MakePregnantAction

**命名空间：** `TaleWorlds.CampaignSystem.Actions`
**Type:** `public static class MakePregnantAction`
**Source:** `TaleWorlds.CampaignSystem/Actions/MakePregnantAction.cs`

## 概述

`MakePregnantAction` 是战役层的一个静态动作类，源文件只有 22 行，是 `Actions` 命名空间里体量最小的一类。它涉及两类状态变更：把一个 `Hero` 对象的怀孕标记置为真，以及通过 `CampaignEventDispatcher` 广播一个「孩子受孕」事件。它不涉及任何 UI、对话或任务系统的直接操作——那些响应由监听事件的其它系统完成。它的边界很窄：只接受一个 `Hero` 参数，不校验调用时机，也不处理怀孕之后的任何后续流程（例如孕期推进、孩子出生）。调用方需要自己保证传入的 `Hero` 处于可以接受该状态的游戏阶段。

## 心智模型

这个类在源码里只有两个方法，形态非常直接。公开入口 `Apply(Hero mother)` 是外部唯一能调用的方法，它不做任何额外判断，直接转发给同类的私有实现 `ApplyInternal(Hero mother)`。`ApplyInternal` 才是真正干活的地方：先把 `mother.IsPregnant` 置为 `true`，再调用 `CampaignEventDispatcher.Instance.OnChildConceived(mother)` 广播事件。

从场景上看，`Apply` 适合「已经确定要让某个英雄怀孕」的调用点——无论是剧情脚本、任务奖励还是其它系统触发的结果。由于它不检查任何前置条件（比如英雄是否已婚、是否已处于怀孕状态），重复调用同一个 `Hero` 在源码层面是被允许的，只是会再次广播事件。`ApplyInternal` 是 `private` 的，外部无法直接调用，所以不存在「绕过入口直接改状态」的路径——所有调用都会经过 `Apply` 这一层。

## 怎么用

### 怎么拿到它

静态类，直接 `MakePregnantAction.Apply(hero)` 调用；不需要实例，也不需要从 `Campaign.Current` 获取。

### 典型用法

1. 剧情或任务系统决定某个英雄怀孕时，调用 `MakePregnantAction.Apply(hero)` 置位并广播事件。
2. 需要监听受孕事件的系统（例如家族、后代相关的 CampaignBehavior）通过 `CampaignEventDispatcher` 的 `OnChildConceived` 回调接收通知，而不是轮询 `IsPregnant`。
3. 在存档读档或状态同步的逻辑里，如果某个英雄已经处于怀孕状态，不需要再调用 `Apply`——直接读 `hero.IsPregnant` 即可。

### 最容易踩的坑

1. 传入 `null` 或处于不接受该状态的 `Hero` 会在 `ApplyInternal` 里抛 `NullReferenceException`——这个类不做参数校验。
2. 重复调用会重复广播 `OnChildConceived` 事件，监听方如果没做幂等处理会收到多次通知。
3. 这个类只负责「置位 + 广播」，不负责怀孕计时、孩子出生等后续流程；那些逻辑在别处，不要指望调完 `Apply` 后游戏自动推进孕期。

## 关键成员

- **ApplyInternal**（`MakePregnantAction.cs:9`）— 私有实现，把 `mother.IsPregnant` 置为 `true` 并调用 `CampaignEventDispatcher.Instance.OnChildConceived(mother)` 广播事件；外部不可调用，只被同类的 `Apply` 转发调用。
- **Apply**（`MakePregnantAction.cs:16`）— 公开入口，接收一个 `Hero`，不做任何校验直接转发给 `ApplyInternal`；是外部触发怀孕状态的唯一路径。

## 真实示例

```csharp
// 场景：任务奖励决定让某个英雄怀孕
public static void RewardHeroWithPregnancy(Hero hero)
{
    if (hero == null)
    {
        return;
    }
    MakePregnantAction.Apply(hero);
}

// 场景：批量处理多个英雄
public static void RewardClanWithPregnancy(Hero[] heroes)
{
    foreach (Hero hero in heroes)
    {
        MakePregnantAction.Apply(hero);
    }
}
```

## 参见

- [Campaign 事件与行为](../Campaign)
- [HeroHelper 英雄辅助方法](../../core-extra/HeroHelper)
- [CharacterHelper 角色辅助方法](../../core-extra/CharacterHelper)
- [CampaignEventDispatcher 事件分发](../CampaignEventDispatcher)

## 导航

- ↑ [API 参考](../../) —— 本版本 API 层入口：按任务找页的路径表
- ↑ [v1.5.3 首页](../../../) —— 19 个桶的完整缺口表与覆盖现状
- ↔ [模块地图](../../../architecture/module-map) —— 确认某个类型属于哪一桶
