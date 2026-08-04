---
title: "TeleportationHelper"
description: "读取 Hero 延迟传送剩余的 Campaign 小时数。"
---
# TeleportationHelper

**命名空间：** `Helpers`  
**模块：** `TaleWorlds.CampaignSystem`  
**类型：** `public static class TeleportationHelper`  
**基类：** `System.Object`  
**源文件：** `bin/TaleWorlds.CampaignSystem/Helpers/TeleportationHelper.cs`

## 一句话职责

`TeleportationHelper` 把当前 [ITeleportationCampaignBehavior](../../campaign/ITeleportationCampaignBehavior) 保存的到达时间转换为 [Hero](../../campaign/Hero) 仍需等待的 Campaign 小时数。

## 心智模型

这个 helper 是围绕 `Campaign.Current` 的只读便捷桥接。它解析 `ITeleportationCampaignBehavior`，读取 Hero 的 `CampaignTime` 到达值，再返回 `RemainingHoursFromNow`。它不会创建传送请求、选择目的地，也不会移动 Hero。

原版 [TeleportationCampaignBehavior](../../campaign/TeleportationCampaignBehavior) 保存延迟请求，其中包括待传送 Hero、[Settlement](../../campaign/Settlement) 或 [MobileParty](../../campaign/MobileParty) 目标和到达时间。helper 只暴露倒计时，不暴露目标，也不告诉调用方 Hero 是 governor 还是 party leader。

## 什么时候使用，什么时候不要使用

- **适合：** 为已经处于 traveling 状态的 Hero 显示剩余小时数，或执行其他只读展示。
- **适合：** 调用方已经持有 Hero 引用、只需要倒计时时使用；`ClanFinanceAlleyItemVM` 对正在前往 alley 的 leader 就是这样做的。
- **不要：** 用它开始或取消延迟传送；这些 mutation 应使用 [TeleportHeroAction](../../campaign-ext/TeleportHeroAction) 的公开入口。
- **不要：** 用它发现目标；如果需要目标身份和角色标记，应查询 `ITeleportationCampaignBehavior.GetTargetOfTeleportingHero`。
- **不要把返回值当作目的地：** 它是以小时为单位的 `float`，不是 map point 或 settlement 引用。

## 公开入口

### `GetHoursLeftForTeleportingHeroToReachItsDestination`

```csharp
public static float GetHoursLeftForTeleportingHeroToReachItsDestination(Hero teleportingHero)
```

v1.4.5 的方法体等价于：

```csharp
return Campaign.Current.GetCampaignBehavior<ITeleportationCampaignBehavior>()
    ?.GetHeroArrivalTimeToDestination(teleportingHero)
    .RemainingHoursFromNow ?? 0f;
```

如果 Campaign 无法解析该 interface behavior，null-conditional 路径会返回 `0f`。如果使用原版 behavior，没有匹配 pending record 的 Hero 会从 `GetHeroArrivalTimeToDestination` 得到 `CampaignTime.Never`；因此应在已经确认 Hero 处于 traveling/pending 流程后再使用这个 helper。

## 真实 Campaign 流程

原版 clan-finance UI 先检查 `assignedClanMemberOfAlley.IsTraveling`，再用这个 helper 填充 `LEFT_TIME` 文本变量。Campaign UI 或 behavior 也可以使用同样的只读模式：

```csharp
using Helpers;
using TaleWorlds.CampaignSystem;
using TaleWorlds.Library;

Hero hero = Hero.MainHero;
if (hero.IsTraveling)
{
    float hoursLeft = TeleportationHelper
        .GetHoursLeftForTeleportingHeroToReachItsDestination(hero);
    Debug.Print($"{hero.Name} has {hoursLeft:0.0} campaign hours left to travel.");
}
```

这段代码只读取 Campaign behavior 当前的倒计时。它不会推进时间或强制到达；behavior 的 hourly tick 与 delayed-teleport model 才拥有这个生命周期。

## 依赖与所有权

- [Campaign](../../campaign/Campaign) 是解析 `ITeleportationCampaignBehavior` 的 service locator。
- [ITeleportationCampaignBehavior](../../campaign/ITeleportationCampaignBehavior) 持有到达时间和目标信息的公开查询契约。
- [TeleportationCampaignBehavior](../../campaign/TeleportationCampaignBehavior) 是原版状态所有者，其 pending list 通过 Campaign 存档系统同步。
- [TeleportHeroAction](../../campaign-ext/TeleportHeroAction) 发布延迟和立即传送请求。helper 观察由此产生的延迟状态，但不会调用 action。
- [CampaignTime](../../campaign/CampaignTime) 提供 `RemainingHoursFromNow`；本 helper 将该时间值转换为 `float`。

## 风险与存档边界

- helper 依赖 `Campaign.Current`，属于 Campaign API；在 Campaign 尚未建立的启动路径中不要调用。
- interface behavior 缺失时返回 `0f`，它只表示没有可用的 behavior 倒计时，不代表 Hero 已经到达。
- 原版 behavior 在 Hero 不在 pending list 时返回 `CampaignTime.Never`。显示面向用户的倒计时前，应由所属流程确认 traveling/pending 状态。
- Hero 被杀死或俘获、目标 party 被销毁或解散、目标 settlement 易主时，延迟请求都可能取消。已经读出的 float 不是持久状态。
- `TeleportationCampaignBehavior` 会同步 pending list；这个 helper 本身没有字段、事件或存档契约。

## 版本注记

本页按 v1.4.5 `TeleportationHelper.cs` 编写。该类只有一个静态读取方法；延迟传送的创建、取消、持久化和立即应用属于 Campaign behavior 与 action 层。

## 导航

- [↑ API 系统索引](../)
- [相关：Hero](../../campaign/Hero)
- [相关：ITeleportationCampaignBehavior](../../campaign/ITeleportationCampaignBehavior)
- [相关：TeleportationCampaignBehavior](../../campaign/TeleportationCampaignBehavior)
- [相关：TeleportHeroAction](../../campaign-ext/TeleportHeroAction)
