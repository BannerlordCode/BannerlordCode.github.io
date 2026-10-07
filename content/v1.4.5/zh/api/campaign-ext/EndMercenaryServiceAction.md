---
title: "EndMercenaryServiceAction"
description: "结束氏族雇佣兵服务的静态战役动作：翻转 Clan.IsUnderMercenaryService 标记并广播 OnMercenaryServiceEnded 事件，三个公开入口只影响事件携带的原因枚举。"
---

# EndMercenaryServiceAction

**命名空间：** `TaleWorlds.CampaignSystem.Actions`  
**模块：** `TaleWorlds.CampaignSystem`  
**类型：** `public static class`  
**源码：** `TaleWorlds.CampaignSystem/Actions/EndMercenaryServiceAction.cs`

## 概述

`EndMercenaryServiceAction` 是结束氏族雇佣兵服务的引擎侧入口。它接收一个 `Clan` 对象，把 `Clan.IsUnderMercenaryService` 标记翻转为 `false`，然后广播 `OnMercenaryServiceEnded` 事件。三个公开方法 `EndByDefault`、`EndByLeavingKingdom`、`EndByBecomingVassal` 的氏族状态改变完全相同——唯一区别是广播时携带的 `EndMercenaryServiceActionDetails` 枚举值不同，让监听者能区分服务结束的原因。

## 心智模型

把这个动作想成"翻旗子 + 发通知"两件事。旗子是 `Clan.IsUnderMercenaryService`（`Clan.cs:241`），通知是 `OnMercenaryServiceEnded` 事件。三个公开入口对应三种翻旗子的场景：

- `EndByDefault`（`EndMercenaryServiceAction.cs:18`）——常规结束，用于加入或创建王国时（`ChangeKingdomAction.cs:55`）。
- `EndByLeavingKingdom`（`EndMercenaryServiceAction.cs:23`）——离开王国时结束，用于离开王国、重新开始雇佣服务、以及旧档升级路径（`ChangeKingdomAction.cs:81`、`StartMercenaryServiceAction.cs:14`、`Clan.cs:818`）。
- `EndByBecomingVassal`（`EndMercenaryServiceAction.cs:28`）——成为附庸时结束。

关键认知：**枚举值只影响事件，不影响氏族状态。** 三个入口都委托给同一个私有 `Apply`（`EndMercenaryServiceAction.cs:12`），后者调用 `clan.EndMercenaryService(details == EndMercenaryServiceActionDetails.ApplyByLeavingKingdom)`（`EndMercenaryServiceAction.cs:14`）——注意只有 `ApplyByLeavingKingdom` 会把 `true` 传进去。而 `Clan.EndMercenaryService(bool)` 的方法体（`Clan.cs:1107`）目前只是 `IsUnderMercenaryService = false;`，那个布尔参数在方法体里并未被使用。所以从 mod 的角度看：选哪个入口，氏族状态变化一模一样，差别只在事件监听者收到的 detail 值。

## 怎么用

### 怎么拿到

- 源树路径：`TaleWorlds.CampaignSystem/TaleWorlds.CampaignSystem.Actions/EndMercenaryServiceAction.cs`（共 32 行）
- 入口：`EndMercenaryServiceAction.cs:18` 的 `EndByDefault(Clan)`、`EndMercenaryServiceAction.cs:23` 的 `EndByLeavingKingdom(Clan)`、`EndMercenaryServiceAction.cs:28` 的 `EndByBecomingVassal(Clan)`；三者是仅有的公开方法
- 氏族从哪来：`Clan` 的静态属性（如 `Clan.PlayerClan`、`Hero.MainHero.Clan`）、`Kingdom` 的 clan 列表等

### 典型用法

调用前应确认氏族当前确实处于雇佣状态，并选择与场景匹配的入口：

```csharp
// 氏族加入王国前结束雇佣（ChangeKingdomAction.cs:53-56 的真实代码）
if (clan.IsUnderMercenaryService)
{
    EndMercenaryServiceAction.EndByDefault(clan);
}
```

mod 侧的典型调用：

```csharp
// 自定义流程中让玩家的氏族结束雇佣
if (Clan.PlayerClan.IsUnderMercenaryService)
{
    EndMercenaryServiceAction.EndByLeavingKingdom(Clan.PlayerClan);
}
```

