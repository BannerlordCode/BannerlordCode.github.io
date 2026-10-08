---
title: "ChangeClanInfluenceAction"
description: "静态 Action 类，让你在战役里安全地增减氏族影响力：修改数值并广播 OnClanInfluenceChanged 事件。"
---

# ChangeClanInfluenceAction

**命名空间：** `TaleWorlds.CampaignSystem.Actions`
**Type:** `public static class ChangeClanInfluenceAction`
**Source:** `TaleWorlds.CampaignSystem/Actions/ChangeClanInfluenceAction.cs`

## 概述

`ChangeClanInfluenceAction` 是战役层的一个静态 Action 类，负责调整氏族（Clan）的影响力数值。影响力是 Bannerlord 战役里氏族的核心资源之一，很多系统会读取它。这个类把「改数值」和「广播变化」两件事捆在一起：`ApplyInternal` 先把传入的数值加到 `clan.Influence` 上，再通过 `CampaignEventDispatcher.Instance.OnClanInfluenceChanged` 把变化通知出去。如果 mod 直接写 `clan.Influence += x`，数值虽然变了，但监听该事件的系统收不到通知，状态就会不同步。所以只要是想让影响力变化被战役层「看见」的场合，都应该走这个 Action 而不是直接改字段。

## 心智模型

这个类的结构非常薄，只有一个公开入口和一个私有实现，两者是收敛关系：

- 公开入口 `Apply(Clan clan, float amount)` 不做任何额外逻辑，直接转发给 `ApplyInternal`。
- `ApplyInternal(Clan clan, float amount)` 是真正干活的地方：先 `clan.Influence += amount`，再触发 `CampaignEventDispatcher.Instance.OnClanInfluenceChanged(clan, amount)`。

对 mod 来说，心智模型就一句话：**永远调 `Apply`，不要自己模仿 `ApplyInternal` 的两步操作**。入口和实现的分离意味着以后官方如果在 `Apply` 里加校验或改签名，mod 的调用点不用动；而如果你在 mod 里手写「改字段 + 发事件」的两步，就绕过了这层收敛，行为可能和战役其它部分不一致。`amount` 是 `float`，传负数就是扣影响力，传正数就是加。

## 怎么用

### 怎么拿到它

静态类，没有实例，不需要注册或查找。直接 `ChangeClanInfluenceAction.Apply(clan, amount)` 调用即可。

### 典型用法

- 任务奖励：玩家完成某个任务后，给所属氏族加一笔影响力。
- 战斗结算：氏族参与的战斗按结果增减影响力。
- 事件/决策后果：某个战役事件或政策决策要求调整某氏族的影响力。
- 开局设置：mod 初始化时给指定氏族一个影响力修正。

### 最容易踩的坑

- **直接改 `clan.Influence` 字段**：数值会变，但 `OnClanInfluenceChanged` 不会触发，依赖事件的系统（如 UI、其它监听者）看不到变化。
- **以为 `Apply` 里有额外校验**：`Apply` 只是转发，`ApplyInternal` 也没有任何条件分支，传什么就加什么，包括负数。
- **忽略事件负载里的 `amount`**：`OnClanInfluenceChanged` 收到的是变化量而不是新值，监听方要自己算。
- **在错误的线程/时机调用**：和所有战役 Action 一样，应在战役逻辑层调用，不要在渲染或存档序列化路径里调。

## 关键成员

- **ChangeClanInfluenceAction**（`ChangeClanInfluenceAction.cs:6`）— 静态类声明，整个 Action 的容器；mod 通过它访问下面的静态方法。
- **Apply**（`ChangeClanInfluenceAction.cs:16`）— 公开入口，接收 `Clan` 和 `float amount`，直接转发给 `ApplyInternal`；mod 唯一应该调用的方法。
- **ApplyInternal**（`ChangeClanInfluenceAction.cs:9`）— 私有实现，执行 `clan.Influence += amount` 并触发 `OnClanInfluenceChanged`；解释了入口如何收敛到「改值 + 广播」这两步。

## 真实示例

```csharp
// 场景：主角完成任务后，为其氏族增加影响力
Clan playersClan = Hero.MainHero.Clan;
ChangeClanInfluenceAction.Apply(playersClan, 15f);

// 场景：战败结算，扣除影响力（amount 传负数）
ChangeClanInfluenceAction.Apply(playersClan, -8f);

// 场景：开局给主角氏族一个修正值
Clan mainClan = Hero.MainHero.Clan;
ChangeClanInfluenceAction.Apply(mainClan, 20f);

// 场景：把主角氏族的影响力补到至少 100（先读当前值）
float current = mainClan.Influence;
if (current < 100f)
{
    ChangeClanInfluenceAction.Apply(mainClan, 100f - current);
}
```

## 参见

- [GainRenownAction](../GainRenownAction) — 同批的另一个静态 Action，给英雄加声望
- [CampaignEventDispatcher](../CampaignEventDispatcher) — 本类广播的 `OnClanInfluenceChanged` 事件的派发者
- [FactionHelper](../../core-extra/FactionHelper) — 派系/氏族相关的辅助工具页

## 导航

- ↑ [API 参考](../../) —— 本版本 API 层入口：按任务找页的路径表
- ↑ [v1.5.3 首页](../../../) —— 19 个桶的完整缺口表与覆盖现状
- ↔ [模块地图](../../../architecture/module-map) —— 确认某个类型属于哪一桶
