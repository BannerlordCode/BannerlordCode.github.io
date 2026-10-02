---
title: "activitysystem 桶 — 活动状态机 TaleWorlds.ActivitySystem（尚未手写）"
description: "activitysystem 桶只对应 TaleWorlds.ActivitySystem，7 个 .cs 文件、6 个顶层类型。本页给出结论：这是 mod 最可能「用得上但没听说过」的小桶——它就是「玩家此刻在做什么」的跨系统状态机。"
---
# activitysystem：活动状态机（`TaleWorlds.ActivitySystem`）

> **本桶当前没有任何已撰写页面。** 但本桶的处境和别处不太一样：它不是「mod 用不到」，而是**「大多数 mod 不知道它存在」**。它小到全列只有 6 个类型，语义又足够独立，值得说清楚。

## 这个桶对应源码里的什么

`bannerlord-1.4.6/TaleWorlds.ActivitySystem/`：**7 个 `.cs` 文件、6 个顶层类型**（实测，含 `Properties/AssemblyInfo.cs`）。权威映射只有一条直落规则 `TaleWorlds.ActivitySystem` → `activitysystem`，没有子命名空间，**本桶内容就是这一个命名空间，一个类型不多一个类型不少**。

它解决的问题一句话说完：**「玩家现在正在做哪件事」需要是一个别的系统也能查到的状态，而不是各自猜。** 「在村庄里」「在战斗里」「在行军途中」「在对话」——这些状态原本散落在各处，谁想判断都得去问一堆对象。这个命名空间把它们收进一个带 id 的注册表。

## mod 什么时候会碰到它

诚实的结论：**日程 / 活动 / 作息类 mod 会直接需要它；其余 mod 用不上。**

典型场景：

1. **「NPC 每天几点在做什么」** —— 你要定义活动（睡觉、吃饭、训练、赶路），让地图上的行为、对话选项、部队 AI 都读同一份活动状态。这正是本桶的设计目的
2. **「根据玩家在做什么改变数值」** —— 疲劳、饥饿、心情这类按活动结算的机制
3. **「我要给一个活动加条件」** —— 判断某个活动此刻是否可用、能否开始

**用不到它的典型 mod**：加物品定义、加 UI 界面、改战斗逻辑、改战役行为。这些走 [core](../core)、[gui](../gui)、[mission](../mission)、[campaign](../campaign) 四个桶就够了。

**心智模型**：把 `Activity` 想成一个**带 id 的全局状态标签**。三个动词构成完整用法：

- `StartActivity(id)` — 声明「玩家从现在起在做这件事」
- `EndActivity(id, outcome)` — 声明「这件事结束了，结果如何」，`outcome` 用 `ActivityOutcome` 枚举
- `GetActivity(id)` — 问「这件事现在处于什么状态」

关键在于**所有 mod 共用这一个注册表**。你的活动 id 如果和别人的撞了，行为会互相干扰——这是本桶设计上没有隔离层的代价，取 id 时应当加自己的前缀。

## 一个必须知道的陷阱：默认实现是测试替身

`ActivityManager.ActivityService` 的**属性初始值是 `new TestActivityService()`**。也就是说，**在没有任何人注入真实实现之前，你调 `StartActivity` 走的是测试替身，不会真正生效**。

这带来一个正确的心智模型：`ActivityManager` 是个**门面（facade）**，它把静态调用转给 `ActivityService`；真正干活的是 `IActivityService` 的实现。所以：

- 你的 mod 应该**通过 `ActivityManager` 调用**，不要自己 `new` 一个 `IActivityService`
- 但也要知道，默认状态是个测试替身。真正的实现在游戏本体的启动流程里被注入；如果你在测试环境或过早的时机调用，看到「没反应」先怀疑这一点，而不是怀疑你的代码

`AchievementService`（见 [achievementsystem](../achievementsystem)）有**完全一样的模式**——两个桶是照着同一个门面 + 服务替身的设计做的。

## 待写清单（6 个，本桶可以全列）

每个名字都在 `bannerlord-1.4.6/TaleWorlds.ActivitySystem/` 核实过。这是全站最小的桶之一，清单即全部。

- `ActivityManager` — 静态门面，**本桶唯一该先写的类型**。已核实的成员：`ActivityService`（`IActivityService` 类型的静态属性，默认值是 `TestActivityService`）、`StartActivity(string activityId)` → `bool`、`EndActivity(string activityId, ActivityOutcome outcome)` → `bool`、`SetActivityAvailability(string activityId, bool isAvailable)` → `bool`、`GetActivity(string activityId)` → `Task<Activity>`、`GetActivityTransition(string activityId)` → `ActivityTransition`
- `IActivityService` — 真正干活的接口。已核实的成员：`StartActivity` / `EndActivity` / `SetAvailability` / `GetActivity`（→ `Task<Activity>`）/ `GetActivityTransition` / `IsInitializationCompleted` → `bool`。**写这页时要讲清它是给谁实现的**（游戏本体的启动流程），而不是给 mod 实现的扩展点
- `Activity` — 一个活动的状态对象；由 `GetActivity` 异步返回，所以拿到它之前要 `await`
- `ActivityOutcome` — 活动结束的结果枚举，`EndActivity` 的第二个参数
- `ActivityTransition` — 活动的状态迁移信息，由 `GetActivityTransition` 返回
- `TestActivityService` — `IActivityService` 的测试替身，就是 `ActivityService` 的默认值。**这一条要写进文档**，否则读者会以为自己代码写错了

**没有页面**。6 个类型全部列出是刻意的：这个桶小到「全列」和「节选」是同一件事，写页成本极低，收益也直观。真正要写的是「门面 + 服务替身」这个模式的说明，以及活动 id 命名冲突的提醒。

## 为什么现在还没有页面

1.4.6 的手写覆盖按 **mod 实际使用频率** 排序。本桶排在后段，理由是**它窄**：只有日程 / 活动类 mod 会主动想到它，而这类 mod 在总体里是少数。

但它排在最后一段不代表它不重要——它恰好是「小而独立」的典型：6 个类型、一个清晰的门面模式、没有被拆散到别处。和 [mission-ext](../mission-ext) 那种「因为太大所以排后面」不同，本桶排后面是因为**触达它的 mod 少**。一旦你确定要做日程类 mod，本桶应该**整桶写完**（6 页），不要只挑一两个。

**这一页不是占位符**——归属、6 个类型全清单、已核实的门面成员、默认实现是测试替身这个陷阱，都是从源码来的。

## 导航

- ↑ [API 参考首页](../) — 已手写覆盖到哪里
- ↑↑ [1.4.6 中文首页](../../) · [版本首页](../../../)
- ↔ [模块地图](../../architecture/module-map) · [SDK 分层概览](../../architecture/sdk-overview)
- ↔ English: [API](../../../en/api/)
- ↔ 跨版本：[1.4.5 API](../../../../v1.4.5/zh/api/) · [逐类对比](../../../../versions/)
