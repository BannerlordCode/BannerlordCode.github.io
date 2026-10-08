---
title: "AddCompanionAction"
description: "这个静态 Action 类让你在战役里安全地把英雄登记为某氏族的同伴，同步归属字段并派发同伴新增事件。"
---

# AddCompanionAction

**命名空间：** `TaleWorlds.CampaignSystem.Actions`
**Type:** `public static class AddCompanionAction`
**Source:** `TaleWorlds.CampaignSystem/Actions/AddCompanionAction.cs`

## 概述

`AddCompanionAction` 位于 `TaleWorlds.CampaignSystem.Actions` 命名空间，是战役层负责「把一名英雄登记为某个氏族的同伴」这一世界状态变更的静态类。同伴关系在数据模型里横跨两个对象：英雄侧的 `Hero.CompanionOf` 记录他所属的氏族，氏族侧的 `Clan.Companions` 对外呈现该氏族的同伴名单。直接给字段赋值只能改动其中一侧，也会跳过这个入口在写入之后要做的收尾工作，于是其他系统读到的是半成品状态。`AddCompanionAction` 把整段流程封装成一个可复用调用：调用者只提供目标氏族与目标英雄，字段写入与事件广播都在类内部完成。类本身没有实例状态，也不需要初始化，只要战役已经启动就可以在任意战役逻辑里调用。

## 心智模型

`AddCompanionAction` 是战役层 Action 模式的一个最小样本，理解它的结构就理解了整个 `Actions` 命名空间的组织方式。这个模式统一为「多个语义化入口 → 单一内部实现」：对外可见的公开方法只是薄薄一层包装，用来给调用者提供表达意图的名字；真正改状态、派发事件的代码集中在唯一的 private 方法 `ApplyInternal` 里。本类只有 `Apply` 一个公开入口，它把参数原样转交给 `ApplyInternal`，由后者完成全部副作用。这种收敛带来两个直接结果：其一，无论从哪个入口进来，最终执行的状态变更序列完全一致，不会出现某条路径漏掉某一步的情况；其二，mod 作者只需要记住语义化入口的名字，不必关心内部实现细节，也不必猜测哪条路径才是正确的。

关键在于 `ApplyInternal` 内部的三步。第一步是处理英雄已有的同伴归属：如果 `companion.CompanionOf` 不为 null，内部实现会先调用 `RemoveCompanionAction.ApplyByFire` 解除旧关系。第二步把 `companion.CompanionOf` 指向传入的氏族，此后该英雄出现在这个氏族的同伴集合中。第三步通过 `CampaignEventDispatcher.Instance.OnNewCompanionAdded` 广播事件，让订阅了同伴变化的其他系统同步更新。因此「加同伴」这个动作隐含了「必要时先移除旧的同伴身份」这一语义，调用者不必自己先做移除。mod 应该始终使用语义化入口 `Apply`，不要直接写 `Hero.CompanionOf`，也不要自行去增删氏族集合，因为只有走 Action 才能保证解绑、赋值、事件三步全部发生。

## 怎么用

### 怎么拿到它

`AddCompanionAction` 是静态类，不存在实例，也不需要单例或注册。在任意战役逻辑里（战役行为、任务脚本、事件回调）直接写 `AddCompanionAction.Apply(clan, companion)` 即可。前提是战役已经启动、`Campaign.Current` 可用，并且传入的 `Clan` 与 `Hero` 都属于当前战役的对象图。

### 典型用法

- 任务奖励：任务脚本在结算阶段把新同伴交给玩家的氏族，调用 `AddCompanionAction.Apply` 传入玩家氏族与目标英雄。
- 调试与测试：开发期把一批英雄挂到某个氏族上，用来观察同伴相关界面与 AI 的反应。
- 数据修复：当存档或 mod 逻辑让同伴关系处于中间状态时，重新调用 `AddCompanionAction.Apply` 把它归位到目标氏族。
- 切换归属：把已经属于某氏族的英雄改派到另一个氏族，不必手动先调用移除入口，内部实现会先解绑旧关系。
- 事件驱动：需要响应「新同伴加入」时，订阅 `CampaignEventDispatcher` 上的同伴事件，而不是轮询字段。

### 最容易踩的坑

- 直接写 `Hero.CompanionOf` 或自行增删氏族集合：跳过 `ApplyInternal` 里的解绑与事件派发，其他系统看不到这次变更。
- 以为 `Apply` 只做「加」：当英雄已有同伴归属时，`ApplyInternal` 会先走移除路径，旧氏族会收到一次同伴移除事件。
- 在战役未启动时调用：`Campaign.Current` 为空，`CampaignEventDispatcher.Instance` 不可用。
- 把归属误当成队伍关系：同伴归属由传入的 `Clan` 决定，与英雄当前所在的队伍无关。
- 对同一英雄与同一氏族重复调用：`ApplyInternal` 仍会先解绑再绑定，并再派发一次事件。

## 关键成员

- **`AddCompanionAction`**（`AddCompanionAction.cs:6`）— 静态容器类型，`Apply` 与 `ApplyInternal` 都挂在这里，同伴新增操作只能从它的公开入口进入。
- **`ApplyInternal(Clan clan, Hero companion)`**（`AddCompanionAction.cs:9`）— private 的唯一实现：先处理英雄已有的同伴归属，再把 `companion.CompanionOf` 指向新氏族，最后派发 `OnNewCompanionAdded`。
- **`Apply(Clan clan, Hero companion)`**（`AddCompanionAction.cs:20`）— 公开语义化入口，mod 应当调用的方法，把两个参数原样转交给 `ApplyInternal`。

## 真实示例

```csharp
// 战役行为里把一名英雄登记为指定氏族的同伴
public void MakeCompanion(Clan clan, Hero hero)
{
    if (Campaign.Current == null)
    {
        return;
    }
    if (hero == Hero.MainHero)
    {
        return;
    }
    AddCompanionAction.Apply(clan, hero);
}
```

## 参见

- [RemoveCompanionAction](../RemoveCompanionAction) —— 配对的移除入口，解绑同伴关系走它。
- [Campaign](../Campaign) —— 战役总入口，`Campaign.Current` 是战役对象图的根。
- [CampaignEventDispatcher](../CampaignEventDispatcher) —— 同伴新增与移除事件在这里广播。
- [HeroHelper](../../core-extra/HeroHelper) —— 英雄相关的判断与查询辅助。

## 导航

- ↑ [API 参考](../../) —— 本版本 API 层入口：按任务找页的路径表
- ↑ [v1.5.3 首页](../../../) —— 19 个桶的完整缺口表与覆盖现状
- ↔ [模块地图](../../../architecture/module-map) —— 确认某个类型属于哪一桶
