---
title: "MakeHeroFugitiveAction"
description: "把一名英雄标记为逃犯并触发相关世界状态变更的静态 Action，是英雄身份翻转的正规入口。"
---

# MakeHeroFugitiveAction

**命名空间：** `TaleWorlds.CampaignSystem.Actions`
**Type:** `public static class MakeHeroFugitiveAction`
**Source:** `TaleWorlds.CampaignSystem/Actions/MakeHeroFugitiveAction.cs`

## 概述

`MakeHeroFugitiveAction` 负责把一名英雄的身份翻转为「逃犯」。在霸主的世界里，英雄的身份不是一个孤立字段：它同时决定该英雄与所属阵营的关系、其他角色对它的态度、以及一系列与身份相关的判定（例如遭遇时的反应、对话选项的可用性）。直接修改底层字段会绕过这些联动，造成「身份已改但世界没跟上」的不一致状态。这个静态类把「让英雄成为逃犯」这一变更收敛成一个语义化入口，让调用方用意图表达，而不是手动操作底层状态。

## 心智模型

这个类的结构是线性的：一个公开入口 `Apply`，一个私有实现 `ApplyInternal`。调用方传入目标英雄与一个控制是否显示通知的布尔值，`Apply` 把工作交给 `ApplyInternal`，由后者执行实际的身份变更与后续处理。对 mod 开发者来说，心智模型很直接：想让某个英雄成为逃犯，就调 `Apply`，把英雄传进去，再决定要不要弹通知。不需要、也不应该自己操作英雄的内部状态。与同批的其他 Action 相比，这个类没有按「谁给谁」分入口，因为它的语义只涉及单一主体——目标英雄本身，通知开关只是控制表现层的行为。

## 怎么用

### 怎么拿到它

`MakeHeroFugitiveAction` 是静态类，直接以 `MakeHeroFugitiveAction.Apply(...)` 的形式调用。

### 典型用法

- 剧情事件：某个 NPC 在剧情节点后成为逃犯。
- 任务分支：玩家选择让某个角色逃亡而不是被捕。
- 阵营叛变：英雄脱离阵营后需要被标记为逃犯。

### 最容易踩的坑

- `Apply` 的默认值是 `showNotification = false`，与多数 Action 的 `true` 相反——不传参数时不会弹通知，需要通知时必须显式传 `true`。
- 对已经是逃犯的英雄重复调用，可能触发不必要的后续处理。
- 直接改英雄的身份字段来模拟成为逃犯，绕过了 `ApplyInternal` 里的联动逻辑。

## 关键成员

- **`ApplyInternal`**（`MakeHeroFugitiveAction.cs:10`）— 私有实现，`Apply` 的实际落点，执行身份变更与后续处理。
- **`Apply`**（`MakeHeroFugitiveAction.cs:35`）— 公开入口，接收目标英雄与可选的通知开关，把英雄标记为逃犯。

## 真实示例

```csharp
public static void MakeMainHeroFugitive()
{
    MakeHeroFugitiveAction.Apply(Hero.MainHero);
}

public static void MakeHeroFugitiveWithNotification(Hero fugitive)
{
    MakeHeroFugitiveAction.Apply(fugitive, true);
}
```

## 参见

- [GiveItemAction](../GiveItemAction) —— 同批的另一个英雄状态 Action
- [HeroHelper](../../core-extra/HeroHelper) —— 英雄相关辅助方法
- [FactionHelper](../../core-extra/FactionHelper) —— 阵营相关辅助方法

## 导航

- ↑ [API 参考](../../) —— 本版本 API 层入口：按任务找页的路径表
- ↑ [v1.5.3 首页](../../../) —— 19 个桶的完整缺口表与覆盖现状
- ↔ [模块地图](../../../architecture/module-map) —— 确认某个类型属于哪一桶