前置不变量：

- 动作不检查 `IsUnderMercenaryService`——对未处于雇佣状态的氏族调用也会广播事件。调用前应自行判断。
- 动作不触碰 `Clan.Kingdom`、`MercenaryAwardMultiplier` 等其他氏族状态，只翻雇佣标记。

### 坑

- **对未雇佣的氏族调用也会发事件。** 没有前置检查，监听者可能收到意料之外的 `OnMercenaryServiceEnded`。
- **三个入口的氏族状态变化完全相同。** 选错入口不会报错，只会让事件监听者收到错误的 detail 值。
- **`Clan.EndMercenaryService(bool)` 的布尔参数目前未被使用。** 不要假设传 `true` 会触发额外的"离开王国"清理逻辑。
- **事件是唯一的下游通知途径。** 如果 mod 需要响应雇佣结束，必须监听 `OnMercenaryServiceEnded`，而不是轮询 `IsUnderMercenaryService`。

## 关键成员

- `EndByDefault(Clan clan)` — `EndMercenaryServiceAction.cs:18` — 公开入口，以 `ApplyByDefault` 原因结束雇佣并广播事件。
- `EndByLeavingKingdom(Clan clan)` — `EndMercenaryServiceAction.cs:23` — 公开入口，以 `ApplyByLeavingKingdom` 原因结束雇佣；这是唯一会向 `Clan.EndMercenaryService` 传 `true` 的入口。
- `EndByBecomingVassal(Clan clan)` — `EndMercenaryServiceAction.cs:28` — 公开入口，以 `ApplyByBecomingVassal` 原因结束雇佣并广播事件。
- `Apply(Clan clan, EndMercenaryServiceActionDetails details)` — `EndMercenaryServiceAction.cs:12` — 私有实现：翻转 `IsUnderMercenaryService` → 广播 `OnMercenaryServiceEnded`。三个公开入口都委托给它。
- `EndMercenaryServiceActionDetails` 枚举 — `EndMercenaryServiceAction.cs:5` — `ApplyByDefault`（`EndMercenaryServiceAction.cs:7`）、`ApplyByLeavingKingdom`（`EndMercenaryServiceAction.cs:8`）、`ApplyByBecomingVassal`（`EndMercenaryServiceAction.cs:9`）三个值，只作为事件参数传递。

## 真实示例

旧档升级路径中结束雇佣（`Clan.cs:816-818`）：

```csharp
if (MBSaveLoad.IsUpdatingGameVersion && MBSaveLoad.LastLoadedGameVersion < ApplicationVersion.FromString("v1.1.3") && Kingdom == null && IsUnderMercenaryService)
{
    EndMercenaryServiceAction.EndByLeavingKingdom(this);
}
```

重新开始雇佣服务前先结束旧服务（`StartMercenaryServiceAction.cs:12-15`）：

```csharp
if (clan.IsUnderMercenaryService)
{
    EndMercenaryServiceAction.EndByLeavingKingdom(clan);
}
```

mod 侧监听雇佣结束事件（签名见 `CampaignEventReceiver.cs:1065`）：

```csharp
public override void OnMercenaryServiceEnded(Clan mercenaryClan, EndMercenaryServiceAction.EndMercenaryServiceActionDetails details)
{
    if (details == EndMercenaryServiceAction.EndMercenaryServiceActionDetails.ApplyByLeavingKingdom)
    {
        // 氏族因离开王国而结束雇佣
    }
}
```

## 参见

- [Clan](../../campaign/Clan) — `IsUnderMercenaryService` 属性（`Clan.cs:241`）与 `EndMercenaryService` 方法（`Clan.cs:1107`）的定义处。
- [StartMercenaryServiceAction](../StartMercenaryServiceAction) — 重新开始雇佣服务前先结束旧服务（`StartMercenaryServiceAction.cs:14`）。
- [ChangeKingdomAction](../ChangeKingdomAction) — 加入/创建王国或离开王国时结束雇佣（`ChangeKingdomAction.cs:55`、`ChangeKingdomAction.cs:81`）。
- [战役动作索引](../actions-index)

## 导航

- [本区域目录](../)
- [战役 API 根索引](../../campaign/)
