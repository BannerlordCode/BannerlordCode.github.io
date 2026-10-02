---
title: "MultiplayerPollComponent"
description: "TaleWorlds.MountAndBlade.MultiplayerPollComponent —— 命名空间 TaleWorlds.MountAndBlade 中的类，来自 bannerlord-1.4.7 源码的自动生成骨架页，仅收录成员签名。"
---

<!-- v147-skeleton -->

# MultiplayerPollComponent

**Namespace:** `TaleWorlds.MountAndBlade`  
**Module:** `TaleWorlds.MountAndBlade`  
**Type:** `public class MultiplayerPollComponent : MissionNetwork`  
**Base:** `MissionNetwork`  
**Source:** `TaleWorlds.MountAndBlade/MultiplayerPollComponent.cs`

## 概述

`MultiplayerPollComponent` 是 bannerlord-1.4.7 源码中命名空间 `TaleWorlds.MountAndBlade` 下的类，声明于模块目录 `TaleWorlds.MountAndBlade` 的 `TaleWorlds.MountAndBlade/MultiplayerPollComponent.cs`（第 12 行声明）。该声明访问级别为public（公开），修饰为无特殊修饰，基类型是 `MissionNetwork`；解析到的成员共 118 项，其中 24 项为 public 或 protected。

本页由 `tools/_v147_skeleton.mjs` 从上述源文件抽取生成，作用是提供该类型在 1.4.7 中的真实声明与签名清单。行为说明、调用时机与 mod 集成方式尚未撰写。

## 关键成员

下列签名按源码声明顺序逐字照抄（每项后的说明只描述签名形态，不描述业务用途）：

- `public MultiplayerPollComponent.MultiplayerPoll.Type PollType { get; }` — 属性，get，类型 MultiplayerPollComponent.MultiplayerPoll.Type
- `public bool IsOpen { get; private set; }` — 属性，get/set，类型 bool
- `protected MultiplayerPoll(MultiplayerGameType gameType, MultiplayerPollComponent.MultiplayerPoll.Type pollType, List<NetworkCommunicator> participantsToVote)` — 方法，3 个参数，返回 M
- `public virtual bool IsCancelled()` — 方法，0 个参数，返回 bool
- `public virtual List<NetworkCommunicator> GetPollProgressReceivers()` — 方法，0 个参数，返回 List<NetworkCommunicator>
- `public void Tick()` — 方法，0 个参数，返回 void
- `public void Close()` — 方法，0 个参数，返回 void
- `public void Cancel()` — 方法，0 个参数，返回 void
- `public bool ApplyVote(NetworkCommunicator peer, bool accepted)` — 方法，2 个参数，返回 bool
- `public bool GotEnoughAcceptVotesToEnd()` — 方法，0 个参数，返回 bool
- `public Action<MultiplayerPollComponent.MultiplayerPoll> OnClosedOnServer;` — 字段，类型 Action<MultiplayerPollComponent.MultiplayerPoll>
- `public Action<MultiplayerPollComponent.MultiplayerPoll> OnCancelledOnServer;` — 字段，类型 Action<MultiplayerPollComponent.MultiplayerPoll>
- `public int AcceptedCount;` — 字段，类型 int
- `public int RejectedCount;` — 字段，类型 int
- `public NetworkCommunicator TargetPeer { get; }` — 属性，get，类型 NetworkCommunicator
- `public KickPlayerPoll(MultiplayerGameType gameType, List<NetworkCommunicator> participantsToVote, NetworkCommunicator targetPeer, Team team)` — 方法，4 个参数，返回 K
- `public override bool IsCancelled()` — 方法，0 个参数，返回 bool
- `public override List<NetworkCommunicator> GetPollProgressReceivers()` — 方法，0 个参数，返回 List<NetworkCommunicator>
- `public const int RequestLimitPerPeer = 2;` — 字段，类型 int
- `public NetworkCommunicator TargetPeer { get; }` — 属性，get，类型 NetworkCommunicator
- `public BanPlayerPoll(MultiplayerGameType gameType, List<NetworkCommunicator> participantsToVote, NetworkCommunicator targetPeer)` — 方法，3 个参数，返回 B
- `public string GameType { get; }` — 属性，get，类型 string
- `public string MapName { get; }` — 属性，get，类型 string
- `public ChangeGamePoll(MultiplayerGameType currentGameType, List<NetworkCommunicator> participantsToVote, string gameType, string scene)` — 方法，4 个参数，返回 C


## 心智模型

把这一页当作源码的索引来读，而不是教程：上面的 24 条成员记录全部来自 `TaleWorlds.MountAndBlade/MultiplayerPollComponent.cs` 的真实声明，签名与返回类型是准确事实，而签名背后的行为、调用时机与失败边界本页尚未撰写，需要时请回到该源文件逐行核对。判断一个成员能否从 mod 侧直接调用，看的是 `public class MultiplayerPollComponent : MissionNetwork` 这一行的访问级别与修饰（当前为public（公开）、无特殊修饰）以及上面每项的 get/set 与参数个数，而不是本页的措辞。

## 参见

- 本目录索引：[`mission-ext` API](../)
- [ActionOptionData（同命名空间）](../ActionOptionData)
- [AgentAlarmStateWidget（同命名空间）](../AgentAlarmStateWidget)
- [AgentAmmoTextWidget（同命名空间）](../AgentAmmoTextWidget)
- [FastModeSubModule（campaign 桶）](../../campaign/FastModeSubModule)
- [IGameStarter（core-extra 桶）](../../core-extra/IGameStarter)
