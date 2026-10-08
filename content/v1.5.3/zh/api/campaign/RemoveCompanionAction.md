---
title: "RemoveCompanionAction"
description: "这个静态 Action 类让你按原因安全地解除英雄的同伴归属，覆盖解雇、任务结束、死亡与转为领主四种入口。"
---

# RemoveCompanionAction

**命名空间：** `TaleWorlds.CampaignSystem.Actions`
**Type:** `public static class RemoveCompanionAction`
**Source:** `TaleWorlds.CampaignSystem/Actions/RemoveCompanionAction.cs`

## 概述

`RemoveCompanionAction` 位于 `TaleWorlds.CampaignSystem.Actions` 命名空间，负责战役里「解除一名英雄的同伴身份」这一世界状态变更。移除同伴远不止把 `Hero.CompanionOf` 清空：内部实现还要根据原因处理英雄当前所在的队伍、囚禁状态与装备，并把变化广播出去。如果 mod 直接清字段，这些连带处理都不会发生，队伍名册会留下一条不存在的成员记录，其他系统也收不到通知。这个类把不同原因拆成四个语义化入口，每个入口对应一种真实的游戏事件，调用者按场景挑一个即可，具体差异由内部实现统一处理。

## 心智模型

`RemoveCompanionAction` 展示了 Action 模式里「多个语义化入口 → 单一内部实现」的完整形态。类对外暴露四个公开方法：`ApplyByFire`、`ApplyAfterQuest`、`ApplyByDeath` 与 `ApplyByByTurningToLord`，它们分别对应解雇、任务结束、死亡、转为领主这四种真实原因。四个方法体都只有一行，做的事完全一样：把参数连同对应的 `RemoveCompanionDetail` 枚举值转交给同一个 private 方法 `ApplyInternal`。所有真正的状态变更与事件派发都集中在那一个方法里，公开入口只是给调用者提供表达意图的名字。

这种结构的意义在于：调用者表达的是「为什么移除」，而不是「怎么移除」。如果每个原因各写一份实现，四条路径迟早会出现细节漂移，比如某条路径忘记处理囚禁状态或忘记清空总督职位。收敛到单一实现之后，所有入口共享同一段收尾逻辑，行为差异只由 `RemoveCompanionDetail` 的取值决定。`ApplyInternal` 拿到 detail 后做三件事：把 `companion.CompanionOf` 清空；当英雄所在队伍是可移动队伍且原因不是 `ByTurningToLord` 时，从队伍名册中扣掉这名英雄，并在英雄是该队伍领袖时停住队伍、把 AI 标记为下一小时重新思考，名册清空则摧毁队伍、否则开始解散；随后按 detail 分支，`Fire` 会处理囚禁逃脱或成为逃犯，并重置流浪者的装备。最后，如果英雄是某地的总督，会先移除总督职位，再广播 `OnCompanionRemoved` 事件。

注意 `RemoveCompanionDetail` 是嵌在 `RemoveCompanionAction` 内部的公开枚举，`ApplyInternal` 的第三个参数就是它的值。mod 通常不需要自己构造这个枚举，只需要选对入口；只有在订阅 `OnCompanionRemoved` 时才会看到它，用来区分这次移除的原因。

## 怎么用

### 怎么拿到它

`RemoveCompanionAction` 是静态类，直接写 `RemoveCompanionAction.ApplyByFire(clan, companion)` 这类调用即可，不需要实例化。四个入口签名一致，都是 `(Clan clan, Hero companion)`。调用前提是战役已经启动、`Campaign.Current` 可用，传入的氏族与英雄属于当前战役对象图。

### 典型用法

