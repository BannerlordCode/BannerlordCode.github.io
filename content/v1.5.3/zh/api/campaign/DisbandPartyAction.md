---
title: "DisbandPartyAction"
description: "战役层静态动作类，处理队伍解散的启动与取消流程，涉及军队关系与自定义名称状态。"
---

# DisbandPartyAction

**命名空间：** `TaleWorlds.CampaignSystem.Actions`
**Type:** `public static class DisbandPartyAction`
**Source:** `TaleWorlds.CampaignSystem/Actions/DisbandPartyAction.cs`

## 概述

`DisbandPartyAction` 是战役层的一个静态动作类，源文件 55 行，围绕「队伍解散」这一动作提供两个方向相反的入口。它涉及的状态变更包括：队伍的解散标记、队伍与军队的从属关系、队伍的自定义名称，以及通过 `CampaignEventDispatcher` 广播的解散相关事件。它不处理解散完成后的部队拆分或人员分配——那些逻辑在解散流程真正执行时由其它系统完成。两个入口共享同一个 `MobileParty` 参数，但一个启动解散、一个取消解散，方向相反。

## 心智模型

这个类有 2 个公开入口，没有 `private` 内部实现——两个方法各自独立完成任务。

`StartDisband(MobileParty disbandParty)` 是启动解散的入口。它按顺序做几件事：先检查队伍是否已在解散中（`IsDisbanding`），如果是就直接返回；再检查队伍是否还有成员，如果没有就直接走 `DestroyPartyAction.Apply` 销毁路径；然后检查是否有 `IDisbandPartyCampaignBehavior` 正在等待解散，如果是也直接返回；接着处理军队关系——如果队伍是军队领袖就调用 `DisbandArmyAction.ApplyByUnknownReason` 解散整支军队，否则把队伍从军队里摘出去；最后给队伍设置一个包含氏族名的自定义名称，并广播 `OnPartyDisbandStarted` 事件。

`CancelDisband(MobileParty disbandParty)` 是取消解散的入口。它做三件事：广播 `OnPartyDisbandCanceled` 事件、把 `IsDisbanding` 置回 `false`、清空自定义名称并调用 `SetMoveModeHold` 让队伍停下。两个入口的参数类型完全相同，区别只在于调用方向——一个进入解散状态、一个退出解散状态。

## 怎么用

### 怎么拿到它

静态类，直接 `DisbandPartyAction.StartDisband(party)` 或 `DisbandPartyAction.CancelDisband(party)` 调用；不需要实例。

### 典型用法

1. 玩家或 AI 决定解散一支队伍时，调用 `StartDisband` 启动解散流程。
2. 解散过程中玩家改变主意或条件不满足时，调用 `CancelDisband` 让队伍恢复原状。
3. 需要监听解散事件的系统通过 `CampaignEventDispatcher` 的 `OnPartyDisbandStarted` / `OnPartyDisbandCanceled` 回调接收通知。

### 最容易踩的坑

1. `StartDisband` 在队伍已处于解散中时会静默返回，不会抛异常——调用方不能假设调用后队伍一定进入了解散状态。
2. 队伍没有成员时 `StartDisband` 会走销毁路径而不是正常解散路径，后续的解散事件不会被广播。
3. `CancelDisband` 不检查队伍是否真的处于解散中——对未解散的队伍调用它会广播取消事件并重置名称，可能产生意外副作用。
4. `StartDisband` 会修改队伍的自定义名称，`CancelDisband` 会清空它——如果调用方依赖自定义名称做显示，需要注意这个副作用。

## 关键成员

- **StartDisband**（`DisbandPartyAction.cs:12`）— 公开入口，接收一个 `MobileParty`，按顺序检查解散前置条件、处理军队从属关系、设置自定义名称并广播解散开始事件；队伍已在解散中或正在等待解散时静默返回。
- **CancelDisband**（`DisbandPartyAction.cs:46`）— 公开入口，接收一个 `MobileParty`，广播解散取消事件、重置解散标记、清空自定义名称并让队伍停下；不检查队伍是否真的处于解散状态。

## 真实示例

```csharp
// 场景：玩家请求解散队伍
public static void DisbandPlayerParty(MobileParty party)
{
    if (party == null)
    {
        return;
    }
    DisbandPartyAction.StartDisband(party);
}

// 场景：解散过程中玩家改变主意
public static void AbortDisband(MobileParty party)
{
    if (party == null)
    {
        return;
    }
    DisbandPartyAction.CancelDisband(party);
}
```

## 参见

- [Campaign 事件与行为](../Campaign)
- [MobilePartyHelper 队伍辅助方法](../../core-extra/MobilePartyHelper)
- [PartyBaseHelper 队伍基类辅助方法](../../core-extra/PartyBaseHelper)
- [CampaignEventDispatcher 事件分发](../CampaignEventDispatcher)

## 导航

- ↑ [API 参考](../../) —— 本版本 API 层入口：按任务找页的路径表
- ↑ [v1.5.3 首页](../../../) —— 19 个桶的完整缺口表与覆盖现状
- ↔ [模块地图](../../../architecture/module-map) —— 确认某个类型属于哪一桶