- 解雇同伴：玩家在氏族界面解雇一名同伴，走 `ApplyByFire`，英雄会按内部规则离开并恢复成可招募状态。
- 任务结束：任务脚本在同伴按约定离开玩家氏族时调用 `ApplyAfterQuest`。
- 同伴阵亡：死亡结算流程里用 `ApplyByDeath` 完成归属清理。
- 转为领主：同伴被提升为领主、身份发生变化时调用 `ApplyByByTurningToLord`，这个入口会跳过队伍名册的扣减处理。
- 内部复用：`AddCompanionAction` 在英雄已有归属时会调用 `ApplyByFire` 先解除旧关系。

### 最容易踩的坑

- 方法名拼写：第四个入口在源码里就是 `ApplyByByTurningToLord`，有两个 `By`，照抄即可，不要改成 `ApplyByTurningToLord`。
- 把 `ApplyByFire` 当通用移除：它会额外处理囚禁逃脱或成为逃犯，并对流浪者重置装备，语义上只适合「解雇」。
- 忽略事件里的 detail：`OnCompanionRemoved` 会带上 `RemoveCompanionDetail`，订阅方需要按取值分支处理。
- 试图直接调用 `ApplyInternal`：它是 private，只能通过四个公开入口进入。
- 忘记队伍连带影响：当英雄是可移动队伍的领袖时，内部实现会停住队伍并可能解散或摧毁它，移除同伴不只是改归属。

## 关键成员

- **`RemoveCompanionAction`**（`RemoveCompanionAction.cs:7`）— 静态容器类型，四个语义化入口与嵌套枚举都定义在它里面。
- **`ApplyInternal(Clan clan, Hero companion, RemoveCompanionAction.RemoveCompanionDetail detail)`**（`RemoveCompanionAction.cs:10`）— private 的唯一实现：清空同伴归属、按 detail 处理队伍与身份、移除总督职位，最后广播 `OnCompanionRemoved`。
- **`ApplyByFire(Clan clan, Hero companion)`**（`RemoveCompanionAction.cs:56`）— 解雇入口，转交 detail 为 `Fire`。
- **`ApplyAfterQuest(Clan clan, Hero companion)`**（`RemoveCompanionAction.cs:62`）— 任务结束入口，转交 detail 为 `AfterQuest`。
- **`ApplyByDeath(Clan clan, Hero companion)`**（`RemoveCompanionAction.cs:68`）— 死亡入口，转交 detail 为 `Death`。
- **`ApplyByByTurningToLord(Clan clan, Hero companion)`**（`RemoveCompanionAction.cs:74`）— 转为领主入口，转交 detail 为 `ByTurningToLord`，拼写里的双 `By` 与源码一致。
- **`RemoveCompanionDetail`**（`RemoveCompanionAction.cs:80`）— 嵌套公开枚举，取值 `Fire`、`Death`、`AfterQuest`、`ByTurningToLord`，说明这次移除属于哪一种原因。

## 真实示例

```csharp
// 按原因选择移除同伴的语义化入口
public void RemoveCompanion(Clan clan, Hero hero, bool byDeath)
{
    if (Campaign.Current == null)
    {
        return;
    }
    if (byDeath)
    {
        RemoveCompanionAction.ApplyByDeath(clan, hero);
        return;
    }
    RemoveCompanionAction.ApplyAfterQuest(clan, hero);
}
```

## 参见

- [AddCompanionAction](../AddCompanionAction) —— 配对的登记入口，新增同伴关系走它。
- [Campaign](../Campaign) —— 战役总入口，`Campaign.Current` 是战役对象图的根。
- [CampaignEventDispatcher](../CampaignEventDispatcher) —— `OnCompanionRemoved` 等同伴事件在这里广播。
- [HeroHelper](../../core-extra/HeroHelper) —— 英雄相关的判断与查询辅助。

## 导航

- ↑ [API 参考](../../) —— 本版本 API 层入口：按任务找页的路径表
- ↑ [v1.5.3 首页](../../../) —— 19 个桶的完整缺口表与覆盖现状
- ↔ [模块地图](../../../architecture/module-map) —— 确认某个类型属于哪一桶
